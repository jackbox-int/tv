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
                for (const g of d.addedNodes) g.tagName === "LINK" && g.rel === "modulepreload" && i(g)
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
var Ni = {
    exports: {}
};
(function(t, e) {
    (function() {
        var n = this,
            i = n._,
            a = Array.prototype,
            d = Object.prototype,
            g = Function.prototype,
            E = a.push,
            k = a.slice,
            A = d.toString,
            D = d.hasOwnProperty,
            V = Array.isArray,
            J = Object.keys,
            q = g.bind,
            G = Object.create,
            Q = function() {},
            v = function(l) {
                if (l instanceof v) return l;
                if (!(this instanceof v)) return new v(l);
                this._wrapped = l
            };
        t.exports && (e = t.exports = v), e._ = v, v.VERSION = "1.8.3";
        var M = function(l, m, S) {
                if (m === void 0) return l;
                switch (S == null ? 3 : S) {
                    case 1:
                        return function(R) {
                            return l.call(m, R)
                        };
                    case 2:
                        return function(R, P) {
                            return l.call(m, R, P)
                        };
                    case 3:
                        return function(R, P, $) {
                            return l.call(m, R, P, $)
                        };
                    case 4:
                        return function(R, P, $, ie) {
                            return l.call(m, R, P, $, ie)
                        }
                }
                return function() {
                    return l.apply(m, arguments)
                }
            },
            W = function(l, m, S) {
                return l == null ? v.identity : v.isFunction(l) ? M(l, m, S) : v.isObject(l) ? v.matcher(l) : v.property(l)
            };
        v.iteratee = function(l, m) {
            return W(l, m, 1 / 0)
        };
        var oe = function(l, m) {
                return function(S) {
                    var R = arguments.length;
                    if (R < 2 || S == null) return S;
                    for (var P = 1; P < R; P++)
                        for (var $ = arguments[P], ie = l($), ke = ie.length, de = 0; de < ke; de++) {
                            var De = ie[de];
                            (!m || S[De] === void 0) && (S[De] = $[De])
                        }
                    return S
                }
            },
            ae = function(l) {
                if (!v.isObject(l)) return {};
                if (G) return G(l);
                Q.prototype = l;
                var m = new Q;
                return Q.prototype = null, m
            },
            ye = function(l) {
                return function(m) {
                    return m == null ? void 0 : m[l]
                }
            },
            f = Math.pow(2, 53) - 1,
            _e = ye("length"),
            Oe = function(l) {
                var m = _e(l);
                return typeof m == "number" && m >= 0 && m <= f
            };
        v.each = v.forEach = function(l, m, S) {
            m = M(m, S);
            var R, P;
            if (Oe(l))
                for (R = 0, P = l.length; R < P; R++) m(l[R], R, l);
            else {
                var $ = v.keys(l);
                for (R = 0, P = $.length; R < P; R++) m(l[$[R]], $[R], l)
            }
            return l
        }, v.map = v.collect = function(l, m, S) {
            m = W(m, S);
            for (var R = !Oe(l) && v.keys(l), P = (R || l).length, $ = Array(P), ie = 0; ie < P; ie++) {
                var ke = R ? R[ie] : ie;
                $[ie] = m(l[ke], ke, l)
            }
            return $
        };

        function Pe(l) {
            function m(S, R, P, $, ie, ke) {
                for (; ie >= 0 && ie < ke; ie += l) {
                    var de = $ ? $[ie] : ie;
                    P = R(P, S[de], de, S)
                }
                return P
            }
            return function(S, R, P, $) {
                R = M(R, $, 4);
                var ie = !Oe(S) && v.keys(S),
                    ke = (ie || S).length,
                    de = l > 0 ? 0 : ke - 1;
                return arguments.length < 3 && (P = S[ie ? ie[de] : de], de += l), m(S, R, P, ie, de, ke)
            }
        }
        v.reduce = v.foldl = v.inject = Pe(1), v.reduceRight = v.foldr = Pe(-1), v.find = v.detect = function(l, m, S) {
            var R;
            if (Oe(l) ? R = v.findIndex(l, m, S) : R = v.findKey(l, m, S), R !== void 0 && R !== -1) return l[R]
        }, v.filter = v.select = function(l, m, S) {
            var R = [];
            return m = W(m, S), v.each(l, function(P, $, ie) {
                m(P, $, ie) && R.push(P)
            }), R
        }, v.reject = function(l, m, S) {
            return v.filter(l, v.negate(W(m)), S)
        }, v.every = v.all = function(l, m, S) {
            m = W(m, S);
            for (var R = !Oe(l) && v.keys(l), P = (R || l).length, $ = 0; $ < P; $++) {
                var ie = R ? R[$] : $;
                if (!m(l[ie], ie, l)) return !1
            }
            return !0
        }, v.some = v.any = function(l, m, S) {
            m = W(m, S);
            for (var R = !Oe(l) && v.keys(l), P = (R || l).length, $ = 0; $ < P; $++) {
                var ie = R ? R[$] : $;
                if (m(l[ie], ie, l)) return !0
            }
            return !1
        }, v.contains = v.includes = v.include = function(l, m, S, R) {
            return Oe(l) || (l = v.values(l)), (typeof S != "number" || R) && (S = 0), v.indexOf(l, m, S) >= 0
        }, v.invoke = function(l, m) {
            var S = k.call(arguments, 2),
                R = v.isFunction(m);
            return v.map(l, function(P) {
                var $ = R ? m : P[m];
                return $ == null ? $ : $.apply(P, S)
            })
        }, v.pluck = function(l, m) {
            return v.map(l, v.property(m))
        }, v.where = function(l, m) {
            return v.filter(l, v.matcher(m))
        }, v.findWhere = function(l, m) {
            return v.find(l, v.matcher(m))
        }, v.max = function(l, m, S) {
            var R = -1 / 0,
                P = -1 / 0,
                $, ie;
            if (m == null && l != null) {
                l = Oe(l) ? l : v.values(l);
                for (var ke = 0, de = l.length; ke < de; ke++) $ = l[ke], $ > R && (R = $)
            } else m = W(m, S), v.each(l, function(De, Me, nt) {
                ie = m(De, Me, nt), (ie > P || ie === -1 / 0 && R === -1 / 0) && (R = De, P = ie)
            });
            return R
        }, v.min = function(l, m, S) {
            var R = 1 / 0,
                P = 1 / 0,
                $, ie;
            if (m == null && l != null) {
                l = Oe(l) ? l : v.values(l);
                for (var ke = 0, de = l.length; ke < de; ke++) $ = l[ke], $ < R && (R = $)
            } else m = W(m, S), v.each(l, function(De, Me, nt) {
                ie = m(De, Me, nt), (ie < P || ie === 1 / 0 && R === 1 / 0) && (R = De, P = ie)
            });
            return R
        }, v.shuffle = function(l) {
            for (var m = Oe(l) ? l : v.values(l), S = m.length, R = Array(S), P = 0, $; P < S; P++) $ = v.random(0, P), $ !== P && (R[P] = R[$]), R[$] = m[P];
            return R
        }, v.sample = function(l, m, S) {
            return m == null || S ? (Oe(l) || (l = v.values(l)), l[v.random(l.length - 1)]) : v.shuffle(l).slice(0, Math.max(0, m))
        }, v.sortBy = function(l, m, S) {
            return m = W(m, S), v.pluck(v.map(l, function(R, P, $) {
                return {
                    value: R,
                    index: P,
                    criteria: m(R, P, $)
                }
            }).sort(function(R, P) {
                var $ = R.criteria,
                    ie = P.criteria;
                if ($ !== ie) {
                    if ($ > ie || $ === void 0) return 1;
                    if ($ < ie || ie === void 0) return -1
                }
                return R.index - P.index
            }), "value")
        };
        var lt = function(l) {
            return function(m, S, R) {
                var P = {};
                return S = W(S, R), v.each(m, function($, ie) {
                    var ke = S($, ie, m);
                    l(P, $, ke)
                }), P
            }
        };
        v.groupBy = lt(function(l, m, S) {
            v.has(l, S) ? l[S].push(m) : l[S] = [m]
        }), v.indexBy = lt(function(l, m, S) {
            l[S] = m
        }), v.countBy = lt(function(l, m, S) {
            v.has(l, S) ? l[S]++ : l[S] = 1
        }), v.toArray = function(l) {
            return l ? v.isArray(l) ? k.call(l) : Oe(l) ? v.map(l, v.identity) : v.values(l) : []
        }, v.size = function(l) {
            return l == null ? 0 : Oe(l) ? l.length : v.keys(l).length
        }, v.partition = function(l, m, S) {
            m = W(m, S);
            var R = [],
                P = [];
            return v.each(l, function($, ie, ke) {
                (m($, ie, ke) ? R : P).push($)
            }), [R, P]
        }, v.first = v.head = v.take = function(l, m, S) {
            if (l != null) return m == null || S ? l[0] : v.initial(l, l.length - m)
        }, v.initial = function(l, m, S) {
            return k.call(l, 0, Math.max(0, l.length - (m == null || S ? 1 : m)))
        }, v.last = function(l, m, S) {
            if (l != null) return m == null || S ? l[l.length - 1] : v.rest(l, Math.max(0, l.length - m))
        }, v.rest = v.tail = v.drop = function(l, m, S) {
            return k.call(l, m == null || S ? 1 : m)
        }, v.compact = function(l) {
            return v.filter(l, v.identity)
        };
        var $e = function(l, m, S, R) {
            for (var P = [], $ = 0, ie = R || 0, ke = _e(l); ie < ke; ie++) {
                var de = l[ie];
                if (Oe(de) && (v.isArray(de) || v.isArguments(de))) {
                    m || (de = $e(de, m, S));
                    var De = 0,
                        Me = de.length;
                    for (P.length += Me; De < Me;) P[$++] = de[De++]
                } else S || (P[$++] = de)
            }
            return P
        };
        v.flatten = function(l, m) {
            return $e(l, m, !1)
        }, v.without = function(l) {
            return v.difference(l, k.call(arguments, 1))
        }, v.uniq = v.unique = function(l, m, S, R) {
            v.isBoolean(m) || (R = S, S = m, m = !1), S != null && (S = W(S, R));
            for (var P = [], $ = [], ie = 0, ke = _e(l); ie < ke; ie++) {
                var de = l[ie],
                    De = S ? S(de, ie, l) : de;
                m ? ((!ie || $ !== De) && P.push(de), $ = De) : S ? v.contains($, De) || ($.push(De), P.push(de)) : v.contains(P, de) || P.push(de)
            }
            return P
        }, v.union = function() {
            return v.uniq($e(arguments, !0, !0))
        }, v.intersection = function(l) {
            for (var m = [], S = arguments.length, R = 0, P = _e(l); R < P; R++) {
                var $ = l[R];
                if (!v.contains(m, $)) {
                    for (var ie = 1; ie < S && v.contains(arguments[ie], $); ie++);
                    ie === S && m.push($)
                }
            }
            return m
        }, v.difference = function(l) {
            var m = $e(arguments, !0, !0, 1);
            return v.filter(l, function(S) {
                return !v.contains(m, S)
            })
        }, v.zip = function() {
            return v.unzip(arguments)
        }, v.unzip = function(l) {
            for (var m = l && v.max(l, _e).length || 0, S = Array(m), R = 0; R < m; R++) S[R] = v.pluck(l, R);
            return S
        }, v.object = function(l, m) {
            for (var S = {}, R = 0, P = _e(l); R < P; R++) m ? S[l[R]] = m[R] : S[l[R][0]] = l[R][1];
            return S
        };

        function Z(l) {
            return function(m, S, R) {
                S = W(S, R);
                for (var P = _e(m), $ = l > 0 ? 0 : P - 1; $ >= 0 && $ < P; $ += l)
                    if (S(m[$], $, m)) return $;
                return -1
            }
        }
        v.findIndex = Z(1), v.findLastIndex = Z(-1), v.sortedIndex = function(l, m, S, R) {
            S = W(S, R, 1);
            for (var P = S(m), $ = 0, ie = _e(l); $ < ie;) {
                var ke = Math.floor(($ + ie) / 2);
                S(l[ke]) < P ? $ = ke + 1 : ie = ke
            }
            return $
        };

        function Fe(l, m, S) {
            return function(R, P, $) {
                var ie = 0,
                    ke = _e(R);
                if (typeof $ == "number") l > 0 ? ie = $ >= 0 ? $ : Math.max($ + ke, ie) : ke = $ >= 0 ? Math.min($ + 1, ke) : $ + ke + 1;
                else if (S && $ && ke) return $ = S(R, P), R[$] === P ? $ : -1;
                if (P !== P) return $ = m(k.call(R, ie, ke), v.isNaN), $ >= 0 ? $ + ie : -1;
                for ($ = l > 0 ? ie : ke - 1; $ >= 0 && $ < ke; $ += l)
                    if (R[$] === P) return $;
                return -1
            }
        }
        v.indexOf = Fe(1, v.findIndex, v.sortedIndex), v.lastIndexOf = Fe(-1, v.findLastIndex), v.range = function(l, m, S) {
            m == null && (m = l || 0, l = 0), S = S || 1;
            for (var R = Math.max(Math.ceil((m - l) / S), 0), P = Array(R), $ = 0; $ < R; $++, l += S) P[$] = l;
            return P
        };
        var U = function(l, m, S, R, P) {
            if (!(R instanceof m)) return l.apply(S, P);
            var $ = ae(l.prototype),
                ie = l.apply($, P);
            return v.isObject(ie) ? ie : $
        };
        v.bind = function(l, m) {
            if (q && l.bind === q) return q.apply(l, k.call(arguments, 1));
            if (!v.isFunction(l)) throw new TypeError("Bind must be called on a function");
            var S = k.call(arguments, 2),
                R = function() {
                    return U(l, R, m, this, S.concat(k.call(arguments)))
                };
            return R
        }, v.partial = function(l) {
            var m = k.call(arguments, 1),
                S = function() {
                    for (var R = 0, P = m.length, $ = Array(P), ie = 0; ie < P; ie++) $[ie] = m[ie] === v ? arguments[R++] : m[ie];
                    for (; R < arguments.length;) $.push(arguments[R++]);
                    return U(l, S, this, this, $)
                };
            return S
        }, v.bindAll = function(l) {
            var m, S = arguments.length,
                R;
            if (S <= 1) throw new Error("bindAll must be passed function names");
            for (m = 1; m < S; m++) R = arguments[m], l[R] = v.bind(l[R], l);
            return l
        }, v.memoize = function(l, m) {
            var S = function(R) {
                var P = S.cache,
                    $ = "" + (m ? m.apply(this, arguments) : R);
                return v.has(P, $) || (P[$] = l.apply(this, arguments)), P[$]
            };
            return S.cache = {}, S
        }, v.delay = function(l, m) {
            var S = k.call(arguments, 2);
            return setTimeout(function() {
                return l.apply(null, S)
            }, m)
        }, v.defer = v.partial(v.delay, v, 1), v.throttle = function(l, m, S) {
            var R, P, $, ie = null,
                ke = 0;
            S || (S = {});
            var de = function() {
                ke = S.leading === !1 ? 0 : v.now(), ie = null, $ = l.apply(R, P), ie || (R = P = null)
            };
            return function() {
                var De = v.now();
                !ke && S.leading === !1 && (ke = De);
                var Me = m - (De - ke);
                return R = this, P = arguments, Me <= 0 || Me > m ? (ie && (clearTimeout(ie), ie = null), ke = De, $ = l.apply(R, P), ie || (R = P = null)) : !ie && S.trailing !== !1 && (ie = setTimeout(de, Me)), $
            }
        }, v.debounce = function(l, m, S) {
            var R, P, $, ie, ke, de = function() {
                var De = v.now() - ie;
                De < m && De >= 0 ? R = setTimeout(de, m - De) : (R = null, S || (ke = l.apply($, P), R || ($ = P = null)))
            };
            return function() {
                $ = this, P = arguments, ie = v.now();
                var De = S && !R;
                return R || (R = setTimeout(de, m)), De && (ke = l.apply($, P), $ = P = null), ke
            }
        }, v.wrap = function(l, m) {
            return v.partial(m, l)
        }, v.negate = function(l) {
            return function() {
                return !l.apply(this, arguments)
            }
        }, v.compose = function() {
            var l = arguments,
                m = l.length - 1;
            return function() {
                for (var S = m, R = l[m].apply(this, arguments); S--;) R = l[S].call(this, R);
                return R
            }
        }, v.after = function(l, m) {
            return function() {
                if (--l < 1) return m.apply(this, arguments)
            }
        }, v.before = function(l, m) {
            var S;
            return function() {
                return --l > 0 && (S = m.apply(this, arguments)), l <= 1 && (m = null), S
            }
        }, v.once = v.partial(v.before, 2);
        var le = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            Ae = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];

        function be(l, m) {
            var S = Ae.length,
                R = l.constructor,
                P = v.isFunction(R) && R.prototype || d,
                $ = "constructor";
            for (v.has(l, $) && !v.contains(m, $) && m.push($); S--;) $ = Ae[S], $ in l && l[$] !== P[$] && !v.contains(m, $) && m.push($)
        }
        v.keys = function(l) {
            if (!v.isObject(l)) return [];
            if (J) return J(l);
            var m = [];
            for (var S in l) v.has(l, S) && m.push(S);
            return le && be(l, m), m
        }, v.allKeys = function(l) {
            if (!v.isObject(l)) return [];
            var m = [];
            for (var S in l) m.push(S);
            return le && be(l, m), m
        }, v.values = function(l) {
            for (var m = v.keys(l), S = m.length, R = Array(S), P = 0; P < S; P++) R[P] = l[m[P]];
            return R
        }, v.mapObject = function(l, m, S) {
            m = W(m, S);
            for (var R = v.keys(l), P = R.length, $ = {}, ie, ke = 0; ke < P; ke++) ie = R[ke], $[ie] = m(l[ie], ie, l);
            return $
        }, v.pairs = function(l) {
            for (var m = v.keys(l), S = m.length, R = Array(S), P = 0; P < S; P++) R[P] = [m[P], l[m[P]]];
            return R
        }, v.invert = function(l) {
            for (var m = {}, S = v.keys(l), R = 0, P = S.length; R < P; R++) m[l[S[R]]] = S[R];
            return m
        }, v.functions = v.methods = function(l) {
            var m = [];
            for (var S in l) v.isFunction(l[S]) && m.push(S);
            return m.sort()
        }, v.extend = oe(v.allKeys), v.extendOwn = v.assign = oe(v.keys), v.findKey = function(l, m, S) {
            m = W(m, S);
            for (var R = v.keys(l), P, $ = 0, ie = R.length; $ < ie; $++)
                if (P = R[$], m(l[P], P, l)) return P
        }, v.pick = function(l, m, S) {
            var R = {},
                P = l,
                $, ie;
            if (P == null) return R;
            v.isFunction(m) ? (ie = v.allKeys(P), $ = M(m, S)) : (ie = $e(arguments, !1, !1, 1), $ = function(nt, Ct, rn) {
                return Ct in rn
            }, P = Object(P));
            for (var ke = 0, de = ie.length; ke < de; ke++) {
                var De = ie[ke],
                    Me = P[De];
                $(Me, De, P) && (R[De] = Me)
            }
            return R
        }, v.omit = function(l, m, S) {
            if (v.isFunction(m)) m = v.negate(m);
            else {
                var R = v.map($e(arguments, !1, !1, 1), String);
                m = function(P, $) {
                    return !v.contains(R, $)
                }
            }
            return v.pick(l, m, S)
        }, v.defaults = oe(v.allKeys, !0), v.create = function(l, m) {
            var S = ae(l);
            return m && v.extendOwn(S, m), S
        }, v.clone = function(l) {
            return v.isObject(l) ? v.isArray(l) ? l.slice() : v.extend({}, l) : l
        }, v.tap = function(l, m) {
            return m(l), l
        }, v.isMatch = function(l, m) {
            var S = v.keys(m),
                R = S.length;
            if (l == null) return !R;
            for (var P = Object(l), $ = 0; $ < R; $++) {
                var ie = S[$];
                if (m[ie] !== P[ie] || !(ie in P)) return !1
            }
            return !0
        };
        var we = function(l, m, S, R) {
            if (l === m) return l !== 0 || 1 / l === 1 / m;
            if (l == null || m == null) return l === m;
            l instanceof v && (l = l._wrapped), m instanceof v && (m = m._wrapped);
            var P = A.call(l);
            if (P !== A.call(m)) return !1;
            switch (P) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + l == "" + m;
                case "[object Number]":
                    return +l != +l ? +m != +m : +l == 0 ? 1 / +l === 1 / m : +l == +m;
                case "[object Date]":
                case "[object Boolean]":
                    return +l == +m
            }
            var $ = P === "[object Array]";
            if (!$) {
                if (typeof l != "object" || typeof m != "object") return !1;
                var ie = l.constructor,
                    ke = m.constructor;
                if (ie !== ke && !(v.isFunction(ie) && ie instanceof ie && v.isFunction(ke) && ke instanceof ke) && "constructor" in l && "constructor" in m) return !1
            }
            S = S || [], R = R || [];
            for (var de = S.length; de--;)
                if (S[de] === l) return R[de] === m;
            if (S.push(l), R.push(m), $) {
                if (de = l.length, de !== m.length) return !1;
                for (; de--;)
                    if (!we(l[de], m[de], S, R)) return !1
            } else {
                var De = v.keys(l),
                    Me;
                if (de = De.length, v.keys(m).length !== de) return !1;
                for (; de--;)
                    if (Me = De[de], !(v.has(m, Me) && we(l[Me], m[Me], S, R))) return !1
            }
            return S.pop(), R.pop(), !0
        };
        v.isEqual = function(l, m) {
            return we(l, m)
        }, v.isEmpty = function(l) {
            return l == null ? !0 : Oe(l) && (v.isArray(l) || v.isString(l) || v.isArguments(l)) ? l.length === 0 : v.keys(l).length === 0
        }, v.isElement = function(l) {
            return !!(l && l.nodeType === 1)
        }, v.isArray = V || function(l) {
            return A.call(l) === "[object Array]"
        }, v.isObject = function(l) {
            var m = typeof l;
            return m === "function" || m === "object" && !!l
        }, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(l) {
            v["is" + l] = function(m) {
                return A.call(m) === "[object " + l + "]"
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
        }, v.has = function(l, m) {
            return l != null && D.call(l, m)
        }, v.noConflict = function() {
            return n._ = i, this
        }, v.identity = function(l) {
            return l
        }, v.constant = function(l) {
            return function() {
                return l
            }
        }, v.noop = function() {}, v.property = ye, v.propertyOf = function(l) {
            return l == null ? function() {} : function(m) {
                return l[m]
            }
        }, v.matcher = v.matches = function(l) {
            return l = v.extendOwn({}, l),
                function(m) {
                    return v.isMatch(m, l)
                }
        }, v.times = function(l, m, S) {
            var R = Array(Math.max(0, l));
            m = M(m, S, 1);
            for (var P = 0; P < l; P++) R[P] = m(P);
            return R
        }, v.random = function(l, m) {
            return m == null && (m = l, l = 0), l + Math.floor(Math.random() * (m - l + 1))
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
                var m = function($) {
                        return l[$]
                    },
                    S = "(?:" + v.keys(l).join("|") + ")",
                    R = RegExp(S),
                    P = RegExp(S, "g");
                return function($) {
                    return $ = $ == null ? "" : "" + $, R.test($) ? $.replace(P, m) : $
                }
            };
        v.escape = Te(he), v.unescape = Te(Se), v.result = function(l, m, S) {
            var R = l == null ? void 0 : l[m];
            return R === void 0 && (R = S), v.isFunction(R) ? R.call(l) : R
        };
        var Be = 0;
        v.uniqueId = function(l) {
            var m = ++Be + "";
            return l ? l + m : m
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
            Ut = function(l) {
                return "\\" + dt[l]
            };
        v.template = function(l, m, S) {
            !m && S && (m = S), m = v.defaults({}, m, v.templateSettings);
            var R = RegExp([(m.escape || Ke).source, (m.interpolate || Ke).source, (m.evaluate || Ke).source].join("|") + "|$", "g"),
                P = 0,
                $ = "__p+='";
            l.replace(R, function(De, Me, nt, Ct, rn) {
                return $ += l.slice(P, rn).replace($t, Ut), P = rn + De.length, Me ? $ += `'+
((__t=(` + Me + `))==null?'':_.escape(__t))+
'` : nt ? $ += `'+
((__t=(` + nt + `))==null?'':__t)+
'` : Ct && ($ += `';
` + Ct + `
__p+='`), De
            }), $ += `';
`, m.variable || ($ = `with(obj||{}){
` + $ + `}
`), $ = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + $ + `return __p;
`;
            try {
                var ie = new Function(m.variable || "obj", "_", $)
            } catch (De) {
                throw De.source = $, De
            }
            var ke = function(De) {
                    return ie.call(this, De, v)
                },
                de = m.variable || "obj";
            return ke.source = "function(" + de + `){
` + $ + "}", ke
        }, v.chain = function(l) {
            var m = v(l);
            return m._chain = !0, m
        };
        var _ = function(l, m) {
            return l._chain ? v(m).chain() : m
        };
        v.mixin = function(l) {
            v.each(v.functions(l), function(m) {
                var S = v[m] = l[m];
                v.prototype[m] = function() {
                    var R = [this._wrapped];
                    return E.apply(R, arguments), _(this, S.apply(v, R))
                }
            })
        }, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(l) {
            var m = a[l];
            v.prototype[l] = function() {
                var S = this._wrapped;
                return m.apply(S, arguments), (l === "shift" || l === "splice") && S.length === 0 && delete S[0], _(this, S)
            }
        }), v.each(["concat", "join", "slice"], function(l) {
            var m = a[l];
            v.prototype[l] = function() {
                return _(this, m.apply(this._wrapped, arguments))
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
            a = Object.getPrototypeOf,
            d = i.slice,
            g = i.flat ? function(r) {
                return i.flat.call(r)
            } : function(r) {
                return i.concat.apply([], r)
            },
            E = i.push,
            k = i.indexOf,
            A = {},
            D = A.toString,
            V = A.hasOwnProperty,
            J = V.toString,
            q = J.call(Object),
            G = {},
            Q = function(s) {
                return typeof s == "function" && typeof s.nodeType != "number" && typeof s.item != "function"
            },
            v = function(s) {
                return s != null && s === s.window
            },
            M = e.document,
            W = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function oe(r, s, u) {
            u = u || M;
            var p, w, x = u.createElement("script");
            if (x.text = r, s)
                for (p in W) w = s[p] || s.getAttribute && s.getAttribute(p), w && x.setAttribute(p, w);
            u.head.appendChild(x).parentNode.removeChild(x)
        }

        function ae(r) {
            return r == null ? r + "" : typeof r == "object" || typeof r == "function" ? A[D.call(r)] || "object" : typeof r
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
            push: E,
            sort: i.sort,
            splice: i.splice
        }, f.extend = f.fn.extend = function() {
            var r, s, u, p, w, x, T = arguments[0] || {},
                z = 1,
                H = arguments.length,
                te = !1;
            for (typeof T == "boolean" && (te = T, T = arguments[z] || {}, z++), typeof T != "object" && !Q(T) && (T = {}), z === H && (T = this, z--); z < H; z++)
                if ((r = arguments[z]) != null)
                    for (s in r) p = r[s], !(s === "__proto__" || T === p) && (te && p && (f.isPlainObject(p) || (w = Array.isArray(p))) ? (u = T[s], w && !Array.isArray(u) ? x = [] : !w && !f.isPlainObject(u) ? x = {} : x = u, w = !1, T[s] = f.extend(te, x, p)) : p !== void 0 && (T[s] = p));
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
                return !r || D.call(r) !== "[object Object]" ? !1 : (s = a(r), s ? (u = V.call(s, "constructor") && s.constructor, typeof u == "function" && J.call(u) === q) : !0)
            },
            isEmptyObject: function(r) {
                var s;
                for (s in r) return !1;
                return !0
            },
            globalEval: function(r, s, u) {
                oe(r, {
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
                return r != null && (_e(Object(r)) ? f.merge(u, typeof r == "string" ? [r] : r) : E.call(u, r)), u
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
                return g(T)
            },
            guid: 1,
            support: G
        }), typeof Symbol == "function" && (f.fn[Symbol.iterator] = i[Symbol.iterator]), f.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(r, s) {
            A["[object " + s + "]"] = s.toLowerCase()
        });

        function _e(r) {
            var s = !!r && "length" in r && r.length,
                u = ae(r);
            return Q(r) || v(r) ? !1 : u === "array" || s === 0 || typeof s == "number" && s > 0 && s - 1 in r
        }
        var Oe = function(r) {
            var s, u, p, w, x, T, z, H, te, ce, Ce, re, ue, Ue, rt, je, zt, Nt, un, _t = "sizzle" + 1 * new Date,
                et = r.document,
                on = 0,
                ft = 0,
                Dt = Yi(),
                Si = Yi(),
                qi = Yi(),
                hn = Yi(),
                Kn = function(I, F) {
                    return I === F && (Ce = !0), 0
                },
                Jn = {}.hasOwnProperty,
                an = [],
                Mn = an.pop,
                vn = an.push,
                Cn = an.push,
                _s = an.slice,
                Qn = function(I, F) {
                    for (var K = 0, fe = I.length; K < fe; K++)
                        if (I[K] === F) return K;
                    return -1
                },
                Fr = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                gt = "[\\x20\\t\\r\\n\\f]",
                Zn = "(?:\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                Ss = "\\[" + gt + "*(" + Zn + ")(?:" + gt + "*([*^$|!~]?=)" + gt + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Zn + "))|)" + gt + "*\\]",
                zr = ":(" + Zn + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Ss + ")*)|.*)\\)|)",
                ks = new RegExp(gt + "+", "g"),
                ki = new RegExp("^" + gt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + gt + "+$", "g"),
                Ts = new RegExp("^" + gt + "*," + gt + "*"),
                As = new RegExp("^" + gt + "*([>+~]|" + gt + ")" + gt + "*"),
                Bo = new RegExp(gt + "|>"),
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
                Go = /^h\d$/i,
                Ti = /^[^{]+\{\s*\[native \w/,
                Uo = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Hr = /[+~]/,
                Tn = new RegExp("\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\([^\\r\\n\\f])", "g"),
                xn = function(I, F) {
                    var K = "0x" + I.slice(1) - 65536;
                    return F || (K < 0 ? String.fromCharCode(K + 65536) : String.fromCharCode(K >> 10 | 55296, K & 1023 | 56320))
                },
                Gr = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Os = function(I, F) {
                    return F ? I === "\0" ? "\uFFFD" : I.slice(0, -1) + "\\" + I.charCodeAt(I.length - 1).toString(16) + " " : "\\" + I
                },
                Rs = function() {
                    re()
                },
                Wo = Zi(function(I) {
                    return I.disabled === !0 && I.nodeName.toLowerCase() === "fieldset"
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                Cn.apply(an = _s.call(et.childNodes), et.childNodes), an[et.childNodes.length].nodeType
            } catch {
                Cn = {
                    apply: an.length ? function(F, K) {
                        vn.apply(F, _s.call(K))
                    } : function(F, K) {
                        for (var fe = F.length, ne = 0; F[fe++] = K[ne++];);
                        F.length = fe - 1
                    }
                }
            }

            function St(I, F, K, fe) {
                var ne, ve, Ee, Re, Le, ze, Ge, Xe = F && F.ownerDocument,
                    ht = F ? F.nodeType : 9;
                if (K = K || [], typeof I != "string" || !I || ht !== 1 && ht !== 9 && ht !== 11) return K;
                if (!fe && (re(F), F = F || ue, rt)) {
                    if (ht !== 11 && (Le = Uo.exec(I)))
                        if (ne = Le[1]) {
                            if (ht === 9)
                                if (Ee = F.getElementById(ne)) {
                                    if (Ee.id === ne) return K.push(Ee), K
                                } else return K;
                            else if (Xe && (Ee = Xe.getElementById(ne)) && un(F, Ee) && Ee.id === ne) return K.push(Ee), K
                        } else {
                            if (Le[2]) return Cn.apply(K, F.getElementsByTagName(I)), K;
                            if ((ne = Le[3]) && u.getElementsByClassName && F.getElementsByClassName) return Cn.apply(K, F.getElementsByClassName(ne)), K
                        } if (u.qsa && !hn[I + " "] && (!je || !je.test(I)) && (ht !== 1 || F.nodeName.toLowerCase() !== "object")) {
                        if (Ge = I, Xe = F, ht === 1 && (Bo.test(I) || As.test(I))) {
                            for (Xe = Hr.test(I) && Ur(F.parentNode) || F, (Xe !== F || !u.scope) && ((Re = F.getAttribute("id")) ? Re = Re.replace(Gr, Os) : F.setAttribute("id", Re = _t)), ze = T(I), ve = ze.length; ve--;) ze[ve] = (Re ? "#" + Re : ":scope") + " " + Qi(ze[ve]);
                            Ge = ze.join(",")
                        }
                        try {
                            return Cn.apply(K, Xe.querySelectorAll(Ge)), K
                        } catch {
                            hn(I, !0)
                        } finally {
                            Re === _t && F.removeAttribute("id")
                        }
                    }
                }
                return H(I.replace(ki, "$1"), F, K, fe)
            }

            function Yi() {
                var I = [];

                function F(K, fe) {
                    return I.push(K + " ") > p.cacheLength && delete F[I.shift()], F[K + " "] = fe
                }
                return F
            }

            function dn(I) {
                return I[_t] = !0, I
            }

            function yn(I) {
                var F = ue.createElement("fieldset");
                try {
                    return !!I(F)
                } catch {
                    return !1
                } finally {
                    F.parentNode && F.parentNode.removeChild(F), F = null
                }
            }

            function Ki(I, F) {
                for (var K = I.split("|"), fe = K.length; fe--;) p.attrHandle[K[fe]] = F
            }

            function Ji(I, F) {
                var K = F && I,
                    fe = K && I.nodeType === 1 && F.nodeType === 1 && I.sourceIndex - F.sourceIndex;
                if (fe) return fe;
                if (K) {
                    for (; K = K.nextSibling;)
                        if (K === F) return -1
                }
                return I ? 1 : -1
            }

            function qo(I) {
                return function(F) {
                    var K = F.nodeName.toLowerCase();
                    return K === "input" && F.type === I
                }
            }

            function Xo(I) {
                return function(F) {
                    var K = F.nodeName.toLowerCase();
                    return (K === "input" || K === "button") && F.type === I
                }
            }

            function Is(I) {
                return function(F) {
                    return "form" in F ? F.parentNode && F.disabled === !1 ? "label" in F ? "label" in F.parentNode ? F.parentNode.disabled === I : F.disabled === I : F.isDisabled === I || F.isDisabled !== !I && Wo(F) === I : F.disabled === I : "label" in F ? F.disabled === I : !1
                }
            }

            function An(I) {
                return dn(function(F) {
                    return F = +F, dn(function(K, fe) {
                        for (var ne, ve = I([], K.length, F), Ee = ve.length; Ee--;) K[ne = ve[Ee]] && (K[ne] = !(fe[ne] = K[ne]))
                    })
                })
            }

            function Ur(I) {
                return I && typeof I.getElementsByTagName < "u" && I
            }
            u = St.support = {}, x = St.isXML = function(I) {
                var F = I && I.namespaceURI,
                    K = I && (I.ownerDocument || I).documentElement;
                return !zo.test(F || K && K.nodeName || "HTML")
            }, re = St.setDocument = function(I) {
                var F, K, fe = I ? I.ownerDocument || I : et;
                return fe == ue || fe.nodeType !== 9 || !fe.documentElement || (ue = fe, Ue = ue.documentElement, rt = !x(ue), et != ue && (K = ue.defaultView) && K.top !== K && (K.addEventListener ? K.addEventListener("unload", Rs, !1) : K.attachEvent && K.attachEvent("onunload", Rs)), u.scope = yn(function(ne) {
                    return Ue.appendChild(ne).appendChild(ue.createElement("div")), typeof ne.querySelectorAll < "u" && !ne.querySelectorAll(":scope fieldset div").length
                }), u.attributes = yn(function(ne) {
                    return ne.className = "i", !ne.getAttribute("className")
                }), u.getElementsByTagName = yn(function(ne) {
                    return ne.appendChild(ue.createComment("")), !ne.getElementsByTagName("*").length
                }), u.getElementsByClassName = Ti.test(ue.getElementsByClassName), u.getById = yn(function(ne) {
                    return Ue.appendChild(ne).id = _t, !ue.getElementsByName || !ue.getElementsByName(_t).length
                }), u.getById ? (p.filter.ID = function(ne) {
                    var ve = ne.replace(Tn, xn);
                    return function(Ee) {
                        return Ee.getAttribute("id") === ve
                    }
                }, p.find.ID = function(ne, ve) {
                    if (typeof ve.getElementById < "u" && rt) {
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
                    if (typeof ve.getElementById < "u" && rt) {
                        var Ee, Re, Le, ze = ve.getElementById(ne);
                        if (ze) {
                            if (Ee = ze.getAttributeNode("id"), Ee && Ee.value === ne) return [ze];
                            for (Le = ve.getElementsByName(ne), Re = 0; ze = Le[Re++];)
                                if (Ee = ze.getAttributeNode("id"), Ee && Ee.value === ne) return [ze]
                        }
                        return []
                    }
                }), p.find.TAG = u.getElementsByTagName ? function(ne, ve) {
                    if (typeof ve.getElementsByTagName < "u") return ve.getElementsByTagName(ne);
                    if (u.qsa) return ve.querySelectorAll(ne)
                } : function(ne, ve) {
                    var Ee, Re = [],
                        Le = 0,
                        ze = ve.getElementsByTagName(ne);
                    if (ne === "*") {
                        for (; Ee = ze[Le++];) Ee.nodeType === 1 && Re.push(Ee);
                        return Re
                    }
                    return ze
                }, p.find.CLASS = u.getElementsByClassName && function(ne, ve) {
                    if (typeof ve.getElementsByClassName < "u" && rt) return ve.getElementsByClassName(ne)
                }, zt = [], je = [], (u.qsa = Ti.test(ue.querySelectorAll)) && (yn(function(ne) {
                    var ve;
                    Ue.appendChild(ne).innerHTML = "<a id='" + _t + "'></a><select id='" + _t + "-\r\\' msallowcapture=''><option selected=''></option></select>", ne.querySelectorAll("[msallowcapture^='']").length && je.push("[*^$]=" + gt + `*(?:''|"")`), ne.querySelectorAll("[selected]").length || je.push("\\[" + gt + "*(?:value|" + Fr + ")"), ne.querySelectorAll("[id~=" + _t + "-]").length || je.push("~="), ve = ue.createElement("input"), ve.setAttribute("name", ""), ne.appendChild(ve), ne.querySelectorAll("[name='']").length || je.push("\\[" + gt + "*name" + gt + "*=" + gt + `*(?:''|"")`), ne.querySelectorAll(":checked").length || je.push(":checked"), ne.querySelectorAll("a#" + _t + "+*").length || je.push(".#.+[+~]"), ne.querySelectorAll("\\\f"), je.push("[\\r\\n\\f]")
                }), yn(function(ne) {
                    ne.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var ve = ue.createElement("input");
                    ve.setAttribute("type", "hidden"), ne.appendChild(ve).setAttribute("name", "D"), ne.querySelectorAll("[name=d]").length && je.push("name" + gt + "*[*^$|!~]?="), ne.querySelectorAll(":enabled").length !== 2 && je.push(":enabled", ":disabled"), Ue.appendChild(ne).disabled = !0, ne.querySelectorAll(":disabled").length !== 2 && je.push(":enabled", ":disabled"), ne.querySelectorAll("*,:x"), je.push(",.*:")
                })), (u.matchesSelector = Ti.test(Nt = Ue.matches || Ue.webkitMatchesSelector || Ue.mozMatchesSelector || Ue.oMatchesSelector || Ue.msMatchesSelector)) && yn(function(ne) {
                    u.disconnectedMatch = Nt.call(ne, "*"), Nt.call(ne, "[s!='']:x"), zt.push("!=", zr)
                }), je = je.length && new RegExp(je.join("|")), zt = zt.length && new RegExp(zt.join("|")), F = Ti.test(Ue.compareDocumentPosition), un = F || Ti.test(Ue.contains) ? function(ne, ve) {
                    var Ee = ne.nodeType === 9 ? ne.documentElement : ne,
                        Re = ve && ve.parentNode;
                    return ne === Re || !!(Re && Re.nodeType === 1 && (Ee.contains ? Ee.contains(Re) : ne.compareDocumentPosition && ne.compareDocumentPosition(Re) & 16))
                } : function(ne, ve) {
                    if (ve) {
                        for (; ve = ve.parentNode;)
                            if (ve === ne) return !0
                    }
                    return !1
                }, Kn = F ? function(ne, ve) {
                    if (ne === ve) return Ce = !0, 0;
                    var Ee = !ne.compareDocumentPosition - !ve.compareDocumentPosition;
                    return Ee || (Ee = (ne.ownerDocument || ne) == (ve.ownerDocument || ve) ? ne.compareDocumentPosition(ve) : 1, Ee & 1 || !u.sortDetached && ve.compareDocumentPosition(ne) === Ee ? ne == ue || ne.ownerDocument == et && un(et, ne) ? -1 : ve == ue || ve.ownerDocument == et && un(et, ve) ? 1 : ce ? Qn(ce, ne) - Qn(ce, ve) : 0 : Ee & 4 ? -1 : 1)
                } : function(ne, ve) {
                    if (ne === ve) return Ce = !0, 0;
                    var Ee, Re = 0,
                        Le = ne.parentNode,
                        ze = ve.parentNode,
                        Ge = [ne],
                        Xe = [ve];
                    if (!Le || !ze) return ne == ue ? -1 : ve == ue ? 1 : Le ? -1 : ze ? 1 : ce ? Qn(ce, ne) - Qn(ce, ve) : 0;
                    if (Le === ze) return Ji(ne, ve);
                    for (Ee = ne; Ee = Ee.parentNode;) Ge.unshift(Ee);
                    for (Ee = ve; Ee = Ee.parentNode;) Xe.unshift(Ee);
                    for (; Ge[Re] === Xe[Re];) Re++;
                    return Re ? Ji(Ge[Re], Xe[Re]) : Ge[Re] == et ? -1 : Xe[Re] == et ? 1 : 0
                }), ue
            }, St.matches = function(I, F) {
                return St(I, null, null, F)
            }, St.matchesSelector = function(I, F) {
                if (re(I), u.matchesSelector && rt && !hn[F + " "] && (!zt || !zt.test(F)) && (!je || !je.test(F))) try {
                    var K = Nt.call(I, F);
                    if (K || u.disconnectedMatch || I.document && I.document.nodeType !== 11) return K
                } catch {
                    hn(F, !0)
                }
                return St(F, ue, null, [I]).length > 0
            }, St.contains = function(I, F) {
                return (I.ownerDocument || I) != ue && re(I), un(I, F)
            }, St.attr = function(I, F) {
                (I.ownerDocument || I) != ue && re(I);
                var K = p.attrHandle[F.toLowerCase()],
                    fe = K && Jn.call(p.attrHandle, F.toLowerCase()) ? K(I, F, !rt) : void 0;
                return fe !== void 0 ? fe : u.attributes || !rt ? I.getAttribute(F) : (fe = I.getAttributeNode(F)) && fe.specified ? fe.value : null
            }, St.escape = function(I) {
                return (I + "").replace(Gr, Os)
            }, St.error = function(I) {
                throw new Error("Syntax error, unrecognized expression: " + I)
            }, St.uniqueSort = function(I) {
                var F, K = [],
                    fe = 0,
                    ne = 0;
                if (Ce = !u.detectDuplicates, ce = !u.sortStable && I.slice(0), I.sort(Kn), Ce) {
                    for (; F = I[ne++];) F === I[ne] && (fe = K.push(ne));
                    for (; fe--;) I.splice(K[fe], 1)
                }
                return ce = null, I
            }, w = St.getText = function(I) {
                var F, K = "",
                    fe = 0,
                    ne = I.nodeType;
                if (ne) {
                    if (ne === 1 || ne === 9 || ne === 11) {
                        if (typeof I.textContent == "string") return I.textContent;
                        for (I = I.firstChild; I; I = I.nextSibling) K += w(I)
                    } else if (ne === 3 || ne === 4) return I.nodeValue
                } else
                    for (; F = I[fe++];) K += w(F);
                return K
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
                    ATTR: function(I) {
                        return I[1] = I[1].replace(Tn, xn), I[3] = (I[3] || I[4] || I[5] || "").replace(Tn, xn), I[2] === "~=" && (I[3] = " " + I[3] + " "), I.slice(0, 4)
                    },
                    CHILD: function(I) {
                        return I[1] = I[1].toLowerCase(), I[1].slice(0, 3) === "nth" ? (I[3] || St.error(I[0]), I[4] = +(I[4] ? I[5] + (I[6] || 1) : 2 * (I[3] === "even" || I[3] === "odd")), I[5] = +(I[7] + I[8] || I[3] === "odd")) : I[3] && St.error(I[0]), I
                    },
                    PSEUDO: function(I) {
                        var F, K = !I[6] && I[2];
                        return Xi.CHILD.test(I[0]) ? null : (I[3] ? I[2] = I[4] || I[5] || "" : K && jo.test(K) && (F = T(K, !0)) && (F = K.indexOf(")", K.length - F) - K.length) && (I[0] = I[0].slice(0, F), I[2] = K.slice(0, F)), I.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(I) {
                        var F = I.replace(Tn, xn).toLowerCase();
                        return I === "*" ? function() {
                            return !0
                        } : function(K) {
                            return K.nodeName && K.nodeName.toLowerCase() === F
                        }
                    },
                    CLASS: function(I) {
                        var F = Dt[I + " "];
                        return F || (F = new RegExp("(^|" + gt + ")" + I + "(" + gt + "|$)")) && Dt(I, function(K) {
                            return F.test(typeof K.className == "string" && K.className || typeof K.getAttribute < "u" && K.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(I, F, K) {
                        return function(fe) {
                            var ne = St.attr(fe, I);
                            return ne == null ? F === "!=" : F ? (ne += "", F === "=" ? ne === K : F === "!=" ? ne !== K : F === "^=" ? K && ne.indexOf(K) === 0 : F === "*=" ? K && ne.indexOf(K) > -1 : F === "$=" ? K && ne.slice(-K.length) === K : F === "~=" ? (" " + ne.replace(ks, " ") + " ").indexOf(K) > -1 : F === "|=" ? ne === K || ne.slice(0, K.length + 1) === K + "-" : !1) : !0
                        }
                    },
                    CHILD: function(I, F, K, fe, ne) {
                        var ve = I.slice(0, 3) !== "nth",
                            Ee = I.slice(-4) !== "last",
                            Re = F === "of-type";
                        return fe === 1 && ne === 0 ? function(Le) {
                            return !!Le.parentNode
                        } : function(Le, ze, Ge) {
                            var Xe, ht, At, qe, Ht, Jt, fn = ve !== Ee ? "nextSibling" : "previousSibling",
                                Ot = Le.parentNode,
                                c = Re && Le.nodeName.toLowerCase(),
                                h = !Ge && !Re,
                                b = !1;
                            if (Ot) {
                                if (ve) {
                                    for (; fn;) {
                                        for (qe = Le; qe = qe[fn];)
                                            if (Re ? qe.nodeName.toLowerCase() === c : qe.nodeType === 1) return !1;
                                        Jt = fn = I === "only" && !Jt && "nextSibling"
                                    }
                                    return !0
                                }
                                if (Jt = [Ee ? Ot.firstChild : Ot.lastChild], Ee && h) {
                                    for (qe = Ot, At = qe[_t] || (qe[_t] = {}), ht = At[qe.uniqueID] || (At[qe.uniqueID] = {}), Xe = ht[I] || [], Ht = Xe[0] === on && Xe[1], b = Ht && Xe[2], qe = Ht && Ot.childNodes[Ht]; qe = ++Ht && qe && qe[fn] || (b = Ht = 0) || Jt.pop();)
                                        if (qe.nodeType === 1 && ++b && qe === Le) {
                                            ht[I] = [on, Ht, b];
                                            break
                                        }
                                } else if (h && (qe = Le, At = qe[_t] || (qe[_t] = {}), ht = At[qe.uniqueID] || (At[qe.uniqueID] = {}), Xe = ht[I] || [], Ht = Xe[0] === on && Xe[1], b = Ht), b === !1)
                                    for (;
                                        (qe = ++Ht && qe && qe[fn] || (b = Ht = 0) || Jt.pop()) && !((Re ? qe.nodeName.toLowerCase() === c : qe.nodeType === 1) && ++b && (h && (At = qe[_t] || (qe[_t] = {}), ht = At[qe.uniqueID] || (At[qe.uniqueID] = {}), ht[I] = [on, b]), qe === Le)););
                                return b -= ne, b === fe || b % fe === 0 && b / fe >= 0
                            }
                        }
                    },
                    PSEUDO: function(I, F) {
                        var K, fe = p.pseudos[I] || p.setFilters[I.toLowerCase()] || St.error("unsupported pseudo: " + I);
                        return fe[_t] ? fe(F) : fe.length > 1 ? (K = [I, I, "", F], p.setFilters.hasOwnProperty(I.toLowerCase()) ? dn(function(ne, ve) {
                            for (var Ee, Re = fe(ne, F), Le = Re.length; Le--;) Ee = Qn(ne, Re[Le]), ne[Ee] = !(ve[Ee] = Re[Le])
                        }) : function(ne) {
                            return fe(ne, 0, K)
                        }) : fe
                    }
                },
                pseudos: {
                    not: dn(function(I) {
                        var F = [],
                            K = [],
                            fe = z(I.replace(ki, "$1"));
                        return fe[_t] ? dn(function(ne, ve, Ee, Re) {
                            for (var Le, ze = fe(ne, null, Re, []), Ge = ne.length; Ge--;)(Le = ze[Ge]) && (ne[Ge] = !(ve[Ge] = Le))
                        }) : function(ne, ve, Ee) {
                            return F[0] = ne, fe(F, null, Ee, K), F[0] = null, !K.pop()
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
                                return (F.textContent || w(F)).indexOf(I) > -1
                            }
                    }),
                    lang: dn(function(I) {
                        return Fo.test(I || "") || St.error("unsupported lang: " + I), I = I.replace(Tn, xn).toLowerCase(),
                            function(F) {
                                var K;
                                do
                                    if (K = rt ? F.lang : F.getAttribute("xml:lang") || F.getAttribute("lang")) return K = K.toLowerCase(), K === I || K.indexOf(I + "-") === 0; while ((F = F.parentNode) && F.nodeType === 1);
                                return !1
                            }
                    }),
                    target: function(I) {
                        var F = r.location && r.location.hash;
                        return F && F.slice(1) === I.id
                    },
                    root: function(I) {
                        return I === Ue
                    },
                    focus: function(I) {
                        return I === ue.activeElement && (!ue.hasFocus || ue.hasFocus()) && !!(I.type || I.href || ~I.tabIndex)
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
                    eq: An(function(I, F, K) {
                        return [K < 0 ? K + F : K]
                    }),
                    even: An(function(I, F) {
                        for (var K = 0; K < F; K += 2) I.push(K);
                        return I
                    }),
                    odd: An(function(I, F) {
                        for (var K = 1; K < F; K += 2) I.push(K);
                        return I
                    }),
                    lt: An(function(I, F, K) {
                        for (var fe = K < 0 ? K + F : K > F ? F : K; --fe >= 0;) I.push(fe);
                        return I
                    }),
                    gt: An(function(I, F, K) {
                        for (var fe = K < 0 ? K + F : K; ++fe < F;) I.push(fe);
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
                }) p.pseudos[s] = qo(s);
            for (s in {
                    submit: !0,
                    reset: !0
                }) p.pseudos[s] = Xo(s);

            function Ds() {}
            Ds.prototype = p.filters = p.pseudos, p.setFilters = new Ds, T = St.tokenize = function(I, F) {
                var K, fe, ne, ve, Ee, Re, Le, ze = Si[I + " "];
                if (ze) return F ? 0 : ze.slice(0);
                for (Ee = I, Re = [], Le = p.preFilter; Ee;) {
                    (!K || (fe = Ts.exec(Ee))) && (fe && (Ee = Ee.slice(fe[0].length) || Ee), Re.push(ne = [])), K = !1, (fe = As.exec(Ee)) && (K = fe.shift(), ne.push({
                        value: K,
                        type: fe[0].replace(ki, " ")
                    }), Ee = Ee.slice(K.length));
                    for (ve in p.filter)(fe = Xi[ve].exec(Ee)) && (!Le[ve] || (fe = Le[ve](fe))) && (K = fe.shift(), ne.push({
                        value: K,
                        type: ve,
                        matches: fe
                    }), Ee = Ee.slice(K.length));
                    if (!K) break
                }
                return F ? Ee.length : Ee ? St.error(I) : Si(I, Re).slice(0)
            };

            function Qi(I) {
                for (var F = 0, K = I.length, fe = ""; F < K; F++) fe += I[F].value;
                return fe
            }

            function Zi(I, F, K) {
                var fe = F.dir,
                    ne = F.next,
                    ve = ne || fe,
                    Ee = K && ve === "parentNode",
                    Re = ft++;
                return F.first ? function(Le, ze, Ge) {
                    for (; Le = Le[fe];)
                        if (Le.nodeType === 1 || Ee) return I(Le, ze, Ge);
                    return !1
                } : function(Le, ze, Ge) {
                    var Xe, ht, At, qe = [on, Re];
                    if (Ge) {
                        for (; Le = Le[fe];)
                            if ((Le.nodeType === 1 || Ee) && I(Le, ze, Ge)) return !0
                    } else
                        for (; Le = Le[fe];)
                            if (Le.nodeType === 1 || Ee)
                                if (At = Le[_t] || (Le[_t] = {}), ht = At[Le.uniqueID] || (At[Le.uniqueID] = {}), ne && ne === Le.nodeName.toLowerCase()) Le = Le[fe] || Le;
                                else {
                                    if ((Xe = ht[ve]) && Xe[0] === on && Xe[1] === Re) return qe[2] = Xe[2];
                                    if (ht[ve] = qe, qe[2] = I(Le, ze, Ge)) return !0
                                } return !1
                }
            }

            function er(I) {
                return I.length > 1 ? function(F, K, fe) {
                    for (var ne = I.length; ne--;)
                        if (!I[ne](F, K, fe)) return !1;
                    return !0
                } : I[0]
            }

            function Yo(I, F, K) {
                for (var fe = 0, ne = F.length; fe < ne; fe++) St(I, F[fe], K);
                return K
            }

            function tr(I, F, K, fe, ne) {
                for (var ve, Ee = [], Re = 0, Le = I.length, ze = F != null; Re < Le; Re++)(ve = I[Re]) && (!K || K(ve, fe, ne)) && (Ee.push(ve), ze && F.push(Re));
                return Ee
            }

            function Wr(I, F, K, fe, ne, ve) {
                return fe && !fe[_t] && (fe = Wr(fe)), ne && !ne[_t] && (ne = Wr(ne, ve)), dn(function(Ee, Re, Le, ze) {
                    var Ge, Xe, ht, At = [],
                        qe = [],
                        Ht = Re.length,
                        Jt = Ee || Yo(F || "*", Le.nodeType ? [Le] : Le, []),
                        fn = I && (Ee || !F) ? tr(Jt, At, I, Le, ze) : Jt,
                        Ot = K ? ne || (Ee ? I : Ht || fe) ? [] : Re : fn;
                    if (K && K(fn, Ot, Le, ze), fe)
                        for (Ge = tr(Ot, qe), fe(Ge, [], Le, ze), Xe = Ge.length; Xe--;)(ht = Ge[Xe]) && (Ot[qe[Xe]] = !(fn[qe[Xe]] = ht));
                    if (Ee) {
                        if (ne || I) {
                            if (ne) {
                                for (Ge = [], Xe = Ot.length; Xe--;)(ht = Ot[Xe]) && Ge.push(fn[Xe] = ht);
                                ne(null, Ot = [], Ge, ze)
                            }
                            for (Xe = Ot.length; Xe--;)(ht = Ot[Xe]) && (Ge = ne ? Qn(Ee, ht) : At[Xe]) > -1 && (Ee[Ge] = !(Re[Ge] = ht))
                        }
                    } else Ot = tr(Ot === Re ? Ot.splice(Ht, Ot.length) : Ot), ne ? ne(null, Re, Ot, ze) : Cn.apply(Re, Ot)
                })
            }

            function qr(I) {
                for (var F, K, fe, ne = I.length, ve = p.relative[I[0].type], Ee = ve || p.relative[" "], Re = ve ? 1 : 0, Le = Zi(function(Xe) {
                        return Xe === F
                    }, Ee, !0), ze = Zi(function(Xe) {
                        return Qn(F, Xe) > -1
                    }, Ee, !0), Ge = [function(Xe, ht, At) {
                        var qe = !ve && (At || ht !== te) || ((F = ht).nodeType ? Le(Xe, ht, At) : ze(Xe, ht, At));
                        return F = null, qe
                    }]; Re < ne; Re++)
                    if (K = p.relative[I[Re].type]) Ge = [Zi(er(Ge), K)];
                    else {
                        if (K = p.filter[I[Re].type].apply(null, I[Re].matches), K[_t]) {
                            for (fe = ++Re; fe < ne && !p.relative[I[fe].type]; fe++);
                            return Wr(Re > 1 && er(Ge), Re > 1 && Qi(I.slice(0, Re - 1).concat({
                                value: I[Re - 2].type === " " ? "*" : ""
                            })).replace(ki, "$1"), K, Re < fe && qr(I.slice(Re, fe)), fe < ne && qr(I = I.slice(fe)), fe < ne && Qi(I))
                        }
                        Ge.push(K)
                    } return er(Ge)
            }

            function Ms(I, F) {
                var K = F.length > 0,
                    fe = I.length > 0,
                    ne = function(ve, Ee, Re, Le, ze) {
                        var Ge, Xe, ht, At = 0,
                            qe = "0",
                            Ht = ve && [],
                            Jt = [],
                            fn = te,
                            Ot = ve || fe && p.find.TAG("*", ze),
                            c = on += fn == null ? 1 : Math.random() || .1,
                            h = Ot.length;
                        for (ze && (te = Ee == ue || Ee || ze); qe !== h && (Ge = Ot[qe]) != null; qe++) {
                            if (fe && Ge) {
                                for (Xe = 0, !Ee && Ge.ownerDocument != ue && (re(Ge), Re = !rt); ht = I[Xe++];)
                                    if (ht(Ge, Ee || ue, Re)) {
                                        Le.push(Ge);
                                        break
                                    } ze && (on = c)
                            }
                            K && ((Ge = !ht && Ge) && At--, ve && Ht.push(Ge))
                        }
                        if (At += qe, K && qe !== At) {
                            for (Xe = 0; ht = F[Xe++];) ht(Ht, Jt, Ee, Re);
                            if (ve) {
                                if (At > 0)
                                    for (; qe--;) Ht[qe] || Jt[qe] || (Jt[qe] = Mn.call(Le));
                                Jt = tr(Jt)
                            }
                            Cn.apply(Le, Jt), ze && !ve && Jt.length > 0 && At + F.length > 1 && St.uniqueSort(Le)
                        }
                        return ze && (on = c, te = fn), Ht
                    };
                return K ? dn(ne) : ne
            }
            return z = St.compile = function(I, F) {
                var K, fe = [],
                    ne = [],
                    ve = qi[I + " "];
                if (!ve) {
                    for (F || (F = T(I)), K = F.length; K--;) ve = qr(F[K]), ve[_t] ? fe.push(ve) : ne.push(ve);
                    ve = qi(I, Ms(ne, fe)), ve.selector = I
                }
                return ve
            }, H = St.select = function(I, F, K, fe) {
                var ne, ve, Ee, Re, Le, ze = typeof I == "function" && I,
                    Ge = !fe && T(I = ze.selector || I);
                if (K = K || [], Ge.length === 1) {
                    if (ve = Ge[0] = Ge[0].slice(0), ve.length > 2 && (Ee = ve[0]).type === "ID" && F.nodeType === 9 && rt && p.relative[ve[1].type]) {
                        if (F = (p.find.ID(Ee.matches[0].replace(Tn, xn), F) || [])[0], F) ze && (F = F.parentNode);
                        else return K;
                        I = I.slice(ve.shift().value.length)
                    }
                    for (ne = Xi.needsContext.test(I) ? 0 : ve.length; ne-- && (Ee = ve[ne], !p.relative[Re = Ee.type]);)
                        if ((Le = p.find[Re]) && (fe = Le(Ee.matches[0].replace(Tn, xn), Hr.test(ve[0].type) && Ur(F.parentNode) || F))) {
                            if (ve.splice(ne, 1), I = fe.length && Qi(ve), !I) return Cn.apply(K, fe), K;
                            break
                        }
                }
                return (ze || z(I, Ge))(fe, F, !rt, K, !F || Hr.test(I) && Ur(F.parentNode) || F), K
            }, u.sortStable = _t.split("").sort(Kn).join("") === _t, u.detectDuplicates = !!Ce, re(), u.sortDetached = yn(function(I) {
                return I.compareDocumentPosition(ue.createElement("fieldset")) & 1
            }), yn(function(I) {
                return I.innerHTML = "<a href='#'></a>", I.firstChild.getAttribute("href") === "#"
            }) || Ki("type|href|height|width", function(I, F, K) {
                if (!K) return I.getAttribute(F, F.toLowerCase() === "type" ? 1 : 2)
            }), (!u.attributes || !yn(function(I) {
                return I.innerHTML = "<input/>", I.firstChild.setAttribute("value", ""), I.firstChild.getAttribute("value") === ""
            })) && Ki("value", function(I, F, K) {
                if (!K && I.nodeName.toLowerCase() === "input") return I.defaultValue
            }), yn(function(I) {
                return I.getAttribute("disabled") == null
            }) || Ki(Fr, function(I, F, K) {
                var fe;
                if (!K) return I[F] === !0 ? F.toLowerCase() : (fe = I.getAttributeNode(F)) && fe.specified ? fe.value : null
            }), St
        }(e);
        f.find = Oe, f.expr = Oe.selectors, f.expr[":"] = f.expr.pseudos, f.uniqueSort = f.unique = Oe.uniqueSort, f.text = Oe.getText, f.isXMLDoc = Oe.isXML, f.contains = Oe.contains, f.escapeSelector = Oe.escape;
        var Pe = function(r, s, u) {
                for (var p = [], w = u !== void 0;
                    (r = r[s]) && r.nodeType !== 9;)
                    if (r.nodeType === 1) {
                        if (w && f(r).is(u)) break;
                        p.push(r)
                    } return p
            },
            lt = function(r, s) {
                for (var u = []; r; r = r.nextSibling) r.nodeType === 1 && r !== s && u.push(r);
                return u
            },
            $e = f.expr.match.needsContext;

        function Z(r, s) {
            return r.nodeName && r.nodeName.toLowerCase() === s.toLowerCase()
        }
        var Fe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function U(r, s, u) {
            return Q(s) ? f.grep(r, function(p, w) {
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
                return !!U(this, typeof r == "string" && $e.test(r) ? f(r) : r || [], !1).length
            }
        });
        var le, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            be = f.fn.init = function(r, s, u) {
                var p, w;
                if (!r) return this;
                if (u = u || le, typeof r == "string")
                    if (r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3 ? p = [null, r, null] : p = Ae.exec(r), p && (p[1] || !s))
                        if (p[1]) {
                            if (s = s instanceof f ? s[0] : s, f.merge(this, f.parseHTML(p[1], s && s.nodeType ? s.ownerDocument || s : M, !0)), Fe.test(p[1]) && f.isPlainObject(s))
                                for (p in s) Q(this[p]) ? this[p](s[p]) : this.attr(p, s[p]);
                            return this
                        } else return w = M.getElementById(p[2]), w && (this[0] = w, this.length = 1), this;
                else return !s || s.jquery ? (s || u).find(r) : this.constructor(s).find(r);
                else {
                    if (r.nodeType) return this[0] = r, this.length = 1, this;
                    if (Q(r)) return u.ready !== void 0 ? u.ready(r) : r(f)
                }
                return f.makeArray(r, this)
            };
        be.prototype = f.fn, le = f(M);
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
                if (!$e.test(r)) {
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
                return r.contentDocument != null && a(r.contentDocument) ? r.contentDocument : (Z(r, "template") && (r = r.content || r), f.merge([], r.childNodes))
            }
        }, function(r, s) {
            f.fn[r] = function(u, p) {
                var w = f.map(this, s, u);
                return r.slice(-5) !== "Until" && (p = u), p && typeof p == "string" && (w = f.filter(p, w)), this.length > 1 && (he[r] || f.uniqueSort(w), we.test(r) && w.reverse()), this.pushStack(w)
            }
        });
        var Te = /[^\x20\t\r\n\f]+/g;

        function Be(r) {
            var s = {};
            return f.each(r.match(Te) || [], function(u, p) {
                s[p] = !0
            }), s
        }
        f.Callbacks = function(r) {
            r = typeof r == "string" ? Be(r) : f.extend({}, r);
            var s, u, p, w, x = [],
                T = [],
                z = -1,
                H = function() {
                    for (w = w || r.once, p = s = !0; T.length; z = -1)
                        for (u = T.shift(); ++z < x.length;) x[z].apply(u[0], u[1]) === !1 && r.stopOnFalse && (z = x.length, u = !1);
                    r.memory || (u = !1), s = !1, w && (u ? x = [] : x = "")
                },
                te = {
                    add: function() {
                        return x && (u && !s && (z = x.length - 1, T.push(u)), function ce(Ce) {
                            f.each(Ce, function(re, ue) {
                                Q(ue) ? (!r.unique || !te.has(ue)) && x.push(ue) : ue && ue.length && ae(ue) !== "string" && ce(ue)
                            })
                        }(arguments), u && !s && H()), this
                    },
                    remove: function() {
                        return f.each(arguments, function(ce, Ce) {
                            for (var re;
                                (re = f.inArray(Ce, x, re)) > -1;) x.splice(re, 1), re <= z && z--
                        }), this
                    },
                    has: function(ce) {
                        return ce ? f.inArray(ce, x) > -1 : x.length > 0
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
                    fireWith: function(ce, Ce) {
                        return w || (Ce = Ce || [], Ce = [ce, Ce.slice ? Ce.slice() : Ce], T.push(Ce), s || H()), this
                    },
                    fire: function() {
                        return te.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!p
                    }
                };
            return te
        };

        function Ke(r) {
            return r
        }

        function dt(r) {
            throw r
        }

        function $t(r, s, u, p) {
            var w;
            try {
                r && Q(w = r.promise) ? w.call(r).done(s).fail(u) : r && Q(w = r.then) ? w.call(r, s, u) : s.apply(void 0, [r].slice(p))
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
                                    var te = Q(x[H[4]]) && x[H[4]];
                                    w[H[1]](function() {
                                        var ce = te && te.apply(this, arguments);
                                        ce && Q(ce.promise) ? ce.promise().progress(T.notify).done(T.resolve).fail(T.reject) : T[H[0] + "With"](this, te ? [ce] : arguments)
                                    })
                                }), x = null
                            }).promise()
                        },
                        then: function(x, T, z) {
                            var H = 0;

                            function te(ce, Ce, re, ue) {
                                return function() {
                                    var Ue = this,
                                        rt = arguments,
                                        je = function() {
                                            var Nt, un;
                                            if (!(ce < H)) {
                                                if (Nt = re.apply(Ue, rt), Nt === Ce.promise()) throw new TypeError("Thenable self-resolution");
                                                un = Nt && (typeof Nt == "object" || typeof Nt == "function") && Nt.then, Q(un) ? ue ? un.call(Nt, te(H, Ce, Ke, ue), te(H, Ce, dt, ue)) : (H++, un.call(Nt, te(H, Ce, Ke, ue), te(H, Ce, dt, ue), te(H, Ce, Ke, Ce.notifyWith))) : (re !== Ke && (Ue = void 0, rt = [Nt]), (ue || Ce.resolveWith)(Ue, rt))
                                            }
                                        },
                                        zt = ue ? je : function() {
                                            try {
                                                je()
                                            } catch (Nt) {
                                                f.Deferred.exceptionHook && f.Deferred.exceptionHook(Nt, zt.stackTrace), ce + 1 >= H && (re !== dt && (Ue = void 0, rt = [Nt]), Ce.rejectWith(Ue, rt))
                                            }
                                        };
                                    ce ? zt() : (f.Deferred.getStackHook && (zt.stackTrace = f.Deferred.getStackHook()), e.setTimeout(zt))
                                }
                            }
                            return f.Deferred(function(ce) {
                                s[0][3].add(te(0, ce, Q(z) ? z : Ke, ce.notifyWith)), s[1][3].add(te(0, ce, Q(x) ? x : Ke)), s[2][3].add(te(0, ce, Q(T) ? T : dt))
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
                    w = d.call(arguments),
                    x = f.Deferred(),
                    T = function(z) {
                        return function(H) {
                            p[z] = this, w[z] = arguments.length > 1 ? d.call(arguments) : H, --s || x.resolveWith(p, w)
                        }
                    };
                if (s <= 1 && ($t(r, x.done(T(u)).resolve, x.reject, !s), x.state() === "pending" || Q(w[u] && w[u].then))) return x.then();
                for (; u--;) $t(w[u], T(u), x.reject);
                return x.promise()
            }
        });
        var Ut = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        f.Deferred.exceptionHook = function(r, s) {
            e.console && e.console.warn && r && Ut.test(r.name) && e.console.warn("jQuery.Deferred exception: " + r.message, r.stack, s)
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
                (r === !0 ? --f.readyWait : f.isReady) || (f.isReady = !0, !(r !== !0 && --f.readyWait > 0) && _.resolveWith(M, [f]))
            }
        }), f.ready.then = _.then;

        function l() {
            M.removeEventListener("DOMContentLoaded", l), e.removeEventListener("load", l), f.ready()
        }
        M.readyState === "complete" || M.readyState !== "loading" && !M.documentElement.doScroll ? e.setTimeout(f.ready) : (M.addEventListener("DOMContentLoaded", l), e.addEventListener("load", l));
        var m = function(r, s, u, p, w, x, T) {
                var z = 0,
                    H = r.length,
                    te = u == null;
                if (ae(u) === "object") {
                    w = !0;
                    for (z in u) m(r, s, z, u[z], !0, x, T)
                } else if (p !== void 0 && (w = !0, Q(p) || (T = !0), te && (T ? (s.call(r, p), s = null) : (te = s, s = function(ce, Ce, re) {
                        return te.call(f(ce), re)
                    })), s))
                    for (; z < H; z++) s(r[z], u, T ? p : p.call(r[z], z, s(r[z], u)));
                return w ? r : te ? s.call(r) : H ? s(r[0], u) : x
            },
            S = /^-ms-/,
            R = /-([a-z])/g;

        function P(r, s) {
            return s.toUpperCase()
        }

        function $(r) {
            return r.replace(S, "ms-").replace(R, P)
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
            set: function(r, s, u) {
                var p, w = this.cache(r);
                if (typeof s == "string") w[$(s)] = u;
                else
                    for (p in s) w[$(p)] = s[p];
                return w
            },
            get: function(r, s) {
                return s === void 0 ? this.cache(r) : r[this.expando] && r[this.expando][$(s)]
            },
            access: function(r, s, u) {
                return s === void 0 || s && typeof s == "string" && u === void 0 ? this.get(r, s) : (this.set(r, s, u), u !== void 0 ? u : s)
            },
            remove: function(r, s) {
                var u, p = r[this.expando];
                if (p !== void 0) {
                    if (s !== void 0)
                        for (Array.isArray(s) ? s = s.map($) : (s = $(s), s = s in p ? [s] : s.match(Te) || []), u = s.length; u--;) delete p[s[u]];
                    (s === void 0 || f.isEmptyObject(p)) && (r.nodeType ? r[this.expando] = void 0 : delete r[this.expando])
                }
            },
            hasData: function(r) {
                var s = r[this.expando];
                return s !== void 0 && !f.isEmptyObject(s)
            }
        };
        var de = new ke,
            De = new ke,
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
        f.extend({
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
        }), f.fn.extend({
            data: function(r, s) {
                var u, p, w, x = this[0],
                    T = x && x.attributes;
                if (r === void 0) {
                    if (this.length && (w = De.get(x), x.nodeType === 1 && !de.get(x, "hasDataAttrs"))) {
                        for (u = T.length; u--;) T[u] && (p = T[u].name, p.indexOf("data-") === 0 && (p = $(p.slice(5)), rn(x, p, w[p])));
                        de.set(x, "hasDataAttrs", !0)
                    }
                    return w
                }
                return typeof r == "object" ? this.each(function() {
                    De.set(this, r)
                }) : m(this, function(z) {
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
        }), f.extend({
            queue: function(r, s, u) {
                var p;
                if (r) return s = (s || "fx") + "queue", p = de.get(r, s), u && (!p || Array.isArray(u) ? p = de.access(r, s, f.makeArray(u)) : p.push(u)), p || []
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
                    w = f.Deferred(),
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
            Kt = M.documentElement,
            Je = function(r) {
                return f.contains(r.ownerDocument, r)
            },
            Lt = {
                composed: !0
            };
        Kt.getRootNode && (Je = function(r) {
            return f.contains(r.ownerDocument, r) || r.getRootNode(Lt) === r.ownerDocument
        });
        var j = function(r, s) {
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
                te = u && u[3] || (f.cssNumber[s] ? "" : "px"),
                ce = r.nodeType && (f.cssNumber[s] || te !== "px" && +H) && yt.exec(f.css(r, s));
            if (ce && ce[3] !== te) {
                for (H = H / 2, te = te || ce[3], ce = +H || 1; T--;) f.style(r, s, ce + te), (1 - x) * (1 - (x = z() / H || .5)) <= 0 && (T = 0), ce = ce / x;
                ce = ce * 2, f.style(r, s, ce + te), u = u || []
            }
            return u && (ce = +ce || +H || 0, w = u[1] ? ce + (u[1] + 1) * u[2] : +u[2], p && (p.unit = te, p.start = ce, p.end = w)), w
        }
        var Y = {};

        function L(r) {
            var s, u = r.ownerDocument,
                p = r.nodeName,
                w = Y[p];
            return w || (s = u.body.appendChild(u.createElement(p)), w = f.css(s, "display"), s.parentNode.removeChild(s), w === "none" && (w = "block"), Y[p] = w, w)
        }

        function X(r, s) {
            for (var u, p, w = [], x = 0, T = r.length; x < T; x++) p = r[x], p.style && (u = p.style.display, s ? (u === "none" && (w[x] = de.get(p, "display") || null, w[x] || (p.style.display = "")), p.style.display === "" && j(p) && (w[x] = L(p))) : u !== "none" && (w[x] = "none", de.set(p, "display", u)));
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
                    j(this) ? f(this).show() : f(this).hide()
                })
            }
        });
        var pe = /^(?:checkbox|radio)$/i,
            ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            Ne = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
            var r = M.createDocumentFragment(),
                s = r.appendChild(M.createElement("div")),
                u = M.createElement("input");
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
            return typeof r.getElementsByTagName < "u" ? u = r.getElementsByTagName(s || "*") : typeof r.querySelectorAll < "u" ? u = r.querySelectorAll(s || "*") : u = [], s === void 0 || s && Z(r, s) ? f.merge([r], u) : u
        }

        function jt(r, s) {
            for (var u = 0, p = r.length; u < p; u++) de.set(r[u], "globalEval", !s || de.get(s[u], "globalEval"))
        }
        var Ye = /<|&#?\w+;/;

        function In(r, s, u, p, w) {
            for (var x, T, z, H, te, ce, Ce = s.createDocumentFragment(), re = [], ue = 0, Ue = r.length; ue < Ue; ue++)
                if (x = r[ue], x || x === 0)
                    if (ae(x) === "object") f.merge(re, x.nodeType ? [x] : x);
                    else if (!Ye.test(x)) re.push(s.createTextNode(x));
            else {
                for (T = T || Ce.appendChild(s.createElement("div")), z = (ge.exec(x) || ["", ""])[1].toLowerCase(), H = Ve[z] || Ve._default, T.innerHTML = H[1] + f.htmlPrefilter(x) + H[2], ce = H[0]; ce--;) T = T.lastChild;
                f.merge(re, T.childNodes), T = Ce.firstChild, T.textContent = ""
            }
            for (Ce.textContent = "", ue = 0; x = re[ue++];) {
                if (p && f.inArray(x, p) > -1) {
                    w && w.push(x);
                    continue
                }
                if (te = Je(x), T = pt(Ce.appendChild(x), "script"), te && jt(T), u)
                    for (ce = 0; x = T[ce++];) Ne.test(x.type || "") && u.push(x)
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

        function mi(r, s) {
            return r === Sr() == (s === "focus")
        }

        function Sr() {
            try {
                return M.activeElement
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
                return f().off(H), T.apply(this, arguments)
            }, w.guid = T.guid || (T.guid = f.guid++)), r.each(function() {
                f.event.add(this, s, w, p, u)
            })
        }
        f.event = {
            global: {},
            add: function(r, s, u, p, w) {
                var x, T, z, H, te, ce, Ce, re, ue, Ue, rt, je = de.get(r);
                if (!!ie(r))
                    for (u.handler && (x = u, u = x.handler, w = x.selector), w && f.find.matchesSelector(Kt, w), u.guid || (u.guid = f.guid++), (H = je.events) || (H = je.events = Object.create(null)), (T = je.handle) || (T = je.handle = function(zt) {
                            return typeof f < "u" && f.event.triggered !== zt.type ? f.event.dispatch.apply(r, arguments) : void 0
                        }), s = (s || "").match(Te) || [""], te = s.length; te--;) z = Pn.exec(s[te]) || [], ue = rt = z[1], Ue = (z[2] || "").split(".").sort(), ue && (Ce = f.event.special[ue] || {}, ue = (w ? Ce.delegateType : Ce.bindType) || ue, Ce = f.event.special[ue] || {}, ce = f.extend({
                        type: ue,
                        origType: rt,
                        data: p,
                        handler: u,
                        guid: u.guid,
                        selector: w,
                        needsContext: w && f.expr.match.needsContext.test(w),
                        namespace: Ue.join(".")
                    }, x), (re = H[ue]) || (re = H[ue] = [], re.delegateCount = 0, (!Ce.setup || Ce.setup.call(r, p, Ue, T) === !1) && r.addEventListener && r.addEventListener(ue, T)), Ce.add && (Ce.add.call(r, ce), ce.handler.guid || (ce.handler.guid = u.guid)), w ? re.splice(re.delegateCount++, 0, ce) : re.push(ce), f.event.global[ue] = !0)
            },
            remove: function(r, s, u, p, w) {
                var x, T, z, H, te, ce, Ce, re, ue, Ue, rt, je = de.hasData(r) && de.get(r);
                if (!(!je || !(H = je.events))) {
                    for (s = (s || "").match(Te) || [""], te = s.length; te--;) {
                        if (z = Pn.exec(s[te]) || [], ue = rt = z[1], Ue = (z[2] || "").split(".").sort(), !ue) {
                            for (ue in H) f.event.remove(r, ue + s[te], u, p, !0);
                            continue
                        }
                        for (Ce = f.event.special[ue] || {}, ue = (p ? Ce.delegateType : Ce.bindType) || ue, re = H[ue] || [], z = z[2] && new RegExp("(^|\\.)" + Ue.join("\\.(?:.*\\.|)") + "(\\.|$)"), T = x = re.length; x--;) ce = re[x], (w || rt === ce.origType) && (!u || u.guid === ce.guid) && (!z || z.test(ce.namespace)) && (!p || p === ce.selector || p === "**" && ce.selector) && (re.splice(x, 1), ce.selector && re.delegateCount--, Ce.remove && Ce.remove.call(r, ce));
                        T && !re.length && ((!Ce.teardown || Ce.teardown.call(r, Ue, je.handle) === !1) && f.removeEvent(r, ue, je.handle), delete H[ue])
                    }
                    f.isEmptyObject(H) && de.remove(r, "handle events")
                }
            },
            dispatch: function(r) {
                var s, u, p, w, x, T, z = new Array(arguments.length),
                    H = f.event.fix(r),
                    te = (de.get(this, "events") || Object.create(null))[H.type] || [],
                    ce = f.event.special[H.type] || {};
                for (z[0] = H, s = 1; s < arguments.length; s++) z[s] = arguments[s];
                if (H.delegateTarget = this, !(ce.preDispatch && ce.preDispatch.call(this, H) === !1)) {
                    for (T = f.event.handlers.call(this, H, te), s = 0;
                        (w = T[s++]) && !H.isPropagationStopped();)
                        for (H.currentTarget = w.elem, u = 0;
                            (x = w.handlers[u++]) && !H.isImmediatePropagationStopped();)(!H.rnamespace || x.namespace === !1 || H.rnamespace.test(x.namespace)) && (H.handleObj = x, H.data = x.data, p = ((f.event.special[x.origType] || {}).handle || x.handler).apply(w.elem, z), p !== void 0 && (H.result = p) === !1 && (H.preventDefault(), H.stopPropagation()));
                    return ce.postDispatch && ce.postDispatch.call(this, H), H.result
                }
            },
            handlers: function(r, s) {
                var u, p, w, x, T, z = [],
                    H = s.delegateCount,
                    te = r.target;
                if (H && te.nodeType && !(r.type === "click" && r.button >= 1)) {
                    for (; te !== this; te = te.parentNode || this)
                        if (te.nodeType === 1 && !(r.type === "click" && te.disabled === !0)) {
                            for (x = [], T = {}, u = 0; u < H; u++) p = s[u], w = p.selector + " ", T[w] === void 0 && (T[w] = p.needsContext ? f(w, this).index(te) > -1 : f.find(w, this, null, [te]).length), T[w] && x.push(p);
                            x.length && z.push({
                                elem: te,
                                handlers: x
                            })
                        }
                }
                return te = this, H < s.length && z.push({
                    elem: te,
                    handlers: s.slice(H)
                }), z
            },
            addProp: function(r, s) {
                Object.defineProperty(f.Event.prototype, r, {
                    enumerable: !0,
                    configurable: !0,
                    get: Q(s) ? function() {
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
                        return pe.test(s.type) && s.click && Z(s, "input") && sn(s, "click", it), !1
                    },
                    trigger: function(r) {
                        var s = this || r;
                        return pe.test(s.type) && s.click && Z(s, "input") && sn(s, "click"), !0
                    },
                    _default: function(r) {
                        var s = r.target;
                        return pe.test(s.type) && s.click && Z(s, "input") && de.get(s, "click") || Z(s, "a")
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
                    var w, x, T = de.get(this, s);
                    if (p.isTrigger & 1 && this[s]) {
                        if (T.length)(f.event.special[s] || {}).delegateType && p.stopPropagation();
                        else if (T = d.call(arguments), de.set(this, s, T), w = u(this, s), this[s](), x = de.get(this, s), T !== x || w ? de.set(this, s, !1) : x = {}, T !== x) return p.stopImmediatePropagation(), p.preventDefault(), x && x.value
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
            r && r.type ? (this.originalEvent = r, this.type = r.type, this.isDefaultPrevented = r.defaultPrevented || r.defaultPrevented === void 0 && r.returnValue === !1 ? it : Dn, this.target = r.target && r.target.nodeType === 3 ? r.target.parentNode : r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget) : this.type = r, s && f.extend(this, s), this.timeStamp = r && r.timeStamp || Date.now(), this[f.expando] = !0
        }, f.Event.prototype = {
            constructor: f.Event,
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
                handle: function(u) {
                    var p, w = this,
                        x = u.relatedTarget,
                        T = u.handleObj;
                    return (!x || x !== w && !f.contains(w, x)) && (u.type = T.origType, p = T.handler.apply(this, arguments), u.type = s), p
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
                var p, w;
                if (r && r.preventDefault && r.handleObj) return p = r.handleObj, f(r.delegateTarget).off(p.namespace ? p.origType + "." + p.namespace : p.origType, p.selector, p.handler), this;
                if (typeof r == "object") {
                    for (w in r) this.off(w, s, r[w]);
                    return this
                }
                return (s === !1 || typeof s == "function") && (u = s, s = void 0), u === !1 && (u = Dn), this.each(function() {
                    f.event.remove(this, r, u, s)
                })
            }
        });
        var kr = /<script|<style|<link/i,
            Tr = /checked\s*(?:[^=]|=\s*.checked.)/i,
            vi = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Bi(r, s) {
            return Z(r, "table") && Z(s.nodeType !== 11 ? s : s.firstChild, "tr") && f(r).children("tbody")[0] || r
        }

        function yi(r) {
            return r.type = (r.getAttribute("type") !== null) + "/" + r.type, r
        }

        function wi(r) {
            return (r.type || "").slice(0, 5) === "true/" ? r.type = r.type.slice(5) : r.removeAttribute("type"), r
        }

        function ji(r, s) {
            var u, p, w, x, T, z, H;
            if (s.nodeType === 1) {
                if (de.hasData(r) && (x = de.get(r), H = x.events, H)) {
                    de.remove(s, "handle events");
                    for (w in H)
                        for (u = 0, p = H[w].length; u < p; u++) f.event.add(s, w, H[w][u])
                }
                De.hasData(r) && (T = De.access(r), z = f.extend({}, T), De.set(s, z))
            }
        }

        function Fi(r, s) {
            var u = s.nodeName.toLowerCase();
            u === "input" && pe.test(r.type) ? s.checked = r.checked : (u === "input" || u === "textarea") && (s.defaultValue = r.defaultValue)
        }

        function mn(r, s, u, p) {
            s = g(s);
            var w, x, T, z, H, te, ce = 0,
                Ce = r.length,
                re = Ce - 1,
                ue = s[0],
                Ue = Q(ue);
            if (Ue || Ce > 1 && typeof ue == "string" && !G.checkClone && Tr.test(ue)) return r.each(function(rt) {
                var je = r.eq(rt);
                Ue && (s[0] = ue.call(this, rt, je.html())), mn(je, s, u, p)
            });
            if (Ce && (w = In(s, r[0].ownerDocument, !1, r, p), x = w.firstChild, w.childNodes.length === 1 && (w = x), x || p)) {
                for (T = f.map(pt(w, "script"), yi), z = T.length; ce < Ce; ce++) H = w, ce !== re && (H = f.clone(H, !0, !0), z && f.merge(T, pt(H, "script"))), u.call(r[ce], H, ce);
                if (z)
                    for (te = T[T.length - 1].ownerDocument, f.map(T, wi), ce = 0; ce < z; ce++) H = T[ce], Ne.test(H.type || "") && !de.access(H, "globalEval") && f.contains(te, H) && (H.src && (H.type || "").toLowerCase() !== "module" ? f._evalUrl && !H.noModule && f._evalUrl(H.src, {
                        nonce: H.nonce || H.getAttribute("nonce")
                    }, te) : oe(H.textContent.replace(vi, ""), H, te))
            }
            return r
        }

        function zi(r, s, u) {
            for (var p, w = s ? f.filter(s, r) : r, x = 0;
                (p = w[x]) != null; x++) !u && p.nodeType === 1 && f.cleanData(pt(p)), p.parentNode && (u && Je(p) && jt(pt(p, "script")), p.parentNode.removeChild(p));
            return r
        }
        f.extend({
            htmlPrefilter: function(r) {
                return r
            },
            clone: function(r, s, u) {
                var p, w, x, T, z = r.cloneNode(!0),
                    H = Je(r);
                if (!G.noCloneChecked && (r.nodeType === 1 || r.nodeType === 11) && !f.isXMLDoc(r))
                    for (T = pt(z), x = pt(r), p = 0, w = x.length; p < w; p++) Fi(x[p], T[p]);
                if (s)
                    if (u)
                        for (x = x || pt(r), T = T || pt(z), p = 0, w = x.length; p < w; p++) ji(x[p], T[p]);
                    else ji(r, z);
                return T = pt(z, "script"), T.length > 0 && jt(T, !H && pt(r, "script")), z
            },
            cleanData: function(r) {
                for (var s, u, p, w = f.event.special, x = 0;
                    (u = r[x]) !== void 0; x++)
                    if (ie(u)) {
                        if (s = u[de.expando]) {
                            if (s.events)
                                for (p in s.events) w[p] ? f.event.remove(u, p) : f.removeEvent(u, p, s.handle);
                            u[de.expando] = void 0
                        }
                        u[De.expando] && (u[De.expando] = void 0)
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
                return m(this, function(s) {
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
                return m(this, function(s) {
                    var u = this[0] || {},
                        p = 0,
                        w = this.length;
                    if (s === void 0 && u.nodeType === 1) return u.innerHTML;
                    if (typeof s == "string" && !kr.test(s) && !Ve[(ge.exec(s) || ["", ""])[1].toLowerCase()]) {
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
                for (var p, w = [], x = f(u), T = x.length - 1, z = 0; z <= T; z++) p = z === T ? this : this.clone(!0), f(x[z])[s](p), E.apply(w, p.get());
                return this.pushStack(w)
            }
        });
        var bi = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
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
            Ci = new RegExp(bt.join("|"), "i");
        (function() {
            function r() {
                if (!!te) {
                    H.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", te.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Kt.appendChild(H).appendChild(te);
                    var ce = e.getComputedStyle(te);
                    u = ce.top !== "1%", z = s(ce.marginLeft) === 12, te.style.right = "60%", x = s(ce.right) === 36, p = s(ce.width) === 36, te.style.position = "absolute", w = s(te.offsetWidth / 3) === 12, Kt.removeChild(H), te = null
                }
            }

            function s(ce) {
                return Math.round(parseFloat(ce))
            }
            var u, p, w, x, T, z, H = M.createElement("div"),
                te = M.createElement("div");
            !te.style || (te.style.backgroundClip = "content-box", te.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = te.style.backgroundClip === "content-box", f.extend(G, {
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
                    var ce, Ce, re, ue;
                    return T == null && (ce = M.createElement("table"), Ce = M.createElement("tr"), re = M.createElement("div"), ce.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", Ce.style.cssText = "border:1px solid", Ce.style.height = "1px", re.style.height = "9px", re.style.display = "block", Kt.appendChild(ce).appendChild(Ce).appendChild(re), ue = e.getComputedStyle(Ce), T = parseInt(ue.height, 10) + parseInt(ue.borderTopWidth, 10) + parseInt(ue.borderBottomWidth, 10) === Ce.offsetHeight, Kt.removeChild(ce)), T
                }
            }))
        })();

        function Ze(r, s, u) {
            var p, w, x, T, z = r.style;
            return u = u || Hn(r), u && (T = u.getPropertyValue(s) || u[s], T === "" && !Je(r) && (T = f.style(r, s)), !G.pixelBoxStyles() && bi.test(T) && Ci.test(s) && (p = z.width, w = z.minWidth, x = z.maxWidth, z.minWidth = z.maxWidth = z.width = T, T = u.width, z.width = p, z.minWidth = w, z.maxWidth = x)), T !== void 0 ? T + "" : T
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
            C = M.createElement("div").style,
            O = {};

        function ee(r) {
            for (var s = r[0].toUpperCase() + r.slice(1), u = o.length; u--;)
                if (r = o[u] + s, r in C) return r
        }

        function xe(r) {
            var s = f.cssProps[r] || O[r];
            return s || (r in C ? r : O[r] = ee(r) || r)
        }
        var We = /^(none|table(?!-c[ea]).+)/,
            It = /^--/,
            qt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Gn = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function Nn(r, s, u) {
            var p = yt.exec(s);
            return p ? Math.max(0, p[2] - (u || 0)) + (p[3] || "px") : s
        }

        function Un(r, s, u, p, w, x) {
            var T = s === "width" ? 1 : 0,
                z = 0,
                H = 0;
            if (u === (p ? "border" : "content")) return 0;
            for (; T < 4; T += 2) u === "margin" && (H += f.css(r, u + bt[T], !0, w)), p ? (u === "content" && (H -= f.css(r, "padding" + bt[T], !0, w)), u !== "margin" && (H -= f.css(r, "border" + bt[T] + "Width", !0, w))) : (H += f.css(r, "padding" + bt[T], !0, w), u !== "padding" ? H += f.css(r, "border" + bt[T] + "Width", !0, w) : z += f.css(r, "border" + bt[T] + "Width", !0, w));
            return !p && x >= 0 && (H += Math.max(0, Math.ceil(r["offset" + s[0].toUpperCase() + s.slice(1)] - x - H - z - .5)) || 0), H
        }

        function Ar(r, s, u) {
            var p = Hn(r),
                w = !G.boxSizingReliable() || u,
                x = w && f.css(r, "boxSizing", !1, p) === "border-box",
                T = x,
                z = Ze(r, s, p),
                H = "offset" + s[0].toUpperCase() + s.slice(1);
            if (bi.test(z)) {
                if (!u) return z;
                z = "auto"
            }
            return (!G.boxSizingReliable() && x || !G.reliableTrDimensions() && Z(r, "tr") || z === "auto" || !parseFloat(z) && f.css(r, "display", !1, p) === "inline") && r.getClientRects().length && (x = f.css(r, "boxSizing", !1, p) === "border-box", T = H in r, T && (z = r[H])), z = parseFloat(z) || 0, z + Un(r, s, u || (x ? "border" : "content"), T, p, z) + "px"
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
                    var w, x, T, z = $(s),
                        H = It.test(s),
                        te = r.style;
                    if (H || (s = xe(z)), T = f.cssHooks[s] || f.cssHooks[z], u !== void 0) {
                        if (x = typeof u, x === "string" && (w = yt.exec(u)) && w[1] && (u = N(r, s, w), x = "number"), u == null || u !== u) return;
                        x === "number" && !H && (u += w && w[3] || (f.cssNumber[z] ? "" : "px")), !G.clearCloneStyle && u === "" && s.indexOf("background") === 0 && (te[s] = "inherit"), (!T || !("set" in T) || (u = T.set(r, u, p)) !== void 0) && (H ? te.setProperty(s, u) : te[s] = u)
                    } else return T && "get" in T && (w = T.get(r, !1, p)) !== void 0 ? w : te[s]
                }
            },
            css: function(r, s, u, p) {
                var w, x, T, z = $(s),
                    H = It.test(s);
                return H || (s = xe(z)), T = f.cssHooks[s] || f.cssHooks[z], T && "get" in T && (w = T.get(r, !0, u)), w === void 0 && (w = Ze(r, s, p)), w === "normal" && s in Gn && (w = Gn[s]), u === "" || u ? (x = parseFloat(w), u === !0 || isFinite(x) ? x || 0 : w) : w
            }
        }), f.each(["height", "width"], function(r, s) {
            f.cssHooks[s] = {
                get: function(u, p, w) {
                    if (p) return We.test(f.css(u, "display")) && (!u.getClientRects().length || !u.getBoundingClientRect().width) ? Hi(u, qt, function() {
                        return Ar(u, s, w)
                    }) : Ar(u, s, w)
                },
                set: function(u, p, w) {
                    var x, T = Hn(u),
                        z = !G.scrollboxSize() && T.position === "absolute",
                        H = z || w,
                        te = H && f.css(u, "boxSizing", !1, T) === "border-box",
                        ce = w ? Un(u, s, w, te, T) : 0;
                    return te && z && (ce -= Math.ceil(u["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(T[s]) - Un(u, s, "border", !1, T) - .5)), ce && (x = yt.exec(p)) && (x[3] || "px") !== "px" && (u.style[s] = p, p = f.css(u, s)), Nn(u, p, ce)
                }
            }
        }), f.cssHooks.marginLeft = y(G.reliableMarginLeft, function(r, s) {
            if (s) return (parseFloat(Ze(r, "marginLeft")) || r.getBoundingClientRect().left - Hi(r, {
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
                    for (var p = 0, w = {}, x = typeof u == "string" ? u.split(" ") : [u]; p < 4; p++) w[r + bt[p] + s] = x[p] || x[p - 2] || x[0];
                    return w
                }
            }, r !== "margin" && (f.cssHooks[r + s].set = Nn)
        }), f.fn.extend({
            css: function(r, s) {
                return m(this, function(u, p, w) {
                    var x, T, z = {},
                        H = 0;
                    if (Array.isArray(p)) {
                        for (x = Hn(u), T = p.length; H < T; H++) z[p[H]] = f.css(u, p[H], !1, x);
                        return z
                    }
                    return w !== void 0 ? f.style(u, p, w) : f.css(u, p)
                }, r, s, arguments.length > 1)
            }
        });

        function Xt(r, s, u, p, w) {
            return new Xt.prototype.init(r, s, u, p, w)
        }
        f.Tween = Xt, Xt.prototype = {
            constructor: Xt,
            init: function(r, s, u, p, w, x) {
                this.elem = r, this.prop = u, this.easing = w || f.easing._default, this.options = s, this.start = this.now = this.cur(), this.end = p, this.unit = x || (f.cssNumber[u] ? "" : "px")
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
        var Ft, Gi, bo = /^(?:toggle|show|hide)$/,
            Co = /queueHooks$/;

        function Or() {
            Gi && (M.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(Or) : e.setTimeout(Or, f.fx.interval), f.fx.tick())
        }

        function Rr() {
            return e.setTimeout(function() {
                Ft = void 0
            }), Ft = Date.now()
        }

        function Ui(r, s) {
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
            var p, w, x, T, z, H, te, ce, Ce = "width" in s || "height" in s,
                re = this,
                ue = {},
                Ue = r.style,
                rt = r.nodeType && j(r),
                je = de.get(r, "fxshow");
            u.queue || (T = f._queueHooks(r, "fx"), T.unqueued == null && (T.unqueued = 0, z = T.empty.fire, T.empty.fire = function() {
                T.unqueued || z()
            }), T.unqueued++, re.always(function() {
                re.always(function() {
                    T.unqueued--, f.queue(r, "fx").length || T.empty.fire()
                })
            }));
            for (p in s)
                if (w = s[p], bo.test(w)) {
                    if (delete s[p], x = x || w === "toggle", w === (rt ? "hide" : "show"))
                        if (w === "show" && je && je[p] !== void 0) rt = !0;
                        else continue;
                    ue[p] = je && je[p] || f.style(r, p)
                } if (H = !f.isEmptyObject(s), !(!H && f.isEmptyObject(ue))) {
                Ce && r.nodeType === 1 && (u.overflow = [Ue.overflow, Ue.overflowX, Ue.overflowY], te = je && je.display, te == null && (te = de.get(r, "display")), ce = f.css(r, "display"), ce === "none" && (te ? ce = te : (X([r], !0), te = r.style.display || te, ce = f.css(r, "display"), X([r]))), (ce === "inline" || ce === "inline-block" && te != null) && f.css(r, "float") === "none" && (H || (re.done(function() {
                    Ue.display = te
                }), te == null && (ce = Ue.display, te = ce === "none" ? "" : ce)), Ue.display = "inline-block")), u.overflow && (Ue.overflow = "hidden", re.always(function() {
                    Ue.overflow = u.overflow[0], Ue.overflowX = u.overflow[1], Ue.overflowY = u.overflow[2]
                })), H = !1;
                for (p in ue) H || (je ? "hidden" in je && (rt = je.hidden) : je = de.access(r, "fxshow", {
                    display: te
                }), x && (je.hidden = !rt), rt && X([r], !0), re.done(function() {
                    rt || X([r]), de.remove(r, "fxshow");
                    for (p in ue) f.style(r, p, ue[p])
                })), H = gs(rt ? je[p] : 0, p, re), p in je || (je[p] = H.start, rt && (H.end = H.start, H.start = 0))
            }
        }

        function ms(r, s) {
            var u, p, w, x, T;
            for (u in r)
                if (p = $(u), w = s[p], x = r[u], Array.isArray(x) && (w = x[1], x = r[u] = x[0]), u !== p && (r[p] = x, delete r[u]), T = f.cssHooks[p], T && "expand" in T) {
                    x = T.expand(x), delete r[p];
                    for (u in x) u in r || (r[u] = x[u], s[u] = w)
                } else s[p] = w
        }

        function bn(r, s, u) {
            var p, w, x = 0,
                T = bn.prefilters.length,
                z = f.Deferred().always(function() {
                    delete H.elem
                }),
                H = function() {
                    if (w) return !1;
                    for (var Ce = Ft || Rr(), re = Math.max(0, te.startTime + te.duration - Ce), ue = re / te.duration || 0, Ue = 1 - ue, rt = 0, je = te.tweens.length; rt < je; rt++) te.tweens[rt].run(Ue);
                    return z.notifyWith(r, [te, Ue, re]), Ue < 1 && je ? re : (je || z.notifyWith(r, [te, 1, 0]), z.resolveWith(r, [te]), !1)
                },
                te = z.promise({
                    elem: r,
                    props: f.extend({}, s),
                    opts: f.extend(!0, {
                        specialEasing: {},
                        easing: f.easing._default
                    }, u),
                    originalProperties: s,
                    originalOptions: u,
                    startTime: Ft || Rr(),
                    duration: u.duration,
                    tweens: [],
                    createTween: function(Ce, re) {
                        var ue = f.Tween(r, te.opts, Ce, re, te.opts.specialEasing[Ce] || te.opts.easing);
                        return te.tweens.push(ue), ue
                    },
                    stop: function(Ce) {
                        var re = 0,
                            ue = Ce ? te.tweens.length : 0;
                        if (w) return this;
                        for (w = !0; re < ue; re++) te.tweens[re].run(1);
                        return Ce ? (z.notifyWith(r, [te, 1, 0]), z.resolveWith(r, [te, Ce])) : z.rejectWith(r, [te, Ce]), this
                    }
                }),
                ce = te.props;
            for (ms(ce, te.opts.specialEasing); x < T; x++)
                if (p = bn.prefilters[x].call(te, r, ce, te.opts), p) return Q(p.stop) && (f._queueHooks(te.elem, te.opts.queue).stop = p.stop.bind(p)), p;
            return f.map(ce, gs, te), Q(te.opts.start) && te.opts.start.call(r, te), te.progress(te.opts.progress).done(te.opts.done, te.opts.complete).fail(te.opts.fail).always(te.opts.always), f.fx.timer(f.extend(H, {
                elem: r,
                anim: te,
                queue: te.opts.queue
            })), te
        }
        f.Animation = f.extend(bn, {
                tweeners: {
                    "*": [function(r, s) {
                        var u = this.createTween(r, s);
                        return N(u.elem, r, yt.exec(s), u), u
                    }]
                },
                tweener: function(r, s) {
                    Q(r) ? (s = r, r = ["*"]) : r = r.match(Te);
                    for (var u, p = 0, w = r.length; p < w; p++) u = r[p], bn.tweeners[u] = bn.tweeners[u] || [], bn.tweeners[u].unshift(s)
                },
                prefilters: [xo],
                prefilter: function(r, s) {
                    s ? bn.prefilters.unshift(r) : bn.prefilters.push(r)
                }
            }), f.speed = function(r, s, u) {
                var p = r && typeof r == "object" ? f.extend({}, r) : {
                    complete: u || !u && s || Q(r) && r,
                    duration: r,
                    easing: u && s || s && !Q(s) && s
                };
                return f.fx.off ? p.duration = 0 : typeof p.duration != "number" && (p.duration in f.fx.speeds ? p.duration = f.fx.speeds[p.duration] : p.duration = f.fx.speeds._default), (p.queue == null || p.queue === !0) && (p.queue = "fx"), p.old = p.complete, p.complete = function() {
                    Q(p.old) && p.old.call(this), p.queue && f.dequeue(this, p.queue)
                }, p
            }, f.fn.extend({
                fadeTo: function(r, s, u, p) {
                    return this.filter(j).css("opacity", 0).show().end().animate({
                        opacity: s
                    }, r, u, p)
                },
                animate: function(r, s, u, p) {
                    var w = f.isEmptyObject(r),
                        x = f.speed(s, u, p),
                        T = function() {
                            var z = bn(this, f.extend({}, r), x);
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
                            T = f.timers,
                            z = de.get(this);
                        if (x) z[x] && z[x].stop && p(z[x]);
                        else
                            for (x in z) z[x] && z[x].stop && Co.test(x) && p(z[x]);
                        for (x = T.length; x--;) T[x].elem === this && (r == null || T[x].queue === r) && (T[x].anim.stop(u), w = !1, T.splice(x, 1));
                        (w || !u) && f.dequeue(this, r)
                    })
                },
                finish: function(r) {
                    return r !== !1 && (r = r || "fx"), this.each(function() {
                        var s, u = de.get(this),
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
                    return p == null || typeof p == "boolean" ? u.apply(this, arguments) : this.animate(Ui(s, !0), p, w, x)
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
                f.fn[r] = function(u, p, w) {
                    return this.animate(s, u, p, w)
                }
            }), f.timers = [], f.fx.tick = function() {
                var r, s = 0,
                    u = f.timers;
                for (Ft = Date.now(); s < u.length; s++) r = u[s], !r() && u[s] === r && u.splice(s--, 1);
                u.length || f.fx.stop(), Ft = void 0
            }, f.fx.timer = function(r) {
                f.timers.push(r), f.fx.start()
            }, f.fx.interval = 13, f.fx.start = function() {
                Gi || (Gi = !0, Or())
            }, f.fx.stop = function() {
                Gi = null
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
                var r = M.createElement("input"),
                    s = M.createElement("select"),
                    u = s.appendChild(M.createElement("option"));
                r.type = "checkbox", G.checkOn = r.value !== "", G.optSelected = u.selected, r = M.createElement("input"), r.value = "t", r.type = "radio", G.radioValue = r.value === "t"
            }();
        var Ir, xi = f.expr.attrHandle;
        f.fn.extend({
            attr: function(r, s) {
                return m(this, f.attr, r, s, arguments.length > 1)
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
                    if ((x !== 1 || !f.isXMLDoc(r)) && (w = f.attrHooks[s.toLowerCase()] || (f.expr.match.bool.test(s) ? Ir : void 0)), u !== void 0) {
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
                        if (!G.radioValue && s === "radio" && Z(r, "input")) {
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
                return s === !1 ? f.removeAttr(r, u) : r.setAttribute(u, u), u
            }
        }, f.each(f.expr.match.bool.source.match(/\w+/g), function(r, s) {
            var u = xi[s] || f.find.attr;
            xi[s] = function(p, w, x) {
                var T, z, H = w.toLowerCase();
                return x || (z = xi[H], xi[H] = T, T = u(p, w, x) != null ? H : null, xi[H] = z), T
            }
        });
        var Eo = /^(?:input|select|textarea|button)$/i,
            _o = /^(?:a|area)$/i;
        f.fn.extend({
            prop: function(r, s) {
                return m(this, f.prop, r, s, arguments.length > 1)
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
                        return s ? parseInt(s, 10) : Eo.test(r.nodeName) || _o.test(r.nodeName) && r.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), G.optSelected || (f.propHooks.selected = {
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

        function Wn(r) {
            var s = r.match(Te) || [];
            return s.join(" ")
        }

        function qn(r) {
            return r.getAttribute && r.getAttribute("class") || ""
        }

        function Dr(r) {
            return Array.isArray(r) ? r : typeof r == "string" ? r.match(Te) || [] : []
        }
        f.fn.extend({
            addClass: function(r) {
                var s, u, p, w, x, T, z, H = 0;
                if (Q(r)) return this.each(function(te) {
                    f(this).addClass(r.call(this, te, qn(this)))
                });
                if (s = Dr(r), s.length) {
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
                if (Q(r)) return this.each(function(te) {
                    f(this).removeClass(r.call(this, te, qn(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (s = Dr(r), s.length) {
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
                return typeof s == "boolean" && p ? s ? this.addClass(r) : this.removeClass(r) : Q(r) ? this.each(function(w) {
                    f(this).toggleClass(r.call(this, w, qn(this), s), s)
                }) : this.each(function() {
                    var w, x, T, z;
                    if (p)
                        for (x = 0, T = f(this), z = Dr(r); w = z[x++];) T.hasClass(w) ? T.removeClass(w) : T.addClass(w);
                    else(r === void 0 || u === "boolean") && (w = qn(this), w && de.set(this, "__className__", w), this.setAttribute && this.setAttribute("class", w || r === !1 ? "" : de.get(this, "__className__") || ""))
                })
            },
            hasClass: function(r) {
                var s, u, p = 0;
                for (s = " " + r + " "; u = this[p++];)
                    if (u.nodeType === 1 && (" " + Wn(qn(u)) + " ").indexOf(s) > -1) return !0;
                return !1
            }
        });
        var So = /\r/g;
        f.fn.extend({
            val: function(r) {
                var s, u, p, w = this[0];
                return arguments.length ? (p = Q(r), this.each(function(x) {
                    var T;
                    this.nodeType === 1 && (p ? T = r.call(this, x, f(this).val()) : T = r, T == null ? T = "" : typeof T == "number" ? T += "" : Array.isArray(T) && (T = f.map(T, function(z) {
                        return z == null ? "" : z + ""
                    })), s = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()], (!s || !("set" in s) || s.set(this, T, "value") === void 0) && (this.value = T))
                })) : w ? (s = f.valHooks[w.type] || f.valHooks[w.nodeName.toLowerCase()], s && "get" in s && (u = s.get(w, "value")) !== void 0 ? u : (u = w.value, typeof u == "string" ? u.replace(So, "") : u == null ? "" : u)) : void 0
            }
        }), f.extend({
            valHooks: {
                option: {
                    get: function(r) {
                        var s = f.find.attr(r, "value");
                        return s != null ? s : Wn(f.text(r))
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
                            if (u = w[p], (u.selected || p === x) && !u.disabled && (!u.parentNode.disabled || !Z(u.parentNode, "optgroup"))) {
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
            }, G.checkOn || (f.valHooks[this].get = function(r) {
                return r.getAttribute("value") === null ? "on" : r.value
            })
        }), G.focusin = "onfocusin" in e;
        var Mr = /^(?:focusinfocus|focusoutblur)$/,
            Xn = function(r) {
                r.stopPropagation()
            };
        f.extend(f.event, {
            trigger: function(r, s, u, p) {
                var w, x, T, z, H, te, ce, Ce, re = [u || M],
                    ue = V.call(r, "type") ? r.type : r,
                    Ue = V.call(r, "namespace") ? r.namespace.split(".") : [];
                if (x = Ce = T = u = u || M, !(u.nodeType === 3 || u.nodeType === 8) && !Mr.test(ue + f.event.triggered) && (ue.indexOf(".") > -1 && (Ue = ue.split("."), ue = Ue.shift(), Ue.sort()), H = ue.indexOf(":") < 0 && "on" + ue, r = r[f.expando] ? r : new f.Event(ue, typeof r == "object" && r), r.isTrigger = p ? 2 : 3, r.namespace = Ue.join("."), r.rnamespace = r.namespace ? new RegExp("(^|\\.)" + Ue.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r.result = void 0, r.target || (r.target = u), s = s == null ? [r] : f.makeArray(s, [r]), ce = f.event.special[ue] || {}, !(!p && ce.trigger && ce.trigger.apply(u, s) === !1))) {
                    if (!p && !ce.noBubble && !v(u)) {
                        for (z = ce.delegateType || ue, Mr.test(z + ue) || (x = x.parentNode); x; x = x.parentNode) re.push(x), T = x;
                        T === (u.ownerDocument || M) && re.push(T.defaultView || T.parentWindow || e)
                    }
                    for (w = 0;
                        (x = re[w++]) && !r.isPropagationStopped();) Ce = x, r.type = w > 1 ? z : ce.bindType || ue, te = (de.get(x, "events") || Object.create(null))[r.type] && de.get(x, "handle"), te && te.apply(x, s), te = H && x[H], te && te.apply && ie(x) && (r.result = te.apply(x, s), r.result === !1 && r.preventDefault());
                    return r.type = ue, !p && !r.isDefaultPrevented() && (!ce._default || ce._default.apply(re.pop(), s) === !1) && ie(u) && H && Q(u[ue]) && !v(u) && (T = u[H], T && (u[H] = null), f.event.triggered = ue, r.isPropagationStopped() && Ce.addEventListener(ue, Xn), u[ue](), r.isPropagationStopped() && Ce.removeEventListener(ue, Xn), f.event.triggered = void 0, T && (u[H] = T)), r.result
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
        }), G.focusin || f.each({
            focus: "focusin",
            blur: "focusout"
        }, function(r, s) {
            var u = function(p) {
                f.event.simulate(s, p.target, f.event.fix(p))
            };
            f.event.special[s] = {
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
        var Ei = e.location,
            Lr = {
                guid: Date.now()
            },
            Wi = /\?/;
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
            var w;
            if (Array.isArray(s)) f.each(s, function(x, T) {
                u || ko.test(r) ? p(r, T) : Pr(r + "[" + (typeof T == "object" && T != null ? x : "") + "]", T, u, p)
            });
            else if (!u && ae(s) === "object")
                for (w in s) Pr(r + "[" + w + "]", s[w], u, p);
            else p(r, s)
        }
        f.param = function(r, s) {
            var u, p = [],
                w = function(x, T) {
                    var z = Q(T) ? T() : T;
                    p[p.length] = encodeURIComponent(x) + "=" + encodeURIComponent(z == null ? "" : z)
                };
            if (r == null) return "";
            if (Array.isArray(r) || r.jquery && !f.isPlainObject(r)) f.each(r, function() {
                w(this.name, this.value)
            });
            else
                for (u in r) Pr(u, r[u], s, w);
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
            Yn = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            ys = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Do = /^(?:GET|HEAD)$/,
            Mo = /^\/\//,
            ws = {},
            Nr = {},
            bs = "*/".concat("*"),
            Vr = M.createElement("a");
        Vr.href = Ei.href;

        function Cs(r) {
            return function(s, u) {
                typeof s != "string" && (u = s, s = "*");
                var p, w = 0,
                    x = s.toLowerCase().match(Te) || [];
                if (Q(u))
                    for (; p = x[w++];) p[0] === "+" ? (p = p.slice(1) || "*", (r[p] = r[p] || []).unshift(u)) : (r[p] = r[p] || []).push(u)
            }
        }

        function xs(r, s, u, p) {
            var w = {},
                x = r === Nr;

            function T(z) {
                var H;
                return w[z] = !0, f.each(r[z] || [], function(te, ce) {
                    var Ce = ce(s, u, p);
                    if (typeof Ce == "string" && !x && !w[Ce]) return s.dataTypes.unshift(Ce), T(Ce), !1;
                    if (x) return !(H = Ce)
                }), H
            }
            return T(s.dataTypes[0]) || !w["*"] && T("*")
        }

        function $r(r, s) {
            var u, p, w = f.ajaxSettings.flatOptions || {};
            for (u in s) s[u] !== void 0 && ((w[u] ? r : p || (p = {}))[u] = s[u]);
            return p && f.extend(!0, r, p), r
        }

        function Lo(r, s, u) {
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
            var w, x, T, z, H, te = {},
                ce = r.dataTypes.slice();
            if (ce[1])
                for (T in r.converters) te[T.toLowerCase()] = r.converters[T];
            for (x = ce.shift(); x;)
                if (r.responseFields[x] && (u[r.responseFields[x]] = s), !H && p && r.dataFilter && (s = r.dataFilter(s, r.dataType)), H = x, x = ce.shift(), x) {
                    if (x === "*") x = H;
                    else if (H !== "*" && H !== x) {
                        if (T = te[H + " " + x] || te["* " + x], !T) {
                            for (w in te)
                                if (z = w.split(" "), z[1] === x && (T = te[H + " " + z[0]] || te["* " + z[0]], T)) {
                                    T === !0 ? T = te[w] : te[w] !== !0 && (x = z[0], ce.unshift(z[1]));
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
                var u, p, w, x, T, z, H, te, ce, Ce, re = f.ajaxSetup({}, s),
                    ue = re.context || re,
                    Ue = re.context && (ue.nodeType || ue.jquery) ? f(ue) : f.event,
                    rt = f.Deferred(),
                    je = f.Callbacks("once memory"),
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
                if (rt.promise(et), re.url = ((r || re.url || Ei.href) + "").replace(Mo, Ei.protocol + "//"), re.type = s.method || s.type || re.method || re.type, re.dataTypes = (re.dataType || "*").toLowerCase().match(Te) || [""], re.crossDomain == null) {
                    z = M.createElement("a");
                    try {
                        z.href = re.url, z.href = z.href, re.crossDomain = Vr.protocol + "//" + Vr.host != z.protocol + "//" + z.host
                    } catch {
                        re.crossDomain = !0
                    }
                }
                if (re.data && re.processData && typeof re.data != "string" && (re.data = f.param(re.data, re.traditional)), xs(ws, re, s, et), H) return et;
                te = f.event && re.global, te && f.active++ === 0 && f.event.trigger("ajaxStart"), re.type = re.type.toUpperCase(), re.hasContent = !Do.test(re.type), p = re.url.replace(Ro, ""), re.hasContent ? re.data && re.processData && (re.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (re.data = re.data.replace(Oo, "+")) : (Ce = re.url.slice(p.length), re.data && (re.processData || typeof re.data == "string") && (p += (Wi.test(p) ? "&" : "?") + re.data, delete re.data), re.cache === !1 && (p = p.replace(Io, "$1"), Ce = (Wi.test(p) ? "&" : "?") + "_=" + Lr.guid++ + Ce), re.url = p + Ce), re.ifModified && (f.lastModified[p] && et.setRequestHeader("If-Modified-Since", f.lastModified[p]), f.etag[p] && et.setRequestHeader("If-None-Match", f.etag[p])), (re.data && re.hasContent && re.contentType !== !1 || s.contentType) && et.setRequestHeader("Content-Type", re.contentType), et.setRequestHeader("Accept", re.dataTypes[0] && re.accepts[re.dataTypes[0]] ? re.accepts[re.dataTypes[0]] + (re.dataTypes[0] !== "*" ? ", " + bs + "; q=0.01" : "") : re.accepts["*"]);
                for (ce in re.headers) et.setRequestHeader(ce, re.headers[ce]);
                if (re.beforeSend && (re.beforeSend.call(ue, et, re) === !1 || H)) return et.abort();
                if (_t = "abort", je.add(re.complete), et.done(re.success), et.fail(re.error), u = xs(Nr, re, s, et), !u) on(-1, "No Transport");
                else {
                    if (et.readyState = 1, te && Ue.trigger("ajaxSend", [et, re]), H) return et;
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

                function on(ft, Dt, Si, qi) {
                    var hn, Kn, Jn, an, Mn, vn = Dt;
                    H || (H = !0, T && e.clearTimeout(T), u = void 0, w = qi || "", et.readyState = ft > 0 ? 4 : 0, hn = ft >= 200 && ft < 300 || ft === 304, Si && (an = Lo(re, et, Si)), !hn && f.inArray("script", re.dataTypes) > -1 && f.inArray("json", re.dataTypes) < 0 && (re.converters["text script"] = function() {}), an = Po(re, an, et, hn), hn ? (re.ifModified && (Mn = et.getResponseHeader("Last-Modified"), Mn && (f.lastModified[p] = Mn), Mn = et.getResponseHeader("etag"), Mn && (f.etag[p] = Mn)), ft === 204 || re.type === "HEAD" ? vn = "nocontent" : ft === 304 ? vn = "notmodified" : (vn = an.state, Kn = an.data, Jn = an.error, hn = !Jn)) : (Jn = vn, (ft || !vn) && (vn = "error", ft < 0 && (ft = 0))), et.status = ft, et.statusText = (Dt || vn) + "", hn ? rt.resolveWith(ue, [Kn, vn, et]) : rt.rejectWith(ue, [et, vn, Jn]), et.statusCode(zt), zt = void 0, te && Ue.trigger(hn ? "ajaxSuccess" : "ajaxError", [et, re, hn ? Kn : Jn]), je.fireWith(ue, [et, vn]), te && (Ue.trigger("ajaxComplete", [et, re]), --f.active || f.event.trigger("ajaxStop")))
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
            f[s] = function(u, p, w, x) {
                return Q(p) && (x = x || w, w = p, p = void 0), f.ajax(f.extend({
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
                return this[0] && (Q(r) && (r = r.call(this[0])), s = f(r, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && s.insertBefore(this[0]), s.map(function() {
                    for (var u = this; u.firstElementChild;) u = u.firstElementChild;
                    return u
                }).append(this)), this
            },
            wrapInner: function(r) {
                return Q(r) ? this.each(function(s) {
                    f(this).wrapInner(r.call(this, s))
                }) : this.each(function() {
                    var s = f(this),
                        u = s.contents();
                    u.length ? u.wrapAll(r) : s.append(r)
                })
            },
            wrap: function(r) {
                var s = Q(r);
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
            _i = f.ajaxSettings.xhr();
        G.cors = !!_i && "withCredentials" in _i, G.ajax = _i = !!_i, f.ajaxTransport(function(r) {
            var s, u;
            if (G.cors || _i && !r.crossDomain) return {
                send: function(p, w) {
                    var x, T = r.xhr();
                    if (T.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                        for (x in r.xhrFields) T[x] = r.xhrFields[x];
                    r.mimeType && T.overrideMimeType && T.overrideMimeType(r.mimeType), !r.crossDomain && !p["X-Requested-With"] && (p["X-Requested-With"] = "XMLHttpRequest");
                    for (x in p) T.setRequestHeader(x, p[x]);
                    s = function(z) {
                        return function() {
                            s && (s = u = T.onload = T.onerror = T.onabort = T.ontimeout = T.onreadystatechange = null, z === "abort" ? T.abort() : z === "error" ? typeof T.status != "number" ? w(0, "error") : w(T.status, T.statusText) : w(No[T.status] || T.status, T.statusText, (T.responseType || "text") !== "text" || typeof T.responseText != "string" ? {
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
                        }), M.head.appendChild(s[0])
                    },
                    abort: function() {
                        u && u()
                    }
                }
            }
        });
        var Br = [],
            jr = /(=)\?(?=&|$)|\?\?/;
        f.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var r = Br.pop() || f.expando + "_" + Lr.guid++;
                return this[r] = !0, r
            }
        }), f.ajaxPrefilter("json jsonp", function(r, s, u) {
            var p, w, x, T = r.jsonp !== !1 && (jr.test(r.url) ? "url" : typeof r.data == "string" && (r.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && jr.test(r.data) && "data");
            if (T || r.dataTypes[0] === "jsonp") return p = r.jsonpCallback = Q(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, T ? r[T] = r[T].replace(jr, "$1" + p) : r.jsonp !== !1 && (r.url += (Wi.test(r.url) ? "&" : "?") + r.jsonp + "=" + p), r.converters["script json"] = function() {
                return x || f.error(p + " was not called"), x[0]
            }, r.dataTypes[0] = "json", w = e[p], e[p] = function() {
                x = arguments
            }, u.always(function() {
                w === void 0 ? f(e).removeProp(p) : e[p] = w, r[p] && (r.jsonpCallback = s.jsonpCallback, Br.push(p)), x && Q(w) && w(x[0]), x = w = void 0
            }), "script"
        }), G.createHTMLDocument = function() {
            var r = M.implementation.createHTMLDocument("").body;
            return r.innerHTML = "<form></form><form></form>", r.childNodes.length === 2
        }(), f.parseHTML = function(r, s, u) {
            if (typeof r != "string") return [];
            typeof s == "boolean" && (u = s, s = !1);
            var p, w, x;
            return s || (G.createHTMLDocument ? (s = M.implementation.createHTMLDocument(""), p = s.createElement("base"), p.href = M.location.href, s.head.appendChild(p)) : s = M), w = Fe.exec(r), x = !u && [], w ? [s.createElement(w[1])] : (w = In([r], s, x), x && x.length && f(x).remove(), f.merge([], w.childNodes))
        }, f.fn.load = function(r, s, u) {
            var p, w, x, T = this,
                z = r.indexOf(" ");
            return z > -1 && (p = Wn(r.slice(z)), r = r.slice(0, z)), Q(s) ? (u = s, s = void 0) : s && typeof s == "object" && (w = "POST"), T.length > 0 && f.ajax({
                url: r,
                type: w || "GET",
                dataType: "html",
                data: s
            }).done(function(H) {
                x = arguments, T.html(p ? f("<div>").append(f.parseHTML(H)).find(p) : H)
            }).always(u && function(H, te) {
                T.each(function() {
                    u.apply(this, x || [H.responseText, te, H])
                })
            }), this
        }, f.expr.pseudos.animated = function(r) {
            return f.grep(f.timers, function(s) {
                return r === s.elem
            }).length
        }, f.offset = {
            setOffset: function(r, s, u) {
                var p, w, x, T, z, H, te, ce = f.css(r, "position"),
                    Ce = f(r),
                    re = {};
                ce === "static" && (r.style.position = "relative"), z = Ce.offset(), x = f.css(r, "top"), H = f.css(r, "left"), te = (ce === "absolute" || ce === "fixed") && (x + H).indexOf("auto") > -1, te ? (p = Ce.position(), T = p.top, w = p.left) : (T = parseFloat(x) || 0, w = parseFloat(H) || 0), Q(s) && (s = s.call(r, u, f.extend({}, z))), s.top != null && (re.top = s.top - z.top + T), s.left != null && (re.left = s.left - z.left + w), "using" in s ? s.using.call(r, re) : Ce.css(re)
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
                    return r || Kt
                })
            }
        }), f.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(r, s) {
            var u = s === "pageYOffset";
            f.fn[r] = function(p) {
                return m(this, function(w, x, T) {
                    var z;
                    if (v(w) ? z = w : w.nodeType === 9 && (z = w.defaultView), T === void 0) return z ? z[s] : w[x];
                    z ? z.scrollTo(u ? z.pageXOffset : T, u ? T : z.pageYOffset) : w[x] = T
                }, r, p, arguments.length)
            }
        }), f.each(["top", "left"], function(r, s) {
            f.cssHooks[s] = y(G.pixelPosition, function(u, p) {
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
                f.fn[p] = function(w, x) {
                    var T = arguments.length && (u || typeof w != "boolean"),
                        z = u || (w === !0 || x === !0 ? "margin" : "border");
                    return m(this, function(H, te, ce) {
                        var Ce;
                        return v(H) ? p.indexOf("outer") === 0 ? H["inner" + r] : H.document.documentElement["client" + r] : H.nodeType === 9 ? (Ce = H.documentElement, Math.max(H.body["scroll" + r], Ce["scroll" + r], H.body["offset" + r], Ce["offset" + r], Ce["client" + r])) : ce === void 0 ? f.css(H, te, z) : f.style(H, te, ce, z)
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
        var Es = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        f.proxy = function(r, s) {
            var u, p, w;
            if (typeof s == "string" && (u = r[s], s = r, r = u), !!Q(r)) return p = d.call(arguments, 2), w = function() {
                return r.apply(s || this, p.concat(d.call(arguments)))
            }, w.guid = r.guid = r.guid || f.guid++, w
        }, f.holdReady = function(r) {
            r ? f.readyWait++ : f.ready(!0)
        }, f.isArray = Array.isArray, f.parseJSON = JSON.parse, f.nodeName = Z, f.isFunction = Q, f.isWindow = v, f.camelCase = $, f.type = ae, f.now = Date.now, f.isNumeric = function(r) {
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
const se = Na.exports;
var ot = {};
(function(t) {
    (function(e) {
        var n = typeof self == "object" && self.self === self && self || typeof vt == "object" && vt.global === vt && vt; {
            var i = Ni.exports,
                a;
            try {
                a = Na.exports
            } catch {}
            e(n, t, i, a)
        }
    })(function(e, n, i, a) {
        var d = e.Backbone,
            g = Array.prototype.slice;
        n.VERSION = "1.3.3", n.$ = a, n.noConflict = function() {
            return e.Backbone = d, this
        }, n.emulateHTTP = !1, n.emulateJSON = !1;
        var E = function(_, l, m) {
                switch (_) {
                    case 1:
                        return function() {
                            return i[l](this[m])
                        };
                    case 2:
                        return function(S) {
                            return i[l](this[m], S)
                        };
                    case 3:
                        return function(S, R) {
                            return i[l](this[m], A(S, this), R)
                        };
                    case 4:
                        return function(S, R, P) {
                            return i[l](this[m], A(S, this), R, P)
                        };
                    default:
                        return function() {
                            var S = g.call(arguments);
                            return S.unshift(this[m]), i[l].apply(i, S)
                        }
                }
            },
            k = function(_, l, m) {
                i.each(l, function(S, R) {
                    i[R] && (_.prototype[R] = E(S, R, m))
                })
            },
            A = function(_, l) {
                return i.isFunction(_) ? _ : i.isObject(_) && !l._isModel(_) ? D(_) : i.isString(_) ? function(m) {
                    return m.get(_)
                } : _
            },
            D = function(_) {
                var l = i.matches(_);
                return function(m) {
                    return l(m.attributes)
                }
            },
            V = n.Events = {},
            J = /\s+/,
            q = function(_, l, m, S, R) {
                var P = 0,
                    $;
                if (m && typeof m == "object")
                    for (S !== void 0 && ("context" in R) && R.context === void 0 && (R.context = S), $ = i.keys(m); P < $.length; P++) l = q(_, l, $[P], m[$[P]], R);
                else if (m && J.test(m))
                    for ($ = m.split(J); P < $.length; P++) l = _(l, $[P], S, R);
                else l = _(l, m, S, R);
                return l
            };
        V.on = function(_, l, m) {
            return G(this, _, l, m)
        };
        var G = function(_, l, m, S, R) {
            if (_._events = q(Q, _._events || {}, l, m, {
                    context: S,
                    ctx: _,
                    listening: R
                }), R) {
                var P = _._listeners || (_._listeners = {});
                P[R.id] = R
            }
            return _
        };
        V.listenTo = function(_, l, m) {
            if (!_) return this;
            var S = _._listenId || (_._listenId = i.uniqueId("l")),
                R = this._listeningTo || (this._listeningTo = {}),
                P = R[S];
            if (!P) {
                var $ = this._listenId || (this._listenId = i.uniqueId("l"));
                P = R[S] = {
                    obj: _,
                    objId: S,
                    id: $,
                    listeningTo: R,
                    count: 0
                }
            }
            return G(_, l, m, this, P), this
        };
        var Q = function(_, l, m, S) {
            if (m) {
                var R = _[l] || (_[l] = []),
                    P = S.context,
                    $ = S.ctx,
                    ie = S.listening;
                ie && ie.count++, R.push({
                    callback: m,
                    context: P,
                    ctx: P || $,
                    listening: ie
                })
            }
            return _
        };
        V.off = function(_, l, m) {
            return this._events ? (this._events = q(v, this._events, _, l, {
                context: m,
                listeners: this._listeners
            }), this) : this
        }, V.stopListening = function(_, l, m) {
            var S = this._listeningTo;
            if (!S) return this;
            for (var R = _ ? [_._listenId] : i.keys(S), P = 0; P < R.length; P++) {
                var $ = S[R[P]];
                if (!$) break;
                $.obj.off(l, m, this)
            }
            return this
        };
        var v = function(_, l, m, S) {
            if (!!_) {
                var R = 0,
                    P, $ = S.context,
                    ie = S.listeners;
                if (!l && !m && !$) {
                    for (var ke = i.keys(ie); R < ke.length; R++) P = ie[ke[R]], delete ie[P.id], delete P.listeningTo[P.objId];
                    return
                }
                for (var de = l ? [l] : i.keys(_); R < de.length; R++) {
                    l = de[R];
                    var De = _[l];
                    if (!De) break;
                    for (var Me = [], nt = 0; nt < De.length; nt++) {
                        var Ct = De[nt];
                        m && m !== Ct.callback && m !== Ct.callback._callback || $ && $ !== Ct.context ? Me.push(Ct) : (P = Ct.listening, P && --P.count === 0 && (delete ie[P.id], delete P.listeningTo[P.objId]))
                    }
                    Me.length ? _[l] = Me : delete _[l]
                }
                return _
            }
        };
        V.once = function(_, l, m) {
            var S = q(M, {}, _, l, i.bind(this.off, this));
            return typeof _ == "string" && m == null && (l = void 0), this.on(S, l, m)
        }, V.listenToOnce = function(_, l, m) {
            var S = q(M, {}, l, m, i.bind(this.stopListening, this, _));
            return this.listenTo(_, S)
        };
        var M = function(_, l, m, S) {
            if (m) {
                var R = _[l] = i.once(function() {
                    S(l, R), m.apply(this, arguments)
                });
                R._callback = m
            }
            return _
        };
        V.trigger = function(_) {
            if (!this._events) return this;
            for (var l = Math.max(0, arguments.length - 1), m = Array(l), S = 0; S < l; S++) m[S] = arguments[S + 1];
            return q(W, this._events, _, void 0, m), this
        };
        var W = function(_, l, m, S) {
                if (_) {
                    var R = _[l],
                        P = _.all;
                    R && P && (P = P.slice()), R && oe(R, S), P && oe(P, [l].concat(S))
                }
                return _
            },
            oe = function(_, l) {
                var m, S = -1,
                    R = _.length,
                    P = l[0],
                    $ = l[1],
                    ie = l[2];
                switch (l.length) {
                    case 0:
                        for (; ++S < R;)(m = _[S]).callback.call(m.ctx);
                        return;
                    case 1:
                        for (; ++S < R;)(m = _[S]).callback.call(m.ctx, P);
                        return;
                    case 2:
                        for (; ++S < R;)(m = _[S]).callback.call(m.ctx, P, $);
                        return;
                    case 3:
                        for (; ++S < R;)(m = _[S]).callback.call(m.ctx, P, $, ie);
                        return;
                    default:
                        for (; ++S < R;)(m = _[S]).callback.apply(m.ctx, l);
                        return
                }
            };
        V.bind = V.on, V.unbind = V.off, i.extend(n, V);
        var ae = n.Model = function(_, l) {
            var m = _ || {};
            l || (l = {}), this.cid = i.uniqueId(this.cidPrefix), this.attributes = {}, l.collection && (this.collection = l.collection), l.parse && (m = this.parse(m, l) || {});
            var S = i.result(this, "defaults");
            m = i.defaults(i.extend({}, S, m), S), this.set(m, l), this.changed = {}, this.initialize.apply(this, arguments)
        };
        i.extend(ae.prototype, V, {
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
            set: function(_, l, m) {
                if (_ == null) return this;
                var S;
                if (typeof _ == "object" ? (S = _, m = l) : (S = {})[_] = l, m || (m = {}), !this._validate(S, m)) return !1;
                var R = m.unset,
                    P = m.silent,
                    $ = [],
                    ie = this._changing;
                this._changing = !0, ie || (this._previousAttributes = i.clone(this.attributes), this.changed = {});
                var ke = this.attributes,
                    de = this.changed,
                    De = this._previousAttributes;
                for (var Me in S) l = S[Me], i.isEqual(ke[Me], l) || $.push(Me), i.isEqual(De[Me], l) ? delete de[Me] : de[Me] = l, R ? delete ke[Me] : ke[Me] = l;
                if (this.idAttribute in S && (this.id = this.get(this.idAttribute)), !P) {
                    $.length && (this._pending = m);
                    for (var nt = 0; nt < $.length; nt++) this.trigger("change:" + $[nt], this, ke[$[nt]], m)
                }
                if (ie) return this;
                if (!P)
                    for (; this._pending;) m = this._pending, this._pending = !1, this.trigger("change", this, m);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(_, l) {
                return this.set(_, void 0, i.extend({}, l, {
                    unset: !0
                }))
            },
            clear: function(_) {
                var l = {};
                for (var m in this.attributes) l[m] = void 0;
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
                    m = {};
                for (var S in _) {
                    var R = _[S];
                    i.isEqual(l[S], R) || (m[S] = R)
                }
                return i.size(m) ? m : !1
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
                    m = _.success;
                return _.success = function(S) {
                    var R = _.parse ? l.parse(S, _) : S;
                    if (!l.set(R, _)) return !1;
                    m && m.call(_.context, l, S, _), l.trigger("sync", l, S, _)
                }, Ut(this, _), this.sync("read", this, _)
            },
            save: function(_, l, m) {
                var S;
                _ == null || typeof _ == "object" ? (S = _, m = l) : (S = {})[_] = l, m = i.extend({
                    validate: !0,
                    parse: !0
                }, m);
                var R = m.wait;
                if (S && !R) {
                    if (!this.set(S, m)) return !1
                } else if (!this._validate(S, m)) return !1;
                var P = this,
                    $ = m.success,
                    ie = this.attributes;
                m.success = function(De) {
                    P.attributes = ie;
                    var Me = m.parse ? P.parse(De, m) : De;
                    if (R && (Me = i.extend({}, S, Me)), Me && !P.set(Me, m)) return !1;
                    $ && $.call(m.context, P, De, m), P.trigger("sync", P, De, m)
                }, Ut(this, m), S && R && (this.attributes = i.extend({}, ie, S));
                var ke = this.isNew() ? "create" : m.patch ? "patch" : "update";
                ke === "patch" && !m.attrs && (m.attrs = S);
                var de = this.sync(ke, this, m);
                return this.attributes = ie, de
            },
            destroy: function(_) {
                _ = _ ? i.clone(_) : {};
                var l = this,
                    m = _.success,
                    S = _.wait,
                    R = function() {
                        l.stopListening(), l.trigger("destroy", l, l.collection, _)
                    };
                _.success = function($) {
                    S && R(), m && m.call(_.context, l, $, _), l.isNew() || l.trigger("sync", l, $, _)
                };
                var P = !1;
                return this.isNew() ? i.defer(_.success) : (Ut(this, _), P = this.sync("delete", this, _)), S || R(), P
            },
            url: function() {
                var _ = i.result(this, "urlRoot") || i.result(this.collection, "url") || $t();
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
                var m = this.validationError = this.validate(_, l) || null;
                return m ? (this.trigger("invalid", this, m, i.extend(l, {
                    validationError: m
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
        k(ae, ye, "attributes");
        var f = n.Collection = function(_, l) {
                l || (l = {}), l.model && (this.model = l.model), l.comparator !== void 0 && (this.comparator = l.comparator), this._reset(), this.initialize.apply(this, arguments), _ && this.reset(_, i.extend({
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
            Pe = function(_, l, m) {
                m = Math.min(Math.max(m, 0), _.length);
                var S = Array(_.length - m),
                    R = l.length,
                    P;
                for (P = 0; P < S.length; P++) S[P] = _[P + m];
                for (P = 0; P < R; P++) _[P + m] = l[P];
                for (P = 0; P < S.length; P++) _[P + R + m] = S[P]
            };
        i.extend(f.prototype, V, {
            model: ae,
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
                }, l, Oe))
            },
            remove: function(_, l) {
                l = i.extend({}, l);
                var m = !i.isArray(_);
                _ = m ? [_] : _.slice();
                var S = this._removeModels(_, l);
                return !l.silent && S.length && (l.changes = {
                    added: [],
                    merged: [],
                    removed: S
                }, this.trigger("update", this, l)), m ? S[0] : S
            },
            set: function(_, l) {
                if (_ != null) {
                    l = i.extend({}, _e, l), l.parse && !this._isModel(_) && (_ = this.parse(_, l) || []);
                    var m = !i.isArray(_);
                    _ = m ? [_] : _.slice();
                    var S = l.at;
                    S != null && (S = +S), S > this.length && (S = this.length), S < 0 && (S += this.length + 1);
                    var R = [],
                        P = [],
                        $ = [],
                        ie = [],
                        ke = {},
                        de = l.add,
                        De = l.merge,
                        Me = l.remove,
                        nt = !1,
                        Ct = this.comparator && S == null && l.sort !== !1,
                        rn = i.isString(this.comparator) ? this.comparator : null,
                        ct, yt;
                    for (yt = 0; yt < _.length; yt++) {
                        ct = _[yt];
                        var bt = this.get(ct);
                        if (bt) {
                            if (De && ct !== bt) {
                                var Kt = this._isModel(ct) ? ct.attributes : ct;
                                l.parse && (Kt = bt.parse(Kt, l)), bt.set(Kt, l), $.push(bt), Ct && !nt && (nt = bt.hasChanged(rn))
                            }
                            ke[bt.cid] || (ke[bt.cid] = !0, R.push(bt)), _[yt] = bt
                        } else de && (ct = _[yt] = this._prepareModel(ct, l), ct && (P.push(ct), this._addReference(ct, l), ke[ct.cid] = !0, R.push(ct)))
                    }
                    if (Me) {
                        for (yt = 0; yt < this.length; yt++) ct = this.models[yt], ke[ct.cid] || ie.push(ct);
                        ie.length && this._removeModels(ie, l)
                    }
                    var Je = !1,
                        Lt = !Ct && de && Me;
                    if (R.length && Lt ? (Je = this.length !== R.length || i.some(this.models, function(j, N) {
                            return j !== R[N]
                        }), this.models.length = 0, Pe(this.models, R, 0), this.length = this.models.length) : P.length && (Ct && (nt = !0), Pe(this.models, P, S == null ? this.length : S), this.length = this.models.length), nt && this.sort({
                            silent: !0
                        }), !l.silent) {
                        for (yt = 0; yt < P.length; yt++) S != null && (l.index = S + yt), ct = P[yt], ct.trigger("add", ct, this, l);
                        (nt || Je) && this.trigger("sort", this, l), (P.length || ie.length || $.length) && (l.changes = {
                            added: P,
                            removed: ie,
                            merged: $
                        }, this.trigger("update", this, l))
                    }
                    return m ? _[0] : _
                }
            },
            reset: function(_, l) {
                l = l ? i.clone(l) : {};
                for (var m = 0; m < this.models.length; m++) this._removeReference(this.models[m], l);
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
                return g.apply(this.models, arguments)
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
                var m = l.length;
                return i.isFunction(l) && (l = i.bind(l, this)), m === 1 || i.isString(l) ? this.models = this.sortBy(l) : this.models.sort(l), _.silent || this.trigger("sort", this, _), this
            },
            pluck: function(_) {
                return this.map(_ + "")
            },
            fetch: function(_) {
                _ = i.extend({
                    parse: !0
                }, _);
                var l = _.success,
                    m = this;
                return _.success = function(S) {
                    var R = _.reset ? "reset" : "set";
                    m[R](S, _), l && l.call(_.context, m, S, _), m.trigger("sync", m, S, _)
                }, Ut(this, _), this.sync("read", this, _)
            },
            create: function(_, l) {
                l = l ? i.clone(l) : {};
                var m = l.wait;
                if (_ = this._prepareModel(_, l), !_) return !1;
                m || this.add(_, l);
                var S = this,
                    R = l.success;
                return l.success = function(P, $, ie) {
                    m && S.add(P, ie), R && R.call(ie.context, P, $, ie)
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
                var m = new this.model(_, l);
                return m.validationError ? (this.trigger("invalid", this, m.validationError, l), !1) : m
            },
            _removeModels: function(_, l) {
                for (var m = [], S = 0; S < _.length; S++) {
                    var R = this.get(_[S]);
                    if (!!R) {
                        var P = this.indexOf(R);
                        this.models.splice(P, 1), this.length--, delete this._byId[R.cid];
                        var $ = this.modelId(R.attributes);
                        $ != null && delete this._byId[$], l.silent || (l.index = P, R.trigger("remove", R, this, l)), m.push(R), this._removeReference(R, l)
                    }
                }
                return m
            },
            _isModel: function(_) {
                return _ instanceof ae
            },
            _addReference: function(_, l) {
                this._byId[_.cid] = _;
                var m = this.modelId(_.attributes);
                m != null && (this._byId[m] = _), _.on("all", this._onModelEvent, this)
            },
            _removeReference: function(_, l) {
                delete this._byId[_.cid];
                var m = this.modelId(_.attributes);
                m != null && delete this._byId[m], this === _.collection && delete _.collection, _.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(_, l, m, S) {
                if (l) {
                    if ((_ === "add" || _ === "remove") && m !== this) return;
                    if (_ === "destroy" && this.remove(l, S), _ === "change") {
                        var R = this.modelId(l.previousAttributes()),
                            P = this.modelId(l.attributes);
                        R !== P && (R != null && delete this._byId[R], P != null && (this._byId[P] = l))
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
        var $e = n.View = function(_) {
                this.cid = i.uniqueId("view"), i.extend(this, i.pick(_, Fe)), this._ensureElement(), this.initialize.apply(this, arguments)
            },
            Z = /^(\S+)\s*(.*)$/,
            Fe = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        i.extend($e.prototype, V, {
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
                    var m = _[l];
                    if (i.isFunction(m) || (m = this[m]), !!m) {
                        var S = l.match(Z);
                        this.delegate(S[1], S[2], i.bind(m, this))
                    }
                }
                return this
            },
            delegate: function(_, l, m) {
                return this.$el.on(_ + ".delegateEvents" + this.cid, l, m), this
            },
            undelegateEvents: function() {
                return this.$el && this.$el.off(".delegateEvents" + this.cid), this
            },
            undelegate: function(_, l, m) {
                return this.$el.off(_ + ".delegateEvents" + this.cid, l, m), this
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
        }), n.sync = function(_, l, m) {
            var S = U[_];
            i.defaults(m || (m = {}), {
                emulateHTTP: n.emulateHTTP,
                emulateJSON: n.emulateJSON
            });
            var R = {
                type: S,
                dataType: "json"
            };
            if (m.url || (R.url = i.result(l, "url") || $t()), m.data == null && l && (_ === "create" || _ === "update" || _ === "patch") && (R.contentType = "application/json", R.data = JSON.stringify(m.attrs || l.toJSON(m))), m.emulateJSON && (R.contentType = "application/x-www-form-urlencoded", R.data = R.data ? {
                    model: R.data
                } : {}), m.emulateHTTP && (S === "PUT" || S === "DELETE" || S === "PATCH")) {
                R.type = "POST", m.emulateJSON && (R.data._method = S);
                var P = m.beforeSend;
                m.beforeSend = function(ke) {
                    if (ke.setRequestHeader("X-HTTP-Method-Override", S), P) return P.apply(this, arguments)
                }
            }
            R.type !== "GET" && !m.emulateJSON && (R.processData = !1);
            var $ = m.error;
            m.error = function(ke, de, De) {
                m.textStatus = de, m.errorThrown = De, $ && $.call(m.context, ke, de, De)
            };
            var ie = m.xhr = n.ajax(i.extend(R, m));
            return l.trigger("request", l, ie, m), ie
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
        var le = n.Router = function(_) {
                _ || (_ = {}), _.routes && (this.routes = _.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            Ae = /\((.*?)\)/g,
            be = /(\(\?)?:\w+/g,
            we = /\*\w+/g,
            he = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        i.extend(le.prototype, V, {
            initialize: function() {},
            route: function(_, l, m) {
                i.isRegExp(_) || (_ = this._routeToRegExp(_)), i.isFunction(l) && (m = l, l = ""), m || (m = this[l]);
                var S = this;
                return n.history.route(_, function(R) {
                    var P = S._extractParameters(_, R);
                    S.execute(m, P, l) !== !1 && (S.trigger.apply(S, ["route:" + l].concat(P)), S.trigger("route", l, P), n.history.trigger("route", S, l, P))
                }), this
            },
            execute: function(_, l, m) {
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
                return _ = _.replace(he, "\\$&").replace(Ae, "(?:$1)?").replace(be, function(l, m) {
                    return m ? l : "([^/?]+)"
                }).replace(we, "([^?]*?)"), new RegExp("^" + _ + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(_, l) {
                var m = _.exec(l).slice(1);
                return i.map(m, function(S, R) {
                    return R === m.length - 1 ? S || null : S ? decodeURIComponent(S) : null
                })
            }
        });
        var Se = n.History = function() {
                this.handlers = [], this.checkUrl = i.bind(this.checkUrl, this), typeof window < "u" && (this.location = window.location, this.history = window.history)
            },
            Te = /^[#\/]|\s+$/g,
            Be = /^\/+|\/+$/g,
            Ke = /#.*$/;
        Se.started = !1, i.extend(Se.prototype, V, {
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
                return _ == null && (this._usePushState || !this._wantsHashChange ? _ = this.getPath() : _ = this.getHash()), _.replace(Te, "")
            },
            start: function(_) {
                if (Se.started) throw new Error("Backbone.history has already been started");
                if (Se.started = !0, this.options = i.extend({
                        root: "/"
                    }, this.options, _), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (document.documentMode === void 0 || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.history && this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(Be, "/"), this._wantsHashChange && this._wantsPushState)
                    if (!this._hasPushState && !this.atRoot()) {
                        var l = this.root.slice(0, -1) || "/";
                        return this.location.replace(l + "#" + this.getPath()), !0
                    } else this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                        replace: !0
                    });
                if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                    this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
                    var m = document.body,
                        S = m.insertBefore(this.iframe, m.firstChild).contentWindow;
                    S.document.open(), S.document.close(), S.location.hash = "#" + this.fragment
                }
                var R = window.addEventListener || function(P, $) {
                    return attachEvent("on" + P, $)
                };
                if (this._usePushState ? R("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? R("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl()
            },
            stop: function() {
                var _ = window.removeEventListener || function(l, m) {
                    return detachEvent("on" + l, m)
                };
                this._usePushState ? _("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && _("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), Se.started = !1
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
                if (!Se.started) return !1;
                (!l || l === !0) && (l = {
                    trigger: !!l
                }), _ = this.getFragment(_ || "");
                var m = this.root;
                (_ === "" || _.charAt(0) === "?") && (m = m.slice(0, -1) || "/");
                var S = m + _;
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
            _updateHash: function(_, l, m) {
                if (m) {
                    var S = _.href.replace(/(javascript:|#).*$/, "");
                    _.replace(S + "#" + l)
                } else _.hash = "#" + l
            }
        }), n.history = new Se;
        var dt = function(_, l) {
            var m = this,
                S;
            return _ && i.has(_, "constructor") ? S = _.constructor : S = function() {
                return m.apply(this, arguments)
            }, i.extend(S, m, l), S.prototype = i.create(m.prototype, _), S.prototype.constructor = S, S.__super__ = m.prototype, S
        };
        ae.extend = f.extend = le.extend = $e.extend = Se.extend = dt;
        var $t = function() {
                throw new Error('A "url" property or function must be specified')
            },
            Ut = function(_, l) {
                var m = l.error;
                l.error = function(S) {
                    m && m.call(l.context, _, S, l), _.trigger("error", _, S, l)
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
            var a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
                    return typeof v
                } : function(v) {
                    return v && typeof Symbol == "function" && v.constructor === Symbol ? "symbol" : typeof v
                },
                d = i.Radio,
                g = i.Radio = {};
            g.VERSION = "2.0.0", g.noConflict = function() {
                return i.Radio = d, this
            }, g.DEBUG = !1, g._debugText = function(v, M, W) {
                return v + (W ? " on the " + W + " channel" : "") + ': "' + M + '"'
            }, g.debugLog = function(v, M, W) {
                g.DEBUG && console && console.warn && console.warn(g._debugText(v, M, W))
            };
            var E = /\s+/;
            g._eventsApi = function(v, M, W, oe) {
                if (!W) return !1;
                var ae = {};
                if ((typeof W > "u" ? "undefined" : a(W)) === "object") {
                    for (var ye in W) {
                        var f = v[M].apply(v, [ye, W[ye]].concat(oe));
                        E.test(ye) ? n.extend(ae, f) : ae[ye] = f
                    }
                    return ae
                }
                if (E.test(W)) {
                    for (var _e = W.split(E), Oe = 0, Pe = _e.length; Oe < Pe; Oe++) ae[_e[Oe]] = v[M].apply(v, [_e[Oe]].concat(oe));
                    return ae
                }
                return !1
            }, g._callHandler = function(v, M, W) {
                var oe = W[0],
                    ae = W[1],
                    ye = W[2];
                switch (W.length) {
                    case 0:
                        return v.call(M);
                    case 1:
                        return v.call(M, oe);
                    case 2:
                        return v.call(M, oe, ae);
                    case 3:
                        return v.call(M, oe, ae, ye);
                    default:
                        return v.apply(M, W)
                }
            };

            function k(v, M, W, oe) {
                var ae = v[M];
                if ((!W || W === ae.callback || W === ae.callback._callback) && (!oe || oe === ae.context)) return delete v[M], !0
            }

            function A(v, M, W, oe) {
                v || (v = {});
                for (var ae = M ? [M] : n.keys(v), ye = !1, f = 0, _e = ae.length; f < _e; f++) M = ae[f], !!v[M] && k(v, M, W, oe) && (ye = !0);
                return ye
            }
            var D = {};

            function V(v) {
                return D[v] || (D[v] = n.bind(g.log, g, v))
            }
            n.extend(g, {
                log: function(M, W) {
                    if (!(typeof console > "u")) {
                        var oe = n.toArray(arguments).slice(2);
                        console.log("[" + M + '] "' + W + '"', oe)
                    }
                },
                tuneIn: function(M) {
                    var W = g.channel(M);
                    return W._tunedIn = !0, W.on("all", V(M)), this
                },
                tuneOut: function(M) {
                    var W = g.channel(M);
                    return W._tunedIn = !1, W.off("all", V(M)), delete D[M], this
                }
            });

            function J(v) {
                return n.isFunction(v) ? v : function() {
                    return v
                }
            }
            g.Requests = {
                request: function(M) {
                    var W = n.toArray(arguments).slice(1),
                        oe = g._eventsApi(this, "request", M, W);
                    if (oe) return oe;
                    var ae = this.channelName,
                        ye = this._requests;
                    if (ae && this._tunedIn && g.log.apply(this, [ae, M].concat(W)), ye && (ye[M] || ye.default)) {
                        var f = ye[M] || ye.default;
                        return W = ye[M] ? W : arguments, g._callHandler(f.callback, f.context, W)
                    } else g.debugLog("An unhandled request was fired", M, ae)
                },
                reply: function(M, W, oe) {
                    return g._eventsApi(this, "reply", M, [W, oe]) ? this : (this._requests || (this._requests = {}), this._requests[M] && g.debugLog("A request was overwritten", M, this.channelName), this._requests[M] = {
                        callback: J(W),
                        context: oe || this
                    }, this)
                },
                replyOnce: function(M, W, oe) {
                    if (g._eventsApi(this, "replyOnce", M, [W, oe])) return this;
                    var ae = this,
                        ye = n.once(function() {
                            return ae.stopReplying(M), J(W).apply(this, arguments)
                        });
                    return this.reply(M, ye, oe)
                },
                stopReplying: function(M, W, oe) {
                    return g._eventsApi(this, "stopReplying", M) ? this : (!M && !W && !oe ? delete this._requests : A(this._requests, M, W, oe) || g.debugLog("Attempted to remove the unregistered request", M, this.channelName), this)
                }
            }, g._channels = {}, g.channel = function(v) {
                if (!v) throw new Error("You must provide a name for the channel.");
                return g._channels[v] ? g._channels[v] : g._channels[v] = new g.Channel(v)
            }, g.Channel = function(v) {
                this.channelName = v
            }, n.extend(g.Channel.prototype, i.Events, g.Requests, {
                reset: function() {
                    return this.off(), this.stopListening(), this.stopReplying(), this
                }
            });
            var q, G, Q = [i.Events, g.Requests];
            return n.each(Q, function(v) {
                n.each(v, function(M, W) {
                    g[W] = function(oe) {
                        return G = n.toArray(arguments).slice(1), q = this.channel(oe), q[W].apply(q, G)
                    }
                })
            }), g.reset = function(v) {
                var M = v ? [this._channels[v]] : this._channels;
                n.each(M, function(W) {
                    W.reset()
                })
            }, g
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
    })(vt, function(n, i, a) {
        n = n && n.hasOwnProperty("default") ? n.default : n, i = i && i.hasOwnProperty("default") ? i.default : i, a = a && a.hasOwnProperty("default") ? a.default : a;
        var d = "3.5.1",
            g = function(o) {
                return function(C) {
                    for (var O = arguments.length, ee = Array(O > 1 ? O - 1 : 0), xe = 1; xe < O; xe++) ee[xe - 1] = arguments[xe];
                    return o.apply(C, ee)
                }
            },
            E = n.Model.extend,
            k = function y(o, C) {
                i.isObject(o) && (o = o.prev + " is going to be removed in the future. Please use " + o.next + " instead." + (o.url ? " See: " + o.url : "")), !!Ze.DEV_MODE && (C === void 0 || !C) && !y._cache[o] && (y._warn("Deprecation warning: " + o), y._cache[o] = !0)
            };
        k._console = typeof console < "u" ? console : {}, k._warn = function() {
            var y = k._console.warn || k._console.log || i.noop;
            return y.apply(k._console, arguments)
        }, k._cache = {};
        var A = function(o) {
                return document.documentElement.contains(o && o.parentNode)
            },
            D = function(o, C) {
                var O = this;
                !o || i.each(C, function(ee) {
                    var xe = o[ee];
                    xe !== void 0 && (O[ee] = xe)
                })
            },
            V = function(o) {
                if (!!o) return this.options && this.options[o] !== void 0 ? this.options[o] : this[o]
            },
            J = function(o) {
                var C = this;
                return i.reduce(o, function(O, ee, xe) {
                    return i.isFunction(ee) || (ee = C[ee]), ee && (O[xe] = ee), O
                }, {})
            },
            q = /(^|:)(\w)/gi;

        function G(y, o, C) {
            return C.toUpperCase()
        }
        var Q = i.memoize(function(y) {
            return "on" + y.replace(q, G)
        });

        function v(y) {
            for (var o = arguments.length, C = Array(o > 1 ? o - 1 : 0), O = 1; O < o; O++) C[O - 1] = arguments[O];
            var ee = Q(y),
                xe = V.call(this, ee),
                We = void 0;
            return i.isFunction(xe) && (We = xe.apply(this, C)), this.trigger.apply(this, arguments), We
        }

        function M(y) {
            for (var o = arguments.length, C = Array(o > 1 ? o - 1 : 0), O = 1; O < o; O++) C[O - 1] = arguments[O];
            return i.isFunction(y.triggerMethod) ? y.triggerMethod.apply(y, C) : v.apply(y, C)
        }

        function W(y, o, C) {
            !y._getImmediateChildren || i.each(y._getImmediateChildren(), function(O) {
                !C(O) || M(O, o, O)
            })
        }

        function oe(y) {
            return !y._isAttached
        }

        function ae(y) {
            return oe(y) ? (y._isAttached = !0, !0) : !1
        }

        function ye(y) {
            return y._isAttached
        }

        function f(y) {
            return ye(y) ? (y._isAttached = !1, !0) : !1
        }

        function _e(y) {
            y._isAttached && y._isRendered && M(y, "dom:refresh", y)
        }

        function Oe(y) {
            y._isAttached && y._isRendered && M(y, "dom:remove", y)
        }

        function Pe() {
            W(this, "before:attach", oe)
        }

        function lt() {
            W(this, "attach", ae), _e(this)
        }

        function $e() {
            W(this, "before:detach", ye), Oe(this)
        }

        function Z() {
            W(this, "detach", f)
        }

        function Fe() {
            Oe(this)
        }

        function U() {
            _e(this)
        }

        function le(y) {
            y._areViewEventsMonitored || y.monitorViewEvents === !1 || (y._areViewEventsMonitored = !0, y.on({
                "before:attach": Pe,
                attach: lt,
                "before:detach": $e,
                detach: Z,
                "before:render": Fe,
                render: U
            }))
        }
        var Ae = ["description", "fileName", "lineNumber", "name", "message", "number"],
            be = E.call(Error, {
                urlRoot: "http://marionettejs.com/docs/v" + d + "/",
                constructor: function(o, C) {
                    i.isObject(o) ? (C = o, o = C.message) : C || (C = {});
                    var O = Error.call(this, o);
                    i.extend(this, i.pick(O, Ae), i.pick(C, Ae)), this.captureStackTrace(), C.url && (this.url = this.urlRoot + C.url)
                },
                captureStackTrace: function() {
                    Error.captureStackTrace && Error.captureStackTrace(this, be)
                },
                toString: function() {
                    return this.name + ": " + this.message + (this.url ? " See: " + this.url : "")
                }
            });
        be.extend = E;

        function we(y, o, C, O, ee) {
            var xe = O.split(/\s+/);
            xe.length > 1 && k("Multiple handlers for a single event are deprecated. If needed, use a single handler to call multiple methods."), i.each(xe, function(We) {
                var It = y[We];
                if (!It) throw new be('Method "' + We + '" was configured as an event handler, but does not exist.');
                y[ee](o, C, It)
            })
        }

        function he(y, o, C, O) {
            if (!i.isObject(C)) throw new be({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindevents"
            });
            i.each(C, function(ee, xe) {
                if (i.isString(ee)) {
                    we(y, o, xe, ee, O);
                    return
                }
                y[O](o, xe, ee)
            })
        }

        function Se(y, o) {
            return !y || !o ? this : (he(this, y, o, "listenTo"), this)
        }

        function Te(y, o) {
            return y ? o ? (he(this, y, o, "stopListening"), this) : (this.stopListening(y), this) : this
        }

        function Be(y, o, C, O) {
            if (!i.isObject(C)) throw new be({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindrequests"
            });
            var ee = J.call(y, C);
            o[O](ee, y)
        }

        function Ke(y, o) {
            return !y || !o ? this : (Be(this, y, o, "reply"), this)
        }

        function dt(y, o) {
            return y ? o ? (Be(this, y, o, "stopReplying"), this) : (y.stopReplying(null, null, this), this) : this
        }
        var $t = function(o) {
                this.options = i.extend({}, i.result(this, "options"), o)
            },
            Ut = {
                normalizeMethods: J,
                _setOptions: $t,
                mergeOptions: D,
                getOption: V,
                bindEvents: Se,
                unbindEvents: Te
            },
            _ = {
                _initRadio: function() {
                    var o = i.result(this, "channelName");
                    if (!!o) {
                        if (!a) throw new be({
                            name: "BackboneRadioMissing",
                            message: 'The dependency "backbone.radio" is missing.'
                        });
                        var C = this._channel = a.channel(o),
                            O = i.result(this, "radioEvents");
                        this.bindEvents(C, O);
                        var ee = i.result(this, "radioRequests");
                        this.bindRequests(C, ee), this.on("destroy", this._destroyRadio)
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
            m = function(o) {
                this.hasOwnProperty("options") || this._setOptions(o), this.mergeOptions(o, l), this._setCid(), this._initRadio(), this.initialize.apply(this, arguments)
            };
        m.extend = E, i.extend(m.prototype, n.Events, Ut, _, {
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
                for (var o = arguments.length, C = Array(o), O = 0; O < o; O++) C[O] = arguments[O];
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
                var O = this.templateCaches[o];
                return O || (O = new S(o), this.templateCaches[o] = O), O.load(C)
            },
            clear: function() {
                for (var o = void 0, C = arguments.length, O = Array(C), ee = 0; ee < C; ee++) O[ee] = arguments[ee];
                var xe = O.length;
                if (xe > 0)
                    for (o = 0; o < xe; o++) delete this.templateCaches[O[o]];
                else this.templateCaches = {}
            }
        }), i.extend(S.prototype, {
            load: function(o) {
                if (this.compiledTemplate) return this.compiledTemplate;
                var C = this.loadTemplate(this.templateId, o);
                return this.compiledTemplate = this.compileTemplate(C, o), this.compiledTemplate
            },
            loadTemplate: function(o, C) {
                var O = n.$(o);
                if (!O.length) throw new be({
                    name: "NoTemplateError",
                    message: 'Could not find template: "' + o + '"'
                });
                return O.html()
            },
            compileTemplate: function(o, C) {
                return i.template(o, C)
            }
        });
        var R = i.invokeMap || i.invoke;

        function P(y, o) {
            return y.behaviorClass ? y.behaviorClass : i.isFunction(y) ? y : i.isFunction(Ze.Behaviors.behaviorsLookup) ? Ze.Behaviors.behaviorsLookup(y, o)[o] : Ze.Behaviors.behaviorsLookup[o]
        }

        function $(y, o) {
            return i.chain(o).map(function(C, O) {
                var ee = P(C, O),
                    xe = C === ee ? {} : C,
                    We = new ee(xe, y),
                    It = $(y, i.result(We, "behaviors"));
                return [We].concat(It)
            }).flatten().value()
        }
        var ie = {
                _initBehaviors: function() {
                    this._behaviors = this._getBehaviors()
                },
                _getBehaviors: function() {
                    var o = i.result(this, "behaviors");
                    return i.isObject(o) ? $(this, o) : {}
                },
                _getBehaviorTriggers: function() {
                    var o = R(this._behaviors, "getTriggers");
                    return i.reduce(o, function(C, O) {
                        return i.extend(C, O)
                    }, {})
                },
                _getBehaviorEvents: function() {
                    var o = R(this._behaviors, "getEvents");
                    return i.reduce(o, function(C, O) {
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
                    for (var o = arguments.length, C = Array(o), O = 0; O < o; O++) C[O] = arguments[O];
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
                    for (var o = this._behaviors, C = 0, O = o && o.length; C < O; C++) v.apply(o[C], arguments)
                }
            },
            ke = {
                _delegateEntityEvents: function(o, C) {
                    var O = i.result(this, "modelEvents");
                    O && (Te.call(this, o, O), Se.call(this, o, O));
                    var ee = i.result(this, "collectionEvents");
                    ee && (Te.call(this, C, ee), Se.call(this, C, ee))
                },
                _undelegateEntityEvents: function(o, C) {
                    var O = i.result(this, "modelEvents");
                    Te.call(this, o, O);
                    var ee = i.result(this, "collectionEvents");
                    Te.call(this, C, ee)
                }
            },
            de = /^(\S+)\s*(.*)$/,
            De = function(o, C) {
                var O = o.match(de);
                return O[1] + "." + C + " " + O[2]
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
                O = !!o.preventDefault;
            nt("triggersPreventDefault") && (O = o.preventDefault !== !1);
            var ee = !!o.stopPropagation;
            return nt("triggersStopPropagation") && (ee = o.stopPropagation !== !1),
                function(xe) {
                    O && xe.preventDefault(), ee && xe.stopPropagation(), y.triggerMethod(C, y, xe)
                }
        }
        var ct = {
                _getViewTriggers: function(o, C) {
                    var O = this;
                    return i.reduce(C, function(ee, xe, We) {
                        return We = De(We, "trig" + O.cid), ee[We] = rn(o, xe), ee
                    }, {})
                }
            },
            yt = function(o, C) {
                return i.reduce(o, function(O, ee, xe) {
                    var We = bt(xe, C);
                    return O[We] = ee, O
                }, {})
            },
            bt = function(o, C) {
                return o.replace(/@ui\.[a-zA-Z-_$0-9]*/g, function(O) {
                    return C[O.slice(4)]
                })
            },
            Kt = function y(o, C, O) {
                return i.each(o, function(ee, xe) {
                    i.isString(ee) ? o[xe] = bt(ee, C) : i.isObject(ee) && i.isArray(O) && (i.extend(ee, y(i.pick(ee, O), C)), i.each(O, function(We) {
                        var It = ee[We];
                        i.isString(It) && (ee[We] = bt(It, C))
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
                    var O = this._getUIBindings();
                    return Kt(o, O, C)
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
                        this._ui = {}, i.each(C, function(O, ee) {
                            o._ui[ee] = o.$(O)
                        }), this.ui = this._ui
                    }
                },
                _unbindUIElements: function() {
                    var o = this;
                    !this.ui || !this._uiBindings || (i.each(this.ui, function(C, O) {
                        delete o.ui[O]
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
                    var O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lt(o);
                    return O.find(C)
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
                        var O = C.parentNode;
                        !O || O.replaceChild(o, C)
                    }
                },
                swapEl: function(o, C) {
                    if (o !== C) {
                        var O = o.parentNode,
                            ee = C.parentNode;
                        if (!(!O || !ee)) {
                            var xe = o.nextSibling,
                                We = C.nextSibling;
                            O.insertBefore(C, xe), ee.insertBefore(o, We)
                        }
                    }
                },
                setContents: function(o, C) {
                    var O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lt(o);
                    O.html(C)
                },
                appendContents: function(o, C) {
                    var O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                        ee = O._$el,
                        xe = ee === void 0 ? Lt(o) : ee,
                        We = O._$contents,
                        It = We === void 0 ? Lt(C) : We;
                    xe.append(It)
                },
                hasContents: function(o) {
                    return !!o && o.hasChildNodes()
                },
                detachContents: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Lt(o);
                    C.contents().detach()
                }
            },
            Y = {
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
                    var O = i.extend({}, this._getBehaviorEvents(), C, this._getBehaviorTriggers(), this.getTriggers());
                    return n.View.prototype.delegateEvents.call(this, O), this
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
                    for (var o = this._isAttached && !this._shouldDisableEvents, C = arguments.length, O = Array(C), ee = 0; ee < C; ee++) O[ee] = arguments[ee];
                    return this.triggerMethod.apply(this, ["before:destroy", this].concat(O)), o && this.triggerMethod("before:detach", this), this.unbindUIElements(), this._removeElement(), o && (this._isAttached = !1, this.triggerMethod("detach", this)), this._removeChildren(), this._isDestroyed = !0, this._isRendered = !1, this._destroyBehaviors.apply(this, O), this.triggerMethod.apply(this, ["destroy", this].concat(O)), this.stopListening(), this
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
                    for (var C = this.normalizeMethods(this._childViewEvents), O = arguments.length, ee = Array(O > 1 ? O - 1 : 0), xe = 1; xe < O; xe++) ee[xe - 1] = arguments[xe];
                    typeof C < "u" && i.isFunction(C[o]) && C[o].apply(this, ee);
                    var We = this._childViewTriggers;
                    We && i.isString(We[o]) && this.triggerMethod.apply(this, [We[o]].concat(ee));
                    var It = i.result(this, "childViewEventPrefix");
                    if (It !== !1) {
                        var qt = It + ":" + o;
                        this.triggerMethod.apply(this, [qt].concat(ee))
                    }
                }
            };
        i.extend(Y, ie, Ut, ke, ct, Je);

        function L(y) {
            y._isRendered || (y.supportsRenderLifecycle || M(y, "before:render", y), y.render(), y.supportsRenderLifecycle || (y._isRendered = !0, M(y, "render", y)))
        }

        function X(y) {
            if (y.destroy) {
                y.destroy();
                return
            }
            y.supportsDestroyLifecycle || M(y, "before:destroy", y);
            var o = y._isAttached && !y._shouldDisableEvents;
            o && M(y, "before:detach", y), y.remove(), o && (y._isAttached = !1, M(y, "detach", y)), y._isDestroyed = !0, y.supportsDestroyLifecycle || M(y, "destroy", y)
        }
        var pe = ["allowMissingEl", "parentEl", "replaceElement"],
            ge = m.extend({
                Dom: N,
                cidPrefix: "mnr",
                replaceElement: !1,
                _isReplaced: !1,
                _isSwappingView: !1,
                constructor: function(o) {
                    if (this._setOptions(o), this.mergeOptions(o, pe), this._initEl = this.el = this.getOption("el"), this.el = this.el instanceof n.$ ? this.el[0] : this.el, !this.el) throw new be({
                        name: "NoElError",
                        message: 'An "el" must be specified for a region.'
                    });
                    this.$el = this.getEl(this.el), m.call(this, o)
                },
                show: function(o, C) {
                    if (!!this._ensureElement(C)) return o = this._getView(o, C), o === this.currentView ? this : (this._isSwappingView = !!this.currentView, this.triggerMethod("before:show", this, o, C), o._isAttached || this.empty(C), this._setupChildView(o), this.currentView = o, L(o), this._attachView(o, C), this.triggerMethod("show", this, o, C), this._isSwappingView = !1, this)
                },
                _setupChildView: function(o) {
                    le(o), this._proxyChildViewEvents(o), o.on("destroy", this._empty, this)
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
                        O = !o._isAttached && A(this.el) && !this._shouldDisableMonitoring(),
                        ee = typeof C.replaceElement > "u" ? !!i.result(this, "replaceElement") : !!C.replaceElement;
                    O && M(o, "before:attach", o), ee ? this._replaceEl(o) : this.attachHtml(o), O && (o._isAttached = !0, M(o, "attach", o))
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
                    var O = !o.preventDestroy;
                    return O || k("The preventDestroy option is deprecated. Use Region#detachView"), this._empty(C, O), this
                },
                _empty: function(o, C) {
                    o.off("destroy", this._empty, this), this.triggerMethod("before:empty", this, o), this._restoreEl(), delete this.currentView, o._isDestroyed || (C ? this.removeView(o) : this._detachView(o), this._stopChildViewEvents(o)), this.triggerMethod("empty", this, o)
                },
                _stopChildViewEvents: function(o) {
                    var C = this._parentView;
                    !C || this._parentView.stopListening(o)
                },
                destroyView: function(o) {
                    return o._isDestroyed || (o._shouldDisableEvents = this._shouldDisableMonitoring(), X(o)), o
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
                        O = this._isReplaced;
                    C && M(o, "before:detach", o), O ? this.Dom.replaceEl(this.el, o.el) : this.detachHtml(), C && (o._isAttached = !1, M(o, "detach", o))
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
                    return this._isDestroyed ? this : (this.reset(o), this._name && this._parentView._removeReferences(this._name), delete this._parentView, delete this._name, m.prototype.destroy.apply(this, arguments))
                }
            }, {
                setDomApi: j
            }),
            Ne = function(y, o) {
                return y instanceof ge ? y : Ve(y, o)
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
                    R(this._regions, "reset")
                },
                addRegion: function(o, C) {
                    var O = {};
                    return O[o] = C, this.addRegions(O)[o]
                },
                addRegions: function(o) {
                    if (!i.isEmpty(o)) return o = this.normalizeUIValues(o, ["selector", "el"]), this.regions = i.extend({}, this.regions, o), this._addRegions(o)
                },
                _addRegions: function(o) {
                    var C = this,
                        O = {
                            regionClass: this.regionClass,
                            parentEl: i.partial(i.result, this, "el")
                        };
                    return i.reduce(o, function(ee, xe, We) {
                        return ee[We] = Ne(xe, O), C._addRegion(ee[We], We), ee
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
                    for (var O = this.getRegion(o), ee = arguments.length, xe = Array(ee > 2 ? ee - 2 : 0), We = 2; We < ee; We++) xe[We - 2] = arguments[We];
                    return O.show.apply(O, [C].concat(xe))
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
                    var O = i.isFunction(o) ? o : S.get(o);
                    return O(C)
                }
            },
            In = ["behaviors", "childViewEventPrefix", "childViewEvents", "childViewTriggers", "collectionEvents", "events", "modelEvents", "regionClass", "regions", "template", "templateContext", "triggers", "ui"],
            Pn = n.View.extend({
                constructor: function(o) {
                    this.render = i.bind(this.render, this), this._setOptions(o), this.mergeOptions(o, In), le(this), this._initBehaviors(), this._initRegions();
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
                    return n.View.prototype.setElement.apply(this, arguments), this._isRendered = this.Dom.hasContents(this.el), this._isAttached = A(this.el), this._isRendered && this.bindUIElements(), this
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
                        O = this._renderHtml(o, C);
                    this.attachElContent(O)
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
        i.extend(Pn.prototype, Y, jt);
        var it = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce", "partition"],
            Dn = function(o, C) {
                i.each(it, function(O) {
                    o[O] = function() {
                        var ee = i.result(this, C),
                            xe = Array.prototype.slice.call(arguments);
                        return i[O].apply(i, [ee].concat(xe))
                    }
                })
            },
            mi = function(o) {
                this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), i.each(o, i.bind(this.add, this))
            };
        Dn(mi.prototype, "_getViews"), i.extend(mi.prototype, {
            _getViews: function() {
                return i.values(this._views)
            },
            add: function(o, C) {
                return this._add(o, C)._updateLength()
            },
            _add: function(o, C) {
                var O = o.cid;
                return this._views[O] = o, o.model && (this._indexByModel[o.model.cid] = O), C && (this._indexByCustom[C] = O), this
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
                return o.model && delete this._indexByModel[o.model.cid], i.some(this._indexByCustom, i.bind(function(O, ee) {
                    if (O === C) return delete this._indexByCustom[ee], !0
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
                    this.render = i.bind(this.render, this), this._setOptions(o), this.mergeOptions(o, Sr), le(this), this._initBehaviors(), this.once("render", this._initialEvents), this._initChildViewStorage(), this._bufferedChildren = [];
                    var C = Array.prototype.slice.call(arguments);
                    C[0] = this.options, n.View.prototype.constructor.apply(this, C), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
                },
                _startBuffering: function() {
                    this._isBuffering = !0
                },
                _endBuffering: function() {
                    var o = this._isAttached && this.monitorViewEvents !== !1,
                        C = o ? this._getImmediateChildren() : [];
                    this._isBuffering = !1, i.each(C, function(O) {
                        M(O, "before:attach", O)
                    }), this.attachBuffer(this, this._createBuffer()), i.each(C, function(O) {
                        O._isAttached = !0, M(O, "attach", O)
                    }), this._bufferedChildren = []
                },
                _getImmediateChildren: function() {
                    return i.values(this.children._views)
                },
                _initialEvents: function() {
                    this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "update", this._onCollectionUpdate), this.listenTo(this.collection, "reset", this.render), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                },
                _onCollectionAdd: function(o, C, O) {
                    var ee = O.at !== void 0 && (O.index || C.indexOf(o));
                    (this.filter || ee === !1) && (ee = i.indexOf(this._filteredSortedModels(ee), o)), this._shouldAddChild(o, ee) && (this._destroyEmptyView(), this._addChild(o, ee))
                },
                _onCollectionUpdate: function(o, C) {
                    var O = C.changes;
                    this._removeChildModels(O.removed)
                },
                _removeChildModels: function(o) {
                    var C = this._getRemovedViews(o);
                    !C.length || (this.children._updateLength(), this._updateIndices(C, !1), this.isEmpty() && this._showEmptyView())
                },
                _getRemovedViews: function(o) {
                    var C = this;
                    return i.reduce(o, function(O, ee) {
                        var xe = ee && C.children.findByModel(ee);
                        return !xe || xe._isDestroyed || (C._removeChildView(xe), O.push(xe)), O
                    }, [])
                },
                _removeChildView: function(o) {
                    this.triggerMethod("before:remove:child", this, o), this.children._remove(o), o._shouldDisableEvents = this.monitorViewEvents === !1, X(o), this.stopListening(o), this.triggerMethod("remove:child", this, o)
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isAttached = A(this.el), this
                },
                render: function() {
                    return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._renderChildren(), this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                setFilter: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        O = C.preventRender,
                        ee = this._isRendered && !this._isDestroyed,
                        xe = this.filter !== o,
                        We = ee && xe && !O;
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
                    var O = this,
                        ee = {};
                    i.each(o, function(We, It) {
                        var qt = !O.children.findByModel(We);
                        qt && O._onCollectionAdd(We, O.collection, {
                            at: It
                        }), ee[We.cid] = !0
                    });
                    var xe = i.filter(C, function(We) {
                        return !ee[We.cid] && O.children.findByModel(We)
                    });
                    this._removeChildModels(xe)
                },
                reorder: function() {
                    var o = this,
                        C = this.children,
                        O = this._filteredSortedModels();
                    if (!O.length && this._showingEmptyView) return this;
                    var ee = i.some(O, function(qt) {
                        return !C.findByModel(qt)
                    });
                    if (ee) this.render();
                    else {
                        var xe = [],
                            We = i.reduce(this.children._views, function(qt, Gn) {
                                var Nn = i.indexOf(O, Gn.model);
                                return Nn === -1 ? (xe.push(Gn.model), qt) : (Gn._index = Nn, qt[Nn] = Gn.el, qt)
                            }, new Array(O.length));
                        this.triggerMethod("before:reorder", this);
                        var It = this.Dom.createBuffer();
                        i.each(We, function(qt) {
                            o.Dom.appendContents(It, qt)
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
                        O = i.find(C, function(ee, xe) {
                            var We = o.children.findByModel(ee);
                            return !We || We._index !== xe
                        });
                    O && this.resortView()
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
                    var O = this._getChildView(o),
                        ee = this._getChildViewOptions(o, C),
                        xe = this.buildChildView(o, O, ee);
                    return xe
                },
                _setupChildView: function(o, C) {
                    le(o), this._proxyChildViewEvents(o), this.sort && (o._index = C)
                },
                _showCollection: function(o) {
                    i.each(o, i.bind(this._addChild, this)), this.children._updateLength()
                },
                _filteredSortedModels: function(o) {
                    if (!this.collection || !this.collection.length) return [];
                    var C = this.getViewComparator(),
                        O = this.collection.models;
                    if (o = Math.min(Math.max(o, 0), O.length - 1), C) {
                        var ee = void 0;
                        o && (ee = O[o], O = O.slice(0, o).concat(O.slice(o + 1))), O = this._sortModelsBy(O, C), ee && O.splice(o, 0, ee)
                    }
                    return O = this._filterModels(O), O
                },
                getViewComparator: function() {
                    return this.viewComparator
                },
                _filterModels: function(o) {
                    var C = this;
                    return this.filter && (o = i.filter(o, function(O, ee) {
                        return C._shouldAddChild(O, ee)
                    })), o
                },
                _sortModelsBy: function(o, C) {
                    return typeof C == "string" ? i.sortBy(o, function(O) {
                        return O.get(C)
                    }) : C.length === 1 ? i.sortBy(o, i.bind(C, this)) : i.clone(o).sort(i.bind(C, this))
                },
                _showEmptyView: function() {
                    var o = this._getEmptyView();
                    if (o && !this._showingEmptyView) {
                        this._showingEmptyView = !0;
                        var C = new n.Model,
                            O = this.emptyViewOptions || this.childViewOptions;
                        i.isFunction(O) && (O = O.call(this, C, this._emptyViewIndex));
                        var ee = this.buildChildView(C, o, O);
                        this.triggerMethod("before:render:empty", this, ee), this.addChildView(ee, 0), this.triggerMethod("render:empty", this, ee)
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
                    var O = this._createView(o, C);
                    return this.addChildView(O, C), O
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
                            i.each(i.sortBy(this.children._views, "_index"), function(ee, xe) {
                                ee._index = xe
                            });
                            return
                        }
                        var O = i.isArray(o) ? i.max(o, "_index") : o;
                        i.isObject(O) && i.each(this.children._views, function(ee) {
                            ee._index >= O._index && (ee._index += 1)
                        })
                    }
                },
                _attachView: function(o, C) {
                    var O = !o._isAttached && !this._isBuffering && this._isAttached && this.monitorViewEvents !== !1;
                    O && M(o, "before:attach", o), this.attachHtml(this, o, C), O && (o._isAttached = !0, M(o, "attach", o))
                },
                buildChildView: function(o, C, O) {
                    var ee = i.extend({
                        model: o
                    }, O);
                    return new C(ee)
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
                    return i.each(this._bufferedChildren, function(O) {
                        o.Dom.appendContents(C, O.el, {
                            _$contents: O.$el
                        })
                    }), C
                },
                attachHtml: function(o, C, O) {
                    o._isBuffering ? o._bufferedChildren.splice(O, 0, C) : o._insertBefore(C, O) || o._insertAfter(C)
                },
                _insertBefore: function(o, C) {
                    var O = void 0,
                        ee = this.sort && C < this.children.length - 1;
                    return ee && (O = i.find(this.children._views, function(xe) {
                        return xe._index === C + 1
                    })), O ? (this.beforeEl(O.el, o.el), !0) : !1
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
                    this.children = new mi
                },
                _removeChildren: function() {
                    this._destroyChildren()
                },
                _destroyChildren: function(o) {
                    !this.children.length || (this.triggerMethod("before:destroy:children", this), i.each(this.children._views, i.bind(this._removeChildView, this)), this.children._updateLength(), this.triggerMethod("destroy:children", this))
                },
                _shouldAddChild: function(o, C) {
                    var O = this.filter;
                    return !i.isFunction(O) || O.call(this, o, C, this.collection)
                }
            }, {
                setDomApi: j
            });
        i.extend(kn.prototype, Y);
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
                    O = o.cid;
                this._viewsByCid[O] = o, o.model && (this._indexByModel[o.model.cid] = O), this._views.splice(C, 0, o), this._updateLength()
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
                var O = this.findIndexByView(o),
                    ee = this.findIndexByView(C);
                if (!(O === -1 || ee === -1)) {
                    var xe = this._views[O];
                    this._views[O] = this._views[ee], this._views[ee] = xe
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
            vi = n.View.extend({
                sortWithCollection: !0,
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, Tr), le(this), this.once("render", this._initialEvents), this._initChildViewStorage(), this._initBehaviors();
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
                    var O = C.add,
                        ee = C.merge,
                        xe = C.remove;
                    !this.sortWithCollection || this.viewComparator === !1 || O || xe || ee || this.sort()
                },
                _onCollectionReset: function() {
                    this.render()
                },
                _onCollectionUpdate: function(o, C) {
                    var O = C.changes,
                        ee = O.removed.length && this._removeChildModels(O.removed);
                    this._addedViews = O.added.length && this._addChildModels(O.added), this._detachChildren(ee), this._showChildren(), this._removeChildViews(ee)
                },
                _removeChildModels: function(o) {
                    var C = this;
                    return i.reduce(o, function(O, ee) {
                        var xe = C._removeChildModel(ee);
                        return xe && O.push(xe), O
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
                        O = this._getChildViewOptions(o),
                        ee = this.buildChildView(o, C, O);
                    return ee
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
                buildChildView: function(o, C, O) {
                    var ee = i.extend({
                        model: o
                    }, O);
                    return new C(ee)
                },
                _setupChildView: function(o) {
                    le(o), o.on("destroy", this.removeChildView, this), this._proxyChildViewEvents(o)
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
                isEmpty: function(o) {
                    return o || !this.children.length
                },
                _showEmptyView: function() {
                    var o = this._getEmptyView();
                    if (!!o) {
                        var C = this._getEmptyViewOptions(),
                            O = this.getEmptyRegion();
                        O.show(new o(C))
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
                        O = C.preventRender,
                        ee = this.viewComparator !== o,
                        xe = ee && !O;
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
                        O = this._addedViews;
                    if (delete this._addedViews, !C) return O || this.children._views;
                    this.triggerMethod("before:filter", this);
                    var ee = [],
                        xe = [];
                    return i.each(this.children._views, function(We, It, qt) {
                        (C.call(o, We, It, qt) ? ee : xe).push(We)
                    }), this._detachChildren(xe), this.triggerMethod("filter", this, ee, xe), ee
                },
                _getFilter: function() {
                    var o = this.getFilter();
                    if (!o) return !1;
                    if (i.isFunction(o)) return o;
                    if (i.isObject(o)) {
                        var C = i.matches(o);
                        return function(O) {
                            return C(O.model && O.model.attributes)
                        }
                    }
                    if (i.isString(o)) return function(O) {
                        return O.model && O.model.get(o)
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
                        O = C.preventRender,
                        ee = this.viewFilter !== o,
                        xe = ee && !O;
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
                    C && M(o, "before:detach", o), this.detachHtml(o), C && (o._isAttached = !1, M(o, "detach", o))
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
                    var O = this._isAttached && this.monitorViewEvents !== !1;
                    C = O ? C : [], i.each(C, function(ee) {
                        ee._isAttached || M(ee, "before:attach", ee)
                    }), this.attachHtml(o), i.each(C, function(ee) {
                        ee._isAttached || (ee._isAttached = !0, M(ee, "attach", ee))
                    })
                },
                _getBuffer: function(o) {
                    var C = this,
                        O = this.Dom.createBuffer();
                    return i.each(o, function(ee) {
                        L(ee), C.Dom.appendContents(O, ee.el, {
                            _$contents: ee.$el
                        })
                    }), O
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
                        O = C.shouldDetach;
                    o.off("destroy", this.removeChildView, this), O ? this._detachChildView(o) : this._destroyChildView(o), this.stopListening(o)
                },
                _destroyChildView: function(o) {
                    o._isDestroyed || (o._shouldDisableEvents = this.monitorViewEvents === !1, X(o))
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
        i.extend(vi.prototype, Y);
        var Bi = ["childViewContainer", "template", "templateContext"],
            yi = kn.extend({
                constructor: function(o) {
                    k("CompositeView is deprecated. Convert to View at your earliest convenience"), this.mergeOptions(o, Bi), kn.prototype.constructor.apply(this, arguments)
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
                    var O = this.getChildViewContainer(o);
                    this.Dom.appendContents(O[0], C, {
                        _$el: O
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
                    var O = void 0,
                        ee = o.childViewContainer;
                    if (ee) {
                        var xe = i.result(o, "childViewContainer");
                        if (xe.charAt(0) === "@" && o.ui ? O = o.ui[xe.substr(4)] : O = this.$(xe), O.length <= 0) throw new be({
                            name: "ChildViewContainerMissingError",
                            message: 'The specified "childViewContainer" was not found: ' + o.childViewContainer
                        })
                    } else O = o.$el;
                    return o.$childViewContainer = O, O
                },
                resetChildViewContainer: function() {
                    this.$childViewContainer && (this.$childViewContainer = void 0)
                }
            }),
            wi = i.pick(Pn.prototype, "serializeModel", "getTemplate", "_renderTemplate", "_renderHtml", "mixinTemplateContext", "attachElContent");
        i.extend(yi.prototype, wi);
        var ji = ["collectionEvents", "events", "modelEvents", "triggers", "ui"],
            Fi = m.extend({
                cidPrefix: "mnb",
                constructor: function(o, C) {
                    this.view = C, this.defaults && k("Behavior defaults are deprecated. For similar functionality set options on the Behavior class."), this.defaults = i.clone(i.result(this, "defaults", {})), this._setOptions(i.extend({}, this.defaults, o)), this.mergeOptions(this.options, ji), this.ui = i.extend({}, i.result(this, "ui"), i.result(C, "ui")), m.apply(this, arguments)
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
                    return i.reduce(C, function(O, ee, xe) {
                        return i.isFunction(ee) || (ee = o[ee]), ee && (xe = De(xe, o.cid), O[xe] = i.bind(ee, o)), O
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
            zi = m.extend({
                cidPrefix: "mna",
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, mn), this._initRegion(), m.prototype.constructor.apply(this, arguments)
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
                    for (var C = this.getRegion(), O = arguments.length, ee = Array(O > 1 ? O - 1 : 0), xe = 1; xe < O; xe++) ee[xe - 1] = arguments[xe];
                    return C.show.apply(C, [o].concat(ee))
                },
                getView: function() {
                    return this.getRegion().currentView
                },
                start: function(o) {
                    return this.triggerMethod("before:start", this, o), this.triggerMethod("start", this, o), this
                }
            }),
            bi = ["appRoutes", "controller"],
            Hn = n.Router.extend({
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, bi), n.Router.apply(this, arguments);
                    var C = this.appRoutes,
                        O = this._getController();
                    this.processAppRoutes(O, C), this.on("route", this._processOnRoute, this)
                },
                appRoute: function(o, C) {
                    var O = this._getController();
                    return this._addAppRoute(O, o, C), this
                },
                _processOnRoute: function(o, C) {
                    if (i.isFunction(this.onRoute)) {
                        var O = i.invert(this.appRoutes)[o];
                        this.onRoute(o, O, C)
                    }
                },
                processAppRoutes: function(o, C) {
                    var O = this;
                    if (!C) return this;
                    var ee = i.keys(C).reverse();
                    return i.each(ee, function(xe) {
                        O._addAppRoute(o, xe, C[xe])
                    }), this
                },
                _getController: function() {
                    return this.controller
                },
                _addAppRoute: function(o, C, O) {
                    var ee = o[O];
                    if (!ee) throw new be('Method "' + O + '" was not found on the controller');
                    this.route(C, O, i.bind(ee, o))
                },
                triggerMethod: v
            });
        i.extend(Hn.prototype, Ut);

        function Hi() {
            throw new be({
                message: "You must define where your behaviors are stored.",
                url: "marionette.behaviors.md#behaviorslookup"
            })
        }
        var Ci = n.Marionette,
            Ze = n.Marionette = {};
        return Ze.noConflict = function() {
            return n.Marionette = Ci, this
        }, Ze.bindEvents = g(Se), Ze.unbindEvents = g(Te), Ze.bindRequests = g(Ke), Ze.unbindRequests = g(dt), Ze.mergeOptions = g(D), Ze.getOption = g(V), Ze.normalizeMethods = g(J), Ze.extend = E, Ze.isNodeAttached = A, Ze.deprecate = k, Ze.triggerMethod = g(v), Ze.triggerMethodOn = M, Ze.isEnabled = nt, Ze.setEnabled = Ct, Ze.monitorViewEvents = le, Ze.Behaviors = {}, Ze.Behaviors.behaviorsLookup = Hi, Ze.Application = zi, Ze.AppRouter = Hn, Ze.Renderer = Ye, Ze.TemplateCache = S, Ze.View = Pn, Ze.CollectionView = kn, Ze.NextCollectionView = vi, Ze.CompositeView = yi, Ze.Behavior = Fi, Ze.Region = ge, Ze.Error = be, Ze.Object = m, Ze.DEV_MODE = !1, Ze.FEATURES = Me, Ze.VERSION = d, Ze.DomApi = N, Ze.setDomApi = function(y) {
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
var Dh = Ih,
    Mh = lo;

function Lh(t, e) {
    var n = this.__data__,
        i = Mh(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
}
var Ph = Lh,
    Nh = yh,
    Vh = kh,
    $h = Oh,
    Bh = Dh,
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
var Hh = zh;

function Gh(t) {
    var e = this.__data__,
        n = e.delete(t);
    return this.size = e.size, n
}
var Uh = Gh;

function Wh(t) {
    return this.__data__.get(t)
}
var qh = Wh;

function Xh(t) {
    return this.__data__.has(t)
}
var Yh = Xh,
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
    Xr = gl ? gl.toStringTag : void 0;

function rd(t) {
    var e = nd.call(t, Xr),
        n = t[Xr];
    try {
        t[Xr] = void 0;
        var i = !0
    } catch {}
    var a = id.call(t);
    return i && (e ? t[Xr] = n : delete t[Xr]), a
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
    Dd = Va,
    Md = Td,
    Ld = Vi,
    Pd = Id,
    Nd = /[\\^$.*+?()[\]{}|]/g,
    Vd = /^\[object .+?Constructor\]$/,
    $d = Function.prototype,
    Bd = Object.prototype,
    jd = $d.toString,
    Fd = Bd.hasOwnProperty,
    zd = RegExp("^" + jd.call(Fd).replace(Nd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function Hd(t) {
    if (!Ld(t) || Md(t)) return !1;
    var e = Dd(t) ? zd : Vd;
    return e.test(Pd(t))
}
var Gd = Hd;

function Ud(t, e) {
    return t == null ? void 0 : t[e]
}
var Wd = Ud,
    qd = Gd,
    Xd = Wd;

function Yd(t, e) {
    var n = Xd(t, e);
    return qd(n) ? n : void 0
}
var $a = Yd,
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
    _f = mf,
    Sf = bf;

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
var Df = If,
    Mf = Df;

function Lf(t, e) {
    var n = t.__data__;
    return Mf(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map
}
var fo = Lf,
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
var Hf = zf,
    Gf = fo;

function Uf(t, e) {
    var n = Gf(this, t),
        i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
}
var Wf = Uf,
    qf = Rf,
    Xf = Vf,
    Yf = jf,
    Kf = Hf,
    Jf = Wf;

function xr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
xr.prototype.clear = qf;
xr.prototype.delete = Xf;
xr.prototype.get = Yf;
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
    op = Hh,
    ap = Uh,
    lp = qh,
    cp = Yh,
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
var _c = vp;

function yp(t) {
    return function(e, n, i) {
        for (var a = -1, d = Object(e), g = i(e), E = g.length; E--;) {
            var k = g[t ? E : ++a];
            if (n(d[k], k, d) === !1) break
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
        a = i && !0 && t && !t.nodeType && t,
        d = a && a.exports === i,
        g = d ? n.Buffer : void 0,
        E = g ? g.allocUnsafe : void 0;

    function k(A, D) {
        if (D) return A.slice();
        var V = A.length,
            J = E ? E(V) : new A.constructor(V);
        return A.copy(J), J
    }
    t.exports = k
})(ba, ba.exports);
var Ep = br,
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
var Dp = Ip,
    Mp = Vi,
    El = Object.create,
    Lp = function() {
        function t() {}
        return function(e) {
            if (!Mp(e)) return {};
            if (El) return El(e);
            t.prototype = e;
            var n = new t;
            return t.prototype = void 0, n
        }
    }(),
    Pp = Lp;

function Np(t, e) {
    return function(n) {
        return t(e(n))
    }
}
var Vp = Np,
    $p = Vp,
    Bp = $p(Object.getPrototypeOf, Object),
    Sc = Bp,
    jp = Object.prototype;

function Fp(t) {
    var e = t && t.constructor,
        n = typeof e == "function" && e.prototype || jp;
    return t === n
}
var kc = Fp,
    zp = Pp,
    Hp = Sc,
    Gp = kc;

function Up(t) {
    return typeof t.constructor == "function" && !Gp(t) ? zp(Hp(t)) : {}
}
var Wp = Up;

function qp(t) {
    return t != null && typeof t == "object"
}
var us = qp,
    Xp = uo,
    Yp = us,
    Kp = "[object Arguments]";

function Jp(t) {
    return Yp(t) && Xp(t) == Kp
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
        a = e && !e.nodeType && e,
        d = a && !0 && t && !t.nodeType && t,
        g = d && d.exports === a,
        E = g ? n.Buffer : void 0,
        k = E ? E.isBuffer : void 0,
        A = k || i;
    t.exports = A
})(Ks, Ks.exports);
var gg = uo,
    mg = Sc,
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
var _g = Eg,
    Sg = uo,
    kg = Rc,
    Tg = us,
    Ag = "[object Arguments]",
    Og = "[object Array]",
    Rg = "[object Boolean]",
    Ig = "[object Date]",
    Dg = "[object Error]",
    Mg = "[object Function]",
    Lg = "[object Map]",
    Pg = "[object Number]",
    Ng = "[object Object]",
    Vg = "[object RegExp]",
    $g = "[object Set]",
    Bg = "[object String]",
    jg = "[object WeakMap]",
    Fg = "[object ArrayBuffer]",
    zg = "[object DataView]",
    Hg = "[object Float32Array]",
    Gg = "[object Float64Array]",
    Ug = "[object Int8Array]",
    Wg = "[object Int16Array]",
    qg = "[object Int32Array]",
    Xg = "[object Uint8Array]",
    Yg = "[object Uint8ClampedArray]",
    Kg = "[object Uint16Array]",
    Jg = "[object Uint32Array]",
    Mt = {};
Mt[Hg] = Mt[Gg] = Mt[Ug] = Mt[Wg] = Mt[qg] = Mt[Xg] = Mt[Yg] = Mt[Kg] = Mt[Jg] = !0;
Mt[Ag] = Mt[Og] = Mt[Fg] = Mt[Rg] = Mt[zg] = Mt[Ig] = Mt[Dg] = Mt[Mg] = Mt[Lg] = Mt[Pg] = Mt[Ng] = Mt[Vg] = Mt[$g] = Mt[Bg] = Mt[jg] = !1;

function Qg(t) {
    return Tg(t) && kg(t.length) && !!Mt[Sg(t)]
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
        a = i && !0 && t && !t.nodeType && t,
        d = a && a.exports === i,
        g = d && n.process,
        E = function() {
            try {
                var k = a && a.require && a.require("util").types;
                return k || g && g.binding && g.binding("util")
            } catch {}
        }();
    t.exports = E
})(Ca, Ca.exports);
var nm = Zg,
    im = tm,
    Sl = Ca.exports,
    kl = Sl && Sl.isTypedArray,
    rm = kl ? im(kl) : nm,
    Dc = rm;

function sm(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
}
var Mc = sm,
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
    var a = !n;
    n || (n = {});
    for (var d = -1, g = e.length; ++d < g;) {
        var E = e[d],
            k = i ? i(n[E], t[E], E, n, t) : void 0;
        k === void 0 && (k = t[E]), a ? fm(n, E, k) : dm(n, E, k)
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
var Lc = bm,
    Cm = vm,
    xm = Ac,
    Em = Oc,
    _m = Ks.exports,
    Sm = Lc,
    km = Dc,
    Tm = Object.prototype,
    Am = Tm.hasOwnProperty;

function Om(t, e) {
    var n = Em(t),
        i = !n && xm(t),
        a = !n && !i && _m(t),
        d = !n && !i && !a && km(t),
        g = n || i || a || d,
        E = g ? Cm(t.length, String) : [],
        k = E.length;
    for (var A in t)(e || Am.call(t, A)) && !(g && (A == "length" || a && (A == "offset" || A == "parent") || d && (A == "buffer" || A == "byteLength" || A == "byteOffset") || Sm(A, k))) && E.push(A);
    return E
}
var Rm = Om;

function Im(t) {
    var e = [];
    if (t != null)
        for (var n in Object(t)) e.push(n);
    return e
}
var Dm = Im,
    Mm = Vi,
    Lm = kc,
    Pm = Dm,
    Nm = Object.prototype,
    Vm = Nm.hasOwnProperty;

function $m(t) {
    if (!Mm(t)) return Pm(t);
    var e = Lm(t),
        n = [];
    for (var i in t) i == "constructor" && (e || !Vm.call(t, i)) || n.push(i);
    return n
}
var Bm = $m,
    jm = Rm,
    Fm = Bm,
    zm = ja;

function Hm(t) {
    return zm(t) ? jm(t, !0) : Fm(t)
}
var Pc = Hm,
    Gm = gm,
    Um = Pc;

function Wm(t) {
    return Gm(t, Um(t))
}
var qm = Wm,
    Tl = _c,
    Xm = ba.exports,
    Ym = Rp,
    Km = Dp,
    Jm = Wp,
    Al = Ac,
    Ol = Oc,
    Qm = dg,
    Zm = Ks.exports,
    ev = Va,
    tv = Vi,
    nv = _g,
    iv = Dc,
    Rl = Mc,
    rv = qm;

function sv(t, e, n, i, a, d, g) {
    var E = Rl(t, n),
        k = Rl(e, n),
        A = g.get(k);
    if (A) {
        Tl(t, n, A);
        return
    }
    var D = d ? d(E, k, n + "", t, e, g) : void 0,
        V = D === void 0;
    if (V) {
        var J = Ol(k),
            q = !J && Zm(k),
            G = !J && !q && iv(k);
        D = k, J || q || G ? Ol(E) ? D = E : Qm(E) ? D = Km(E) : q ? (V = !1, D = Xm(k, !0)) : G ? (V = !1, D = Ym(k, !0)) : D = [] : nv(k) || Al(k) ? (D = E, Al(E) ? D = rv(E) : (!tv(E) || ev(E)) && (D = Jm(k))) : V = !1
    }
    V && (g.set(k, D), a(D, k, i, d, g), g.delete(k)), Tl(t, n, D)
}
var ov = sv,
    av = hp,
    lv = _c,
    cv = xp,
    uv = ov,
    hv = Vi,
    dv = Pc,
    fv = Mc;

function Nc(t, e, n, i, a) {
    t !== e && cv(e, function(d, g) {
        if (a || (a = new av), hv(d)) uv(t, e, g, n, Nc, i, a);
        else {
            var E = i ? i(fv(t, g), d, g + "", t, e, a) : void 0;
            E === void 0 && (E = d), lv(t, g, E)
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
            for (var i = arguments, a = -1, d = Il(i.length - e, 0), g = Array(d); ++a < d;) g[a] = i[e + a];
            a = -1;
            for (var E = Array(e + 1); ++a < e;) E[a] = i[a];
            return E[e] = n(g), yv(t, this, E)
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
    Dl = Ec,
    _v = Vc,
    Sv = Dl ? function(t, e) {
        return Dl(t, "toString", {
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
    Dv = kv,
    Mv = Iv,
    Lv = Mv(Dv),
    Pv = Lv,
    Nv = Vc,
    Vv = bv,
    $v = Pv;

function Bv(t, e) {
    return $v(Vv(t, e, Nv), t + "")
}
var jv = Bv,
    Fv = ao,
    zv = ja,
    Hv = Lc,
    Gv = Vi;

function Uv(t, e, n) {
    if (!Gv(n)) return !1;
    var i = typeof e;
    return (i == "number" ? zv(n) && Hv(e, n.length) : i == "string" && e in n) ? Fv(n[e], t) : !1
}
var Wv = Uv,
    qv = jv,
    Xv = Wv;

function Yv(t) {
    return qv(function(e, n) {
        var i = -1,
            a = n.length,
            d = a > 1 ? n[a - 1] : void 0,
            g = a > 2 ? n[2] : void 0;
        for (d = t.length > 3 && typeof d == "function" ? (a--, d) : void 0, g && Xv(n[0], n[1], g) && (d = a < 3 ? void 0 : d, a = 1), e = Object(e); ++i < a;) {
            var E = n[i];
            E && t(e, E, i, d)
        }
        return e
    })
}
var Kv = Yv,
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
            g = Math.min(Math.max(0, (d >> 16) * n), 255),
            E = Math.min(Math.max(0, (d >> 8 & 255) * n), 255);
        let A = (Math.min(Math.max(0, (d & 255) * n), 255) | E << 8 | g << 16).toString(16);
        for (; A.length < a.length;) A = `0${A}`;
        return (i ? "#" : "") + A
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
        var g;
        const n = e.toLowerCase(),
            i = (g = this.get("tags")) != null ? g : "[]",
            a = n.split("-")[0];
        let d = JSON.parse(i);
        d = d.filter(E => {
            const k = E.split("-")[0];
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
st(Zt, "defaultNamespace", "tv");
class ri {
    constructor() {
        st(this, "artifacts");
        this.artifacts = this.list()
    }
    get hasUnviewed() {
        return this.artifacts.some(e => !e.viewed)
    }
    add(e, n) {
        ri.add(e, n), this.artifacts = this.list()
    }
    static add(e, n) {
        if (!Zt.isSupported) return;
        const i = this.isTestArtifact(e) ? "http" : "https",
            a = this.isTestArtifact(e) ? "games-test.jackbox.tv" : "games.jackbox.tv",
            d = `${i}://${a}/artifact/${e.categoryId}/${e.artifactId}/`,
            g = Zt.get("galleries") || "[]";
        try {
            const E = JSON.parse(g) || [];
            if (E.some(k => k.url === d)) return;
            E.unshift({
                url: d,
                time: new Date().getTime(),
                categoryId: e.categoryId,
                viewed: !1
            }), Zt.set("galleries", JSON.stringify(E.slice(0, 40)))
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
        ri.setAsViewed(e), this.artifacts = this.list()
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
            return (JSON.parse(n) || []).filter(d => i - d.time < 525600 * 60 * 1e3).map(d => {
                const g = new Date(d.time),
                    E = e.format(g),
                    k = d.url.split("/"),
                    A = k[k.length - 1] === "" ? k[k.length - 2] : k[k.length - 1];
                let D = d.categoryId;
                return D || (d.url.indexOf("Quiplash2") !== -1 ? D = "Quiplash2Game" : d.url.indexOf("Drawful") !== -1 ? D = "DrawfulGame" : d.url.indexOf("TeeKO") !== -1 ? D = "TeeKOGame" : d.url.indexOf("TriviaDeath") !== -1 && (D = "TriviaDeathResults")), {
                    id: A,
                    gameName: D,
                    date: E,
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
        (function(g) {
            var E = {
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

            function k(U) {
                return U && DataView.prototype.isPrototypeOf(U)
            }
            if (E.arrayBuffer) var A = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                D = ArrayBuffer.isView || function(U) {
                    return U && A.indexOf(Object.prototype.toString.call(U)) > -1
                };

            function V(U) {
                if (typeof U != "string" && (U = String(U)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(U)) throw new TypeError("Invalid character in header field name");
                return U.toLowerCase()
            }

            function J(U) {
                return typeof U != "string" && (U = String(U)), U
            }

            function q(U) {
                var le = {
                    next: function() {
                        var Ae = U.shift();
                        return {
                            done: Ae === void 0,
                            value: Ae
                        }
                    }
                };
                return E.iterable && (le[Symbol.iterator] = function() {
                    return le
                }), le
            }

            function G(U) {
                this.map = {}, U instanceof G ? U.forEach(function(le, Ae) {
                    this.append(Ae, le)
                }, this) : Array.isArray(U) ? U.forEach(function(le) {
                    this.append(le[0], le[1])
                }, this) : U && Object.getOwnPropertyNames(U).forEach(function(le) {
                    this.append(le, U[le])
                }, this)
            }
            G.prototype.append = function(U, le) {
                U = V(U), le = J(le);
                var Ae = this.map[U];
                this.map[U] = Ae ? Ae + ", " + le : le
            }, G.prototype.delete = function(U) {
                delete this.map[V(U)]
            }, G.prototype.get = function(U) {
                return U = V(U), this.has(U) ? this.map[U] : null
            }, G.prototype.has = function(U) {
                return this.map.hasOwnProperty(V(U))
            }, G.prototype.set = function(U, le) {
                this.map[V(U)] = J(le)
            }, G.prototype.forEach = function(U, le) {
                for (var Ae in this.map) this.map.hasOwnProperty(Ae) && U.call(le, this.map[Ae], Ae, this)
            }, G.prototype.keys = function() {
                var U = [];
                return this.forEach(function(le, Ae) {
                    U.push(Ae)
                }), q(U)
            }, G.prototype.values = function() {
                var U = [];
                return this.forEach(function(le) {
                    U.push(le)
                }), q(U)
            }, G.prototype.entries = function() {
                var U = [];
                return this.forEach(function(le, Ae) {
                    U.push([Ae, le])
                }), q(U)
            }, E.iterable && (G.prototype[Symbol.iterator] = G.prototype.entries);

            function Q(U) {
                if (U.bodyUsed) return Promise.reject(new TypeError("Already read"));
                U.bodyUsed = !0
            }

            function v(U) {
                return new Promise(function(le, Ae) {
                    U.onload = function() {
                        le(U.result)
                    }, U.onerror = function() {
                        Ae(U.error)
                    }
                })
            }

            function M(U) {
                var le = new FileReader,
                    Ae = v(le);
                return le.readAsArrayBuffer(U), Ae
            }

            function W(U) {
                var le = new FileReader,
                    Ae = v(le);
                return le.readAsText(U), Ae
            }

            function oe(U) {
                for (var le = new Uint8Array(U), Ae = new Array(le.length), be = 0; be < le.length; be++) Ae[be] = String.fromCharCode(le[be]);
                return Ae.join("")
            }

            function ae(U) {
                if (U.slice) return U.slice(0);
                var le = new Uint8Array(U.byteLength);
                return le.set(new Uint8Array(U)), le.buffer
            }

            function ye() {
                return this.bodyUsed = !1, this._initBody = function(U) {
                    this._bodyInit = U, U ? typeof U == "string" ? this._bodyText = U : E.blob && Blob.prototype.isPrototypeOf(U) ? this._bodyBlob = U : E.formData && FormData.prototype.isPrototypeOf(U) ? this._bodyFormData = U : E.searchParams && URLSearchParams.prototype.isPrototypeOf(U) ? this._bodyText = U.toString() : E.arrayBuffer && E.blob && k(U) ? (this._bodyArrayBuffer = ae(U.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : E.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(U) || D(U)) ? this._bodyArrayBuffer = ae(U) : this._bodyText = U = Object.prototype.toString.call(U) : this._bodyText = "", this.headers.get("content-type") || (typeof U == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : E.searchParams && URLSearchParams.prototype.isPrototypeOf(U) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, E.blob && (this.blob = function() {
                    var U = Q(this);
                    if (U) return U;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? Q(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(M)
                }), this.text = function() {
                    var U = Q(this);
                    if (U) return U;
                    if (this._bodyBlob) return W(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(oe(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, E.formData && (this.formData = function() {
                    return this.text().then(Pe)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            var f = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function _e(U) {
                var le = U.toUpperCase();
                return f.indexOf(le) > -1 ? le : U
            }

            function Oe(U, le) {
                le = le || {};
                var Ae = le.body;
                if (U instanceof Oe) {
                    if (U.bodyUsed) throw new TypeError("Already read");
                    this.url = U.url, this.credentials = U.credentials, le.headers || (this.headers = new G(U.headers)), this.method = U.method, this.mode = U.mode, this.signal = U.signal, !Ae && U._bodyInit != null && (Ae = U._bodyInit, U.bodyUsed = !0)
                } else this.url = String(U);
                if (this.credentials = le.credentials || this.credentials || "same-origin", (le.headers || !this.headers) && (this.headers = new G(le.headers)), this.method = _e(le.method || this.method || "GET"), this.mode = le.mode || this.mode || null, this.signal = le.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && Ae) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(Ae)
            }
            Oe.prototype.clone = function() {
                return new Oe(this, {
                    body: this._bodyInit
                })
            };

            function Pe(U) {
                var le = new FormData;
                return U.trim().split("&").forEach(function(Ae) {
                    if (Ae) {
                        var be = Ae.split("="),
                            we = be.shift().replace(/\+/g, " "),
                            he = be.join("=").replace(/\+/g, " ");
                        le.append(decodeURIComponent(we), decodeURIComponent(he))
                    }
                }), le
            }

            function lt(U) {
                var le = new G,
                    Ae = U.replace(/\r?\n[\t ]+/g, " ");
                return Ae.split(/\r?\n/).forEach(function(be) {
                    var we = be.split(":"),
                        he = we.shift().trim();
                    if (he) {
                        var Se = we.join(":").trim();
                        le.append(he, Se)
                    }
                }), le
            }
            ye.call(Oe.prototype);

            function $e(U, le) {
                le || (le = {}), this.type = "default", this.status = le.status === void 0 ? 200 : le.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in le ? le.statusText : "OK", this.headers = new G(le.headers), this.url = le.url || "", this._initBody(U)
            }
            ye.call($e.prototype), $e.prototype.clone = function() {
                return new $e(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new G(this.headers),
                    url: this.url
                })
            }, $e.error = function() {
                var U = new $e(null, {
                    status: 0,
                    statusText: ""
                });
                return U.type = "error", U
            };
            var Z = [301, 302, 303, 307, 308];
            $e.redirect = function(U, le) {
                if (Z.indexOf(le) === -1) throw new RangeError("Invalid status code");
                return new $e(null, {
                    status: le,
                    headers: {
                        location: U
                    }
                })
            }, g.DOMException = d.DOMException;
            try {
                new g.DOMException
            } catch {
                g.DOMException = function(le, Ae) {
                    this.message = le, this.name = Ae;
                    var be = Error(le);
                    this.stack = be.stack
                }, g.DOMException.prototype = Object.create(Error.prototype), g.DOMException.prototype.constructor = g.DOMException
            }

            function Fe(U, le) {
                return new Promise(function(Ae, be) {
                    var we = new Oe(U, le);
                    if (we.signal && we.signal.aborted) return be(new g.DOMException("Aborted", "AbortError"));
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
                        var Be = "response" in he ? he.response : he.responseText;
                        Ae(new $e(Be, Te))
                    }, he.onerror = function() {
                        be(new TypeError("Network request failed"))
                    }, he.ontimeout = function() {
                        be(new TypeError("Network request failed"))
                    }, he.onabort = function() {
                        be(new g.DOMException("Aborted", "AbortError"))
                    }, he.open(we.method, we.url, !0), we.credentials === "include" ? he.withCredentials = !0 : we.credentials === "omit" && (he.withCredentials = !1), "responseType" in he && E.blob && (he.responseType = "blob"), we.headers.forEach(function(Te, Be) {
                        he.setRequestHeader(Be, Te)
                    }), we.signal && (we.signal.addEventListener("abort", Se), he.onreadystatechange = function() {
                        he.readyState === 4 && we.signal.removeEventListener("abort", Se)
                    }), he.send(typeof we._bodyInit > "u" ? null : we._bodyInit)
                })
            }
            return Fe.polyfill = !0, d.fetch || (d.fetch = Fe, d.Headers = G, d.Request = Oe, d.Response = $e), g.Headers = G, g.Request = Oe, g.Response = $e, g.fetch = Fe, Object.defineProperty(g, "__esModule", {
                value: !0
            }), g
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
            var g = Object.getOwnPropertyDescriptor(e, n);
            if (g.value !== a || g.enumerable !== !0) return !1
        }
        return !0
    },
    Ml = typeof Symbol < "u" && Symbol,
    ny = ty,
    iy = function() {
        return typeof Ml != "function" || typeof Symbol != "function" || typeof Ml("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : ny()
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
                    var D = n.apply(this, i.concat(Zo.call(arguments)));
                    return Object(D) === D ? D : this
                } else return n.apply(e, i.concat(Zo.call(arguments)))
            }, g = Math.max(0, n.length - i.length), E = [], k = 0; k < g; k++) E.push("$" + k);
        if (a = Function("binder", "return function (" + E.join(",") + "){ return binder.apply(this,arguments); }")(d), n.prototype) {
            var A = function() {};
            A.prototype = n.prototype, a.prototype = new A, A.prototype = null
        }
        return a
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
    li = Object.getPrototypeOf || function(t) {
        return t.__proto__
    },
    or = {},
    dy = typeof Uint8Array > "u" ? mt : li(Uint8Array),
    hr = {
        "%AggregateError%": typeof AggregateError > "u" ? mt : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? mt : ArrayBuffer,
        "%ArrayIteratorPrototype%": ir ? li([][Symbol.iterator]()) : mt,
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
        "%IteratorPrototype%": ir ? li(li([][Symbol.iterator]())) : mt,
        "%JSON%": typeof JSON == "object" ? JSON : mt,
        "%Map%": typeof Map > "u" ? mt : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !ir ? mt : li(new Map()[Symbol.iterator]()),
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
        "%SetIteratorPrototype%": typeof Set > "u" || !ir ? mt : li(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? mt : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": ir ? li("" [Symbol.iterator]()) : mt,
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
            a && (n = li(a.prototype))
        }
        return hr[e] = n, n
    },
    Ll = {
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
        var a = [];
        return Pl(e, vy, function(d, g, E, k) {
            a[a.length] = E ? Pl(k, yy, "$1") : g || d
        }), a
    },
    by = function(e, n) {
        var i = e,
            a;
        if (Js(Ll, i) && (a = Ll[i], i = "%" + a[0] + "%"), Js(hr, i)) {
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
        var i = wy(e),
            a = i.length > 0 ? i[0] : "",
            d = by("%" + a + "%", n),
            g = d.name,
            E = d.value,
            k = !1,
            A = d.alias;
        A && (a = A[0], gy(i, py([0, 1], A)));
        for (var D = 1, V = !0; D < i.length; D += 1) {
            var J = i[D],
                q = Qs(J, 0, 1),
                G = Qs(J, -1);
            if ((q === '"' || q === "'" || q === "`" || G === '"' || G === "'" || G === "`") && q !== G) throw new gr("property names with quotes must have matching quotes");
            if ((J === "constructor" || !V) && (k = !0), a += "." + J, g = "%" + a + "%", Js(hr, g)) E = hr[g];
            else if (E != null) {
                if (!(J in E)) {
                    if (!n) throw new ur("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (Pi && D + 1 >= i.length) {
                    var Q = Pi(E, J);
                    V = !!Q, V && "get" in Q && !("originalValue" in Q.get) ? E = Q.get : E = E[J]
                } else V = Js(E, J), E = E[J];
                V && !k && (hr[g] = E)
            }
        }
        return E
    },
    Bc = {
        exports: {}
    };
(function(t) {
    var e = Fa,
        n = za,
        i = n("%Function.prototype.apply%"),
        a = n("%Function.prototype.call%"),
        d = n("%Reflect.apply%", !0) || e.call(a, i),
        g = n("%Object.getOwnPropertyDescriptor%", !0),
        E = n("%Object.defineProperty%", !0),
        k = n("%Math.max%");
    if (E) try {
        E({}, "a", {
            value: 1
        })
    } catch {
        E = null
    }
    t.exports = function(V) {
        var J = d(e, a, arguments);
        if (g && E) {
            var q = g(J, "length");
            q.configurable && E(J, "length", {
                value: 1 + k(0, V.length - (arguments.length - 1))
            })
        }
        return J
    };
    var A = function() {
        return d(e, i, arguments)
    };
    E ? E(t.exports, "apply", {
        value: A
    }) : t.exports.apply = A
})(Bc);
var jc = za,
    Fc = Bc.exports,
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
var Ha = typeof Map == "function" && Map.prototype,
    na = Object.getOwnPropertyDescriptor && Ha ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    Zs = Ha && na && typeof na.get == "function" ? na.get : null,
    ky = Ha && Map.prototype.forEach,
    Ga = typeof Set == "function" && Set.prototype,
    ia = Object.getOwnPropertyDescriptor && Ga ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    eo = Ga && ia && typeof ia.get == "function" ? ia.get : null,
    Ty = Ga && Set.prototype.forEach,
    Ay = typeof WeakMap == "function" && WeakMap.prototype,
    ts = Ay ? WeakMap.prototype.has : null,
    Oy = typeof WeakSet == "function" && WeakSet.prototype,
    ns = Oy ? WeakSet.prototype.has : null,
    Ry = typeof WeakRef == "function" && WeakRef.prototype,
    Nl = Ry ? WeakRef.prototype.deref : null,
    Iy = Boolean.prototype.valueOf,
    Dy = Object.prototype.toString,
    My = Function.prototype.toString,
    Ly = String.prototype.match,
    Ua = String.prototype.slice,
    di = String.prototype.replace,
    Py = String.prototype.toUpperCase,
    Vl = String.prototype.toLowerCase,
    zc = RegExp.prototype.test,
    $l = Array.prototype.concat,
    jn = Array.prototype.join,
    Ny = Array.prototype.slice,
    Bl = Math.floor,
    _a = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    ra = Object.getOwnPropertySymbols,
    Sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    mr = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    cn = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === mr ? "object" : "symbol") ? Symbol.toStringTag : null,
    Hc = Object.prototype.propertyIsEnumerable,
    jl = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__
    } : null);

function Fl(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || zc.call(/e/, e)) return e;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var i = t < 0 ? -Bl(-t) : Bl(t);
        if (i !== t) {
            var a = String(i),
                d = Ua.call(e, a.length + 1);
            return di.call(a, n, "$&_") + "." + di.call(di.call(d, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return di.call(e, n, "$&_")
}
var ka = Sy,
    zl = ka.custom,
    Hl = Uc(zl) ? zl : null,
    Vy = function t(e, n, i, a) {
        var d = n || {};
        if (ci(d, "quoteStyle") && d.quoteStyle !== "single" && d.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (ci(d, "maxStringLength") && (typeof d.maxStringLength == "number" ? d.maxStringLength < 0 && d.maxStringLength !== 1 / 0 : d.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var g = ci(d, "customInspect") ? d.customInspect : !0;
        if (typeof g != "boolean" && g !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (ci(d, "indent") && d.indent !== null && d.indent !== "	" && !(parseInt(d.indent, 10) === d.indent && d.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (ci(d, "numericSeparator") && typeof d.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var E = d.numericSeparator;
        if (typeof e > "u") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return qc(e, d);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var k = String(e);
            return E ? Fl(e, k) : k
        }
        if (typeof e == "bigint") {
            var A = String(e) + "n";
            return E ? Fl(e, A) : A
        }
        var D = typeof d.depth > "u" ? 5 : d.depth;
        if (typeof i > "u" && (i = 0), i >= D && D > 0 && typeof e == "object") return Ta(e) ? "[Array]" : "[Object]";
        var V = tw(d, i);
        if (typeof a > "u") a = [];
        else if (Wc(a, e) >= 0) return "[Circular]";

        function J(Fe, U, le) {
            if (U && (a = Ny.call(a), a.push(U)), le) {
                var Ae = {
                    depth: d.depth
                };
                return ci(d, "quoteStyle") && (Ae.quoteStyle = d.quoteStyle), t(Fe, Ae, i + 1, a)
            }
            return t(Fe, d, i + 1, a)
        }
        if (typeof e == "function" && !Gl(e)) {
            var q = Wy(e),
                G = Ls(e, J);
            return "[Function" + (q ? ": " + q : " (anonymous)") + "]" + (G.length > 0 ? " { " + jn.call(G, ", ") + " }" : "")
        }
        if (Uc(e)) {
            var Q = mr ? di.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Sa.call(e);
            return typeof e == "object" && !mr ? Yr(Q) : Q
        }
        if (Qy(e)) {
            for (var v = "<" + Vl.call(String(e.nodeName)), M = e.attributes || [], W = 0; W < M.length; W++) v += " " + M[W].name + "=" + Gc($y(M[W].value), "double", d);
            return v += ">", e.childNodes && e.childNodes.length && (v += "..."), v += "</" + Vl.call(String(e.nodeName)) + ">", v
        }
        if (Ta(e)) {
            if (e.length === 0) return "[]";
            var oe = Ls(e, J);
            return V && !ew(oe) ? "[" + Aa(oe, V) + "]" : "[ " + jn.call(oe, ", ") + " ]"
        }
        if (jy(e)) {
            var ae = Ls(e, J);
            return !("cause" in Error.prototype) && "cause" in e && !Hc.call(e, "cause") ? "{ [" + String(e) + "] " + jn.call($l.call("[cause]: " + J(e.cause), ae), ", ") + " }" : ae.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + jn.call(ae, ", ") + " }"
        }
        if (typeof e == "object" && g) {
            if (Hl && typeof e[Hl] == "function" && ka) return ka(e, {
                depth: D - i
            });
            if (g !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (qy(e)) {
            var ye = [];
            return ky.call(e, function(Fe, U) {
                ye.push(J(U, e, !0) + " => " + J(Fe, e))
            }), Ul("Map", Zs.call(e), ye, V)
        }
        if (Ky(e)) {
            var f = [];
            return Ty.call(e, function(Fe) {
                f.push(J(Fe, e))
            }), Ul("Set", eo.call(e), f, V)
        }
        if (Xy(e)) return sa("WeakMap");
        if (Jy(e)) return sa("WeakSet");
        if (Yy(e)) return sa("WeakRef");
        if (zy(e)) return Yr(J(Number(e)));
        if (Gy(e)) return Yr(J(_a.call(e)));
        if (Hy(e)) return Yr(Iy.call(e));
        if (Fy(e)) return Yr(J(String(e)));
        if (!By(e) && !Gl(e)) {
            var _e = Ls(e, J),
                Oe = jl ? jl(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                Pe = e instanceof Object ? "" : "null prototype",
                lt = !Oe && cn && Object(e) === e && cn in e ? Ua.call(gi(e), 8, -1) : Pe ? "Object" : "",
                $e = Oe || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                Z = $e + (lt || Pe ? "[" + jn.call($l.call([], lt || [], Pe || []), ": ") + "] " : "");
            return _e.length === 0 ? Z + "{}" : V ? Z + "{" + Aa(_e, V) + "}" : Z + "{ " + jn.call(_e, ", ") + " }"
        }
        return String(e)
    };

function Gc(t, e, n) {
    var i = (n.quoteStyle || e) === "double" ? '"' : "'";
    return i + t + i
}

function $y(t) {
    return di.call(String(t), /"/g, "&quot;")
}

function Ta(t) {
    return gi(t) === "[object Array]" && (!cn || !(typeof t == "object" && cn in t))
}

function By(t) {
    return gi(t) === "[object Date]" && (!cn || !(typeof t == "object" && cn in t))
}

function Gl(t) {
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

function Hy(t) {
    return gi(t) === "[object Boolean]" && (!cn || !(typeof t == "object" && cn in t))
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

function Gy(t) {
    if (!t || typeof t != "object" || !_a) return !1;
    try {
        return _a.call(t), !0
    } catch {}
    return !1
}
var Uy = Object.prototype.hasOwnProperty || function(t) {
    return t in this
};

function ci(t, e) {
    return Uy.call(t, e)
}

function gi(t) {
    return Dy.call(t)
}

function Wy(t) {
    if (t.name) return t.name;
    var e = Ly.call(My.call(t), /^function\s*([\w$]+)/);
    return e ? e[1] : null
}

function Wc(t, e) {
    if (t.indexOf) return t.indexOf(e);
    for (var n = 0, i = t.length; n < i; n++)
        if (t[n] === e) return n;
    return -1
}

function qy(t) {
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

function Xy(t) {
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

function Yy(t) {
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

function qc(t, e) {
    if (t.length > e.maxStringLength) {
        var n = t.length - e.maxStringLength,
            i = "... " + n + " more character" + (n > 1 ? "s" : "");
        return qc(Ua.call(t, 0, e.maxStringLength), e) + i
    }
    var a = di.call(di.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Zy);
    return Gc(a, "single", e)
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

function Yr(t) {
    return "Object(" + t + ")"
}

function sa(t) {
    return t + " { ? }"
}

function Ul(t, e, n, i) {
    var a = i ? Aa(n, i) : jn.call(n, ", ");
    return t + " (" + e + ") {" + a + "}"
}

function ew(t) {
    for (var e = 0; e < t.length; e++)
        if (Wc(t[e], `
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

function Ls(t, e) {
    var n = Ta(t),
        i = [];
    if (n) {
        i.length = t.length;
        for (var a = 0; a < t.length; a++) i[a] = ci(t, a) ? e(t[a], t) : ""
    }
    var d = typeof ra == "function" ? ra(t) : [],
        g;
    if (mr) {
        g = {};
        for (var E = 0; E < d.length; E++) g["$" + d[E]] = d[E]
    }
    for (var k in t) !ci(t, k) || n && String(Number(k)) === k && k < t.length || mr && g["$" + k] instanceof Symbol || (zc.call(/[^\w$]/, k) ? i.push(e(k, t) + ": " + e(t[k], t)) : i.push(k + ": " + e(t[k], t)));
    if (typeof ra == "function")
        for (var A = 0; A < d.length; A++) Hc.call(t, d[A]) && i.push("[" + e(d[A]) + "]: " + e(t[d[A]], t));
    return i
}
var Wa = za,
    _r = xy,
    nw = Vy,
    iw = Wa("%TypeError%"),
    Ps = Wa("%WeakMap%", !0),
    Ns = Wa("%Map%", !0),
    rw = _r("WeakMap.prototype.get", !0),
    sw = _r("WeakMap.prototype.set", !0),
    ow = _r("WeakMap.prototype.has", !0),
    aw = _r("Map.prototype.get", !0),
    lw = _r("Map.prototype.set", !0),
    cw = _r("Map.prototype.has", !0),
    qa = function(t, e) {
        for (var n = t, i;
            (i = n.next) !== null; n = i)
            if (i.key === e) return n.next = i.next, i.next = t.next, t.next = i, i
    },
    uw = function(t, e) {
        var n = qa(t, e);
        return n && n.value
    },
    hw = function(t, e, n) {
        var i = qa(t, e);
        i ? i.value = n : t.next = {
            key: e,
            next: t.next,
            value: n
        }
    },
    dw = function(t, e) {
        return !!qa(t, e)
    },
    fw = function() {
        var e, n, i, a = {
            assert: function(d) {
                if (!a.has(d)) throw new iw("Side channel does not contain " + nw(d))
            },
            get: function(d) {
                if (Ps && d && (typeof d == "object" || typeof d == "function")) {
                    if (e) return rw(e, d)
                } else if (Ns) {
                    if (n) return aw(n, d)
                } else if (i) return uw(i, d)
            },
            has: function(d) {
                if (Ps && d && (typeof d == "object" || typeof d == "function")) {
                    if (e) return ow(e, d)
                } else if (Ns) {
                    if (n) return cw(n, d)
                } else if (i) return dw(i, d);
                return !1
            },
            set: function(d, g) {
                Ps && d && (typeof d == "object" || typeof d == "function") ? (e || (e = new Ps), sw(e, d, g)) : Ns ? (n || (n = new Ns), lw(n, d, g)) : (i || (i = {
                    key: {},
                    next: null
                }), hw(i, d, g))
            }
        };
        return a
    },
    pw = String.prototype.replace,
    gw = /%20/g,
    oa = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    Xa = {
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
    mw = Xa,
    aa = Object.prototype.hasOwnProperty,
    Mi = Array.isArray,
    $n = function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
    }(),
    vw = function(e) {
        for (; e.length > 1;) {
            var n = e.pop(),
                i = n.obj[n.prop];
            if (Mi(i)) {
                for (var a = [], d = 0; d < i.length; ++d) typeof i[d] < "u" && a.push(i[d]);
                n.obj[n.prop] = a
            }
        }
    },
    Xc = function(e, n) {
        for (var i = n && n.plainObjects ? Object.create(null) : {}, a = 0; a < e.length; ++a) typeof e[a] < "u" && (i[a] = e[a]);
        return i
    },
    yw = function t(e, n, i) {
        if (!n) return e;
        if (typeof n != "object") {
            if (Mi(e)) e.push(n);
            else if (e && typeof e == "object")(i && (i.plainObjects || i.allowPrototypes) || !aa.call(Object.prototype, n)) && (e[n] = !0);
            else return [e, n];
            return e
        }
        if (!e || typeof e != "object") return [e].concat(n);
        var a = e;
        return Mi(e) && !Mi(n) && (a = Xc(e, i)), Mi(e) && Mi(n) ? (n.forEach(function(d, g) {
            if (aa.call(e, g)) {
                var E = e[g];
                E && typeof E == "object" && d && typeof d == "object" ? e[g] = t(E, d, i) : e.push(d)
            } else e[g] = d
        }), e) : Object.keys(n).reduce(function(d, g) {
            var E = n[g];
            return aa.call(d, g) ? d[g] = t(d[g], E, i) : d[g] = E, d
        }, a)
    },
    ww = function(e, n) {
        return Object.keys(n).reduce(function(i, a) {
            return i[a] = n[a], i
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
    Cw = function(e, n, i, a, d) {
        if (e.length === 0) return e;
        var g = e;
        if (typeof e == "symbol" ? g = Symbol.prototype.toString.call(e) : typeof e != "string" && (g = String(e)), i === "iso-8859-1") return escape(g).replace(/%u[0-9a-f]{4}/gi, function(D) {
            return "%26%23" + parseInt(D.slice(2), 16) + "%3B"
        });
        for (var E = "", k = 0; k < g.length; ++k) {
            var A = g.charCodeAt(k);
            if (A === 45 || A === 46 || A === 95 || A === 126 || A >= 48 && A <= 57 || A >= 65 && A <= 90 || A >= 97 && A <= 122 || d === mw.RFC1738 && (A === 40 || A === 41)) {
                E += g.charAt(k);
                continue
            }
            if (A < 128) {
                E = E + $n[A];
                continue
            }
            if (A < 2048) {
                E = E + ($n[192 | A >> 6] + $n[128 | A & 63]);
                continue
            }
            if (A < 55296 || A >= 57344) {
                E = E + ($n[224 | A >> 12] + $n[128 | A >> 6 & 63] + $n[128 | A & 63]);
                continue
            }
            k += 1, A = 65536 + ((A & 1023) << 10 | g.charCodeAt(k) & 1023), E += $n[240 | A >> 18] + $n[128 | A >> 12 & 63] + $n[128 | A >> 6 & 63] + $n[128 | A & 63]
        }
        return E
    },
    xw = function(e) {
        for (var n = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], i = [], a = 0; a < n.length; ++a)
            for (var d = n[a], g = d.obj[d.prop], E = Object.keys(g), k = 0; k < E.length; ++k) {
                var A = E[k],
                    D = g[A];
                typeof D == "object" && D !== null && i.indexOf(D) === -1 && (n.push({
                    obj: g,
                    prop: A
                }), i.push(D))
            }
        return vw(n), e
    },
    Ew = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    },
    _w = function(e) {
        return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    Sw = function(e, n) {
        return [].concat(e, n)
    },
    kw = function(e, n) {
        if (Mi(e)) {
            for (var i = [], a = 0; a < e.length; a += 1) i.push(n(e[a]));
            return i
        }
        return n(e)
    },
    Yc = {
        arrayToObject: Xc,
        assign: ww,
        combine: Sw,
        compact: xw,
        decode: bw,
        encode: Cw,
        isBuffer: _w,
        isRegExp: Ew,
        maybeMap: kw,
        merge: yw
    },
    Kc = fw,
    Oa = Yc,
    is = Xa,
    Tw = Object.prototype.hasOwnProperty,
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
    Aw = String.prototype.split,
    Ow = Array.prototype.push,
    Jc = function(t, e) {
        Ow.apply(t, ei(e) ? e : [e])
    },
    Rw = Date.prototype.toISOString,
    ql = is.default,
    tn = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: Oa.encode,
        encodeValuesOnly: !1,
        format: ql,
        formatter: is.formatters[ql],
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
    Dw = function t(e, n, i, a, d, g, E, k, A, D, V, J, q, G, Q, v) {
        for (var M = e, W = v, oe = 0, ae = !1;
            (W = W.get(la)) !== void 0 && !ae;) {
            var ye = W.get(e);
            if (oe += 1, typeof ye < "u") {
                if (ye === oe) throw new RangeError("Cyclic object value");
                ae = !0
            }
            typeof W.get(la) > "u" && (oe = 0)
        }
        if (typeof k == "function" ? M = k(n, M) : M instanceof Date ? M = V(M) : i === "comma" && ei(M) && (M = Oa.maybeMap(M, function(he) {
                return he instanceof Date ? V(he) : he
            })), M === null) {
            if (d) return E && !G ? E(n, tn.encoder, Q, "key", J) : n;
            M = ""
        }
        if (Iw(M) || Oa.isBuffer(M)) {
            if (E) {
                var f = G ? n : E(n, tn.encoder, Q, "key", J);
                if (i === "comma" && G) {
                    for (var _e = Aw.call(String(M), ","), Oe = "", Pe = 0; Pe < _e.length; ++Pe) Oe += (Pe === 0 ? "" : ",") + q(E(_e[Pe], tn.encoder, Q, "value", J));
                    return [q(f) + (a && ei(M) && _e.length === 1 ? "[]" : "") + "=" + Oe]
                }
                return [q(f) + "=" + q(E(M, tn.encoder, Q, "value", J))]
            }
            return [q(n) + "=" + q(String(M))]
        }
        var lt = [];
        if (typeof M > "u") return lt;
        var $e;
        if (i === "comma" && ei(M)) $e = [{
            value: M.length > 0 ? M.join(",") || null : void 0
        }];
        else if (ei(k)) $e = k;
        else {
            var Z = Object.keys(M);
            $e = A ? Z.sort(A) : Z
        }
        for (var Fe = a && ei(M) && M.length === 1 ? n + "[]" : n, U = 0; U < $e.length; ++U) {
            var le = $e[U],
                Ae = typeof le == "object" && typeof le.value < "u" ? le.value : M[le];
            if (!(g && Ae === null)) {
                var be = ei(M) ? typeof i == "function" ? i(Fe, le) : Fe : Fe + (D ? "." + le : "[" + le + "]");
                v.set(e, oe);
                var we = Kc();
                we.set(la, v), Jc(lt, t(Ae, be, i, a, d, g, E, k, A, D, V, J, q, G, Q, we))
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
            if (!Tw.call(is.formatters, e.format)) throw new TypeError("Unknown format option provided.");
            i = e.format
        }
        var a = is.formatters[i],
            d = tn.filter;
        return (typeof e.filter == "function" || ei(e.filter)) && (d = e.filter), {
            addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : tn.addQueryPrefix,
            allowDots: typeof e.allowDots > "u" ? tn.allowDots : !!e.allowDots,
            charset: n,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : tn.charsetSentinel,
            delimiter: typeof e.delimiter > "u" ? tn.delimiter : e.delimiter,
            encode: typeof e.encode == "boolean" ? e.encode : tn.encode,
            encoder: typeof e.encoder == "function" ? e.encoder : tn.encoder,
            encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : tn.encodeValuesOnly,
            filter: d,
            format: i,
            formatter: a,
            serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : tn.serializeDate,
            skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : tn.skipNulls,
            sort: typeof e.sort == "function" ? e.sort : null,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : tn.strictNullHandling
        }
    },
    Lw = function(t, e) {
        var n = t,
            i = Mw(e),
            a, d;
        typeof i.filter == "function" ? (d = i.filter, n = d("", n)) : ei(i.filter) && (d = i.filter, a = d);
        var g = [];
        if (typeof n != "object" || n === null) return "";
        var E;
        e && e.arrayFormat in Wl ? E = e.arrayFormat : e && "indices" in e ? E = e.indices ? "indices" : "repeat" : E = "indices";
        var k = Wl[E];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var A = k === "comma" && e && e.commaRoundTrip;
        a || (a = Object.keys(n)), i.sort && a.sort(i.sort);
        for (var D = Kc(), V = 0; V < a.length; ++V) {
            var J = a[V];
            i.skipNulls && n[J] === null || Jc(g, Dw(n[J], J, k, A, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.format, i.formatter, i.encodeValuesOnly, i.charset, D))
        }
        var q = g.join(i.delimiter),
            G = i.addQueryPrefix === !0 ? "?" : "";
        return i.charsetSentinel && (i.charset === "iso-8859-1" ? G += "utf8=%26%2310003%3B&" : G += "utf8=%E2%9C%93&"), q.length > 0 ? G + q : ""
    },
    vr = Yc,
    Ra = Object.prototype.hasOwnProperty,
    Pw = Array.isArray,
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
    Qc = function(t, e) {
        return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
    },
    Vw = "utf8=%26%2310003%3B",
    $w = "utf8=%E2%9C%93",
    Bw = function(e, n) {
        var i = {},
            a = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            d = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
            g = a.split(n.delimiter, d),
            E = -1,
            k, A = n.charset;
        if (n.charsetSentinel)
            for (k = 0; k < g.length; ++k) g[k].indexOf("utf8=") === 0 && (g[k] === $w ? A = "utf-8" : g[k] === Vw && (A = "iso-8859-1"), E = k, k = g.length);
        for (k = 0; k < g.length; ++k)
            if (k !== E) {
                var D = g[k],
                    V = D.indexOf("]="),
                    J = V === -1 ? D.indexOf("=") : V + 1,
                    q, G;
                J === -1 ? (q = n.decoder(D, Qt.decoder, A, "key"), G = n.strictNullHandling ? null : "") : (q = n.decoder(D.slice(0, J), Qt.decoder, A, "key"), G = vr.maybeMap(Qc(D.slice(J + 1), n), function(Q) {
                    return n.decoder(Q, Qt.decoder, A, "value")
                })), G && n.interpretNumericEntities && A === "iso-8859-1" && (G = Nw(G)), D.indexOf("[]=") > -1 && (G = Pw(G) ? [G] : G), Ra.call(i, q) ? i[q] = vr.combine(i[q], G) : i[q] = G
            } return i
    },
    jw = function(t, e, n, i) {
        for (var a = i ? e : Qc(e, n), d = t.length - 1; d >= 0; --d) {
            var g, E = t[d];
            if (E === "[]" && n.parseArrays) g = [].concat(a);
            else {
                g = n.plainObjects ? Object.create(null) : {};
                var k = E.charAt(0) === "[" && E.charAt(E.length - 1) === "]" ? E.slice(1, -1) : E,
                    A = parseInt(k, 10);
                !n.parseArrays && k === "" ? g = {
                    0: a
                } : !isNaN(A) && E !== k && String(A) === k && A >= 0 && n.parseArrays && A <= n.arrayLimit ? (g = [], g[A] = a) : k !== "__proto__" && (g[k] = a)
            }
            a = g
        }
        return a
    },
    Fw = function(e, n, i, a) {
        if (!!e) {
            var d = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                g = /(\[[^[\]]*])/,
                E = /(\[[^[\]]*])/g,
                k = i.depth > 0 && g.exec(d),
                A = k ? d.slice(0, k.index) : d,
                D = [];
            if (A) {
                if (!i.plainObjects && Ra.call(Object.prototype, A) && !i.allowPrototypes) return;
                D.push(A)
            }
            for (var V = 0; i.depth > 0 && (k = E.exec(d)) !== null && V < i.depth;) {
                if (V += 1, !i.plainObjects && Ra.call(Object.prototype, k[1].slice(1, -1)) && !i.allowPrototypes) return;
                D.push(k[1])
            }
            return k && D.push("[" + d.slice(k.index) + "]"), jw(D, n, i, a)
        }
    },
    zw = function(e) {
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
    Hw = function(t, e) {
        var n = zw(e);
        if (t === "" || t === null || typeof t > "u") return n.plainObjects ? Object.create(null) : {};
        for (var i = typeof t == "string" ? Bw(t, n) : t, a = n.plainObjects ? Object.create(null) : {}, d = Object.keys(i), g = 0; g < d.length; ++g) {
            var E = d[g],
                k = Fw(E, i[E], n, typeof t == "string");
            a = vr.merge(a, k, n)
        }
        return n.allowSparse === !0 ? a : vr.compact(a)
    },
    Gw = Lw,
    Uw = Hw,
    Ww = Xa,
    Zc = {
        formats: Ww,
        parse: Uw,
        stringify: Gw
    };
class qw {
    constructor(e) {
        this.code = e.code, this.token = e.token, this.host = e.host
    }
}
class Xw {
    constructor(e) {
        this.appId = e.appId, this.appTag = e.appTag, this.audienceEnabled = e.audienceEnabled, this.code = e.code, this.host = e.host, this.audienceHost = e.audienceHost, this.locked = e.locked, this.full = e.full, this.moderationEnabled = e.moderationEnabled, this.passwordRequired = e.passwordRequired, this.twitchLocked = e.twitchLocked, this.locale = e.locale, this.keepalive = e.keepalive, this.controllerBranch = e.controllerBranch
    }
}
class Yw {
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
    CreateRoomReply: qw,
    GetRoomReply: Xw,
    GetAudienceReply: Yw,
    RoomExit: Kw,
    RoomLock: Jw
};
const Xl = Ea.exports,
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
            g = await (await Xl(i, {
                method: "POST"
            })).json();
        if (!g.ok) throw new Error(`failed to create room: ${g.error}`);
        let E = g.body;
        return new Zw({
            code: E.code,
            token: E.token,
            host: E.host
        })
    }
    async getRoom(e) {
        let n = this.url(`/rooms/${e.code}`),
            a = await (await Xl(n)).json();
        if (!a.ok) throw new Error(`unable to get room with options ${JSON.stringify(e)}: ${a.error}`);
        let d = a.body;
        return new eb({
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
var nb = {
        APIClient: tb
    },
    ar = null;
typeof WebSocket < "u" ? ar = WebSocket : typeof MozWebSocket < "u" ? ar = MozWebSocket : typeof vt < "u" ? ar = vt.WebSocket || vt.MozWebSocket : typeof window < "u" ? ar = window.WebSocket || window.MozWebSocket : typeof self < "u" && (ar = self.WebSocket || self.MozWebSocket);
var ib = ar,
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

function rb(t) {
    console && console.warn && console.warn(t)
}
var eu = Number.isNaN || function(e) {
    return e !== e
};

function Rt() {
    Rt.init.call(this)
}
Ya.exports = Rt;
Ya.exports.once = lb;
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
        var g;
        if (n.length > 0 && (g = n[0]), g instanceof Error) throw g;
        var E = new Error("Unhandled error." + (g ? " (" + g.message + ")" : ""));
        throw E.context = g, E
    }
    var k = d[e];
    if (k === void 0) return !1;
    if (typeof k == "function") Yl(k, this, n);
    else
        for (var A = k.length, D = ou(k, A), i = 0; i < A; ++i) Yl(D[i], this, n);
    return !0
};

function nu(t, e, n, i) {
    var a, d, g;
    if (go(n), d = t._events, d === void 0 ? (d = t._events = Object.create(null), t._eventsCount = 0) : (d.newListener !== void 0 && (t.emit("newListener", e, n.listener ? n.listener : n), d = t._events), g = d[e]), g === void 0) g = d[e] = n, ++t._eventsCount;
    else if (typeof g == "function" ? g = d[e] = i ? [n, g] : [g, n] : i ? g.unshift(n) : g.push(n), a = tu(t), a > 0 && g.length > a && !g.warned) {
        g.warned = !0;
        var E = new Error("Possible EventEmitter memory leak detected. " + g.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        E.name = "MaxListenersExceededWarning", E.emitter = t, E.type = e, E.count = g.length, rb(E)
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
        a = sb.bind(i);
    return a.listener = n, i.wrapFn = a, a
}
Rt.prototype.once = function(e, n) {
    return go(n), this.on(e, iu(this, e, n)), this
};
Rt.prototype.prependOnceListener = function(e, n) {
    return go(n), this.prependListener(e, iu(this, e, n)), this
};
Rt.prototype.removeListener = function(e, n) {
    var i, a, d, g, E;
    if (go(n), a = this._events, a === void 0) return this;
    if (i = a[e], i === void 0) return this;
    if (i === n || i.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete a[e], a.removeListener && this.emit("removeListener", e, i.listener || n));
    else if (typeof i != "function") {
        for (d = -1, g = i.length - 1; g >= 0; g--)
            if (i[g] === n || i[g].listener === n) {
                E = i[g].listener, d = g;
                break
            } if (d < 0) return this;
        d === 0 ? i.shift() : ob(i, d), i.length === 1 && (a[e] = i[0]), a.removeListener !== void 0 && this.emit("removeListener", e, E || n)
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
            g;
        for (a = 0; a < d.length; ++a) g = d[a], g !== "removeListener" && this.removeAllListeners(g);
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
    return a === void 0 ? [] : typeof a == "function" ? n ? [a.listener || a] : [a] : n ? ab(a) : ou(a, a.length)
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
    return this._eventsCount > 0 ? Hs(this._events) : []
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
        function a(g) {
            t.removeListener(e, d), i(g)
        }

        function d() {
            typeof t.removeListener == "function" && t.removeListener("error", a), n([].slice.call(arguments))
        }
        au(t, e, d, {
            once: !0
        }), e !== "error" && cb(t, a, {
            once: !0
        })
    })
}

function cb(t, e, n) {
    typeof t.on == "function" && au(t, "error", e, n)
}

function au(t, e, n, i) {
    if (typeof t.on == "function") i.once ? t.once(e, n) : t.on(e, n);
    else if (typeof t.addEventListener == "function") t.addEventListener(e, function a(d) {
        i.once && t.removeEventListener(e, a), n(d)
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
class _u extends Tt {
    constructor(e) {
        super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
    }
}
class Su extends Tt {
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
class Du extends Tt {
    constructor(e) {
        super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
    }
}
class Mu extends Tt {
    constructor(e) {
        super(e), this.code = 2024, this.message = e && e.message ? e.message : "not connected to a room"
    }
}
class Lu extends Tt {
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
    EcastInvalidRole: _u,
    EcastTwitchLoginRequired: Su,
    EcastInvalidOption: ku,
    EcastPasswordRequired: Tu,
    EcastInvalidPassword: Au,
    EcastNameRequired: Ou,
    EcastFilterError: Ru,
    EcastNoSuchFilter: Iu,
    EcastPermissionDenied: Du,
    EcastNotConnected: Mu,
    EcastIllegalOperation: Lu,
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
    2014: _u,
    2015: Su,
    2016: ku,
    2017: Tu,
    2018: Au,
    2019: Ou,
    2021: Ru,
    2022: Iu,
    2023: Du,
    2024: Mu,
    2025: Lu,
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
class _b {
    constructor(e) {
        this.pc = e.pc, this.re = e.re, this.opcode = e.opcode, this.result = e.result
    }
}
var ju = {
    Reply: _b
};
class Sb {
    constructor(e) {
        this.seq = e.seq, this.opcode = e.opcode, this.params = e.params
    }
}
var kb = {
    Request: Sb
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
class Db {
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
    DoodleEntity: Ib,
    DoodleLine: Db,
    DoodleLineRemoved: Mb
};
class Lb {
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
    StackEntity: Lb,
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
var Hu = {
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
var Gu = {
    OK: zb
};
class Hb {
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
    NumberEntity: Hb
};
const {
    ArtifactEntity: Gb
} = Fu, {
    ClientWelcome: Ub,
    ClientConnected: Wb,
    ClientDisconnected: qb,
    ClientKicked: Xb,
    ClientSend: Yb
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
} = Hu, {
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
} = Gu, {
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
            return new qb({
                id: e.id,
                role: e.role
            });
        case "client/kicked":
            return new Xb({
                id: e.id,
                banned: e.banned,
                reason: e.reason
            });
        case "client/send":
            return new Yb({
                to: e.to,
                from: e.from,
                body: e.body,
                userId: e.userID
            });
        case "client/welcome": {
            let i = new Ub({
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
                Object.entries(e.entities).forEach(([d, g]) => {
                    a[d] = Ia(g[0], g[1], g[2])
                }), i.entities = a
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
    E0 = Ya.exports,
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
        parseResponseMessage: D0
    } = C0,
    {
        DoodleEntity: M0
    } = il,
    {
        StackEntity: L0
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
            let g = !1,
                E = !1,
                k = D => {
                    a(D), g = !0
                },
                A = D => {
                    d(D), g = !0
                };
            this.conn = new Zl(i, "ecast-v0"), this.conn.onmessage = D => {
                this.debugLog(`recv <- ${JSON.stringify(JSON.parse(D.data),null,2)}`);
                const V = D0(D);
                if (V instanceof O0) this.onReply(V);
                else if (V instanceof ec) {
                    if (V.result instanceof S0) E = !0, this.id = V.result.id, this.deviceId = V.result.deviceId, this.entities = V.result.entities, this.secret = V.result.secret, V.result.name && (this.name = V.result.name), k(V.result);
                    else if (!g) {
                        A(V.result);
                        return
                    }
                    this.onNotification(V)
                } else console.error(`failed to parse response messsage: ${V}`)
            }, this.conn.onerror = D => {
                g ? this.emit("socketError", D) : A(D)
            }, this.conn.onclose = D => {
                this.debugLog("onclose", D.code), E && D.code === 1006 ? this.reconnect() : this.emit("socketClose", D)
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
            d = new Promise((E, k) => {
                this.pending[i] = {
                    resolve: E,
                    reject: k,
                    request: a
                }
            }),
            g = JSON.stringify(a);
        return this.debugLog(`send -> ${g}`), this.conn.send(g), d
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
                accept: g,
                reject: E
            } = i;
        d && (a.acl = d), g && (a.accept = g), E && (a.reject = E);
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
            live: g,
            maxPoints: E,
            size: k,
            weights: A
        } = n;
        a && (i.acl = a), d && (i.colors = d), i.live = g, E != null && (i.maxPoints = E), k && (i.size = k), A && (i.weights = A);
        const D = await this.send("doodle/create", i);
        return this.entities[e] = new M0({
            key: e,
            colors: d,
            lines: [],
            live: g,
            locked: !1,
            maxPoints: i.maxPoints || 0,
            size: k,
            weights: A,
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
            weight: d,
            points: g
        } = n, E = await this.send("doodle/stroke", {
            key: e,
            layer: i,
            color: a,
            weight: d,
            points: g
        }), k = {
            layer: i,
            color: a,
            weight: d,
            points: g
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
        const a = await this.send("stack/create", i);
        return this.entities[e] = new L0({
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
                reject: g
            } = n;
        a && (i.limit = a), d && (i.accept = d), g && (i.reject = g);
        const E = await this.send("audience/text-ring/create", i);
        return this.entities[e] = new I0({
            key: e,
            elements: [],
            limit: a,
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
    ClientDisconnected: H0
} = Ka, {
    ArtifactEntity: G0
} = Fu, {
    GCounter: U0
} = Qa, {
    NumberEntity: W0
} = Uu, {
    TextEntity: q0
} = tl, {
    DoodleEntity: X0
} = il, {
    ObjectEntity: Y0
} = Za, {
    CountGroup: K0
} = Ja, {
    DropEntity: J0
} = Hu, {
    OK: Q0
} = Gu, {
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
    ClientDisconnected: H0,
    RoomExit: Z0,
    OK: Q0,
    ArtifactEntity: G0,
    DoodleEntity: X0,
    NumberEntity: W0,
    CountGroup: K0,
    GCounter: U0,
    ObjectEntity: Y0,
    PNCounter: tC,
    TextEntity: q0,
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
            a = function(N, Y) {
                if (Y = Y.split(":")[0], N = +N, !N) return !1;
                switch (Y) {
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
            g;

        function E(j) {
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

        function A(j) {
            for (var N = /([^=?#&]+)=?([^&]*)/g, Y = {}, L; L = N.exec(j);) {
                var X = E(L[1]),
                    pe = E(L[2]);
                X === null || pe === null || X in Y || (Y[X] = pe)
            }
            return Y
        }

        function D(j, N) {
            N = N || "";
            var Y = [],
                L, X;
            typeof N != "string" && (N = "?");
            for (X in j)
                if (d.call(j, X)) {
                    if (L = j[X], !L && (L === null || L === g || isNaN(L)) && (L = ""), X = k(X), L = k(L), X === null || L === null) continue;
                    Y.push(X + "=" + L)
                } return Y.length ? N + Y.join("&") : ""
        }
        var V = D,
            J = A,
            q = {
                stringify: V,
                parse: J
            },
            G = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            Q = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            v = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
            M = new RegExp("^" + v + "+");

        function W(j) {
            return (j || "").toString().replace(M, "")
        }
        var oe = [
                ["#", "hash"],
                ["?", "query"],
                function(N, Y) {
                    return f(Y.protocol) ? N.replace(/\\/g, "/") : N
                },
                ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/:(\d+)$/, "port", void 0, 1],
                [NaN, "hostname", void 0, 1, 1]
            ],
            ae = {
                hash: 1,
                query: 1
            };

        function ye(j) {
            var N;
            typeof window < "u" ? N = window : typeof i < "u" ? N = i : typeof self < "u" ? N = self : N = {};
            var Y = N.location || {};
            j = j || Y;
            var L = {},
                X = typeof j,
                pe;
            if (j.protocol === "blob:") L = new Pe(unescape(j.pathname), {});
            else if (X === "string") {
                L = new Pe(j, {});
                for (pe in ae) delete L[pe]
            } else if (X === "object") {
                for (pe in j) pe in ae || (L[pe] = j[pe]);
                L.slashes === void 0 && (L.slashes = G.test(j.href))
            }
            return L
        }

        function f(j) {
            return j === "file:" || j === "ftp:" || j === "http:" || j === "https:" || j === "ws:" || j === "wss:"
        }

        function _e(j, N) {
            j = W(j), N = N || {};
            var Y = Q.exec(j),
                L = Y[1] ? Y[1].toLowerCase() : "",
                X = !!Y[2],
                pe = !!Y[3],
                ge = 0,
                Ne;
            return X ? pe ? (Ne = Y[2] + Y[3] + Y[4], ge = Y[2].length + Y[3].length) : (Ne = Y[2] + Y[4], ge = Y[2].length) : pe ? (Ne = Y[3] + Y[4], ge = Y[3].length) : Ne = Y[4], L === "file:" ? ge >= 2 && (Ne = Ne.slice(2)) : f(L) ? Ne = Y[4] : L ? X && (Ne = Ne.slice(2)) : ge >= 2 && f(N.protocol) && (Ne = Y[4]), {
                protocol: L,
                slashes: X || f(L),
                slashesCount: ge,
                rest: Ne
            }
        }

        function Oe(j, N) {
            if (j === "") return N;
            for (var Y = (N || "/").split("/").slice(0, -1).concat(j.split("/")), L = Y.length, X = Y[L - 1], pe = !1, ge = 0; L--;) Y[L] === "." ? Y.splice(L, 1) : Y[L] === ".." ? (Y.splice(L, 1), ge++) : ge && (L === 0 && (pe = !0), Y.splice(L, 1), ge--);
            return pe && Y.unshift(""), (X === "." || X === "..") && Y.push(""), Y.join("/")
        }

        function Pe(j, N, Y) {
            if (j = W(j), !(this instanceof Pe)) return new Pe(j, N, Y);
            var L, X, pe, ge, Ne, Ve, pt = oe.slice(),
                jt = typeof N,
                Ye = this,
                In = 0;
            for (jt !== "object" && jt !== "string" && (Y = N, N = null), Y && typeof Y != "function" && (Y = q.parse), N = ye(N), X = _e(j || "", N), L = !X.protocol && !X.slashes, Ye.slashes = X.slashes || L && N.slashes, Ye.protocol = X.protocol || N.protocol || "", j = X.rest, (Ye.protocol === "file:" || !X.slashes && (X.protocol || X.slashesCount < 2 || !f(Ye.protocol))) && (pt[3] = [/(.*)/, "pathname"]); In < pt.length; In++) {
                if (ge = pt[In], typeof ge == "function") {
                    j = ge(j, Ye);
                    continue
                }
                pe = ge[0], Ve = ge[1], pe !== pe ? Ye[Ve] = j : typeof pe == "string" ? ~(Ne = j.indexOf(pe)) && (typeof ge[2] == "number" ? (Ye[Ve] = j.slice(0, Ne), j = j.slice(Ne + ge[2])) : (Ye[Ve] = j.slice(Ne), j = j.slice(0, Ne))) : (Ne = pe.exec(j)) && (Ye[Ve] = Ne[1], j = j.slice(0, Ne.index)), Ye[Ve] = Ye[Ve] || L && ge[3] && N[Ve] || "", ge[4] && (Ye[Ve] = Ye[Ve].toLowerCase())
            }
            Y && (Ye.query = Y(Ye.query)), L && N.slashes && Ye.pathname.charAt(0) !== "/" && (Ye.pathname !== "" || N.pathname !== "") && (Ye.pathname = Oe(Ye.pathname, N.pathname)), Ye.pathname.charAt(0) !== "/" && f(Ye.protocol) && (Ye.pathname = "/" + Ye.pathname), a(Ye.port, Ye.protocol) || (Ye.host = Ye.hostname, Ye.port = ""), Ye.username = Ye.password = "", Ye.auth && (ge = Ye.auth.split(":"), Ye.username = ge[0] || "", Ye.password = ge[1] || ""), Ye.origin = Ye.protocol !== "file:" && f(Ye.protocol) && Ye.host ? Ye.protocol + "//" + Ye.host : "null", Ye.href = Ye.toString()
        }

        function lt(j, N, Y) {
            var L = this;
            switch (j) {
                case "query":
                    typeof N == "string" && N.length && (N = (Y || q.parse)(N)), L[j] = N;
                    break;
                case "port":
                    L[j] = N, a(N, L.protocol) ? N && (L.host = L.hostname + ":" + N) : (L.host = L.hostname, L[j] = "");
                    break;
                case "hostname":
                    L[j] = N, L.port && (N += ":" + L.port), L.host = N;
                    break;
                case "host":
                    L[j] = N, /:\d+$/.test(N) ? (N = N.split(":"), L.port = N.pop(), L.hostname = N.join(":")) : (L.hostname = N, L.port = "");
                    break;
                case "protocol":
                    L.protocol = N.toLowerCase(), L.slashes = !Y;
                    break;
                case "pathname":
                case "hash":
                    if (N) {
                        var X = j === "pathname" ? "/" : "#";
                        L[j] = N.charAt(0) !== X ? X + N : N
                    } else L[j] = N;
                    break;
                default:
                    L[j] = N
            }
            for (var pe = 0; pe < oe.length; pe++) {
                var ge = oe[pe];
                ge[4] && (L[ge[1]] = L[ge[1]].toLowerCase())
            }
            return L.origin = L.protocol !== "file:" && f(L.protocol) && L.host ? L.protocol + "//" + L.host : "null", L.href = L.toString(), L
        }

        function $e(j) {
            (!j || typeof j != "function") && (j = q.stringify);
            var N, Y = this,
                L = Y.protocol;
            L && L.charAt(L.length - 1) !== ":" && (L += ":");
            var X = L + (Y.slashes || f(Y.protocol) ? "//" : "");
            return Y.username && (X += Y.username, Y.password && (X += ":" + Y.password), X += "@"), X += Y.host + Y.pathname, N = typeof Y.query == "object" ? j(Y.query) : Y.query, N && (X += N.charAt(0) !== "?" ? "?" + N : N), Y.hash && (X += Y.hash), X
        }
        Pe.prototype = {
            set: lt,
            toString: $e
        }, Pe.extractProtocol = _e, Pe.location = ye, Pe.trimLeft = W, Pe.qs = q;
        var Z = Pe;

        function Fe(j, N) {
            setTimeout(function(Y) {
                return j.call(Y)
            }, 4, N)
        }

        function U(j, N) {
            typeof process < "u" && console[j].call(null, N)
        }

        function le(j, N) {
            j === void 0 && (j = []);
            var Y = [];
            return j.forEach(function(L) {
                N(L) || Y.push(L)
            }), Y
        }

        function Ae(j, N) {
            j === void 0 && (j = []);
            var Y = [];
            return j.forEach(function(L) {
                N(L) && Y.push(L)
            }), Y
        }
        var be = function() {
            this.listeners = {}
        };
        be.prototype.addEventListener = function(N, Y) {
            typeof Y == "function" && (Array.isArray(this.listeners[N]) || (this.listeners[N] = []), Ae(this.listeners[N], function(L) {
                return L === Y
            }).length === 0 && this.listeners[N].push(Y))
        }, be.prototype.removeEventListener = function(N, Y) {
            var L = this.listeners[N];
            this.listeners[N] = le(L, function(X) {
                return X === Y
            })
        }, be.prototype.dispatchEvent = function(N) {
            for (var Y = this, L = [], X = arguments.length - 1; X-- > 0;) L[X] = arguments[X + 1];
            var pe = N.type,
                ge = this.listeners[pe];
            return Array.isArray(ge) ? (ge.forEach(function(Ne) {
                L.length > 0 ? Ne.apply(Y, L) : Ne.call(Y, N)
            }), !0) : !1
        };

        function we(j) {
            var N = j.indexOf("?");
            return N >= 0 ? j.slice(0, N) : j
        }
        var he = function() {
            this.urlMap = {}
        };
        he.prototype.attachWebSocket = function(N, Y) {
            var L = we(Y),
                X = this.urlMap[L];
            if (X && X.server && X.websockets.indexOf(N) === -1) return X.websockets.push(N), X.server
        }, he.prototype.addMembershipToRoom = function(N, Y) {
            var L = this.urlMap[we(N.url)];
            L && L.server && L.websockets.indexOf(N) !== -1 && (L.roomMemberships[Y] || (L.roomMemberships[Y] = []), L.roomMemberships[Y].push(N))
        }, he.prototype.attachServer = function(N, Y) {
            var L = we(Y),
                X = this.urlMap[L];
            if (!X) return this.urlMap[L] = {
                server: N,
                websockets: [],
                roomMemberships: {}
            }, N
        }, he.prototype.serverLookup = function(N) {
            var Y = we(N),
                L = this.urlMap[Y];
            if (L) return L.server
        }, he.prototype.websocketsLookup = function(N, Y, L) {
            var X = we(N),
                pe, ge = this.urlMap[X];
            if (pe = ge ? ge.websockets : [], Y) {
                var Ne = ge.roomMemberships[Y];
                pe = Ne || []
            }
            return L ? pe.filter(function(Ve) {
                return Ve !== L
            }) : pe
        }, he.prototype.removeServer = function(N) {
            delete this.urlMap[we(N)]
        }, he.prototype.removeWebSocket = function(N, Y) {
            var L = we(Y),
                X = this.urlMap[L];
            X && (X.websockets = le(X.websockets, function(pe) {
                return pe === N
            }))
        }, he.prototype.removeMembershipFromRoom = function(N, Y) {
            var L = this.urlMap[we(N.url)],
                X = L.roomMemberships[Y];
            L && X !== null && (L.roomMemberships[Y] = le(X, function(pe) {
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
        Ke.prototype.stopPropagation = function() {}, Ke.prototype.stopImmediatePropagation = function() {}, Ke.prototype.initEvent = function(N, Y, L) {
            N === void 0 && (N = "undefined"), Y === void 0 && (Y = !1), L === void 0 && (L = !1), this.type = "" + N, this.bubbles = Boolean(Y), this.cancelable = Boolean(L)
        };
        var dt = function(j) {
                function N(Y, L) {
                    if (L === void 0 && (L = {}), j.call(this), !Y) throw new TypeError(Be.EVENT_ERROR + " 1 argument required, but only 0 present.");
                    if (typeof L != "object") throw new TypeError(Be.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                    var X = L.bubbles,
                        pe = L.cancelable;
                    this.type = "" + Y, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.cancelBubble = !1, this.bubbles = X ? Boolean(X) : !1
                }
                return j && (N.__proto__ = j), N.prototype = Object.create(j && j.prototype), N.prototype.constructor = N, N
            }(Ke),
            $t = function(j) {
                function N(Y, L) {
                    if (L === void 0 && (L = {}), j.call(this), !Y) throw new TypeError(Be.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                    if (typeof L != "object") throw new TypeError(Be.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                    var X = L.bubbles,
                        pe = L.cancelable,
                        ge = L.data,
                        Ne = L.origin,
                        Ve = L.lastEventId,
                        pt = L.ports;
                    this.type = "" + Y, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.canncelBubble = !1, this.bubbles = X ? Boolean(X) : !1, this.origin = "" + Ne, this.ports = typeof pt > "u" ? null : pt, this.data = typeof ge > "u" ? null : ge, this.lastEventId = "" + (Ve || "")
                }
                return j && (N.__proto__ = j), N.prototype = Object.create(j && j.prototype), N.prototype.constructor = N, N
            }(Ke),
            Ut = function(j) {
                function N(Y, L) {
                    if (L === void 0 && (L = {}), j.call(this), !Y) throw new TypeError(Be.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                    if (typeof L != "object") throw new TypeError(Be.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                    var X = L.bubbles,
                        pe = L.cancelable,
                        ge = L.code,
                        Ne = L.reason,
                        Ve = L.wasClean;
                    this.type = "" + Y, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.cancelBubble = !1, this.bubbles = X ? Boolean(X) : !1, this.code = typeof ge == "number" ? parseInt(ge, 10) : 0, this.reason = "" + (Ne || ""), this.wasClean = Ve ? Boolean(Ve) : !1
                }
                return j && (N.__proto__ = j), N.prototype = Object.create(j && j.prototype), N.prototype.constructor = N, N
            }(Ke);

        function _(j) {
            var N = j.type,
                Y = j.target,
                L = new dt(N);
            return Y && (L.target = Y, L.srcElement = Y, L.currentTarget = Y), L
        }

        function l(j) {
            var N = j.type,
                Y = j.origin,
                L = j.data,
                X = j.target,
                pe = new $t(N, {
                    data: L,
                    origin: Y
                });
            return X && (pe.target = X, pe.srcElement = X, pe.currentTarget = X), pe
        }

        function m(j) {
            var N = j.code,
                Y = j.reason,
                L = j.type,
                X = j.target,
                pe = j.wasClean;
            pe || (pe = N === Te.CLOSE_NORMAL || N === Te.CLOSE_NO_STATUS);
            var ge = new Ut(L, {
                code: N,
                reason: Y,
                wasClean: pe
            });
            return X && (ge.target = X, ge.srcElement = X, ge.currentTarget = X), ge
        }

        function S(j, N, Y) {
            j.readyState = Me.CLOSING;
            var L = Se.serverLookup(j.url),
                X = m({
                    type: "close",
                    target: j.target,
                    code: N,
                    reason: Y
                }),
                pe = m({
                    type: "server::close",
                    target: j,
                    code: N,
                    reason: Y
                });
            Fe(function() {
                Se.removeWebSocket(j, j.url), j.readyState = Me.CLOSED, j.dispatchEvent(X), j.dispatchEvent(pe), L && L.dispatchEvent(X, L)
            }, j)
        }

        function R(j, N, Y) {
            j.readyState = Me.CLOSING;
            var L = Se.serverLookup(j.url),
                X = m({
                    type: "close",
                    target: j.target,
                    code: N,
                    reason: Y,
                    wasClean: !1
                }),
                pe = m({
                    type: "server::close",
                    target: j,
                    code: N,
                    reason: Y,
                    wasClean: !1
                }),
                ge = _({
                    type: "error",
                    target: j.target
                });
            Fe(function() {
                Se.removeWebSocket(j, j.url), j.readyState = Me.CLOSED, j.dispatchEvent(ge), j.dispatchEvent(X), j.dispatchEvent(pe), L && L.dispatchEvent(X, L)
            }, j)
        }

        function P(j) {
            return Object.prototype.toString.call(j) !== "[object Blob]" && !(j instanceof ArrayBuffer) && (j = String(j)), j
        }
        var $ = new WeakMap;

        function ie(j) {
            if ($.has(j)) return $.get(j);
            var N = new Proxy(j, {
                get: function(L, X) {
                    return X === "close" ? function(ge) {
                        ge === void 0 && (ge = {});
                        var Ne = ge.code || Te.CLOSE_NORMAL,
                            Ve = ge.reason || "";
                        S(N, Ne, Ve)
                    } : X === "send" ? function(ge) {
                        ge = P(ge), j.dispatchEvent(l({
                            type: "message",
                            data: ge,
                            origin: this.url,
                            target: j
                        }))
                    } : X === "on" ? function(ge, Ne) {
                        j.addEventListener("server::" + ge, Ne)
                    } : X === "target" ? j : L[X]
                }
            });
            return $.set(j, N), N
        }

        function ke(j) {
            var N = encodeURIComponent(j).match(/%[89ABab]/g);
            return j.length + (N ? N.length : 0)
        }

        function de(j) {
            var N = new Z(j),
                Y = N.pathname,
                L = N.protocol,
                X = N.hash;
            if (!j) throw new TypeError(Be.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
            if (Y || (N.pathname = "/"), L === "") throw new SyntaxError(Be.CONSTRUCTOR_ERROR + " The URL '" + N.toString() + "' is invalid.");
            if (L !== "ws:" && L !== "wss:") throw new SyntaxError(Be.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + L + "' is not allowed.");
            if (X !== "") throw new SyntaxError(Be.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + X + "'). Fragment identifiers are not allowed in WebSocket URLs.");
            return N.toString()
        }

        function De(j) {
            if (j === void 0 && (j = []), !Array.isArray(j) && typeof j != "string") throw new SyntaxError(Be.CONSTRUCTOR_ERROR + " The subprotocol '" + j.toString() + "' is invalid.");
            typeof j == "string" && (j = [j]);
            var N = j.map(function(L) {
                    return {
                        count: 1,
                        protocol: L
                    }
                }).reduce(function(L, X) {
                    return L[X.protocol] = (L[X.protocol] || 0) + X.count, L
                }, {}),
                Y = Object.keys(N).filter(function(L) {
                    return N[L] > 1
                });
            if (Y.length > 0) throw new SyntaxError(Be.CONSTRUCTOR_ERROR + " The subprotocol '" + Y[0] + "' is duplicated.");
            return j
        }
        var Me = function(j) {
            function N(L, X) {
                j.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = de(L), X = De(X), this.protocol = X[0] || "", this.binaryType = "blob", this.readyState = N.CONNECTING;
                var pe = ie(this),
                    ge = Se.attachWebSocket(pe, this.url);
                Fe(function() {
                    if (ge)
                        if (ge.options.verifyClient && typeof ge.options.verifyClient == "function" && !ge.options.verifyClient()) this.readyState = N.CLOSED, U("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), Se.removeWebSocket(pe, this.url), this.dispatchEvent(_({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(m({
                            type: "close",
                            target: this,
                            code: Te.CLOSE_NORMAL
                        }));
                        else {
                            if (ge.options.selectProtocol && typeof ge.options.selectProtocol == "function") {
                                var Ve = ge.options.selectProtocol(X),
                                    pt = Ve !== "",
                                    jt = X.indexOf(Ve) !== -1;
                                if (pt && !jt) {
                                    this.readyState = N.CLOSED, U("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), Se.removeWebSocket(pe, this.url), this.dispatchEvent(_({
                                        type: "error",
                                        target: this
                                    })), this.dispatchEvent(m({
                                        type: "close",
                                        target: this,
                                        code: Te.CLOSE_NORMAL
                                    }));
                                    return
                                }
                                this.protocol = Ve
                            }
                            this.readyState = N.OPEN, this.dispatchEvent(_({
                                type: "open",
                                target: this
                            })), ge.dispatchEvent(_({
                                type: "connection"
                            }), pe)
                        }
                    else this.readyState = N.CLOSED, this.dispatchEvent(_({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(m({
                        type: "close",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    })), U("error", "WebSocket connection to '" + this.url + "' failed")
                }, this)
            }
            j && (N.__proto__ = j), N.prototype = Object.create(j && j.prototype), N.prototype.constructor = N;
            var Y = {
                onopen: {},
                onmessage: {},
                onclose: {},
                onerror: {}
            };
            return Y.onopen.get = function() {
                return this._onopen
            }, Y.onmessage.get = function() {
                return this._onmessage
            }, Y.onclose.get = function() {
                return this._onclose
            }, Y.onerror.get = function() {
                return this._onerror
            }, Y.onopen.set = function(L) {
                this.removeEventListener("open", this._onopen), this._onopen = L, this.addEventListener("open", L)
            }, Y.onmessage.set = function(L) {
                this.removeEventListener("message", this._onmessage), this._onmessage = L, this.addEventListener("message", L)
            }, Y.onclose.set = function(L) {
                this.removeEventListener("close", this._onclose), this._onclose = L, this.addEventListener("close", L)
            }, Y.onerror.set = function(L) {
                this.removeEventListener("error", this._onerror), this._onerror = L, this.addEventListener("error", L)
            }, N.prototype.send = function(X) {
                var pe = this;
                if (this.readyState === N.CLOSING || this.readyState === N.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                var ge = l({
                        type: "server::message",
                        origin: this.url,
                        data: P(X)
                    }),
                    Ne = Se.serverLookup(this.url);
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
                    this.readyState === N.CONNECTING ? R(Ne, X || Te.CLOSE_ABNORMAL, pe) : S(Ne, X || Te.CLOSE_NO_STATUS, pe)
                }
            }, Object.defineProperties(N.prototype, Y), N
        }(be);
        Me.CONNECTING = 0, Me.prototype.CONNECTING = Me.CONNECTING, Me.OPEN = 1, Me.prototype.OPEN = Me.OPEN, Me.CLOSING = 2, Me.prototype.CLOSING = Me.CLOSING, Me.CLOSED = 3, Me.prototype.CLOSED = Me.CLOSED;
        var nt = function(j) {
            return j.reduce(function(N, Y) {
                return N.indexOf(Y) > -1 ? N : N.concat(Y)
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
                function N(Y, L) {
                    L === void 0 && (L = rn), j.call(this);
                    var X = new Z(Y);
                    X.pathname || (X.pathname = "/"), this.url = X.toString(), this.originalWebSocket = null;
                    var pe = Se.attachServer(this, this.url);
                    if (!pe) throw this.dispatchEvent(_({
                        type: "error"
                    })), new Error("A mock server is already listening on this url");
                    this.options = Object.assign({}, rn, L), this.options.mock && this.mockWebsocket()
                }
                return j && (N.__proto__ = j), N.prototype = Object.create(j && j.prototype), N.prototype.constructor = N, N.prototype.mockWebsocket = function() {
                    var L = Ct();
                    this.originalWebSocket = L.WebSocket, L.WebSocket = Me
                }, N.prototype.restoreWebsocket = function() {
                    var L = Ct();
                    this.originalWebSocket !== null && (L.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                }, N.prototype.stop = function(L) {
                    L === void 0 && (L = function() {}), this.options.mock && this.restoreWebsocket(), Se.removeServer(this.url), typeof L == "function" && L()
                }, N.prototype.on = function(L, X) {
                    this.addEventListener(L, X)
                }, N.prototype.close = function(L) {
                    L === void 0 && (L = {});
                    var X = L.code,
                        pe = L.reason,
                        ge = L.wasClean,
                        Ne = Se.websocketsLookup(this.url);
                    Se.removeServer(this.url), Ne.forEach(function(Ve) {
                        Ve.readyState = Me.CLOSED, Ve.dispatchEvent(m({
                            type: "close",
                            target: Ve.target,
                            code: X || Te.CLOSE_NORMAL,
                            reason: pe || "",
                            wasClean: ge
                        }))
                    }), this.dispatchEvent(m({
                        type: "close"
                    }), this)
                }, N.prototype.emit = function(L, X, pe) {
                    var ge = this;
                    pe === void 0 && (pe = {});
                    var Ne = pe.websockets;
                    Ne || (Ne = Se.websocketsLookup(this.url)), typeof pe != "object" || arguments.length > 3 ? (X = Array.prototype.slice.call(arguments, 1, arguments.length), X = X.map(function(Ve) {
                        return P(Ve)
                    })) : X = P(X), Ne.forEach(function(Ve) {
                        Array.isArray(X) ? Ve.dispatchEvent.apply(Ve, [l({
                            type: L,
                            data: X,
                            origin: ge.url,
                            target: Ve.target
                        })].concat(X)) : Ve.dispatchEvent(l({
                            type: L,
                            data: X,
                            origin: ge.url,
                            target: Ve.target
                        }))
                    })
                }, N.prototype.clients = function() {
                    return Se.websocketsLookup(this.url)
                }, N.prototype.to = function(L, X, pe) {
                    var ge = this;
                    pe === void 0 && (pe = []);
                    var Ne = this,
                        Ve = nt(pe.concat(Se.websocketsLookup(this.url, L, X)));
                    return {
                        to: function(pt, jt) {
                            return ge.to.call(ge, pt, jt, Ve)
                        },
                        emit: function(jt, Ye) {
                            Ne.emit(jt, Ye, {
                                websockets: Ve
                            })
                        }
                    }
                }, N.prototype.in = function() {
                    for (var L = [], X = arguments.length; X--;) L[X] = arguments[X];
                    return this.to.apply(null, L)
                }, N.prototype.simulate = function(L) {
                    var X = Se.websocketsLookup(this.url);
                    L === "error" && X.forEach(function(pe) {
                        pe.readyState = Me.CLOSED, pe.dispatchEvent(_({
                            type: "error"
                        }))
                    })
                }, N
            }(be);
        ct.of = function(N) {
            return new ct(N)
        };
        var yt = function(j) {
            function N(L, X) {
                var pe = this;
                L === void 0 && (L = "socket.io"), X === void 0 && (X = ""), j.call(this), this.binaryType = "blob";
                var ge = new Z(L);
                ge.pathname || (ge.pathname = "/"), this.url = ge.toString(), this.readyState = N.CONNECTING, this.protocol = "", this.target = this, typeof X == "string" || typeof X == "object" && X !== null ? this.protocol = X : Array.isArray(X) && X.length > 0 && (this.protocol = X[0]);
                var Ne = Se.attachWebSocket(this, this.url);
                Fe(function() {
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
                    })), this.dispatchEvent(m({
                        type: "close",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    })), U("error", "Socket.io connection to '" + this.url + "' failed"))
                }, this), this.addEventListener("close", function(Ve) {
                    pe.dispatchEvent(m({
                        type: "disconnect",
                        target: Ve.target,
                        code: Ve.code
                    }))
                })
            }
            j && (N.__proto__ = j), N.prototype = Object.create(j && j.prototype), N.prototype.constructor = N;
            var Y = {
                broadcast: {}
            };
            return N.prototype.close = function() {
                if (this.readyState === N.OPEN) {
                    var X = Se.serverLookup(this.url);
                    return Se.removeWebSocket(this, this.url), this.readyState = N.CLOSED, this.dispatchEvent(m({
                        type: "close",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    })), X && X.dispatchEvent(m({
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
                    Ve = Se.serverLookup(this.url);
                return Ve && Ve.dispatchEvent.apply(Ve, [Ne].concat(pe)), this
            }, N.prototype.send = function(X) {
                return this.emit("message", X), this
            }, Y.broadcast.get = function() {
                if (this.readyState !== N.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var L = this,
                    X = Se.serverLookup(this.url);
                if (!X) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                return {
                    emit: function(ge, Ne) {
                        return X.emit(ge, Ne, {
                            websockets: Se.websocketsLookup(L.url, null, L)
                        }), L
                    },
                    to: function(ge) {
                        return X.to(ge, L)
                    },
                    in: function(ge) {
                        return X.in(ge, L)
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
                Se.addMembershipToRoom(this, X)
            }, N.prototype.leave = function(X) {
                Se.removeMembershipFromRoom(this, X)
            }, N.prototype.to = function(X) {
                return this.broadcast.to(X)
            }, N.prototype.in = function() {
                return this.to.apply(null, arguments)
            }, N.prototype.dispatchEvent = function(X) {
                for (var pe = this, ge = [], Ne = arguments.length - 1; Ne-- > 0;) ge[Ne] = arguments[Ne + 1];
                var Ve = X.type,
                    pt = this.listeners[Ve];
                if (!Array.isArray(pt)) return !1;
                pt.forEach(function(jt) {
                    ge.length > 0 ? jt.apply(pe, ge) : jt.call(pe, X.data ? X.data : X)
                })
            }, Object.defineProperties(N.prototype, Y), N
        }(be);
        yt.CONNECTING = 0, yt.OPEN = 1, yt.CLOSING = 2, yt.CLOSED = 3;
        var bt = function(N, Y) {
            return new yt(N, Y)
        };
        bt.connect = function(N, Y) {
            return bt(N, Y)
        };
        var Kt = ct,
            Je = Me,
            Lt = bt;
        n.Server = Kt, n.WebSocket = Je, n.SocketIO = Lt, Object.defineProperty(n, "__esModule", {
            value: !0
        })
    })
})(ic, ic.exports);
var iC = {
    exports: {}
};
(function(t) {
    (function() {
        function e(E, k) {
            var A = E.x - k.x,
                D = E.y - k.y;
            return A * A + D * D
        }

        function n(E, k, A) {
            var D = k.x,
                V = k.y,
                J = A.x - D,
                q = A.y - V;
            if (J !== 0 || q !== 0) {
                var G = ((E.x - D) * J + (E.y - V) * q) / (J * J + q * q);
                G > 1 ? (D = A.x, V = A.y) : G > 0 && (D += J * G, V += q * G)
            }
            return J = E.x - D, q = E.y - V, J * J + q * q
        }

        function i(E, k) {
            for (var A = E[0], D = [A], V, J = 1, q = E.length; J < q; J++) V = E[J], e(V, A) > k && (D.push(V), A = V);
            return A !== V && D.push(V), D
        }

        function a(E, k, A, D, V) {
            for (var J = D, q, G = k + 1; G < A; G++) {
                var Q = n(E[G], E[k], E[A]);
                Q > J && (q = G, J = Q)
            }
            J > D && (q - k > 1 && a(E, k, q, D, V), V.push(E[q]), A - q > 1 && a(E, q, A, D, V))
        }

        function d(E, k) {
            var A = E.length - 1,
                D = [E[0]];
            return a(E, 0, A, k, D), D.push(E[A]), D
        }

        function g(E, k, A) {
            if (E.length <= 2) return E;
            var D = k !== void 0 ? k * k : 1;
            return E = A ? E : i(E, D), E = d(E, D), E
        }
        t.exports = g, t.exports.default = g
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
                BASE_URL: "https://bundles.jackbox.tv/main/pp3-triviadeath/",
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
        e(Ni.exports, ot, t)
    })(function(e, n, i) {
        n.Stickit = i, i._handlers = [], i.addHandler = function(v) {
            v = e.map(e.flatten([v]), function(M) {
                return e.defaults({}, M, {
                    updateModel: !0,
                    updateView: !0,
                    updateMethod: "text"
                })
            }), this._handlers = this._handlers.concat(v)
        }, i.ViewMixin = {
            _modelBindings: null,
            unstickit: function(v, M) {
                if (e.isObject(M)) {
                    e.each(M, function(ae, ye) {
                        this.unstickit(v, ye)
                    }, this);
                    return
                }
                var W = [],
                    oe = [];
                this._modelBindings = e.reject(this._modelBindings, function(ae) {
                    if (!(v && ae.model !== v) && !(M && ae.config.selector != M)) return ae.model.off(ae.event, ae.fn), oe.push(ae.config._destroy), W.push(ae.model), !0
                }), e.invoke(e.uniq(W), "trigger", "stickit:unstuck", this.cid), e.each(e.uniq(oe), function(ae) {
                    ae.call(this)
                }, this), this.$el.off(".stickit" + (v ? "." + v.cid : ""), M)
            },
            stickit: function(v, M) {
                var W = v || this.model,
                    oe = M || e.result(this, "bindings") || {};
                this._modelBindings || (this._modelBindings = []), this.addBinding(W, oe);
                var ae = this.remove;
                return ae.stickitWrapped || (this.remove = function() {
                    var ye = this;
                    return this.unstickit(), ae && (ye = ae.apply(this, arguments)), ye
                }), this.remove.stickitWrapped = !0, this
            },
            addBinding: function(v, M, W) {
                var oe = v || this.model,
                    ae = ".stickit." + oe.cid;
                if (W = W || {}, e.isObject(M)) {
                    var ye = M;
                    e.each(ye, function(Z, Fe) {
                        this.addBinding(oe, Fe, Z)
                    }, this);
                    return
                }
                var f = M === ":el" ? this.$el : this.$(M);
                if (this.unstickit(oe, M), !!f.length) {
                    e.isString(W) && (W = {
                        observe: W
                    }), e.isFunction(W.observe) && (W.observe = W.observe.call(this));
                    var _e = V(f, W),
                        Oe = _e.observe;
                    _e.selector = M, _e.view = this;
                    var Pe = _e.bindId = e.uniqueId(),
                        lt = e.extend({
                            stickitChange: _e
                        }, _e.setOptions);
                    if (_e._destroy = function() {
                            g.call(this, _e.destroy, f, oe, _e)
                        }, J(f, _e, oe, Oe), G(f, _e, oe, Oe), q(f, _e, oe), Oe) {
                        e.each(_e.events, function(Z) {
                            var Fe = Z + ae,
                                U = function(Ae) {
                                    var be = g.call(this, _e.getVal, f, Ae, _e, a.call(arguments, 1)),
                                        we = E(_e.updateModel, be, Ae, _e);
                                    we && A(oe, Oe, be, lt, _e)
                                },
                                le = M === ":el" ? "" : M;
                            this.$el.on(Fe, le, e.bind(U, this))
                        }, this), e.each(e.flatten([Oe]), function(Z) {
                            k(oe, "change:" + Z, _e, function(Fe, U, le) {
                                var Ae = le && le.stickitChange && le.stickitChange.bindId;
                                if (Ae !== Pe) {
                                    var be = D(oe, Oe, _e);
                                    Q(f, _e, be, oe)
                                }
                            })
                        });
                        var $e = D(oe, Oe, _e);
                        Q(f, _e, $e, oe, !0)
                    }
                    g.call(this, _e.initialize, f, oe, _e)
                }
            }
        }, e.extend(n.View.prototype, i.ViewMixin);
        var a = [].slice,
            d = function(v, M) {
                var W = (M || "").split("."),
                    oe = e.reduce(W, function(ae, ye) {
                        return ae[ye]
                    }, v);
                return oe == null ? v : oe
            },
            g = function(v) {
                if (v = e.isString(v) ? d(this, v) : v, v) return v.apply(this, a.call(arguments, 1))
            },
            E = function(v, M, W) {
                if (e.isBoolean(v)) return v;
                if (e.isFunction(v) || e.isString(v)) {
                    var oe = e.last(arguments).view;
                    return g.apply(oe, arguments)
                }
                return !1
            },
            k = function(v, M, W, oe) {
                var ae = W.view;
                v.on(M, oe, ae), ae._modelBindings.push({
                    model: v,
                    event: M,
                    fn: oe,
                    config: W
                })
            },
            A = function(v, M, W, oe, ae) {
                var ye = {},
                    f = ae.view;
                ae.onSet && (W = g.call(f, ae.onSet, W, ae)), ae.set ? g.call(f, ae.set, M, W, oe, ae) : (ye[M] = W, e.isArray(M) && e.isArray(W) && (ye = e.reduce(M, function(_e, Oe, Pe) {
                    return _e[Oe] = e.has(W, Pe) ? W[Pe] : null, _e
                }, {})), v.set(ye, oe))
            },
            D = function(v, M, W) {
                var oe = W.view,
                    ae = function(_e) {
                        return v[W.escape ? "escape" : "get"](_e)
                    },
                    ye = function(_e) {
                        return _e == null ? "" : _e
                    },
                    f = e.isArray(M) ? e.map(M, ae) : ae(M);
                return W.onGet && (f = g.call(oe, W.onGet, f, W)), e.isArray(f) ? e.map(f, ye) : ye(f)
            },
            V = i.getConfiguration = function(v, M) {
                var W = [{
                    updateModel: !1,
                    updateMethod: "text",
                    update: function(ae, ye, f, _e) {
                        ae[_e.updateMethod] && ae[_e.updateMethod](ye)
                    },
                    getVal: function(ae, ye, f) {
                        return ae[f.updateMethod]()
                    }
                }];
                W = W.concat(e.filter(i._handlers, function(ae) {
                    return v.is(ae.selector)
                })), W.push(M);
                var oe = e.extend.apply(e, W);
                return e.has(oe, "updateView") || (oe.updateView = !oe.visible), oe
            },
            J = function(v, M, W, oe) {
                var ae = ["autofocus", "autoplay", "async", "checked", "controls", "defer", "disabled", "hidden", "indeterminate", "loop", "multiple", "open", "readonly", "required", "scoped", "selected"],
                    ye = M.view;
                e.each(M.attributes || [], function(f) {
                    f = e.clone(f), f.view = ye;
                    var _e = "",
                        Oe = f.observe || (f.observe = oe),
                        Pe = function() {
                            var lt = e.contains(ae, f.name) ? "prop" : "attr",
                                $e = D(W, Oe, f);
                            f.name === "class" ? (v.removeClass(_e).addClass($e), _e = $e) : v[lt](f.name, $e)
                        };
                    e.each(e.flatten([Oe]), function(lt) {
                        k(W, "change:" + lt, M, Pe)
                    }), Pe()
                })
            },
            q = function(v, M, W, oe) {
                e.each(M.classes || [], function(ae, ye) {
                    e.isString(ae) && (ae = {
                        observe: ae
                    }), ae.view = M.view;
                    var f = ae.observe,
                        _e = function() {
                            var Oe = D(W, f, ae);
                            v.toggleClass(ye, !!Oe)
                        };
                    e.each(e.flatten([f]), function(Oe) {
                        k(W, "change:" + Oe, M, _e)
                    }), _e()
                })
            },
            G = function(v, M, W, oe) {
                if (M.visible != null) {
                    var ae = M.view,
                        ye = function() {
                            var f = M.visible,
                                _e = M.visibleFn,
                                Oe = D(W, oe, M),
                                Pe = !!Oe;
                            (e.isFunction(f) || e.isString(f)) && (Pe = !!g.call(ae, f, Oe, M)), _e ? g.call(ae, _e, v, Pe, M) : v.toggle(Pe)
                        };
                    e.each(e.flatten([oe]), function(f) {
                        k(W, "change:" + f, M, ye)
                    }), ye()
                }
            },
            Q = function(v, M, W, oe, ae) {
                var ye = M.view;
                !E(M.updateView, W, M) || (g.call(ye, M.update, v, W, oe, M), ae || g.call(ye, M.afterUpdate, v, W, M))
            };
        return i.addHandler([{
            selector: "[contenteditable]",
            updateMethod: "html",
            events: ["input", "change"]
        }, {
            selector: "input",
            events: ["propertychange", "input", "change"],
            update: function(v, M) {
                v.val(M)
            },
            getVal: function(v) {
                return v.val()
            }
        }, {
            selector: "textarea",
            events: ["propertychange", "input", "change"],
            update: function(v, M) {
                v.val(M)
            },
            getVal: function(v) {
                return v.val()
            }
        }, {
            selector: 'input[type="radio"]',
            events: ["change"],
            update: function(v, M) {
                v.filter('[value="' + M + '"]').prop("checked", !0)
            },
            getVal: function(v) {
                return v.filter(":checked").val()
            }
        }, {
            selector: 'input[type="checkbox"]',
            events: ["change"],
            update: function(v, M, W, oe) {
                if (v.length > 1) M || (M = []), v.each(function(ye, f) {
                    var _e = n.$(f),
                        Oe = e.contains(M, _e.val());
                    _e.prop("checked", Oe)
                });
                else {
                    var ae = e.isBoolean(M) ? M : M === v.val();
                    v.prop("checked", ae)
                }
            },
            getVal: function(v) {
                var M;
                if (v.length > 1) M = e.reduce(v, function(oe, ae) {
                    var ye = n.$(ae);
                    return ye.prop("checked") && oe.push(ye.val()), oe
                }, []);
                else {
                    M = v.prop("checked");
                    var W = v.val();
                    W !== "on" && W != null && (M = M ? v.val() : null)
                }
                return M
            }
        }, {
            selector: "select",
            events: ["change"],
            update: function(v, M, W, oe) {
                var ae, ye = oe.selectOptions,
                    f = ye && ye.collection || void 0,
                    _e = v.prop("multiple");
                if (!ye) {
                    ye = {};
                    var Oe = function(he) {
                        return he.map(function(Se, Te) {
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
                        var Se = n.$(he).attr("label");
                        f.opt_labels.push(Se), f[Se] = Oe(n.$(he).find("option"))
                    })) : f = Oe(v.find("option"))
                }
                ye.valuePath = ye.valuePath || "value", ye.labelPath = ye.labelPath || "label", ye.disabledPath = ye.disabledPath || "disabled";
                var Pe = function(he, Se, Te) {
                    e.each(he, function(Be) {
                        var Ke = n.$("<option/>"),
                            dt = Be,
                            $t = function(S, R, P) {
                                Ke.text(S), dt = R, Ke.data("stickit-bind-val", dt), !e.isArray(dt) && !e.isObject(dt) && Ke.val(dt), P === !0 && Ke.prop("disabled", "disabled")
                            },
                            Ut, _, l;
                        Be === "__default__" ? (Ut = Te.label, _ = Te.value, l = Te.disabled) : (Ut = d(Be, ye.labelPath), _ = d(Be, ye.valuePath), l = d(Be, ye.disabledPath)), $t(Ut, _, l);
                        var m = function() {
                            return !_e && dt != null && Te != null && dt === Te ? !0 : !!(e.isObject(Te) && e.isEqual(dt, Te))
                        };
                        m() ? Ke.prop("selected", !0) : _e && e.isArray(Te) && e.each(Te, function(S) {
                            e.isObject(S) && (S = d(S, ye.valuePath)), (S === dt || e.isObject(S) && e.isEqual(dt, S)) && Ke.prop("selected", !0)
                        }), Se.append(Ke)
                    })
                };
                if (v.find("*").remove(), e.isString(f)) {
                    var lt = window;
                    f.indexOf("this.") === 0 && (lt = this), f = f.replace(/^[a-z]*\.(.+)$/, "$1"), ae = d(lt, f)
                } else e.isFunction(f) ? ae = g.call(this, f, v, oe) : ae = f;
                if (ae instanceof n.Collection) {
                    var $e = ae,
                        Z = function() {
                            var he = D(W, oe.observe, oe);
                            g.call(this, oe.update, v, he, W, oe)
                        },
                        Fe = function() {
                            $e.off("add remove reset sort", Z)
                        },
                        U = function() {
                            Fe(), $e.off("stickit:selectRefresh"), W.off("stickit:selectRefresh")
                        };
                    $e.trigger("stickit:selectRefresh"), $e.once("stickit:selectRefresh", Fe, this), $e.on("add remove reset sort", Z, this), W.trigger("stickit:selectRefresh"), W.once("stickit:selectRefresh", function() {
                        W.off("stickit:unstuck", U)
                    }), W.once("stickit:unstuck", U, this), ae = ae.toJSON()
                }
                if (ye.defaultOption) {
                    var le = e.isFunction(ye.defaultOption) ? ye.defaultOption.call(this, v, oe) : ye.defaultOption;
                    Pe(["__default__"], v, le)
                }
                if (e.isArray(ae)) Pe(ae, v, M);
                else if (ae.opt_labels) e.each(ae.opt_labels, function(he) {
                    var Se = n.$("<optgroup/>").attr("label", he);
                    Pe(ae[he], Se, M), v.append(Se)
                });
                else {
                    var Ae = [],
                        be;
                    for (var we in ae) be = {}, be[ye.valuePath] = we, be[ye.labelPath] = ae[we], Ae.push(be);
                    Ae = e.sortBy(Ae, ye.comparator || ye.labelPath), Pe(Ae, v, M)
                }
            },
            getVal: function(v) {
                var M = v.find("option:selected");
                return v.prop("multiple") ? e.map(M, function(W) {
                    return n.$(W).data("stickit-bind-val")
                }) : M.data("stickit-bind-val")
            }
        }]), i
    })
})(sC);
const oC = `<button type="button" class='button choice-button btn btn-lg'></button>
<button data-action='censor' class='button censor-button btn btn-lg'></button>`,
    Wu = Et.View.extend({
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
    qu = function(t) {
        return new Event(t, {
            bubbles: !0
        })
    };
try {
    new Event("test")
} catch {
    qu = function(e) {
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
                    g = null,
                    E = null,
                    k = function() {
                        i.clientWidth !== g && J()
                    },
                    A = function(q) {
                        window.removeEventListener("resize", k, !1), i.removeEventListener("input", J, !1), i.removeEventListener("keyup", J, !1), i.removeEventListener("autosize:destroy", A, !1), i.removeEventListener("autosize:update", J, !1), Object.keys(q).forEach(function(G) {
                            i.style[G] = q[G]
                        }), rs.delete(i)
                    }.bind(i, {
                        height: i.style.height,
                        resize: i.style.resize,
                        overflowY: i.style.overflowY,
                        overflowX: i.style.overflowX,
                        wordWrap: i.style.wordWrap
                    });
                i.addEventListener("autosize:destroy", A, !1), "onpropertychange" in i && "oninput" in i && i.addEventListener("keyup", J, !1), window.addEventListener("resize", k, !1), i.addEventListener("input", J, !1), i.addEventListener("autosize:update", J, !1), i.style.overflowX = "hidden", i.style.wordWrap = "break-word", rs.set(i, {
                    destroy: A,
                    update: J
                }), (a = window.getComputedStyle(i, null)).resize === "vertical" ? i.style.resize = "none" : a.resize === "both" && (i.style.resize = "horizontal"), d = a.boxSizing === "content-box" ? -(parseFloat(a.paddingTop) + parseFloat(a.paddingBottom)) : parseFloat(a.borderTopWidth) + parseFloat(a.borderBottomWidth), isNaN(d) && (d = 0), J()
            }

            function D(q) {
                var G = i.style.width;
                i.style.width = "0px", i.style.width = G, i.style.overflowY = q
            }

            function V() {
                if (i.scrollHeight !== 0) {
                    var q = function(Q) {
                            for (var v = []; Q && Q.parentNode && Q.parentNode instanceof Element;) Q.parentNode.scrollTop && v.push({
                                node: Q.parentNode,
                                scrollTop: Q.parentNode.scrollTop
                            }), Q = Q.parentNode;
                            return v
                        }(i),
                        G = document.documentElement && document.documentElement.scrollTop;
                    i.style.height = "", i.style.height = i.scrollHeight + d + "px", g = i.clientWidth, q.forEach(function(Q) {
                        Q.node.scrollTop = Q.scrollTop
                    }), G && (document.documentElement.scrollTop = G)
                }
            }

            function J() {
                V();
                var q = Math.round(parseFloat(i.style.height)),
                    G = window.getComputedStyle(i, null),
                    Q = G.boxSizing === "content-box" ? Math.round(parseFloat(G.height)) : i.offsetHeight;
                if (Q < q ? G.overflowY === "hidden" && (D("scroll"), V(), Q = G.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight) : G.overflowY !== "hidden" && (D("hidden"), V(), Q = G.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight), E !== Q) {
                    E = Q;
                    var v = qu("autosize:resized");
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
            return nn.sanitize(this.getValue())
        },
        sanitize(t) {
            return nn.sanitize(t)
        },
        sanitizeInput(t) {
            return nn.sanitizeInput(t)
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
    pi = Et.CollectionView.extend({
        tagName: "div",
        className: "choices",
        childView(t) {
            return t.get("type") === "input" ? to : t.get("type") === "text" ? $i : Wu
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

function Xu(t, ...e) {
    !sc[t] || sc[t].map(n => n(...e))
}
let Jr, Gs;

function Li() {
    return Jr
}

function vo() {
    return Gs
}

function hC(t) {
    if (Jr = document.getElementById(t) || t || document.querySelector("canvas"), !Jr) throw Error("You must provide a canvas element for the game");
    return Gs = Jr.getContext("2d"), Gs.imageSmoothingEnabled = !1, Xu("init"), {
        canvas: Jr,
        context: Gs
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
            height: g,
            margin: E = 0
        } = e.frame;
        this.width = d, this.height = g, this.margin = E, this._f = 0, this._a = 0
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
        let g = this.frames[this._f] / this.spriteSheet._f | 0,
            E = this.frames[this._f] % this.spriteSheet._f | 0;
        d.drawImage(this.spriteSheet.image, E * this.width + (E * 2 + 1) * this.margin, g * this.height + (g * 2 + 1) * this.margin, this.width, this.height, e, n, i, a)
    }
}

function yo(t) {
    return new rl(t)
}
yo.prototype = rl.prototype;
yo.class = rl;
const dC = () => {};

function fC() {
    let t = Li();
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
        g = 1 / t,
        E = e ? fC : dC,
        k, A, D, V, J;
    const q = window.performance || Date;

    function G() {
        if (A = requestAnimationFrame(G), D = q.now(), V = D - k, k = D, !(V > 1e3)) {
            for (Xu("tick"), a += V; a >= d;) J.update(g), a -= d;
            E(), J.render()
        }
    }
    return J = {
        update: n,
        render: i,
        isStopped: !0,
        start() {
            k = q.now(), this.isStopped = !1, requestAnimationFrame(G)
        },
        stop() {
            this.isStopped = !0, cancelAnimationFrame(A)
        },
        _frame: G,
        set _last(Q) {
            k = Q
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
        g = t.y + t.height >= a && t.y < e.y + e.height;
    return t.x < i && t.x + t.width >= e.x && (d && n.push(0), g && n.push(2)), t.x + t.width >= i && t.x < e.x + e.width && (d && n.push(1), g && n.push(3)), n
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
            ddx: g,
            ddy: E,
            width: k,
            height: A,
            image: D
        } = e;
        this.position = fr(n, i), this.velocity = fr(a, d), this.acceleration = fr(g, E), this._fx = this._fy = 1, this.width = this.height = this.rotation = 0, this.ttl = 1 / 0, this.anchor = {
            x: 0,
            y: 0
        }, this.context = vo();
        for (let V in e) this[V] = e[V];
        D && (this.width = k !== void 0 ? k : D.width, this.height = A !== void 0 ? A : D.height), this.sx = 0, this.sy = 0
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
                loop: g
            } = e[i];
            if (n = [], a === void 0) throw Error("Animation " + i + " must provide a frames property");
            [].concat(a).map(E => {
                n = n.concat(mC(E))
            }), this.animations[i] = yo({
                spriteSheet: this,
                frames: n,
                frameRate: d,
                loop: g
            })
        }
    }
}
vC.prototype;
var Yu = {
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
            d = c => {
                console.warn("".concat(n, " ").concat(typeof c == "object" ? c.join(" ") : c))
            },
            g = c => {
                console.error("".concat(n, " ").concat(c))
            },
            E = [],
            k = c => {
                E.includes(c) || (E.push(c), d(c))
            },
            A = (c, h) => {
                k('"'.concat(c, '" is deprecated and will be removed in the next major release. Please use "').concat(h, '" instead.'))
            },
            D = c => typeof c == "function" ? c() : c,
            V = c => c && typeof c.toPromise == "function",
            J = c => V(c) ? c.toPromise() : Promise.resolve(c),
            q = c => c && Promise.resolve(c) === c,
            G = c => c[Math.floor(Math.random() * c.length)],
            Q = {
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
            M = {},
            W = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
            oe = c => Object.prototype.hasOwnProperty.call(Q, c),
            ae = c => v.indexOf(c) !== -1,
            ye = c => M[c],
            f = c => {
                oe(c) || d('Unknown parameter "'.concat(c, '"'))
            },
            _e = c => {
                W.includes(c) && d('The parameter "'.concat(c, '" is incompatible with toasts'))
            },
            Oe = c => {
                ye(c) && A(c, ye(c))
            },
            Pe = c => {
                !c.backdrop && c.allowOutsideClick && d('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
                for (const h in c) f(h), c.toast && _e(h), Oe(h)
            },
            lt = "swal2-",
            $e = c => {
                const h = {};
                for (const b in c) h[c[b]] = lt + c[b];
                return h
            },
            Z = $e(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "no-war"]),
            Fe = $e(["success", "warning", "info", "question", "error"]),
            U = () => document.body.querySelector(".".concat(Z.container)),
            le = c => {
                const h = U();
                return h ? h.querySelector(c) : null
            },
            Ae = c => le(".".concat(c)),
            be = () => Ae(Z.popup),
            we = () => Ae(Z.icon),
            he = () => Ae(Z.title),
            Se = () => Ae(Z["html-container"]),
            Te = () => Ae(Z.image),
            Be = () => Ae(Z["progress-steps"]),
            Ke = () => Ae(Z["validation-message"]),
            dt = () => le(".".concat(Z.actions, " .").concat(Z.confirm)),
            $t = () => le(".".concat(Z.actions, " .").concat(Z.deny)),
            Ut = () => Ae(Z["input-label"]),
            _ = () => le(".".concat(Z.loader)),
            l = () => le(".".concat(Z.actions, " .").concat(Z.cancel)),
            m = () => Ae(Z.actions),
            S = () => Ae(Z.footer),
            R = () => Ae(Z["timer-progress-bar"]),
            P = () => Ae(Z.close),
            $ = `
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
                const c = Array.from(be().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((b, B) => {
                        const me = parseInt(b.getAttribute("tabindex")),
                            He = parseInt(B.getAttribute("tabindex"));
                        return me > He ? 1 : me < He ? -1 : 0
                    }),
                    h = Array.from(be().querySelectorAll($)).filter(b => b.getAttribute("tabindex") !== "-1");
                return i(c.concat(h)).filter(b => ge(b))
            },
            ke = () => Ct(document.body, Z.shown) && !Ct(document.body, Z["toast-shown"]) && !Ct(document.body, Z["no-backdrop"]),
            de = () => be() && Ct(be(), Z.toast),
            De = () => be().hasAttribute("data-loading"),
            Me = {
                previousBodyPadding: null
            },
            nt = (c, h) => {
                if (c.textContent = "", h) {
                    const B = new DOMParser().parseFromString(h, "text/html");
                    Array.from(B.querySelector("head").childNodes).forEach(me => {
                        c.appendChild(me)
                    }), Array.from(B.querySelector("body").childNodes).forEach(me => {
                        c.appendChild(me)
                    })
                }
            },
            Ct = (c, h) => {
                if (!h) return !1;
                const b = h.split(/\s+/);
                for (let B = 0; B < b.length; B++)
                    if (!c.classList.contains(b[B])) return !1;
                return !0
            },
            rn = (c, h) => {
                Array.from(c.classList).forEach(b => {
                    !Object.values(Z).includes(b) && !Object.values(Fe).includes(b) && !Object.values(h.showClass).includes(b) && c.classList.remove(b)
                })
            },
            ct = (c, h, b) => {
                if (rn(c, h), h.customClass && h.customClass[b]) {
                    if (typeof h.customClass[b] != "string" && !h.customClass[b].forEach) return d("Invalid type of customClass.".concat(b, '! Expected string or iterable object, got "').concat(typeof h.customClass[b], '"'));
                    Je(c, h.customClass[b])
                }
            },
            yt = (c, h) => {
                if (!h) return null;
                switch (h) {
                    case "select":
                    case "textarea":
                    case "file":
                        return c.querySelector(".".concat(Z.popup, " > .").concat(Z[h]));
                    case "checkbox":
                        return c.querySelector(".".concat(Z.popup, " > .").concat(Z.checkbox, " input"));
                    case "radio":
                        return c.querySelector(".".concat(Z.popup, " > .").concat(Z.radio, " input:checked")) || c.querySelector(".".concat(Z.popup, " > .").concat(Z.radio, " input:first-child"));
                    case "range":
                        return c.querySelector(".".concat(Z.popup, " > .").concat(Z.range, " input"));
                    default:
                        return c.querySelector(".".concat(Z.popup, " > .").concat(Z.input))
                }
            },
            bt = c => {
                if (c.focus(), c.type !== "file") {
                    const h = c.value;
                    c.value = "", c.value = h
                }
            },
            Kt = (c, h, b) => {
                !c || !h || (typeof h == "string" && (h = h.split(/\s+/).filter(Boolean)), h.forEach(B => {
                    Array.isArray(c) ? c.forEach(me => {
                        b ? me.classList.add(B) : me.classList.remove(B)
                    }) : b ? c.classList.add(B) : c.classList.remove(B)
                }))
            },
            Je = (c, h) => {
                Kt(c, h, !0)
            },
            Lt = (c, h) => {
                Kt(c, h, !1)
            },
            j = (c, h) => {
                const b = Array.from(c.children);
                for (let B = 0; B < b.length; B++) {
                    const me = b[B];
                    if (me instanceof HTMLElement && Ct(me, h)) return me
                }
            },
            N = (c, h, b) => {
                b === "".concat(parseInt(b)) && (b = parseInt(b)), b || parseInt(b) === 0 ? c.style[h] = typeof b == "number" ? "".concat(b, "px") : b : c.style.removeProperty(h)
            },
            Y = function(c) {
                let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
                c.style.display = h
            },
            L = c => {
                c.style.display = "none"
            },
            X = (c, h, b, B) => {
                const me = c.querySelector(h);
                me && (me.style[b] = B)
            },
            pe = function(c, h) {
                let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
                h ? Y(c, b) : L(c)
            },
            ge = c => !!(c && (c.offsetWidth || c.offsetHeight || c.getClientRects().length)),
            Ne = () => !ge(dt()) && !ge($t()) && !ge(l()),
            Ve = c => c.scrollHeight > c.clientHeight,
            pt = c => {
                const h = window.getComputedStyle(c),
                    b = parseFloat(h.getPropertyValue("animation-duration") || "0"),
                    B = parseFloat(h.getPropertyValue("transition-duration") || "0");
                return b > 0 || B > 0
            },
            jt = function(c) {
                let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                const b = R();
                ge(b) && (h && (b.style.transition = "none", b.style.width = "100%"), setTimeout(() => {
                    b.style.transition = "width ".concat(c / 1e3, "s linear"), b.style.width = "0%"
                }, 10))
            },
            Ye = () => {
                const c = R(),
                    h = parseInt(window.getComputedStyle(c).width);
                c.style.removeProperty("transition"), c.style.width = "100%";
                const b = parseInt(window.getComputedStyle(c).width),
                    B = h / b * 100;
                c.style.removeProperty("transition"), c.style.width = "".concat(B, "%")
            },
            In = () => typeof window > "u" || typeof document > "u",
            Pn = 100,
            it = {},
            Dn = () => {
                it.previousActiveElement instanceof HTMLElement ? (it.previousActiveElement.focus(), it.previousActiveElement = null) : document.body && document.body.focus()
            },
            mi = c => new Promise(h => {
                if (!c) return h();
                const b = window.scrollX,
                    B = window.scrollY;
                it.restoreFocusTimeout = setTimeout(() => {
                    Dn(), h()
                }, Pn), window.scrollTo(b, B)
            }),
            Sr = `
 <div aria-labelledby="`.concat(Z.title, '" aria-describedby="').concat(Z["html-container"], '" class="').concat(Z.popup, `" tabindex="-1">
   <button type="button" class="`).concat(Z.close, `"></button>
   <ul class="`).concat(Z["progress-steps"], `"></ul>
   <div class="`).concat(Z.icon, `"></div>
   <img class="`).concat(Z.image, `" />
   <h2 class="`).concat(Z.title, '" id="').concat(Z.title, `"></h2>
   <div class="`).concat(Z["html-container"], '" id="').concat(Z["html-container"], `"></div>
   <input class="`).concat(Z.input, `" />
   <input type="file" class="`).concat(Z.file, `" />
   <div class="`).concat(Z.range, `">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(Z.select, `"></select>
   <div class="`).concat(Z.radio, `"></div>
   <label for="`).concat(Z.checkbox, '" class="').concat(Z.checkbox, `">
     <input type="checkbox" />
     <span class="`).concat(Z.label, `"></span>
   </label>
   <textarea class="`).concat(Z.textarea, `"></textarea>
   <div class="`).concat(Z["validation-message"], '" id="').concat(Z["validation-message"], `"></div>
   <div class="`).concat(Z.actions, `">
     <div class="`).concat(Z.loader, `"></div>
     <button type="button" class="`).concat(Z.confirm, `"></button>
     <button type="button" class="`).concat(Z.deny, `"></button>
     <button type="button" class="`).concat(Z.cancel, `"></button>
   </div>
   <div class="`).concat(Z.footer, `"></div>
   <div class="`).concat(Z["timer-progress-bar-container"], `">
     <div class="`).concat(Z["timer-progress-bar"], `"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g, ""),
            kn = () => {
                const c = U();
                return c ? (c.remove(), Lt([document.documentElement, document.body], [Z["no-backdrop"], Z["toast-shown"], Z["has-column"]]), !0) : !1
            },
            sn = () => {
                it.currentInstance.resetValidationMessage()
            },
            kr = () => {
                const c = be(),
                    h = j(c, Z.input),
                    b = j(c, Z.file),
                    B = c.querySelector(".".concat(Z.range, " input")),
                    me = c.querySelector(".".concat(Z.range, " output")),
                    He = j(c, Z.select),
                    Gt = c.querySelector(".".concat(Z.checkbox, " input")),
                    Vn = j(c, Z.textarea);
                h.oninput = sn, b.onchange = sn, He.onchange = sn, Gt.onchange = sn, Vn.oninput = sn, B.oninput = () => {
                    sn(), me.value = B.value
                }, B.onchange = () => {
                    sn(), me.value = B.value
                }
            },
            Tr = c => typeof c == "string" ? document.querySelector(c) : c,
            vi = c => {
                const h = be();
                h.setAttribute("role", c.toast ? "alert" : "dialog"), h.setAttribute("aria-live", c.toast ? "polite" : "assertive"), c.toast || h.setAttribute("aria-modal", "true")
            },
            Bi = c => {
                window.getComputedStyle(c).direction === "rtl" && Je(U(), Z.rtl)
            },
            yi = c => {
                const h = kn();
                if (In()) {
                    g("SweetAlert2 requires document to initialize");
                    return
                }
                const b = document.createElement("div");
                b.className = Z.container, h && Je(b, Z["no-transition"]), nt(b, Sr);
                const B = Tr(c.target);
                B.appendChild(b), vi(c), Bi(B), kr()
            },
            wi = (c, h) => {
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
                c.className = Z["scrollbar-measure"], document.body.appendChild(c);
                const h = c.getBoundingClientRect().width - c.clientWidth;
                return document.body.removeChild(c), h
            },
            bi = (c, h) => {
                const b = m(),
                    B = _();
                !h.showConfirmButton && !h.showDenyButton && !h.showCancelButton ? L(b) : Y(b), ct(b, h, "actions"), Hn(b, B, h), nt(B, h.loaderHtml), ct(B, h, "loader")
            };

        function Hn(c, h, b) {
            const B = dt(),
                me = $t(),
                He = l();
            Ci(B, "confirm", b), Ci(me, "deny", b), Ci(He, "cancel", b), Hi(B, me, He, b), b.reverseButtons && (b.toast ? (c.insertBefore(He, B), c.insertBefore(me, B)) : (c.insertBefore(He, h), c.insertBefore(me, h), c.insertBefore(B, h)))
        }

        function Hi(c, h, b, B) {
            if (!B.buttonsStyling) return Lt([c, h, b], Z.styled);
            Je([c, h, b], Z.styled), B.confirmButtonColor && (c.style.backgroundColor = B.confirmButtonColor, Je(c, Z["default-outline"])), B.denyButtonColor && (h.style.backgroundColor = B.denyButtonColor, Je(h, Z["default-outline"])), B.cancelButtonColor && (b.style.backgroundColor = B.cancelButtonColor, Je(b, Z["default-outline"]))
        }

        function Ci(c, h, b) {
            pe(c, b["show".concat(a(h), "Button")], "inline-block"), nt(c, b["".concat(h, "ButtonText")]), c.setAttribute("aria-label", b["".concat(h, "ButtonAriaLabel")]), c.className = Z[h], ct(c, b, "".concat(h, "Button")), Je(c, b["".concat(h, "ButtonClass")])
        }
        const Ze = (c, h) => {
            const b = U();
            !b || (y(b, h.backdrop), o(b, h.position), C(b, h.grow), ct(b, h, "container"))
        };

        function y(c, h) {
            typeof h == "string" ? c.style.background = h : h || Je([document.documentElement, document.body], Z["no-backdrop"])
        }

        function o(c, h) {
            h in Z ? Je(c, Z[h]) : (d('The "position" parameter is not valid, defaulting to "center"'), Je(c, Z.center))
        }

        function C(c, h) {
            if (h && typeof h == "string") {
                const b = "grow-".concat(h);
                b in Z && Je(c, Z[b])
            }
        }
        var O = {
            awaitingPromise: new WeakMap,
            promise: new WeakMap,
            innerParams: new WeakMap,
            domCache: new WeakMap
        };
        const ee = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
            xe = (c, h) => {
                const b = be(),
                    B = O.innerParams.get(c),
                    me = !B || h.input !== B.input;
                ee.forEach(He => {
                    const Gt = j(b, Z[He]);
                    qt(He, h.inputAttributes), Gt.className = Z[He], me && L(Gt)
                }), h.input && (me && We(h), Gn(h))
            },
            We = c => {
                if (!Ft[c.input]) return g('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(c.input, '"'));
                const h = Ar(c.input),
                    b = Ft[c.input](h, c);
                Y(h), setTimeout(() => {
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
                const b = yt(be(), c);
                if (!!b) {
                    It(b);
                    for (const B in h) b.setAttribute(B, h[B])
                }
            },
            Gn = c => {
                const h = Ar(c.input);
                typeof c.customClass == "object" && Je(h, c.customClass.input)
            },
            Nn = (c, h) => {
                (!c.placeholder || h.inputPlaceholder) && (c.placeholder = h.inputPlaceholder)
            },
            Un = (c, h, b) => {
                if (b.inputLabel) {
                    c.id = Z.input;
                    const B = document.createElement("label"),
                        me = Z["input-label"];
                    B.setAttribute("for", c.id), B.className = me, typeof b.customClass == "object" && Je(B, b.customClass.inputLabel), B.innerText = b.inputLabel, h.insertAdjacentElement("beforebegin", B)
                }
            },
            Ar = c => j(be(), Z[c] || Z.input),
            Xt = (c, h) => {
                ["string", "number"].includes(typeof h) ? c.value = "".concat(h) : q(h) || d('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof h, '"'))
            },
            Ft = {};
        Ft.text = Ft.email = Ft.password = Ft.number = Ft.tel = Ft.url = (c, h) => (Xt(c, h.inputValue), Un(c, c, h), Nn(c, h), c.type = h.input, c), Ft.file = (c, h) => (Un(c, c, h), Nn(c, h), c), Ft.range = (c, h) => {
            const b = c.querySelector("input"),
                B = c.querySelector("output");
            return Xt(b, h.inputValue), b.type = h.input, Xt(B, h.inputValue), Un(b, c, h), c
        }, Ft.select = (c, h) => {
            if (c.textContent = "", h.inputPlaceholder) {
                const b = document.createElement("option");
                nt(b, h.inputPlaceholder), b.value = "", b.disabled = !0, b.selected = !0, c.appendChild(b)
            }
            return Un(c, c, h), c
        }, Ft.radio = c => (c.textContent = "", c), Ft.checkbox = (c, h) => {
            const b = yt(be(), "checkbox");
            b.value = "1", b.id = Z.checkbox, b.checked = Boolean(h.inputValue);
            const B = c.querySelector("span");
            return nt(B, h.inputPlaceholder), b
        }, Ft.textarea = (c, h) => {
            Xt(c, h.inputValue), Nn(c, h), Un(c, c, h);
            const b = B => parseInt(window.getComputedStyle(B).marginLeft) + parseInt(window.getComputedStyle(B).marginRight);
            return setTimeout(() => {
                if ("MutationObserver" in window) {
                    const B = parseInt(window.getComputedStyle(be()).width),
                        me = () => {
                            const He = c.offsetWidth + b(c);
                            He > B ? be().style.width = "".concat(He, "px") : be().style.width = null
                        };
                    new MutationObserver(me).observe(c, {
                        attributes: !0,
                        attributeFilter: ["style"]
                    })
                }
            }), c
        };
        const Gi = (c, h) => {
                const b = Se();
                ct(b, h, "htmlContainer"), h.html ? (wi(h.html, b), Y(b, "block")) : h.text ? (b.textContent = h.text, Y(b, "block")) : L(b), xe(c, h)
            },
            bo = (c, h) => {
                const b = S();
                pe(b, h.footer), h.footer && wi(h.footer, b), ct(b, h, "footer")
            },
            Co = (c, h) => {
                const b = P();
                nt(b, h.closeButtonHtml), ct(b, h, "closeButton"), pe(b, h.showCloseButton), b.setAttribute("aria-label", h.closeButtonAriaLabel)
            },
            Or = (c, h) => {
                const b = O.innerParams.get(c),
                    B = we();
                if (b && h.icon === b.icon) {
                    ms(B, h), Rr(B, h);
                    return
                }
                if (!h.icon && !h.iconHtml) {
                    L(B);
                    return
                }
                if (h.icon && Object.keys(Fe).indexOf(h.icon) === -1) {
                    g('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(h.icon, '"')), L(B);
                    return
                }
                Y(B), ms(B, h), Rr(B, h), Je(B, h.showClass.icon)
            },
            Rr = (c, h) => {
                for (const b in Fe) h.icon !== b && Lt(c, Fe[b]);
                Je(c, Fe[h.icon]), bn(c, h), Ui(), ct(c, h, "icon")
            },
            Ui = () => {
                const c = be(),
                    h = window.getComputedStyle(c).getPropertyValue("background-color"),
                    b = c.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
                for (let B = 0; B < b.length; B++) b[B].style.backgroundColor = h
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
                    B;
                h.iconHtml ? B = Ir(h.iconHtml) : h.icon === "success" ? (B = gs, b = b.replace(/ style=".*?"/g, "")) : h.icon === "error" ? B = xo : B = Ir({
                    question: "?",
                    warning: "!",
                    info: "i"
                } [h.icon]), b.trim() !== B.trim() && nt(c, B)
            },
            bn = (c, h) => {
                if (!!h.iconColor) {
                    c.style.color = h.iconColor, c.style.borderColor = h.iconColor;
                    for (const b of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) X(c, b, "backgroundColor", h.iconColor);
                    X(c, ".swal2-success-ring", "borderColor", h.iconColor)
                }
            },
            Ir = c => '<div class="'.concat(Z["icon-content"], '">').concat(c, "</div>"),
            xi = (c, h) => {
                const b = Te();
                if (!h.imageUrl) return L(b);
                Y(b, ""), b.setAttribute("src", h.imageUrl), b.setAttribute("alt", h.imageAlt), N(b, "width", h.imageWidth), N(b, "height", h.imageHeight), b.className = Z.image, ct(b, h, "image")
            },
            Eo = (c, h) => {
                const b = Be();
                if (!h.progressSteps || h.progressSteps.length === 0) return L(b);
                Y(b), b.textContent = "", h.currentProgressStep >= h.progressSteps.length && d("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), h.progressSteps.forEach((B, me) => {
                    const He = _o(B);
                    if (b.appendChild(He), me === h.currentProgressStep && Je(He, Z["active-progress-step"]), me !== h.progressSteps.length - 1) {
                        const Gt = Wn(h);
                        b.appendChild(Gt)
                    }
                })
            },
            _o = c => {
                const h = document.createElement("li");
                return Je(h, Z["progress-step"]), nt(h, c), h
            },
            Wn = c => {
                const h = document.createElement("li");
                return Je(h, Z["progress-step-line"]), c.progressStepsDistance && N(h, "width", c.progressStepsDistance), h
            },
            qn = (c, h) => {
                const b = he();
                pe(b, h.title || h.titleText, "block"), h.title && wi(h.title, b), h.titleText && (b.innerText = h.titleText), ct(b, h, "title")
            },
            Dr = (c, h) => {
                const b = U(),
                    B = be();
                h.toast ? (N(b, "width", h.width), B.style.width = "100%", B.insertBefore(_(), we())) : N(B, "width", h.width), N(B, "padding", h.padding), h.color && (B.style.color = h.color), h.background && (B.style.background = h.background), L(Ke()), So(B, h)
            },
            So = (c, h) => {
                c.className = "".concat(Z.popup, " ").concat(ge(c) ? h.showClass.popup : ""), h.toast ? (Je([document.documentElement, document.body], Z["toast-shown"]), Je(c, Z.toast)) : Je(c, Z.modal), ct(c, h, "popup"), typeof h.customClass == "string" && Je(c, h.customClass), h.icon && Je(c, Z["icon-".concat(h.icon)])
            },
            Mr = (c, h) => {
                Dr(c, h), Ze(c, h), Eo(c, h), Or(c, h), xi(c, h), qn(c, h), Co(c, h), Gi(c, h), bi(c, h), bo(c, h), typeof h.didRender == "function" && h.didRender(be())
            },
            Xn = Object.freeze({
                cancel: "cancel",
                backdrop: "backdrop",
                close: "close",
                esc: "esc",
                timer: "timer"
            }),
            Ei = () => {
                Array.from(document.body.children).forEach(h => {
                    h === U() || h.contains(U()) || (h.hasAttribute("aria-hidden") && h.setAttribute("data-previous-aria-hidden", h.getAttribute("aria-hidden")), h.setAttribute("aria-hidden", "true"))
                })
            },
            Lr = () => {
                Array.from(document.body.children).forEach(h => {
                    h.hasAttribute("data-previous-aria-hidden") ? (h.setAttribute("aria-hidden", h.getAttribute("data-previous-aria-hidden")), h.removeAttribute("data-previous-aria-hidden")) : h.removeAttribute("aria-hidden")
                })
            },
            Wi = ["swal-title", "swal-html", "swal-footer"],
            ko = c => {
                const h = typeof c.template == "string" ? document.querySelector(c.template) : c.template;
                if (!h) return {};
                const b = h.content;
                return Io(b), Object.assign(vs(b), To(b), Ao(b), Pr(b), Oo(b), Ro(b, Wi))
            },
            vs = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-param")).forEach(B => {
                    Yn(B, ["name", "value"]);
                    const me = B.getAttribute("name"),
                        He = B.getAttribute("value");
                    typeof Q[me] == "boolean" && He === "false" && (h[me] = !1), typeof Q[me] == "object" && (h[me] = JSON.parse(He))
                }), h
            },
            To = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-button")).forEach(B => {
                    Yn(B, ["type", "color", "aria-label"]);
                    const me = B.getAttribute("type");
                    h["".concat(me, "ButtonText")] = B.innerHTML, h["show".concat(a(me), "Button")] = !0, B.hasAttribute("color") && (h["".concat(me, "ButtonColor")] = B.getAttribute("color")), B.hasAttribute("aria-label") && (h["".concat(me, "ButtonAriaLabel")] = B.getAttribute("aria-label"))
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
                const B = Array.from(c.querySelectorAll("swal-input-option"));
                return B.length && (h.inputOptions = {}, B.forEach(me => {
                    Yn(me, ["value"]);
                    const He = me.getAttribute("value"),
                        Gt = me.innerHTML;
                    h.inputOptions[He] = Gt
                })), h
            },
            Ro = (c, h) => {
                const b = {};
                for (const B in h) {
                    const me = h[B],
                        He = c.querySelector(me);
                    He && (Yn(He, []), b[me.replace(/^swal-/, "")] = He.innerHTML.trim())
                }
                return b
            },
            Io = c => {
                const h = Wi.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
                Array.from(c.children).forEach(b => {
                    const B = b.tagName.toLowerCase();
                    h.indexOf(B) === -1 && d("Unrecognized element <".concat(B, ">"))
                })
            },
            Yn = (c, h) => {
                Array.from(c.attributes).forEach(b => {
                    h.indexOf(b.name) === -1 && d(['Unrecognized attribute "'.concat(b.name, '" on <').concat(c.tagName.toLowerCase(), ">."), "".concat(h.length ? "Allowed attributes are: ".concat(h.join(", ")) : "To set the value, use HTML within the element.")])
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

        function Mo(c) {
            (!c.target || typeof c.target == "string" && !document.querySelector(c.target) || typeof c.target != "string" && !c.target.appendChild) && (d('Target parameter is not valid, defaulting to "body"'), c.target = "body")
        }

        function ws(c) {
            Do(c), c.showLoaderOnConfirm && !c.preConfirm && d(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), Mo(c), typeof c.title == "string" && (c.title = c.title.split(`
`).join("<br />")), yi(c)
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
        const bs = () => {
                Me.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (Me.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(Me.previousBodyPadding + zi(), "px"))
            },
            Vr = () => {
                Me.previousBodyPadding !== null && (document.body.style.paddingRight = "".concat(Me.previousBodyPadding, "px"), Me.previousBodyPadding = null)
            },
            Cs = () => {
                if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !Ct(document.body, Z.iosfix)) {
                    const h = document.body.scrollTop;
                    document.body.style.top = "".concat(h * -1, "px"), Je(document.body, Z.iosfix), $r(), xs()
                }
            },
            xs = () => {
                const c = navigator.userAgent,
                    h = !!c.match(/iPad/i) || !!c.match(/iPhone/i),
                    b = !!c.match(/WebKit/i);
                h && b && !c.match(/CriOS/i) && be().scrollHeight > window.innerHeight - 44 && (U().style.paddingBottom = "".concat(44, "px"))
            },
            $r = () => {
                const c = U();
                let h;
                c.ontouchstart = b => {
                    h = Lo(b)
                }, c.ontouchmove = b => {
                    h && (b.preventDefault(), b.stopPropagation())
                }
            },
            Lo = c => {
                const h = c.target,
                    b = U();
                return Po(c) || No(c) ? !1 : h === b || !Ve(b) && h.tagName !== "INPUT" && h.tagName !== "TEXTAREA" && !(Ve(Se()) && Se().contains(h))
            },
            Po = c => c.touches && c.touches.length && c.touches[0].touchType === "stylus",
            No = c => c.touches && c.touches.length > 1,
            _i = () => {
                if (Ct(document.body, Z.iosfix)) {
                    const c = parseInt(document.body.style.top, 10);
                    Lt(document.body, Z.iosfix), document.body.style.top = "", document.body.scrollTop = c * -1
                }
            },
            Br = 10,
            jr = c => {
                const h = U(),
                    b = be();
                typeof c.willOpen == "function" && c.willOpen(b);
                const me = window.getComputedStyle(document.body).overflowY;
                r(h, b, c), setTimeout(() => {
                    Vo(h, b)
                }, Br), ke() && ($o(h, c.scrollbarPadding, me), Ei()), !de() && !it.previousActiveElement && (it.previousActiveElement = document.activeElement), typeof c.didOpen == "function" && setTimeout(() => c.didOpen(b)), Lt(h, Z["no-transition"])
            },
            Es = c => {
                const h = be();
                if (c.target !== h) return;
                const b = U();
                h.removeEventListener(mn, Es), b.style.overflowY = "auto"
            },
            Vo = (c, h) => {
                mn && pt(h) ? (c.style.overflowY = "hidden", h.addEventListener(mn, Es)) : c.style.overflowY = "auto"
            },
            $o = (c, h, b) => {
                Cs(), h && b !== "hidden" && bs(), setTimeout(() => {
                    c.scrollTop = 0
                })
            },
            r = (c, h, b) => {
                Je(c, b.showClass.backdrop), h.style.setProperty("opacity", "0", "important"), Y(h, "grid"), setTimeout(() => {
                    Je(h, b.showClass.popup), h.style.removeProperty("opacity")
                }, Br), Je([document.documentElement, document.body], Z.shown), b.heightAuto && b.backdrop && !b.toast && Je([document.documentElement, document.body], Z["height-auto"])
            },
            s = c => {
                let h = be();
                h || new Ot, h = be();
                const b = _();
                de() ? L(we()) : u(h, c), Y(b), h.setAttribute("data-loading", "true"), h.setAttribute("aria-busy", "true"), h.focus()
            },
            u = (c, h) => {
                const b = m(),
                    B = _();
                !h && ge(dt()) && (h = dt()), Y(b), h && (L(h), B.setAttribute("data-button-to-replace", h.className)), B.parentNode.insertBefore(B, h), Je([c, b], Z.loading)
            },
            p = (c, h) => {
                h.input === "select" || h.input === "radio" ? H(c, h) : ["text", "email", "number", "tel", "textarea"].includes(h.input) && (V(h.inputValue) || q(h.inputValue)) && (s(dt()), te(c, h))
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
                    B = me => ce[h.input](b, Ce(me), h);
                V(h.inputOptions) || q(h.inputOptions) ? (s(dt()), J(h.inputOptions).then(me => {
                    c.hideLoading(), B(me)
                })) : typeof h.inputOptions == "object" ? B(h.inputOptions) : g("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof h.inputOptions))
            },
            te = (c, h) => {
                const b = c.getInput();
                L(b), J(h.inputValue).then(B => {
                    b.value = h.input === "number" ? parseFloat(B) || 0 : "".concat(B), Y(b), b.focus(), c.hideLoading()
                }).catch(B => {
                    g("Error in inputValue promise: ".concat(B)), b.value = "", Y(b), b.focus(), c.hideLoading()
                })
            },
            ce = {
                select: (c, h, b) => {
                    const B = j(c, Z.select),
                        me = (He, Gt, Vn) => {
                            const pn = document.createElement("option");
                            pn.value = Vn, nt(pn, Gt), pn.selected = re(Vn, b.inputValue), He.appendChild(pn)
                        };
                    h.forEach(He => {
                        const Gt = He[0],
                            Vn = He[1];
                        if (Array.isArray(Vn)) {
                            const pn = document.createElement("optgroup");
                            pn.label = Gt, pn.disabled = !1, B.appendChild(pn), Vn.forEach(nr => me(pn, nr[1], nr[0]))
                        } else me(B, Vn, Gt)
                    }), B.focus()
                },
                radio: (c, h, b) => {
                    const B = j(c, Z.radio);
                    h.forEach(He => {
                        const Gt = He[0],
                            Vn = He[1],
                            pn = document.createElement("input"),
                            nr = document.createElement("label");
                        pn.type = "radio", pn.name = Z.radio, pn.value = Gt, re(Gt, b.inputValue) && (pn.checked = !0);
                        const Ko = document.createElement("span");
                        nt(Ko, Vn), Ko.className = Z.label, nr.appendChild(pn), nr.appendChild(Ko), B.appendChild(nr)
                    });
                    const me = B.querySelectorAll("input");
                    me.length && me[0].focus()
                }
            },
            Ce = c => {
                const h = [];
                return typeof Map < "u" && c instanceof Map ? c.forEach((b, B) => {
                    let me = b;
                    typeof me == "object" && (me = Ce(me)), h.push([B, me])
                }) : Object.keys(c).forEach(b => {
                    let B = c[b];
                    typeof B == "object" && (B = Ce(B)), h.push([b, B])
                }), h
            },
            re = (c, h) => h && h.toString() === c.toString();

        function ue() {
            const c = O.innerParams.get(this);
            if (!c) return;
            const h = O.domCache.get(this);
            L(h.loader), de() ? c.icon && Y(we()) : Ue(h), Lt([h.popup, h.actions], Z.loading), h.popup.removeAttribute("aria-busy"), h.popup.removeAttribute("data-loading"), h.confirmButton.disabled = !1, h.denyButton.disabled = !1, h.cancelButton.disabled = !1
        }
        const Ue = c => {
            const h = c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));
            h.length ? Y(h[0], "inline-block") : Ne() && L(c.actions)
        };

        function rt(c) {
            const h = O.innerParams.get(c || this),
                b = O.domCache.get(c || this);
            return b ? yt(b.popup, h.input) : null
        }
        var je = {
            swalPromiseResolve: new WeakMap,
            swalPromiseReject: new WeakMap
        };
        const zt = () => ge(be()),
            Nt = () => dt() && dt().click(),
            un = () => $t() && $t().click(),
            _t = () => l() && l().click(),
            et = c => {
                c.keydownTarget && c.keydownHandlerAdded && (c.keydownTarget.removeEventListener("keydown", c.keydownHandler, {
                    capture: c.keydownListenerCapture
                }), c.keydownHandlerAdded = !1)
            },
            on = (c, h, b, B) => {
                et(h), b.toast || (h.keydownHandler = me => qi(c, me, B), h.keydownTarget = b.keydownListenerCapture ? window : be(), h.keydownListenerCapture = b.keydownListenerCapture, h.keydownTarget.addEventListener("keydown", h.keydownHandler, {
                    capture: h.keydownListenerCapture
                }), h.keydownHandlerAdded = !0)
            },
            ft = (c, h, b) => {
                const B = ie();
                if (B.length) return h = h + b, h === B.length ? h = 0 : h === -1 && (h = B.length - 1), B[h].focus();
                be().focus()
            },
            Dt = ["ArrowRight", "ArrowDown"],
            Si = ["ArrowLeft", "ArrowUp"],
            qi = (c, h, b) => {
                const B = O.innerParams.get(c);
                !B || h.isComposing || h.keyCode === 229 || (B.stopKeydownPropagation && h.stopPropagation(), h.key === "Enter" ? hn(c, h, B) : h.key === "Tab" ? Kn(h, B) : [...Dt, ...Si].includes(h.key) ? Jn(h.key) : h.key === "Escape" && an(h, B, b))
            },
            hn = (c, h, b) => {
                if (!!D(b.allowEnterKey) && h.target && c.getInput() && h.target instanceof HTMLElement && h.target.outerHTML === c.getInput().outerHTML) {
                    if (["textarea", "file"].includes(b.input)) return;
                    Nt(), h.preventDefault()
                }
            },
            Kn = (c, h) => {
                const b = c.target,
                    B = ie();
                let me = -1;
                for (let He = 0; He < B.length; He++)
                    if (b === B[He]) {
                        me = He;
                        break
                    } c.shiftKey ? ft(h, me, -1) : ft(h, me, 1), c.stopPropagation(), c.preventDefault()
            },
            Jn = c => {
                const h = dt(),
                    b = $t(),
                    B = l();
                if (document.activeElement instanceof HTMLElement && ![h, b, B].includes(document.activeElement)) return;
                const me = Dt.includes(c) ? "nextElementSibling" : "previousElementSibling";
                let He = document.activeElement;
                for (let Gt = 0; Gt < m().children.length; Gt++) {
                    if (He = He[me], !He) return;
                    if (He instanceof HTMLButtonElement && ge(He)) break
                }
                He instanceof HTMLButtonElement && He.focus()
            },
            an = (c, h, b) => {
                D(h.allowEscapeKey) && (c.preventDefault(), b(Xn.esc))
            };

        function Mn(c, h, b, B) {
            de() ? ks(c, B) : (mi(b).then(() => ks(c, B)), et(it)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (h.setAttribute("style", "display:none !important"), h.removeAttribute("class"), h.innerHTML = "") : h.remove(), ke() && (Vr(), _i(), Lr()), vn()
        }

        function vn() {
            Lt([document.documentElement, document.body], [Z.shown, Z["height-auto"], Z["no-backdrop"], Z["toast-shown"]])
        }

        function Cn(c) {
            c = Zn(c);
            const h = je.swalPromiseResolve.get(this),
                b = Qn(this);
            this.isAwaitingPromise() ? c.isDismissed || (gt(this), h(c)) : b && h(c)
        }

        function _s() {
            return !!O.awaitingPromise.get(this)
        }
        const Qn = c => {
            const h = be();
            if (!h) return !1;
            const b = O.innerParams.get(c);
            if (!b || Ct(h, b.hideClass.popup)) return !1;
            Lt(h, b.showClass.popup), Je(h, b.hideClass.popup);
            const B = U();
            return Lt(B, b.showClass.backdrop), Je(B, b.hideClass.backdrop), Ss(c, h, b), !0
        };

        function Fr(c) {
            const h = je.swalPromiseReject.get(this);
            gt(this), h && h(c)
        }
        const gt = c => {
                c.isAwaitingPromise() && (O.awaitingPromise.delete(c), O.innerParams.get(c) || c._destroy())
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
                const B = U(),
                    me = mn && pt(h);
                typeof b.willClose == "function" && b.willClose(h), me ? zr(c, h, B, b.returnFocus, b.didClose) : Mn(c, B, b.returnFocus, b.didClose)
            },
            zr = (c, h, b, B, me) => {
                it.swalCloseEventFinishedCallback = Mn.bind(null, c, b, B, me), h.addEventListener(mn, function(He) {
                    He.target === h && (it.swalCloseEventFinishedCallback(), delete it.swalCloseEventFinishedCallback)
                })
            },
            ks = (c, h) => {
                setTimeout(() => {
                    typeof h == "function" && h.bind(c.params)(), c._destroy()
                })
            };

        function ki(c, h, b) {
            const B = O.domCache.get(c);
            h.forEach(me => {
                B[me].disabled = b
            })
        }

        function Ts(c, h) {
            if (!c) return !1;
            if (c.type === "radio") {
                const B = c.parentNode.parentNode.querySelectorAll("input");
                for (let me = 0; me < B.length; me++) B[me].disabled = h
            } else c.disabled = h
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

        function Xi(c) {
            const h = O.domCache.get(this),
                b = O.innerParams.get(this);
            nt(h.validationMessage, c), h.validationMessage.className = Z["validation-message"], b.customClass && b.customClass.validationMessage && Je(h.validationMessage, b.customClass.validationMessage), Y(h.validationMessage);
            const B = this.getInput();
            B && (B.setAttribute("aria-invalid", !0), B.setAttribute("aria-describedby", Z["validation-message"]), bt(B), Je(B, Z.inputerror))
        }

        function zo() {
            const c = O.domCache.get(this);
            c.validationMessage && L(c.validationMessage);
            const h = this.getInput();
            h && (h.removeAttribute("aria-invalid"), h.removeAttribute("aria-describedby"), Lt(h, Z.inputerror))
        }

        function Ho() {
            return O.domCache.get(this).progressSteps
        }

        function Go(c) {
            const h = be(),
                b = O.innerParams.get(this);
            if (!h || Ct(h, b.hideClass.popup)) return d("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const B = Ti(c),
                me = Object.assign({}, b, B);
            Mr(this, me), O.innerParams.set(this, me), Object.defineProperties(this, {
                params: {
                    value: Object.assign({}, this.params, c),
                    writable: !1,
                    enumerable: !0
                }
            })
        }
        const Ti = c => {
            const h = {};
            return Object.keys(c).forEach(b => {
                ae(b) ? h[b] = c[b] : d("Invalid parameter to update: ".concat(b))
            }), h
        };

        function Uo() {
            const c = O.domCache.get(this),
                h = O.innerParams.get(this);
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
                c.isAwaitingPromise() ? (xn(O, c), O.awaitingPromise.set(c, !0)) : (xn(je, c), xn(O, c))
            },
            xn = (c, h) => {
                for (const b in c) c[b].delete(h)
            };
        var Gr = Object.freeze({
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
            disableButtons: Bo,
            enableInput: jo,
            disableInput: Fo,
            showValidationMessage: Xi,
            resetValidationMessage: zo,
            getProgressSteps: Ho,
            update: Go,
            _destroy: Uo
        });
        const Os = c => {
                const h = O.innerParams.get(c);
                c.disableButtons(), h.input ? St(c, "confirm") : Ji(c, !0)
            },
            Rs = c => {
                const h = O.innerParams.get(c);
                c.disableButtons(), h.returnInputValueOnDeny ? St(c, "deny") : dn(c, !1)
            },
            Wo = (c, h) => {
                c.disableButtons(), h(Xn.cancel)
            },
            St = (c, h) => {
                const b = O.innerParams.get(c);
                if (!b.input) {
                    g('The "input" parameter is needed to be set when using returnInputValueOn'.concat(a(h)));
                    return
                }
                const B = w(c, b);
                b.inputValidator ? Yi(c, B, h) : c.getInput().checkValidity() ? h === "deny" ? dn(c, B) : Ji(c, B) : (c.enableButtons(), c.showValidationMessage(b.validationMessage))
            },
            Yi = (c, h, b) => {
                const B = O.innerParams.get(c);
                c.disableInput(), Promise.resolve().then(() => J(B.inputValidator(h, B.validationMessage))).then(He => {
                    c.enableButtons(), c.enableInput(), He ? c.showValidationMessage(He) : b === "deny" ? dn(c, h) : Ji(c, h)
                })
            },
            dn = (c, h) => {
                const b = O.innerParams.get(c || void 0);
                b.showLoaderOnDeny && s($t()), b.preDeny ? (O.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => J(b.preDeny(h, b.validationMessage))).then(me => {
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
                const b = O.innerParams.get(c || void 0);
                b.showLoaderOnConfirm && s(), b.preConfirm ? (c.resetValidationMessage(), O.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => J(b.preConfirm(h, b.validationMessage))).then(me => {
                    ge(Ke()) || me === !1 ? (c.hideLoading(), gt(c)) : yn(c, typeof me > "u" ? h : me)
                }).catch(me => Ki(c || void 0, me))) : yn(c, h)
            },
            qo = (c, h, b) => {
                O.innerParams.get(c).toast ? Xo(c, h, b) : (Ur(h), Ds(h), Qi(c, h, b))
            },
            Xo = (c, h, b) => {
                h.popup.onclick = () => {
                    const B = O.innerParams.get(c);
                    B && (Is(B) || B.timer || B.input) || b(Xn.close)
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
            Ds = c => {
                c.container.onmousedown = () => {
                    c.popup.onmouseup = function(h) {
                        c.popup.onmouseup = void 0, (h.target === c.popup || c.popup.contains(h.target)) && (An = !0)
                    }
                }
            },
            Qi = (c, h, b) => {
                h.container.onclick = B => {
                    const me = O.innerParams.get(c);
                    if (An) {
                        An = !1;
                        return
                    }
                    B.target === h.container && D(me.allowOutsideClick) && b(Xn.backdrop)
                }
            },
            Zi = c => typeof c == "object" && c.jquery,
            er = c => c instanceof Element || Zi(c),
            Yo = c => {
                const h = {};
                return typeof c[0] == "object" && !er(c[0]) ? Object.assign(h, c[0]) : ["title", "html", "icon"].forEach((b, B) => {
                    const me = c[B];
                    typeof me == "string" || er(me) ? h[b] = me : me !== void 0 && g("Unexpected type of ".concat(b, '! Expected "string" or "Element", got ').concat(typeof me))
                }), h
            };

        function tr() {
            const c = this;
            for (var h = arguments.length, b = new Array(h), B = 0; B < h; B++) b[B] = arguments[B];
            return new c(...b)
        }

        function Wr(c) {
            class h extends this {
                _main(B, me) {
                    return super._main(B, Object.assign({}, c, me))
                }
            }
            return h
        }
        const qr = () => it.timeout && it.timeout.getTimerLeft(),
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
            K = c => {
                if (it.timeout) {
                    const h = it.timeout.increase(c);
                    return jt(h, !0), h
                }
            },
            fe = () => it.timeout && it.timeout.isRunning();
        let ne = !1;
        const ve = {};

        function Ee() {
            let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
            ve[c] = this, ne || (document.body.addEventListener("click", Re), ne = !0)
        }
        const Re = c => {
            for (let h = c.target; h && h !== document; h = h.parentNode)
                for (const b in ve) {
                    const B = h.getAttribute(b);
                    if (B) {
                        ve[b].fire({
                            template: B
                        });
                        return
                    }
                }
        };
        var Le = Object.freeze({
            isValidParameter: oe,
            isUpdatableParameter: ae,
            isDeprecatedParameter: ye,
            argsToParams: Yo,
            isVisible: zt,
            clickConfirm: Nt,
            clickDeny: un,
            clickCancel: _t,
            getContainer: U,
            getPopup: be,
            getTitle: he,
            getHtmlContainer: Se,
            getImage: Te,
            getIcon: we,
            getInputLabel: Ut,
            getCloseButton: P,
            getActions: m,
            getConfirmButton: dt,
            getDenyButton: $t,
            getCancelButton: l,
            getLoader: _,
            getFooter: S,
            getTimerProgressBar: R,
            getFocusableElements: ie,
            getValidationMessage: Ke,
            isLoading: De,
            fire: tr,
            mixin: Wr,
            showLoading: s,
            enableLoading: s,
            getTimerLeft: qr,
            stopTimer: Ms,
            resumeTimer: I,
            toggleTimer: F,
            increaseTimer: K,
            isTimerRunning: fe,
            bindClickHandler: Ee
        });
        let ze;
        class Ge {
            constructor() {
                if (typeof window > "u") return;
                ze = this;
                for (var h = arguments.length, b = new Array(h), B = 0; B < h; B++) b[B] = arguments[B];
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
                O.promise.set(this, He)
            }
            _main(h) {
                let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                Pe(Object.assign({}, b, h)), it.currentInstance && (it.currentInstance._destroy(), ke() && Lr()), it.currentInstance = ze;
                const B = ht(h, b);
                ws(B), Object.freeze(B), it.timeout && (it.timeout.stop(), delete it.timeout), clearTimeout(it.restoreFocusTimeout);
                const me = At(ze);
                return Mr(ze, B), O.innerParams.set(ze, B), Xe(ze, me, B)
            }
            then(h) {
                return O.promise.get(this).then(h)
            } finally(h) {
                return O.promise.get(this).finally(h)
            }
        }
        const Xe = (c, h, b) => new Promise((B, me) => {
                const He = Gt => {
                    c.closePopup({
                        isDismissed: !0,
                        dismiss: Gt
                    })
                };
                je.swalPromiseResolve.set(c, B), je.swalPromiseReject.set(c, me), h.confirmButton.onclick = () => Os(c), h.denyButton.onclick = () => Rs(c), h.cancelButton.onclick = () => Wo(c, He), h.closeButton.onclick = () => He(Xn.close), qo(c, h, He), on(c, it, b, He), p(c, b), jr(b), qe(it, b, He), Ht(h, b), setTimeout(() => {
                    h.container.scrollTop = 0
                })
            }),
            ht = (c, h) => {
                const b = ko(c),
                    B = Object.assign({}, Q, h, b, c);
                return B.showClass = Object.assign({}, Q.showClass, B.showClass), B.hideClass = Object.assign({}, Q.hideClass, B.hideClass), B
            },
            At = c => {
                const h = {
                    popup: be(),
                    container: U(),
                    actions: m(),
                    confirmButton: dt(),
                    denyButton: $t(),
                    cancelButton: l(),
                    loader: _(),
                    closeButton: P(),
                    validationMessage: Ke(),
                    progressSteps: Be()
                };
                return O.domCache.set(c, h), h
            },
            qe = (c, h, b) => {
                const B = R();
                L(B), h.timer && (c.timeout = new Nr(() => {
                    b("timer"), delete c.timeout
                }, h.timer), h.timerProgressBar && (Y(B), ct(B, h, "timerProgressBar"), setTimeout(() => {
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
        Object.assign(Ge.prototype, Gr), Object.assign(Ge, Le), Object.keys(Gr).forEach(c => {
            Ge[c] = function() {
                if (ze) return ze[c](...arguments)
            }
        }), Ge.DismissReason = Xn, Ge.version = "11.4.26";
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
})(Yu);
const Rn = Yu.exports;
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
        const n = new URL("main/pp3/triviadeath/assets/8cdd50e7.png", self.location).href,
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
                i = Li().width,
                a = Li().height,
                d = Math.max(i / e, a / n);
            this.width = i, this.height = a, this.finalWidth = e * d, this.finalHeight = n * d, this.offsetX = .5 * (i - this.finalWidth), this.offsetY = .5 * (a - this.finalHeight), this.dy = this.transmitting ? Math.min(-100, this.dy) : 0, this.ddy = this.transmitting ? -1200 : 0, this.transmitting || (this.y = 0), this.advance(t)
        },
        render() {
            if (console.log("render"), !this.video) return;
            const t = vo();
            t.save(), t.translate(this.x, this.y), this.preview ? t.drawImage(this.preview, 0, 0) : this.mirror ? (t.scale(-1, 1), t.drawImage(this.video, this.offsetX - Li().width, this.offsetY, this.finalWidth, this.finalHeight)) : t.drawImage(this.video, this.offsetX, this.offsetY, this.finalWidth, this.finalHeight), t.restore(), !this.preview && this.mask && this.image && (t.scale(1, 1), t.drawImage(this.image, this.x, this.y, Li().width, Li().height))
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
                g = Math.min(a / t, d / e),
                E = t * g,
                k = e * g;
            n.style.width = `${E}px`, n.style.height = `${k}px`, n.width = E, n.height = k
        }
    }),
    oi = ot.Model.extend({
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
    CC = oi.extend({
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
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><image x="12" y="20" width="41" height="39" xlink:href="main/pp3/triviadeath/assets/5f12600b.png"/></svg>\r
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
        const g = this.smoothedMouseX - this.lastSmoothedMouse.x,
            E = this.smoothedMouseY - this.lastSmoothedMouse.y,
            k = Math.sqrt(g * g + E * E);
        let A;
        k !== 0 ? A = Math.PI / 2 + Math.atan2(E, g) : A = 0;
        const D = this.options.minThickness * e + this.options.thicknessFactor * k,
            V = this.lastThickness + this.options.thicknessSmoothingFactor * (D - this.lastThickness);
        this.lastRotation === void 0 && (this.lastRotation = A);
        const J = this.lastRotation !== null ? Math.sin(this.lastRotation) : Math.sin(A),
            q = this.lastRotation !== null ? Math.cos(this.lastRotation) : Math.sin(A),
            G = Math.sin(A),
            Q = Math.cos(A),
            v = this.lastThickness * J,
            M = this.lastThickness * q,
            W = V * G,
            oe = V * Q,
            ae = .33 * k * J,
            ye = -.33 * k * q,
            f = this.lastSmoothedMouse.x + M + ae,
            _e = this.lastSmoothedMouse.y + v + ye,
            Oe = this.lastSmoothedMouse.x - M + ae,
            Pe = this.lastSmoothedMouse.y - v + ye;
        this.canvasCTX.beginPath(), this.canvasCTX.moveTo(this.lastSmoothedMouse.x + M, this.lastSmoothedMouse.y + v), this.canvasCTX.quadraticCurveTo(f, _e, this.smoothedMouseX + oe, this.smoothedMouseY + W), this.canvasCTX.lineTo(this.smoothedMouseX - oe, this.smoothedMouseY - W), this.canvasCTX.quadraticCurveTo(Oe, Pe, this.lastSmoothedMouse.x - M, this.lastSmoothedMouse.y - v), this.canvasCTX.closePath(), this.canvasCTX.fill(), this.canvasCTX.stroke();
        const lt = this.options.tipTaperFactor * V;
        this.tipCanvasCTX.clearRect(0, 0, this.tipCanvasCTX.canvas.width, this.tipCanvasCTX.canvas.height), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.arc(n, i, lt, 0, 2 * Math.PI, !0), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.moveTo(this.smoothedMouseX + oe, this.smoothedMouseY + W), this.tipCanvasCTX.lineTo(n + this.options.tipTaperFactor * oe, i + this.options.tipTaperFactor * W), this.tipCanvasCTX.lineTo(n - this.options.tipTaperFactor * oe, i - this.options.tipTaperFactor * W), this.tipCanvasCTX.lineTo(this.smoothedMouseX - oe, this.smoothedMouseY - W), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.lastSmoothedMouse = {
            x: this.smoothedMouseX,
            y: this.smoothedMouseY
        }, this.lastRotation = A, this.lastThickness = V, this.lastMouseChangeVector = {
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
        const g = i.getContext("2d");
        return n && (g.fillStyle = n, g.fillRect(0, 0, a, d)), g.drawImage(this.highlighterSketch.canvas, 0, 0, a, d), g.drawImage(this.markerSketch.canvas, 0, 0, a, d), i.toDataURL()
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
                g = this.sketchpad.options.thickness;
            let E = (e.clientX - a.left) * i;
            E = Math.min(d.width - g, Math.max(g, E));
            let k = (e.clientY - a.top) * i;
            return k = Math.min(d.height - g, Math.max(g, k)), {
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
    DC = oi.extend({
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
    MC = Et.View.extend({
        className: "Draw",
        template: at.template(IC),
        model: new DC,
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
            this.promptComponent = this.promptComponent || new $i({}), this.toolbarComponent = this.toolbarComponent || new TC({
                model: new ot.Model({})
            }), this.sketchpadComponent = this.sketchpadComponent || new RC({
                model: new ot.Model
            }), this.buttonsCollection = this.buttonsCollection || new ot.Collection([]), this.buttonsComponent = this.buttonsComponent || new pi({
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
            const t = se("#sketchpad"),
                e = se("#sketchpad canvas")[0];
            if (!e) return;
            const n = parseInt(se(".controller-content").css("border-top-width"), 10) * 2 + se(".playerTopBar").innerHeight() + se("#prompt").innerHeight() + se("#toolbar").innerHeight() + parseInt(se(".canvasContainer").css("border-top-width"), 10) * 2 + se("#buttons").innerHeight() + se("#post-sketchpad").innerHeight() + 10,
                i = parseInt(parseInt(se(".canvasContainer").css("border-left-width"), 10) * 2 || 0 + parseInt(se(".canvasContainer").css("padding-left"), 10) * 2 || 0 + parseInt(se(".Draw").css("padding-left"), 10) * 2 || 0, 10),
                a = e.width,
                d = e.height,
                g = 2,
                E = Math.min(t.width() - i, a * g),
                k = Math.max(se("#controller-container").innerHeight() - n, 250),
                A = Math.min(E / a, k / d),
                D = a * A,
                V = d * A;
            e.style.width = `${D}px`, e.style.height = `${V}px`, window.scrollTo(0, 0)
        }
    }),
    LC = `<div>
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
    PC = oi.extend({
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
        template: at.template(LC),
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
            this.currentEntry = null, this.shouldSubmit = !1, this.promptComponent = new $i({
                model: new ot.Model({
                    text: "",
                    className: ""
                })
            }), this.inputComponent = this.inputComponent || new to({
                model: new ot.Model({})
            }), this.buttonsCollection = this.buttonsCollection || new ot.Collection([{
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
            this.update().catch(this.caughtError), se(".gallery-link").click(this.artifactClicked.bind(this)), this.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(20 * 1e3)
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
            ri.setAsViewed(0)
        },
        showScreen(t, e) {
            const n = se(t);
            return this.activeScreen && t === this.activeScreen || (this.activeScreen && (se(this.activeScreen).fadeOut("fast", () => {}), se(this.activeScreen).show(), se(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", () => {
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
            const t = se("#player").outerHeight(!0) || 0,
                e = ni.isVisible ? se("#slide-in-banner").outerHeight(!0) : 0,
                n = se(window).width(),
                i = se(window).height() - t;
            se(`.${this.getOption("appTag")}-page`).css("height", i - e), se(`.${this.getOption("appTag")}-page`).attr("height", i - e), se(`.${this.getOption("appTag")}-page`).css("top", t), se(`.${this.getOption("appTag")}-page`).css("width", n), se(`.${this.getOption("appTag")}-page`).attr("width", n)
        }
    }),
    $C = `<div id="controller" class="state-controller controller-content">
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
    BC = oi.extend({
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
        template: at.template($C),
        model: new BC,
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
            }), this.choicesListView = this.choicesListView || new pi, this.charactersListView = new Et.CollectionView({
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
            }), ri.setAsViewed(0)
        },
        async onButtonClick(t) {
            const e = this;
            t.preventDefault();
            const i = se(t.currentTarget).data("action");
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
                            inputValidator: d => d ? d.length > 12 ? "Limit 12 characters" : null : "You need to write something!"
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
                                    collection: new ot.Collection
                                }),
                                d = [{
                                    type: "text",
                                    className: "prompt",
                                    html: e.model.get("strings").censor_prompt
                                }, ...e.model.get("censorablePlayers").map(g => ({
                                    action: "censorConfirm",
                                    html: g.name,
                                    key: g.id
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
    zC = `<div id="image" class="logo logo-image"></div>
<div id="message" class="message"><h2 class="messageText"></h2></div>
<div id="action" class="action"></div>
<div id="artifactId" class="artifactContainer text">
    <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank">
        <button id="artifactButton" class="artifactButton"></button>
    </a>
</div>
`,
    HC = oi.extend({
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
            }), ri.setAsViewed(0)
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
    UC = `<div id="player" class="playerTopBar">
    <div id="playericon" class="playerIcon"></div>
    <div id="playername" class="playerName controller-text"></div>
</div>`,
    WC = Et.View.extend({
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
    qC = `<div id="controller" class="state-controller controller-content">
    <div id="prompt" class="prompt text"></div>
    <div class="error text-danger"></div>
    <div id="choicesRegion"></div>
    <div id="chosen" class="chosen text"></div>
    <div class="makeSingleChoiceDone">
        <span class="doneText"></span>
    </div>
</div>`,
    XC = oi.extend({
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
    YC = Et.View.extend({
        className: "MakeSingleChoice scrollable",
        template: at.template(qC),
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
            this.promptComponent = this.promptComponent || new $i({
                model: new ot.Model
            }), this.choicesList = this.choicesList || new pi({
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
                const d = this.choicesList.children.find(g => g.model.get("index") === a);
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

function si() {
    return si = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }, si.apply(this, arguments)
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
var ai = ii(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
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
    t.addEventListener(e, n, !ai && Zu)
}

function wt(t, e, n) {
    t.removeEventListener(e, n, !ai && Zu)
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

function Bn(t, e, n, i) {
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

function Yt(t, e, n, i, a) {
    if (!(!t.getBoundingClientRect && t !== window)) {
        var d, g, E, k, A, D, V;
        if (t !== window && t.parentNode && t !== Fn() ? (d = t.getBoundingClientRect(), g = d.top, E = d.left, k = d.bottom, A = d.right, D = d.height, V = d.width) : (g = 0, E = 0, k = window.innerHeight, A = window.innerWidth, D = window.innerHeight, V = window.innerWidth), (e || n) && t !== window && (a = a || t.parentNode, !ai))
            do
                if (a && a.getBoundingClientRect && (tt(a, "transform") !== "none" || n && tt(a, "position") !== "static")) {
                    var J = a.getBoundingClientRect();
                    g -= J.top + parseInt(tt(a, "border-top-width")), E -= J.left + parseInt(tt(a, "border-left-width")), k = g + d.height, A = E + d.width;
                    break
                } while (a = a.parentNode);
        if (i && t !== window) {
            var q = pr(a || t),
                G = q && q.a,
                Q = q && q.d;
            q && (g /= Q, E /= G, V /= G, D /= Q, k = g + D, A = E + V)
        }
        return {
            top: g,
            left: E,
            bottom: k,
            right: A,
            width: V,
            height: D
        }
    }
}

function hc(t, e, n) {
    for (var i = fi(t, !0), a = Yt(t)[e]; i;) {
        var d = Yt(i)[n],
            g = void 0;
        if (n === "top" || n === "left" ? g = a >= d : g = a <= d, !g) return i;
        if (i === Fn()) break;
        i = fi(i, !1)
    }
    return !1
}

function yr(t, e, n, i) {
    for (var a = 0, d = 0, g = t.children; d < g.length;) {
        if (g[d].style.display !== "none" && g[d] !== Qe.ghost && (i || g[d] !== Qe.dragged) && Bn(g[d], n.draggable, t, !1)) {
            if (a === e) return g[d];
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
                g = a.d;
            e += t.scrollLeft * d, n += t.scrollTop * g
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

function fi(t, e) {
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
                            rect: Yt(a)
                        });
                        var d = zn({}, t[t.length - 1].rect);
                        if (a.thisAnimationDuration) {
                            var g = pr(a, !0);
                            g && (d.top -= g.f, d.left -= g.e)
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
                g = 0;
            t.forEach(function(E) {
                var k = 0,
                    A = E.target,
                    D = A.fromRect,
                    V = Yt(A),
                    J = A.prevFromRect,
                    q = A.prevToRect,
                    G = E.rect,
                    Q = pr(A, !0);
                Q && (V.top -= Q.f, V.left -= Q.e), A.toRect = V, A.thisAnimationDuration && ha(J, V) && !ha(D, V) && (G.top - V.top) / (G.left - V.left) === (D.top - V.top) / (D.left - V.left) && (k = ox(G, J, q, a.options)), ha(V, D) || (A.prevFromRect = D, A.prevToRect = V, k || (k = a.options.animation), a.animate(A, G, V, k)), k && (d = !0, g = Math.max(g, k), clearTimeout(A.animationResetTimer), A.animationResetTimer = setTimeout(function() {
                    A.animationTime = 0, A.prevFromRect = null, A.fromRect = null, A.prevToRect = null, A.thisAnimationDuration = null
                }, k), A.thisAnimationDuration = k)
            }), clearTimeout(e), d ? e = setTimeout(function() {
                typeof i == "function" && i()
            }, g) : typeof i == "function" && i(), t = []
        },
        animate: function(i, a, d, g) {
            if (g) {
                tt(i, "transition", ""), tt(i, "transform", "");
                var E = pr(this.el),
                    k = E && E.a,
                    A = E && E.d,
                    D = (a.left - d.left) / (k || 1),
                    V = (a.top - d.top) / (A || 1);
                i.animatingX = !!D, i.animatingY = !!V, tt(i, "transform", "translate3d(" + D + "px," + V + "px,0)"), this.forRepaintDummy = sx(i), tt(i, "transition", "transform " + g + "ms" + (this.options.easing ? " " + this.options.easing : "")), tt(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
                    tt(i, "transition", ""), tt(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1
                }, g)
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
            rr.forEach(function(g) {
                !n[g.pluginName] || (n[g.pluginName][d] && n[g.pluginName][d](zn({
                    sortable: n
                }, i)), n.options[g.pluginName] && n[g.pluginName][e] && n[g.pluginName][e](zn({
                    sortable: n
                }, i)))
            })
        },
        initializePlugins: function(e, n, i, a) {
            rr.forEach(function(E) {
                var k = E.pluginName;
                if (!(!e.options[k] && !E.initializeByDefault)) {
                    var A = new E(e, n, e.options);
                    A.sortable = e, A.options = e.options, e[k] = A, si(i, A.defaults)
                }
            });
            for (var d in e.options)
                if (!!e.options.hasOwnProperty(d)) {
                    var g = this.modifyOption(e, d, e.options[d]);
                    typeof g < "u" && (e.options[d] = g)
                }
        },
        getEventProperties: function(e, n) {
            var i = {};
            return rr.forEach(function(a) {
                typeof a.eventProperties == "function" && si(i, a.eventProperties.call(n[a.pluginName], e))
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
        g = t.toEl,
        E = t.fromEl,
        k = t.oldIndex,
        A = t.newIndex,
        D = t.oldDraggableIndex,
        V = t.newDraggableIndex,
        J = t.originalEvent,
        q = t.putSortable,
        G = t.extraEventProperties;
    if (e = e || n && n[Sn], !!e) {
        var Q, v = e.options,
            M = "on" + i.charAt(0).toUpperCase() + i.substr(1);
        window.CustomEvent && !ai && !fs ? Q = new CustomEvent(i, {
            bubbles: !0,
            cancelable: !0
        }) : (Q = document.createEvent("Event"), Q.initEvent(i, !0, !0)), Q.to = g || n, Q.from = E || n, Q.item = a || n, Q.clone = d, Q.oldIndex = k, Q.newIndex = A, Q.oldDraggableIndex = D, Q.newDraggableIndex = V, Q.originalEvent = J, Q.pullMode = q ? q.lastPutMode : void 0;
        var W = zn(zn({}, G), ps.getEventProperties(i, e));
        for (var oe in W) Q[oe] = W[oe];
        n && n.dispatchEvent(Q), v[M] && v[M].call(e, Q)
    }
}
var lx = ["evt"],
    wn = function(e, n) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            a = i.evt,
            d = QC(i, lx);
        ps.pluginEvent.bind(Qe)(e, n, zn({
            dragEl: Ie,
            parentEl: Bt,
            ghostEl: ut,
            rootEl: Pt,
            nextEl: Di,
            lastDownEl: Ws,
            cloneEl: Vt,
            cloneHidden: hi,
            dragStarted: Qr,
            putSortable: en,
            activeSortable: Qe.active,
            originalEvent: a,
            oldIndex: cr,
            oldDraggableIndex: as,
            newIndex: _n,
            newDraggableIndex: ui,
            hideGhostForTarget: ah,
            unhideGhostForTarget: lh,
            cloneNowHidden: function() {
                hi = !0
            },
            cloneNowShown: function() {
                hi = !1
            },
            dispatchSortableEvent: function(E) {
                gn({
                    sortable: n,
                    name: E,
                    originalEvent: a
                })
            }
        }, d))
    };

function gn(t) {
    ax(zn({
        putSortable: en,
        cloneEl: Vt,
        targetEl: Ie,
        rootEl: Pt,
        oldIndex: cr,
        oldDraggableIndex: as,
        newIndex: _n,
        newDraggableIndex: ui
    }, t))
}
var Ie, Bt, ut, Pt, Di, Ws, Vt, hi, cr, _n, as, ui, Bs, en, lr = !1,
    io = !1,
    ro = [],
    Oi, Ln, fa, pa, fc, pc, Qr, sr, ls, cs = !1,
    js = !1,
    qs, ln, ga = [],
    Da = !1,
    so = [],
    wo = typeof document < "u",
    Fs = Ju,
    gc = fs || ai ? "cssFloat" : "float",
    cx = wo && !Qu && !Ju && "draggable" in document.createElement("div"),
    rh = function() {
        if (!!wo) {
            if (ai) return !1;
            var t = document.createElement("x");
            return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto"
        }
    }(),
    sh = function(e, n) {
        var i = tt(e),
            a = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth),
            d = yr(e, 0, n),
            g = yr(e, 1, n),
            E = d && tt(d),
            k = g && tt(g),
            A = E && parseInt(E.marginLeft) + parseInt(E.marginRight) + Yt(d).width,
            D = k && parseInt(k.marginLeft) + parseInt(k.marginRight) + Yt(g).width;
        if (i.display === "flex") return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
        if (i.display === "grid") return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (d && E.float && E.float !== "none") {
            var V = E.float === "left" ? "left" : "right";
            return g && (k.clear === "both" || k.clear === V) ? "vertical" : "horizontal"
        }
        return d && (E.display === "block" || E.display === "flex" || E.display === "table" || E.display === "grid" || A >= a && i[gc] === "none" || g && i[gc] === "none" && A + D > a) ? "vertical" : "horizontal"
    },
    ux = function(e, n, i) {
        var a = i ? e.left : e.top,
            d = i ? e.right : e.bottom,
            g = i ? e.width : e.height,
            E = i ? n.left : n.top,
            k = i ? n.right : n.bottom,
            A = i ? n.width : n.height;
        return a === E || d === k || a + g / 2 === E + A / 2
    },
    hx = function(e, n) {
        var i;
        return ro.some(function(a) {
            var d = a[Sn].options.emptyInsertThreshold;
            if (!(!d || ul(a))) {
                var g = Yt(a),
                    E = e >= g.left - d && e <= g.right + d,
                    k = n >= g.top - d && n <= g.bottom + d;
                if (E && k) return i = a
            }
        }), i
    },
    oh = function(e) {
        function n(d, g) {
            return function(E, k, A, D) {
                var V = E.options.group.name && k.options.group.name && E.options.group.name === k.options.group.name;
                if (d == null && (g || V)) return !0;
                if (d == null || d === !1) return !1;
                if (g && d === "clone") return d;
                if (typeof d == "function") return n(d(E, k, A, D), g)(E, k, A, D);
                var J = (g ? E : k).options.group.name;
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
wo && !Qu && document.addEventListener("click", function(t) {
    if (io) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), io = !1, !1
}, !0);
var Ri = function(e) {
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
    this.el = t, this.options = e = si({}, e), t[Sn] = this;
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
        setData: function(g, E) {
            g.setData("Text", E.textContent)
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
    this.nativeDraggable = e.forceFallback ? !1 : cx, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? xt(t, "pointerdown", this._onTapStart) : (xt(t, "mousedown", this._onTapStart), xt(t, "touchstart", this._onTapStart)), this.nativeDraggable && (xt(t, "dragover", this), xt(t, "dragenter", this)), ro.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), si(this, rx())
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
                g = e.type,
                E = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e,
                k = (E || e).target,
                A = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || k,
                D = a.filter;
            if (bx(i), !Ie && !(/mousedown|pointerdown/.test(g) && e.button !== 0 || a.disabled) && !A.isContentEditable && !(!this.nativeDraggable && ss && k && k.tagName.toUpperCase() === "SELECT") && (k = Bn(k, a.draggable, i, !1), !(k && k.animated) && Ws !== k)) {
                if (cr = On(k), as = On(k, a.draggable), typeof D == "function") {
                    if (D.call(this, e, k, this)) {
                        gn({
                            sortable: n,
                            rootEl: A,
                            name: "filter",
                            targetEl: k,
                            toEl: i,
                            fromEl: i
                        }), wn("filter", n, {
                            evt: e
                        }), d && e.cancelable && e.preventDefault();
                        return
                    }
                } else if (D && (D = D.split(",").some(function(V) {
                        if (V = Bn(A, V.trim(), i, !1), V) return gn({
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
                    d && e.cancelable && e.preventDefault();
                    return
                }
                a.handle && !Bn(A, a.handle, i, !1) || this._prepareDragStart(e, E, k)
            }
        }
    },
    _prepareDragStart: function(e, n, i) {
        var a = this,
            d = a.el,
            g = a.options,
            E = d.ownerDocument,
            k;
        if (i && !Ie && i.parentNode === d) {
            var A = Yt(i);
            if (Pt = d, Ie = i, Bt = Ie.parentNode, Di = Ie.nextSibling, Ws = i, Bs = g.group, Qe.dragged = Ie, Oi = {
                    target: Ie,
                    clientX: (n || e).clientX,
                    clientY: (n || e).clientY
                }, fc = Oi.clientX - A.left, pc = Oi.clientY - A.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, Ie.style["will-change"] = "all", k = function() {
                    if (wn("delayEnded", a, {
                            evt: e
                        }), Qe.eventCanceled) {
                        a._onDrop();
                        return
                    }
                    a._disableDelayedDragEvents(), !cc && a.nativeDraggable && (Ie.draggable = !0), a._triggerDragStart(e, n), gn({
                        sortable: a,
                        name: "choose",
                        originalEvent: e
                    }), En(Ie, g.chosenClass, !0)
                }, g.ignore.split(",").forEach(function(D) {
                    eh(Ie, D.trim(), ma)
                }), xt(E, "dragover", Ri), xt(E, "mousemove", Ri), xt(E, "touchmove", Ri), xt(E, "mouseup", a._onDrop), xt(E, "touchend", a._onDrop), xt(E, "touchcancel", a._onDrop), cc && this.nativeDraggable && (this.options.touchStartThreshold = 4, Ie.draggable = !0), wn("delayStart", this, {
                    evt: e
                }), g.delay && (!g.delayOnTouchOnly || n) && (!this.nativeDraggable || !(fs || ai))) {
                if (Qe.eventCanceled) {
                    this._onDrop();
                    return
                }
                xt(E, "mouseup", a._disableDelayedDrag), xt(E, "touchend", a._disableDelayedDrag), xt(E, "touchcancel", a._disableDelayedDrag), xt(E, "mousemove", a._delayedDragTouchMoveHandler), xt(E, "touchmove", a._delayedDragTouchMoveHandler), g.supportPointer && xt(E, "pointermove", a._delayedDragTouchMoveHandler), a._dragStartTimer = setTimeout(k, g.delay)
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
        if (Ln) {
            this._lastX = Ln.clientX, this._lastY = Ln.clientY, ah();
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
            lh()
        }
    },
    _onTouchMove: function(e) {
        if (Oi) {
            var n = this.options,
                i = n.fallbackTolerance,
                a = n.fallbackOffset,
                d = e.touches ? e.touches[0] : e,
                g = ut && pr(ut, !0),
                E = ut && g && g.a,
                k = ut && g && g.d,
                A = Fs && ln && dc(ln),
                D = (d.clientX - Oi.clientX + a.x) / (E || 1) + (A ? A[0] - ga[0] : 0) / (E || 1),
                V = (d.clientY - Oi.clientY + a.y) / (k || 1) + (A ? A[1] - ga[1] : 0) / (k || 1);
            if (!Qe.active && !lr) {
                if (i && Math.max(Math.abs(d.clientX - this._lastX), Math.abs(d.clientY - this._lastY)) < i) return;
                this._onDragStart(e, !0)
            }
            if (ut) {
                g ? (g.e += D - (fa || 0), g.f += V - (pa || 0)) : g = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: D,
                    f: V
                };
                var J = "matrix(".concat(g.a, ",").concat(g.b, ",").concat(g.c, ",").concat(g.d, ",").concat(g.e, ",").concat(g.f, ")");
                tt(ut, "webkitTransform", J), tt(ut, "mozTransform", J), tt(ut, "msTransform", J), tt(ut, "transform", J), fa = D, pa = V, Ln = d
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
                ln !== document.body && ln !== document.documentElement ? (ln === document && (ln = Fn()), n.top += ln.scrollTop, n.left += ln.scrollLeft) : ln = Fn(), ga = dc(ln)
            }
            ut = Ie.cloneNode(!0), En(ut, i.ghostClass, !1), En(ut, i.fallbackClass, !0), En(ut, i.dragClass, !0), tt(ut, "transition", ""), tt(ut, "transform", ""), tt(ut, "box-sizing", "border-box"), tt(ut, "margin", 0), tt(ut, "top", n.top), tt(ut, "left", n.left), tt(ut, "width", n.width), tt(ut, "height", n.height), tt(ut, "opacity", "0.8"), tt(ut, "position", Fs ? "absolute" : "fixed"), tt(ut, "zIndex", "100000"), tt(ut, "pointerEvents", "none"), Qe.ghost = ut, e.appendChild(ut), tt(ut, "transform-origin", fc / parseInt(ut.style.width) * 100 + "% " + pc / parseInt(ut.style.height) * 100 + "%")
        }
    },
    _onDragStart: function(e, n) {
        var i = this,
            a = e.dataTransfer,
            d = i.options;
        if (wn("dragStart", this, {
                evt: e
            }), Qe.eventCanceled) {
            this._onDrop();
            return
        }
        wn("setupClone", this), Qe.eventCanceled || (Vt = ih(Ie), Vt.removeAttribute("id"), Vt.draggable = !1, Vt.style["will-change"] = "", this._hideClone(), En(Vt, this.options.chosenClass, !1), Qe.clone = Vt), i.cloneId = Xs(function() {
            wn("clone", i), !Qe.eventCanceled && (i.options.removeCloneOnHide || Pt.insertBefore(Vt, Ie), i._hideClone(), gn({
                sortable: i,
                name: "clone"
            }))
        }), !n && En(Ie, d.dragClass, !0), n ? (io = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (wt(document, "mouseup", i._onDrop), wt(document, "touchend", i._onDrop), wt(document, "touchcancel", i._onDrop), a && (a.effectAllowed = "move", d.setData && d.setData.call(i, a, Ie)), xt(document, "drop", i), tt(Ie, "transform", "translateZ(0)")), lr = !0, i._dragStartId = Xs(i._dragStarted.bind(i, n, e)), xt(document, "selectstart", i), Qr = !0, ss && tt(document.body, "user-select", "none")
    },
    _onDragOver: function(e) {
        var n = this.el,
            i = e.target,
            a, d, g, E = this.options,
            k = E.group,
            A = Qe.active,
            D = Bs === k,
            V = E.sort,
            J = en || A,
            q, G = this,
            Q = !1;
        if (Da) return;

        function v(we, he) {
            wn(we, G, zn({
                evt: e,
                isOwner: D,
                axis: q ? "vertical" : "horizontal",
                revert: g,
                dragRect: a,
                targetRect: d,
                canSort: V,
                fromSortable: J,
                target: i,
                completed: W,
                onMove: function(Te, Be) {
                    return zs(Pt, n, Ie, a, Te, Yt(Te), e, Be)
                },
                changed: oe
            }, he))
        }

        function M() {
            v("dragOverAnimationCapture"), G.captureAnimationState(), G !== J && J.captureAnimationState()
        }

        function W(we) {
            return v("dragOverCompleted", {
                insertion: we
            }), we && (D ? A._hideClone() : A._showClone(G), G !== J && (En(Ie, en ? en.options.ghostClass : A.options.ghostClass, !1), En(Ie, E.ghostClass, !0)), en !== G && G !== Qe.active ? en = G : G === Qe.active && en && (en = null), J === G && (G._ignoreWhileAnimating = i), G.animateAll(function() {
                v("dragOverAnimationComplete"), G._ignoreWhileAnimating = null
            }), G !== J && (J.animateAll(), J._ignoreWhileAnimating = null)), (i === Ie && !Ie.animated || i === n && !i.animated) && (sr = null), !E.dragoverBubble && !e.rootEl && i !== document && (Ie.parentNode[Sn]._isOutsideThisEl(e.target), !we && Ri(e)), !E.dragoverBubble && e.stopPropagation && e.stopPropagation(), Q = !0
        }

        function oe() {
            _n = On(Ie), ui = On(Ie, E.draggable), gn({
                sortable: G,
                name: "change",
                toEl: n,
                newIndex: _n,
                newDraggableIndex: ui,
                originalEvent: e
            })
        }
        if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), i = Bn(i, E.draggable, n, !0), v("dragOver"), Qe.eventCanceled) return Q;
        if (Ie.contains(e.target) || i.animated && i.animatingX && i.animatingY || G._ignoreWhileAnimating === i) return W(!1);
        if (io = !1, A && !E.disabled && (D ? V || (g = Bt !== Pt) : en === this || (this.lastPutMode = Bs.checkPull(this, A, Ie, e)) && k.checkPut(this, A, Ie, e))) {
            if (q = this._getDirection(e, i) === "vertical", a = Yt(Ie), v("dragOverValid"), Qe.eventCanceled) return Q;
            if (g) return Bt = Pt, M(), this._hideClone(), v("revert"), Qe.eventCanceled || (Di ? Pt.insertBefore(Ie, Di) : Pt.appendChild(Ie)), W(!0);
            var ae = ul(n, E.draggable);
            if (!ae || mx(e, q, this) && !ae.animated) {
                if (ae === Ie) return W(!1);
                if (ae && n === e.target && (i = ae), i && (d = Yt(i)), zs(Pt, n, Ie, a, i, d, e, !!i) !== !1) return M(), ae && ae.nextSibling ? n.insertBefore(Ie, ae.nextSibling) : n.appendChild(Ie), Bt = n, oe(), W(!0)
            } else if (ae && gx(e, q, this)) {
                var ye = yr(n, 0, E, !0);
                if (ye === Ie) return W(!1);
                if (i = ye, d = Yt(i), zs(Pt, n, Ie, a, i, d, e, !1) !== !1) return M(), n.insertBefore(Ie, ye), Bt = n, oe(), W(!0)
            } else if (i.parentNode === n) {
                d = Yt(i);
                var f = 0,
                    _e, Oe = Ie.parentNode !== n,
                    Pe = !ux(Ie.animated && Ie.toRect || a, i.animated && i.toRect || d, q),
                    lt = q ? "top" : "left",
                    $e = hc(i, "top", "top") || hc(Ie, "top", "top"),
                    Z = $e ? $e.scrollTop : void 0;
                sr !== i && (_e = d[lt], cs = !1, js = !Pe && E.invertSwap || Oe), f = vx(e, i, d, q, Pe ? 1 : E.swapThreshold, E.invertedSwapThreshold == null ? E.swapThreshold : E.invertedSwapThreshold, js, sr === i);
                var Fe;
                if (f !== 0) {
                    var U = On(Ie);
                    do U -= f, Fe = Bt.children[U]; while (Fe && (tt(Fe, "display") === "none" || Fe === ut))
                }
                if (f === 0 || Fe === i) return W(!1);
                sr = i, ls = f;
                var le = i.nextElementSibling,
                    Ae = !1;
                Ae = f === 1;
                var be = zs(Pt, n, Ie, a, i, d, e, Ae);
                if (be !== !1) return (be === 1 || be === -1) && (Ae = be === 1), Da = !0, setTimeout(px, 30), M(), Ae && !le ? n.appendChild(Ie) : i.parentNode.insertBefore(Ie, Ae ? le : i), $e && nh($e, 0, Z - $e.scrollTop), Bt = Ie.parentNode, _e !== void 0 && !js && (qs = Math.abs(_e - Yt(i)[lt])), oe(), W(!0)
            }
            if (n.contains(Ie)) return W(!1)
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
        if (_n = On(Ie), ui = On(Ie, i.draggable), wn("drop", this, {
                evt: e
            }), Bt = Ie && Ie.parentNode, _n = On(Ie), ui = On(Ie, i.draggable), Qe.eventCanceled) {
            this._nulling();
            return
        }
        lr = !1, js = !1, cs = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Ma(this.cloneId), Ma(this._dragStartId), this.nativeDraggable && (wt(document, "drop", this), wt(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ss && tt(document.body, "user-select", ""), tt(Ie, "transform", ""), e && (Qr && (e.cancelable && e.preventDefault(), !i.dropBubble && e.stopPropagation()), ut && ut.parentNode && ut.parentNode.removeChild(ut), (Pt === Bt || en && en.lastPutMode !== "clone") && Vt && Vt.parentNode && Vt.parentNode.removeChild(Vt), Ie && (this.nativeDraggable && wt(Ie, "dragend", this), ma(Ie), Ie.style["will-change"] = "", Qr && !lr && En(Ie, en ? en.options.ghostClass : this.options.ghostClass, !1), En(Ie, this.options.chosenClass, !1), gn({
            sortable: this,
            name: "unchoose",
            toEl: Bt,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: e
        }), Pt !== Bt ? (_n >= 0 && (gn({
            rootEl: Bt,
            name: "add",
            toEl: Bt,
            fromEl: Pt,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "remove",
            toEl: Bt,
            originalEvent: e
        }), gn({
            rootEl: Bt,
            name: "sort",
            toEl: Bt,
            fromEl: Pt,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "sort",
            toEl: Bt,
            originalEvent: e
        })), en && en.save()) : _n !== cr && _n >= 0 && (gn({
            sortable: this,
            name: "update",
            toEl: Bt,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "sort",
            toEl: Bt,
            originalEvent: e
        })), Qe.active && ((_n == null || _n === -1) && (_n = cr, ui = as), gn({
            sortable: this,
            name: "end",
            toEl: Bt,
            originalEvent: e
        }), this.save()))), this._nulling()
    },
    _nulling: function() {
        wn("nulling", this), Pt = Ie = Bt = ut = Di = Vt = Ws = hi = Oi = Ln = Qr = _n = ui = cr = as = sr = ls = en = Bs = Qe.dragged = Qe.ghost = Qe.clone = Qe.active = null, so.forEach(function(e) {
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
        for (var e = [], n, i = this.el.children, a = 0, d = i.length, g = this.options; a < d; a++) n = i[a], Bn(n, g.draggable, this.el, !1) && e.push(n.getAttribute(g.dataIdAttr) || wx(n));
        return e
    },
    sort: function(e, n) {
        var i = {},
            a = this.el;
        this.toArray().forEach(function(d, g) {
            var E = a.children[g];
            Bn(E, this.options.draggable, a, !1) && (i[d] = E)
        }, this), n && this.captureAnimationState(), e.forEach(function(d) {
            i[d] && (a.removeChild(i[d]), a.appendChild(i[d]))
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
        var a = ps.modifyOption(this, e, n);
        typeof a < "u" ? i[e] = a : i[e] = n, e === "group" && oh(i)
    },
    destroy: function() {
        wn("destroy", this);
        var e = this.el;
        e[Sn] = null, wt(e, "mousedown", this._onTapStart), wt(e, "touchstart", this._onTapStart), wt(e, "pointerdown", this._onTapStart), this.nativeDraggable && (wt(e, "dragover", this), wt(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
            n.removeAttribute("draggable")
        }), this._onDrop(), this._disableDelayedDragEvents(), ro.splice(ro.indexOf(this.el), 1), this.el = e = null
    },
    _hideClone: function() {
        if (!hi) {
            if (wn("hideClone", this), Qe.eventCanceled) return;
            tt(Vt, "display", "none"), this.options.removeCloneOnHide && Vt.parentNode && Vt.parentNode.removeChild(Vt), hi = !0
        }
    },
    _showClone: function(e) {
        if (e.lastPutMode !== "clone") {
            this._hideClone();
            return
        }
        if (hi) {
            if (wn("showClone", this), Qe.eventCanceled) return;
            Ie.parentNode == Pt && !this.options.group.revertClone ? Pt.insertBefore(Vt, Ie) : Di ? Pt.insertBefore(Vt, Di) : Pt.appendChild(Vt), this.options.group.revertClone && this.animate(Ie, Vt), tt(Vt, "display", ""), hi = !1
        }
    }
};

function fx(t) {
    t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault()
}

function zs(t, e, n, i, a, d, g, E) {
    var k, A = t[Sn],
        D = A.options.onMove,
        V;
    return window.CustomEvent && !ai && !fs ? k = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
    }) : (k = document.createEvent("Event"), k.initEvent("move", !0, !0)), k.to = e, k.from = t, k.dragged = n, k.draggedRect = i, k.related = a || e, k.relatedRect = d || Yt(e), k.willInsertAfter = E, k.originalEvent = g, t.dispatchEvent(k), D && (V = D.call(A, k, g)), V
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

function vx(t, e, n, i, a, d, g, E) {
    var k = i ? t.clientY : t.clientX,
        A = i ? n.height : n.width,
        D = i ? n.top : n.left,
        V = i ? n.bottom : n.right,
        J = !1;
    if (!g) {
        if (E && qs < A * a) {
            if (!cs && (ls === 1 ? k > D + A * d / 2 : k < V - A * d / 2) && (cs = !0), cs) J = !0;
            else if (ls === 1 ? k < D + qs : k > V - qs) return -ls
        } else if (k > D + A * (1 - a) / 2 && k < V - A * (1 - a) / 2) return yx(e)
    }
    return J = J || g, J && (k < D + A * d / 2 || k > V - A * d / 2) ? k > D + A / 2 ? 1 : -1 : 0
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

function Ma(t) {
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
    extend: nx,
    throttle: th,
    closest: Bn,
    toggleClass: En,
    clone: ih,
    index: On,
    nextTick: Xs,
    cancelNextTick: Ma,
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
    Zr, La, Pa = !1,
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
            this.sortable.nativeDraggable ? wt(document, "dragover", this._handleAutoScroll) : (wt(document, "pointermove", this._handleFallbackAutoScroll), wt(document, "touchmove", this._handleFallbackAutoScroll), wt(document, "mousemove", this._handleFallbackAutoScroll)), mc(), Ys(), ix()
        },
        nulling: function() {
            oo = La = Zr = Pa = es = va = ya = null, Wt.length = 0
        },
        _handleFallbackAutoScroll: function(n) {
            this._handleAutoScroll(n, !0)
        },
        _handleAutoScroll: function(n, i) {
            var a = this,
                d = (n.touches ? n.touches[0] : n).clientX,
                g = (n.touches ? n.touches[0] : n).clientY,
                E = document.elementFromPoint(d, g);
            if (oo = n, i || this.options.forceAutoScrollFallback || fs || ai || ss) {
                wa(n, this.options, E, i);
                var k = fi(E, !0);
                Pa && (!es || d !== va || g !== ya) && (es && mc(), es = setInterval(function() {
                    var A = fi(document.elementFromPoint(d, g), !0);
                    A !== k && (k = A, Ys()), wa(n, a.options, A, i)
                }, 10), va = d, ya = g)
            } else {
                if (!this.options.bubbleScroll || fi(E, !0) === Fn()) {
                    Ys();
                    return
                }
                wa(n, this.options, fi(E, !1), !1)
            }
        }
    }, si(t, {
        pluginName: "scroll",
        initializeByDefault: !0
    })
}

function Ys() {
    Wt.forEach(function(t) {
        clearInterval(t.pid)
    }), Wt = []
}

function mc() {
    clearInterval(es)
}
var wa = th(function(t, e, n, i) {
        if (!!e.scroll) {
            var a = (t.touches ? t.touches[0] : t).clientX,
                d = (t.touches ? t.touches[0] : t).clientY,
                g = e.scrollSensitivity,
                E = e.scrollSpeed,
                k = Fn(),
                A = !1,
                D;
            La !== n && (La = n, Ys(), Zr = e.scroll, D = e.scrollFn, Zr === !0 && (Zr = fi(n, !0)));
            var V = 0,
                J = Zr;
            do {
                var q = J,
                    G = Yt(q),
                    Q = G.top,
                    v = G.bottom,
                    M = G.left,
                    W = G.right,
                    oe = G.width,
                    ae = G.height,
                    ye = void 0,
                    f = void 0,
                    _e = q.scrollWidth,
                    Oe = q.scrollHeight,
                    Pe = tt(q),
                    lt = q.scrollLeft,
                    $e = q.scrollTop;
                q === k ? (ye = oe < _e && (Pe.overflowX === "auto" || Pe.overflowX === "scroll" || Pe.overflowX === "visible"), f = ae < Oe && (Pe.overflowY === "auto" || Pe.overflowY === "scroll" || Pe.overflowY === "visible")) : (ye = oe < _e && (Pe.overflowX === "auto" || Pe.overflowX === "scroll"), f = ae < Oe && (Pe.overflowY === "auto" || Pe.overflowY === "scroll"));
                var Z = ye && (Math.abs(W - a) <= g && lt + oe < _e) - (Math.abs(M - a) <= g && !!lt),
                    Fe = f && (Math.abs(v - d) <= g && $e + ae < Oe) - (Math.abs(Q - d) <= g && !!$e);
                if (!Wt[V])
                    for (var U = 0; U <= V; U++) Wt[U] || (Wt[U] = {});
                (Wt[V].vx != Z || Wt[V].vy != Fe || Wt[V].el !== q) && (Wt[V].el = q, Wt[V].vx = Z, Wt[V].vy = Fe, clearInterval(Wt[V].pid), (Z != 0 || Fe != 0) && (A = !0, Wt[V].pid = setInterval(function() {
                    i && this.layer === 0 && Qe.active._onTouchMove(oo);
                    var le = Wt[this.layer].vy ? Wt[this.layer].vy * E : 0,
                        Ae = Wt[this.layer].vx ? Wt[this.layer].vx * E : 0;
                    typeof D == "function" && D.call(Qe.dragged.parentNode[Sn], Ae, le, t, oo, Wt[this.layer].el) !== "continue" || nh(Wt[this.layer].el, Ae, le)
                }.bind({
                    layer: V
                }), 24))), V++
            } while (e.bubbleScroll && J !== k && (J = fi(J, !1)));
            Pa = A
        }
    }, 30),
    ch = function(e) {
        var n = e.originalEvent,
            i = e.putSortable,
            a = e.dragEl,
            d = e.activeSortable,
            g = e.dispatchSortableEvent,
            E = e.hideGhostForTarget,
            k = e.unhideGhostForTarget;
        if (!!n) {
            var A = i || d;
            E();
            var D = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
                V = document.elementFromPoint(D.clientX, D.clientY);
            k(), A && !A.el.contains(V) && (g("spill"), this.onSpill({
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
si(hl, {
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
si(dl, {
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
    Ex = oi.extend({
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
            }), this.lockInView = this.lockInView || new Wu({
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
            this.promptComponent = this.promptComponent || new $i({
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
    Ax = oi.extend({
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
            this.client = t.client, this.promptComponent = this.promptComponent || new $i({
                model: new ot.Model
            }), this.episodesList = this.episodesList || new pi({
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
            }), this.promptsList = this.promptsList || new pi({
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
    Mx = oi.extend({
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
    Lx = Et.View.extend({
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
                return this.setLayout(MC);
            case "EnterSingleText":
                return this.setLayout(NC);
            case "Lobby":
                return this.setLayout(FC);
            case "Logo":
                return this.setLayout(GC);
            case "MakeSingleChoice":
                return this.setLayout(YC);
            case "Shoot":
                return this.setLayout(Lx);
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
        } : i = e || {}, i.isPlayer = this.client.isRole("player"), i.isAudience = this.client.isRole("audience"), i = this.parseBlob(i), !i.state && i.isAudience && (i.state = "Logo"), i.platformId && Zt.set(`platform-${i.platformId}`), i.locale && typeof i.locale == "string" && (this.locale = i.locale), this.model.set({
            blob: i
        })
    },
    update: at.debounce(function() {
        const e = this.model.get("blob");
        !e || (this.willUpdate(), e.playerInfo ? this.playerTopBar.model.set(e.playerInfo) : this.playerTopBar.model.clear(), !this.currentState || this.currentState !== e.state ? (this.updateLayout(), this.currentLayout && this.currentLayout.model.set(e)) : this.currentLayout && this.currentLayout.model.set(e), e.textDescriptions && this.setTextDescriptions(e.textDescriptions), e.artifact && ri.add(e.artifact, this.client.appTag), this.didUpdate())
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
        const t = se(window).width(),
            e = se(window).height();
        se(".content,.controller-page").css({
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

        function d(k, A) {
            for (var D = k.length; D--;)
                if (k[D].listener === A) return D;
            return -1
        }

        function g(k) {
            return function() {
                return this[k].apply(this, arguments)
            }
        }
        i.getListeners = function(A) {
            var D = this._getEvents(),
                V, J;
            if (A instanceof RegExp) {
                V = {};
                for (J in D) D.hasOwnProperty(J) && A.test(J) && (V[J] = D[J])
            } else V = D[A] || (D[A] = []);
            return V
        }, i.flattenListeners = function(A) {
            var D = [],
                V;
            for (V = 0; V < A.length; V += 1) D.push(A[V].listener);
            return D
        }, i.getListenersAsObject = function(A) {
            var D = this.getListeners(A),
                V;
            return D instanceof Array && (V = {}, V[A] = D), V || D
        };

        function E(k) {
            return typeof k == "function" || k instanceof RegExp ? !0 : k && typeof k == "object" ? E(k.listener) : !1
        }
        i.addListener = function(A, D) {
            if (!E(D)) throw new TypeError("listener must be a function");
            var V = this.getListenersAsObject(A),
                J = typeof D == "object",
                q;
            for (q in V) V.hasOwnProperty(q) && d(V[q], D) === -1 && V[q].push(J ? D : {
                listener: D,
                once: !1
            });
            return this
        }, i.on = g("addListener"), i.addOnceListener = function(A, D) {
            return this.addListener(A, {
                listener: D,
                once: !0
            })
        }, i.once = g("addOnceListener"), i.defineEvent = function(A) {
            return this.getListeners(A), this
        }, i.defineEvents = function(A) {
            for (var D = 0; D < A.length; D += 1) this.defineEvent(A[D]);
            return this
        }, i.removeListener = function(A, D) {
            var V = this.getListenersAsObject(A),
                J, q;
            for (q in V) V.hasOwnProperty(q) && (J = d(V[q], D), J !== -1 && V[q].splice(J, 1));
            return this
        }, i.off = g("removeListener"), i.addListeners = function(A, D) {
            return this.manipulateListeners(!1, A, D)
        }, i.removeListeners = function(A, D) {
            return this.manipulateListeners(!0, A, D)
        }, i.manipulateListeners = function(A, D, V) {
            var J, q, G = A ? this.removeListener : this.addListener,
                Q = A ? this.removeListeners : this.addListeners;
            if (typeof D == "object" && !(D instanceof RegExp))
                for (J in D) D.hasOwnProperty(J) && (q = D[J]) && (typeof q == "function" ? G.call(this, J, q) : Q.call(this, J, q));
            else
                for (J = V.length; J--;) G.call(this, D, V[J]);
            return this
        }, i.removeEvent = function(A) {
            var D = typeof A,
                V = this._getEvents(),
                J;
            if (D === "string") delete V[A];
            else if (A instanceof RegExp)
                for (J in V) V.hasOwnProperty(J) && A.test(J) && delete V[J];
            else delete this._events;
            return this
        }, i.removeAllListeners = g("removeEvent"), i.emitEvent = function(A, D) {
            var V = this.getListenersAsObject(A),
                J, q, G, Q, v;
            for (Q in V)
                if (V.hasOwnProperty(Q))
                    for (J = V[Q].slice(0), G = 0; G < J.length; G++) q = J[G], q.once === !0 && this.removeListener(A, q.listener), v = q.listener.apply(this, D || []), v === this._getOnceReturnValue() && this.removeListener(A, q.listener);
            return this
        }, i.trigger = g("emitEvent"), i.emit = function(A) {
            var D = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(A, D)
        }, i.setOnceReturnValue = function(A) {
            return this._onceReturnValue = A, this
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
class Vx extends Nx {
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
                a === "room" || a === "bc:room" || a === "roomBlob" ? (d instanceof Ii.TextEntity && (i.room = d.toBlob()), d instanceof Ii.ObjectEntity && (i.room = d.val)) : a === "player" || a === `player:${this.id}` || a === `bc:customer:${this.userId}` ? (d instanceof Ii.TextEntity && (i.player = d.toBlob()), d instanceof Ii.ObjectEntity && (i.player = d.val)) : a === "audiencePlayer" && (d instanceof Ii.TextEntity && (i.audiencePlayer = d.toBlob()), d instanceof Ii.ObjectEntity && (i.audiencePlayer = d.val))
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
        const g = d;
        i === "room" ? this.emit("client:entityDidChange", i, g) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", g) : i === "bc:room" ? this.emit("client:entityDidChange", "room", g) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", g) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", g) : nc(`[Ecast Client] Unhandled json notification: ${i}`)
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
                const g = (d = (a = this.host) == null ? void 0 : a.id) != null ? d : "1";
                await this.wsClient.mail(g, i)
            } else await this.wsClient.send(n, i)
        } catch (g) {
            console.error(g)
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
const $x = `<div id="content-region" class="content"></div>
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
        caret: function(g, E) {
            var k;
            if (this.length !== 0 && !this.is(":hidden")) return typeof g == "number" ? (E = typeof E == "number" ? E : g, this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(g, E) : this.createTextRange && (k = this.createTextRange(), k.collapse(!0), k.moveEnd("character", E), k.moveStart("character", g), k.select())
            })) : (this[0].setSelectionRange ? (g = this[0].selectionStart, E = this[0].selectionEnd) : document.selection && document.selection.createRange && (k = document.selection.createRange(), g = 0 - k.duplicate().moveStart("character", -1e5), E = g + k.text.length), {
                begin: g,
                end: E
            })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(g, E) {
            var k, A, D, V, J, q, G, Q;
            if (!g && this.length > 0) {
                k = t(this[0]);
                var v = k.data(t.mask.dataName);
                return v ? v() : void 0
            }
            return E = t.extend({
                autoclear: t.mask.autoclear,
                placeholder: t.mask.placeholder,
                completed: null
            }, E), A = t.mask.definitions, D = [], V = G = g.length, J = null, t.each(g.split(""), function(M, W) {
                W == "?" ? (G--, V = M) : A[W] ? (D.push(new RegExp(A[W])), J === null && (J = D.length - 1), V > M && (q = D.length - 1)) : D.push(null)
            }), this.trigger("unmask").each(function() {
                function M() {
                    if (E.completed) {
                        for (var we = J; q >= we; we++)
                            if (D[we] && le[we] === W(we)) return;
                        E.completed.call(U)
                    }
                }

                function W(we) {
                    return E.placeholder.charAt(we < E.placeholder.length ? we : 0)
                }

                function oe(we) {
                    for (; ++we < G && !D[we];);
                    return we
                }

                function ae(we) {
                    for (; --we >= 0 && !D[we];);
                    return we
                }

                function ye(we, he) {
                    var Se, Te;
                    if (!(0 > we)) {
                        for (Se = we, Te = oe(he); G > Se; Se++)
                            if (D[Se]) {
                                if (!(G > Te && D[Se].test(le[Te]))) break;
                                le[Se] = le[Te], le[Te] = W(Te), Te = oe(Te)
                            } Z(), U.caret(Math.max(J, we))
                    }
                }

                function f(we) {
                    var he, Se, Te, Be;
                    for (he = we, Se = W(we); G > he; he++)
                        if (D[he]) {
                            if (Te = oe(he), Be = le[he], le[he] = Se, !(G > Te && D[Te].test(Be))) break;
                            Se = Be
                        }
                }

                function _e() {
                    var we = U.val(),
                        he = U.caret();
                    if (Q && Q.length && Q.length > we.length) {
                        for (Fe(!0); he.begin > 0 && !D[he.begin - 1];) he.begin--;
                        if (he.begin === 0)
                            for (; he.begin < J && !D[he.begin];) he.begin++;
                        U.caret(he.begin, he.begin)
                    } else {
                        for (Fe(!0); he.begin < G && !D[he.begin];) he.begin++;
                        U.caret(he.begin, he.begin)
                    }
                    M()
                }

                function Oe() {
                    Fe(), U.val() != be && U.change()
                }

                function Pe(we) {
                    if (!U.prop("readonly")) {
                        var he, Se, Te, Be = we.which || we.keyCode;
                        Q = U.val(), Be === 8 || Be === 46 || i && Be === 127 ? (he = U.caret(), Se = he.begin, Te = he.end, Te - Se === 0 && (Se = Be !== 46 ? ae(Se) : Te = oe(Se - 1), Te = Be === 46 ? oe(Te) : Te), $e(Se, Te), ye(Se, Te - 1), we.preventDefault()) : Be === 13 ? Oe.call(this, we) : Be === 27 && (U.val(be), U.caret(0, Fe()), we.preventDefault())
                    }
                }

                function lt(we) {
                    if (!U.prop("readonly")) {
                        var he, Se, Te, Be = we.which || we.keyCode,
                            Ke = U.caret();
                        if (!(we.ctrlKey || we.altKey || we.metaKey || 32 > Be) && Be && Be !== 13) {
                            if (Ke.end - Ke.begin !== 0 && ($e(Ke.begin, Ke.end), ye(Ke.begin, Ke.end - 1)), he = oe(Ke.begin - 1), G > he && (Se = String.fromCharCode(Be), D[he].test(Se))) {
                                if (f(he), le[he] = Se, Z(), Te = oe(he), d) {
                                    var dt = function() {
                                        t.proxy(t.fn.caret, U, Te)()
                                    };
                                    setTimeout(dt, 0)
                                } else U.caret(Te);
                                Ke.begin <= q && M()
                            }
                            we.preventDefault()
                        }
                    }
                }

                function $e(we, he) {
                    var Se;
                    for (Se = we; he > Se && G > Se; Se++) D[Se] && (le[Se] = W(Se))
                }

                function Z() {
                    U.val(le.join(""))
                }

                function Fe(we) {
                    var he, Se, Te, Be = U.val(),
                        Ke = -1;
                    for (he = 0, Te = 0; G > he; he++)
                        if (D[he]) {
                            for (le[he] = W(he); Te++ < Be.length;)
                                if (Se = Be.charAt(Te - 1), D[he].test(Se)) {
                                    le[he] = Se, Ke = he;
                                    break
                                } if (Te > Be.length) {
                                $e(he + 1, G);
                                break
                            }
                        } else le[he] === Be.charAt(Te) && Te++, V > he && (Ke = he);
                    return we ? Z() : V > Ke + 1 ? E.autoclear || le.join("") === Ae ? (U.val() && U.val(""), $e(0, G)) : Z() : (Z(), U.val(U.val().substring(0, Ke + 1))), V ? he : J
                }
                var U = t(this),
                    le = t.map(g.split(""), function(we, he) {
                        return we != "?" ? A[we] ? W(he) : we : void 0
                    }),
                    Ae = le.join(""),
                    be = U.val();
                U.data(t.mask.dataName, function() {
                    return t.map(le, function(we, he) {
                        return D[he] && we != W(he) ? we : null
                    }).join("")
                }), U.one("unmask", function() {
                    U.off(".mask").removeData(t.mask.dataName)
                }).on("focus.mask", function() {
                    if (!U.prop("readonly")) {
                        clearTimeout(e);
                        var we;
                        be = U.val(), we = Fe(), e = setTimeout(function() {
                            U.get(0) === document.activeElement && (Z(), we == g.replace("?", "").length ? U.caret(0, we) : U.caret(we))
                        }, 10)
                    }
                }).on("blur.mask", Oe).on("keydown.mask", Pe).on("keypress.mask", lt).on("input.mask paste.mask", function() {
                    U.prop("readonly") || setTimeout(function() {
                        var we = Fe(!0);
                        U.caret(we), M()
                    }, 0)
                }), a && d && U.off("input.mask").on("input.mask", _e), Fe()
            })
        }
    })
});
window.$ = se;
window.jQuery = se;
const Bx = Et.View.extend({
        className: "app-root",
        template: at.template($x),
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
            connect: n => (e = new Ii.WSClient(n), e.connect()),
            mount: n => {
                const i = new Vx(e, n);
                let a = new Et.Application({
                    region: "#app",
                    onStart() {
                        const d = new Bx;
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
    Fx = function(e, n, i, a, d) {
        this.isDrawing = !1, this.isClean = !0, this.isEnabled = !0, this.lines = [], this.canvas = e, this.context = n, this.context.save(), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.restore(), this.widthDiff = i, this.heightDiff = Math.max(a, 200), this.strokestyle = d, typeof this.canvas.style.msTouchAction < "u" && (this.canvas.style.msTouchAction = "none");
        const g = this,
            E = function() {
                let q = window.innerWidth - g.widthDiff,
                    G = window.innerHeight - g.heightDiff;
                G < 25 && (G = 25, q = G * (window.innerWidth / window.innerHeight));
                const Q = q / G,
                    v = g.canvas.width / g.canvas.height;
                v < Q ? (g.canvas.style.height = `${G}px`, g.canvas.style.width = `${G*v}px`) : (g.canvas.style.width = `${q}px`, g.canvas.style.height = `${q*(1/v)}px`), window.scrollTo(0, 1)
            };
        window.onresize = E;
        const k = function(q) {
                if (q.type === "touchmove") q.preventDefault();
                else if (q.type === "touchend") {
                    g.isDrawing && q.preventDefault(), g[q.type]();
                    return
                }
                const G = g.canvas.getBoundingClientRect(),
                    Q = {
                        x: q.targetTouches[0].pageX - G.left,
                        y: q.targetTouches[0].pageY - G.top
                    };
                Q.x *= g.canvas.width / parseInt(g.canvas.style.width, 10), Q.y *= g.canvas.height / parseInt(g.canvas.style.height, 10), g[q.type](Q)
            },
            A = function(q) {
                if (q.type === "mousemove") q.preventDefault();
                else if (q.type === "mouseup") {
                    g[q.type]();
                    return
                }
                const G = g.canvas.getBoundingClientRect(),
                    Q = {
                        x: q.clientX - G.left,
                        y: q.clientY - G.top
                    };
                Q.x *= g.canvas.width / parseInt(g.canvas.style.width, 10), Q.y *= g.canvas.height / parseInt(g.canvas.style.height, 10), g[q.type](Q)
            };
        this.canvas.addEventListener("touchstart", k, !1), this.canvas.addEventListener("touchmove", k, !1), document.addEventListener("touchend", k, !1), this.canvas.addEventListener("mousedown", A, !1), this.canvas.addEventListener("mousemove", A, !1), document.addEventListener("mouseup", A, !1);
        const D = function(q, G, Q) {
                q.strokeStyle = g.strokestyle, q.lineCap = "round", q.lineWidth = 6, q.beginPath(), q.arc(G, Q, .01, 0, 2 * Math.PI, !0), q.stroke(), q.moveTo(G, Q)
            },
            V = function(q, G, Q) {
                q.lineTo(G, Q), q.stroke()
            };
        this.getBase64Image = function() {
            const q = document.createElement("canvas");
            q.width = g.canvas.width, q.height = g.canvas.height;
            const G = q.getContext("2d");
            g.context.strokeStyle = this.strokestyle, g.context.lineCap = "round", g.context.lineWidth = 6;
            for (let v = 0; v < g.lines.length; v++) {
                const M = g.lines[v];
                for (let W = 0; W < M.points.length; W++) {
                    const oe = M.points[W];
                    W === 0 ? D(G, oe.x, oe.y) : V(G, oe.x, oe.y)
                }
            }
            let Q = q.toDataURL("image/png");
            return Q = Q.replace("data:image/png;base64,", ""), Q
        }, this.start = function(q) {
            !g.isEnabled || (D(g.context, q.x, q.y), g.isDrawing = !0, g.isClean = !1, g.lines.push({
                points: [q]
            }))
        }, this.move = function(q) {
            g.isDrawing && (V(g.context, q.x, q.y), g.lines[g.lines.length - 1].points.push(q))
        }, this.end = function() {
            g.isDrawing && (g.isDrawing = !1)
        }, this.touchstart = this.start, this.touchmove = this.move, this.touchend = this.end, this.mousedown = this.start, this.mousemove = this.move, this.mouseup = this.end, E()
    },
    zx = function() {
        const e = this;
        this.numRows = 4, this.numCols = 4, this.windowDiffFn = () => ({
            width: 0,
            height: 0
        }), this.parentSelector = "#jbg-grid-main", this.getDataFn = function() {
            return null
        }, this.generate = function() {
            let i = '<table class="jbg-grid">';
            for (let d = 0; d < e.numRows; d++) {
                i += '<tr class="jbg-grid-row">';
                for (let g = 0; g < e.numCols; g++) i += `<td class="jbg-grid-cell coord-${d}-${g}" data-r="${d}" data-c="${g}" >`, i += `<span class="jbg-grid-text coord-${d}-${g}">${e.getDataFn(d,g)}</span>`, i += "</td>";
                i += "</tr>"
            }
            i += "</table>", se(e.parentSelector).html(i), se(".jbg-grid-cell").css({
                width: `${100/e.numCols}%`,
                height: `${100/e.numRows}%`
            });

            function a() {
                const d = se(this),
                    g = d.data("r"),
                    E = d.data("c");
                se(e).trigger("cellTouched", [g, E])
            }
            se(".jbg-grid-cell").on("click", a), se(window).resize(this.onResize), setTimeout(() => {
                e.onResize()
            }, 1), e.onResize()
        }, this.reset = function() {
            se(window).off("resize", this.onResize), se(".jbg-grid-cell").off()
        }, this.getCell = function(i, a) {
            let d = null;
            return d = se(`.jbg-grid-cell.coord-${i}-${a}`), d
        }, this.onResize = () => {
            const n = e.windowDiffFn(),
                i = window.innerWidth - n.width,
                a = window.innerHeight - n.height;
            let d;
            i >= a ? d = a : d = i, d = Math.max(215, d), se(".jbg-grid").css({
                margin: "0 auto",
                width: d,
                height: d
            });
            let g = d / e.numCols;
            g *= .6, se(".jbg-grid-text").css({
                "font-size": `${g}px`
            })
        }
    },
    Hx = `<div id="page-triviadeath" class="page">\r
    <div id="player" class='dark-background light-text'>\r
        <h1><%=username%></h1>\r
    </div>\r
    \r
    <div id="preload" class="preload"></div>\r
\r
    <div id="game" class="game pt-pageholder">    \r
        <div id="state-lobby" class="pt-page-off game-page textured-background">\r
            <div class="container">\r
                <br /><span id="lobby-text"></span><br />\r
                <form class="pure-form">                    \r
                    <button type="button" id="button-startgame" class="light-text button-game button-xlarge pure-button pure-input-1">EVERYBODY'S IN</button>\r
                    <button type="button" id="button-stopcountdown" class="light-text button-game  button-xlarge pure-button pure-input-1">CANCEL</button>\r
                    <button type="button" id="button-sameplayers" class="light-text button-game  button-xlarge pure-button pure-input-1 button-endbuttons">same players</button>\r
                    <button type="button" id="button-newplayers" class="light-text button-game  button-xlarge pure-button pure-input-1 button-endbuttons">new players</button>    \r
                </form>\r
            </div>\r
        </div>\r
\r
        <div id="state-logo" class="pt-page-off game-page black-background logo-image">\r
        </div>\r
        \r
        <div id="state-make-single-choice" class="pt-page-off game-page textured-background">\r
            <div id="make-single-choice-text" class="dark-text white-background" style="width:100%; text-align:center;" ></div>\r
            <div id="make-single-choice-choices"></div>\r
        </div>\r
        \r
        <div id="state-make-many-choices" class="pt-page-off game-page textured-background">\r
                <div id="make-many-choices-text" class="dark-text white-background" style="width:100%; text-align:center;" ></div>\r
            <div class="container">\r
                <div id="make-many-choices-sub-text" class="white-text" style="width:100%; text-align:center;" ></div>\r
                <div id="make-many-choices-choices" class="row light-text" style="width:100%;" ></div>\r
                <div id="make-many-choices-submit-button-container" style="width:100%; display:table;" >\r
                    <button type="button" id="make-many-choices-submit-button" class="light-text button-game button-xlarge pure-button pure-input-1">SUBMIT</button>\r
                </div>\r
            </div>\r
        </div>\r
        \r
        <div id="state-enter-single-text" class="pt-page-off game-page textured-background">\r
            <div>\r
                <div id="enter-single-text-text-container" class="white-background"></div>\r
                <div id="enter-single-text-error" class="red-background"></div>\r
                <div id="enter-single-text-input-container" class="container">\r
                    <form class="pure-form" id="enter-single-text-field">\r
                        <div class="pure-u-1">\r
                            <input id="enter-single-text-input" name="enter-single-text-input-field" class="pure-input-1 capitalize" type="text" maxlength="45" placeholder="ENTER HERE" autocapitalize="off" autocorrect="off" autocomplete="off">\r
                        </div>\r
                        <button type="submit" id="enter-single-text-submit" class="light-text button-game button-large pure-button capitalize right"><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;SEND</button>\r
                    </form>\r
                </div>\r
            </div>\r
        </div>\r
        \r
        <div id="state-enter-single-drawing" class="pt-page-off pushed-down-page game-page textured-background">\r
            <div id="enter-single-drawing-text-container" class="white-background">Lorem Ipsum</div>\r
\r
            <canvas id="sketchpad" class="sketchpad" width='240' height='320' style='background-color:white;'>\r
                Sorry, your browser is not supported.\r
            </canvas>\r
            \r
            <form id="enter-single-drawing-submit-container" class="pure-form container">\r
                <button type="submit" id="enter-single-drawing-submit" class="light-text submit-drawing button-game button-large pure-button pure-input-1" style="margin-top: 0px;"><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;send</button>\r
            </form>\r
        </div>\r
        \r
        <div id="state-grid" class="pt-page-off game-page textured-background">\r
            <div id="grid-text" class='white-background'></div>\r
            <div id="grid-main"></div>\r
            \r
            <div id="grid-progress">\r
                <button type="submit" id="grid-submit" class="light-text button-game button-large pure-button capitalize"></button>\r
            </div>\r
        </div>\r
        \r
        <div id="state-game-results" class="pt-page-off game-page black-background">\r
            <div id="top-text" class='white-background'></div>\r
            <div id="bottom-text" class='white-text'></div>\r
        </div>\r
        \r
    </div>\r
</div>\r
`;
const Gx = VC.extend({
    template: at.template(Hx),
    testBlob: null,
    grid: null,
    lastDollInfo: null,
    events: {
        "click #button-startgame": "startGame",
        "click #button-stopcountdown": "stopCountdown",
        "click #button-sameplayers": "newGameSamePlayers",
        "click #button-newplayers": "newGameNewPlayers",
        "click .button-choice": "chooseChoice",
        "click .make-many-choices-button": "chooseManyChoices",
        "click .make-many-choices-checkbox": "chooseManyChoices",
        "click #make-many-choices-submit-button": "submitManyChoices",
        "click #enter-single-text-submit": "submitEnterSingleText",
        "click #enter-single-drawing-submit": "submitEnterSingleDrawing",
        "click #grid-submit": "submitGrid",
        "click .gallery-link": "artifactClicked"
    },
    setupWithDollInfo(t) {
        t || (this.lastDollInfo ? t = this.lastDollInfo : t = {
            name: "None",
            controllerColors: {
                dark: "#AAAAAA",
                light: "#CCCCCC"
            }
        }), this.lastDollInfo = t;
        const e = t.controllerColors;
        se(".dark-background").css("background-color", e.dark), se(".light-background").css("background-color", e.light), se(".dark-text").css("color", e.dark), se(".light-text").css("color", e.light), se(".textured-background").addClass(t.name.toLowerCase())
    },
    async update() {
        if (this.model.get("room") && this.model.get("room").gameResults) {
            const t = this.model.get("room").gameResults,
                e = this.model.get("player") || {};
            let n = "",
                i = "";
            if (this.client.isRole("player")) {
                let a;
                for (let E = 0; E < t.players.length; E++) t.players[E].id === this.client.userId && (a = t.players[E]);
                const d = e ? e.state : "";
                if (a) {
                    if (n += `<p>${a.wonGame?"CONGRATULATIONS":"SUCH A TRAGEDY!"}</p>`, d === "MakeSingleChoice")
                        for (let E = 0; E < e.choices.length; E++) n += `<button data-choice="${E}" class="light-text button-choice button-game button-large btn btn-block">${e.choices[E].text}</button>`;
                    i += `<p>${a.wonGame?"You survived the game!":"You did not survive the game"}</p>`, i += "<BR>", i += `<p>Your final score: $${a.score}</p>`
                }
                const g = this.model.get("room").artifact;
                if (g && g.success && g.rootId) {
                    let E = "games.jackbox.tv";
                    g.rootId.indexOf("test") !== -1 && (E = "games-test.jackbox.tv");
                    try {
                        const k = `https://${E}/artifact/TriviaDeathResults/${g.artifactId}/`,
                            A = new URL("main/pp3/triviadeath/assets/bd43d0f4.png", self.location).href;
                        i += `<div class="col-xs-12"><a target="_blank" class="gallery-link" href="${k}"><img src="${A}" /></a></div>`, ri.add(g, this.getOption("appTag"))
                    } catch {
                        console.error("unable to load gallery image")
                    }
                }
            } else {
                let a = 0;
                for (let g = 0; g < t.players.length; g++) t.players[g].wonGame && (a = t.players[g].score);
                t.audience && (n += `<p>${t.audience.survived?"CONGRATULATIONS":"SUCH A TRAGEDY!"}</p>`, i += `<p>${t.audience.survived?"The audience has SURVIVED!":"The audience has DIED, and so have you!"}</p>`, i += "<BR>", i += `<p>${t.audience.count} audience ${t.audience.count===1?"member":"members"} got : $${t.audience.score}</p>`, i += "<BR>", i += `<p>Score to beat : $${a}</p>`);
                const d = this.model.get("room").artifact;
                if (d && d.success && d.rootId) {
                    let g = "games.jackbox.tv";
                    d.rootId.indexOf("test") !== -1 && (g = "games-test.jackbox.tv");
                    try {
                        const E = "TriviaDeathResults";
                        d.categoryId = E;
                        const k = `https://${g}/artifact/${E}/${d.artifactId}/`,
                            A = new URL("main/pp3/triviadeath/assets/bd43d0f4.png", self.location).href;
                        i += `<div class="col-xs-12"><a target="_blank" class="gallery-link" href="${k}"><img src="${A}" /></a></div>`, ri.add(d, this.getOption("appTag"))
                    } catch {
                        console.error("unable to load gallery image")
                    }
                }
            }
            se("#state-game-results #top-text").html(n), se("#state-game-results #bottom-text").html(i), this.showScreen("#state-game-results"), this.setupWithDollInfo(this.client.isRole("player") ? e.dollInfo : this.model.get("room").audience.dollInfo);
            return
        }
        if (se("#game-results").hide(), !this.client.isRole("player")) {
            this.updateAudience();
            return
        }
        this.updatePlayer()
    },
    updatePlayer() {
        if (!this.model.get("room")) {
            this.setupWithDollInfo(null), this.showScreen("#state-logo");
            return
        }
        const t = this.model.get("room"),
            e = this.model.get("player") || {},
            n = e ? e.state : "",
            i = t ? t.state : "";
        if (this.grid && i !== "Gameplay" && n !== "Grid" && (this.grid.reset(), this.grid = null), n === "RoomFull") {
            kt.show(Error("The room is full"), {
                willClose: () => {
                    window.location.reload(!0)
                }
            });
            return
        }
        if (n === "GameLocked") {
            kt.show(Error("Game is in progress. Please wait for a new game to start."), {
                willClose: () => {
                    window.location.reload(!0)
                }
            });
            return
        }
        if (i === "Lobby") {
            if (this.hideLobbyButtons(), !e.isAllowedToStartGame) {
                se("#lobby-text").html("Sit back and relax!"), this.showScreen("#state-lobby"), this.setupWithDollInfo(e.dollInfo);
                return
            }
            const g = t.lobbyState;
            g === "WaitingForMore" ? se("#lobby-text").html("Waiting for all players to join") : g === "CanStart" ? (se("#lobby-text").html("Press this button when everybody has joined"), se("#button-startgame").show()) : g === "Countdown" ? (se("#lobby-text").html("Press this button to cancel game start"), se("#button-stopcountdown").show()) : g === "PostGame" && (se("#lobby-text").html("What do you want to do?"), se(".button-endbuttons").show()), this.showScreen("#state-lobby")
        } else if (i === "Gameplay")
            if (n === "MakeSingleChoice") {
                const g = e.chosen === null || e.chosen === void 0,
                    E = e.text,
                    k = e.choices;
                if (g) {
                    se("#make-single-choice-text").html(`<p>${E}</p>`);
                    let A = "";
                    for (let D = 0; D < k.length; D++) A += `<button data-choice="${D}" class="${k[D].disabled?`background-finger background-finger-${D}`:""} light-text button-choice button-game button-large btn" ${k[D].disabled?"disabled":""}>${k[D].disabled?"&zwnj;":k[D].text}</button>`;
                    se("#make-single-choice-choices").html(A)
                } else se("#make-single-choice-text").html("<p>Thanks.</p>"), se("#make-single-choice-choices").html("");
                this.showScreen("#state-make-single-choice")
            } else if (n === "MakeManyChoices") {
            const g = e.chosen === null || e.chosen === void 0,
                E = e.text,
                k = e.choices;
            if (g) {
                se("#make-many-choices-text").html(`<p id='many-text'>${E}</p>`), se("#make-many-choices-sub-text").html("<p id='many-sub-text'>Tap any items below that fit this category.</p>");
                let A = "";
                for (let D = 0; D < k.length; D++) A += '<div class="col-xs-10">', A += `<button data-choice="${D}" id="make-many-choices-button-${D}" class="light-text make-many-choices-button button-game button-large pure-button pure-input-1">${k[D].text}</button>`, A += '</div><div class="col-xs-2">', A += `<i data-choice="${D}" id="make-many-choices-checkbox-${D}" class="checkbox box-unchecked make-many-choices-checkbox"></i>`, A += "</div>";
                se("#make-many-choices-choices").html(A), se("#make-many-choices-submit-button-container").show()
            } else se("#make-many-choices-text").html("<p>Thanks.</p>"), se("#make-many-choices-sub-text").html(""), se("#make-many-choices-choices").html(""), se("#make-many-choices-submit-button-container").hide();
            this.showScreen("#state-make-many-choices")
        } else if (n === "EnterSingleText") e.entry ? this.showScreen("#state-logo") : (e.error ? (se("#enter-single-text-error").html(`<p>${e.error}</p>`), se("#enter-single-text-error").show()) : se("#enter-single-text-error").hide(), this.activeScreen !== "#state-enter-single-text" && (se("#enter-single-text-input").val(""), se("#enter-single-text-input").prop("type", e.inputType), se("#enter-single-text-field").show(), se("#state-enter-single-text #enter-single-text-text-container").html(`<span class="container-text">${e.text}</span>`)), this.showScreen("#state-enter-single-text"));
        else if (n === "EnterSingleDrawing")
            if (e.entry) this.showScreen("#state-logo");
            else {
                se("#enter-single-drawing-text-container").html(`<p>Please Draw :<br>${e.text}</p>`), this.showScreen("#state-enter-single-drawing");
                const g = this.$el.find("#sketchpad")[0],
                    E = g.getContext("2d"),
                    k = this.$el.find("#player").outerHeight() + this.$el.find("#enter-single-drawing-text-container").outerHeight() + this.$el.find("#enter-single-drawing-submit-container").outerHeight();
                this.currentCanvas = new Fx(g, E, 30, k, 0)
            }
        else if (n === "Grid") {
            let J = function(G, Q) {
                    for (let v = 0; v < D.length; v++)
                        if (D[v].r === G && D[v].c === Q) return v;
                    return -1
                },
                q = function() {
                    for (let G = 0; G < E; G++)
                        for (let Q = 0; Q < k; Q++) {
                            const v = V.getCell(G, Q);
                            J(G, Q) >= 0 ? (v.addClass(`${e.skin}-selected`), v.removeClass(`${e.skin}-unselected`)) : (v.addClass(`${e.skin}-unselected`), v.removeClass(`${e.skin}-selected`))
                        }
                    if (e.showProgress) {
                        let G = "";
                        for (let Q = 0; Q < D.length; Q++) G += e.grid[D[Q].r][D[Q].c];
                        se("#grid-submit").text(`Submit${G.length>0?` "${G}"`:""}`)
                    } else se("#grid-submit").text("Submit");
                    se("#grid-submit").data("entry", D)
                };
            var a = J,
                d = q;
            if (e.entry) {
                this.showScreen("#state-logo");
                return
            }
            if (!e.grid) {
                this.showScreen("#state-logo");
                return
            }
            const g = e.text;
            se("#grid-text").html(`<p>${g}</p>`);
            const E = e.grid.length,
                k = e.grid.length > 0 ? e.grid[0].length : 0,
                A = e.mode || "rewind",
                D = [];
            this.grid && (this.grid.reset(), this.grid = null);
            const V = new zx;
            V.numRows = E, V.numCols = k, V.windowDiffFn = () => {
                let G = 0;
                return G += this.$el.find("#player").outerHeight() || 0, G += this.$el.find("#grid-text").outerHeight() || 0, G += this.$el.find("#grid-progress").outerHeight() || 0, {
                    width: 0,
                    height: G
                }
            }, V.getDataFn = function(Q, v) {
                return e.grid[Q][v]
            }, V.parentSelector = "#grid-main", se(V).on("cellTouched", (G, Q, v) => {
                const M = J(Q, v);
                A === "normal" ? M >= 0 ? D.splice(M, 1) : D.push({
                    r: Q,
                    c: v
                }) : A === "rewind" && (M >= 0 ? D.splice(M + (M === D.length - 1 ? 0 : 1)) : D.push({
                    r: Q,
                    c: v
                })), q()
            }), V.generate(), this.grid = V, q(), this.showScreen("#state-grid")
        } else n === "Logo" ? this.showScreen("#state-logo") : this.showScreen("#state-logo");
        else this.showScreen("#state-logo");
        this.setupWithDollInfo(e.dollInfo)
    },
    updateAudience() {
        const t = this.model.get("room") || {
            audience: {}
        };
        if (!t.audience) {
            this.showScreen("#state-logo"), this.setupWithDollInfo(null);
            return
        }
        const e = t.audience;
        if (!e.text || !e.choices || !e.type) {
            this.showScreen("#state-logo"), this.setupWithDollInfo(t.audience.dollInfo);
            return
        }
        const n = e.text,
            i = e.choices,
            a = e.type;
        if (a === "single") {
            se("#make-single-choice-text").html(`<p>${n}</p>`);
            let d = "";
            i.forEach(g => {
                d += `<button data-choice="${g.key}" class="light-text button-choice button-game button-large pure-button pure-input-1">${g.text}</button>`
            }), se("#make-single-choice-choices").html(d), this.showScreen("#state-make-single-choice")
        } else if (a === "multiple") {
            se("#make-many-choices-text").html(`<p>${n}</p>`), se("#make-many-choices-sub-text").html("<p>Tap the items below that fit into this category.</p>");
            let d = "";
            for (let g = 0; g < i.length; g++) d += '<div class="col-xs-10">', d += `<button data-choice="${g}" id="make-many-choices-button-${g}" class="light-text make-many-choices-button button-game button-large pure-button pure-input-1">${i[g].text}</button>`, d += '</div><div class="col-xs-2">', d += `<i data-choice="${g}" id="make-many-choices-checkbox-${g}" class="checkbox box-unchecked make-many-choices-checkbox"></i>`, d += "</div>";
            se("#make-many-choices-choices").html(d), se("#make-many-choices-submit-button-container").show(), this.showScreen("#state-make-many-choices")
        }
        this.setupWithDollInfo(t.audience.dollInfo)
    },
    hideLobbyButtons() {
        se("#button-startgame").hide(), se("#button-stopcountdown").hide(), se(".button-endbuttons").hide()
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
    chooseChoice(t) {
        const e = se(t.currentTarget).data("choice");
        return this.client.isRole("player") ? this.client.send("SendMessageToRoomOwner", {
            choice: e
        }) : (this.client.sessionSend("vote", "Trivia Death Vote", {
            type: "vote",
            vote: e
        }), se("#make-single-choice-text").html("<p>Thanks. Now wait quietly.</p>"), se("#make-single-choice-choices").html("")), se(".button-choice").removeClass("selected"), se(t.currentTarget).addClass("selected"), !1
    },
    chooseManyChoices(t) {
        const e = se(t.currentTarget).data("choice"),
            n = se(`#make-many-choices-checkbox-${e}`),
            i = se(`#make-many-choices-button-${e}`);
        n.hasClass("box-checked") ? (n.removeClass("box-checked"), n.addClass("box-unchecked"), i.removeClass("white-background")) : (n.removeClass("box-unchecked"), n.addClass("box-checked"), i.addClass("white-background")), this.setupWithDollInfo(null)
    },
    submitManyChoices() {
        if (this.client.isRole("player")) {
            const t = this.model.get("player") || {};
            if (!t.choices) return;
            const n = [];
            for (let i = 0; i < t.choices.length; i++) {
                const a = `#make-many-choices-checkbox-${i}`;
                n[i] = se(a).hasClass("box-checked")
            }
            this.client.send("SendMessageToRoomOwner", {
                choices: n
            })
        } else {
            const e = (this.model.get("room") || {
                audience: {}
            }).audience;
            if (!e) return;
            const n = [];
            for (let i = 0; i < e.choices.length; i++) {
                const a = `#make-many-choices-checkbox-${i}`;
                n[i] = se(a).hasClass("box-checked")
            }
            this.client.sessionSend("vote", "Trivia Death Vote", {
                type: "vote",
                vote: n.join(",")
            }), se("#make-many-choices-text").html("<p>Thanks.</p>"), se("#make-many-choices-sub-text").html(""), se("#make-many-choices-choices").html(""), se("#make-many-choices-submit-button-container").hide()
        }
    },
    submitEnterSingleText() {
        const t = this.sanitize(se("#enter-single-text-input").val()).toUpperCase();
        return this.client.send("SendMessageToRoomOwner", {
            entry: t
        }), !1
    },
    submitEnterSingleDrawing() {
        if (this.currentCanvas.isClean) return alert("You have to draw something!"), !1;
        const t = {
            drawing: this.currentCanvas.getBase64Image()
        };
        return this.client.send("SendMessageToRoomOwner", t), !1
    },
    submitGrid(t) {
        const e = se(t.currentTarget).data("entry");
        return this.client.send("SendMessageToRoomOwner", {
            entry: e
        }), !1
    },
    sanitize(t) {
        return t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,:]/gi, "").replace(/'/g, "\u2019").trim()
    },
    onResize() {
        const t = se(window).width(),
            e = se(window).height() - se("#player").outerHeight(!0);
        se(".game-page").css("height", e), se(".game-page").attr("height", e), se(".game-page").css("width", t), se(".game-page").attr("width", t)
    }
});
jx({
    MainView: Gx
});
//# sourceMappingURL=9c21aecf.js.map