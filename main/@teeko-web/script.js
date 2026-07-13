import * as VueLib from "https://esm.sh/vue@3.3.4";
import { createI18n as createVueI18n } from "https://esm.sh/vue-i18n@9.2.2";
import mixpanel from "https://esm.sh/mixpanel-browser@2.48.1";
import * as lodashEs from "https://esm.sh/lodash-es@4.17.21";
import cloneDeep from "https://esm.sh/lodash-es@4.17.21/cloneDeep";
import debounce from "https://esm.sh/lodash-es@4.17.21/debounce";
import get from "https://esm.sh/lodash-es@4.17.21/get";
import sample from "https://esm.sh/lodash-es@4.17.21/sample";
import set from "https://esm.sh/lodash-es@4.17.21/set";
import * as Sentry from "https://esm.sh/@sentry/browser@7.120.4";

const {
    Comment: rn,
    Fragment: zt,
    Text: Ma,
    Transition: Pp,
    computed: Jr,
    createApp: fx,
    createBlock: mo,
    createCommentVNode: Ur,
    createElementBlock: Qe,
    createElementVNode: ye,
    createTextVNode: ka,
    createVNode: It,
    defineComponent: Br,
    inject: io,
    mergeProps: Cu,
    normalizeClass: en,
    openBlock: Ge,
    popScopeId: Tp,
    pushScopeId: yp,
    reactive: ys,
    renderList: Au,
    renderSlot: iD,
    resolveComponent: gs,
    resolveDynamicComponent: nD,
    toDisplayString: kr,
    watch: ps,
    withCtx: bp,
    withDirectives: Zr,
    withKeys: gu,
    withModifiers: ti
} = VueLib;
const NM = createVueI18n;
const XE = mixpanel;
const By = lodashEs;
const yZ = cloneDeep;
const zZ = debounce;
const Bee = set;
const Zre = get;
const bne = sample;
const Pre = (options = {}) => Sentry.showReportDialog(options.id && !options.eventId ? {
    ...options,
    eventId: options.id
} : options);

var LP = Object.defineProperty;
var PP = (e, t, r) => t in e ? LP(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var $P = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t), t.exports);
var Oe = (e, t, r) => (PP(e, typeof t != "symbol" ? t + "" : t, r), r);
var aoe = $P((Voe, e0) => {
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
        new MutationObserver(s => {
            for (const o of s)
                if (o.type === "childList")
                    for (const c of o.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && n(c)
        }).observe(document, {
            childList: !0,
            subtree: !0
        });

        function r(s) {
            const o = {};
            return s.integrity && (o.integrity = s.integrity), s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
        }

        function n(s) {
            if (s.ep) return;
            s.ep = !0;
            const o = r(s);
            fetch(s.href, o)
        }
    })();

    var Pt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function ki(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    function BM(e) {
        if (e.__esModule) return e;
        var t = e.default;
        if (typeof t == "function") {
            var r = function n() {
                return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
            };
            r.prototype = t.prototype
        } else r = {};
        return Object.defineProperty(r, "__esModule", {
            value: !0
        }), Object.keys(e).forEach(function(n) {
            var s = Object.getOwnPropertyDescriptor(e, n);
            Object.defineProperty(r, n, s.get ? s : {
                enumerable: !0,
                get: function() {
                    return e[n]
                }
            })
        }), r
    }
    class Sh {
        static setup() {
            this.isSetup = !0, gtag("config", "G-V1QJVQMYF1", {
                send_page_view: !1
            }), XE.init("2e284873b7269f13b850ac994abfd848", {
                debug: "false"
            })
        }
        static ga(t, r) {
            this.isSetup || this.setup(), gtag("event", t, r)
        }
        static mp(t, r) {
            this.isSetup || this.setup(), XE.track(t, r)
        }
        static pageView(t) {
            this.ga("page_view", {
                page_title: t,
                page_location: `https://jackbox.tv/${t}`
            })
        }
        static gameStarted(t, r) {
            const n = {
                tag: t
            };
            r.isUGC !== void 0 && (n.is_ugc = r.isUGC), r.isSequel !== void 0 && (n.is_sequel = r.isSequel), r.locale !== void 0 && (n.locale = r.locale), r.mode !== void 0 && (n.mode = r.mode), r.numberOfPlayer !== void 0 && (n.number_of_players = r.numberOfPlayer), this.ga("game_start", n)
        }
        static gameJoined(t, r) {
            this.mp("Game Joined", {
                tag: t,
                ...r
            })
        }
        static bannerClick(t, r) {
            this.ga("banner_click", {
                url: t,
                location: r
            })
        }
        static externalLinkClick(t, r) {
            this.ga("external_link_click", {
                url: t,
                location: r
            })
        }
        static moderatorConnected(t) {
            this.ga("moderator_connected", {
                tag: t
            }), this.mp("Moderator Connected", {
                tag: t
            })
        }
        static itemModerated(t, r) {
            this.ga("item_moderated", {
                tag: t,
                was_rejected: r
            }), this.mp("Moderator Item", {
                tag: t,
                wasRejected: r
            })
        }
        static playerKicked(t, r) {
            this.ga("player_kicked", {
                tag: t,
                is_lobby: r
            }), this.mp("Moderator Kick", {
                tag: t,
                isLobby: r
            })
        }
        static galleryImpression(t, r) {
            this.ga("gallery_impression", {
                category_id: t,
                location: r
            })
        }
        static galleryClick(t, r) {
            this.ga("gallery_click", {
                category_id: t,
                location: r
            }), this.mp("Gallery Click", {
                categoryId: t,
                location: r
            })
        }
        static galleryAddToCart(t, r) {
            this.mp("Gallery Add To Cart", {
                categoryId: t,
                ...r
            })
        }
        static galleryCheckout(t, r) {
            this.mp("Gallery Checkout", {
                categoryId: t,
                ...r
            })
        }
        static galleryShare(t, r) {
            this.mp("Gallery Share", {
                categoryId: t,
                ...r
            })
        }
        static galleryWatch(t, r) {
            this.mp("Gallery Watch", {
                categoryId: t,
                ...r
            })
        }
        static galleryDownload(t, r) {
            this.mp("Gallery Download", {
                categoryId: t,
                ...r
            })
        }
    }
    Oe(Sh, "isSetup", !1);
    const hk = [{
            name: "Prototype",
            tag: "prototype",
            wrapper: "vue",
            isPublic: !0,
            directory: "internal/prototype"
        }, {
            name: "EcastTestClient",
            tag: "ecast-test-client",
            wrapper: "marionette",
            isPublic: !0,
            directory: "internal/ecast-test-client"
        }, {
            name: "Quiplash 2 InterLASHional",
            tag: "quiplash2-international",
            wrapper: "marionette",
            isPublic: !0,
            directory: "standalone/quiplash2-international",
            categoryId: "quiplash2-internationalGame"
        }, {
            name: "Guesspionage Crowdplay",
            tag: "guesspionage-crowdplay",
            wrapper: "marionette",
            isPublic: !0,
            directory: "standalone/guesspionage-crowdplay"
        }, {
            name: "Drawful 2",
            tag: "drawful2",
            wrapper: "marionette",
            isPublic: !0,
            directory: "standalone/drawful2",
            categoryId: "DrawfulGame",
            shopItems: ["shirts"]
        }, {
            name: "Drawful 2",
            tag: "drawful2international",
            wrapper: "marionette",
            isPublic: !0,
            directory: "standalone/drawful2-international",
            features: ["moderation"]
        }, {
            name: "Acquisitions, Inc.",
            tag: "acquisitions-inc",
            wrapper: "marionette",
            isPublic: !0,
            directory: "standalone/acquisitions-inc"
        }, {
            name: "You Don't Know Jack 2015",
            tag: "ydkj2015",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp1/ydkj2015"
        }, {
            name: "Drawful",
            tag: "drawful",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp1/drawful"
        }, {
            name: "Word Spud",
            tag: "wordspud",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp1/wordspud"
        }, {
            name: "Lie Swatter",
            tag: "lieswatter",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp1/lieswatter"
        }, {
            name: "Fibbage",
            tag: "fibbage",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp1/fibbage"
        }, {
            name: "Fibbage 2",
            tag: "fibbage2",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp2/fibbage2"
        }, {
            name: "Earwax",
            tag: "earwax",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp2/earwax"
        }, {
            name: "Bidiots",
            tag: "auction",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp2/auction"
        }, {
            name: "Bomb Corp",
            tag: "bombintern",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp2/bombintern"
        }, {
            name: "Quiplash",
            tag: "quiplash",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp2/quiplash"
        }, {
            name: "Fakin' It",
            tag: "fakinit",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp3/fakinit"
        }, {
            name: "Tee K.O.",
            tag: "awshirt",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp3/awshirt",
            categoryId: "TeeKOGame",
            shopItems: ["shirts"]
        }, {
            name: "Quiplash 2",
            tag: "quiplash2",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp3/quiplash2",
            categoryId: "Quiplash2Game"
        }, {
            name: "Trivia Murder Party",
            tag: "triviadeath",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp3/triviadeath",
            categoryId: "TriviaDeathResults"
        }, {
            name: "Guesspionage",
            tag: "pollposition",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp3/pollposition"
        }, {
            name: "Fibbage 3",
            tag: "fibbage3",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp4/fibbage3"
        }, {
            name: "Survive the Internet",
            tag: "survivetheinternet",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp4/survivetheinternet",
            categoryId: "STIGame"
        }, {
            name: "Monster Seeking Monster",
            tag: "monstermingle",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp4/monstermingle",
            categoryId: "MonsterMingleGame"
        }, {
            name: "Bracketeering",
            tag: "bracketeering",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp4/bracketeering",
            categoryId: "BRKGame"
        }, {
            name: "Civic Doodle",
            tag: "overdrawn",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp4/overdrawn",
            categoryId: "OverdrawnGame",
            shopItems: ["shirts"]
        }, {
            name: "You Don't Know Jack: Full Stream",
            tag: "ydkj2018",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp5/ydkj2018",
            categoryId: "YDKJ2018Game"
        }, {
            name: "Split the Room",
            tag: "splittheroom",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp5/splittheroom",
            categoryId: "SplitTheRoomGame"
        }, {
            name: "Mad Verse City",
            tag: "rapbattle",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp5/rapbattle",
            categoryId: "RapBattleGame"
        }, {
            name: "Zeeple Dome",
            tag: "slingshoot",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp5/slingshoot",
            categoryId: "SlingShootGame"
        }, {
            name: "Patently Stupid",
            tag: "patentlystupid",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp5/patentlystupid",
            categoryId: "PatentlyStupidGame",
            shopItems: ["mugs"]
        }, {
            name: "Trivia Murder Party 2",
            tag: "triviadeath2",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp6/triviadeath2",
            categoryId: "TriviaDeath2Game"
        }, {
            name: "Role Models",
            tag: "rolemodels",
            wrapper: "marionette",
            isPublic: !0,
            features: ["camera"],
            directory: "pp6/rolemodels",
            categoryId: "RoleModelsGame",
            shopItems: ["shirts"]
        }, {
            name: "Joke Boat",
            tag: "jokeboat",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp6/jokeboat",
            categoryId: "JokeboatGame"
        }, {
            name: "Dictionarium",
            tag: "ridictionary",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp6/ridictionary",
            categoryId: "RidictionaryGame"
        }, {
            name: "Push the Button",
            tag: "pushthebutton",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp6/pushthebutton",
            categoryId: "PushTheButtonGame"
        }, {
            name: "Talking Points",
            tag: "jackbox-talks",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp7/jackboxtalks",
            features: ["camera", "moderation"],
            categoryId: "JackboxTalksGame"
        }, {
            name: "Quiplash 3",
            tag: "quiplash3",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp7/quiplash3",
            features: ["moderation"],
            categoryId: "quiplash3Game"
        }, {
            name: "The Devils and the Details",
            tag: "everyday",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp7/everyday",
            categoryId: "EverydayGame",
            shopItems: ["mugs"]
        }, {
            name: "Champ'd Up",
            tag: "worldchamps",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp7/worldchamps",
            features: ["moderation"],
            categoryId: "WorldChampionsGame",
            shopItems: ["cards"]
        }, {
            name: "Blather 'Round",
            tag: "blanky-blank",
            wrapper: "marionette",
            isPublic: !0,
            directory: "pp7/blanky-blank",
            categoryId: "BlankyBlankGame"
        }, {
            name: "Job Job",
            tag: "apply-yourself",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp8/apply-yourself",
            categoryId: "JobGameGame",
            features: ["moderation", "previews"]
        }, {
            name: "Drawful Animate",
            tag: "drawful-animate",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp8/drawful-animate",
            categoryId: "DrawfulAnimateGame",
            features: ["moderation"]
        }, {
            name: "The Wheel of Enormous Proportions",
            tag: "the-wheel",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp8/the-wheel",
            categoryId: "TheWheelGame"
        }, {
            name: "The Poll Mine",
            tag: "survey-bomb",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp8/survey-bomb",
            categoryId: "SurveyBombGame"
        }, {
            name: "Weapons Drawn",
            tag: "murder-detectives",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp8/murder-detectives",
            categoryId: "MurderDetectivesGame",
            features: ["moderation"]
        }, {
            name: "Quiplash 3",
            tag: "quiplash3-tjsp",
            wrapper: "vue",
            isPublic: !0,
            directory: "tjsp/quiplash3",
            features: ["moderation"],
            categoryId: "quiplash3Game"
        }, {
            name: "Tee K.O.",
            tag: "awshirt-tjsp",
            wrapper: "vue",
            isPublic: !0,
            directory: "tjsp/awshirt",
            features: ["moderation"],
            shopItems: ["shirts"],
            categoryId: "TeeKOGame"
        }, {
            name: "Trivia Murder Party 2",
            tag: "triviadeath2-tjsp",
            wrapper: "vue",
            isPublic: !0,
            directory: "tjsp/triviadeath2",
            categoryId: "TriviaMurderParty2Game"
        }, {
            name: "Fibbage 4",
            tag: "fourbage",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp9/fourbage",
            features: ["moderation", "kicking"],
            categoryId: "Fibbage4Game"
        }, {
            name: "Roomerang",
            tag: "htmf",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp9/htmf",
            features: ["moderation", "kicking"],
            categoryId: "MakeFriendsGame"
        }, {
            name: "Junktopia",
            tag: "antique-freak",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp9/antique-freak",
            features: ["moderation", "kicking"],
            categoryId: "AntiqueGameGame"
        }, {
            name: "Nonsensory",
            tag: "range-game",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp9/range-game",
            features: ["moderation", "kicking"],
            categoryId: "RangeGameGame"
        }, {
            name: "Quixort",
            tag: "lineup",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp9/lineup",
            features: ["kicking", "previews"],
            categoryId: "LineupGame"
        }, {
            name: "Tee K.O. 2",
            tag: "awshirt2",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp10/awshirt2",
            features: ["moderation", "kicking"],
            shopItems: ["shirts"],
            categoryId: "TeeKO2Game",
            galleryId: "teeko2"
        }, {
            name: "Dodo Re Mi",
            tag: "nopus-opus",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp10/nopus-opus",
            features: ["dropInDropOut", "kicking"],
            categoryId: "NopusOpusGame",
            galleryId: "dodo-re-mi"
        }, {
            name: "FixyText",
            tag: "risky-text",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp10/risky-text",
            features: ["moderation", "kicking"],
            categoryId: "FixyTextGame",
            galleryId: "fixytext"
        }, {
            name: "Timejinx",
            tag: "time-trivia",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp10/time-trivia",
            features: ["kicking"],
            categoryId: "TimeTriviaGame",
            galleryId: "timejinx"
        }, {
            name: "Hypnotorious",
            tag: "us-them",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp10/us-them",
            features: ["moderation", "kicking"],
            categoryId: "StrangersGame",
            galleryId: "hypnotorious"
        }, {
            name: "Fakin' It After Dark",
            tag: "fakinit2",
            wrapper: "vue",
            isPublic: !1,
            directory: "ppad/fakinit2",
            categoryId: "FakinIt2Game",
            features: ["moderation", "kicking"]
        }, {
            name: "Drawful After Dark",
            tag: "drawful3",
            wrapper: "vue",
            isPublic: !1,
            directory: "ppad/drawful3",
            categoryId: "Drawful3Game",
            features: ["moderation", "kicking"]
        }],
        pk = e => hk.find(t => t.tag === e || t.galleryId === e || t.categoryId === e);

    function gk() {
        this.__data__ = [], this.size = 0
    }
    var _k = gk;

    function mk(e, t) {
        return e === t || e !== e && t !== t
    }
    var _l = mk,
        vk = _l;

    function Ek(e, t) {
        for (var r = e.length; r--;)
            if (vk(e[r][0], t)) return r;
        return -1
    }
    var ml = Ek,
        yk = ml,
        Tk = Array.prototype,
        bk = Tk.splice;

    function Sk(e) {
        var t = this.__data__,
            r = yk(t, e);
        if (r < 0) return !1;
        var n = t.length - 1;
        return r == n ? t.pop() : bk.call(t, r, 1), --this.size, !0
    }
    var Ok = Sk,
        Ak = ml;

    function Ik(e) {
        var t = this.__data__,
            r = Ak(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
    var Rk = Ik,
        Nk = ml;

    function Ck(e) {
        return Nk(this.__data__, e) > -1
    }
    var wk = Ck,
        Lk = ml;

    function Pk(e, t) {
        var r = this.__data__,
            n = Lk(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
    }
    var $k = Pk,
        Dk = _k,
        xk = Ok,
        Mk = Rk,
        kk = wk,
        Uk = $k;

    function Lo(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    Lo.prototype.clear = Dk;
    Lo.prototype.delete = xk;
    Lo.prototype.get = Mk;
    Lo.prototype.has = kk;
    Lo.prototype.set = Uk;
    var vl = Lo,
        Bk = vl;

    function Fk() {
        this.__data__ = new Bk, this.size = 0
    }
    var Gk = Fk;

    function Wk(e) {
        var t = this.__data__,
            r = t.delete(e);
        return this.size = t.size, r
    }
    var jk = Wk;

    function Hk(e) {
        return this.__data__.get(e)
    }
    var qk = Hk;

    function Kk(e) {
        return this.__data__.has(e)
    }
    var Yk = Kk,
        Vk = typeof Pt == "object" && Pt && Pt.Object === Object && Pt,
        GS = Vk,
        zk = GS,
        Xk = typeof self == "object" && self && self.Object === Object && self,
        Jk = zk || Xk || Function("return this")(),
        En = Jk,
        Qk = En,
        Zk = Qk.Symbol,
        El = Zk,
        JE = El,
        WS = Object.prototype,
        e2 = WS.hasOwnProperty,
        t2 = WS.toString,
        sa = JE ? JE.toStringTag : void 0;

    function r2(e) {
        var t = e2.call(e, sa),
            r = e[sa];
        try {
            e[sa] = void 0;
            var n = !0
        } catch {}
        var s = t2.call(e);
        return n && (t ? e[sa] = r : delete e[sa]), s
    }
    var n2 = r2,
        i2 = Object.prototype,
        s2 = i2.toString;

    function o2(e) {
        return s2.call(e)
    }
    var a2 = o2,
        QE = El,
        c2 = n2,
        u2 = a2,
        l2 = "[object Null]",
        f2 = "[object Undefined]",
        ZE = QE ? QE.toStringTag : void 0;

    function d2(e) {
        return e == null ? e === void 0 ? f2 : l2 : ZE && ZE in Object(e) ? c2(e) : u2(e)
    }
    var Po = d2;

    function h2(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }
    var yn = h2,
        p2 = Po,
        g2 = yn,
        _2 = "[object AsyncFunction]",
        m2 = "[object Function]",
        v2 = "[object GeneratorFunction]",
        E2 = "[object Proxy]";

    function y2(e) {
        if (!g2(e)) return !1;
        var t = p2(e);
        return t == m2 || t == v2 || t == _2 || t == E2
    }
    var tg = y2,
        T2 = En,
        b2 = T2["__core-js_shared__"],
        S2 = b2,
        dd = S2,
        ey = function() {
            var e = /[^.]+$/.exec(dd && dd.keys && dd.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();

    function O2(e) {
        return !!ey && ey in e
    }
    var A2 = O2,
        I2 = Function.prototype,
        R2 = I2.toString;

    function N2(e) {
        if (e != null) {
            try {
                return R2.call(e)
            } catch {}
            try {
                return e + ""
            } catch {}
        }
        return ""
    }
    var jS = N2,
        C2 = tg,
        w2 = A2,
        L2 = yn,
        P2 = jS,
        $2 = /[\\^$.*+?()[\]{}|]/g,
        D2 = /^\[object .+?Constructor\]$/,
        x2 = Function.prototype,
        M2 = Object.prototype,
        k2 = x2.toString,
        U2 = M2.hasOwnProperty,
        B2 = RegExp("^" + k2.call(U2).replace($2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function F2(e) {
        if (!L2(e) || w2(e)) return !1;
        var t = C2(e) ? B2 : D2;
        return t.test(P2(e))
    }
    var G2 = F2;

    function W2(e, t) {
        return e == null ? void 0 : e[t]
    }
    var j2 = W2,
        H2 = G2,
        q2 = j2;

    function K2(e, t) {
        var r = q2(e, t);
        return H2(r) ? r : void 0
    }
    var As = K2,
        Y2 = As,
        V2 = En,
        z2 = Y2(V2, "Map"),
        rg = z2,
        X2 = As,
        J2 = X2(Object, "create"),
        yl = J2,
        ty = yl;

    function Q2() {
        this.__data__ = ty ? ty(null) : {}, this.size = 0
    }
    var Z2 = Q2;

    function eU(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
    var tU = eU,
        rU = yl,
        nU = "__lodash_hash_undefined__",
        iU = Object.prototype,
        sU = iU.hasOwnProperty;

    function oU(e) {
        var t = this.__data__;
        if (rU) {
            var r = t[e];
            return r === nU ? void 0 : r
        }
        return sU.call(t, e) ? t[e] : void 0
    }
    var aU = oU,
        cU = yl,
        uU = Object.prototype,
        lU = uU.hasOwnProperty;

    function fU(e) {
        var t = this.__data__;
        return cU ? t[e] !== void 0 : lU.call(t, e)
    }
    var dU = fU,
        hU = yl,
        pU = "__lodash_hash_undefined__";

    function gU(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = hU && t === void 0 ? pU : t, this
    }
    var _U = gU,
        mU = Z2,
        vU = tU,
        EU = aU,
        yU = dU,
        TU = _U;

    function $o(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    $o.prototype.clear = mU;
    $o.prototype.delete = vU;
    $o.prototype.get = EU;
    $o.prototype.has = yU;
    $o.prototype.set = TU;
    var bU = $o,
        ry = bU,
        SU = vl,
        OU = rg;

    function AU() {
        this.size = 0, this.__data__ = {
            hash: new ry,
            map: new(OU || SU),
            string: new ry
        }
    }
    var IU = AU;

    function RU(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }
    var NU = RU,
        CU = NU;

    function wU(e, t) {
        var r = e.__data__;
        return CU(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
    }
    var Tl = wU,
        LU = Tl;

    function PU(e) {
        var t = LU(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
    var $U = PU,
        DU = Tl;

    function xU(e) {
        return DU(this, e).get(e)
    }
    var MU = xU,
        kU = Tl;

    function UU(e) {
        return kU(this, e).has(e)
    }
    var BU = UU,
        FU = Tl;

    function GU(e, t) {
        var r = FU(this, e),
            n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this
    }
    var WU = GU,
        jU = IU,
        HU = $U,
        qU = MU,
        KU = BU,
        YU = WU;

    function Do(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    Do.prototype.clear = jU;
    Do.prototype.delete = HU;
    Do.prototype.get = qU;
    Do.prototype.has = KU;
    Do.prototype.set = YU;
    var HS = Do,
        VU = vl,
        zU = rg,
        XU = HS,
        JU = 200;

    function QU(e, t) {
        var r = this.__data__;
        if (r instanceof VU) {
            var n = r.__data__;
            if (!zU || n.length < JU - 1) return n.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new XU(n)
        }
        return r.set(e, t), this.size = r.size, this
    }
    var ZU = QU,
        eB = vl,
        tB = Gk,
        rB = jk,
        nB = qk,
        iB = Yk,
        sB = ZU;

    function xo(e) {
        var t = this.__data__ = new eB(e);
        this.size = t.size
    }
    xo.prototype.clear = tB;
    xo.prototype.delete = rB;
    xo.prototype.get = nB;
    xo.prototype.has = iB;
    xo.prototype.set = sB;
    var qS = xo,
        oB = As,
        aB = function() {
            try {
                var e = oB(Object, "defineProperty");
                return e({}, "", {}), e
            } catch {}
        }(),
        KS = aB,
        ny = KS;

    function cB(e, t, r) {
        t == "__proto__" && ny ? ny(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : e[t] = r
    }
    var ng = cB,
        uB = ng,
        lB = _l;

    function fB(e, t, r) {
        (r !== void 0 && !lB(e[t], r) || r === void 0 && !(t in e)) && uB(e, t, r)
    }
    var YS = fB;

    function dB(e) {
        return function(t, r, n) {
            for (var s = -1, o = Object(t), c = n(t), l = c.length; l--;) {
                var f = c[e ? l : ++s];
                if (r(o[f], f, o) === !1) break
            }
            return t
        }
    }
    var hB = dB,
        pB = hB,
        gB = pB(),
        _B = gB,
        Mu = {
            exports: {}
        };
    Mu.exports;
    (function(e, t) {
        var r = En,
            n = t && !t.nodeType && t,
            s = n && !0 && e && !e.nodeType && e,
            o = s && s.exports === n,
            c = o ? r.Buffer : void 0,
            l = c ? c.allocUnsafe : void 0;

        function f(d, p) {
            if (p) return d.slice();
            var E = d.length,
                _ = l ? l(E) : new d.constructor(E);
            return d.copy(_), _
        }
        e.exports = f
    })(Mu, Mu.exports);
    var VS = Mu.exports,
        mB = En,
        vB = mB.Uint8Array,
        EB = vB,
        iy = EB;

    function yB(e) {
        var t = new e.constructor(e.byteLength);
        return new iy(t).set(new iy(e)), t
    }
    var ig = yB,
        TB = ig;

    function bB(e, t) {
        var r = t ? TB(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length)
    }
    var zS = bB;

    function SB(e, t) {
        var r = -1,
            n = e.length;
        for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
        return t
    }
    var XS = SB,
        OB = yn,
        sy = Object.create,
        AB = function() {
            function e() {}
            return function(t) {
                if (!OB(t)) return {};
                if (sy) return sy(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }(),
        IB = AB;

    function RB(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
    var JS = RB,
        NB = JS,
        CB = NB(Object.getPrototypeOf, Object),
        sg = CB,
        wB = Object.prototype;

    function LB(e) {
        var t = e && e.constructor,
            r = typeof t == "function" && t.prototype || wB;
        return e === r
    }
    var og = LB,
        PB = IB,
        $B = sg,
        DB = og;

    function xB(e) {
        return typeof e.constructor == "function" && !DB(e) ? PB($B(e)) : {}
    }
    var QS = xB;

    function MB(e) {
        return e != null && typeof e == "object"
    }
    var Fi = MB,
        kB = Po,
        UB = Fi,
        BB = "[object Arguments]";

    function FB(e) {
        return UB(e) && kB(e) == BB
    }
    var GB = FB,
        oy = GB,
        WB = Fi,
        ZS = Object.prototype,
        jB = ZS.hasOwnProperty,
        HB = ZS.propertyIsEnumerable,
        qB = oy(function() {
            return arguments
        }()) ? oy : function(e) {
            return WB(e) && jB.call(e, "callee") && !HB.call(e, "callee")
        },
        eO = qB,
        KB = Array.isArray,
        Gi = KB,
        YB = 9007199254740991;

    function VB(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= YB
    }
    var tO = VB,
        zB = tg,
        XB = tO;

    function JB(e) {
        return e != null && XB(e.length) && !zB(e)
    }
    var bl = JB,
        QB = bl,
        ZB = Fi;

    function eF(e) {
        return ZB(e) && QB(e)
    }
    var tF = eF,
        ku = {
            exports: {}
        };

    function rF() {
        return !1
    }
    var nF = rF;
    ku.exports;
    (function(e, t) {
        var r = En,
            n = nF,
            s = t && !t.nodeType && t,
            o = s && !0 && e && !e.nodeType && e,
            c = o && o.exports === s,
            l = c ? r.Buffer : void 0,
            f = l ? l.isBuffer : void 0,
            d = f || n;
        e.exports = d
    })(ku, ku.exports);
    var ag = ku.exports,
        iF = Po,
        sF = sg,
        oF = Fi,
        aF = "[object Object]",
        cF = Function.prototype,
        uF = Object.prototype,
        rO = cF.toString,
        lF = uF.hasOwnProperty,
        fF = rO.call(Object);

    function dF(e) {
        if (!oF(e) || iF(e) != aF) return !1;
        var t = sF(e);
        if (t === null) return !0;
        var r = lF.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && rO.call(r) == fF
    }
    var hF = dF,
        pF = Po,
        gF = tO,
        _F = Fi,
        mF = "[object Arguments]",
        vF = "[object Array]",
        EF = "[object Boolean]",
        yF = "[object Date]",
        TF = "[object Error]",
        bF = "[object Function]",
        SF = "[object Map]",
        OF = "[object Number]",
        AF = "[object Object]",
        IF = "[object RegExp]",
        RF = "[object Set]",
        NF = "[object String]",
        CF = "[object WeakMap]",
        wF = "[object ArrayBuffer]",
        LF = "[object DataView]",
        PF = "[object Float32Array]",
        $F = "[object Float64Array]",
        DF = "[object Int8Array]",
        xF = "[object Int16Array]",
        MF = "[object Int32Array]",
        kF = "[object Uint8Array]",
        UF = "[object Uint8ClampedArray]",
        BF = "[object Uint16Array]",
        FF = "[object Uint32Array]",
        yt = {};
    yt[PF] = yt[$F] = yt[DF] = yt[xF] = yt[MF] = yt[kF] = yt[UF] = yt[BF] = yt[FF] = !0;
    yt[mF] = yt[vF] = yt[wF] = yt[EF] = yt[LF] = yt[yF] = yt[TF] = yt[bF] = yt[SF] = yt[OF] = yt[AF] = yt[IF] = yt[RF] = yt[NF] = yt[CF] = !1;

    function GF(e) {
        return _F(e) && gF(e.length) && !!yt[pF(e)]
    }
    var WF = GF;

    function jF(e) {
        return function(t) {
            return e(t)
        }
    }
    var cg = jF,
        Uu = {
            exports: {}
        };
    Uu.exports;
    (function(e, t) {
        var r = GS,
            n = t && !t.nodeType && t,
            s = n && !0 && e && !e.nodeType && e,
            o = s && s.exports === n,
            c = o && r.process,
            l = function() {
                try {
                    var f = s && s.require && s.require("util").types;
                    return f || c && c.binding && c.binding("util")
                } catch {}
            }();
        e.exports = l
    })(Uu, Uu.exports);
    var ug = Uu.exports,
        HF = WF,
        qF = cg,
        ay = ug,
        cy = ay && ay.isTypedArray,
        KF = cy ? qF(cy) : HF,
        nO = KF;

    function YF(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
    }
    var iO = YF,
        VF = ng,
        zF = _l,
        XF = Object.prototype,
        JF = XF.hasOwnProperty;

    function QF(e, t, r) {
        var n = e[t];
        (!(JF.call(e, t) && zF(n, r)) || r === void 0 && !(t in e)) && VF(e, t, r)
    }
    var lg = QF,
        ZF = lg,
        eG = ng;

    function tG(e, t, r, n) {
        var s = !r;
        r || (r = {});
        for (var o = -1, c = t.length; ++o < c;) {
            var l = t[o],
                f = n ? n(r[l], e[l], l, r, e) : void 0;
            f === void 0 && (f = e[l]), s ? eG(r, l, f) : ZF(r, l, f)
        }
        return r
    }
    var Fa = tG;

    function rG(e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
    }
    var nG = rG,
        iG = 9007199254740991,
        sG = /^(?:0|[1-9]\d*)$/;

    function oG(e, t) {
        var r = typeof e;
        return t = t ?? iG, !!t && (r == "number" || r != "symbol" && sG.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var fg = oG,
        aG = nG,
        cG = eO,
        uG = Gi,
        lG = ag,
        fG = fg,
        dG = nO,
        hG = Object.prototype,
        pG = hG.hasOwnProperty;

    function gG(e, t) {
        var r = uG(e),
            n = !r && cG(e),
            s = !r && !n && lG(e),
            o = !r && !n && !s && dG(e),
            c = r || n || s || o,
            l = c ? aG(e.length, String) : [],
            f = l.length;
        for (var d in e)(t || pG.call(e, d)) && !(c && (d == "length" || s && (d == "offset" || d == "parent") || o && (d == "buffer" || d == "byteLength" || d == "byteOffset") || fG(d, f))) && l.push(d);
        return l
    }
    var sO = gG;

    function _G(e) {
        var t = [];
        if (e != null)
            for (var r in Object(e)) t.push(r);
        return t
    }
    var mG = _G,
        vG = yn,
        EG = og,
        yG = mG,
        TG = Object.prototype,
        bG = TG.hasOwnProperty;

    function SG(e) {
        if (!vG(e)) return yG(e);
        var t = EG(e),
            r = [];
        for (var n in e) n == "constructor" && (t || !bG.call(e, n)) || r.push(n);
        return r
    }
    var OG = SG,
        AG = sO,
        IG = OG,
        RG = bl;

    function NG(e) {
        return RG(e) ? AG(e, !0) : IG(e)
    }
    var Ga = NG,
        CG = Fa,
        wG = Ga;

    function LG(e) {
        return CG(e, wG(e))
    }
    var PG = LG,
        uy = YS,
        $G = VS,
        DG = zS,
        xG = XS,
        MG = QS,
        ly = eO,
        fy = Gi,
        kG = tF,
        UG = ag,
        BG = tg,
        FG = yn,
        GG = hF,
        WG = nO,
        dy = iO,
        jG = PG;

    function HG(e, t, r, n, s, o, c) {
        var l = dy(e, r),
            f = dy(t, r),
            d = c.get(f);
        if (d) {
            uy(e, r, d);
            return
        }
        var p = o ? o(l, f, r + "", e, t, c) : void 0,
            E = p === void 0;
        if (E) {
            var _ = fy(f),
                S = !_ && UG(f),
                N = !_ && !S && WG(f);
            p = f, _ || S || N ? fy(l) ? p = l : kG(l) ? p = xG(l) : S ? (E = !1, p = $G(f, !0)) : N ? (E = !1, p = DG(f, !0)) : p = [] : GG(f) || ly(f) ? (p = l, ly(l) ? p = jG(l) : (!FG(l) || BG(l)) && (p = MG(f))) : E = !1
        }
        E && (c.set(f, p), s(p, f, n, o, c), c.delete(f)), uy(e, r, p)
    }
    var qG = HG,
        KG = qS,
        YG = YS,
        VG = _B,
        zG = qG,
        XG = yn,
        JG = Ga,
        QG = iO;

    function oO(e, t, r, n, s) {
        e !== t && VG(t, function(o, c) {
            if (s || (s = new KG), XG(o)) zG(e, t, c, r, oO, n, s);
            else {
                var l = n ? n(QG(e, c), o, c + "", e, t, s) : void 0;
                l === void 0 && (l = o), YG(e, c, l)
            }
        }, JG)
    }
    var ZG = oO;

    function e3(e) {
        return e
    }
    var aO = e3;

    function t3(e, t, r) {
        switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
        }
        return e.apply(t, r)
    }
    var r3 = t3,
        n3 = r3,
        hy = Math.max;

    function i3(e, t, r) {
        return t = hy(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, s = -1, o = hy(n.length - t, 0), c = Array(o); ++s < o;) c[s] = n[t + s];
                s = -1;
                for (var l = Array(t + 1); ++s < t;) l[s] = n[s];
                return l[t] = r(c), n3(e, this, l)
            }
    }
    var s3 = i3;

    function o3(e) {
        return function() {
            return e
        }
    }
    var a3 = o3,
        c3 = a3,
        py = KS,
        u3 = aO,
        l3 = py ? function(e, t) {
            return py(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: c3(t),
                writable: !0
            })
        } : u3,
        f3 = l3,
        d3 = 800,
        h3 = 16,
        p3 = Date.now;

    function g3(e) {
        var t = 0,
            r = 0;
        return function() {
            var n = p3(),
                s = h3 - (n - r);
            if (r = n, s > 0) {
                if (++t >= d3) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var _3 = g3,
        m3 = f3,
        v3 = _3,
        E3 = v3(m3),
        y3 = E3,
        T3 = aO,
        b3 = s3,
        S3 = y3;

    function O3(e, t) {
        return S3(b3(e, t, T3), e + "")
    }
    var A3 = O3,
        I3 = _l,
        R3 = bl,
        N3 = fg,
        C3 = yn;

    function w3(e, t, r) {
        if (!C3(r)) return !1;
        var n = typeof t;
        return (n == "number" ? R3(r) && N3(t, r.length) : n == "string" && t in r) ? I3(r[t], e) : !1
    }
    var L3 = w3,
        P3 = A3,
        $3 = L3;

    function D3(e) {
        return P3(function(t, r) {
            var n = -1,
                s = r.length,
                o = s > 1 ? r[s - 1] : void 0,
                c = s > 2 ? r[2] : void 0;
            for (o = e.length > 3 && typeof o == "function" ? (s--, o) : void 0, c && $3(r[0], r[1], c) && (o = s < 3 ? void 0 : o, s = 1), t = Object(t); ++n < s;) {
                var l = r[n];
                l && e(t, l, n, o)
            }
            return t
        })
    }
    var x3 = D3,
        M3 = ZG,
        k3 = x3,
        U3 = k3(function(e, t, r) {
            M3(e, t, r)
        }),
        B3 = U3;
    const F3 = ki(B3);
    class vs {
        static set(t) {
            if (t && this.isSupported(t)) {
                this.locale = t;
                return
            }
            this.locale = this.getPreferredDeviceLocale()
        }
        static getPreferredDeviceLocale() {
            const t = navigator.languages;
            for (let r = 0; r < t.length; r++)
                if (this.isSupported(t[r])) return t[r];
            return this.supported[0]
        }
        static isSupported(t) {
            return Object.values(this.supported).includes(t)
        }
        static mergeMessages(...t) {
            return F3(t[0], ...t)
        }
    }
    Oe(vs, "locale"), Oe(vs, "supported", ["en"]);
    var Si;
    let $n = (Si = class {
        static get serverUrl() {
            const t = this.getQueryParam("server") ?? this.getQueryParam("s");
            return !t || t === "live" ? "ecast.jackboxgames.com" : t === "local" ? "https://localhost" : t.includes("localhost") ? t : `${t}.jackboxgames.com`
        }
        static isDevelopment() {
            return window.location.hostname === "dev.jackbox.tv" || window.location.hostname === "localhost"
        }
        static isProduction() {
            return window.location.hostname === "jackbox.tv"
        }
        static get isCanvasSupported() {
            const t = document.createElement("canvas");
            return !!(t.getContext && t.getContext("2d"))
        }
        static htmlUnescape(t) {
            return String(t).replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&")
        }
        static htmlEscape(t) {
            return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
        static sanitize(t) {
            const r = this.sanitizeInput(t).replace(/'/g, "’");
            return this.htmlEscape(r).trim()
        }
        static sanitizeName(t) {
            return t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u017F\u2026!?*$+\-'_ .,]/gi, "").replace(/'/g, "’")
        }
        static sanitizeInput(t) {
            return t = t.replace("…", "..."), t.replace(/[^\u00A1\u0020-\u007E\u00BF-\u017F’]/gi, "")
        }
        static sanitizeEmoji(t) {
            return t.replace(/(\u00a9|\u00ae|[\u2000-\u2017]|[\u2020-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/, "")
        }
        static safeText(t) {
            const r = document.createElement("div");
            return r.textContent = t, r.innerHTML
        }
        static htmlTagsToBBCode(t, r) {
            if (!r.length) throw new Error("[Utils.htmlTagsToBBCode] No tag pairs were passed in");
            return r.reduce((n, s) => (n.replaceAll(`<${s[0]}>`, `[${s[1]}]`), n.replaceAll(`</${s[0]}>`, `</${s[1]}>`), n), t)
        }
        static hexToRgb(t) {
            const r = new ArrayBuffer(4);
            new DataView(r).setUint32(0, parseInt(t.replace("#", ""), 16), !1);
            const s = new Uint8Array(r);
            return `${s[1]},${s[2]},${s[3]}`
        }
        static adjustColor(t, r) {
            let n = !1,
                s = t;
            s[0] === "#" && (s = s.slice(1), n = !0);
            const o = parseInt(s, 16),
                c = Math.min(Math.max(0, (o >> 16) * r), 255),
                l = Math.min(Math.max(0, (o >> 8 & 255) * r), 255);
            let d = (Math.min(Math.max(0, (o & 255) * r), 255) | l << 8 | c << 16).toString(16);
            for (; d.length < s.length;) d = `0${d}`;
            return (n ? "#" : "") + d
        }
        static isInTolerance(t, r, n) {
            return !(Math.abs(t.x - r.x) < n || Math.abs(t.y - r.y) > n)
        }
        static getDistanceBetweenPoints(t, r) {
            const n = [t.x - r.x, t.y - r.y],
                s = Math.hypot(...n);
            return Math.round(s * 100) / 100
        }
        static getMidpoint(t, r) {
            return {
                x: (t.x + r.x) / 2,
                y: (t.y + r.y) / 2
            }
        }
        static getAngleBetweenPoints(t, r) {
            let s = Math.atan2(r.y - t.y, r.x - t.x) * (180 / Math.PI);
            return s < 0 && (s += 360), 360 - s
        }
        static getAngularDistance(t, r) {
            let n = (r - t) % 360;
            const s = n < 0 ? 1 : -1;
            return n = Math.abs(n), n > 180 ? s * (360 - n) : s * n
        }
        static getVelocity(t, r, n, s) {
            return this.getDistanceBetweenPoints(t, n) / (s - r)
        }
        static isInsideElement(t, r) {
            const n = r.getBoundingClientRect();
            return !(t.x < n.left || t.x > n.left + n.width || t.y < n.top || t.y > n.top + n.height)
        }
        static cyrb128(t) {
            let r = 1779033703,
                n = 3144134277,
                s = 1013904242,
                o = 2773480762;
            for (let c = 0, l; c < t.length; c++) l = t.charCodeAt(c), r = n ^ Math.imul(r ^ l, 597399067), n = s ^ Math.imul(n ^ l, 2869860233), s = o ^ Math.imul(s ^ l, 951274213), o = r ^ Math.imul(o ^ l, 2716044179);
            return r = Math.imul(s ^ r >>> 18, 597399067), n = Math.imul(o ^ n >>> 22, 2869860233), s = Math.imul(r ^ s >>> 17, 951274213), o = Math.imul(n ^ o >>> 19, 2716044179), [(r ^ n ^ s ^ o) >>> 0, (n ^ r) >>> 0, (s ^ r) >>> 0, (o ^ r) >>> 0]
        }
        static sfc32(t, r, n, s) {
            return function() {
                t >>>= 0, r >>>= 0, n >>>= 0, s >>>= 0;
                let c = t + r | 0;
                return t = r ^ r >>> 9, r = n + (n << 3) | 0, n = n << 21 | n >>> 11, s = s + 1 | 0, c = c + s | 0, n = n + c | 0, (c >>> 0) / 4294967296
            }
        }
    }, Oe(Si, "queryParams", new URLSearchParams(window.location.search)), Oe(Si, "getQueryParam", t => Si.queryParams.get(t)), Oe(Si, "sleep", t => new Promise(r => {
        window.setTimeout(r, t)
    })), Si);
    class cn {
        static get namespace() {
            var t;
            return ((t = window.tv.storage) == null ? void 0 : t.namespace) ?? this.defaultNamespace
        }
        static get isDisabled() {
            var t;
            return ((t = window.tv.storage) == null ? void 0 : t.isDisabled) ?? !1
        }
        static get tag() {
            var t;
            return (t = window.tv.storage) == null ? void 0 : t.tag
        }
        static get code() {
            var t;
            return (t = window.tv.storage) == null ? void 0 : t.code
        }
        static get isSupported() {
            if (this.isDisabled) return !1;
            try {
                return window.localStorage ? (window.localStorage.setItem("support-check", "1"), window.localStorage.removeItem("support-check"), !0) : !1
            } catch {
                return !1
            }
        }
        static setup(t, r) {
            delete window.tv.storage, window.tv.storage = {
                namespace: $n.getQueryParam("namespace") ?? $n.getQueryParam("ns") ?? this.defaultNamespace,
                isDisabled: $n.queryParams.has("incognito") || $n.queryParams.has("nc")
            }, t && (window.tv.storage.tag = t), r && (window.tv.storage.code = r.toLowerCase(), this.clearCodeScopedKeys(window.tv.storage.code))
        }
        static get(t, r) {
            return this.isSupported ? window.localStorage.getItem(this.getScopedKey(t, r)) : null
        }
        static set(t, r, n = "none") {
            if (this.isSupported) return window.localStorage.setItem(this.getScopedSetKey(t, n), r)
        }
        static remove(t, r) {
            if (this.isSupported) return window.localStorage.removeItem(this.getScopedKey(t, r))
        }
        static setTag(t) {
            const r = t.toLowerCase(),
                n = this.get("tags") ?? "[]",
                s = r.split("-")[0];
            let o = JSON.parse(n);
            o = o.filter(c => {
                const l = c.split("-")[0];
                return s !== l
            }), o.push(r), this.set("tags", JSON.stringify(o))
        }
        static getScopedKey(t, r) {
            const n = `${this.namespace}:${t}`,
                s = this.tag ? `${this.namespace}:${t}:tag:${this.tag}` : null,
                o = this.code ? `${this.namespace}:${t}:code:${this.code}` : null;
            if (r === "none") return n;
            if (r === "tag") {
                if (!s) throw new Error('[Storage] requested "tag" scope but tv.storage.tag is undefined');
                return s
            }
            if (r === "code") {
                if (!o) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
                return o
            }
            return o && window.localStorage.getItem(o) !== null ? o : s && window.localStorage.getItem(s) !== null ? s : n
        }
        static getScopedSetKey(t, r = "none") {
            if (r === "tag") {
                if (!this.tag) throw new Error('[Storage] requested "room" scope but tv.storage.tag is undefined');
                return `${this.namespace}:${t}:tag:${this.tag}`
            }
            if (r === "code") {
                if (!this.code) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
                return `${this.namespace}:${t}:code:${this.code}`
            }
            return `${this.namespace}:${t}`
        }
        static clearCodeScopedKeys(t) {
            this.isSupported && Object.keys(window.localStorage).forEach(r => {
                const n = r.split(":code:");
                n.length <= 1 || n[1] !== t && window.localStorage.removeItem(r)
            })
        }
    }
    Oe(cn, "defaultNamespace", "tv");
    class oo {
        constructor() {
            Oe(this, "artifacts");
            this.migrate(), this.artifacts = this.list()
        }
        get hasUnviewed() {
            return this.artifacts.some(t => !t.isViewed)
        }
        getUrl(t, r) {
            return r.galleryId ? `/gallery/${r.galleryId}/${t.artifactId}` : t.isTest ? `http://games-test.jackbox.tv/artifact/${t.categoryId}/${t.artifactId}/` : `https://games.jackbox.tv/artifact/${t.categoryId}/${t.artifactId}/`
        }
        getLocalArtifact(t) {
            const r = new Intl.DateTimeFormat(vs.locale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }),
                n = pk(t.categoryId);
            if (!n) throw new Error(`[Artifacts] Unknown game with categoryId ${t.categoryId}`);
            const s = new Date(t.time),
                o = r.format(s),
                c = this.getUrl(t, n);
            return {
                ...t,
                gameName: n.name ?? "",
                date: o,
                url: c
            }
        }
        list() {
            if (!cn.isSupported) return [];
            const t = Date.now(),
                r = cn.get("artifacts");
            if (!r) return [];
            try {
                return JSON.parse(r).filter(s => t - s.time < 525600 * 60 * 1e3).map(s => this.getLocalArtifact(s))
            } catch {
                return console.warn("[Artifacts] Unable to parse artifacts array"), []
            }
        }
        persist() {
            const t = this.artifacts.map(r => ({
                artifactId: r.artifactId,
                categoryId: r.categoryId,
                isTest: r.isTest,
                isViewed: r.isViewed,
                time: r.time
            }));
            cn.set("artifacts", JSON.stringify(t))
        }
        setAsViewed(t) {
            if (cn.isSupported && this.artifacts[t]) try {
                this.artifacts[t].isViewed = !0, this.persist()
            } catch {
                console.warn(`[Artifacts] Unable to mark artifact ${t} as viewed`)
            }
        }
        add(t) {
            var n;
            if (!cn.isSupported) return;
            const r = {
                categoryId: t.categoryId,
                artifactId: t.artifactId,
                isTest: ((n = t.rootId) == null ? void 0 : n.includes("test")) ?? !1,
                time: new Date().getTime(),
                isViewed: !1
            };
            this.artifacts.unshift(this.getLocalArtifact(r)), this.persist()
        }
        remove(t) {
            if (cn.isSupported) try {
                this.artifacts.splice(t, 1), this.persist()
            } catch {
                console.warn("[Artifacts] Unable to remove artifact")
            }
        }
        static setAsViewed(t) {
            new oo().setAsViewed(t)
        }
        static add(t) {
            new oo().add(t)
        }
        static remove(t) {
            new oo().remove(t)
        }
        migrate() {
            const t = cn.get("galleries");
            if (!t) return;
            const n = JSON.parse(t).map(o => {
                    const c = o.url.split("/"),
                        l = c[c.length - 2],
                        f = o.url.includes("games-test");
                    return {
                        categoryId: o.categoryId,
                        artifactId: l,
                        isTest: f,
                        time: o.time,
                        isViewed: o.viewed
                    }
                }),
                s = JSON.parse(cn.get("artifacts") ?? "[]");
            cn.set("artifacts", JSON.stringify([...n, ...s])), cn.remove("galleries")
        }
    }
    var Oh = {
        exports: {}
    };
    (function(e, t) {
        var r = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof Pt < "u" && Pt,
            n = function() {
                function o() {
                    this.fetch = !1, this.DOMException = r.DOMException
                }
                return o.prototype = r, new o
            }();
        (function(o) {
            (function(c) {
                var l = typeof o < "u" && o || typeof self < "u" && self || typeof l < "u" && l,
                    f = {
                        searchParams: "URLSearchParams" in l,
                        iterable: "Symbol" in l && "iterator" in Symbol,
                        blob: "FileReader" in l && "Blob" in l && function() {
                            try {
                                return new Blob, !0
                            } catch {
                                return !1
                            }
                        }(),
                        formData: "FormData" in l,
                        arrayBuffer: "ArrayBuffer" in l
                    };

                function d(H) {
                    return H && DataView.prototype.isPrototypeOf(H)
                }
                if (f.arrayBuffer) var p = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    E = ArrayBuffer.isView || function(H) {
                        return H && p.indexOf(Object.prototype.toString.call(H)) > -1
                    };

                function _(H) {
                    if (typeof H != "string" && (H = String(H)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(H) || H === "") throw new TypeError('Invalid character in header field name: "' + H + '"');
                    return H.toLowerCase()
                }

                function S(H) {
                    return typeof H != "string" && (H = String(H)), H
                }

                function N(H) {
                    var Q = {
                        next: function() {
                            var de = H.shift();
                            return {
                                done: de === void 0,
                                value: de
                            }
                        }
                    };
                    return f.iterable && (Q[Symbol.iterator] = function() {
                        return Q
                    }), Q
                }

                function L(H) {
                    this.map = {}, H instanceof L ? H.forEach(function(Q, de) {
                        this.append(de, Q)
                    }, this) : Array.isArray(H) ? H.forEach(function(Q) {
                        this.append(Q[0], Q[1])
                    }, this) : H && Object.getOwnPropertyNames(H).forEach(function(Q) {
                        this.append(Q, H[Q])
                    }, this)
                }
                L.prototype.append = function(H, Q) {
                    H = _(H), Q = S(Q);
                    var de = this.map[H];
                    this.map[H] = de ? de + ", " + Q : Q
                }, L.prototype.delete = function(H) {
                    delete this.map[_(H)]
                }, L.prototype.get = function(H) {
                    return H = _(H), this.has(H) ? this.map[H] : null
                }, L.prototype.has = function(H) {
                    return this.map.hasOwnProperty(_(H))
                }, L.prototype.set = function(H, Q) {
                    this.map[_(H)] = S(Q)
                }, L.prototype.forEach = function(H, Q) {
                    for (var de in this.map) this.map.hasOwnProperty(de) && H.call(Q, this.map[de], de, this)
                }, L.prototype.keys = function() {
                    var H = [];
                    return this.forEach(function(Q, de) {
                        H.push(de)
                    }), N(H)
                }, L.prototype.values = function() {
                    var H = [];
                    return this.forEach(function(Q) {
                        H.push(Q)
                    }), N(H)
                }, L.prototype.entries = function() {
                    var H = [];
                    return this.forEach(function(Q, de) {
                        H.push([de, Q])
                    }), N(H)
                }, f.iterable && (L.prototype[Symbol.iterator] = L.prototype.entries);

                function M(H) {
                    if (H.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    H.bodyUsed = !0
                }

                function R(H) {
                    return new Promise(function(Q, de) {
                        H.onload = function() {
                            Q(H.result)
                        }, H.onerror = function() {
                            de(H.error)
                        }
                    })
                }

                function G(H) {
                    var Q = new FileReader,
                        de = R(Q);
                    return Q.readAsArrayBuffer(H), de
                }

                function K(H) {
                    var Q = new FileReader,
                        de = R(Q);
                    return Q.readAsText(H), de
                }

                function U(H) {
                    for (var Q = new Uint8Array(H), de = new Array(Q.length), pe = 0; pe < Q.length; pe++) de[pe] = String.fromCharCode(Q[pe]);
                    return de.join("")
                }

                function j(H) {
                    if (H.slice) return H.slice(0);
                    var Q = new Uint8Array(H.byteLength);
                    return Q.set(new Uint8Array(H)), Q.buffer
                }

                function X() {
                    return this.bodyUsed = !1, this._initBody = function(H) {
                        this.bodyUsed = this.bodyUsed, this._bodyInit = H, H ? typeof H == "string" ? this._bodyText = H : f.blob && Blob.prototype.isPrototypeOf(H) ? this._bodyBlob = H : f.formData && FormData.prototype.isPrototypeOf(H) ? this._bodyFormData = H : f.searchParams && URLSearchParams.prototype.isPrototypeOf(H) ? this._bodyText = H.toString() : f.arrayBuffer && f.blob && d(H) ? (this._bodyArrayBuffer = j(H.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : f.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(H) || E(H)) ? this._bodyArrayBuffer = j(H) : this._bodyText = H = Object.prototype.toString.call(H) : this._bodyText = "", this.headers.get("content-type") || (typeof H == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : f.searchParams && URLSearchParams.prototype.isPrototypeOf(H) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, f.blob && (this.blob = function() {
                        var H = M(this);
                        if (H) return H;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        if (this._bodyArrayBuffer) {
                            var H = M(this);
                            return H || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                        } else return this.blob().then(G)
                    }), this.text = function() {
                        var H = M(this);
                        if (H) return H;
                        if (this._bodyBlob) return K(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(U(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, f.formData && (this.formData = function() {
                        return this.text().then(Ae)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                var ie = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function ue(H) {
                    var Q = H.toUpperCase();
                    return ie.indexOf(Q) > -1 ? Q : H
                }

                function ce(H, Q) {
                    if (!(this instanceof ce)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    Q = Q || {};
                    var de = Q.body;
                    if (H instanceof ce) {
                        if (H.bodyUsed) throw new TypeError("Already read");
                        this.url = H.url, this.credentials = H.credentials, Q.headers || (this.headers = new L(H.headers)), this.method = H.method, this.mode = H.mode, this.signal = H.signal, !de && H._bodyInit != null && (de = H._bodyInit, H.bodyUsed = !0)
                    } else this.url = String(H);
                    if (this.credentials = Q.credentials || this.credentials || "same-origin", (Q.headers || !this.headers) && (this.headers = new L(Q.headers)), this.method = ue(Q.method || this.method || "GET"), this.mode = Q.mode || this.mode || null, this.signal = Q.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && de) throw new TypeError("Body not allowed for GET or HEAD requests");
                    if (this._initBody(de), (this.method === "GET" || this.method === "HEAD") && (Q.cache === "no-store" || Q.cache === "no-cache")) {
                        var pe = /([?&])_=[^&]*/;
                        if (pe.test(this.url)) this.url = this.url.replace(pe, "$1_=" + new Date().getTime());
                        else {
                            var we = /\?/;
                            this.url += (we.test(this.url) ? "&" : "?") + "_=" + new Date().getTime()
                        }
                    }
                }
                ce.prototype.clone = function() {
                    return new ce(this, {
                        body: this._bodyInit
                    })
                };

                function Ae(H) {
                    var Q = new FormData;
                    return H.trim().split("&").forEach(function(de) {
                        if (de) {
                            var pe = de.split("="),
                                we = pe.shift().replace(/\+/g, " "),
                                me = pe.join("=").replace(/\+/g, " ");
                            Q.append(decodeURIComponent(we), decodeURIComponent(me))
                        }
                    }), Q
                }

                function Me(H) {
                    var Q = new L,
                        de = H.replace(/\r?\n[\t ]+/g, " ");
                    return de.split("\r").map(function(pe) {
                        return pe.indexOf(`
`) === 0 ? pe.substr(1, pe.length) : pe
                    }).forEach(function(pe) {
                        var we = pe.split(":"),
                            me = we.shift().trim();
                        if (me) {
                            var Be = we.join(":").trim();
                            Q.append(me, Be)
                        }
                    }), Q
                }
                X.call(ce.prototype);

                function fe(H, Q) {
                    if (!(this instanceof fe)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    Q || (Q = {}), this.type = "default", this.status = Q.status === void 0 ? 200 : Q.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = Q.statusText === void 0 ? "" : "" + Q.statusText, this.headers = new L(Q.headers), this.url = Q.url || "", this._initBody(H)
                }
                X.call(fe.prototype), fe.prototype.clone = function() {
                    return new fe(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new L(this.headers),
                        url: this.url
                    })
                }, fe.error = function() {
                    var H = new fe(null, {
                        status: 0,
                        statusText: ""
                    });
                    return H.type = "error", H
                };
                var Ie = [301, 302, 303, 307, 308];
                fe.redirect = function(H, Q) {
                    if (Ie.indexOf(Q) === -1) throw new RangeError("Invalid status code");
                    return new fe(null, {
                        status: Q,
                        headers: {
                            location: H
                        }
                    })
                }, c.DOMException = l.DOMException;
                try {
                    new c.DOMException
                } catch {
                    c.DOMException = function(Q, de) {
                        this.message = Q, this.name = de;
                        var pe = Error(Q);
                        this.stack = pe.stack
                    }, c.DOMException.prototype = Object.create(Error.prototype), c.DOMException.prototype.constructor = c.DOMException
                }

                function He(H, Q) {
                    return new Promise(function(de, pe) {
                        var we = new ce(H, Q);
                        if (we.signal && we.signal.aborted) return pe(new c.DOMException("Aborted", "AbortError"));
                        var me = new XMLHttpRequest;

                        function Be() {
                            me.abort()
                        }
                        me.onload = function() {
                            var ct = {
                                status: me.status,
                                statusText: me.statusText,
                                headers: Me(me.getAllResponseHeaders() || "")
                            };
                            ct.url = "responseURL" in me ? me.responseURL : ct.headers.get("X-Request-URL");
                            var Jt = "response" in me ? me.response : me.responseText;
                            setTimeout(function() {
                                de(new fe(Jt, ct))
                            }, 0)
                        }, me.onerror = function() {
                            setTimeout(function() {
                                pe(new TypeError("Network request failed"))
                            }, 0)
                        }, me.ontimeout = function() {
                            setTimeout(function() {
                                pe(new TypeError("Network request failed"))
                            }, 0)
                        }, me.onabort = function() {
                            setTimeout(function() {
                                pe(new c.DOMException("Aborted", "AbortError"))
                            }, 0)
                        };

                        function Xe(ct) {
                            try {
                                return ct === "" && l.location.href ? l.location.href : ct
                            } catch {
                                return ct
                            }
                        }
                        me.open(we.method, Xe(we.url), !0), we.credentials === "include" ? me.withCredentials = !0 : we.credentials === "omit" && (me.withCredentials = !1), "responseType" in me && (f.blob ? me.responseType = "blob" : f.arrayBuffer && we.headers.get("Content-Type") && we.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (me.responseType = "arraybuffer")), Q && typeof Q.headers == "object" && !(Q.headers instanceof L) ? Object.getOwnPropertyNames(Q.headers).forEach(function(ct) {
                            me.setRequestHeader(ct, S(Q.headers[ct]))
                        }) : we.headers.forEach(function(ct, Jt) {
                            me.setRequestHeader(Jt, ct)
                        }), we.signal && (we.signal.addEventListener("abort", Be), me.onreadystatechange = function() {
                            me.readyState === 4 && we.signal.removeEventListener("abort", Be)
                        }), me.send(typeof we._bodyInit > "u" ? null : we._bodyInit)
                    })
                }
                return He.polyfill = !0, l.fetch || (l.fetch = He, l.Headers = L, l.Request = ce, l.Response = fe), c.Headers = L, c.Request = ce, c.Response = fe, c.fetch = He, c
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var s = r.fetch ? r : n;
        t = s.fetch, t.default = s.fetch, t.fetch = s.fetch, t.Headers = s.Headers, t.Request = s.Request, t.Response = s.Response, e.exports = t
    })(Oh, Oh.exports);
    var G3 = Oh.exports,
        W3 = function() {
            if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
            if (typeof Symbol.iterator == "symbol") return !0;
            var t = {},
                r = Symbol("test"),
                n = Object(r);
            if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return !1;
            var s = 42;
            t[r] = s;
            for (r in t) return !1;
            if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0) return !1;
            var o = Object.getOwnPropertySymbols(t);
            if (o.length !== 1 || o[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r)) return !1;
            if (typeof Object.getOwnPropertyDescriptor == "function") {
                var c = Object.getOwnPropertyDescriptor(t, r);
                if (c.value !== s || c.enumerable !== !0) return !1
            }
            return !0
        },
        gy = typeof Symbol < "u" && Symbol,
        j3 = W3,
        H3 = function() {
            return typeof gy != "function" || typeof Symbol != "function" || typeof gy("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : j3()
        },
        q3 = "Function.prototype.bind called on incompatible ",
        hd = Array.prototype.slice,
        K3 = Object.prototype.toString,
        Y3 = "[object Function]",
        V3 = function(t) {
            var r = this;
            if (typeof r != "function" || K3.call(r) !== Y3) throw new TypeError(q3 + r);
            for (var n = hd.call(arguments, 1), s, o = function() {
                    if (this instanceof s) {
                        var p = r.apply(this, n.concat(hd.call(arguments)));
                        return Object(p) === p ? p : this
                    } else return r.apply(t, n.concat(hd.call(arguments)))
                }, c = Math.max(0, r.length - n.length), l = [], f = 0; f < c; f++) l.push("$" + f);
            if (s = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(o), r.prototype) {
                var d = function() {};
                d.prototype = r.prototype, s.prototype = new d, d.prototype = null
            }
            return s
        },
        z3 = V3,
        dg = Function.prototype.bind || z3,
        X3 = dg,
        J3 = X3.call(Function.call, Object.prototype.hasOwnProperty),
        tt, So = SyntaxError,
        cO = Function,
        ao = TypeError,
        pd = function(e) {
            try {
                return cO('"use strict"; return (' + e + ").constructor;")()
            } catch {}
        },
        Es = Object.getOwnPropertyDescriptor;
    if (Es) try {
        Es({}, "")
    } catch {
        Es = null
    }
    var gd = function() {
            throw new ao
        },
        Q3 = Es ? function() {
            try {
                return arguments.callee, gd
            } catch {
                try {
                    return Es(arguments, "callee").get
                } catch {
                    return gd
                }
            }
        }() : gd,
        js = H3(),
        Ei = Object.getPrototypeOf || function(e) {
            return e.__proto__
        },
        Ks = {},
        Z3 = typeof Uint8Array > "u" ? tt : Ei(Uint8Array),
        co = {
            "%AggregateError%": typeof AggregateError > "u" ? tt : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? tt : ArrayBuffer,
            "%ArrayIteratorPrototype%": js ? Ei([][Symbol.iterator]()) : tt,
            "%AsyncFromSyncIteratorPrototype%": tt,
            "%AsyncFunction%": Ks,
            "%AsyncGenerator%": Ks,
            "%AsyncGeneratorFunction%": Ks,
            "%AsyncIteratorPrototype%": Ks,
            "%Atomics%": typeof Atomics > "u" ? tt : Atomics,
            "%BigInt%": typeof BigInt > "u" ? tt : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": typeof DataView > "u" ? tt : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": typeof Float32Array > "u" ? tt : Float32Array,
            "%Float64Array%": typeof Float64Array > "u" ? tt : Float64Array,
            "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? tt : FinalizationRegistry,
            "%Function%": cO,
            "%GeneratorFunction%": Ks,
            "%Int8Array%": typeof Int8Array > "u" ? tt : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? tt : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? tt : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": js ? Ei(Ei([][Symbol.iterator]())) : tt,
            "%JSON%": typeof JSON == "object" ? JSON : tt,
            "%Map%": typeof Map > "u" ? tt : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !js ? tt : Ei(new Map()[Symbol.iterator]()),
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": typeof Promise > "u" ? tt : Promise,
            "%Proxy%": typeof Proxy > "u" ? tt : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": typeof Reflect > "u" ? tt : Reflect,
            "%RegExp%": RegExp,
            "%Set%": typeof Set > "u" ? tt : Set,
            "%SetIteratorPrototype%": typeof Set > "u" || !js ? tt : Ei(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? tt : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": js ? Ei("" [Symbol.iterator]()) : tt,
            "%Symbol%": js ? Symbol : tt,
            "%SyntaxError%": So,
            "%ThrowTypeError%": Q3,
            "%TypedArray%": Z3,
            "%TypeError%": ao,
            "%Uint8Array%": typeof Uint8Array > "u" ? tt : Uint8Array,
            "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? tt : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? tt : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? tt : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap > "u" ? tt : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? tt : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? tt : WeakSet
        },
        e4 = function e(t) {
            var r;
            if (t === "%AsyncFunction%") r = pd("async function () {}");
            else if (t === "%GeneratorFunction%") r = pd("function* () {}");
            else if (t === "%AsyncGeneratorFunction%") r = pd("async function* () {}");
            else if (t === "%AsyncGenerator%") {
                var n = e("%AsyncGeneratorFunction%");
                n && (r = n.prototype)
            } else if (t === "%AsyncIteratorPrototype%") {
                var s = e("%AsyncGenerator%");
                s && (r = Ei(s.prototype))
            }
            return co[t] = r, r
        },
        _y = {
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
        Wa = dg,
        Bu = J3,
        t4 = Wa.call(Function.call, Array.prototype.concat),
        r4 = Wa.call(Function.apply, Array.prototype.splice),
        my = Wa.call(Function.call, String.prototype.replace),
        Fu = Wa.call(Function.call, String.prototype.slice),
        n4 = Wa.call(Function.call, RegExp.prototype.exec),
        i4 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        s4 = /\\(\\)?/g,
        o4 = function(t) {
            var r = Fu(t, 0, 1),
                n = Fu(t, -1);
            if (r === "%" && n !== "%") throw new So("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new So("invalid intrinsic syntax, expected opening `%`");
            var s = [];
            return my(t, i4, function(o, c, l, f) {
                s[s.length] = l ? my(f, s4, "$1") : c || o
            }), s
        },
        a4 = function(t, r) {
            var n = t,
                s;
            if (Bu(_y, n) && (s = _y[n], n = "%" + s[0] + "%"), Bu(co, n)) {
                var o = co[n];
                if (o === Ks && (o = e4(n)), typeof o > "u" && !r) throw new ao("intrinsic " + t + " exists, but is not available. Please file an issue!");
                return {
                    alias: s,
                    name: n,
                    value: o
                }
            }
            throw new So("intrinsic " + t + " does not exist!")
        },
        hg = function(t, r) {
            if (typeof t != "string" || t.length === 0) throw new ao("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new ao('"allowMissing" argument must be a boolean');
            if (n4(/^%?[^%]*%?$/g, t) === null) throw new So("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = o4(t),
                s = n.length > 0 ? n[0] : "",
                o = a4("%" + s + "%", r),
                c = o.name,
                l = o.value,
                f = !1,
                d = o.alias;
            d && (s = d[0], r4(n, t4([0, 1], d)));
            for (var p = 1, E = !0; p < n.length; p += 1) {
                var _ = n[p],
                    S = Fu(_, 0, 1),
                    N = Fu(_, -1);
                if ((S === '"' || S === "'" || S === "`" || N === '"' || N === "'" || N === "`") && S !== N) throw new So("property names with quotes must have matching quotes");
                if ((_ === "constructor" || !E) && (f = !0), s += "." + _, c = "%" + s + "%", Bu(co, c)) l = co[c];
                else if (l != null) {
                    if (!(_ in l)) {
                        if (!r) throw new ao("base intrinsic for " + t + " exists, but the property is not available.");
                        return
                    }
                    if (Es && p + 1 >= n.length) {
                        var L = Es(l, _);
                        E = !!L, E && "get" in L && !("originalValue" in L.get) ? l = L.get : l = l[_]
                    } else E = Bu(l, _), l = l[_];
                    E && !f && (co[c] = l)
                }
            }
            return l
        },
        uO = {
            exports: {}
        };
    (function(e) {
        var t = dg,
            r = hg,
            n = r("%Function.prototype.apply%"),
            s = r("%Function.prototype.call%"),
            o = r("%Reflect.apply%", !0) || t.call(s, n),
            c = r("%Object.getOwnPropertyDescriptor%", !0),
            l = r("%Object.defineProperty%", !0),
            f = r("%Math.max%");
        if (l) try {
            l({}, "a", {
                value: 1
            })
        } catch {
            l = null
        }
        e.exports = function(E) {
            var _ = o(t, s, arguments);
            if (c && l) {
                var S = c(_, "length");
                S.configurable && l(_, "length", {
                    value: 1 + f(0, E.length - (arguments.length - 1))
                })
            }
            return _
        };
        var d = function() {
            return o(t, n, arguments)
        };
        l ? l(e.exports, "apply", {
            value: d
        }) : e.exports.apply = d
    })(uO);
    var c4 = uO.exports,
        lO = hg,
        fO = c4,
        u4 = fO(lO("String.prototype.indexOf")),
        l4 = function(t, r) {
            var n = lO(t, !!r);
            return typeof n == "function" && u4(t, ".prototype.") > -1 ? fO(n) : n
        };
    const f4 = {},
        d4 = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: f4
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        h4 = BM(d4);
    var pg = typeof Map == "function" && Map.prototype,
        _d = Object.getOwnPropertyDescriptor && pg ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        Gu = pg && _d && typeof _d.get == "function" ? _d.get : null,
        p4 = pg && Map.prototype.forEach,
        gg = typeof Set == "function" && Set.prototype,
        md = Object.getOwnPropertyDescriptor && gg ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        Wu = gg && md && typeof md.get == "function" ? md.get : null,
        g4 = gg && Set.prototype.forEach,
        _4 = typeof WeakMap == "function" && WeakMap.prototype,
        ma = _4 ? WeakMap.prototype.has : null,
        m4 = typeof WeakSet == "function" && WeakSet.prototype,
        va = m4 ? WeakSet.prototype.has : null,
        v4 = typeof WeakRef == "function" && WeakRef.prototype,
        vy = v4 ? WeakRef.prototype.deref : null,
        E4 = Boolean.prototype.valueOf,
        y4 = Object.prototype.toString,
        T4 = Function.prototype.toString,
        b4 = String.prototype.match,
        _g = String.prototype.slice,
        Ii = String.prototype.replace,
        S4 = String.prototype.toUpperCase,
        Ey = String.prototype.toLowerCase,
        dO = RegExp.prototype.test,
        yy = Array.prototype.concat,
        Ln = Array.prototype.join,
        O4 = Array.prototype.slice,
        Ty = Math.floor,
        Ah = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
        vd = Object.getOwnPropertySymbols,
        Ih = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
        Oo = typeof Symbol == "function" && typeof Symbol.iterator == "object",
        dr = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Oo || "symbol") ? Symbol.toStringTag : null,
        hO = Object.prototype.propertyIsEnumerable,
        by = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__
        } : null);

    function Sy(e, t) {
        if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || dO.call(/e/, t)) return t;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof e == "number") {
            var n = e < 0 ? -Ty(-e) : Ty(e);
            if (n !== e) {
                var s = String(n),
                    o = _g.call(t, s.length + 1);
                return Ii.call(s, r, "$&_") + "." + Ii.call(Ii.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return Ii.call(t, r, "$&_")
    }
    var Rh = h4,
        Oy = Rh.custom,
        Ay = gO(Oy) ? Oy : null,
        A4 = function e(t, r, n, s) {
            var o = r || {};
            if (yi(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
            if (yi(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
            var c = yi(o, "customInspect") ? o.customInspect : !0;
            if (typeof c != "boolean" && c !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
            if (yi(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
            if (yi(o, "numericSeparator") && typeof o.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
            var l = o.numericSeparator;
            if (typeof t > "u") return "undefined";
            if (t === null) return "null";
            if (typeof t == "boolean") return t ? "true" : "false";
            if (typeof t == "string") return mO(t, o);
            if (typeof t == "number") {
                if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
                var f = String(t);
                return l ? Sy(t, f) : f
            }
            if (typeof t == "bigint") {
                var d = String(t) + "n";
                return l ? Sy(t, d) : d
            }
            var p = typeof o.depth > "u" ? 5 : o.depth;
            if (typeof n > "u" && (n = 0), n >= p && p > 0 && typeof t == "object") return Nh(t) ? "[Array]" : "[Object]";
            var E = j4(o, n);
            if (typeof s > "u") s = [];
            else if (_O(s, t) >= 0) return "[Circular]";

            function _(Ie, He, H) {
                if (He && (s = O4.call(s), s.push(He)), H) {
                    var Q = {
                        depth: o.depth
                    };
                    return yi(o, "quoteStyle") && (Q.quoteStyle = o.quoteStyle), e(Ie, Q, n + 1, s)
                }
                return e(Ie, o, n + 1, s)
            }
            if (typeof t == "function" && !Iy(t)) {
                var S = D4(t),
                    N = Yc(t, _);
                return "[Function" + (S ? ": " + S : " (anonymous)") + "]" + (N.length > 0 ? " { " + Ln.call(N, ", ") + " }" : "")
            }
            if (gO(t)) {
                var L = Oo ? Ii.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Ih.call(t);
                return typeof t == "object" && !Oo ? oa(L) : L
            }
            if (F4(t)) {
                for (var M = "<" + Ey.call(String(t.nodeName)), R = t.attributes || [], G = 0; G < R.length; G++) M += " " + R[G].name + "=" + pO(I4(R[G].value), "double", o);
                return M += ">", t.childNodes && t.childNodes.length && (M += "..."), M += "</" + Ey.call(String(t.nodeName)) + ">", M
            }
            if (Nh(t)) {
                if (t.length === 0) return "[]";
                var K = Yc(t, _);
                return E && !W4(K) ? "[" + Ch(K, E) + "]" : "[ " + Ln.call(K, ", ") + " ]"
            }
            if (N4(t)) {
                var U = Yc(t, _);
                return !("cause" in Error.prototype) && "cause" in t && !hO.call(t, "cause") ? "{ [" + String(t) + "] " + Ln.call(yy.call("[cause]: " + _(t.cause), U), ", ") + " }" : U.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Ln.call(U, ", ") + " }"
            }
            if (typeof t == "object" && c) {
                if (Ay && typeof t[Ay] == "function" && Rh) return Rh(t, {
                    depth: p - n
                });
                if (c !== "symbol" && typeof t.inspect == "function") return t.inspect()
            }
            if (x4(t)) {
                var j = [];
                return p4.call(t, function(Ie, He) {
                    j.push(_(He, t, !0) + " => " + _(Ie, t))
                }), Ry("Map", Gu.call(t), j, E)
            }
            if (U4(t)) {
                var X = [];
                return g4.call(t, function(Ie) {
                    X.push(_(Ie, t))
                }), Ry("Set", Wu.call(t), X, E)
            }
            if (M4(t)) return Ed("WeakMap");
            if (B4(t)) return Ed("WeakSet");
            if (k4(t)) return Ed("WeakRef");
            if (w4(t)) return oa(_(Number(t)));
            if (P4(t)) return oa(_(Ah.call(t)));
            if (L4(t)) return oa(E4.call(t));
            if (C4(t)) return oa(_(String(t)));
            if (!R4(t) && !Iy(t)) {
                var ie = Yc(t, _),
                    ue = by ? by(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                    ce = t instanceof Object ? "" : "null prototype",
                    Ae = !ue && dr && Object(t) === t && dr in t ? _g.call(Wi(t), 8, -1) : ce ? "Object" : "",
                    Me = ue || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "",
                    fe = Me + (Ae || ce ? "[" + Ln.call(yy.call([], Ae || [], ce || []), ": ") + "] " : "");
                return ie.length === 0 ? fe + "{}" : E ? fe + "{" + Ch(ie, E) + "}" : fe + "{ " + Ln.call(ie, ", ") + " }"
            }
            return String(t)
        };

    function pO(e, t, r) {
        var n = (r.quoteStyle || t) === "double" ? '"' : "'";
        return n + e + n
    }

    function I4(e) {
        return Ii.call(String(e), /"/g, "&quot;")
    }

    function Nh(e) {
        return Wi(e) === "[object Array]" && (!dr || !(typeof e == "object" && dr in e))
    }

    function R4(e) {
        return Wi(e) === "[object Date]" && (!dr || !(typeof e == "object" && dr in e))
    }

    function Iy(e) {
        return Wi(e) === "[object RegExp]" && (!dr || !(typeof e == "object" && dr in e))
    }

    function N4(e) {
        return Wi(e) === "[object Error]" && (!dr || !(typeof e == "object" && dr in e))
    }

    function C4(e) {
        return Wi(e) === "[object String]" && (!dr || !(typeof e == "object" && dr in e))
    }

    function w4(e) {
        return Wi(e) === "[object Number]" && (!dr || !(typeof e == "object" && dr in e))
    }

    function L4(e) {
        return Wi(e) === "[object Boolean]" && (!dr || !(typeof e == "object" && dr in e))
    }

    function gO(e) {
        if (Oo) return e && typeof e == "object" && e instanceof Symbol;
        if (typeof e == "symbol") return !0;
        if (!e || typeof e != "object" || !Ih) return !1;
        try {
            return Ih.call(e), !0
        } catch {}
        return !1
    }

    function P4(e) {
        if (!e || typeof e != "object" || !Ah) return !1;
        try {
            return Ah.call(e), !0
        } catch {}
        return !1
    }
    var $4 = Object.prototype.hasOwnProperty || function(e) {
        return e in this
    };

    function yi(e, t) {
        return $4.call(e, t)
    }

    function Wi(e) {
        return y4.call(e)
    }

    function D4(e) {
        if (e.name) return e.name;
        var t = b4.call(T4.call(e), /^function\s*([\w$]+)/);
        return t ? t[1] : null
    }

    function _O(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t) return r;
        return -1
    }

    function x4(e) {
        if (!Gu || !e || typeof e != "object") return !1;
        try {
            Gu.call(e);
            try {
                Wu.call(e)
            } catch {
                return !0
            }
            return e instanceof Map
        } catch {}
        return !1
    }

    function M4(e) {
        if (!ma || !e || typeof e != "object") return !1;
        try {
            ma.call(e, ma);
            try {
                va.call(e, va)
            } catch {
                return !0
            }
            return e instanceof WeakMap
        } catch {}
        return !1
    }

    function k4(e) {
        if (!vy || !e || typeof e != "object") return !1;
        try {
            return vy.call(e), !0
        } catch {}
        return !1
    }

    function U4(e) {
        if (!Wu || !e || typeof e != "object") return !1;
        try {
            Wu.call(e);
            try {
                Gu.call(e)
            } catch {
                return !0
            }
            return e instanceof Set
        } catch {}
        return !1
    }

    function B4(e) {
        if (!va || !e || typeof e != "object") return !1;
        try {
            va.call(e, va);
            try {
                ma.call(e, ma)
            } catch {
                return !0
            }
            return e instanceof WeakSet
        } catch {}
        return !1
    }

    function F4(e) {
        return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function"
    }

    function mO(e, t) {
        if (e.length > t.maxStringLength) {
            var r = e.length - t.maxStringLength,
                n = "... " + r + " more character" + (r > 1 ? "s" : "");
            return mO(_g.call(e, 0, t.maxStringLength), t) + n
        }
        var s = Ii.call(Ii.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, G4);
        return pO(s, "single", t)
    }

    function G4(e) {
        var t = e.charCodeAt(0),
            r = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            } [t];
        return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + S4.call(t.toString(16))
    }

    function oa(e) {
        return "Object(" + e + ")"
    }

    function Ed(e) {
        return e + " { ? }"
    }

    function Ry(e, t, r, n) {
        var s = n ? Ch(r, n) : Ln.call(r, ", ");
        return e + " (" + t + ") {" + s + "}"
    }

    function W4(e) {
        for (var t = 0; t < e.length; t++)
            if (_O(e[t], `
`) >= 0) return !1;
        return !0
    }

    function j4(e, t) {
        var r;
        if (e.indent === "	") r = "	";
        else if (typeof e.indent == "number" && e.indent > 0) r = Ln.call(Array(e.indent + 1), " ");
        else return null;
        return {
            base: r,
            prev: Ln.call(Array(t + 1), r)
        }
    }

    function Ch(e, t) {
        if (e.length === 0) return "";
        var r = `
` + t.prev + t.base;
        return r + Ln.call(e, "," + r) + `
` + t.prev
    }

    function Yc(e, t) {
        var r = Nh(e),
            n = [];
        if (r) {
            n.length = e.length;
            for (var s = 0; s < e.length; s++) n[s] = yi(e, s) ? t(e[s], e) : ""
        }
        var o = typeof vd == "function" ? vd(e) : [],
            c;
        if (Oo) {
            c = {};
            for (var l = 0; l < o.length; l++) c["$" + o[l]] = o[l]
        }
        for (var f in e) yi(e, f) && (r && String(Number(f)) === f && f < e.length || Oo && c["$" + f] instanceof Symbol || (dO.call(/[^\w$]/, f) ? n.push(t(f, e) + ": " + t(e[f], e)) : n.push(f + ": " + t(e[f], e))));
        if (typeof vd == "function")
            for (var d = 0; d < o.length; d++) hO.call(e, o[d]) && n.push("[" + t(o[d]) + "]: " + t(e[o[d]], e));
        return n
    }
    var mg = hg,
        Mo = l4,
        H4 = A4,
        q4 = mg("%TypeError%"),
        Vc = mg("%WeakMap%", !0),
        zc = mg("%Map%", !0),
        K4 = Mo("WeakMap.prototype.get", !0),
        Y4 = Mo("WeakMap.prototype.set", !0),
        V4 = Mo("WeakMap.prototype.has", !0),
        z4 = Mo("Map.prototype.get", !0),
        X4 = Mo("Map.prototype.set", !0),
        J4 = Mo("Map.prototype.has", !0),
        vg = function(e, t) {
            for (var r = e, n;
                (n = r.next) !== null; r = n)
                if (n.key === t) return r.next = n.next, n.next = e.next, e.next = n, n
        },
        Q4 = function(e, t) {
            var r = vg(e, t);
            return r && r.value
        },
        Z4 = function(e, t, r) {
            var n = vg(e, t);
            n ? n.value = r : e.next = {
                key: t,
                next: e.next,
                value: r
            }
        },
        e8 = function(e, t) {
            return !!vg(e, t)
        },
        t8 = function() {
            var t, r, n, s = {
                assert: function(o) {
                    if (!s.has(o)) throw new q4("Side channel does not contain " + H4(o))
                },
                get: function(o) {
                    if (Vc && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return K4(t, o)
                    } else if (zc) {
                        if (r) return z4(r, o)
                    } else if (n) return Q4(n, o)
                },
                has: function(o) {
                    if (Vc && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return V4(t, o)
                    } else if (zc) {
                        if (r) return J4(r, o)
                    } else if (n) return e8(n, o);
                    return !1
                },
                set: function(o, c) {
                    Vc && o && (typeof o == "object" || typeof o == "function") ? (t || (t = new Vc), Y4(t, o, c)) : zc ? (r || (r = new zc), X4(r, o, c)) : (n || (n = {
                        key: {},
                        next: null
                    }), Z4(n, o, c))
                }
            };
            return s
        },
        r8 = String.prototype.replace,
        n8 = /%20/g,
        yd = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        Eg = {
            default: yd.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return r8.call(e, n8, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            },
            RFC1738: yd.RFC1738,
            RFC3986: yd.RFC3986
        },
        i8 = Eg,
        Td = Object.prototype.hasOwnProperty,
        ls = Array.isArray,
        In = function() {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }(),
        s8 = function(t) {
            for (; t.length > 1;) {
                var r = t.pop(),
                    n = r.obj[r.prop];
                if (ls(n)) {
                    for (var s = [], o = 0; o < n.length; ++o) typeof n[o] < "u" && s.push(n[o]);
                    r.obj[r.prop] = s
                }
            }
        },
        vO = function(t, r) {
            for (var n = r && r.plainObjects ? Object.create(null) : {}, s = 0; s < t.length; ++s) typeof t[s] < "u" && (n[s] = t[s]);
            return n
        },
        o8 = function e(t, r, n) {
            if (!r) return t;
            if (typeof r != "object") {
                if (ls(t)) t.push(r);
                else if (t && typeof t == "object")(n && (n.plainObjects || n.allowPrototypes) || !Td.call(Object.prototype, r)) && (t[r] = !0);
                else return [t, r];
                return t
            }
            if (!t || typeof t != "object") return [t].concat(r);
            var s = t;
            return ls(t) && !ls(r) && (s = vO(t, n)), ls(t) && ls(r) ? (r.forEach(function(o, c) {
                if (Td.call(t, c)) {
                    var l = t[c];
                    l && typeof l == "object" && o && typeof o == "object" ? t[c] = e(l, o, n) : t.push(o)
                } else t[c] = o
            }), t) : Object.keys(r).reduce(function(o, c) {
                var l = r[c];
                return Td.call(o, c) ? o[c] = e(o[c], l, n) : o[c] = l, o
            }, s)
        },
        a8 = function(t, r) {
            return Object.keys(r).reduce(function(n, s) {
                return n[s] = r[s], n
            }, t)
        },
        c8 = function(e, t, r) {
            var n = e.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        u8 = function(t, r, n, s, o) {
            if (t.length === 0) return t;
            var c = t;
            if (typeof t == "symbol" ? c = Symbol.prototype.toString.call(t) : typeof t != "string" && (c = String(t)), n === "iso-8859-1") return escape(c).replace(/%u[0-9a-f]{4}/gi, function(p) {
                return "%26%23" + parseInt(p.slice(2), 16) + "%3B"
            });
            for (var l = "", f = 0; f < c.length; ++f) {
                var d = c.charCodeAt(f);
                if (d === 45 || d === 46 || d === 95 || d === 126 || d >= 48 && d <= 57 || d >= 65 && d <= 90 || d >= 97 && d <= 122 || o === i8.RFC1738 && (d === 40 || d === 41)) {
                    l += c.charAt(f);
                    continue
                }
                if (d < 128) {
                    l = l + In[d];
                    continue
                }
                if (d < 2048) {
                    l = l + (In[192 | d >> 6] + In[128 | d & 63]);
                    continue
                }
                if (d < 55296 || d >= 57344) {
                    l = l + (In[224 | d >> 12] + In[128 | d >> 6 & 63] + In[128 | d & 63]);
                    continue
                }
                f += 1, d = 65536 + ((d & 1023) << 10 | c.charCodeAt(f) & 1023), l += In[240 | d >> 18] + In[128 | d >> 12 & 63] + In[128 | d >> 6 & 63] + In[128 | d & 63]
            }
            return l
        },
        l8 = function(t) {
            for (var r = [{
                    obj: {
                        o: t
                    },
                    prop: "o"
                }], n = [], s = 0; s < r.length; ++s)
                for (var o = r[s], c = o.obj[o.prop], l = Object.keys(c), f = 0; f < l.length; ++f) {
                    var d = l[f],
                        p = c[d];
                    typeof p == "object" && p !== null && n.indexOf(p) === -1 && (r.push({
                        obj: c,
                        prop: d
                    }), n.push(p))
                }
            return s8(r), t
        },
        f8 = function(t) {
            return Object.prototype.toString.call(t) === "[object RegExp]"
        },
        d8 = function(t) {
            return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
        },
        h8 = function(t, r) {
            return [].concat(t, r)
        },
        p8 = function(t, r) {
            if (ls(t)) {
                for (var n = [], s = 0; s < t.length; s += 1) n.push(r(t[s]));
                return n
            }
            return r(t)
        },
        EO = {
            arrayToObject: vO,
            assign: a8,
            combine: h8,
            compact: l8,
            decode: c8,
            encode: u8,
            isBuffer: d8,
            isRegExp: f8,
            maybeMap: p8,
            merge: o8
        },
        yO = t8,
        _u = EO,
        Ea = Eg,
        g8 = Object.prototype.hasOwnProperty,
        Ny = {
            brackets: function(t) {
                return t + "[]"
            },
            comma: "comma",
            indices: function(t, r) {
                return t + "[" + r + "]"
            },
            repeat: function(t) {
                return t
            }
        },
        Xn = Array.isArray,
        _8 = Array.prototype.push,
        TO = function(e, t) {
            _8.apply(e, Xn(t) ? t : [t])
        },
        m8 = Date.prototype.toISOString,
        Cy = Ea.default,
        ur = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: _u.encode,
            encodeValuesOnly: !1,
            format: Cy,
            formatter: Ea.formatters[Cy],
            indices: !1,
            serializeDate: function(t) {
                return m8.call(t)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        v8 = function(t) {
            return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
        },
        bd = {},
        E8 = function e(t, r, n, s, o, c, l, f, d, p, E, _, S, N, L, M) {
            for (var R = t, G = M, K = 0, U = !1;
                (G = G.get(bd)) !== void 0 && !U;) {
                var j = G.get(t);
                if (K += 1, typeof j < "u") {
                    if (j === K) throw new RangeError("Cyclic object value");
                    U = !0
                }
                typeof G.get(bd) > "u" && (K = 0)
            }
            if (typeof f == "function" ? R = f(r, R) : R instanceof Date ? R = E(R) : n === "comma" && Xn(R) && (R = _u.maybeMap(R, function(Q) {
                    return Q instanceof Date ? E(Q) : Q
                })), R === null) {
                if (o) return l && !N ? l(r, ur.encoder, L, "key", _) : r;
                R = ""
            }
            if (v8(R) || _u.isBuffer(R)) {
                if (l) {
                    var X = N ? r : l(r, ur.encoder, L, "key", _);
                    return [S(X) + "=" + S(l(R, ur.encoder, L, "value", _))]
                }
                return [S(r) + "=" + S(String(R))]
            }
            var ie = [];
            if (typeof R > "u") return ie;
            var ue;
            if (n === "comma" && Xn(R)) N && l && (R = _u.maybeMap(R, l)), ue = [{
                value: R.length > 0 ? R.join(",") || null : void 0
            }];
            else if (Xn(f)) ue = f;
            else {
                var ce = Object.keys(R);
                ue = d ? ce.sort(d) : ce
            }
            for (var Ae = s && Xn(R) && R.length === 1 ? r + "[]" : r, Me = 0; Me < ue.length; ++Me) {
                var fe = ue[Me],
                    Ie = typeof fe == "object" && typeof fe.value < "u" ? fe.value : R[fe];
                if (!(c && Ie === null)) {
                    var He = Xn(R) ? typeof n == "function" ? n(Ae, fe) : Ae : Ae + (p ? "." + fe : "[" + fe + "]");
                    M.set(t, K);
                    var H = yO();
                    H.set(bd, M), TO(ie, e(Ie, He, n, s, o, c, n === "comma" && N && Xn(R) ? null : l, f, d, p, E, _, S, N, L, H))
                }
            }
            return ie
        },
        y8 = function(t) {
            if (!t) return ur;
            if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function") throw new TypeError("Encoder has to be a function.");
            var r = t.charset || ur.charset;
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = Ea.default;
            if (typeof t.format < "u") {
                if (!g8.call(Ea.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                n = t.format
            }
            var s = Ea.formatters[n],
                o = ur.filter;
            return (typeof t.filter == "function" || Xn(t.filter)) && (o = t.filter), {
                addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : ur.addQueryPrefix,
                allowDots: typeof t.allowDots > "u" ? ur.allowDots : !!t.allowDots,
                charset: r,
                charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : ur.charsetSentinel,
                delimiter: typeof t.delimiter > "u" ? ur.delimiter : t.delimiter,
                encode: typeof t.encode == "boolean" ? t.encode : ur.encode,
                encoder: typeof t.encoder == "function" ? t.encoder : ur.encoder,
                encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : ur.encodeValuesOnly,
                filter: o,
                format: n,
                formatter: s,
                serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : ur.serializeDate,
                skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : ur.skipNulls,
                sort: typeof t.sort == "function" ? t.sort : null,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : ur.strictNullHandling
            }
        },
        T8 = function(e, t) {
            var r = e,
                n = y8(t),
                s, o;
            typeof n.filter == "function" ? (o = n.filter, r = o("", r)) : Xn(n.filter) && (o = n.filter, s = o);
            var c = [];
            if (typeof r != "object" || r === null) return "";
            var l;
            t && t.arrayFormat in Ny ? l = t.arrayFormat : t && "indices" in t ? l = t.indices ? "indices" : "repeat" : l = "indices";
            var f = Ny[l];
            if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
            var d = f === "comma" && t && t.commaRoundTrip;
            s || (s = Object.keys(r)), n.sort && s.sort(n.sort);
            for (var p = yO(), E = 0; E < s.length; ++E) {
                var _ = s[E];
                n.skipNulls && r[_] === null || TO(c, E8(r[_], _, f, d, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, p))
            }
            var S = c.join(n.delimiter),
                N = n.addQueryPrefix === !0 ? "?" : "";
            return n.charsetSentinel && (n.charset === "iso-8859-1" ? N += "utf8=%26%2310003%3B&" : N += "utf8=%E2%9C%93&"), S.length > 0 ? N + S : ""
        },
        Ao = EO,
        wh = Object.prototype.hasOwnProperty,
        b8 = Array.isArray,
        Vt = {
            allowDots: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decoder: Ao.decode,
            delimiter: "&",
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1
        },
        S8 = function(e) {
            return e.replace(/&#(\d+);/g, function(t, r) {
                return String.fromCharCode(parseInt(r, 10))
            })
        },
        bO = function(e, t) {
            return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
        },
        O8 = "utf8=%26%2310003%3B",
        A8 = "utf8=%E2%9C%93",
        I8 = function(t, r) {
            var n = {
                    __proto__: null
                },
                s = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
                c = s.split(r.delimiter, o),
                l = -1,
                f, d = r.charset;
            if (r.charsetSentinel)
                for (f = 0; f < c.length; ++f) c[f].indexOf("utf8=") === 0 && (c[f] === A8 ? d = "utf-8" : c[f] === O8 && (d = "iso-8859-1"), l = f, f = c.length);
            for (f = 0; f < c.length; ++f)
                if (f !== l) {
                    var p = c[f],
                        E = p.indexOf("]="),
                        _ = E === -1 ? p.indexOf("=") : E + 1,
                        S, N;
                    _ === -1 ? (S = r.decoder(p, Vt.decoder, d, "key"), N = r.strictNullHandling ? null : "") : (S = r.decoder(p.slice(0, _), Vt.decoder, d, "key"), N = Ao.maybeMap(bO(p.slice(_ + 1), r), function(L) {
                        return r.decoder(L, Vt.decoder, d, "value")
                    })), N && r.interpretNumericEntities && d === "iso-8859-1" && (N = S8(N)), p.indexOf("[]=") > -1 && (N = b8(N) ? [N] : N), wh.call(n, S) ? n[S] = Ao.combine(n[S], N) : n[S] = N
                } return n
        },
        R8 = function(e, t, r, n) {
            for (var s = n ? t : bO(t, r), o = e.length - 1; o >= 0; --o) {
                var c, l = e[o];
                if (l === "[]" && r.parseArrays) c = [].concat(s);
                else {
                    c = r.plainObjects ? Object.create(null) : {};
                    var f = l.charAt(0) === "[" && l.charAt(l.length - 1) === "]" ? l.slice(1, -1) : l,
                        d = parseInt(f, 10);
                    !r.parseArrays && f === "" ? c = {
                        0: s
                    } : !isNaN(d) && l !== f && String(d) === f && d >= 0 && r.parseArrays && d <= r.arrayLimit ? (c = [], c[d] = s) : f !== "__proto__" && (c[f] = s)
                }
                s = c
            }
            return s
        },
        N8 = function(t, r, n, s) {
            if (t) {
                var o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                    c = /(\[[^[\]]*])/,
                    l = /(\[[^[\]]*])/g,
                    f = n.depth > 0 && c.exec(o),
                    d = f ? o.slice(0, f.index) : o,
                    p = [];
                if (d) {
                    if (!n.plainObjects && wh.call(Object.prototype, d) && !n.allowPrototypes) return;
                    p.push(d)
                }
                for (var E = 0; n.depth > 0 && (f = l.exec(o)) !== null && E < n.depth;) {
                    if (E += 1, !n.plainObjects && wh.call(Object.prototype, f[1].slice(1, -1)) && !n.allowPrototypes) return;
                    p.push(f[1])
                }
                return f && p.push("[" + o.slice(f.index) + "]"), R8(p, r, n, s)
            }
        },
        C8 = function(t) {
            if (!t) return Vt;
            if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function") throw new TypeError("Decoder has to be a function.");
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var r = typeof t.charset > "u" ? Vt.charset : t.charset;
            return {
                allowDots: typeof t.allowDots > "u" ? Vt.allowDots : !!t.allowDots,
                allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : Vt.allowPrototypes,
                allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : Vt.allowSparse,
                arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : Vt.arrayLimit,
                charset: r,
                charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Vt.charsetSentinel,
                comma: typeof t.comma == "boolean" ? t.comma : Vt.comma,
                decoder: typeof t.decoder == "function" ? t.decoder : Vt.decoder,
                delimiter: typeof t.delimiter == "string" || Ao.isRegExp(t.delimiter) ? t.delimiter : Vt.delimiter,
                depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : Vt.depth,
                ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
                interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : Vt.interpretNumericEntities,
                parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : Vt.parameterLimit,
                parseArrays: t.parseArrays !== !1,
                plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : Vt.plainObjects,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Vt.strictNullHandling
            }
        },
        w8 = function(e, t) {
            var r = C8(t);
            if (e === "" || e === null || typeof e > "u") return r.plainObjects ? Object.create(null) : {};
            for (var n = typeof e == "string" ? I8(e, r) : e, s = r.plainObjects ? Object.create(null) : {}, o = Object.keys(n), c = 0; c < o.length; ++c) {
                var l = o[c],
                    f = N8(l, n[l], r, typeof e == "string");
                s = Ao.merge(s, f, r)
            }
            return r.allowSparse === !0 ? s : Ao.compact(s)
        },
        L8 = T8,
        P8 = w8,
        $8 = Eg,
        SO = {
            formats: $8,
            parse: P8,
            stringify: L8
        };
    let D8 = class {
            constructor(t) {
                this.code = t.code, this.token = t.token, this.host = t.host
            }
        },
        x8 = class {
            constructor(t) {
                this.appId = t.appId, this.appTag = t.appTag, this.audienceEnabled = t.audienceEnabled, this.code = t.code, this.host = t.host, this.audienceHost = t.audienceHost, this.locked = t.locked, this.full = t.full, this.maxPlayers = t.maxPlayers, this.minPlayers = t.minPlayers, this.moderationEnabled = t.moderationEnabled, this.passwordRequired = t.passwordRequired, this.twitchLocked = t.twitchLocked, this.locale = t.locale, this.keepalive = t.keepalive, this.controllerBranch = t.controllerBranch
            }
        },
        M8 = class {
            constructor(t) {
                this.connections = t.connections
            }
        },
        k8 = class {
            constructor(t) {
                this.cause = t.cause
            }
            whenReceived(t) {
                t.disconnect()
            }
        },
        U8 = class {};
    var Sl = {
        CreateRoomReply: D8,
        GetRoomReply: x8,
        GetAudienceReply: M8,
        RoomExit: k8,
        RoomLock: U8
    };
    const wy = G3,
        B8 = SO,
        {
            CreateRoomReply: F8,
            GetRoomReply: G8
        } = Sl;
    let W8 = class {
        constructor(t) {
            if (!t.host) throw new Error("unable to create ecast APIClient: no host provided");
            if (this.host = t.host, !t.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
            this.scheme = t.scheme
        }
        url(t, r) {
            if (r) {
                let n = B8.stringify(r);
                return `${this.scheme}://${this.host}/api/v2${t}?${n}`
            }
            return `${this.scheme}://${this.host}/api/v2${t}`
        }
        async createRoom(t) {
            let r = {
                    appTag: "test",
                    userId: "fart",
                    ...t
                },
                n = this.url("/rooms", r),
                o = await wy(n, {
                    method: "POST"
                });
            const {
                body: c,
                error: l,
                ok: f
            } = await o.json();
            if (!f) throw new Error(`failed to create room: ${l}`);
            return new F8({
                code: c.code,
                token: c.token,
                host: c.host
            })
        }
        async getRoom(t) {
            let r = this.url(`/rooms/${t.code}`),
                s = await (await wy(r)).json();
            if (!s.ok) throw new Error(`unable to get room with options ${JSON.stringify(t)}: ${s.error}`);
            let o = s.body;
            return new G8({
                appId: o.appId,
                appTag: o.appTag,
                audienceEnabled: o.audienceEnabled,
                code: o.code,
                host: o.host,
                audienceHost: o.audienceHost,
                locked: o.locked,
                full: o.full,
                maxPlayers: o.maxPlayers,
                minPlayers: o.minPlayers,
                moderationEnabled: o.moderationEnabled,
                passwordRequired: o.passwordRequired,
                twitchLocked: o.twitchLocked,
                locale: o.locale,
                keepalive: o.keepalive,
                controllerBranch: o.controllerBranch
            })
        }
    };
    var j8 = {
            APIClient: W8
        },
        Ys = null;
    typeof WebSocket < "u" ? Ys = WebSocket : typeof MozWebSocket < "u" ? Ys = MozWebSocket : typeof Pt < "u" ? Ys = Pt.WebSocket || Pt.MozWebSocket : typeof window < "u" ? Ys = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Ys = self.WebSocket || self.MozWebSocket);
    var H8 = Ys,
        yg = {
            exports: {}
        },
        uo = typeof Reflect == "object" ? Reflect : null,
        Ly = uo && typeof uo.apply == "function" ? uo.apply : function(t, r, n) {
            return Function.prototype.apply.call(t, r, n)
        },
        mu;
    uo && typeof uo.ownKeys == "function" ? mu = uo.ownKeys : Object.getOwnPropertySymbols ? mu = function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
    } : mu = function(t) {
        return Object.getOwnPropertyNames(t)
    };

    function q8(e) {
        console && console.warn && console.warn(e)
    }
    var OO = Number.isNaN || function(t) {
        return t !== t
    };

    function ft() {
        ft.init.call(this)
    }
    yg.exports = ft;
    yg.exports.once = z8;
    ft.EventEmitter = ft;
    ft.prototype._events = void 0;
    ft.prototype._eventsCount = 0;
    ft.prototype._maxListeners = void 0;
    var Py = 10;

    function Ol(e) {
        if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }
    Object.defineProperty(ft, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return Py
        },
        set: function(e) {
            if (typeof e != "number" || e < 0 || OO(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            Py = e
        }
    });
    ft.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    ft.prototype.setMaxListeners = function(t) {
        if (typeof t != "number" || t < 0 || OO(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this
    };

    function AO(e) {
        return e._maxListeners === void 0 ? ft.defaultMaxListeners : e._maxListeners
    }
    ft.prototype.getMaxListeners = function() {
        return AO(this)
    };
    ft.prototype.emit = function(t) {
        for (var r = [], n = 1; n < arguments.length; n++) r.push(arguments[n]);
        var s = t === "error",
            o = this._events;
        if (o !== void 0) s = s && o.error === void 0;
        else if (!s) return !1;
        if (s) {
            var c;
            if (r.length > 0 && (c = r[0]), c instanceof Error) throw c;
            var l = new Error("Unhandled error." + (c ? " (" + c.message + ")" : ""));
            throw l.context = c, l
        }
        var f = o[t];
        if (f === void 0) return !1;
        if (typeof f == "function") Ly(f, this, r);
        else
            for (var d = f.length, p = wO(f, d), n = 0; n < d; ++n) Ly(p[n], this, r);
        return !0
    };

    function IO(e, t, r, n) {
        var s, o, c;
        if (Ol(r), o = e._events, o === void 0 ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), c = o[t]), c === void 0) c = o[t] = r, ++e._eventsCount;
        else if (typeof c == "function" ? c = o[t] = n ? [r, c] : [c, r] : n ? c.unshift(r) : c.push(r), s = AO(e), s > 0 && c.length > s && !c.warned) {
            c.warned = !0;
            var l = new Error("Possible EventEmitter memory leak detected. " + c.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = c.length, q8(l)
        }
        return e
    }
    ft.prototype.addListener = function(t, r) {
        return IO(this, t, r, !1)
    };
    ft.prototype.on = ft.prototype.addListener;
    ft.prototype.prependListener = function(t, r) {
        return IO(this, t, r, !0)
    };

    function K8() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function RO(e, t, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            },
            s = K8.bind(n);
        return s.listener = r, n.wrapFn = s, s
    }
    ft.prototype.once = function(t, r) {
        return Ol(r), this.on(t, RO(this, t, r)), this
    };
    ft.prototype.prependOnceListener = function(t, r) {
        return Ol(r), this.prependListener(t, RO(this, t, r)), this
    };
    ft.prototype.removeListener = function(t, r) {
        var n, s, o, c, l;
        if (Ol(r), s = this._events, s === void 0) return this;
        if (n = s[t], n === void 0) return this;
        if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[t], s.removeListener && this.emit("removeListener", t, n.listener || r));
        else if (typeof n != "function") {
            for (o = -1, c = n.length - 1; c >= 0; c--)
                if (n[c] === r || n[c].listener === r) {
                    l = n[c].listener, o = c;
                    break
                } if (o < 0) return this;
            o === 0 ? n.shift() : Y8(n, o), n.length === 1 && (s[t] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", t, l || r)
        }
        return this
    };
    ft.prototype.off = ft.prototype.removeListener;
    ft.prototype.removeAllListeners = function(t) {
        var r, n, s;
        if (n = this._events, n === void 0) return this;
        if (n.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n[t] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n[t]), this;
        if (arguments.length === 0) {
            var o = Object.keys(n),
                c;
            for (s = 0; s < o.length; ++s) c = o[s], c !== "removeListener" && this.removeAllListeners(c);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if (r = n[t], typeof r == "function") this.removeListener(t, r);
        else if (r !== void 0)
            for (s = r.length - 1; s >= 0; s--) this.removeListener(t, r[s]);
        return this
    };

    function NO(e, t, r) {
        var n = e._events;
        if (n === void 0) return [];
        var s = n[t];
        return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? V8(s) : wO(s, s.length)
    }
    ft.prototype.listeners = function(t) {
        return NO(this, t, !0)
    };
    ft.prototype.rawListeners = function(t) {
        return NO(this, t, !1)
    };
    ft.listenerCount = function(e, t) {
        return typeof e.listenerCount == "function" ? e.listenerCount(t) : CO.call(e, t)
    };
    ft.prototype.listenerCount = CO;

    function CO(e) {
        var t = this._events;
        if (t !== void 0) {
            var r = t[e];
            if (typeof r == "function") return 1;
            if (r !== void 0) return r.length
        }
        return 0
    }
    ft.prototype.eventNames = function() {
        return this._eventsCount > 0 ? mu(this._events) : []
    };

    function wO(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r
    }

    function Y8(e, t) {
        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
        e.pop()
    }

    function V8(e) {
        for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
        return t
    }

    function z8(e, t) {
        return new Promise(function(r, n) {
            function s(c) {
                e.removeListener(t, o), n(c)
            }

            function o() {
                typeof e.removeListener == "function" && e.removeListener("error", s), r([].slice.call(arguments))
            }
            LO(e, t, o, {
                once: !0
            }), t !== "error" && X8(e, s, {
                once: !0
            })
        })
    }

    function X8(e, t, r) {
        typeof e.on == "function" && LO(e, "error", t, r)
    }

    function LO(e, t, r, n) {
        if (typeof e.on == "function") n.once ? e.once(t, r) : e.on(t, r);
        else if (typeof e.addEventListener == "function") e.addEventListener(t, function s(o) {
            n.once && e.removeEventListener(t, s), r(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
    }
    var J8 = yg.exports;
    let Q8 = class {
            constructor(t) {
                t && (this.error = t.error, this.to = t.to, this.opcode = t.opcode)
            }
            toString() {
                return `ObservedError{
	to:${this.to}
	error:${this.error}
	opcode:${this.opcode}
}`
            }
        },
        Al = class extends Error {
            constructor(t) {
                super(t), t && (this.code = t.code, this.message = t.message)
            }
        };
    class ja extends Al {
        constructor(t) {
            super(t), this.code = 1e3, this.message = t && t.message ? t.message : "ecast server error"
        }
    }
    class PO extends ja {
        constructor(t) {
            super(t), this.code = 1001, this.message = t && t.message ? t.message : "create room failed"
        }
    }
    class $O extends ja {
        constructor(t) {
            super(t), this.code = 1002, this.message = t && t.message ? t.message : "unable to connect to room"
        }
    }
    class DO extends ja {
        constructor(t) {
            super(t), this.code = 1003, this.message = t && t.message ? t.message : "server is shutting down"
        }
    }
    class at extends Al {
        constructor(t) {
            super(t), this.code = 2e3, this.message = t && t.message ? t.message : "ecast client error"
        }
    }
    class xO extends at {
        constructor(t) {
            super(t), this.code = 2001, this.message = t && t.message ? t.message : "parse error in ecast protocol"
        }
    }
    class MO extends at {
        constructor(t) {
            super(t), this.code = 2002, this.message = t && t.message ? t.message : "missing opcode"
        }
    }
    class kO extends at {
        constructor(t) {
            super(t), this.code = 2003, this.message = t && t.message ? t.message : "invalid opcode"
        }
    }
    class UO extends at {
        constructor(t) {
            super(t), this.code = 2004, this.message = t && t.message ? t.message : "invalid arguments"
        }
    }
    class BO extends at {
        constructor(t) {
            super(t), this.code = 2005, this.message = t && t.message ? t.message : "entity not found"
        }
    }
    class FO extends at {
        constructor(t) {
            super(t), this.code = 2006, this.message = t && t.message ? t.message : "an entity already exists with that key"
        }
    }
    class GO extends at {
        constructor(t) {
            super(t), this.code = 2007, this.message = t && t.message ? t.message : "the entity is not of the expected type"
        }
    }
    class WO extends at {
        constructor(t) {
            super(t), this.code = 2008, this.message = t && t.message ? t.message : "no such client"
        }
    }
    class jO extends at {
        constructor(t) {
            super(t), this.code = 2009, this.message = t && t.message ? t.message : "room is locked"
        }
    }
    class HO extends at {
        constructor(t) {
            super(t), this.code = 2010, this.message = t && t.message ? t.message : "room is full"
        }
    }
    class qO extends at {
        constructor(t) {
            super(t), this.code = 2011, this.message = t && t.message ? t.message : "no such license"
        }
    }
    class KO extends at {
        constructor(t) {
            super(t), this.code = 2012, this.message = t && t.message ? t.message : "invalid license"
        }
    }
    class YO extends at {
        constructor(t) {
            super(t), this.code = 2013, this.message = t && t.message ? t.message : "room not found"
        }
    }
    class VO extends at {
        constructor(t) {
            super(t), this.code = 2014, this.message = t && t.message ? t.message : "requested role does not exist"
        }
    }
    class zO extends at {
        constructor(t) {
            super(t), this.code = 2015, this.message = t && t.message ? t.message : "twitch login required"
        }
    }
    class XO extends at {
        constructor(t) {
            super(t), this.code = 2016, this.message = t && t.message ? t.message : "no such option"
        }
    }
    class JO extends at {
        constructor(t) {
            super(t), this.code = 2017, this.message = t && t.message ? t.message : "password required"
        }
    }
    class QO extends at {
        constructor(t) {
            super(t), this.code = 2018, this.message = t && t.message ? t.message : "invalid room password"
        }
    }
    class ZO extends at {
        constructor(t) {
            super(t), this.code = 2019, this.message = t && t.message ? t.message : "missing name"
        }
    }
    class eA extends at {
        constructor(t) {
            super(t), this.code = 2021, this.message = t && t.message ? t.message : "text did not pass text filters"
        }
    }
    class tA extends at {
        constructor(t) {
            super(t), this.code = 2022, this.message = t && t.message ? t.message : "no such filter"
        }
    }
    class rA extends at {
        constructor(t) {
            super(t), this.code = 2023, this.message = t && t.message ? t.message : "permission denied"
        }
    }
    class nA extends at {
        constructor(t) {
            super(t), this.code = 2024, this.message = t && t.message ? t.message : "not connected to a room"
        }
    }
    class iA extends at {
        constructor(t) {
            super(t), this.code = 2025, this.message = t && t.message ? t.message : "illegal operation"
        }
    }
    class sA extends at {
        constructor(t) {
            super(t), this.code = 2026, this.message = t && t.message ? t.message : "invalid ACL change"
        }
    }
    class oA extends at {
        constructor(t) {
            super(t), this.code = 2027, this.message = t && t.message ? t.message : "room has already ended"
        }
    }
    class aA extends at {
        constructor(t) {
            super(t), this.code = 2028, this.message = t && t.message ? t.message : "the entity is locked"
        }
    }
    class cA extends at {
        constructor(t) {
            super(t), this.code = 2420, this.message = t && t.message ? t.message : "rate limit exceeded"
        }
    }

    function Z8({
        code: e,
        message: t
    }) {
        const r = eW[e];
        return r ? new r({
            message: t
        }) : new Al({
            message: t
        })
    }
    var ya = {
        createError: Z8,
        CallError: Al,
        EcastServerError: ja,
        EcastCreateRoomFailed: PO,
        EcastDialRoomFailed: $O,
        EcastServerIsShuttingDown: DO,
        EcastClientError: at,
        EcastParseError: xO,
        EcastRequestIsMissingOpcode: MO,
        EcastRequestHasInvalidOpcode: kO,
        EcastRequestHasInvalidArguments: UO,
        EcastEntityNotFound: BO,
        EcastEntityAlreadyExists: FO,
        EcastEntityTypeError: GO,
        EcastNoSuchClient: WO,
        EcastRoomIsLocked: jO,
        EcastRoomIsFull: HO,
        EcastLicenseNotFound: qO,
        EcastLicenseCheckFailed: KO,
        EcastRoomNotFound: YO,
        EcastInvalidRole: VO,
        EcastTwitchLoginRequired: zO,
        EcastInvalidOption: XO,
        EcastPasswordRequired: JO,
        EcastInvalidPassword: QO,
        EcastNameRequired: ZO,
        EcastFilterError: eA,
        EcastNoSuchFilter: tA,
        EcastPermissionDenied: rA,
        EcastNotConnected: nA,
        EcastIllegalOperation: iA,
        EcastACLChangeDenied: sA,
        EcastRoomHasEnded: oA,
        EcastEntityLocked: aA,
        EcastRateLimitExceeded: cA,
        ObservedError: Q8
    };
    const eW = {
        1e3: ja,
        1001: PO,
        1002: $O,
        1003: DO,
        2e3: at,
        2001: xO,
        2002: MO,
        2003: kO,
        2004: UO,
        2005: BO,
        2006: FO,
        2007: GO,
        2008: WO,
        2009: jO,
        2010: HO,
        2011: qO,
        2012: KO,
        2013: YO,
        2014: VO,
        2015: zO,
        2016: XO,
        2017: JO,
        2018: QO,
        2019: ZO,
        2021: eA,
        2022: tA,
        2023: rA,
        2024: nA,
        2025: iA,
        2026: sA,
        2027: oA,
        2028: aA,
        2420: cA
    };
    let tW = class {
            constructor(t) {
                this.id = t.id, this.deviceId = t.deviceId, this.name = t.name, this.secret = t.secret, this.reconnect = t.reconnect, this.entities = t.entities, this.here = t.here, this.profile = t.profile, this.replayEnd = t.replayEnd
            }
        },
        rW = class {
            constructor(t) {
                this.id = t.id, this.userId = t.userId, this.name = t.name, this.role = t.role, this.reconnect = t.reconnect
            }
        },
        nW = class {
            constructor(t) {
                this.id = t.id, this.role = t.role
            }
        },
        iW = class {
            constructor(t) {
                this.to = t.to, this.from = t.from, this.body = t.body, this.userId = t.userId
            }
        },
        sW = class {
            constructor(t) {
                this.id = t.id, this.banned = t.banned, this.reason = t.reason
            }
        };
    var Tg = {
        ClientConnected: rW,
        ClientDisconnected: nW,
        ClientKicked: sW,
        ClientSend: iW,
        ClientWelcome: tW
    };
    let oW = class {
        constructor(t) {
            this.choices = t.choices, this.key = t.key, this.meta = t.meta || {}
        }
        whenReceived(t) {
            t.entities[this.key] = this
        }
        toString() {
            return `CountGroup{
	choices: ${this.choices}
	meta:${JSON.stringify(this.meta)}
}`
        }
    };
    var bg = {
        CountGroup: oW
    };
    let aW = class {
            constructor(t) {
                this.key = t.key, this.colors = t.colors, this.lines = t.lines, this.live = t.live, this.maxLayer = t.maxLayer, this.maxPoints = t.maxPoints, this.size = t.size, this.weights = t.weights, this.meta = t.meta || {}, t.acl && (this.acl = t.acl)
            }
            whenReceived(t) {
                t.entities[this.key] = this
            }
            toString() {
                return `Doodle{
	key:${this.key}
	colors:${this.colors}
	lines:${this.lines}
	live:${this.live}
	maxLayer:${this.maxLayer}
	maxPoints:${this.maxPoints}
	size:${this.size}
	weights:${this.weights}
	meta:${JSON.stringify(this.meta)}
}`
            }
        },
        cW = class {
            constructor(t) {
                this.key = t.key, this.line = t.line
            }
            whenReceived(t) {
                t.entities[this.key].lines.push(this.line)
            }
            toString() {
                return `DoodleLine{
	val:${this.line}
}`
            }
        },
        uW = class {
            constructor(t) {
                this.key = t.key, this.index = t.index
            }
            whenReceived(t) {
                t.entities[this.key].lines.splice(this.index, 1)
            }
            toString() {
                return `DoodleLineRemoved{
	index:${this.index}
}`
            }
        };
    var Sg = {
        DoodleEntity: aW,
        DoodleLine: cW,
        DoodleLineRemoved: uW
    };
    let lW = class {
        constructor(t) {
            this.key = t.key, this.count = t.count, this.meta = t.meta || {}
        }
        whenReceived(t) {
            t.entities[this.key] = this
        }
        toString() {
            return `GCounter{
	count:${this.count}
	meta:${this.meta}
}`
        }
    };
    var Og = {
        GCounter: lW
    };
    let fW = class {
        constructor(t) {
            this.pc = t.pc, this.opcode = t.opcode, this.result = t.result
        }
    };
    var uA = {
        Notification: fW
    };
    let dW = class lA {
        constructor(t) {
            this.from = t.from, this.key = t.key, this.val = t.val, this.restrictions = t.restrictions, this.version = t.version, this.meta = t.meta || {}, t.acl && (this.acl = t.acl)
        }
        whenReceived(t) {
            if (t.entities[this.key] && t.entities[this.key] instanceof lA && !this.restrictions) {
                t.entities[this.key].val = this.val, t.entities[this.key].meta = this.meta, t.entities[this.key].version = this.version, t.entities[this.key].from = this.from;
                return
            }
            t.entities[this.key] = this
        }
        toString() {
            return `NumberEntity{
	key:${this.key}
	val: ${this.val}
	restrictions: ${JSON.stringify(this.restrictions)}
	meta: ${JSON.stringify(this.meta)}
}`
        }
    };
    var Ag = {
        NumberEntity: dW
    };
    let hW = class {
            constructor(t) {
                this.from = t.from, this.key = t.key, this.val = t.val, this.version = t.version, this.meta = t.meta || {}, t.acl && (this.acl = t.acl)
            }
            whenReceived(t) {
                t.entities[this.key] = this
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
        },
        pW = class {
            constructor(t) {
                this.message = t.message
            }
            toString() {
                return `ObjectEcho{message: ${this.message}}`
            }
        };
    var Ig = {
        ObjectEntity: hW,
        ObjectEcho: pW
    };
    let gW = class {
        constructor(t) {
            this.key = t.key, this.count = t.count, this.meta = t.meta || {}
        }
        whenReceived(t) {
            t.entities[this.key] = this
        }
        toString() {
            return `PNCounter{
	count:${this.count}
	meta:${JSON.stringify(this.meta)}
}`
        }
    };
    var Rg = {
        PNCounter: gW
    };
    let _W = class {
        constructor(t) {
            this.pc = t.pc, this.re = t.re, this.opcode = t.opcode, this.result = t.result
        }
    };
    var fA = {
        Reply: _W
    };
    let mW = class {
        constructor(t) {
            this.seq = t.seq, this.opcode = t.opcode, this.params = t.params
        }
    };
    var vW = {
        Request: mW
    };
    let EW = class {
            constructor(t) {
                this.key = t.key, this.size = t.size, this.version = t.version, this.from = t.from, this.meta = t.meta || {}, t.acl && (this.acl = t.acl)
            }
            whenRecived(t) {
                t.entities[this.key] = this
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
        },
        yW = class {
            constructor(t) {
                this.key = t.key, this.val = t.val
            }
            toString() {
                return `StackElement{
	key:${this.key}
	value: ${JSON.stringify(this.val)}
}`
            }
        },
        TW = class {
            constructor(t) {
                this.key = t.key, this.vals = t.vals
            }
            toString() {
                return `StackElements{
	key:${this.key}
	values: ${JSON.stringify(this.vals)}
}`
            }
        };
    var dA = {
        StackEntity: EW,
        StackElement: yW,
        StackElements: TW
    };
    let bW = class {
            constructor(t) {
                this.from = t.from, this.key = t.key, this.text = t.text, this.version = t.version, this.meta = t.meta || {}, t.acl && (this.acl = t.acl)
            }
            whenReceived(t) {
                t.entities[this.key] = this, t.emit("text " + this.key, this)
            }
            toString() {
                return `TextEntity{
	key: ${this.key}
	text: ${this.text}
	meta:${JSON.stringify(this.meta)}
}`
            }
            toBlob() {
                return JSON.parse(this.text)
            }
        },
        SW = class {
            constructor(t) {
                this.message = t.message
            }
            toString() {
                return `TextEcho{
	key: ${this.key}
	message: ${this.message}
}`
            }
        };
    var Ng = {
        TextEntity: bW,
        TextEcho: SW
    };
    let OW = class {
            constructor(t) {
                this.from = t.from, this.key = t.key, this.meta = t.meta || {}, this.root = t.root, t.acl && (this.acl = t.acl)
            }
            whenReceived(t) {
                t.entities[this.key] = this
            }
            toString() {
                return `TextMap{
	key:${this.key}
	meta:${JSON.stringify(this.meta)}
}`
            }
        },
        AW = class {
            constructor(t) {
                this.from = t.from, this.key = t.key, this.msg = t.msg
            }
            toString() {
                const t = this.msg ? this.msg.join(", ") : this.msg;
                return `TextMapSynced{
	key:${this.key}
	from:${this.from}
	msg:${t}
}`
            }
        },
        IW = class {
            constructor(t) {
                this.from = t.from, this.key = t.key, this.text = t.text, this.attributions = t.attributions
            }
            toString() {
                return `TextMapState{
	key: ${this.key}
	from:${this.from}
	text:${this.text}
	attributions:${this.attributions}
}`
            }
        };
    var Cg = {
        TextMapEntity: OW,
        TextMapSynced: AW,
        TextMapState: IW
    };
    let RW = class {
        constructor(t) {
            this.key = t.key, this.elements = t.elements, this.limit = t.limit, this.meta = t.meta || {}
        }
        whenReceived(t) {
            t.entities[this.key] = this
        }
        toString() {
            return `TextRing{
	elements: ${this.elements}
	meta:${JSON.stringify(this.meta)}
}`
        }
    };
    var wg = {
        TextRing: RW
    };
    let NW = class {
        constructor(t) {
            this.key = t.key, this.artifactId = t.artifactId, this.categoryId = t.categoryId, this.rootId = t.rootId, this.meta = t.meta || {}
        }
        whenReceived(t) {
            t.entities[this.key] = this
        }
        toString() {
            return `ArtifactEntity${JSON.stringify(this)}
`
        }
    };
    var hA = {
        ArtifactEntity: NW
    };
    let CW = class {
        constructor(t) {
            this.key = t.key
        }
        whenReceived(t) {
            delete t.entities[this.key]
        }
        toString() {
            return `DropEntity{
	key:${this.key}
}`
        }
    };
    var pA = {
        DropEntity: CW
    };
    let wW = class {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `Echo{message: ${this.message}
}`
        }
    };
    var LW = {
        Echo: wW
    };
    let PW = class {
        constructor(t) {
            this.key = t.key, this.from = t.from
        }
        whenReceived(t) {
            t.entities[this.key] && (t.entities[this.key].meta.locked = !0)
        }
        toString() {
            return `LockEntity{
	key:${this.key}
}`
        }
    };
    var $W = {
        LockEntity: PW
    };
    let DW = class {
        constructor() {}
        toString() {
            return "OK"
        }
    };
    var gA = {
        OK: DW
    };
    const {
        ArtifactEntity: xW
    } = hA, {
        ClientWelcome: MW,
        ClientConnected: kW,
        ClientDisconnected: UW,
        ClientKicked: BW,
        ClientSend: FW
    } = Tg, {
        CountGroup: GW
    } = bg, {
        DoodleEntity: WW,
        DoodleLine: jW,
        DoodleLineRemoved: HW
    } = Sg, {
        StackEntity: qW,
        StackElement: KW,
        StackElements: YW
    } = dA, {
        DropEntity: VW
    } = pA, {
        Echo: zW
    } = LW, {
        LockEntity: XW
    } = $W, {
        GCounter: JW
    } = Og, {
        GetAudienceReply: QW,
        RoomExit: ZW,
        RoomLock: e6
    } = Sl, {
        Notification: t6
    } = uA, {
        OK: r6
    } = gA, {
        NumberEntity: n6
    } = Ag, {
        ObjectEcho: i6,
        ObjectEntity: s6
    } = Ig, {
        PNCounter: $y
    } = Rg, {
        Reply: o6
    } = fA, {
        TextEcho: a6,
        TextEntity: c6
    } = Ng, {
        TextRing: u6
    } = wg, {
        createError: Dy,
        ObservedError: l6
    } = ya, {
        TextMapEntity: f6,
        TextMapSynced: d6,
        TextMapState: h6
    } = Cg;

    function Lh(e, t, r) {
        switch (e) {
            case "ok":
                return new r6;
            case "echo":
                return new zW({
                    message: t.message
                });
            case "lock":
                return new XW({
                    key: t.key,
                    from: t.from
                });
            case "error":
                return Dy({
                    code: t.code,
                    message: t.msg
                });
            case "error/observed":
                return new l6({
                    to: t.to,
                    opcode: t.opcode,
                    error: Dy({
                        code: t.error.code,
                        message: t.error.msg
                    })
                });
            case "string":
                return t;
            case "text":
                return new c6({
                    from: t.from,
                    key: t.key,
                    text: t.val,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "text/echo":
                return new a6({
                    message: t.message
                });
            case "object":
                return new s6({
                    from: t.from,
                    key: t.key,
                    val: t.val,
                    meta: r,
                    acl: t.acl
                });
            case "object/echo":
                return new i6({
                    message: t.message
                });
            case "drop":
                return new VW({
                    key: t.key
                });
            case "artifact":
                return new xW({
                    key: t.key,
                    artifactId: t.artifactId,
                    categoryId: t.categoryId,
                    rootId: t.rootId,
                    meta: r
                });
            case "client/connected":
                return new kW({
                    id: t.id,
                    userId: t.userId,
                    name: t.name,
                    role: t.role,
                    reconnect: t.reconnect
                });
            case "client/disconnected":
                return new UW({
                    id: t.id,
                    role: t.role
                });
            case "client/kicked":
                return new BW({
                    id: t.id,
                    banned: t.banned,
                    reason: t.reason
                });
            case "client/send":
                return new FW({
                    to: t.to,
                    from: t.from,
                    body: t.body,
                    userId: t.userID
                });
            case "client/welcome": {
                let n = new MW({
                    id: t.id,
                    name: t.name,
                    secret: t.secret,
                    reconnect: t.reconnect,
                    here: t.here,
                    profile: t.profile,
                    replayEnd: t.replayEnd
                });
                if (t.entities) {
                    let s = {};
                    Object.entries(t.entities).forEach(([o, c]) => {
                        s[o] = Lh(c[0], c[1], c[2])
                    }), n.entities = s
                }
                return n
            }
            case "doodle":
                return new WW({
                    key: t.key,
                    colors: t.val.colors,
                    lines: t.val.lines,
                    live: t.val.live,
                    maxLayer: t.val.maxLayer,
                    maxPoints: t.val.maxPoints,
                    size: t.val.size,
                    weights: t.val.weights,
                    meta: r,
                    acl: t.acl
                });
            case "doodle/line":
                return new jW({
                    key: t.key,
                    line: t.val
                });
            case "doodle/line/removed":
                return new HW({
                    key: t.key,
                    index: t.index
                });
            case "stack":
                return new qW({
                    key: t.key,
                    size: t.size,
                    from: t.from,
                    version: t.version,
                    meta: t.meta,
                    acl: t.acl
                });
            case "stack/element":
                return new KW({
                    key: t.key,
                    val: t.val
                });
            case "stack/elements":
                return new YW({
                    key: t.key,
                    vals: t.vals
                });
            case "number":
                return new n6({
                    key: t.key,
                    val: t.val,
                    restrictions: t.restrictions,
                    from: t.from,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "text-map":
                return new f6({
                    key: t.key,
                    from: t.from,
                    root: t.root,
                    meta: r,
                    acl: t.acl
                });
            case "text-map/state":
                return new h6({
                    key: t.key,
                    from: t.from,
                    attributions: t.attributions,
                    text: t.text
                });
            case "text-map/synced":
                return new d6({
                    key: t.key,
                    from: t.from,
                    msg: t.msg
                });
            case "room/exit":
                return new ZW({
                    cause: t.cause
                });
            case "room/lock":
                return new e6;
            case "room/get-audience":
                return new QW({
                    connections: t.connections
                });
            case "audience":
                return new $y({
                    key: e,
                    count: t[1]
                });
            case "audience/count-group":
                return new GW({
                    key: t.key,
                    choices: t.choices,
                    meta: r
                });
            case "audience/text-ring":
                return new u6({
                    key: t.key,
                    elements: t.elements,
                    meta: r
                });
            case "audience/g-counter":
                return new JW({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            case "audience/pn-counter":
                return new $y({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            default:
                return console.error(`failed to parse result of type ${e}: ${JSON.stringify(t,null,2)}`), t
        }
    }

    function p6(e) {
        let t = JSON.parse(e.data),
            r = t.opcode || t.type;
        return t.re ? new o6({
            pc: t.pc,
            re: t.re,
            opcode: r,
            result: Lh(r, t.result)
        }) : new t6({
            pc: t.pc,
            opcode: r,
            result: Lh(r, t.result)
        })
    }
    var g6 = {
        parseResponseMessage: p6
    };
    const xy = H8,
        _6 = SO,
        m6 = J8,
        {
            CallError: v6
        } = ya,
        {
            ClientWelcome: E6
        } = Tg,
        {
            CountGroup: y6
        } = bg,
        {
            DoodleEntity: T6
        } = Sg,
        {
            GCounter: b6
        } = Og,
        {
            Notification: My
        } = uA,
        {
            NumberEntity: S6
        } = Ag,
        {
            ObjectEntity: Sd
        } = Ig,
        {
            PNCounter: O6
        } = Rg,
        {
            Reply: A6
        } = fA,
        {
            Request: I6
        } = vW,
        {
            StackEntity: R6
        } = dA,
        {
            TextEntity: Od
        } = Ng,
        {
            TextMapEntity: N6
        } = Cg,
        {
            TextRing: C6
        } = wg,
        {
            parseResponseMessage: w6
        } = g6,
        L6 = 1e3 + Math.floor(Math.random() * 500),
        ky = 13e3;
    let P6 = class extends m6 {
        constructor(t) {
            if (super(), this.debug = t.debug || !1, !t.host) throw new Error("unable to create ecast WSClient: no host provided");
            if (this.host = t.host, !t.code) throw new Error("unable to create ecast WSClient: no room code provided");
            if (this.code = t.code, t.scheme ? this.scheme = t.scheme : this.scheme = "wss", t.secret && t.id) this.id = t.id, this.secret = t.secret;
            else {
                switch (t.role) {
                    case "player":
                        if (!t.name) throw new Error("unable to create ecast WSClient: no name provided");
                        break;
                    case "host":
                        if (!t.token) throw new Error("unable to create ecast WSClient: tried to connect with host role but without host token");
                        this.token = t.token;
                        break;
                    case "moderator":
                        if (!t.password) throw new Error("unable to create ecast WSClient: tried to connect with moderator role but without password");
                        break
                }
                t.password && (this.password = t.password), t.twitchToken && (this.twitchToken = t.twitchToken)
            }
            this.name = t.name, this.role = t.role, this.deviceId = t.deviceId, this.userId = t.userId, this.conn = null, this.seq = 0, this.pending = {}, this.entities = {}, t.role == "host" && (this.replaySince = t.replaySince || 0, this.syncEntities = t.syncEntities || !1)
        }
        connect() {
            const t = {
                id: this.id,
                role: this.role,
                name: this.name,
                format: "json",
                "user-id": this.userId,
                password: this.password
            };
            this.deviceId && (t["device-id"] = this.deviceId), this.twitchToken && (t["twitch-token"] = this.twitchToken), this.secret && (t.secret = this.secret), this.role === "host" && (t["host-token"] = this.token, this.replaySince > 0 && (t["replay-since"] = this.replaySince), this.syncEntities && (t["sync-entities"] = this.syncEntities));
            const r = _6.stringify(t),
                n = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${r}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${r}`;
            return new Promise((s, o) => {
                let c = !1,
                    l = !1,
                    f = p => {
                        s(p), c = !0
                    },
                    d = p => {
                        o(p), c = !0
                    };
                this.conn = new xy(n, "ecast-v0"), this.conn.onmessage = p => {
                    this.debugLog(`recv <- ${JSON.stringify(JSON.parse(p.data),null,2)}`);
                    const E = w6(p);
                    if (E instanceof A6) this.onReply(E);
                    else if (E instanceof My) {
                        if (E.result instanceof E6) l = !0, this.id = E.result.id, this.deviceId = E.result.deviceId, this.entities = E.result.entities, this.secret = E.result.secret, E.result.name && (this.name = E.result.name), f(E.result);
                        else if (!c) {
                            d(E.result);
                            return
                        }
                        this.onNotification(E)
                    } else console.error(`failed to parse response messsage: ${E}`)
                }, this.conn.onerror = p => {
                    c ? this.emit("socketError", p) : d(p)
                }, this.conn.onclose = p => {
                    this.debugLog("onclose", p.code), l && p.code === 1006 ? this.reconnect() : this.emit("socketClose", p)
                }, this.conn.onopen = p => {
                    this.emit("socketOpen", p)
                }
            })
        }
        sleep(t) {
            return new Promise(r => setTimeout(r, t))
        }
        debugLog(...t) {
            this.debug && console.log(`%c[WSClient:${this.name}]`, "background-color:blue;color:white;", ...t)
        }
        async reconnect() {
            this.disconnect(), this.debugLog("Attempting to reconnect");
            let t = 1,
                r = L6;
            for (;;) try {
                this.emit("connection", {
                    status: "connecting",
                    attempt: t
                }), await this.connect(), this.debugLog("reconnected"), this.emit("connection", {
                    status: "connected"
                });
                return
            } catch (n) {
                if (this.debugLog("reconnect error", n), n.code === 1005 || n.code === 1e3) {
                    this.debugLog("unable to reconnect!", n), this.emit("socketClose", n);
                    return
                }
                if (r >= ky) {
                    this.debugLog("reconnect failed!", n), this.emit("socketClose", n);
                    return
                }
                t += 1, this.debugLog("waiting", r), this.emit("connection", {
                    status: "waiting",
                    attempt: t
                }), await this.sleep(r), r = Math.min(ky, r * 2)
            }
        }
        disconnect() {
            this.conn && (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
        }
        onReply(t) {
            const r = t.re,
                n = this.pending[r];
            if (!n) {
                const s = new My(t);
                s.re = r, this.emit("notification", s);
                return
            }
            delete this.pending[r], t.result instanceof v6 ? n.reject(t.result) : n.resolve(t.result)
        }
        onNotification(t) {
            typeof t.result.whenReceived == "function" && t.result.whenReceived(this), this.emit("notification", t), this.emit(t.opcode, t.result)
        }
        send(t, r = {}) {
            if (!this.conn) throw new Error("No connection available");
            if (this.conn.readyState !== xy.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
            const n = ++this.seq,
                s = new I6({
                    seq: n,
                    opcode: t,
                    params: r
                }),
                o = new Promise((l, f) => {
                    this.pending[n] = {
                        resolve: l,
                        reject: f,
                        request: s
                    }
                }),
                c = JSON.stringify(s);
            return this.debugLog(`send -> ${c}`), this.conn.send(c), o
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
        mail(t, r) {
            return this.send("client/send", {
                from: this.id,
                to: t,
                body: r
            })
        }
        kick(t, r = !1, n) {
            return this.send("client/kick", {
                id: t,
                ban: r,
                reason: n
            })
        }
        async drop(t) {
            const r = await this.send("drop", {
                key: t
            });
            return delete this.entities[t], r
        }
        echo(t) {
            return this.send("echo", {
                message: t
            })
        }
        async lock(t) {
            const r = await this.send("lock", {
                key: t
            });
            return this.entities[t].meta.locked = !0, r
        }
        async createNumber(t, r = {}) {
            let n = {
                key: t
            };
            const {
                val: s = 0,
                acl: o,
                min: c,
                max: l,
                increment: f,
                type: d
            } = r;
            n.val = s, o && (n.acl = o), c != null && (n.min = c), l != null && (n.max = l), f && (n.increment = f), d && (n.type = d);
            const p = await this.send("number/create", n);
            return this.entities[t] = new S6({
                key: t,
                val: s,
                restrictions: {
                    min: c,
                    max: l,
                    increment: f,
                    type: d
                },
                meta: {
                    locked: !1
                }
            }), p
        }
        async decrementNumber(t) {
            const r = await this.send("number/decrement", {
                key: t
            });
            return this.entities[t].val = r.val, r
        }
        async getNumber(t) {
            const r = await this.send("number/get", {
                key: t
            });
            return this.entities[t] ? (this.entities[t].val = r.val, this.entities[t].restrictions = r.restrictions) : this.entities[t] = r, r
        }
        async incrementNumber(t) {
            const r = await this.send("number/increment", {
                key: t
            });
            return this.entities[t].val = r.val, r
        }
        async updateNumber(t, r) {
            const n = await this.send("number/update", {
                key: t,
                val: r
            });
            return this.entities[t].val = r, n
        }
        async createObject(t, r, n) {
            const s = {
                key: t,
                val: r
            };
            n && (s.acl = n);
            const o = await this.send("object/create", s);
            return this.entities[t] = new Sd({
                key: t,
                val: r,
                meta: {
                    locked: !1
                }
            }), o
        }
        echoObject(t) {
            return this.send("object/echo", {
                message: t
            })
        }
        async getObject(t) {
            const r = await this.send("object/get", {
                key: t
            });
            return this.entities[t] ? (this.entities[t].val = r.val, this.entities[t].version = r.version, this.entities[t].from = r.from) : this.entities[t] = r, r
        }
        async setObject(t, r, n) {
            const s = {
                key: t,
                val: r
            };
            n && (s.acl = n);
            const o = await this.send("object/set", s);
            return this.entities[t] = new Sd({
                key: t,
                val: r,
                meta: {
                    locked: !1
                }
            }), o
        }
        async updateObject(t, r) {
            const n = await this.send("object/update", {
                key: t,
                val: r
            });
            return this.entities[t] = new Sd({
                key: t,
                val: r,
                meta: {
                    locked: !1
                }
            }), n
        }
        echoText(t) {
            return this.send("text/echo", {
                message: t
            })
        }
        getText(t) {
            return this.send("text/get", {
                key: t
            })
        }
        async createText(t, r, n) {
            const s = {
                    key: t,
                    val: r
                },
                {
                    acl: o,
                    accept: c,
                    reject: l
                } = n;
            o && (s.acl = o), c && (s.accept = c), l && (s.reject = l);
            const f = await this.send("text/create", s);
            return this.entities[t] = new Od({
                key: t,
                text: r,
                meta: {
                    locked: !1
                }
            }), f
        }
        async setText(t, r, n) {
            const s = {
                key: t,
                val: r
            };
            n && (s.acl = n);
            const o = await this.send("text/set", s);
            return this.entities[t] = new Od({
                key: t,
                text: r,
                meta: {
                    locked: !1
                }
            }), o
        }
        async updateText(t, r) {
            const n = await this.send("text/update", {
                key: t,
                val: r
            });
            return this.entities[t] = new Od({
                key: t,
                text: r,
                meta: {
                    locked: !1
                }
            }), n
        }
        async createTextMap(t, r = {}) {
            const {
                val: n,
                notifyHost: s,
                acl: o,
                accept: c,
                reject: l
            } = r;
            let f = {
                key: t
            };
            n && (f.val = r.val), s && (f.notifyHost = r.notifyHost), o && (f.acl = o), c && (f.accept = c), l && (f.reject = l);
            const d = await this.send("text-map/create", f);
            return this.entities[t] = new N6({
                key: t,
                acl: o,
                meta: {
                    locked: !1
                }
            }), d
        }
        async syncTextMap(t, r) {
            return await this.send("text-map/sync", {
                key: t,
                msg: r
            })
        }
        async getTextMap(t, r) {
            const {
                includeNodes: n
            } = r;
            return await this.send("text-map/get", {
                key: t,
                includeNodes: n
            })
        }
        async createDoodle(t, r) {
            let n = {
                key: t
            };
            const {
                acl: s,
                colors: o,
                live: c,
                maxLayer: l,
                maxPoints: f,
                size: d,
                weights: p
            } = r;
            s && (n.acl = s), o && (n.colors = o), n.live = c, l != null && (n.maxLayer = l), f != null && (n.maxPoints = f), d && (n.size = d), p && (n.weights = p);
            const E = await this.send("doodle/create", n);
            return this.entities[t] = new T6({
                key: t,
                colors: o,
                lines: [],
                live: c,
                maxLayer: n.maxLayer || 0,
                maxPoints: n.maxPoints || 0,
                size: d,
                weights: p,
                meta: {
                    locked: !1
                }
            }), E
        }
        async getDoodle(t) {
            const r = await this.send("doodle/get", {
                key: t
            });
            return this.entities[t] ? this.entities[t].lines = r.lines : this.entities[t] = r, r
        }
        async strokeDoodle(t, r) {
            const {
                color: n,
                weight: s,
                layer: o,
                points: c,
                brush: l
            } = r, f = {
                color: n,
                weight: s,
                layer: o,
                points: c
            };
            l && (f.brush = l);
            const d = await this.send("doodle/stroke", {
                key: t,
                ...f
            });
            return this.entities[t].lines.push(f), d
        }
        async undoDoodle(t) {
            const r = await this.send("doodle/undo", {
                key: t
            });
            return this.entities[t].lines.pop(), r
        }
        async createStack(t, r) {
            const n = {
                key: t
            };
            r && (n.acl = r);
            const s = await this.send("stack/create", n);
            return this.entities[t] = new R6({
                key: t,
                size: 0,
                meta: {
                    locked: !1
                }
            }), s
        }
        pushStack(t, r) {
            return this.send("stack/push", {
                key: t,
                val: r
            })
        }
        bulkPushStack(t, r) {
            return this.send("stack/bulkpush", {
                key: t,
                vals: r
            })
        }
        peekStack(t, r) {
            return this.send("stack/peek", {
                key: t,
                size: r
            })
        }
        popStack(t) {
            return this.send("stack/pop", {
                key: t
            })
        }
        async createCountGroup(t, r) {
            const n = await this.send("audience/count-group/create", {
                name: t,
                options: r
            });
            return this.entities[t] = new y6({
                key: t,
                choices: r,
                meta: {
                    locked: !1
                }
            }), n
        }
        incrementCountGroupCounter(t, r, n = 1) {
            return this.send("audience/count-group/increment", {
                name: t,
                vote: r,
                times: n
            })
        }
        getCountGroup(t) {
            return this.send("audience/count-group/get", {
                name: t
            })
        }
        async createGCounter(t, r) {
            const n = await this.send("audience/g-counter/create", {
                key: t,
                count: r
            });
            return this.entities[t] = new b6({
                key: t,
                count: r,
                meta: {
                    locked: !1
                }
            }), n
        }
        incrementGCounter(t, r) {
            return this.send("audience/g-counter/increment", {
                key: t,
                times: r
            })
        }
        getGCounter(t) {
            return this.send("audience/g-counter/get", {
                key: t
            })
        }
        async createPNCounter(t, r) {
            const n = await this.send("audience/pn-counter/create", {
                key: t,
                count: r
            });
            return this.entities[t] = new O6({
                key: t,
                count: r,
                meta: {
                    locked: !1
                }
            }), n
        }
        incrementPNCounter(t, r) {
            return this.send("audience/pn-counter/increment", {
                key: t,
                times: r
            })
        }
        decrementPNCounter(t, r) {
            return this.send("audience/pn-counter/decrement", {
                key: t,
                times: r
            })
        }
        getPNCounter(t) {
            return this.send("audience/pn-counter/get", {
                key: t
            })
        }
        async createTextRing(t, r) {
            const n = {
                    key: t
                },
                {
                    limit: s,
                    accept: o,
                    reject: c
                } = r;
            s && (n.limit = s), o && (n.accept = o), c && (n.reject = c);
            const l = await this.send("audience/text-ring/create", n);
            return this.entities[t] = new C6({
                key: t,
                elements: [],
                limit: s,
                meta: {
                    locked: !1
                }
            }), l
        }
        getTextRing(t) {
            return this.send("audience/text-ring/get", {
                name: t
            })
        }
        pushTextRing(t, r) {
            return this.send("audience/text-ring/push", {
                name: t,
                text: r
            })
        }
    };
    var $6 = {
        WSClient: P6
    };
    const {
        APIClient: D6
    } = j8, {
        WSClient: x6
    } = $6, {
        CreateRoomReply: M6,
        GetRoomReply: k6
    } = Sl, {
        ClientWelcome: U6,
        ClientDisconnected: B6
    } = Tg, {
        ArtifactEntity: F6
    } = hA, {
        GCounter: G6
    } = Og, {
        NumberEntity: W6
    } = Ag, {
        TextEntity: j6
    } = Ng, {
        DoodleEntity: H6
    } = Sg, {
        ObjectEntity: q6
    } = Ig, {
        CountGroup: K6
    } = bg, {
        DropEntity: Y6
    } = pA, {
        OK: V6
    } = gA, {
        RoomExit: z6
    } = Sl, {
        TextRing: X6
    } = wg, {
        TextMapEntity: J6
    } = Cg, {
        PNCounter: Q6
    } = Rg;
    var Jn = {
        APIClient: D6,
        WSClient: x6,
        ClientWelcome: U6,
        CreateRoomReply: M6,
        DropEntity: Y6,
        GetRoomReply: k6,
        ClientDisconnected: B6,
        RoomExit: z6,
        OK: V6,
        ArtifactEntity: F6,
        DoodleEntity: H6,
        NumberEntity: W6,
        CountGroup: K6,
        GCounter: G6,
        ObjectEntity: q6,
        PNCounter: Q6,
        TextEntity: j6,
        TextRing: X6,
        TextMapEntity: J6
    };

    function Z6(e) {
        throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var Uy = {
        exports: {}
    };
    (function(e, t) {
        (function(r, n) {
            n(t)
        })(Pt, function(r) {
            var n = typeof window < "u" ? window : typeof Pt < "u" ? Pt : typeof self < "u" ? self : {},
                s = function(O, x) {
                    if (x = x.split(":")[0], O = +O, !O) return !1;
                    switch (x) {
                        case "http":
                        case "ws":
                            return O !== 80;
                        case "https":
                        case "wss":
                            return O !== 443;
                        case "ftp":
                            return O !== 21;
                        case "gopher":
                            return O !== 70;
                        case "file":
                            return !1
                    }
                    return O !== 0
                },
                o = Object.prototype.hasOwnProperty,
                c;

            function l(I) {
                try {
                    return decodeURIComponent(I.replace(/\+/g, " "))
                } catch {
                    return null
                }
            }

            function f(I) {
                try {
                    return encodeURIComponent(I)
                } catch {
                    return null
                }
            }

            function d(I) {
                for (var O = /([^=?#&]+)=?([^&]*)/g, x = {}, A; A = O.exec(I);) {
                    var D = l(A[1]),
                        ee = l(A[2]);
                    D === null || ee === null || D in x || (x[D] = ee)
                }
                return x
            }

            function p(I, O) {
                O = O || "";
                var x = [],
                    A, D;
                typeof O != "string" && (O = "?");
                for (D in I)
                    if (o.call(I, D)) {
                        if (A = I[D], !A && (A === null || A === c || isNaN(A)) && (A = ""), D = f(D), A = f(A), D === null || A === null) continue;
                        x.push(D + "=" + A)
                    } return x.length ? O + x.join("&") : ""
            }
            var E = p,
                _ = d,
                S = {
                    stringify: E,
                    parse: _
                },
                N = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                L = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                M = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
                R = new RegExp("^" + M + "+");

            function G(I) {
                return (I || "").toString().replace(R, "")
            }
            var K = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(O, x) {
                        return X(x.protocol) ? O.replace(/\\/g, "/") : O
                    },
                    ["/", "pathname"],
                    ["@", "auth", 1],
                    [NaN, "host", void 0, 1, 1],
                    [/:(\d+)$/, "port", void 0, 1],
                    [NaN, "hostname", void 0, 1, 1]
                ],
                U = {
                    hash: 1,
                    query: 1
                };

            function j(I) {
                var O;
                typeof window < "u" ? O = window : typeof n < "u" ? O = n : typeof self < "u" ? O = self : O = {};
                var x = O.location || {};
                I = I || x;
                var A = {},
                    D = typeof I,
                    ee;
                if (I.protocol === "blob:") A = new ce(unescape(I.pathname), {});
                else if (D === "string") {
                    A = new ce(I, {});
                    for (ee in U) delete A[ee]
                } else if (D === "object") {
                    for (ee in I) ee in U || (A[ee] = I[ee]);
                    A.slashes === void 0 && (A.slashes = N.test(I.href))
                }
                return A
            }

            function X(I) {
                return I === "file:" || I === "ftp:" || I === "http:" || I === "https:" || I === "ws:" || I === "wss:"
            }

            function ie(I, O) {
                I = G(I), O = O || {};
                var x = L.exec(I),
                    A = x[1] ? x[1].toLowerCase() : "",
                    D = !!x[2],
                    ee = !!x[3],
                    se = 0,
                    he;
                return D ? ee ? (he = x[2] + x[3] + x[4], se = x[2].length + x[3].length) : (he = x[2] + x[4], se = x[2].length) : ee ? (he = x[3] + x[4], se = x[3].length) : he = x[4], A === "file:" ? se >= 2 && (he = he.slice(2)) : X(A) ? he = x[4] : A ? D && (he = he.slice(2)) : se >= 2 && X(O.protocol) && (he = x[4]), {
                    protocol: A,
                    slashes: D || X(A),
                    slashesCount: se,
                    rest: he
                }
            }

            function ue(I, O) {
                if (I === "") return O;
                for (var x = (O || "/").split("/").slice(0, -1).concat(I.split("/")), A = x.length, D = x[A - 1], ee = !1, se = 0; A--;) x[A] === "." ? x.splice(A, 1) : x[A] === ".." ? (x.splice(A, 1), se++) : se && (A === 0 && (ee = !0), x.splice(A, 1), se--);
                return ee && x.unshift(""), (D === "." || D === "..") && x.push(""), x.join("/")
            }

            function ce(I, O, x) {
                if (I = G(I), !(this instanceof ce)) return new ce(I, O, x);
                var A, D, ee, se, he, be, $t = K.slice(),
                    Cr = typeof O,
                    Pe = this,
                    Go = 0;
                for (Cr !== "object" && Cr !== "string" && (x = O, O = null), x && typeof x != "function" && (x = S.parse), O = j(O), D = ie(I || "", O), A = !D.protocol && !D.slashes, Pe.slashes = D.slashes || A && O.slashes, Pe.protocol = D.protocol || O.protocol || "", I = D.rest, (Pe.protocol === "file:" || !D.slashes && (D.protocol || D.slashesCount < 2 || !X(Pe.protocol))) && ($t[3] = [/(.*)/, "pathname"]); Go < $t.length; Go++) {
                    if (se = $t[Go], typeof se == "function") {
                        I = se(I, Pe);
                        continue
                    }
                    ee = se[0], be = se[1], ee !== ee ? Pe[be] = I : typeof ee == "string" ? ~(he = I.indexOf(ee)) && (typeof se[2] == "number" ? (Pe[be] = I.slice(0, he), I = I.slice(he + se[2])) : (Pe[be] = I.slice(he), I = I.slice(0, he))) : (he = ee.exec(I)) && (Pe[be] = he[1], I = I.slice(0, he.index)), Pe[be] = Pe[be] || A && se[3] && O[be] || "", se[4] && (Pe[be] = Pe[be].toLowerCase())
                }
                x && (Pe.query = x(Pe.query)), A && O.slashes && Pe.pathname.charAt(0) !== "/" && (Pe.pathname !== "" || O.pathname !== "") && (Pe.pathname = ue(Pe.pathname, O.pathname)), Pe.pathname.charAt(0) !== "/" && X(Pe.protocol) && (Pe.pathname = "/" + Pe.pathname), s(Pe.port, Pe.protocol) || (Pe.host = Pe.hostname, Pe.port = ""), Pe.username = Pe.password = "", Pe.auth && (se = Pe.auth.split(":"), Pe.username = se[0] || "", Pe.password = se[1] || ""), Pe.origin = Pe.protocol !== "file:" && X(Pe.protocol) && Pe.host ? Pe.protocol + "//" + Pe.host : "null", Pe.href = Pe.toString()
            }

            function Ae(I, O, x) {
                var A = this;
                switch (I) {
                    case "query":
                        typeof O == "string" && O.length && (O = (x || S.parse)(O)), A[I] = O;
                        break;
                    case "port":
                        A[I] = O, s(O, A.protocol) ? O && (A.host = A.hostname + ":" + O) : (A.host = A.hostname, A[I] = "");
                        break;
                    case "hostname":
                        A[I] = O, A.port && (O += ":" + A.port), A.host = O;
                        break;
                    case "host":
                        A[I] = O, /:\d+$/.test(O) ? (O = O.split(":"), A.port = O.pop(), A.hostname = O.join(":")) : (A.hostname = O, A.port = "");
                        break;
                    case "protocol":
                        A.protocol = O.toLowerCase(), A.slashes = !x;
                        break;
                    case "pathname":
                    case "hash":
                        if (O) {
                            var D = I === "pathname" ? "/" : "#";
                            A[I] = O.charAt(0) !== D ? D + O : O
                        } else A[I] = O;
                        break;
                    default:
                        A[I] = O
                }
                for (var ee = 0; ee < K.length; ee++) {
                    var se = K[ee];
                    se[4] && (A[se[1]] = A[se[1]].toLowerCase())
                }
                return A.origin = A.protocol !== "file:" && X(A.protocol) && A.host ? A.protocol + "//" + A.host : "null", A.href = A.toString(), A
            }

            function Me(I) {
                (!I || typeof I != "function") && (I = S.stringify);
                var O, x = this,
                    A = x.protocol;
                A && A.charAt(A.length - 1) !== ":" && (A += ":");
                var D = A + (x.slashes || X(x.protocol) ? "//" : "");
                return x.username && (D += x.username, x.password && (D += ":" + x.password), D += "@"), D += x.host + x.pathname, O = typeof x.query == "object" ? I(x.query) : x.query, O && (D += O.charAt(0) !== "?" ? "?" + O : O), x.hash && (D += x.hash), D
            }
            ce.prototype = {
                set: Ae,
                toString: Me
            }, ce.extractProtocol = ie, ce.location = j, ce.trimLeft = G, ce.qs = S;
            var fe = ce;

            function Ie(I, O) {
                setTimeout(function(x) {
                    return I.call(x)
                }, 4, O)
            }

            function He(I, O) {
                typeof process < "u" && console[I].call(null, O)
            }

            function H(I, O) {
                I === void 0 && (I = []);
                var x = [];
                return I.forEach(function(A) {
                    O(A) || x.push(A)
                }), x
            }

            function Q(I, O) {
                I === void 0 && (I = []);
                var x = [];
                return I.forEach(function(A) {
                    O(A) && x.push(A)
                }), x
            }
            var de = function() {
                this.listeners = {}
            };
            de.prototype.addEventListener = function(O, x) {
                typeof x == "function" && (Array.isArray(this.listeners[O]) || (this.listeners[O] = []), Q(this.listeners[O], function(A) {
                    return A === x
                }).length === 0 && this.listeners[O].push(x))
            }, de.prototype.removeEventListener = function(O, x) {
                var A = this.listeners[O];
                this.listeners[O] = H(A, function(D) {
                    return D === x
                })
            }, de.prototype.dispatchEvent = function(O) {
                for (var x = this, A = [], D = arguments.length - 1; D-- > 0;) A[D] = arguments[D + 1];
                var ee = O.type,
                    se = this.listeners[ee];
                return Array.isArray(se) ? (se.forEach(function(he) {
                    A.length > 0 ? he.apply(x, A) : he.call(x, O)
                }), !0) : !1
            };

            function pe(I) {
                var O = I.indexOf("?");
                return O >= 0 ? I.slice(0, O) : I
            }
            var we = function() {
                this.urlMap = {}
            };
            we.prototype.attachWebSocket = function(O, x) {
                var A = pe(x),
                    D = this.urlMap[A];
                if (D && D.server && D.websockets.indexOf(O) === -1) return D.websockets.push(O), D.server
            }, we.prototype.addMembershipToRoom = function(O, x) {
                var A = this.urlMap[pe(O.url)];
                A && A.server && A.websockets.indexOf(O) !== -1 && (A.roomMemberships[x] || (A.roomMemberships[x] = []), A.roomMemberships[x].push(O))
            }, we.prototype.attachServer = function(O, x) {
                var A = pe(x),
                    D = this.urlMap[A];
                if (!D) return this.urlMap[A] = {
                    server: O,
                    websockets: [],
                    roomMemberships: {}
                }, O
            }, we.prototype.serverLookup = function(O) {
                var x = pe(O),
                    A = this.urlMap[x];
                if (A) return A.server
            }, we.prototype.websocketsLookup = function(O, x, A) {
                var D = pe(O),
                    ee, se = this.urlMap[D];
                if (ee = se ? se.websockets : [], x) {
                    var he = se.roomMemberships[x];
                    ee = he || []
                }
                return A ? ee.filter(function(be) {
                    return be !== A
                }) : ee
            }, we.prototype.removeServer = function(O) {
                delete this.urlMap[pe(O)]
            }, we.prototype.removeWebSocket = function(O, x) {
                var A = pe(x),
                    D = this.urlMap[A];
                D && (D.websockets = H(D.websockets, function(ee) {
                    return ee === O
                }))
            }, we.prototype.removeMembershipFromRoom = function(O, x) {
                var A = this.urlMap[pe(O.url)],
                    D = A.roomMemberships[x];
                A && D !== null && (A.roomMemberships[x] = H(D, function(ee) {
                    return ee === O
                }))
            };
            var me = new we,
                Be = {
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
                Xe = {
                    CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                    CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                    EVENT: {
                        CONSTRUCT: "Failed to construct 'Event':",
                        MESSAGE: "Failed to construct 'MessageEvent':",
                        CLOSE: "Failed to construct 'CloseEvent':"
                    }
                },
                ct = function() {};
            ct.prototype.stopPropagation = function() {}, ct.prototype.stopImmediatePropagation = function() {}, ct.prototype.initEvent = function(O, x, A) {
                O === void 0 && (O = "undefined"), x === void 0 && (x = !1), A === void 0 && (A = !1), this.type = "" + O, this.bubbles = !!x, this.cancelable = !!A
            };
            var Jt = function(I) {
                    function O(x, A) {
                        if (A === void 0 && (A = {}), I.call(this), !x) throw new TypeError(Xe.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof A != "object") throw new TypeError(Xe.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var D = A.bubbles,
                            ee = A.cancelable;
                        this.type = "" + x, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = ee ? !!ee : !1, this.cancelBubble = !1, this.bubbles = D ? !!D : !1
                    }
                    return I && (O.__proto__ = I), O.prototype = Object.create(I && I.prototype), O.prototype.constructor = O, O
                }(ct),
                or = function(I) {
                    function O(x, A) {
                        if (A === void 0 && (A = {}), I.call(this), !x) throw new TypeError(Xe.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof A != "object") throw new TypeError(Xe.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var D = A.bubbles,
                            ee = A.cancelable,
                            se = A.data,
                            he = A.origin,
                            be = A.lastEventId,
                            $t = A.ports;
                        this.type = "" + x, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = ee ? !!ee : !1, this.canncelBubble = !1, this.bubbles = D ? !!D : !1, this.origin = "" + he, this.ports = typeof $t > "u" ? null : $t, this.data = typeof se > "u" ? null : se, this.lastEventId = "" + (be || "")
                    }
                    return I && (O.__proto__ = I), O.prototype = Object.create(I && I.prototype), O.prototype.constructor = O, O
                }(ct),
                Ct = function(I) {
                    function O(x, A) {
                        if (A === void 0 && (A = {}), I.call(this), !x) throw new TypeError(Xe.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof A != "object") throw new TypeError(Xe.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var D = A.bubbles,
                            ee = A.cancelable,
                            se = A.code,
                            he = A.reason,
                            be = A.wasClean;
                        this.type = "" + x, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = ee ? !!ee : !1, this.cancelBubble = !1, this.bubbles = D ? !!D : !1, this.code = typeof se == "number" ? parseInt(se, 10) : 0, this.reason = "" + (he || ""), this.wasClean = be ? !!be : !1
                    }
                    return I && (O.__proto__ = I), O.prototype = Object.create(I && I.prototype), O.prototype.constructor = O, O
                }(ct);

            function vt(I) {
                var O = I.type,
                    x = I.target,
                    A = new Jt(O);
                return x && (A.target = x, A.srcElement = x, A.currentTarget = x), A
            }

            function wt(I) {
                var O = I.type,
                    x = I.origin,
                    A = I.data,
                    D = I.target,
                    ee = new or(O, {
                        data: A,
                        origin: x
                    });
                return D && (ee.target = D, ee.srcElement = D, ee.currentTarget = D), ee
            }

            function et(I) {
                var O = I.code,
                    x = I.reason,
                    A = I.type,
                    D = I.target,
                    ee = I.wasClean;
                ee || (ee = O === Be.CLOSE_NORMAL || O === Be.CLOSE_NO_STATUS);
                var se = new Ct(A, {
                    code: O,
                    reason: x,
                    wasClean: ee
                });
                return D && (se.target = D, se.srcElement = D, se.currentTarget = D), se
            }

            function Qt(I, O, x) {
                I.readyState = J.CLOSING;
                var A = me.serverLookup(I.url),
                    D = et({
                        type: "close",
                        target: I.target,
                        code: O,
                        reason: x
                    }),
                    ee = et({
                        type: "server::close",
                        target: I,
                        code: O,
                        reason: x
                    });
                Ie(function() {
                    me.removeWebSocket(I, I.url), I.readyState = J.CLOSED, I.dispatchEvent(D), I.dispatchEvent(ee), A && A.dispatchEvent(D, A)
                }, I)
            }

            function Kt(I, O, x) {
                I.readyState = J.CLOSING;
                var A = me.serverLookup(I.url),
                    D = et({
                        type: "close",
                        target: I.target,
                        code: O,
                        reason: x,
                        wasClean: !1
                    }),
                    ee = et({
                        type: "server::close",
                        target: I,
                        code: O,
                        reason: x,
                        wasClean: !1
                    }),
                    se = vt({
                        type: "error",
                        target: I.target
                    });
                Ie(function() {
                    me.removeWebSocket(I, I.url), I.readyState = J.CLOSED, I.dispatchEvent(se), I.dispatchEvent(D), I.dispatchEvent(ee), A && A.dispatchEvent(D, A)
                }, I)
            }

            function P(I) {
                return Object.prototype.toString.call(I) !== "[object Blob]" && !(I instanceof ArrayBuffer) && (I = String(I)), I
            }
            var m = new WeakMap;

            function v(I) {
                if (m.has(I)) return m.get(I);
                var O = new Proxy(I, {
                    get: function(A, D) {
                        return D === "close" ? function(se) {
                            se === void 0 && (se = {});
                            var he = se.code || Be.CLOSE_NORMAL,
                                be = se.reason || "";
                            Qt(O, he, be)
                        } : D === "send" ? function(se) {
                            se = P(se), I.dispatchEvent(wt({
                                type: "message",
                                data: se,
                                origin: this.url,
                                target: I
                            }))
                        } : D === "on" ? function(se, he) {
                            I.addEventListener("server::" + se, he)
                        } : D === "target" ? I : A[D]
                    }
                });
                return m.set(I, O), O
            }

            function w(I) {
                var O = encodeURIComponent(I).match(/%[89ABab]/g);
                return I.length + (O ? O.length : 0)
            }

            function F(I) {
                var O = new fe(I),
                    x = O.pathname,
                    A = O.protocol,
                    D = O.hash;
                if (!I) throw new TypeError(Xe.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if (x || (O.pathname = "/"), A === "") throw new SyntaxError(Xe.CONSTRUCTOR_ERROR + " The URL '" + O.toString() + "' is invalid.");
                if (A !== "ws:" && A !== "wss:") throw new SyntaxError(Xe.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + A + "' is not allowed.");
                if (D !== "") throw new SyntaxError(Xe.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + D + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return O.toString()
            }

            function V(I) {
                if (I === void 0 && (I = []), !Array.isArray(I) && typeof I != "string") throw new SyntaxError(Xe.CONSTRUCTOR_ERROR + " The subprotocol '" + I.toString() + "' is invalid.");
                typeof I == "string" && (I = [I]);
                var O = I.map(function(A) {
                        return {
                            count: 1,
                            protocol: A
                        }
                    }).reduce(function(A, D) {
                        return A[D.protocol] = (A[D.protocol] || 0) + D.count, A
                    }, {}),
                    x = Object.keys(O).filter(function(A) {
                        return O[A] > 1
                    });
                if (x.length > 0) throw new SyntaxError(Xe.CONSTRUCTOR_ERROR + " The subprotocol '" + x[0] + "' is duplicated.");
                return I
            }
            var J = function(I) {
                function O(A, D) {
                    I.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = F(A), D = V(D), this.protocol = D[0] || "", this.binaryType = "blob", this.readyState = O.CONNECTING;
                    var ee = v(this),
                        se = me.attachWebSocket(ee, this.url);
                    Ie(function() {
                        if (se)
                            if (se.options.verifyClient && typeof se.options.verifyClient == "function" && !se.options.verifyClient()) this.readyState = O.CLOSED, He("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), me.removeWebSocket(ee, this.url), this.dispatchEvent(vt({
                                type: "error",
                                target: this
                            })), this.dispatchEvent(et({
                                type: "close",
                                target: this,
                                code: Be.CLOSE_NORMAL
                            }));
                            else {
                                if (se.options.selectProtocol && typeof se.options.selectProtocol == "function") {
                                    var be = se.options.selectProtocol(D),
                                        $t = be !== "",
                                        Cr = D.indexOf(be) !== -1;
                                    if ($t && !Cr) {
                                        this.readyState = O.CLOSED, He("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), me.removeWebSocket(ee, this.url), this.dispatchEvent(vt({
                                            type: "error",
                                            target: this
                                        })), this.dispatchEvent(et({
                                            type: "close",
                                            target: this,
                                            code: Be.CLOSE_NORMAL
                                        }));
                                        return
                                    }
                                    this.protocol = be
                                }
                                this.readyState = O.OPEN, this.dispatchEvent(vt({
                                    type: "open",
                                    target: this
                                })), se.dispatchEvent(vt({
                                    type: "connection"
                                }), ee)
                            }
                        else this.readyState = O.CLOSED, this.dispatchEvent(vt({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(et({
                            type: "close",
                            target: this,
                            code: Be.CLOSE_NORMAL
                        })), He("error", "WebSocket connection to '" + this.url + "' failed")
                    }, this)
                }
                I && (O.__proto__ = I), O.prototype = Object.create(I && I.prototype), O.prototype.constructor = O;
                var x = {
                    onopen: {},
                    onmessage: {},
                    onclose: {},
                    onerror: {}
                };
                return x.onopen.get = function() {
                    return this._onopen
                }, x.onmessage.get = function() {
                    return this._onmessage
                }, x.onclose.get = function() {
                    return this._onclose
                }, x.onerror.get = function() {
                    return this._onerror
                }, x.onopen.set = function(A) {
                    this.removeEventListener("open", this._onopen), this._onopen = A, this.addEventListener("open", A)
                }, x.onmessage.set = function(A) {
                    this.removeEventListener("message", this._onmessage), this._onmessage = A, this.addEventListener("message", A)
                }, x.onclose.set = function(A) {
                    this.removeEventListener("close", this._onclose), this._onclose = A, this.addEventListener("close", A)
                }, x.onerror.set = function(A) {
                    this.removeEventListener("error", this._onerror), this._onerror = A, this.addEventListener("error", A)
                }, O.prototype.send = function(D) {
                    var ee = this;
                    if (this.readyState === O.CLOSING || this.readyState === O.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                    var se = wt({
                            type: "server::message",
                            origin: this.url,
                            data: P(D)
                        }),
                        he = me.serverLookup(this.url);
                    he && Ie(function() {
                        ee.dispatchEvent(se, D)
                    }, he)
                }, O.prototype.close = function(D, ee) {
                    if (D !== void 0 && (typeof D != "number" || D !== 1e3 && (D < 3e3 || D > 4999))) throw new TypeError(Xe.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + D + " is neither.");
                    if (ee !== void 0) {
                        var se = w(ee);
                        if (se > 123) throw new SyntaxError(Xe.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === O.CLOSING || this.readyState === O.CLOSED)) {
                        var he = v(this);
                        this.readyState === O.CONNECTING ? Kt(he, D || Be.CLOSE_ABNORMAL, ee) : Qt(he, D || Be.CLOSE_NO_STATUS, ee)
                    }
                }, Object.defineProperties(O.prototype, x), O
            }(de);
            J.CONNECTING = 0, J.prototype.CONNECTING = J.CONNECTING, J.OPEN = 1, J.prototype.OPEN = J.OPEN, J.CLOSING = 2, J.prototype.CLOSING = J.CLOSING, J.CLOSED = 3, J.prototype.CLOSED = J.CLOSED;
            var ae = function(I) {
                return I.reduce(function(O, x) {
                    return O.indexOf(x) > -1 ? O : O.concat(x)
                }, [])
            };

            function le() {
                return typeof window < "u" ? window : typeof process == "object" && typeof Z6 == "function" && typeof Pt == "object" ? Pt : this
            }
            var z = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                W = function(I) {
                    function O(x, A) {
                        A === void 0 && (A = z), I.call(this);
                        var D = new fe(x);
                        D.pathname || (D.pathname = "/"), this.url = D.toString(), this.originalWebSocket = null;
                        var ee = me.attachServer(this, this.url);
                        if (!ee) throw this.dispatchEvent(vt({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, z, A), this.options.mock && this.mockWebsocket()
                    }
                    return I && (O.__proto__ = I), O.prototype = Object.create(I && I.prototype), O.prototype.constructor = O, O.prototype.mockWebsocket = function() {
                        var A = le();
                        this.originalWebSocket = A.WebSocket, A.WebSocket = J
                    }, O.prototype.restoreWebsocket = function() {
                        var A = le();
                        this.originalWebSocket !== null && (A.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                    }, O.prototype.stop = function(A) {
                        A === void 0 && (A = function() {}), this.options.mock && this.restoreWebsocket(), me.removeServer(this.url), typeof A == "function" && A()
                    }, O.prototype.on = function(A, D) {
                        this.addEventListener(A, D)
                    }, O.prototype.close = function(A) {
                        A === void 0 && (A = {});
                        var D = A.code,
                            ee = A.reason,
                            se = A.wasClean,
                            he = me.websocketsLookup(this.url);
                        me.removeServer(this.url), he.forEach(function(be) {
                            be.readyState = J.CLOSED, be.dispatchEvent(et({
                                type: "close",
                                target: be.target,
                                code: D || Be.CLOSE_NORMAL,
                                reason: ee || "",
                                wasClean: se
                            }))
                        }), this.dispatchEvent(et({
                            type: "close"
                        }), this)
                    }, O.prototype.emit = function(A, D, ee) {
                        var se = this;
                        ee === void 0 && (ee = {});
                        var he = ee.websockets;
                        he || (he = me.websocketsLookup(this.url)), typeof ee != "object" || arguments.length > 3 ? (D = Array.prototype.slice.call(arguments, 1, arguments.length), D = D.map(function(be) {
                            return P(be)
                        })) : D = P(D), he.forEach(function(be) {
                            Array.isArray(D) ? be.dispatchEvent.apply(be, [wt({
                                type: A,
                                data: D,
                                origin: se.url,
                                target: be.target
                            })].concat(D)) : be.dispatchEvent(wt({
                                type: A,
                                data: D,
                                origin: se.url,
                                target: be.target
                            }))
                        })
                    }, O.prototype.clients = function() {
                        return me.websocketsLookup(this.url)
                    }, O.prototype.to = function(A, D, ee) {
                        var se = this;
                        ee === void 0 && (ee = []);
                        var he = this,
                            be = ae(ee.concat(me.websocketsLookup(this.url, A, D)));
                        return {
                            to: function($t, Cr) {
                                return se.to.call(se, $t, Cr, be)
                            },
                            emit: function(Cr, Pe) {
                                he.emit(Cr, Pe, {
                                    websockets: be
                                })
                            }
                        }
                    }, O.prototype.in = function() {
                        for (var A = [], D = arguments.length; D--;) A[D] = arguments[D];
                        return this.to.apply(null, A)
                    }, O.prototype.simulate = function(A) {
                        var D = me.websocketsLookup(this.url);
                        A === "error" && D.forEach(function(ee) {
                            ee.readyState = J.CLOSED, ee.dispatchEvent(vt({
                                type: "error"
                            }))
                        })
                    }, O
                }(de);
            W.of = function(O) {
                return new W(O)
            };
            var q = function(I) {
                function O(A, D) {
                    var ee = this;
                    A === void 0 && (A = "socket.io"), D === void 0 && (D = ""), I.call(this), this.binaryType = "blob";
                    var se = new fe(A);
                    se.pathname || (se.pathname = "/"), this.url = se.toString(), this.readyState = O.CONNECTING, this.protocol = "", this.target = this, typeof D == "string" || typeof D == "object" && D !== null ? this.protocol = D : Array.isArray(D) && D.length > 0 && (this.protocol = D[0]);
                    var he = me.attachWebSocket(this, this.url);
                    Ie(function() {
                        he ? (this.readyState = O.OPEN, he.dispatchEvent(vt({
                            type: "connection"
                        }), he, this), he.dispatchEvent(vt({
                            type: "connect"
                        }), he, this), this.dispatchEvent(vt({
                            type: "connect",
                            target: this
                        }))) : (this.readyState = O.CLOSED, this.dispatchEvent(vt({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(et({
                            type: "close",
                            target: this,
                            code: Be.CLOSE_NORMAL
                        })), He("error", "Socket.io connection to '" + this.url + "' failed"))
                    }, this), this.addEventListener("close", function(be) {
                        ee.dispatchEvent(et({
                            type: "disconnect",
                            target: be.target,
                            code: be.code
                        }))
                    })
                }
                I && (O.__proto__ = I), O.prototype = Object.create(I && I.prototype), O.prototype.constructor = O;
                var x = {
                    broadcast: {}
                };
                return O.prototype.close = function() {
                    if (this.readyState === O.OPEN) {
                        var D = me.serverLookup(this.url);
                        return me.removeWebSocket(this, this.url), this.readyState = O.CLOSED, this.dispatchEvent(et({
                            type: "close",
                            target: this,
                            code: Be.CLOSE_NORMAL
                        })), D && D.dispatchEvent(et({
                            type: "disconnect",
                            target: this,
                            code: Be.CLOSE_NORMAL
                        }), D), this
                    }
                }, O.prototype.disconnect = function() {
                    return this.close()
                }, O.prototype.emit = function(D) {
                    for (var ee = [], se = arguments.length - 1; se-- > 0;) ee[se] = arguments[se + 1];
                    if (this.readyState !== O.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var he = wt({
                            type: D,
                            origin: this.url,
                            data: ee
                        }),
                        be = me.serverLookup(this.url);
                    return be && be.dispatchEvent.apply(be, [he].concat(ee)), this
                }, O.prototype.send = function(D) {
                    return this.emit("message", D), this
                }, x.broadcast.get = function() {
                    if (this.readyState !== O.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var A = this,
                        D = me.serverLookup(this.url);
                    if (!D) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                    return {
                        emit: function(se, he) {
                            return D.emit(se, he, {
                                websockets: me.websocketsLookup(A.url, null, A)
                            }), A
                        },
                        to: function(se) {
                            return D.to(se, A)
                        },
                        in: function(se) {
                            return D.in(se, A)
                        }
                    }
                }, O.prototype.on = function(D, ee) {
                    return this.addEventListener(D, ee), this
                }, O.prototype.off = function(D, ee) {
                    this.removeEventListener(D, ee)
                }, O.prototype.hasListeners = function(D) {
                    var ee = this.listeners[D];
                    return Array.isArray(ee) ? !!ee.length : !1
                }, O.prototype.join = function(D) {
                    me.addMembershipToRoom(this, D)
                }, O.prototype.leave = function(D) {
                    me.removeMembershipFromRoom(this, D)
                }, O.prototype.to = function(D) {
                    return this.broadcast.to(D)
                }, O.prototype.in = function() {
                    return this.to.apply(null, arguments)
                }, O.prototype.dispatchEvent = function(D) {
                    for (var ee = this, se = [], he = arguments.length - 1; he-- > 0;) se[he] = arguments[he + 1];
                    var be = D.type,
                        $t = this.listeners[be];
                    if (!Array.isArray($t)) return !1;
                    $t.forEach(function(Cr) {
                        se.length > 0 ? Cr.apply(ee, se) : Cr.call(ee, D.data ? D.data : D)
                    })
                }, Object.defineProperties(O.prototype, x), O
            }(de);
            q.CONNECTING = 0, q.OPEN = 1, q.CLOSING = 2, q.CLOSED = 3;
            var ve = function(O, x) {
                return new q(O, x)
            };
            ve.connect = function(O, x) {
                return ve(O, x)
            };
            var Ee = W,
                $e = J,
                qe = ve;
            r.Server = Ee, r.WebSocket = $e, r.SocketIO = qe, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(Uy, Uy.exports);
    var _A = {
        exports: {}
    };
    (function(e) {
        (function() {
            function t(l, f) {
                var d = l.x - f.x,
                    p = l.y - f.y;
                return d * d + p * p
            }

            function r(l, f, d) {
                var p = f.x,
                    E = f.y,
                    _ = d.x - p,
                    S = d.y - E;
                if (_ !== 0 || S !== 0) {
                    var N = ((l.x - p) * _ + (l.y - E) * S) / (_ * _ + S * S);
                    N > 1 ? (p = d.x, E = d.y) : N > 0 && (p += _ * N, E += S * N)
                }
                return _ = l.x - p, S = l.y - E, _ * _ + S * S
            }

            function n(l, f) {
                for (var d = l[0], p = [d], E, _ = 1, S = l.length; _ < S; _++) E = l[_], t(E, d) > f && (p.push(E), d = E);
                return d !== E && p.push(E), p
            }

            function s(l, f, d, p, E) {
                for (var _ = p, S, N = f + 1; N < d; N++) {
                    var L = r(l[N], l[f], l[d]);
                    L > _ && (S = N, _ = L)
                }
                _ > p && (S - f > 1 && s(l, f, S, p, E), E.push(l[S]), d - S > 1 && s(l, S, d, p, E))
            }

            function o(l, f) {
                var d = l.length - 1,
                    p = [l[0]];
                return s(l, 0, d, f, p), p.push(l[d]), p
            }

            function c(l, f, d) {
                if (l.length <= 2) return l;
                var p = f !== void 0 ? f * f : 1;
                return l = d ? l : n(l, p), l = o(l, p), l
            }
            e.exports = c, e.exports.default = c
        })()
    })(_A);
    var ej = _A.exports;
    const tj = ki(ej),
        Zs = class Zs {
            constructor(t, r) {
                Oe(this, "activePointers", new Map);
                Oe(this, "element");
                Oe(this, "documentElement");
                Oe(this, "usePointerEvents");
                Oe(this, "isCanceled", !1);
                Oe(this, "cachedElementRect");
                Oe(this, "cachedDocumentRect");
                Oe(this, "cachedTranslations");
                Oe(this, "isMultitouch");
                Oe(this, "isRestrictedToBox");
                Oe(this, "swipeVelocity");
                Oe(this, "swipeDistance");
                Oe(this, "boundOnClick", this.onClick.bind(this));
                Oe(this, "boundOnStart", this.onStart.bind(this));
                Oe(this, "boundOnMove", this.onMove.bind(this));
                Oe(this, "boundOnEnd", this.onEnd.bind(this));
                this.applyPolyfill(), this.element = t, this.documentElement = document.documentElement, this.usePointerEvents = window.PointerEvent !== void 0, this.isRestrictedToBox = r.restrictToBox ?? !1, this.isMultitouch = r.isMultitouch ?? !1, this.swipeDistance = r.swipeDistance ?? 30, this.swipeVelocity = r.swipeVelocity ?? .5, this.bindStaticEvents()
            }
            destroy() {
                this.unbindStaticEvents(), this.unbindStartedEvents()
            }
            cancel() {
                this.isCanceled = !0, this.unbindStartedEvents()
            }
            isPointerEvent(t) {
                return window.PointerEvent === void 0 ? !1 : t instanceof PointerEvent
            }
            isTouchEvent(t) {
                return "ontouchstart" in window ? t instanceof TouchEvent : !1
            }
            isMouseEvent(t) {
                return t instanceof MouseEvent
            }
            getTouchById(t, r) {
                return Array.from(t).find(n => n.identifier === r)
            }
            bindStaticEvents() {
                if (this.element.addEventListener("click", this.boundOnClick), this.usePointerEvents) {
                    this.element.addEventListener("pointerdown", this.boundOnStart);
                    return
                }
                this.element.addEventListener("touchstart", this.boundOnStart), this.element.addEventListener("mousedown", this.boundOnStart)
            }
            unbindStaticEvents() {
                if (this.element.removeEventListener("click", this.boundOnClick), this.usePointerEvents) {
                    this.element.removeEventListener("pointerdown", this.boundOnStart);
                    return
                }
                this.element.removeEventListener("touchstart", this.boundOnStart), this.element.removeEventListener("mousedown", this.boundOnStart)
            }
            bindStartedEvents() {
                if (this.usePointerEvents) {
                    this.element.addEventListener("pointermove", this.boundOnMove), this.element.addEventListener("pointerup", this.boundOnEnd), this.isRestrictedToBox && this.element.addEventListener("pointerleave", this.boundOnEnd), this.element.addEventListener("lostpointercapture", this.boundOnEnd), this.disableChildPointerEvents();
                    return
                }
                this.element.addEventListener("touchmove", this.boundOnMove), this.element.addEventListener("mousemove", this.boundOnMove), this.element.addEventListener("touchend", this.boundOnEnd), this.element.addEventListener("mouseleave", this.boundOnEnd), this.element.addEventListener("mouseup", this.boundOnEnd)
            }
            unbindStartedEvents() {
                if (this.usePointerEvents) {
                    this.element.removeEventListener("pointermove", this.boundOnMove), this.element.removeEventListener("pointerup", this.boundOnEnd), this.isRestrictedToBox && this.element.removeEventListener("pointerleave", this.boundOnEnd), this.element.removeEventListener("lostpointercapture", this.boundOnEnd), this.enableChildPointerEvents();
                    return
                }
                this.element.removeEventListener("touchmove", this.boundOnMove), this.element.removeEventListener("mousemove", this.boundOnMove), this.element.removeEventListener("touchend", this.boundOnEnd), this.element.removeEventListener("mouseleave", this.boundOnEnd), this.element.removeEventListener("mouseup", this.boundOnEnd)
            }
            onClick(t) {
                const r = this.getStartDetail(t, {
                        id: 0,
                        type: "click"
                    }),
                    n = new CustomEvent("pointerbox:click", {
                        detail: r
                    });
                this.element.dispatchEvent(n)
            }
            onStart(t) {
                if (t.preventDefault(), this.isCanceled = !1, !this.isMultitouch && this.activePointers.size) return !1;
                if (this.isPointerEvent(t)) return this.processStartEvent(t, {
                    id: t.pointerId,
                    type: t.pointerType
                }), !1;
                if (this.isTouchEvent(t)) {
                    for (let r = 0; r < t.targetTouches.length; r++) {
                        const n = t.targetTouches.item(r);
                        this.processStartEvent(t, {
                            id: n.identifier,
                            type: "touch"
                        }, n)
                    }
                    return !1
                }
                return this.processStartEvent(t, {
                    id: 0,
                    type: "mouse"
                }), !1
            }
            processStartEvent(t, r, n) {
                if (this.activePointers.get(r.id)) return;
                const s = this.getStartDetail(t, r, n),
                    o = {
                        id: r.id,
                        type: r.type,
                        distanceAccumulator: 0,
                        velocityValues: [0],
                        children: document.elementsFromPoint(s.clientX, s.clientY),
                        previousEventTimestamp: Date.now(),
                        initial: s,
                        previous: s
                    };
                this.activePointers.set(r.id, o);
                const c = new CustomEvent("pointerbox:start", {
                    detail: s
                });
                this.element.dispatchEvent(c);
                const l = new CustomEvent("pointerbox:childdown", {
                    detail: s
                });
                o.children.forEach(f => f.dispatchEvent(l)), this.bindStartedEvents()
            }
            onMove(t) {
                if (t.preventDefault(), !this.isCanceled) {
                    if (this.isPointerEvent(t)) return this.processMoveEvent(t, {
                        id: t.pointerId,
                        type: t.pointerType
                    }), !1;
                    if (this.isTouchEvent(t)) {
                        for (let r = 0; r < t.changedTouches.length; r++) {
                            const n = t.targetTouches.item(r);
                            this.processMoveEvent(t, {
                                id: n.identifier,
                                type: "touch"
                            }, n)
                        }
                        return !1
                    }
                    return this.processMoveEvent(t, {
                        id: 0,
                        type: "mouse"
                    }), !1
                }
            }
            processMoveEvent(t, r, n) {
                const s = this.activePointers.get(r.id);
                if (!s) return !1;
                const o = this.getMoveDetail(t, s, n);
                s.previous = o, s.previousEventTimestamp = Date.now();
                const c = new CustomEvent("pointerbox:move", {
                    detail: o
                });
                return this.element.dispatchEvent(c), !1
            }
            onEnd(t) {
                if (t.preventDefault(), !this.isCanceled) return this.isPointerEvent(t) ? (this.processEndEvent(t, {
                    id: t.pointerId,
                    type: t.pointerType
                }), !1) : this.isTouchEvent(t) ? (this.activePointers.forEach((r, n) => {
                    if (this.getTouchById(t.touches, n)) return;
                    const s = this.getTouchById(r.previous.originalEvent.touches, n);
                    if (!s) throw new Error("[PointerBox] No previous details stored");
                    this.processEndEvent(t, {
                        id: n,
                        type: r.type
                    }, s)
                }), !1) : (this.processEndEvent(t, {
                    id: 0,
                    type: "mouse"
                }), !1)
            }
            processEndEvent(t, r, n) {
                const s = this.activePointers.get(r.id);
                if (!s) return !1;
                const o = this.getMoveDetail(t, s, n),
                    c = new CustomEvent("pointerbox:end", {
                        detail: o
                    });
                this.element.dispatchEvent(c), this.checkForSwipe(c), this.activePointers.delete(s.id), this.activePointers.size || (delete this.cachedElementRect, delete this.cachedDocumentRect, delete this.cachedTranslations, this.unbindStartedEvents());
                const l = new CustomEvent("pointerbox:childup", {
                    detail: o
                });
                return document.elementsFromPoint(o.clientX, o.clientY).forEach(d => {
                    if (d.dispatchEvent(l), !s.children.includes(d)) return;
                    const p = new CustomEvent("pointerbox:childclick", {
                        detail: o
                    });
                    d.dispatchEvent(p)
                }), !1
            }
            checkForSwipe(t) {
                const r = t.detail;
                if (r.distanceFromInitial < this.swipeDistance || r.previous.normalizedVelocity < this.swipeVelocity) return;
                const n = r.degreesFromInitial;
                n > 45 && n < 135 ? r.direction = "up" : n > 135 && n < 225 ? r.direction = "left" : n > 225 && n < 315 ? r.direction = "down" : r.direction = "right";
                const s = new CustomEvent("pointerbox:swipe", {
                        detail: r
                    }),
                    o = new CustomEvent(`pointerbox:swipe${r.direction}`, {
                        detail: r
                    });
                this.element.dispatchEvent(s), this.element.dispatchEvent(o)
            }
            getStartDetail(t, r, n) {
                let s, o, c, l;
                this.cachedElementRect || (this.cachedElementRect = this.element.getBoundingClientRect()), this.cachedDocumentRect || (this.cachedDocumentRect = this.documentElement.getBoundingClientRect());
                const f = this.cachedDocumentRect.top;
                this.cachedTranslations || (this.cachedTranslations = this.getTranslations()), n ? (s = n.pageX, o = n.pageY + f, c = n.clientX, l = n.clientY) : (s = t.pageX, o = t.pageY + f, c = t.clientX, l = t.clientY);
                const d = s - this.cachedElementRect.left,
                    p = o - this.cachedElementRect.top,
                    E = d / this.cachedElementRect.width,
                    _ = p / this.cachedElementRect.height,
                    S = E < 0 || E > 1 || _ < 0 || _ > 1,
                    N = {};
                return this.cachedTranslations.forEach(L => {
                    N[L.id] && console.warn(`[PointerBox] duplicate translation key ${L.id}`), N[L.id] = {
                        x: d * L.x - L.left,
                        y: p * L.y - L.top
                    }
                }), {
                    id: r.id,
                    type: r.type,
                    boxX: d,
                    boxY: p,
                    pageX: s,
                    pageY: o,
                    clientX: c,
                    clientY: l,
                    percentX: E,
                    percentY: _,
                    translations: N,
                    isOutsideBox: S,
                    originalEvent: t,
                    cancel: () => this.cancel()
                }
            }
            getMoveDetail(t, r, n) {
                if (!r.initial) throw new Error("[PointerBox] No initial details stored");
                if (!r.previous) throw new Error("[PointerBox] No previous details stored");
                const s = this.getStartDetail(t, {
                        id: r.id,
                        type: r.type
                    }, n),
                    o = $n.getAngleBetweenPoints({
                        x: r.initial.boxX,
                        y: r.initial.boxY
                    }, {
                        x: s.boxX,
                        y: s.boxY
                    }),
                    c = $n.getDistanceBetweenPoints({
                        x: r.initial.boxX,
                        y: r.initial.boxY
                    }, {
                        x: s.boxX,
                        y: s.boxY
                    }),
                    l = $n.getAngleBetweenPoints({
                        x: r.previous.boxX,
                        y: r.previous.boxY
                    }, {
                        x: s.boxX,
                        y: s.boxY
                    }),
                    f = $n.getDistanceBetweenPoints({
                        x: r.previous.boxX,
                        y: r.previous.boxY
                    }, {
                        x: s.boxX,
                        y: s.boxY
                    });
                r.distanceAccumulator += f;
                let d = 0;
                return r.previousEventTimestamp && (d = $n.getVelocity({
                    x: r.previous.boxX,
                    y: r.previous.boxY
                }, r.previousEventTimestamp, {
                    x: s.boxX,
                    y: s.boxY
                }, Date.now())), d && (r.velocityValues.unshift(d), r.velocityValues.length = Math.min(r.velocityValues.length, 5)), {
                    id: s.id,
                    type: s.type,
                    boxX: s.boxX,
                    boxY: s.boxY,
                    pageX: s.pageX,
                    pageY: s.pageY,
                    clientX: s.clientX,
                    clientY: s.clientY,
                    percentX: s.percentX,
                    percentY: s.percentY,
                    translations: s.translations,
                    isOutsideBox: s.isOutsideBox,
                    degreesFromInitial: o,
                    distanceFromInitial: c,
                    changeXFromInitial: s.boxX - r.initial.boxX,
                    changeYFromInitial: s.boxY - r.initial.boxY,
                    degreesFromPrevious: l,
                    distancefromPrevious: f,
                    changeXFromPrevious: s.boxX - r.previous.boxX,
                    changeYFromPrevious: s.boxY - r.previous.boxY,
                    totalDistance: r.distanceAccumulator,
                    velocity: d,
                    normalizedVelocity: r.velocityValues.reduce((p, E) => p + E) / r.velocityValues.length,
                    originalEvent: s.originalEvent,
                    initial: r.initial,
                    previous: r.previous,
                    cancel: s.cancel
                }
            }
            getTranslations() {
                if (!this.cachedElementRect) throw Error("[PointerBox] Element rect is undefined");
                const t = [],
                    r = this.element.children;
                for (let n = 0; n < r.length; n++) {
                    const s = r[n].attributes.getNamedItem("data-pointerboxtranslateid");
                    if (!s) continue;
                    const o = s.value;
                    if (!o) continue;
                    const c = r[n].attributes.getNamedItem("data-pointerboxtranslatewidth"),
                        l = r[n].attributes.getNamedItem("data-pointerboxtranslateheight"),
                        f = c != null && c.value ? parseInt(c.value, 10) : this.cachedElementRect.width,
                        d = l != null && l.value ? parseInt(l.value, 10) : this.cachedElementRect.height,
                        p = r[n].getBoundingClientRect();
                    t.push({
                        id: o,
                        left: p.left - this.cachedElementRect.left,
                        top: p.top - this.cachedElementRect.top,
                        x: f / p.width,
                        y: d / p.height
                    })
                }
                return t
            }
            disableChildPointerEvents() {
                this.element.style.touchAction = "none";
                for (let t = 0; t < this.element.children.length; t++) {
                    const r = this.element.children[t];
                    r.style.pointerEvents = "none", r.style.touchAction = "none"
                }
            }
            enableChildPointerEvents() {
                this.element.style.touchAction = "";
                for (let t = 0; t < this.element.children.length; t++) {
                    const r = this.element.children[t];
                    r.style.pointerEvents = "", r.style.touchAction = ""
                }
            }
            applyPolyfill() {
                Zs.isPolyfilled || (Zs.isPolyfilled = !0, window && window.document && (window.document.elementsFromPoint || (window.document.elementsFromPoint = Zs.elementsFromPoint)))
            }
            static elementsFromPoint(t, r) {
                const n = [],
                    s = [];
                let o = null;
                do {
                    const c = window.document.elementFromPoint(t, r);
                    o !== c ? (o = c, n.push(o), s.push(o.style.pointerEvents), o.style.pointerEvents = "none") : o = null
                } while (o);
                return n.forEach((c, l) => {
                    c.style.pointerEvents = s[l]
                }), n
            }
        };
    Oe(Zs, "isPolyfilled", !1);
    let Ph = Zs;
    class rj {
        static withTypes(t, r) {
            let n = t;
            return r.forEach(s => {
                s === "html" && (n = this.html(n)), s === "username" && (n = this.username(n)), s === "emoji" && (n = this.emoji(n)), s === "input" && (n = this.input(n))
            }), n
        }
        static html(t) {
            if (String(t).match(/<fart>/g)) {
                const n = new Audio(new URL("main/@teeko-web/assets/4af6cbea.wav", self.location).href);
                n.volume = .1, n.play()
            }
            const r = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
            return String(t).replace(r, "")
        }
        static input(t) {
            return t.replace("…", "...").replace(/[^\u00A1\u0020-\u007E\u00BF-\u017F\u2019]/gi, "")
        }
        static username(t) {
            return t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u017F\u2026!?*$+\-'_ .,]/gi, "").replace(/'/g, "’")
        }
        static emoji(t) {
            return t.replace(/(\u00A9|\u00AE|[\u2000-\u2017]|[\u2020-\u3300]|\uD83C[\uD000-\uDFFF]|\uD83D[\uD000-\uDFFF]|\uD83E[\uD000-\uDFFF])/, "")
        }
    }
    const qj = {
            BACK: "Wstecz",
            CANCEL: "Anuluj",
            CLOSE: "Zamknij",
            CONFIRM: "Potwierdź",
            CREATE: "Utwórz",
            DELETE: "Usuń",
            DONE: "Gotowe",
            EDIT: "Edytuj",
            OK: "OK",
            NEXT: "Dalej",
            NO: "Nie",
            PLAY: "Graj",
            PUBLISH: "Opublikuj",
            REMOVE: "Usuń",
            RESET: "Uruchom ponownie",
            SUBMIT: "Prześlij",
            TRY_AGAIN: "Spróbuj ponownie",
            UNDO: "Cofnij",
            YES: "Tak"
        },
        Kj = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "Prompty ukryte na urządzeniach graczy",
                VISIBILITY_CONTROLLER_ON: "Prompty wyświetlane na urządzeniach graczy",
                VISIBILITY_SCREEN_OFF: "Prompty ukryte na ekranie gry",
                VISIBILITY_SCREEN_ON: "Prompty wyświetlane na ekranie gry"
            }
        },
        Yj = {
            DISCONNECTED: "Twoje połączenie zostało przerwane.",
            DRAWING_NOTHING: "Musisz coś narysować!",
            PLAYER_KICKED: "Moderator wyrzucił cię z gry.",
            ROOM_DESTROYED: "Dzięki za grę!",
            ROOM_DISCONNECTED: "Połączenie przerwane",
            TEXT_NAUGHTY: "Niestety nie możesz tego napisać. Prosimy, miej na uwadze innych graczy.",
            TEXT_NOTHING: "Musisz coś wpisać!",
            TITLE: "Błąd"
        },
        Vj = "ŁADOWANIE",
        zj = {
            JOINED_COUNT: "{count} z {maxPlayers} graczy dołączyło",
            PLAYERS_NEEDED: "Do rozpoczęcia potrzebny jest 1 gracz | Do rozpoczęcia potrzebnych jest {count} graczy",
            WAITING_FOR_VIP: "Oczekiwanie, aż {name} rozpocznie grę",
            WAITING_FOR_GAMEPAD: "Oczekiwanie na rozpoczęcie gry",
            WAITING_FOR_NEW_GAME: "Oczekiwanie na rozpoczęcie nowej gry",
            GAME_STARTING: "Gra się rozpoczyna",
            BUTTON_START: "Naciśnij, aby rozpocząć",
            BUTTON_CANCEL: "Naciśnij, aby anulować"
        },
        Xj = {
            GALLERY_LINK: "Odwiedź galerię",
            NEW_GAME_STARTED: "Rozpoczęła się nowa gra",
            PLAY_AGAIN: "Zagrać ponownie?",
            THANKS_FOR_PLAYING: "Dzięki za grę!",
            BUTTON_GO_TO_GAME: "Do gry",
            BUTTON_GO_TO_JACKBOX: "Wróć do jackbox.tv",
            BUTTON_SAME_PLAYERS: "Ci sami gracze",
            BUTTON_NEW_PLAYERS: "Nowi gracze"
        },
        Jj = {
            AND: "I",
            OR: "ALBO"
        },
        Qj = {
            BUTTON_SKIP: "Pomiń",
            BUTTON_NEXT: "Dalej",
            BUTTON_DONE: "Zaczynamy!"
        },
        Zj = {
            NAME: "PUBLICZNOŚĆ"
        },
        eH = {
            CART: {
                CHECK_OUT: "Do kasy",
                EMPTY: "Twój koszyk jest pusty",
                TITLE: "Koszyk",
                TOTAL: "Suma"
            }
        },
        tH = {
            EPISODE_REPORT: "Zgłoś odcinek",
            EPISODE_UNLOAD: "Wyłącz odcinek",
            EPISODE_VIEW_AUTHOR: "Zobacz autora",
            EPISODES_LOAD: "Wczytaj odcinek po jego ID:",
            EPISODES_MENU: "Menu odcinków",
            EPISODES_SELECT: "Albo wybierz odcinek:",
            EPISODES_WARNING: "Uwaga: treści tworzone przez użytkowników nie są sprawdzane pod kątem familijności",
            INSTRUCTION: {
                CREATE_TITLE: 'Najpierw nazwij swój odcinek, który będzie zawierał wszystkie twoje prompty, a następnie naciśnij "Utwórz".',
                LOAD: "Utworzyć czy wczytać?",
                PUBLISH: "Opublikuj swój odcinek",
                TITLE: "Nazwij swój odcinek",
                TOGGLE_VISIBILITY: "Naciśnij, aby pokazać / ukryć prompty",
                WRITE: "Napisz swoje prompty"
            },
            WARNING: {
                DELETE: "Czy na pewno chcesz usunąć ten odcinek?",
                TOS: "Udostępniając treści, akceptujesz nasze [tos]warunki korzystania[/tos]",
                TOS_AGREE: "Akceptuję i udostępniam"
            },
            BACK_TO_EPISODES: "Wróć do odcinków",
            BACK_TO_MENU: "Wróć do menu",
            CREATE_NEW_EPISODE: "Utwórz własny odcinek",
            PREVIOUS_EPISODES: "Poprzednie odcinki",
            PROMPT_ADD: "Dodaj prompt",
            PROMPT_PLACEHOLDER: "Wpisz prompt",
            PROMPTS_COUNT_HIDDEN: "({count} ukrytych)",
            TITLE_PLACEHOLDER: "Wpisz tytuł"
        },
        rH = {
            BROADCASTER: {
                SUBTEXT: "Pomyślnie połączyłeś swoje konto z rozszerzeniem Twitch Jackbox Audience Kit.",
                WARNING: "USTAWIENIE PUBLICZNOŚCI NIE JEST AKTYWNE DLA TEGO POKOJU"
            },
            RECONNECTED: {
                TEXT: "POŁĄCZONO PONOWNIE",
                SUBTEXT: "Miłej zabawy!"
            },
            RECONNECTING: {
                CONTROLLER: {
                    TEXT: "POŁĄCZENIE PRZERWANE",
                    SUBTEXT: "Próba ponownego połączenia ({attempt} z 5)"
                },
                GAME: {
                    TEXT: "POŁĄCZENIE Z GRĄ PRZERWANE",
                    SUBTEXT: "Poczekaj, próbujemy przywrócić połączenie."
                }
            },
            PAUSED: {
                TEXT: "GRA JEST WSTRZYMANA",
                SUBTEXT: "Wszystko, co prześlesz, nadal zostanie wysłane do gry."
            }
        },
        nH = {
            SHARE: "Udostępnij",
            COPY_TO_CLIPBOARD: "Skopiuj do schowka",
            COPIED: "Skopiowano"
        },
        iH = {
            ACTION: qj,
            ALT: Kj,
            ERROR: Yj,
            LOADING: Vj,
            LOBBY: zj,
            POST_GAME: Xj,
            SEPARATOR: Jj,
            TUTORIAL: Qj,
            AUDIENCE: Zj,
            GALLERY: eH,
            UGC: tH,
            TOAST: rH,
            SHARE: nH
        },
        YH = {
            en: iH
        },
        $5 = {
            LABEL: "GAŁĄŹ",
            REFRESH_REQUIRED: "Wymagane odświeżenie",
            PREFERRED: "PREFEROWANA GAŁĄŹ",
            SELECT: "Wybierz swoją gałąź",
            WAITING: "Oczekiwanie na pokój"
        },
        D5 = {
            ACCEPT_ALL: "Okay!",
            CONSENT_MODAL: {
                ARIA: "Zgoda na pliki cookie"
            },
            DESCRIPTION: "Używamy plików cookie, aby poprawić twoje doświadczenie z gry i analizować ruch na naszej stronie. Więcej informacji znajdziesz w naszej [pp]polityce prywatności[/pp].",
            REJECT_ALL: "Odrzuć"
        },
        x5 = {
            UNSUPPORTED_BROWSER: "Ta gra nie jest obsługiwana przez tę przeglądarkę. Pod '?' i POMOC znajdziesz pełną listę kompatybilnych przeglądarek.",
            ROOM_IS_FULL: "Gra jest pełna",
            ROOM_NOT_FOUND: "Nie znaleziono pokoju.",
            AUDIENCE_IS_FULL: "Publiczność jest pełna",
            UNABLE_TO_CONNECT: "Nie udało się połączyć z serwerem Jackbox Games. Często jest to spowodowane przez blokery reklam lub rozszerzenia prywatności.",
            UNABLE_TO_PRELOAD: "Nie można wstępnie załadować tego pakietu",
            KICKED: "Nie możesz dołączyć, ponieważ moderator cię wyrzucił",
            REQUIRES_TWITCH_LOGIN: "Ta gra wymaga Twitcha",
            ROOM_IS_LOCKED: "Gra jest zablokowana",
            INCORRECT_PASSWORD: "Nieprawidłowe hasło",
            GENERIC: "Błąd podczas dołączania do gry",
            FILTER_NAME: "Filtr rodzinny gry jest włączony. Wybierz inną nazwę."
        },
        M5 = {
            NAME: "IMIĘ",
            NAME_PLACEHOLDER: "WPISZ SWOJE IMIĘ",
            PASSWORD_PLACEHOLDER: "WPISZ PIĘCIOZNAKOWE HASŁO",
            PASSWORD_REQUIRED_TITLE: "Wymagane hasło",
            PASSWORD_REQUIRED_BODY: "Wpisz hasło albo dołącz do publiczności",
            PASSWORD_JOIN_AS_PLAYER: "Dołącz jako gracz",
            PASSWORD_JOIN_AS_AUDIENCE: "Dołącz do publiczności",
            ROOM_CODE: "KOD POKOJU",
            ROOM_CODE_PLACEHOLDER: "WPISZ 4-ZNAKOWY KOD"
        },
        k5 = "Link do strony głównej Jackbox Games",
        U5 = {
            APPEARANCE: "WYGLĄD",
            DARK: "Ciemny",
            HELP: "POMOC",
            TWITCH: "TWITCH",
            LIGHT: "Jasny",
            LOGOUT: "WYLOGUJ",
            MERCH: "MERCH",
            PAST_GAMES: "INNE GRY",
            MAILING_LIST: "LISTA MAILINGOWA",
            MODERATOR: "MODERATOR"
        },
        B5 = {
            CALL_TO_ACTION: {
                SHOP: "ZOBACZ GRĘ I SKLEP",
                VIEW: "ZOBACZ TĘ GRĘ"
            },
            NEW: "NOWE",
            PLAYED_ON: "GRANO DNIA",
            REMOVE: {
                CONFIRM: "Czy na pewno?",
                DESCRIPTION: `To trwale usunie grę z listy
twoich poprzednich gier.`,
                MANAGE: "Usunąć grę?",
                TITLE: "Czy na pewno?"
            }
        },
        F5 = {
            EMPTY: "Brak poprzednich gier",
            MANAGE: "ZARZĄDZAJ",
            TITLE: "TWOJE POPRZEDNIE GRY"
        },
        G5 = {
            TITLE: "AKTUALNE GRY",
            VIEW_ALL: {
                BUTTON: "ZOBACZ WSZYSTKIE",
                LINK: "ZOBACZ WSZYSTKIE POPRZEDNIE GRY"
            }
        },
        W5 = {
            GAME_FULL: "Gra jest pełna",
            GAME_STARTED: "Gra już się rozpoczęła",
            ROOM_NOT_FOUND: "Nie znaleziono pokoju."
        },
        j5 = {
            GAME_FULL: "GRA JEST PEŁNA",
            GAME_STARTED: "GRA JUŻ SIĘ ROZPOCZĘŁA",
            JOIN_AUDIENCE: "DOŁĄCZ DO PUBLICZNOŚCI",
            RECONNECT: "POŁĄCZ PONOWNIE",
            TWITCH_LOGIN: "ZALOGUJ PRZEZ TWITCH"
        },
        H5 = {
            CAMERA: "[b]UWAGA:[/b] Nie wykryto kamery, ale możesz grać także bez zdjęcia. Jeśli masz kamerę, spróbuj użyć innej przeglądarki.",
            STYLE: "[b]UWAGA:[/b] Twoja przeglądarka wydaje się nieco przestarzała. Mogą wystąpić problemy z wyświetlaniem tej gry.",
            TOS: "Klikając {submit}, akceptujesz nasze [tos]warunki korzystania[/tos]"
        },
        q5 = {
            BRANCH: $5,
            COOKIE: D5,
            ERROR: x5,
            FORM: M5,
            HOMEPAGE_LINK: k5,
            MENU: U5,
            PAST_GAME: B5,
            PAST_GAMES: F5,
            RECENT_GAMES: G5,
            STATUS: W5,
            SUBMIT: j5,
            WARNING: H5
        },
        L7 = {
            en: q5
        },
        Fr = (e, t) => {
            const r = e.__vccOpts || e;
            for (const [n, s] of t) r[n] = s;
            return r
        };
    class Xc {
        static toPrecision(t, r) {
            const n = 10 ** r;
            return Math.round((t + Number.EPSILON) * n) / n
        }
    }
    class mA {
        constructor(t, r, n) {
            Oe(this, "DEFAULT_WIDTH", 400);
            Oe(this, "DEFAULT_HEIGHT", 400);
            Oe(this, "canvas");
            Oe(this, "ctx");
            Oe(this, "doodle");
            Oe(this, "brush", "");
            Oe(this, "brushDrawFunctions", {});
            Oe(this, "color", "#000000");
            Oe(this, "layer", 0);
            Oe(this, "points", []);
            Oe(this, "precision", 2);
            Oe(this, "scale", {
                width: 1,
                height: 1
            });
            Oe(this, "tolerance", .5);
            Oe(this, "weight", 4);
            Oe(this, "weightScale", 1);
            Oe(this, "isInteracting", !1);
            var s, o, c;
            n != null && n.brush && (this.brush = n.brush), n != null && n.brushDrawFunctions && (this.brushDrawFunctions = n.brushDrawFunctions), n != null && n.color && (this.color = n.color), n != null && n.layer && (this.layer = n.layer), n != null && n.precision && (this.precision = n.precision), n != null && n.scale && (this.scale = n.scale), n != null && n.tolerance && (this.tolerance = n.tolerance), n != null && n.weight && (this.weight = n.weight), n != null && n.weightScale && (this.weightScale = n.weightScale), t.width = (((s = r.size) == null ? void 0 : s.width) ?? this.DEFAULT_WIDTH) * this.scale.width, t.height = (((o = r.size) == null ? void 0 : o.height) ?? this.DEFAULT_HEIGHT) * this.scale.height, this.canvas = t, this.ctx = t.getContext("2d"), (c = this.ctx) == null || c.scale(this.scale.width, this.scale.height), this.doodle = r, this.doodle.lines.length && this.drawLines()
        }
        addPoint(t) {
            this.points.push(t)
        }
        normalizePoint(t) {
            const r = {
                    x: t.x / this.scale.width,
                    y: t.y / this.scale.height
                },
                n = {
                    x: Math.min(Math.max(.5 * this.weight, r.x), this.canvas.width / this.scale.width - .5 * this.weight),
                    y: Math.min(Math.max(.5 * this.weight, r.y), this.canvas.height / this.scale.height - .5 * this.weight)
                };
            return {
                x: Xc.toPrecision(n.x, this.precision),
                y: Xc.toPrecision(n.y, this.precision)
            }
        }
        drawLines() {
            if (!this.ctx) return;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            const t = this.doodle.maxLayer ?? 0,
                r = Array.from({
                    length: t + 1
                }, () => {
                    const o = document.createElement("canvas");
                    o.width = this.canvas.width, o.height = this.canvas.height;
                    const c = o.getContext("2d");
                    return c == null || c.scale(this.scale.width, this.scale.height), {
                        canvas: o,
                        ctx: c
                    }
                }),
                n = o => {
                    if (o.color !== "transparent") return;
                    const c = o.layer != null ? o.layer : this.layer;
                    for (let l = 0; l <= c; l++) this.drawLine(o, r[l].ctx)
                };
            Object.values(this.doodle.lines).forEach(o => {
                const c = r[o.layer ?? 0].ctx;
                o.color === "transparent" ? n(o) : this.drawLine(o, c)
            });
            const s = {
                brush: this.brush,
                color: this.color,
                index: this.doodle.lines.length,
                layer: this.layer,
                points: this.points,
                weight: this.weight
            };
            this.color === "transparent" ? n(s) : this.drawLine(s, r[s.layer].ctx), r.forEach(({
                canvas: o
            }) => {
                this.ctx.drawImage(o, 0, 0, this.canvas.width / this.scale.width, this.canvas.height / this.scale.height)
            })
        }
        drawLine(t, r) {
            if (!r) return;
            const n = t.brush && this.brushDrawFunctions[t.brush];
            if (n) {
                n(t, r);
                return
            }
            t.color === "transparent" ? r.globalCompositeOperation = "destination-out" : (r.fillStyle = t.color, r.globalCompositeOperation = "source-over", r.strokeStyle = t.color), r.lineCap = "round", r.lineJoin = "round", r.lineWidth = t.weight * this.weightScale, r.beginPath(), t.points.forEach((s, o) => {
                t.points.length === 1 && o === 0 && (r.save(), r.arc(s.x, s.y, t.weight / 2, 0, 2 * Math.PI), r.fill(), r.restore(), r.beginPath()), r.lineTo(s.x, s.y)
            }), r.stroke()
        }
        renderImage(t = "image/png") {
            return this.doodle.lines.length > 0 && this.drawLines(), this.canvas.toDataURL(t)
        }
        onStart(t) {
            this.isInteracting = !0;
            const r = this.normalizePoint(t);
            this.addPoint(r), this.drawLines()
        }
        onMove(t) {
            if (!this.isInteracting) return;
            const r = this.points[this.points.length - 1];
            if (!r) {
                this.addPoint(this.normalizePoint(t));
                return
            }
            const n = .5 * this.weight,
                s = {
                    x: t.x - r.x,
                    y: t.y - r.y
                },
                o = Math.sqrt(s.x ** 2 + s.y ** 2);
            if (o > n) {
                const c = (o - n) / o,
                    l = {
                        x: s.x * c,
                        y: s.y * c
                    },
                    f = {
                        x: r.x + l.x,
                        y: r.y + l.y
                    };
                this.addPoint(this.normalizePoint(f)), this.drawLines()
            }
        }
        onEnd() {
            if (!this.isInteracting) return null;
            const t = {
                brush: this.brush,
                color: this.color,
                index: this.doodle.lines.length,
                layer: this.layer,
                points: tj(this.points, this.tolerance).map(r => ({
                    x: Xc.toPrecision(r.x, this.precision),
                    y: Xc.toPrecision(r.y, this.precision)
                })),
                weight: this.weight
            };
            return this.isInteracting = !1, this.points = [], t
        }
    }
    const P7 = Br({
            props: {
                canvasOptions: Object,
                hideSubmit: Boolean,
                hideUndo: Boolean,
                player: Object
            },
            data() {
                return {
                    canvas: null,
                    isSubmitting: !1,
                    isUndoing: !1
                }
            },
            computed: {
                canSubmit() {
                    return !(this.isSubmitting || this.isUndoing || this.player.doodle.lines.length <= 0)
                },
                pointerBoxWidth() {
                    var t, r, n;
                    let e = 320;
                    return (t = this.player.doodle.size) != null && t.width && (e = this.player.doodle.size.width), e * (((n = (r = this.canvasOptions) == null ? void 0 : r.scale) == null ? void 0 : n.width) ?? 1)
                },
                pointerBoxHeight() {
                    var t, r, n;
                    let e = 320;
                    return (t = this.player.doodle.size) != null && t.height && (e = this.player.doodle.size.height), e * (((n = (r = this.canvasOptions) == null ? void 0 : r.scale) == null ? void 0 : n.height) ?? 1)
                }
            },
            watch: {
                canvasOptions: function(t) {
                    this.canvas && (this.canvas.brush = t.brush ?? "", this.canvas.color = t.color ?? "#000000", this.canvas.layer = t.layer ?? 0, this.canvas.precision = t.precision ?? 2, this.canvas.scale = t.scale ?? {
                        width: 1,
                        height: 1
                    }, this.canvas.tolerance = t.tolerance ?? .5, this.canvas.weight = t.weight ?? 4)
                },
                "player.doodle.key": function() {
                    this.createCanvas()
                },
                "player.doodle.lines": {
                    handler() {
                        this.canvas && this.canvas.drawLines()
                    },
                    deep: !0
                }
            },
            beforeMount() {
                const e = vo();
                if (!(e != null && e.appContext.directives.pointerbox)) throw new Error("Doodle.vue relies on PointerBoxPlugin. Please install it inside your main.ts file.")
            },
            mounted() {
                this.createCanvas()
            },
            methods: {
                createCanvas() {
                    const e = this.$refs.canvas;
                    this.canvas = ys(new mA(e, this.player.doodle, this.canvasOptions))
                },
                onPointerBoxStart(e) {
                    if (!this.canvas) return;
                    const t = {
                        x: e.detail.translations.doodleCanvas.x,
                        y: e.detail.translations.doodleCanvas.y
                    };
                    this.canvas.onStart(t)
                },
                onPointerBoxMove(e) {
                    if (!this.canvas) return;
                    const t = {
                        x: e.detail.translations.doodleCanvas.x,
                        y: e.detail.translations.doodleCanvas.y
                    };
                    this.canvas.onMove(t)
                },
                async onPointerBoxEnd() {
                    if (!this.canvas) return;
                    const e = this.canvas.onEnd();
                    if (e) try {
                        await this.$ecast.strokeDoodle(this.player.doodle.key, e)
                    } catch (t) {
                        this.$handleEcastError(t)
                    }
                },
                async onSubmit() {
                    this.isSubmitting = !0;
                    try {
                        await this.$ecast.lock(this.player.doodle.key)
                    } catch (e) {
                        this.isSubmitting = !1, this.$handleEcastError(e)
                    }
                },
                async onUndo() {
                    if (this.canvas) {
                        this.isUndoing = !0;
                        try {
                            await this.$ecast.undoDoodle(this.player.doodle.key)
                        } catch (e) {
                            this.$handleEcastError(e)
                        } finally {
                            this.isUndoing = !1
                        }
                    }
                }
            }
        }),
        $7 = {
            class: "doodle"
        },
        D7 = {
            ref: "canvas"
        },
        x7 = ["disabled"],
        M7 = ["disabled"];

    function k7(e, t, r, n, s, o) {
        const c = gs("pointerbox-translate"),
            l = gs("pointerbox"),
            f = gs("t");
        return Ge(), Qe("div", $7, [Zr((Ge(), Qe("div", {
            class: "stage",
            "onPointerbox:start": t[0] || (t[0] = (...d) => e.onPointerBoxStart && e.onPointerBoxStart(...d)),
            "onPointerbox:move": t[1] || (t[1] = (...d) => e.onPointerBoxMove && e.onPointerBoxMove(...d)),
            "onPointerbox:end": t[2] || (t[2] = (...d) => e.onPointerBoxEnd && e.onPointerBoxEnd(...d))
        }, [Zr(ye("canvas", D7, null, 512), [
            [c, {
                id: "doodleCanvas",
                width: e.pointerBoxWidth,
                height: e.pointerBoxHeight
            }]
        ])], 32)), [
            [l, {
                restrictToBox: !0
            }]
        ]), e.hideUndo ? Ur("", !0) : Zr((Ge(), Qe("button", {
            key: 0,
            class: "doodle-action undo",
            disabled: !e.canSubmit,
            onClick: t[3] || (t[3] = ti((...d) => e.onUndo && e.onUndo(...d), ["prevent"]))
        }, null, 8, x7)), [
            [f, "ACTION.UNDO"]
        ]), e.hideSubmit ? Ur("", !0) : Zr((Ge(), Qe("button", {
            key: 1,
            class: "doodle-action submit",
            disabled: !e.canSubmit,
            onClick: t[4] || (t[4] = ti((...d) => e.onSubmit && e.onSubmit(...d), ["prevent"]))
        }, null, 8, M7)), [
            [f, "ACTION.SUBMIT"]
        ])])
    }
    const U7 = Fr(P7, [
        ["render", k7]
    ]);
    const B7 = Br({
            props: {
                modelValue: String,
                sanitizers: Array
            },
            emits: {
                "update:modelValue": e => !0
            },
            watch: {
                modelValue(e, t) {
                    if (e !== t) {
                        const r = this.$refs.input;
                        r.value = e
                    }
                }
            },
            methods: {
                async onInput(e) {
                    const t = e.target,
                        r = t.maxLength === -1 ? Number.MAX_SAFE_INTEGER : t.maxLength;
                    if (this.sanitizers && (t.value = rj.withTypes(t.value, [...this.sanitizers])), t.value.length > r) {
                        t.value = t.value.substring(0, r);
                        return
                    }
                    this.$emit("update:modelValue", t.value), await this.$nextTick(), t.value !== this.modelValue && (t.value = this.modelValue)
                }
            }
        }),
        F7 = ["value"];

    function G7(e, t, r, n, s, o) {
        return Ge(), Qe("input", {
            ref: "input",
            value: e.modelValue,
            onInput: t[0] || (t[0] = (...c) => e.onInput && e.onInput(...c))
        }, null, 40, F7)
    }
    const vA = Fr(B7, [
        ["render", G7]
    ]);
    var ss, Jc, Ta = typeof Map == "function" ? new Map : (ss = [], Jc = [], {
            has: function(e) {
                return ss.indexOf(e) > -1
            },
            get: function(e) {
                return Jc[ss.indexOf(e)]
            },
            set: function(e, t) {
                ss.indexOf(e) === -1 && (ss.push(e), Jc.push(t))
            },
            delete: function(e) {
                var t = ss.indexOf(e);
                t > -1 && (ss.splice(t, 1), Jc.splice(t, 1))
            }
        }),
        EA = function(e) {
            return new Event(e, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch {
        EA = function(t) {
            var r = document.createEvent("Event");
            return r.initEvent(t, !0, !1), r
        }
    }

    function W7(e) {
        var t = Ta.get(e);
        t && t.destroy()
    }

    function j7(e) {
        var t = Ta.get(e);
        t && t.update()
    }
    var Qc = null;
    typeof window > "u" || typeof window.getComputedStyle != "function" ? ((Qc = function(e) {
        return e
    }).destroy = function(e) {
        return e
    }, Qc.update = function(e) {
        return e
    }) : ((Qc = function(e, t) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], function(r) {
            return function(n) {
                if (n && n.nodeName && n.nodeName === "TEXTAREA" && !Ta.has(n)) {
                    var s, o = null,
                        c = null,
                        l = null,
                        f = function() {
                            n.clientWidth !== c && _()
                        },
                        d = (function(S) {
                            window.removeEventListener("resize", f, !1), n.removeEventListener("input", _, !1), n.removeEventListener("keyup", _, !1), n.removeEventListener("autosize:destroy", d, !1), n.removeEventListener("autosize:update", _, !1), Object.keys(S).forEach(function(N) {
                                n.style[N] = S[N]
                            }), Ta.delete(n)
                        }).bind(n, {
                            height: n.style.height,
                            resize: n.style.resize,
                            overflowY: n.style.overflowY,
                            overflowX: n.style.overflowX,
                            wordWrap: n.style.wordWrap
                        });
                    n.addEventListener("autosize:destroy", d, !1), "onpropertychange" in n && "oninput" in n && n.addEventListener("keyup", _, !1), window.addEventListener("resize", f, !1), n.addEventListener("input", _, !1), n.addEventListener("autosize:update", _, !1), n.style.overflowX = "hidden", n.style.wordWrap = "break-word", Ta.set(n, {
                        destroy: d,
                        update: _
                    }), (s = window.getComputedStyle(n, null)).resize === "vertical" ? n.style.resize = "none" : s.resize === "both" && (n.style.resize = "horizontal"), o = s.boxSizing === "content-box" ? -(parseFloat(s.paddingTop) + parseFloat(s.paddingBottom)) : parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth), isNaN(o) && (o = 0), _()
                }

                function p(S) {
                    var N = n.style.width;
                    n.style.width = "0px", n.style.width = N, n.style.overflowY = S
                }

                function E() {
                    if (n.scrollHeight !== 0) {
                        var S = function(L) {
                                for (var M = []; L && L.parentNode && L.parentNode instanceof Element;) L.parentNode.scrollTop && M.push({
                                    node: L.parentNode,
                                    scrollTop: L.parentNode.scrollTop
                                }), L = L.parentNode;
                                return M
                            }(n),
                            N = document.documentElement && document.documentElement.scrollTop;
                        n.style.height = "", n.style.height = n.scrollHeight + o + "px", c = n.clientWidth, S.forEach(function(L) {
                            L.node.scrollTop = L.scrollTop
                        }), N && (document.documentElement.scrollTop = N)
                    }
                }

                function _() {
                    E();
                    var S = Math.round(parseFloat(n.style.height)),
                        N = window.getComputedStyle(n, null),
                        L = N.boxSizing === "content-box" ? Math.round(parseFloat(N.height)) : n.offsetHeight;
                    if (L < S ? N.overflowY === "hidden" && (p("scroll"), E(), L = N.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight) : N.overflowY !== "hidden" && (p("hidden"), E(), L = N.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight), l !== L) {
                        l = L;
                        var M = EA("autosize:resized");
                        try {
                            n.dispatchEvent(M)
                        } catch {}
                    }
                }
            }(r)
        }), e
    }).destroy = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], W7), e
    }, Qc.update = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], j7), e
    });
    var Zc = function(e) {
            return e && e.Math == Math && e
        },
        Rr = Zc(typeof globalThis == "object" && globalThis) || Zc(typeof window == "object" && window) || Zc(typeof self == "object" && self) || Zc(typeof Pt == "object" && Pt) || function() {
            return this
        }() || Pt || Function("return this")(),
        Lg = {},
        Gr = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        },
        H7 = Gr,
        ji = !H7(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        }),
        q7 = Gr,
        Pg = !q7(function() {
            var e = (function() {}).bind();
            return typeof e != "function" || e.hasOwnProperty("prototype")
        }),
        K7 = Pg,
        eu = Function.prototype.call,
        Hi = K7 ? eu.bind(eu) : function() {
            return eu.apply(eu, arguments)
        },
        yA = {},
        TA = {}.propertyIsEnumerable,
        bA = Object.getOwnPropertyDescriptor,
        Y7 = bA && !TA.call({
            1: 2
        }, 1);
    yA.f = Y7 ? function(t) {
        var r = bA(this, t);
        return !!r && r.enumerable
    } : TA;
    var SA = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        },
        OA = Pg,
        AA = Function.prototype,
        $h = AA.call,
        V7 = OA && AA.bind.bind($h, $h),
        hr = OA ? V7 : function(e) {
            return function() {
                return $h.apply(e, arguments)
            }
        },
        IA = hr,
        z7 = IA({}.toString),
        X7 = IA("".slice),
        Ha = function(e) {
            return X7(z7(e), 8, -1)
        },
        J7 = hr,
        Q7 = Gr,
        Z7 = Ha,
        Ad = Object,
        eq = J7("".split),
        tq = Q7(function() {
            return !Ad("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return Z7(e) == "String" ? eq(e, "") : Ad(e)
        } : Ad,
        Il = function(e) {
            return e == null
        },
        rq = Il,
        nq = TypeError,
        qa = function(e) {
            if (rq(e)) throw nq("Can't call method on " + e);
            return e
        },
        iq = tq,
        sq = qa,
        Rl = function(e) {
            return iq(sq(e))
        },
        Dh = typeof document == "object" && document.all,
        oq = typeof Dh > "u" && Dh !== void 0,
        RA = {
            all: Dh,
            IS_HTMLDDA: oq
        },
        NA = RA,
        aq = NA.all,
        Nr = NA.IS_HTMLDDA ? function(e) {
            return typeof e == "function" || e === aq
        } : function(e) {
            return typeof e == "function"
        },
        Fy = Nr,
        CA = RA,
        cq = CA.all,
        ko = CA.IS_HTMLDDA ? function(e) {
            return typeof e == "object" ? e !== null : Fy(e) || e === cq
        } : function(e) {
            return typeof e == "object" ? e !== null : Fy(e)
        },
        Id = Rr,
        uq = Nr,
        lq = function(e) {
            return uq(e) ? e : void 0
        },
        $g = function(e, t) {
            return arguments.length < 2 ? lq(Id[e]) : Id[e] && Id[e][t]
        },
        fq = hr,
        wA = fq({}.isPrototypeOf),
        dq = typeof navigator < "u" && String(navigator.userAgent) || "",
        LA = Rr,
        Rd = dq,
        Gy = LA.process,
        Wy = LA.Deno,
        jy = Gy && Gy.versions || Wy && Wy.version,
        Hy = jy && jy.v8,
        dn, Hu;
    Hy && (dn = Hy.split("."), Hu = dn[0] > 0 && dn[0] < 4 ? 1 : +(dn[0] + dn[1]));
    !Hu && Rd && (dn = Rd.match(/Edge\/(\d+)/), (!dn || dn[1] >= 74) && (dn = Rd.match(/Chrome\/(\d+)/), dn && (Hu = +dn[1])));
    var hq = Hu,
        qy = hq,
        pq = Gr,
        gq = Rr,
        _q = gq.String,
        PA = !!Object.getOwnPropertySymbols && !pq(function() {
            var e = Symbol();
            return !_q(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && qy && qy < 41
        }),
        mq = PA,
        $A = mq && !Symbol.sham && typeof Symbol.iterator == "symbol",
        vq = $g,
        Eq = Nr,
        yq = wA,
        Tq = $A,
        bq = Object,
        DA = Tq ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = vq("Symbol");
            return Eq(t) && yq(t.prototype, bq(e))
        },
        Sq = String,
        Oq = function(e) {
            try {
                return Sq(e)
            } catch {
                return "Object"
            }
        },
        Aq = Nr,
        Iq = Oq,
        Rq = TypeError,
        Nq = function(e) {
            if (Aq(e)) return e;
            throw Rq(Iq(e) + " is not a function")
        },
        Cq = Nq,
        wq = Il,
        Dg = function(e, t) {
            var r = e[t];
            return wq(r) ? void 0 : Cq(r)
        },
        Nd = Hi,
        Cd = Nr,
        wd = ko,
        Lq = TypeError,
        Pq = function(e, t) {
            var r, n;
            if (t === "string" && Cd(r = e.toString) && !wd(n = Nd(r, e)) || Cd(r = e.valueOf) && !wd(n = Nd(r, e)) || t !== "string" && Cd(r = e.toString) && !wd(n = Nd(r, e))) return n;
            throw Lq("Can't convert object to primitive value")
        },
        xA = {
            exports: {}
        },
        Ky = Rr,
        $q = Object.defineProperty,
        xg = function(e, t) {
            try {
                $q(Ky, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Ky[e] = t
            }
            return t
        },
        Dq = Rr,
        xq = xg,
        Yy = "__core-js_shared__",
        Mq = Dq[Yy] || xq(Yy, {}),
        Mg = Mq,
        Vy = Mg;
    (xA.exports = function(e, t) {
        return Vy[e] || (Vy[e] = t !== void 0 ? t : {})
    })("versions", []).push({
        version: "3.30.2",
        mode: "global",
        copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var kg = xA.exports,
        kq = qa,
        Uq = Object,
        MA = function(e) {
            return Uq(kq(e))
        },
        Bq = hr,
        Fq = MA,
        Gq = Bq({}.hasOwnProperty),
        qi = Object.hasOwn || function(t, r) {
            return Gq(Fq(t), r)
        },
        Wq = hr,
        jq = 0,
        Hq = Math.random(),
        qq = Wq(1 .toString),
        kA = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + qq(++jq + Hq, 36)
        },
        Kq = Rr,
        Yq = kg,
        zy = qi,
        Vq = kA,
        zq = PA,
        Xq = $A,
        Js = Kq.Symbol,
        Ld = Yq("wks"),
        Jq = Xq ? Js.for || Js : Js && Js.withoutSetter || Vq,
        Is = function(e) {
            return zy(Ld, e) || (Ld[e] = zq && zy(Js, e) ? Js[e] : Jq("Symbol." + e)), Ld[e]
        },
        Qq = Hi,
        Xy = ko,
        Jy = DA,
        Zq = Dg,
        e9 = Pq,
        t9 = Is,
        r9 = TypeError,
        n9 = t9("toPrimitive"),
        i9 = function(e, t) {
            if (!Xy(e) || Jy(e)) return e;
            var r = Zq(e, n9),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = Qq(r, e, t), !Xy(n) || Jy(n)) return n;
                throw r9("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), e9(e, t)
        },
        s9 = i9,
        o9 = DA,
        UA = function(e) {
            var t = s9(e, "string");
            return o9(t) ? t : t + ""
        },
        a9 = Rr,
        Qy = ko,
        xh = a9.document,
        c9 = Qy(xh) && Qy(xh.createElement),
        BA = function(e) {
            return c9 ? xh.createElement(e) : {}
        },
        u9 = ji,
        l9 = Gr,
        f9 = BA,
        FA = !u9 && !l9(function() {
            return Object.defineProperty(f9("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        }),
        d9 = ji,
        h9 = Hi,
        p9 = yA,
        g9 = SA,
        _9 = Rl,
        m9 = UA,
        v9 = qi,
        E9 = FA,
        Zy = Object.getOwnPropertyDescriptor;
    Lg.f = d9 ? Zy : function(t, r) {
        if (t = _9(t), r = m9(r), E9) try {
            return Zy(t, r)
        } catch {}
        if (v9(t, r)) return g9(!h9(p9.f, t, r), t[r])
    };
    var Ka = {},
        y9 = ji,
        T9 = Gr,
        GA = y9 && T9(function() {
            return Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype != 42
        }),
        b9 = ko,
        S9 = String,
        O9 = TypeError,
        Rs = function(e) {
            if (b9(e)) return e;
            throw O9(S9(e) + " is not an object")
        },
        A9 = ji,
        I9 = FA,
        R9 = GA,
        tu = Rs,
        eT = UA,
        N9 = TypeError,
        Pd = Object.defineProperty,
        C9 = Object.getOwnPropertyDescriptor,
        $d = "enumerable",
        Dd = "configurable",
        xd = "writable";
    Ka.f = A9 ? R9 ? function(t, r, n) {
        if (tu(t), r = eT(r), tu(n), typeof t == "function" && r === "prototype" && "value" in n && xd in n && !n[xd]) {
            var s = C9(t, r);
            s && s[xd] && (t[r] = n.value, n = {
                configurable: Dd in n ? n[Dd] : s[Dd],
                enumerable: $d in n ? n[$d] : s[$d],
                writable: !1
            })
        }
        return Pd(t, r, n)
    } : Pd : function(t, r, n) {
        if (tu(t), r = eT(r), tu(n), I9) try {
            return Pd(t, r, n)
        } catch {}
        if ("get" in n || "set" in n) throw N9("Accessors not supported");
        return "value" in n && (t[r] = n.value), t
    };
    var w9 = ji,
        L9 = Ka,
        P9 = SA,
        Ug = w9 ? function(e, t, r) {
            return L9.f(e, t, P9(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        },
        WA = {
            exports: {}
        },
        Mh = ji,
        $9 = qi,
        jA = Function.prototype,
        D9 = Mh && Object.getOwnPropertyDescriptor,
        Bg = $9(jA, "name"),
        x9 = Bg && (function() {}).name === "something",
        M9 = Bg && (!Mh || Mh && D9(jA, "name").configurable),
        k9 = {
            EXISTS: Bg,
            PROPER: x9,
            CONFIGURABLE: M9
        },
        U9 = hr,
        B9 = Nr,
        kh = Mg,
        F9 = U9(Function.toString);
    B9(kh.inspectSource) || (kh.inspectSource = function(e) {
        return F9(e)
    });
    var G9 = kh.inspectSource,
        W9 = Rr,
        j9 = Nr,
        tT = W9.WeakMap,
        H9 = j9(tT) && /native code/.test(String(tT)),
        q9 = kg,
        K9 = kA,
        rT = q9("keys"),
        HA = function(e) {
            return rT[e] || (rT[e] = K9(e))
        },
        Fg = {},
        Y9 = H9,
        qA = Rr,
        V9 = ko,
        z9 = Ug,
        Md = qi,
        kd = Mg,
        X9 = HA,
        J9 = Fg,
        nT = "Object already initialized",
        Uh = qA.TypeError,
        Q9 = qA.WeakMap,
        qu, Pa, Ku, Z9 = function(e) {
            return Ku(e) ? Pa(e) : qu(e, {})
        },
        eK = function(e) {
            return function(t) {
                var r;
                if (!V9(t) || (r = Pa(t)).type !== e) throw Uh("Incompatible receiver, " + e + " required");
                return r
            }
        };
    if (Y9 || kd.state) {
        var Rn = kd.state || (kd.state = new Q9);
        Rn.get = Rn.get, Rn.has = Rn.has, Rn.set = Rn.set, qu = function(e, t) {
            if (Rn.has(e)) throw Uh(nT);
            return t.facade = e, Rn.set(e, t), t
        }, Pa = function(e) {
            return Rn.get(e) || {}
        }, Ku = function(e) {
            return Rn.has(e)
        }
    } else {
        var Hs = X9("state");
        J9[Hs] = !0, qu = function(e, t) {
            if (Md(e, Hs)) throw Uh(nT);
            return t.facade = e, z9(e, Hs, t), t
        }, Pa = function(e) {
            return Md(e, Hs) ? e[Hs] : {}
        }, Ku = function(e) {
            return Md(e, Hs)
        }
    }
    var KA = {
            set: qu,
            get: Pa,
            has: Ku,
            enforce: Z9,
            getterFor: eK
        },
        Gg = hr,
        tK = Gr,
        rK = Nr,
        ru = qi,
        Bh = ji,
        nK = k9.CONFIGURABLE,
        iK = G9,
        YA = KA,
        sK = YA.enforce,
        oK = YA.get,
        iT = String,
        vu = Object.defineProperty,
        aK = Gg("".slice),
        cK = Gg("".replace),
        uK = Gg([].join),
        lK = Bh && !tK(function() {
            return vu(function() {}, "length", {
                value: 8
            }).length !== 8
        }),
        fK = String(String).split("String"),
        dK = WA.exports = function(e, t, r) {
            aK(iT(t), 0, 7) === "Symbol(" && (t = "[" + cK(iT(t), /^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!ru(e, "name") || nK && e.name !== t) && (Bh ? vu(e, "name", {
                value: t,
                configurable: !0
            }) : e.name = t), lK && r && ru(r, "arity") && e.length !== r.arity && vu(e, "length", {
                value: r.arity
            });
            try {
                r && ru(r, "constructor") && r.constructor ? Bh && vu(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch {}
            var n = sK(e);
            return ru(n, "source") || (n.source = uK(fK, typeof t == "string" ? t : "")), e
        };
    Function.prototype.toString = dK(function() {
        return rK(this) && oK(this).source || iK(this)
    }, "toString");
    var hK = WA.exports,
        pK = Nr,
        gK = Ka,
        _K = hK,
        mK = xg,
        VA = function(e, t, r, n) {
            n || (n = {});
            var s = n.enumerable,
                o = n.name !== void 0 ? n.name : t;
            if (pK(r) && _K(r, o, n), n.global) s ? e[t] = r : mK(t, r);
            else {
                try {
                    n.unsafe ? e[t] && (s = !0) : delete e[t]
                } catch {}
                s ? e[t] = r : gK.f(e, t, {
                    value: r,
                    enumerable: !1,
                    configurable: !n.nonConfigurable,
                    writable: !n.nonWritable
                })
            }
            return e
        },
        zA = {},
        vK = Math.ceil,
        EK = Math.floor,
        yK = Math.trunc || function(t) {
            var r = +t;
            return (r > 0 ? EK : vK)(r)
        },
        TK = yK,
        Nl = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : TK(t)
        },
        bK = Nl,
        SK = Math.max,
        OK = Math.min,
        AK = function(e, t) {
            var r = bK(e);
            return r < 0 ? SK(r + t, 0) : OK(r, t)
        },
        IK = Nl,
        RK = Math.min,
        XA = function(e) {
            return e > 0 ? RK(IK(e), 9007199254740991) : 0
        },
        NK = XA,
        CK = function(e) {
            return NK(e.length)
        },
        wK = Rl,
        LK = AK,
        PK = CK,
        sT = function(e) {
            return function(t, r, n) {
                var s = wK(t),
                    o = PK(s),
                    c = LK(n, o),
                    l;
                if (e && r != r) {
                    for (; o > c;)
                        if (l = s[c++], l != l) return !0
                } else
                    for (; o > c; c++)
                        if ((e || c in s) && s[c] === r) return e || c || 0;
                return !e && -1
            }
        },
        $K = {
            includes: sT(!0),
            indexOf: sT(!1)
        },
        DK = hr,
        Ud = qi,
        xK = Rl,
        MK = $K.indexOf,
        kK = Fg,
        oT = DK([].push),
        JA = function(e, t) {
            var r = xK(e),
                n = 0,
                s = [],
                o;
            for (o in r) !Ud(kK, o) && Ud(r, o) && oT(s, o);
            for (; t.length > n;) Ud(r, o = t[n++]) && (~MK(s, o) || oT(s, o));
            return s
        },
        Wg = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        UK = JA,
        BK = Wg,
        FK = BK.concat("length", "prototype");
    zA.f = Object.getOwnPropertyNames || function(t) {
        return UK(t, FK)
    };
    var QA = {};
    QA.f = Object.getOwnPropertySymbols;
    var GK = $g,
        WK = hr,
        jK = zA,
        HK = QA,
        qK = Rs,
        KK = WK([].concat),
        YK = GK("Reflect", "ownKeys") || function(t) {
            var r = jK.f(qK(t)),
                n = HK.f;
            return n ? KK(r, n(t)) : r
        },
        aT = qi,
        VK = YK,
        zK = Lg,
        XK = Ka,
        JK = function(e, t, r) {
            for (var n = VK(t), s = XK.f, o = zK.f, c = 0; c < n.length; c++) {
                var l = n[c];
                !aT(e, l) && !(r && aT(r, l)) && s(e, l, o(t, l))
            }
        },
        QK = Gr,
        ZK = Nr,
        eY = /#|\.prototype\./,
        Ya = function(e, t) {
            var r = rY[tY(e)];
            return r == iY ? !0 : r == nY ? !1 : ZK(t) ? QK(t) : !!t
        },
        tY = Ya.normalize = function(e) {
            return String(e).replace(eY, ".").toLowerCase()
        },
        rY = Ya.data = {},
        nY = Ya.NATIVE = "N",
        iY = Ya.POLYFILL = "P",
        sY = Ya,
        Bd = Rr,
        oY = Lg.f,
        aY = Ug,
        cY = VA,
        uY = xg,
        lY = JK,
        fY = sY,
        ZA = function(e, t) {
            var r = e.target,
                n = e.global,
                s = e.stat,
                o, c, l, f, d, p;
            if (n ? c = Bd : s ? c = Bd[r] || uY(r, {}) : c = (Bd[r] || {}).prototype, c)
                for (l in t) {
                    if (d = t[l], e.dontCallGetSet ? (p = oY(c, l), f = p && p.value) : f = c[l], o = fY(n ? l : r + (s ? "." : "#") + l, e.forced), !o && f !== void 0) {
                        if (typeof d == typeof f) continue;
                        lY(d, f)
                    }(e.sham || f && f.sham) && aY(d, "sham", !0), cY(c, l, d, e)
                }
        },
        dY = ko,
        hY = Ha,
        pY = Is,
        gY = pY("match"),
        _Y = function(e) {
            var t;
            return dY(e) && ((t = e[gY]) !== void 0 ? !!t : hY(e) == "RegExp")
        },
        mY = Is,
        vY = mY("toStringTag"),
        eI = {};
    eI[vY] = "z";
    var EY = String(eI) === "[object z]",
        yY = EY,
        TY = Nr,
        Eu = Ha,
        bY = Is,
        SY = bY("toStringTag"),
        OY = Object,
        AY = Eu(function() {
            return arguments
        }()) == "Arguments",
        IY = function(e, t) {
            try {
                return e[t]
            } catch {}
        },
        RY = yY ? Eu : function(e) {
            var t, r, n;
            return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(r = IY(t = OY(e), SY)) == "string" ? r : AY ? Eu(t) : (n = Eu(t)) == "Object" && TY(t.callee) ? "Arguments" : n
        },
        NY = RY,
        CY = String,
        Cl = function(e) {
            if (NY(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
            return CY(e)
        },
        wY = Rs,
        tI = function() {
            var e = wY(this),
                t = "";
            return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
        },
        LY = Hi,
        PY = qi,
        $Y = wA,
        DY = tI,
        cT = RegExp.prototype,
        xY = function(e) {
            var t = e.flags;
            return t === void 0 && !("flags" in cT) && !PY(e, "flags") && $Y(cT, e) ? LY(DY, e) : t
        },
        jg = hr,
        MY = MA,
        kY = Math.floor,
        Fd = jg("".charAt),
        UY = jg("".replace),
        Gd = jg("".slice),
        BY = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        FY = /\$([$&'`]|\d{1,2})/g,
        rI = function(e, t, r, n, s, o) {
            var c = r + e.length,
                l = n.length,
                f = FY;
            return s !== void 0 && (s = MY(s), f = BY), UY(o, f, function(d, p) {
                var E;
                switch (Fd(p, 0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return Gd(t, 0, r);
                    case "'":
                        return Gd(t, c);
                    case "<":
                        E = s[Gd(p, 1, -1)];
                        break;
                    default:
                        var _ = +p;
                        if (_ === 0) return d;
                        if (_ > l) {
                            var S = kY(_ / 10);
                            return S === 0 ? d : S <= l ? n[S - 1] === void 0 ? Fd(p, 1) : n[S - 1] + Fd(p, 1) : d
                        }
                        E = n[_ - 1]
                }
                return E === void 0 ? "" : E
            })
        },
        GY = ZA,
        WY = Hi,
        Hg = hr,
        uT = qa,
        jY = Nr,
        HY = Il,
        qY = _Y,
        aa = Cl,
        KY = Dg,
        YY = xY,
        VY = rI,
        zY = Is,
        XY = zY("replace"),
        JY = TypeError,
        nI = Hg("".indexOf);
    Hg("".replace);
    var lT = Hg("".slice),
        QY = Math.max,
        fT = function(e, t, r) {
            return r > e.length ? -1 : t === "" ? r : nI(e, t, r)
        };
    GY({
        target: "String",
        proto: !0
    }, {
        replaceAll: function(t, r) {
            var n = uT(this),
                s, o, c, l, f, d, p, E, _, S = 0,
                N = 0,
                L = "";
            if (!HY(t)) {
                if (s = qY(t), s && (o = aa(uT(YY(t))), !~nI(o, "g"))) throw JY("`.replaceAll` does not allow non-global regexes");
                if (c = KY(t, XY), c) return WY(c, t, n, r)
            }
            for (l = aa(n), f = aa(t), d = jY(r), d || (r = aa(r)), p = f.length, E = QY(1, p), S = fT(l, f, 0); S !== -1;) _ = d ? aa(r(f, S, l)) : VY(f, l, S, [], void 0, r), L += lT(l, N, S) + _, N = S + p, S = fT(l, f, S + E);
            return N < l.length && (L += lT(l, N)), L
        }
    });
    var qg = Gr,
        ZY = Rr,
        Kg = ZY.RegExp,
        Yg = qg(function() {
            var e = Kg("a", "y");
            return e.lastIndex = 2, e.exec("abcd") != null
        }),
        eV = Yg || qg(function() {
            return !Kg("a", "y").sticky
        }),
        tV = Yg || qg(function() {
            var e = Kg("^r", "gy");
            return e.lastIndex = 2, e.exec("str") != null
        }),
        rV = {
            BROKEN_CARET: tV,
            MISSED_STICKY: eV,
            UNSUPPORTED_Y: Yg
        },
        iI = {},
        nV = JA,
        iV = Wg,
        sV = Object.keys || function(t) {
            return nV(t, iV)
        },
        oV = ji,
        aV = GA,
        cV = Ka,
        uV = Rs,
        lV = Rl,
        fV = sV;
    iI.f = oV && !aV ? Object.defineProperties : function(t, r) {
        uV(t);
        for (var n = lV(r), s = fV(r), o = s.length, c = 0, l; o > c;) cV.f(t, l = s[c++], n[l]);
        return t
    };
    var dV = $g,
        hV = dV("document", "documentElement"),
        pV = Rs,
        gV = iI,
        dT = Wg,
        _V = Fg,
        mV = hV,
        vV = BA,
        EV = HA,
        hT = ">",
        pT = "<",
        Fh = "prototype",
        Gh = "script",
        sI = EV("IE_PROTO"),
        Wd = function() {},
        oI = function(e) {
            return pT + Gh + hT + e + pT + "/" + Gh + hT
        },
        gT = function(e) {
            e.write(oI("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        },
        yV = function() {
            var e = vV("iframe"),
                t = "java" + Gh + ":",
                r;
            return e.style.display = "none", mV.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(oI("document.F=Object")), r.close(), r.F
        },
        nu, yu = function() {
            try {
                nu = new ActiveXObject("htmlfile")
            } catch {}
            yu = typeof document < "u" ? document.domain && nu ? gT(nu) : yV() : gT(nu);
            for (var e = dT.length; e--;) delete yu[Fh][dT[e]];
            return yu()
        };
    _V[sI] = !0;
    var TV = Object.create || function(t, r) {
            var n;
            return t !== null ? (Wd[Fh] = pV(t), n = new Wd, Wd[Fh] = null, n[sI] = t) : n = yu(), r === void 0 ? n : gV.f(n, r)
        },
        bV = Gr,
        SV = Rr,
        OV = SV.RegExp,
        AV = bV(function() {
            var e = OV(".", "s");
            return !(e.dotAll && e.exec(`
`) && e.flags === "s")
        }),
        IV = Gr,
        RV = Rr,
        NV = RV.RegExp,
        CV = IV(function() {
            var e = NV("(?<a>b)", "g");
            return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc"
        }),
        Qs = Hi,
        wl = hr,
        wV = Cl,
        LV = tI,
        PV = rV,
        $V = kg,
        DV = TV,
        xV = KA.get,
        MV = AV,
        kV = CV,
        UV = $V("native-string-replace", String.prototype.replace),
        Yu = RegExp.prototype.exec,
        Wh = Yu,
        BV = wl("".charAt),
        FV = wl("".indexOf),
        GV = wl("".replace),
        jd = wl("".slice),
        jh = function() {
            var e = /a/,
                t = /b*/g;
            return Qs(Yu, e, "a"), Qs(Yu, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0
        }(),
        aI = PV.BROKEN_CARET,
        Hh = /()??/.exec("")[1] !== void 0,
        WV = jh || Hh || aI || MV || kV;
    WV && (Wh = function(t) {
        var r = this,
            n = xV(r),
            s = wV(t),
            o = n.raw,
            c, l, f, d, p, E, _;
        if (o) return o.lastIndex = r.lastIndex, c = Qs(Wh, o, s), r.lastIndex = o.lastIndex, c;
        var S = n.groups,
            N = aI && r.sticky,
            L = Qs(LV, r),
            M = r.source,
            R = 0,
            G = s;
        if (N && (L = GV(L, "y", ""), FV(L, "g") === -1 && (L += "g"), G = jd(s, r.lastIndex), r.lastIndex > 0 && (!r.multiline || r.multiline && BV(s, r.lastIndex - 1) !== `
`) && (M = "(?: " + M + ")", G = " " + G, R++), l = new RegExp("^(?:" + M + ")", L)), Hh && (l = new RegExp("^" + M + "$(?!\\s)", L)), jh && (f = r.lastIndex), d = Qs(Yu, N ? l : r, G), N ? d ? (d.input = jd(d.input, R), d[0] = jd(d[0], R), d.index = r.lastIndex, r.lastIndex += d[0].length) : r.lastIndex = 0 : jh && d && (r.lastIndex = r.global ? d.index + d[0].length : f), Hh && d && d.length > 1 && Qs(UV, d[0], l, function() {
                for (p = 1; p < arguments.length - 2; p++) arguments[p] === void 0 && (d[p] = void 0)
            }), d && S)
            for (d.groups = E = DV(null), p = 0; p < S.length; p++) _ = S[p], E[_[0]] = d[_[1]];
        return d
    });
    var Vg = Wh,
        jV = ZA,
        _T = Vg;
    jV({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== _T
    }, {
        exec: _T
    });
    var HV = Pg,
        cI = Function.prototype,
        mT = cI.apply,
        vT = cI.call,
        qV = typeof Reflect == "object" && Reflect.apply || (HV ? vT.bind(mT) : function() {
            return vT.apply(mT, arguments)
        }),
        KV = Ha,
        YV = hr,
        VV = function(e) {
            if (KV(e) === "Function") return YV(e)
        },
        ET = VV,
        yT = VA,
        zV = Vg,
        TT = Gr,
        uI = Is,
        XV = Ug,
        JV = uI("species"),
        Hd = RegExp.prototype,
        QV = function(e, t, r, n) {
            var s = uI(e),
                o = !TT(function() {
                    var d = {};
                    return d[s] = function() {
                        return 7
                    }, "" [e](d) != 7
                }),
                c = o && !TT(function() {
                    var d = !1,
                        p = /a/;
                    return e === "split" && (p = {}, p.constructor = {}, p.constructor[JV] = function() {
                        return p
                    }, p.flags = "", p[s] = /./ [s]), p.exec = function() {
                        return d = !0, null
                    }, p[s](""), !d
                });
            if (!o || !c || r) {
                var l = ET(/./ [s]),
                    f = t(s, "" [e], function(d, p, E, _, S) {
                        var N = ET(d),
                            L = p.exec;
                        return L === zV || L === Hd.exec ? o && !S ? {
                            done: !0,
                            value: l(p, E, _)
                        } : {
                            done: !0,
                            value: N(E, p, _)
                        } : {
                            done: !1
                        }
                    });
                yT(String.prototype, e, f[0]), yT(Hd, s, f[1])
            }
            n && XV(Hd[s], "sham", !0)
        },
        zg = hr,
        ZV = Nl,
        ez = Cl,
        tz = qa,
        rz = zg("".charAt),
        bT = zg("".charCodeAt),
        nz = zg("".slice),
        ST = function(e) {
            return function(t, r) {
                var n = ez(tz(t)),
                    s = ZV(r),
                    o = n.length,
                    c, l;
                return s < 0 || s >= o ? e ? "" : void 0 : (c = bT(n, s), c < 55296 || c > 56319 || s + 1 === o || (l = bT(n, s + 1)) < 56320 || l > 57343 ? e ? rz(n, s) : c : e ? nz(n, s, s + 2) : (c - 55296 << 10) + (l - 56320) + 65536)
            }
        },
        iz = {
            codeAt: ST(!1),
            charAt: ST(!0)
        },
        sz = iz.charAt,
        oz = function(e, t, r) {
            return t + (r ? sz(e, t).length : 1)
        },
        OT = Hi,
        az = Rs,
        cz = Nr,
        uz = Ha,
        lz = Vg,
        fz = TypeError,
        dz = function(e, t) {
            var r = e.exec;
            if (cz(r)) {
                var n = OT(r, e, t);
                return n !== null && az(n), n
            }
            if (uz(e) === "RegExp") return OT(lz, e, t);
            throw fz("RegExp#exec called on incompatible receiver")
        },
        hz = qV,
        AT = Hi,
        Ll = hr,
        pz = QV,
        gz = Gr,
        _z = Rs,
        mz = Nr,
        vz = Il,
        Ez = Nl,
        yz = XA,
        qs = Cl,
        Tz = qa,
        bz = oz,
        Sz = Dg,
        Oz = rI,
        Az = dz,
        Iz = Is,
        qh = Iz("replace"),
        Rz = Math.max,
        Nz = Math.min,
        Cz = Ll([].concat),
        qd = Ll([].push),
        IT = Ll("".indexOf),
        RT = Ll("".slice),
        wz = function(e) {
            return e === void 0 ? e : String(e)
        },
        Lz = function() {
            return "a".replace(/./, "$0") === "$0"
        }(),
        NT = function() {
            return /./ [qh] ? /./ [qh]("a", "$0") === "" : !1
        }(),
        Pz = !gz(function() {
            var e = /./;
            return e.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "".replace(e, "$<a>") !== "7"
        });
    pz("replace", function(e, t, r) {
        var n = NT ? "$" : "$0";
        return [function(o, c) {
            var l = Tz(this),
                f = vz(o) ? void 0 : Sz(o, qh);
            return f ? AT(f, o, l, c) : AT(t, qs(l), o, c)
        }, function(s, o) {
            var c = _z(this),
                l = qs(s);
            if (typeof o == "string" && IT(o, n) === -1 && IT(o, "$<") === -1) {
                var f = r(t, c, l, o);
                if (f.done) return f.value
            }
            var d = mz(o);
            d || (o = qs(o));
            var p = c.global;
            if (p) {
                var E = c.unicode;
                c.lastIndex = 0
            }
            for (var _ = [];;) {
                var S = Az(c, l);
                if (S === null || (qd(_, S), !p)) break;
                var N = qs(S[0]);
                N === "" && (c.lastIndex = bz(l, yz(c.lastIndex), E))
            }
            for (var L = "", M = 0, R = 0; R < _.length; R++) {
                S = _[R];
                for (var G = qs(S[0]), K = Rz(Nz(Ez(S.index), l.length), 0), U = [], j = 1; j < S.length; j++) qd(U, wz(S[j]));
                var X = S.groups;
                if (d) {
                    var ie = Cz([G], U, K, l);
                    X !== void 0 && qd(ie, X);
                    var ue = qs(hz(o, void 0, ie))
                } else ue = Oz(G, l, K, U, X, o);
                K >= M && (L += RT(l, M, K) + ue, M = K + G.length)
            }
            return L + RT(l, M)
        }]
    }, !Pz || !Lz || NT);
    var $z = Rr,
        Dz = hr,
        xz = function(e, t) {
            return Dz($z[e].prototype[t])
        },
        Mz = xz;
    Mz("String", "replaceAll");
    const kz = Br({
            props: {
                artifact: Object
            },
            computed: {
                link() {
                    if (!this.artifact) return;
                    const e = this.artifact.rootId.includes("test") ? "http" : "https",
                        t = this.artifact.rootId.includes("test") ? "games-test.jackbox.tv" : "games.jackbox.tv";
                    return `${e}://${t}/artifact/${this.artifact.categoryId}/${this.artifact.artifactId}/`
                },
                hasProvidedContent() {
                    return this.$slots.default !== void 0
                }
            },
            mounted() {
                Sh.galleryImpression(this.artifact.categoryId, "post_game")
            },
            methods: {
                onLinkClick() {
                    Sh.galleryClick(this.artifact.categoryId, "post_game"), oo.setAsViewed(0)
                }
            }
        }),
        Uz = ["href", "aria-label"];

    function Bz(e, t, r, n, s, o) {
        return e.link ? (Ge(), Qe("a", {
            key: 0,
            class: en([{
                "no-content": !e.hasProvidedContent
            }, "artifact-link"]),
            target: "_blank",
            href: e.link,
            "aria-label": e.$t("POST_GAME.GALLERY_LINK"),
            onClick: t[0] || (t[0] = (...c) => e.onLinkClick && e.onLinkClick(...c))
        }, [iD(e.$slots, "default")], 10, Uz)) : Ur("", !0)
    }
    const Fz = Fr(kz, [
        ["render", Bz]
    ]);
    var Yn = {},
        Pl = {},
        lI = {},
        $l = {},
        Xg = {};
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Token = void 0;
        var t = function() {
            function r(n, s, o, c) {
                this.type = n, this.content = s, this.attributes = o, this.text = c
            }
            return r.prototype.toString = function() {
                return this.content + " (" + this.type + ")"
            }, r.prototype.equals = function(n) {
                return this.type === n.type && this.content === n.content
            }, r.prototype.convertToTextToken = function() {
                var n;
                this.type === r.Type.startTag ? (this.content = (n = this.text) !== null && n !== void 0 ? n : "", this.type = r.Type.text) : this.type === r.Type.endTag && (this.content = "[/" + this.content + "]", this.type = r.Type.text)
            }, r
        }();
        e.Token = t,
            function(r) {
                (function(n) {
                    n[n.text = 0] = "text", n[n.startTag = 1] = "startTag", n[n.endTag = 2] = "endTag"
                })(r.Type || (r.Type = {}))
            }(t = e.Token || (e.Token = {})), e.Token = t
    })(Xg);
    Object.defineProperty($l, "__esModule", {
        value: !0
    });
    $l.Tokenizer = void 0;
    var mi = Xg,
        Gz = function() {
            function e(t) {
                this.tags = t
            }
            return e.prototype.tokenizeString = function(t) {
                var r = this,
                    n = this.getTokens(t),
                    s = [],
                    o = !1,
                    c = "",
                    l = "";
                return n.forEach(function(f) {
                    var d = r.tags[f.content],
                        p = !0;
                    !d && !o ? f.convertToTextToken() : o ? f.type === mi.Token.Type.endTag && f.content === c ? (o = !1, s.push(e.createTextToken(l))) : (f.convertToTextToken(), l += f.content, p = !1) : d.noNesting && f.type === mi.Token.Type.startTag && (o = !0, c = f.content, l = ""), p && s.push(f)
                }), s
            }, e.prototype.getTokens = function(t) {
                for (var r = '\\[(/\\w*)\\]|\\[(\\w*)+(=(["])' + e.valueChars + "*\\4)?( (" + e.nameChars + '+)?=(["])(' + e.valueChars + "+)\\7)*\\]", n = new RegExp(r, "g"), s = [], o = n.exec(t), c = 0; o;) {
                    var l = o.index - c;
                    l > 0 && s.push(e.createTextToken(t.substr(c, l))), s.push(e.createTagToken(o)), c = n.lastIndex, o = n.exec(t)
                }
                var f = t.length - c;
                return f > 0 && s.push(e.createTextToken(t.substr(c, f))), s
            }, e.createTextToken = function(t) {
                return new mi.Token(mi.Token.Type.text, t)
            }, e.createTagToken = function(t) {
                if (!t[1]) {
                    for (var r = t[2], n = {}, s = new RegExp("(" + e.nameChars + '+)?=(["])(' + e.valueChars + "+)\\2", "g"), o = t[0].substr(1 + r.length, t[0].length - 2 - r.length), c = s.exec(o); c;) c[1] ? n[c[1]] = c[3] : n[r] = c[3], c = s.exec(o);
                    return new mi.Token(mi.Token.Type.startTag, r, n, t[0])
                }
                return new mi.Token(mi.Token.Type.endTag, t[1].substr(1, t[1].length - 1))
            }, e.nameChars = "[a-zA-Z0-9\\.\\-_:;/]", e.valueChars = "[a-zA-Z0-9\\.\\-_:;#/\\s]", e
        }();
    $l.Tokenizer = Gz;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ParseTree = void 0;
        var t = $l,
            r = Xg,
            n = function() {
                function s(o) {
                    this.subTrees = [], this.type = o.type, this.content = o.content, o.attributes && (this.attributes = o.attributes), o.subTrees && (this.subTrees = o.subTrees)
                }
                return Object.defineProperty(s.prototype, "isValid", {
                    get: function() {
                        return this.subTrees.length ? this.subTrees.every(function(o) {
                            return o.isValid
                        }) : !0
                    },
                    enumerable: !1,
                    configurable: !0
                }), s.prototype.toString = function() {
                    return this.type + " - " + this.content
                }, s.buildTree = function(o, c) {
                    var l = new t.Tokenizer(c),
                        f = l.tokenizeString(o),
                        d = new s({
                            type: s.Type.root,
                            content: o
                        });
                    return this.buildTreeFromTokens(d, f.reverse())
                }, s.buildTreeFromTokens = function(o, c, l) {
                    if (l === void 0 && (l = ""), !o) return null;
                    if (!c.length) return o;
                    var f = c.pop();
                    if (!f) return null;
                    if (f.type === r.Token.Type.text) {
                        var d = new s({
                            type: s.Type.text,
                            content: f.content
                        });
                        o.subTrees.push(d)
                    }
                    if (f.type === r.Token.Type.startTag) {
                        var p = f.content,
                            d = new s({
                                type: s.Type.tag,
                                content: p,
                                attributes: f.attributes
                            }),
                            E = s.buildTreeFromTokens(d, c, p);
                        if (!E) return null;
                        o.subTrees.push(E)
                    }
                    if (f.type === r.Token.Type.endTag) {
                        var p = f.content;
                        return p === l ? o : null
                    }
                    return !c.length && l !== "" ? null : this.buildTreeFromTokens(o, c, l)
                }, s
            }();
        e.ParseTree = n,
            function(s) {
                (function(o) {
                    o[o.root = 0] = "root", o[o.text = 1] = "text", o[o.tag = 2] = "tag"
                })(s.Type || (s.Type = {}))
            }(n = e.ParseTree || (e.ParseTree = {})), e.ParseTree = n
    })(lI);
    var Va = {};
    Object.defineProperty(Va, "__esModule", {
        value: !0
    });
    Va.Tag = void 0;
    var Wz = function() {
        function e(t) {
            var r;
            this.tagName = t.tagName, this.insertLineBreaks = t.insertLineBreaks, this.suppressLineBreaks = t.suppressLineBreaks, this.noNesting = t.noNesting, this.markupGenerator = (r = t.markupGenerator) !== null && r !== void 0 ? r : function(n, s) {
                return "<" + n.tagName + ">" + s + "</" + n.tagName + ">"
            }
        }
        return e.create = function(t, r, n) {
            var s, o, c;
            return n === void 0 && (n = {}), new e({
                tagName: t,
                insertLineBreaks: (s = n.insertLineBreaks) !== null && s !== void 0 ? s : !0,
                suppressLineBreaks: (o = n.suppressLineBreaks) !== null && o !== void 0 ? o : !1,
                noNesting: (c = n.noNesting) !== null && c !== void 0 ? c : !1,
                markupGenerator: r
            })
        }, e
    }();
    Va.Tag = Wz;
    Object.defineProperty(Pl, "__esModule", {
        value: !0
    });
    Pl.BBCodeParser = void 0;
    var CT = lI,
        wT = Va,
        jz = function() {
            function e(t, r) {
                this.options = r, this.escapeHTML = !1, this.tags = t, r && (this.escapeHTML = r.escapeHTML)
            }
            return Object.defineProperty(e, "defaultTags", {
                get: function() {
                    return {
                        b: wT.Tag.create("b"),
                        i: wT.Tag.create("i")
                    }
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.parse = function(t, r, n, s) {
                r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0);
                var o = CT.ParseTree.buildTree(t, this.tags);
                return !o || !o.isValid ? t : this.treeToHtml(o.subTrees, n, s, r)
            }, e.prototype.addTag = function(t, r) {
                this.tags[t] = r
            }, e.prototype.treeToHtml = function(t, r, n, s) {
                var o = this;
                s === void 0 && (s = !1);
                var c = "",
                    l = !1;
                return t.forEach(function(f) {
                    var d;
                    if (f.type === CT.ParseTree.Type.text) {
                        var p = f.content;
                        n && (p = o.escapeHTML ? e.escapeHTML(p) : p), r && !l && (p = p.replace(/(\r\n|\n|\r)/gm, "<br>"), l = !1), c += p
                    } else {
                        var E = o.tags[f.content],
                            _ = o.treeToHtml(f.subTrees, E.insertLineBreaks, n, s);
                        s ? c += _ : c += E.markupGenerator(E, _, (d = f.attributes) !== null && d !== void 0 ? d : {}), l = E.suppressLineBreaks
                    }
                }), c
            }, e.escapeHTML = function(t) {
                return t.replace(/[&<>]/g, function(r) {
                    return e.tagsToReplace[r] || r
                })
            }, e.tagsToReplace = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;"
            }, e
        }();
    Pl.BBCodeParser = jz;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Tag = e.BBCodeParser = void 0;
        var t = Pl;
        Object.defineProperty(e, "BBCodeParser", {
            enumerable: !0,
            get: function() {
                return t.BBCodeParser
            }
        });
        var r = Va;
        Object.defineProperty(e, "Tag", {
            enumerable: !0,
            get: function() {
                return r.Tag
            }
        })
    })(Yn);
    const Hz = {
        install: e => {
            const t = {
                section: Yn.Tag.create("section", (o, c, {
                    section: l
                }) => `<div ${l?`class="section ${l}"`:'class="section"'}>${c}</div>`)
            };
            ["b", "bold", "B"].forEach(o => {
                t[o] = Yn.Tag.create(o, (c, l) => `<strong>${l}</strong>`)
            }), ["i", "italic", "I"].forEach(o => {
                t[o] = Yn.Tag.create(o, (c, l) => `<em>${l}</em>`)
            }), t.tos = Yn.Tag.create("tos", (o, c) => `<a class="tosLink" href="https://jackboxgames.com/terms-of-service/" target="_blank">${c}</a>`), t.pp = Yn.Tag.create("pp", (o, c) => `<a class="ppLink" href="https://jackboxgames.com/privacy-policy/" target="_blank">${c}</a>`);
            const s = new Yn.BBCodeParser(t);
            e.directive("bb", {
                mounted(o, c) {
                    const l = document.createElement("div");
                    l.textContent = c.value, o.innerHTML = s.parse(l.innerHTML)
                },
                updated(o, c) {
                    const l = document.createElement("div");
                    l.textContent = c.value, o.innerHTML = s.parse(l.innerHTML)
                }
            }), e.mixin({
                beforeCreate() {
                    this.$options.bb && Object.keys(this.$options.bb).forEach(o => {
                        const c = this.$options.bb[o];
                        if (c instanceof Function) {
                            s.addTag(o, Yn.Tag.create(o, c));
                            return
                        }
                        s.addTag(o, Yn.Tag.create(o, c.generator, c.options))
                    })
                }
            }), e.config.globalProperties.$bb = o => (typeof o != "string" && console.warn(`[BBCodePlugin] Received unexpected ${typeof o} with value ${o};converting to string before parsing.`), s.parse(String(o)))
        }
    };

    function qz(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
        return e
    }
    var Kz = qz,
        Yz = JS,
        Vz = Yz(Object.keys, Object),
        zz = Vz,
        Xz = og,
        Jz = zz,
        Qz = Object.prototype,
        Zz = Qz.hasOwnProperty;

    function eX(e) {
        if (!Xz(e)) return Jz(e);
        var t = [];
        for (var r in Object(e)) Zz.call(e, r) && r != "constructor" && t.push(r);
        return t
    }
    var tX = eX,
        rX = sO,
        nX = tX,
        iX = bl;

    function sX(e) {
        return iX(e) ? rX(e) : nX(e)
    }
    var Dl = sX,
        oX = Fa,
        aX = Dl;

    function cX(e, t) {
        return e && oX(t, aX(t), e)
    }
    var uX = cX,
        lX = Fa,
        fX = Ga;

    function dX(e, t) {
        return e && lX(t, fX(t), e)
    }
    var hX = dX;

    function pX(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = 0, o = []; ++r < n;) {
            var c = e[r];
            t(c, r, e) && (o[s++] = c)
        }
        return o
    }
    var gX = pX;

    function _X() {
        return []
    }
    var fI = _X,
        mX = gX,
        vX = fI,
        EX = Object.prototype,
        yX = EX.propertyIsEnumerable,
        LT = Object.getOwnPropertySymbols,
        TX = LT ? function(e) {
            return e == null ? [] : (e = Object(e), mX(LT(e), function(t) {
                return yX.call(e, t)
            }))
        } : vX,
        Jg = TX,
        bX = Fa,
        SX = Jg;

    function OX(e, t) {
        return bX(e, SX(e), t)
    }
    var AX = OX;

    function IX(e, t) {
        for (var r = -1, n = t.length, s = e.length; ++r < n;) e[s + r] = t[r];
        return e
    }
    var dI = IX,
        RX = dI,
        NX = sg,
        CX = Jg,
        wX = fI,
        LX = Object.getOwnPropertySymbols,
        PX = LX ? function(e) {
            for (var t = []; e;) RX(t, CX(e)), e = NX(e);
            return t
        } : wX,
        hI = PX,
        $X = Fa,
        DX = hI;

    function xX(e, t) {
        return $X(e, DX(e), t)
    }
    var MX = xX,
        kX = dI,
        UX = Gi;

    function BX(e, t, r) {
        var n = t(e);
        return UX(e) ? n : kX(n, r(e))
    }
    var pI = BX,
        FX = pI,
        GX = Jg,
        WX = Dl;

    function jX(e) {
        return FX(e, WX, GX)
    }
    var HX = jX,
        qX = pI,
        KX = hI,
        YX = Ga;

    function VX(e) {
        return qX(e, YX, KX)
    }
    var zX = VX,
        XX = As,
        JX = En,
        QX = XX(JX, "DataView"),
        ZX = QX,
        eJ = As,
        tJ = En,
        rJ = eJ(tJ, "Promise"),
        nJ = rJ,
        iJ = As,
        sJ = En,
        oJ = iJ(sJ, "Set"),
        aJ = oJ,
        cJ = As,
        uJ = En,
        lJ = cJ(uJ, "WeakMap"),
        fJ = lJ,
        Kh = ZX,
        Yh = rg,
        Vh = nJ,
        zh = aJ,
        Xh = fJ,
        gI = Po,
        Uo = jS,
        PT = "[object Map]",
        dJ = "[object Object]",
        $T = "[object Promise]",
        DT = "[object Set]",
        xT = "[object WeakMap]",
        MT = "[object DataView]",
        hJ = Uo(Kh),
        pJ = Uo(Yh),
        gJ = Uo(Vh),
        _J = Uo(zh),
        mJ = Uo(Xh),
        os = gI;
    (Kh && os(new Kh(new ArrayBuffer(1))) != MT || Yh && os(new Yh) != PT || Vh && os(Vh.resolve()) != $T || zh && os(new zh) != DT || Xh && os(new Xh) != xT) && (os = function(e) {
        var t = gI(e),
            r = t == dJ ? e.constructor : void 0,
            n = r ? Uo(r) : "";
        if (n) switch (n) {
            case hJ:
                return MT;
            case pJ:
                return PT;
            case gJ:
                return $T;
            case _J:
                return DT;
            case mJ:
                return xT
        }
        return t
    });
    var Qg = os,
        vJ = Object.prototype,
        EJ = vJ.hasOwnProperty;

    function yJ(e) {
        var t = e.length,
            r = new e.constructor(t);
        return t && typeof e[0] == "string" && EJ.call(e, "index") && (r.index = e.index, r.input = e.input), r
    }
    var TJ = yJ,
        bJ = ig;

    function SJ(e, t) {
        var r = t ? bJ(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength)
    }
    var OJ = SJ,
        AJ = /\w*$/;

    function IJ(e) {
        var t = new e.constructor(e.source, AJ.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
    var RJ = IJ,
        kT = El,
        UT = kT ? kT.prototype : void 0,
        BT = UT ? UT.valueOf : void 0;

    function NJ(e) {
        return BT ? Object(BT.call(e)) : {}
    }
    var CJ = NJ,
        wJ = ig,
        LJ = OJ,
        PJ = RJ,
        $J = CJ,
        DJ = zS,
        xJ = "[object Boolean]",
        MJ = "[object Date]",
        kJ = "[object Map]",
        UJ = "[object Number]",
        BJ = "[object RegExp]",
        FJ = "[object Set]",
        GJ = "[object String]",
        WJ = "[object Symbol]",
        jJ = "[object ArrayBuffer]",
        HJ = "[object DataView]",
        qJ = "[object Float32Array]",
        KJ = "[object Float64Array]",
        YJ = "[object Int8Array]",
        VJ = "[object Int16Array]",
        zJ = "[object Int32Array]",
        XJ = "[object Uint8Array]",
        JJ = "[object Uint8ClampedArray]",
        QJ = "[object Uint16Array]",
        ZJ = "[object Uint32Array]";

    function eQ(e, t, r) {
        var n = e.constructor;
        switch (t) {
            case jJ:
                return wJ(e);
            case xJ:
            case MJ:
                return new n(+e);
            case HJ:
                return LJ(e, r);
            case qJ:
            case KJ:
            case YJ:
            case VJ:
            case zJ:
            case XJ:
            case JJ:
            case QJ:
            case ZJ:
                return DJ(e, r);
            case kJ:
                return new n;
            case UJ:
            case GJ:
                return new n(e);
            case BJ:
                return PJ(e);
            case FJ:
                return new n;
            case WJ:
                return $J(e)
        }
    }
    var tQ = eQ,
        rQ = Qg,
        nQ = Fi,
        iQ = "[object Map]";

    function sQ(e) {
        return nQ(e) && rQ(e) == iQ
    }
    var oQ = sQ,
        aQ = oQ,
        cQ = cg,
        FT = ug,
        GT = FT && FT.isMap,
        uQ = GT ? cQ(GT) : aQ,
        lQ = uQ,
        fQ = Qg,
        dQ = Fi,
        hQ = "[object Set]";

    function pQ(e) {
        return dQ(e) && fQ(e) == hQ
    }
    var gQ = pQ,
        _Q = gQ,
        mQ = cg,
        WT = ug,
        jT = WT && WT.isSet,
        vQ = jT ? mQ(jT) : _Q,
        EQ = vQ,
        yQ = qS,
        TQ = Kz,
        bQ = lg,
        SQ = uX,
        OQ = hX,
        AQ = VS,
        IQ = XS,
        RQ = AX,
        NQ = MX,
        CQ = HX,
        wQ = zX,
        LQ = Qg,
        PQ = TJ,
        $Q = tQ,
        DQ = QS,
        xQ = Gi,
        MQ = ag,
        kQ = lQ,
        UQ = yn,
        BQ = EQ,
        FQ = Dl,
        GQ = Ga,
        WQ = 1,
        jQ = 2,
        HQ = 4,
        _I = "[object Arguments]",
        qQ = "[object Array]",
        KQ = "[object Boolean]",
        YQ = "[object Date]",
        VQ = "[object Error]",
        mI = "[object Function]",
        zQ = "[object GeneratorFunction]",
        XQ = "[object Map]",
        JQ = "[object Number]",
        vI = "[object Object]",
        QQ = "[object RegExp]",
        ZQ = "[object Set]",
        eZ = "[object String]",
        tZ = "[object Symbol]",
        rZ = "[object WeakMap]",
        nZ = "[object ArrayBuffer]",
        iZ = "[object DataView]",
        sZ = "[object Float32Array]",
        oZ = "[object Float64Array]",
        aZ = "[object Int8Array]",
        cZ = "[object Int16Array]",
        uZ = "[object Int32Array]",
        lZ = "[object Uint8Array]",
        fZ = "[object Uint8ClampedArray]",
        dZ = "[object Uint16Array]",
        hZ = "[object Uint32Array]",
        gt = {};
    gt[_I] = gt[qQ] = gt[nZ] = gt[iZ] = gt[KQ] = gt[YQ] = gt[sZ] = gt[oZ] = gt[aZ] = gt[cZ] = gt[uZ] = gt[XQ] = gt[JQ] = gt[vI] = gt[QQ] = gt[ZQ] = gt[eZ] = gt[tZ] = gt[lZ] = gt[fZ] = gt[dZ] = gt[hZ] = !0;
    gt[VQ] = gt[mI] = gt[rZ] = !1;

    function Tu(e, t, r, n, s, o) {
        var c, l = t & WQ,
            f = t & jQ,
            d = t & HQ;
        if (r && (c = s ? r(e, n, s, o) : r(e)), c !== void 0) return c;
        if (!UQ(e)) return e;
        var p = xQ(e);
        if (p) {
            if (c = PQ(e), !l) return IQ(e, c)
        } else {
            var E = LQ(e),
                _ = E == mI || E == zQ;
            if (MQ(e)) return AQ(e, l);
            if (E == vI || E == _I || _ && !s) {
                if (c = f || _ ? {} : DQ(e), !l) return f ? NQ(e, OQ(c, e)) : RQ(e, SQ(c, e))
            } else {
                if (!gt[E]) return s ? e : {};
                c = $Q(e, E, l)
            }
        }
        o || (o = new yQ);
        var S = o.get(e);
        if (S) return S;
        o.set(e, c), BQ(e) ? e.forEach(function(M) {
            c.add(Tu(M, t, r, M, e, o))
        }) : kQ(e) && e.forEach(function(M, R) {
            c.set(R, Tu(M, t, r, R, e, o))
        });
        var N = d ? f ? wQ : CQ : f ? GQ : FQ,
            L = p ? void 0 : N(e);
        return TQ(L || e, function(M, R) {
            L && (R = M, M = e[R]), bQ(c, R, Tu(M, t, r, R, e, o))
        }), c
    }
    var pZ = Tu,
        gZ = pZ,
        _Z = 1,
        mZ = 4;

    function vZ(e) {
        return gZ(e, _Z | mZ)
    }
    class Fee {
        constructor() {
            Oe(this, "wsClient");
            Oe(this, "isKicked", !1);
            Oe(this, "isHostPaused", !1);
            Oe(this, "watchStopHandler");
            Oe(this, "keyMap");
            Oe(this, "providerMap");
            Oe(this, "mappedValues", ys({}));
            Oe(this, "shouldParseBlobcast", !1);
            Oe(this, "callbackMap", new Map);
            Oe(this, "pausedKeys", null);
            Oe(this, "pausedEvents", null);
            Oe(this, "keyMapKeys");
            Oe(this, "providerMapKeys");
            Oe(this, "hotValues");
            Oe(this, "newValues");
            Oe(this, "pause", (t = [], r = null) => {
                if (t) {
                    const n = this.pausedKeys ?? [];
                    n.push(...t), this.pausedKeys = n
                }
                if (r) {
                    const n = this.pausedEvents ?? [];
                    n.push(...r), this.pausedEvents = n
                }
            });
            Oe(this, "resume", () => {
                this.pausedKeys = null, this.pausedEvents = null, this.sync()
            });
            Oe(this, "sync", zZ(() => {
                if (this.wsClient && !(!this.keyMap && !this.providerMap)) {
                    if (this.pausedKeys && !this.pausedKeys.length) {
                        this.emit("didReceivePausedEntities", this.wsClient.entities);
                        return
                    }
                    this.hotValues = {}, this.newValues = {}, this.normalize().mapKeysToValues().mapProvidersToValues().deleteDropped().hydrateRefs().syncExisting(), delete this.hotValues, delete this.newValues, this.checkHostIsPausedChange()
                }
            }, 50))
        }
        setWSClient(t) {
            this.wsClient = t, this.setupWatcher(), t.on("connection", this.onConnection.bind(this)), t.on("room/exit", this.onRoomExit.bind(this)), t.on("room/lock", this.onRoomLock.bind(this)), t.on("client/connected", this.onClientConnected.bind(this)), t.on("client/disconnected", this.onClientDisconnected.bind(this)), t.on("client/kicked", this.onClientKicked.bind(this)), t.on("socketClose", this.onSocketClose.bind(this))
        }
        setupWatcher() {
            this.wsClient.entities = ys(this.wsClient.entities), this.watchStopHandler = ps(this.wsClient.entities, this.sync)
        }
        valueForEntity(t) {
            return t instanceof Jn.ArtifactEntity || t instanceof Jn.DoodleEntity || t instanceof Jn.TextMapEntity || t instanceof Jn.NumberEntity ? t : t instanceof Jn.ObjectEntity ? yZ(t.val) : t instanceof Jn.TextEntity ? t.text : null
        }
        normalize() {
            var r;
            const t = Object.keys(this.wsClient.entities);
            for (let n = 0; n < t.length; n++) {
                let s = t[n];
                if ((r = this.pausedKeys) != null && r.includes(s)) {
                    this.emit("didReceivePausedEntities", {
                        [s]: this.wsClient.entities[s]
                    });
                    continue
                }
                const o = this.valueForEntity(this.wsClient.entities[s]);
                if (o != null) {
                    if (this.shouldParseBlobcast) {
                        const c = s.split(":");
                        if (c[0] === "bc")
                            if (c[1] === "customer") {
                                if (c[2] !== `${this.wsClient.id}`) continue;
                                s = "player"
                            } else c[1] === "room" && (s = "room")
                    }
                    this.hotValues[s] = o
                }
            }
            return this
        }
        hydrateRefs() {
            const t = (r, n, s = !1, o = !1) => {
                const c = r.$ref ?? r.ref;
                if (c) {
                    const l = this.hotValues[c];
                    if (l === void 0)
                        if (o) console.warn(`[ecastPlugin] entity "${n}" referenced nonexistent optional entity "${c}"`);
                        else throw new Error(`[ecastPlugin] entity "${n}" referenced entity "${c}" but it does not exist`);
                    Bee(this.newValues, n, l)
                } else s && Object.entries(r).forEach(([l, f]) => {
                    f !== null && typeof f == "object" && t(f, `${n}.${l}`, s, o)
                })
            };
            return Object.entries(this.newValues).forEach(([r, n]) => {
                n && Object.entries(n).forEach(([s, o]) => {
                    o !== null && typeof o == "object" && t(o, `${r}.${s}`, this.keyHasDeepRefs(r), this.keyHasOptionalRefs(r))
                })
            }), this
        }
        keyHasDeepRefs(t) {
            var r, n, s, o;
            return !!((n = (r = this.keyMap) == null ? void 0 : r[t]) != null && n.hasDeepRefs || (o = (s = this.providerMap) == null ? void 0 : s[t]) != null && o.hasDeepRefs)
        }
        keyHasOptionalRefs(t) {
            var r, n, s, o;
            return !!((n = (r = this.keyMap) == null ? void 0 : r[t]) != null && n.hasOptionalRefs || (o = (s = this.providerMap) == null ? void 0 : s[t]) != null && o.hasOptionalRefs)
        }
        mapKeysToValues() {
            if (!this.keyMap) return this;
            for (let t = 0; t < this.keyMapKeys.length; t++) this.newValues[this.keyMapKeys[t]] = this.hotValues[this.keyMap[this.keyMapKeys[t]].key];
            return this
        }
        mapProvidersToValues() {
            if (!this.providerMap) return this;
            for (let t = 0; t < this.providerMapKeys.length; t++) this.newValues[this.providerMapKeys[t]] = this.providerMap[this.providerMapKeys[t]].fn(this.hotValues, this.wsClient);
            return this
        }
        deleteDropped() {
            const t = Object.keys(this.mappedValues);
            for (let r = 0; r < t.length; r++) this.newValues[t[r]] || delete this.mappedValues[t[r]];
            return this
        }
        syncExisting() {
            const t = Object.keys(this.newValues);
            for (let r = 0; r < t.length; r++) this.mappedValues[t[r]] = this.newValues[t[r]];
            return this.mappedValues
        }
        checkHostIsPausedChange() {
            const t = this.mappedValues.hostIsPaused;
            t && !this.isHostPaused ? (this.isHostPaused = !0, this.emit("hostDidPause")) : !t && this.isHostPaused && (this.isHostPaused = !1, this.emit("hostDidUnpause"))
        }
        addKeys(t) {
            this.keyMap || (this.keyMap = {}), Object.keys(t).forEach(r => {
                if (typeof t[r] == "function") {
                    const n = t[r];
                    this.keyMap[r] = {
                        key: n(this.wsClient),
                        hasDeepRefs: !1,
                        hasOptionalRefs: !1
                    };
                    return
                }
                if (typeof t[r] == "object") {
                    const n = t[r];
                    this.keyMap[r] = {
                        key: n.fn ? n.fn(this.wsClient) : n.key,
                        hasDeepRefs: n.hasDeepRefs ?? !1,
                        hasOptionalRefs: n.hasOptionalRefs ?? !1
                    };
                    return
                }
                this.keyMap[r] = {
                    key: t[r]
                }
            }), this.keyMapKeys = Object.keys(this.keyMap), this.sync()
        }
        purgeKeys(t) {
            this.keyMap && (Object.keys(t).forEach(r => {
                this.keyMap[r] && delete this.keyMap[r]
            }), this.keyMapKeys = Object.keys(this.keyMap), this.sync())
        }
        addProviders(t) {
            this.providerMap || (this.providerMap = {}), Object.keys(t).forEach(r => {
                if (typeof t[r] == "object") {
                    const n = t[r];
                    this.providerMap[r] = {
                        fn: n.fn,
                        hasDeepRefs: n.hasDeepRefs ?? !1
                    };
                    return
                }
                this.providerMap[r] = {
                    fn: t[r]
                }
            }), this.providerMapKeys = Object.keys(this.providerMap), this.sync()
        }
        purgeProviders(t) {
            this.providerMap && (Object.keys(t).forEach(r => {
                this.providerMap[r] && delete this.providerMap[r]
            }), this.providerMapKeys = Object.keys(this.providerMap), this.sync())
        }
        on(t, r) {
            const n = this.callbackMap.get(t) ?? new Set;
            n.size || this.callbackMap.set(t, n), n.add(r)
        }
        off(t, r) {
            const n = this.callbackMap.get(t);
            n && n.delete(r)
        }
        emit(t, r) {
            var n, s;
            if (this.pausedEvents && this.pausedEvents.includes(t)) {
                (n = this.callbackMap.get("didEmitPausedEvent")) == null || n.forEach(o => o(t));
                return
            }(s = this.callbackMap.get(t)) == null || s.forEach(o => o(r))
        }
        onConnection(t) {
            if (t.status === "connected") {
                this.emit("didReconnect");
                return
            }
            this.emit("isReconnecting", t.attempt ?? 0)
        }
        onClientConnected(t) {
            t.role === "host" && t.reconnect && this.emit("hostDidReconnect")
        }
        onClientDisconnected(t) {
            t.role === "host" && this.emit("hostDidDisconnect")
        }
        onRoomLock() {
            this.emit("roomDidLock")
        }
        onRoomExit() {
            this.emit("roomDidExit")
        }
        onClientKicked() {
            var t;
            this.isKicked = !0, (t = this.watchStopHandler) == null || t.call(this), this.emit("wasKicked")
        }
        onSocketClose() {
            this.isKicked || this.emit("didDisconnect")
        }
    }
    const Mr = new Fee,
        Gee = {
            install: (e, t) => {
                e.config.globalProperties.$setupEcast = r => {
                    Mr.setWSClient(r.wsClient), r.wsClient.on("artifact", n => oo.add(n)), r.wsClient.on("connection", n => {
                        n.status === "connected" && Mr.setupWatcher()
                    }), Mr.sync(), e.config.globalProperties.$ecast = Mr.wsClient, e.config.globalProperties.$ecastManager = Mr, e.config.globalProperties.$ecastValues = Mr.mappedValues, e.config.globalProperties.$ecastRoom = r.room, e.config.globalProperties.$ecastWelcome = r.welcome, e.config.globalProperties.$syncEcast = Mr.sync, e.config.globalProperties.$pauseEcastUpdates = Mr.pause, e.config.globalProperties.$resumeEcastUpdates = Mr.resume, e.mixin({
                        beforeCreate() {
                            this.$options.ecastKeys && Mr.addKeys(this.$options.ecastKeys), this.$options.ecastProviders && Mr.addProviders(this.$options.ecastProviders)
                        },
                        beforeDestroy() {
                            this.$options.ecastKeys && Mr.purgeKeys(this.$options.ecastKeys), this.$options.ecastProviders && Mr.purgeProviders(this.$options.ecastProviders)
                        }
                    })
                }, t != null && t.wsClient && e.config.globalProperties.$setupEcast(t)
            }
        },
        OI = {
            fatal: {
                error: Symbol("fatal.error")
            },
            modal: {
                active: Symbol("modal.active")
            },
            textDescriptions: {
                announcement: Symbol("textDescriptions.announcement")
            }
        };
    const $re = Br({
            setup() {
                return {
                    fatalError: io(OI.fatal.error)
                }
            },
            computed: {
                message() {
                    var n, s, o, c;
                    const e = ((s = (n = this.fatalError) == null ? void 0 : n.event) == null ? void 0 : s.event_id) ?? "Unknown";
                    let t = "";
                    const r = (c = (o = this.fatalError) == null ? void 0 : o.hint) == null ? void 0 : c.originalException;
                    return r ? typeof r == "string" ? t = r : t = r.message : t = "An unknown error occured", `Version:
${window.tv.manifest.loader.version}

Event ID:
${e}

${t}`
                }
            },
            methods: {
                onFeedbackClick() {
                    var e, t;
                    Pre({
                        id: ((t = (e = this.fatalError) == null ? void 0 : e.event) == null ? void 0 : t.event_id) ?? "Unknown"
                    })
                }
            }
        }),
        Xa = e => (yp("data-v-d0abff79"), e = e(), Tp(), e),
        Dre = {
            class: "jbg fatal"
        },
        xre = {
            class: "constrain"
        },
        Mre = Xa(() => ye("a", {
            class: "logo",
            href: "/",
            "aria-label": "Jackbox Games Logo"
        }, null, -1)),
        kre = {
            class: "content"
        },
        Ure = Xa(() => ye("h1", null, "You have encountered an error", -1)),
        Bre = Xa(() => ye("p", null, "Something went wrong! But don't worry, you can try a few things to get going.", -1)),
        Fre = Xa(() => ye("ul", null, [ye("li", null, "Refresh the page"), ye("li", null, "Turn off adblockers or other browser extensions."), ye("li", null, "Check your connection to the Internet."), ye("li", null, "Make sure you're using an up-to-date browser."), ye("li", null, "If that doesn't work, let us know.")], -1)),
        Gre = Xa(() => ye("hr", null, null, -1)),
        Wre = {
            class: "error"
        };

    function jre(e, t, r, n, s, o) {
        return Ge(), Qe("div", Dre, [ye("div", xre, [Mre, ye("div", kre, [Ure, Bre, Fre, ye("button", {
            onClick: t[0] || (t[0] = (...c) => e.onFeedbackClick && e.onFeedbackClick(...c))
        }, "Tell us what happened"), Gre, ye("pre", Wre, kr(e.message), 1)])])])
    }
    const Hre = Fr($re, [
            ["render", jre],
            ["__scopeId", "data-v-d0abff79"]
        ]),
        du = ys({
            hasCrashed: !1
        }),
        qre = {
            install: e => {
                if (e.config.globalProperties.$handleEcastError) return;
                e.provide(OI.fatal.error, Jr(() => du));
                const t = (r, n) => {
                    var s, o;
                    if (r instanceof ya.EcastEntityNotFound || r instanceof ya.EcastFilterError || r instanceof ya.EcastRateLimitExceeded || r instanceof Error && ((s = r.message) != null && s.includes("Socket not ready to send")) || r instanceof Error && ((o = r.message) != null && o.includes("No connection available"))) return console.warn(r);
                    throw n ? console.error(n, r) : console.error(r), r
                };
                window.tv.onError = async (r, n) => {
                    if (r.level === "error" && (du.hasCrashed = !0, du.event = r, du.hint = n), e.config.globalProperties.$debugRecorder) return await e.config.globalProperties.$debugRecorder.sendToEcast()
                }, e.component("Fatal", Hre), e.config.globalProperties.$handleEcastError = t
            }
        };
    function pb(e, t) {
        const r = e.global.locale,
            n = e.global.messages[r],
            s = Zre(n, t);
        return Array.isArray(s) || console.warn(`[i18nPlugin] Translation with key ${t} is not an array`), bne(s)
    }
    const Sne = {
            install: (e, t) => {
                e.directive("ts", (r, n) => {
                    const s = pb(t.i18n, n.value);
                    r.textContent = s || ""
                }), e.config.globalProperties.$ts = function(n) {
                    return pb(t.i18n, n) || ""
                }, e.config.globalProperties.$messages = t.i18n.global.messages, e.config.globalProperties.$t = t.i18n.global.t, e.config.globalProperties.$tc = t.i18n.global.tc, e.config.globalProperties.$te = t.i18n.global.te, e.config.globalProperties.$tm = t.i18n.global.tm
            }
        },
        One = Br({
            props: {
                image: String,
                text: String,
                subtext: String,
                classes: {
                    type: [Array, String],
                    default: () => "jbg"
                },
                dismissText: String
            }
        }),
        Ane = "main/@teeko-web/assets/928ef0da.png",
        Ine = "main/@teeko-web/assets/0bb76a2d.png",
        Rne = "main/@teeko-web/assets/ed4469b3.png",
        Nne = {
            key: 0,
            class: "image",
            src: Ane,
            alt: "Kicked"
        },
        Cne = {
            key: 1,
            class: "image",
            src: Ine,
            alt: "Thank You"
        },
        wne = {
            key: 2,
            class: "image",
            src: Rne,
            alt: "Error"
        },
        Lne = {
            class: "text"
        },
        Pne = {
            key: 3,
            class: "subtext"
        },
        $ne = {
            class: "actions"
        };

    function Dne(e, t, r, n, s, o) {
        const c = gs("bb");
        return Ge(), Qe("div", {
            class: en(["error-model", e.classes])
        }, [e.image === "tear" ? (Ge(), Qe("img", Nne)) : e.image === "moon" ? (Ge(), Qe("img", Cne)) : (Ge(), Qe("img", wne)), Zr(ye("h3", Lne, null, 512), [
            [c, e.text]
        ]), e.subtext ? Zr((Ge(), Qe("h3", Pne, null, 512)), [
            [c, e.subtext]
        ]) : Ur("", !0), ye("div", $ne, [Zr(ye("button", {
            onClick: t[0] || (t[0] = ti(l => e.$emit("resolve"), ["prevent"]))
        }, null, 512), [
            [c, e.dismissText]
        ])])], 2)
    }
    const xne = Fr(One, [
            ["render", Dne],
            ["__scopeId", "data-v-420dd700"]
        ]),
        Mne = Br({
            props: {
                text: String,
                subtext: String,
                classes: {
                    type: [Array, String],
                    default: () => "jbg"
                },
                options: Array
            },
            emits: ["resolve"]
        }),
        kne = {
            class: "text"
        },
        Une = {
            key: 0,
            class: "subtext"
        },
        Bne = {
            class: "actions"
        },
        Fne = ["onClick"];

    function Gne(e, t, r, n, s, o) {
        const c = gs("bb");
        return Ge(), Qe("div", {
            class: en(["options-modal", e.classes])
        }, [Zr(ye("h3", kne, null, 512), [
            [c, e.text]
        ]), e.subtext ? Zr((Ge(), Qe("h3", Une, null, 512)), [
            [c, e.subtext]
        ]) : Ur("", !0), ye("div", Bne, [(Ge(!0), Qe(zt, null, Au(e.options, (l, f) => Zr((Ge(), Qe("button", {
            key: f,
            class: en(l.classes),
            onClick: ti(d => e.$emit("resolve", l.value), ["prevent"])
        }, null, 10, Fne)), [
            [c, l.text]
        ])), 128))])], 2)
    }
    const Wne = Fr(Mne, [
            ["render", Gne],
            ["__scopeId", "data-v-db592987"]
        ]),
        jne = Br({
            data() {
                return {
                    classes: "jbg",
                    props: null,
                    resolve: null,
                    content: null
                }
            },
            beforeMount() {
                this.$registerModal(this)
            },
            methods: {
                show(e, t = {}, r = {}) {
                    return this.props = t, this.classes = r.classes || "jbg", e === "Error" ? this.content = xne : e === "Options" ? this.content = Wne : this.content = e, new Promise(n => {
                        this.resolve = n
                    })
                },
                hide() {
                    this.props = null, this.resolve && this.resolve()
                },
                onResolve(...e) {
                    this.props = null, this.resolve(...e)
                },
                onBackgroundClick() {
                    this.props = null, this.resolve()
                }
            }
        }),
        Hne = {
            class: "sandbox"
        };

    function qne(e, t, r, n, s, o) {
        return Ge(), mo(Pp, {
            name: "modal-transition"
        }, {
            default: bp(() => [e.props ? (Ge(), Qe("div", {
                key: 0,
                class: en(["modal", e.classes]),
                onKeyup: t[0] || (t[0] = gu((...c) => e.onBackgroundClick && e.onBackgroundClick(...c), ["esc"])),
                onClick: t[1] || (t[1] = ti((...c) => e.onBackgroundClick && e.onBackgroundClick(...c), ["self"]))
            }, [ye("div", Hne, [e.content ? (Ge(), mo(nD(e.content), Cu({
                key: 0,
                class: "content"
            }, e.props, {
                onResolve: e.onResolve
            }), null, 16, ["onResolve"])) : Ur("", !0)])], 34)) : Ur("", !0)]),
            _: 1
        })
    }
    const Kne = Fr(jne, [
            ["render", qne],
            ["__scopeId", "data-v-2e99f2ab"]
        ]),
        Yne = {
            install: e => {
                let t;
                const r = () => {
                        if (!t) throw new Error("No ModalComponent is registered");
                        return t.hide()
                    },
                    n = (o, c, l) => {
                        if (!t) throw new Error("No ModalComponent is registered");
                        return t.show(o, c, l)
                    },
                    s = o => {
                        t = o
                    };
                e.component("Modal", Kne), e.config.globalProperties.$hideModal = r, e.config.globalProperties.$showModal = n, e.config.globalProperties.$registerModal = s
            }
        },
        Vne = {
            install: e => {
                const t = new Map;
                e.directive("pointerbox", {
                    mounted(r, n) {
                        const s = new Ph(r, {
                            isMultitouch: n.modifiers.multi,
                            restrictToBox: n.modifiers.restrict,
                            ...n.value
                        });
                        t.set(r, s)
                    },
                    unmounted(r) {
                        var n;
                        (n = t.get(r)) == null || n.destroy(), t.delete(r)
                    }
                }), e.directive("pointerbox-translate", {
                    mounted(r, n) {
                        r.setAttribute("data-pointerboxtranslateid", n.value.id ?? ""), r.setAttribute("data-pointerboxtranslatewidth", n.value.width ?? ""), r.setAttribute("data-pointerboxtranslateheight", n.value.height ?? "")
                    },
                    unmounted(r) {
                        r.removeAttribute("data-pointerboxtranslateid"), r.removeAttribute("data-pointerboxtranslatewidth"), r.removeAttribute("data-pointerboxtranslateheight")
                    }
                })
            }
        };
    pn("");
    const _ie = {
            BUY_NOW: "Kup teraz",
            SLOGAN: "Slogan",
            SLOGAN_PLACEHOLDER: "WPISZ SWÓJ SLOGAN"
        },
        mie = {
            INSTRUCTIONS: "Narysuj swój projekt"
        },
        vie = {
            INSTRUCTIONS: "Dodaj swój slogan",
            DISCLAIMER: "* Ten obraz służy wyłącznie do celów podglądowych. Rzeczywiste umiejscowienie projektu i sloganu może się różnić."
        },
        Eie = {
            POST_SUBMIT: "Dziękujemy za wizytę! Kliknij poniżej, aby kupić koszulkę. Nie zapomnij skopiować linku, jeśli chcesz kontynuować zakupy później!"
        },
        yie = {
            TEXT: "Kontynuowanie oznacza, że ​​nie będziesz już mógł edytować koszulki. Czy na pewno skończyłeś?"
        },
        Tie = {
            TOS: "Klikając {submit}, akceptujesz nasze [tos]Warunki korzystania z usługi[/tos]"
        },
        bie = {
            FORM: _ie,
            DRAWING: mie,
            ASSEMBLING: vie,
            INSTRUCTIONS: Eie,
            MODAL: yie,
            WARNING: Tie
        },
        Hie = {
            en: bie
        },
        qie = Br({
            props: {
                background: String
            }
        }),
        Kie = {
            xmlns: "http://www.w3.org/2000/svg",
            reserveAspectRatio: "xMidYMin slice",
            viewBox: "0 0 823.47 588.96"
        },
        Yie = ["fill"],
        Vie = ye("path", {
            "fill-rule": "evenodd",
            d: "M698.7 40.02q-13.83-8.89-24.6-14.93a98.49 98.49 0 0 0-22.23-9.6 50.49 50.49 0 0 0-10.35-1.77l-.19-1.23-101.66.06q-26.06-.24-42.69-.61c-1.78-.69-2.7-1-2.74-1a36.44 36.44 0 0 0-7.54-1.37q-9.81-1-17-1-6.33 0-17.05.3-12.74.42-17 .49-1.89.06-3.6.06-17.89-.67-42.81-1.71-71.37-2.79-83.62-5l-2.56-.37a5.37 5.37 0 0 0-3.53-1.46c-12.79-.77-83.43-1-91.91-.73a157.84 157.84 0 0 0-31.61 3.78q-15.65 3.47-26.43 10.78a85.23 85.23 0 0 0-11.09 9.14q-8.34 7.67-10.71 9.74a107.26 107.26 0 0 0-10.78 10q-6.82 7.13-10.3 10.6-9.44 9.62-21.43 20.59-18.09 16.62-48.9 41.11-15.84 12.72-27 21.74a64.79 64.79 0 0 0-5.42 4.2 8.65 8.65 0 0 0-2.38 3.35q-2 1.22-1.4 4.2l.25.85a14.48 14.48 0 0 0 .48 1.83v.37a1.88 1.88 0 0 0 .19.61 6 6 0 0 0 .6 1.7q2.81 16 18 32.28 8.78 9.45 27.71 26 36.36 35 57.49 66.15 1.65 2.49 3.9 1.28a7.7 7.7 0 0 0 4.75-.92q.3-.18 5.73-4.32 2-1.53 6.63-4.63a37.2 37.2 0 0 0 4.88-3.78q1.28 8.89 2.61 19.43 4.94 42.59 6 96.17t-.27 127.09q-.61 36.78-1.34 62.85l.61-.24a6.48 6.48 0 0 0 3.47 5 31.12 31.12 0 0 0 9.44 3.39q1.46.3 9.93 1.53 10.77 1.57 20 2.62 20.77 2.25 40 3.29c23.39 1.18 109.7 1.4 138.93.67q21-.67 40.07-2.07 7.19-.56 19.61-2 13.83-1.53 19.49-2 38.07-3.29 79.48-5.06c10-.53 85.11-1.3 105.25-2.31l6.45-.25 8.29.67q36.72 2.75 42.51.43a8.45 8.45 0 0 0 3.9-3.11 3.87 3.87 0 0 0 2.67-1.88 5.25 5.25 0 0 0 .61-3.6 15.77 15.77 0 0 0-.42-1.64q.6-28.32.79-65.48.36-79.73-2.44-130-3.59-66.94-7.37-118.35l2.68.67a149.8 149.8 0 0 1 14.86 7q4.7 2.49 14 7.67l7.74 4.14a39.28 39.28 0 0 0 3.59 1.65 1.09 1.09 0 0 1 .36.06 3.08 3.08 0 0 0 .8.85 9.14 9.14 0 0 0 2 1.22c.89 2.48 2.75 3.61 5.6 3.41a6.46 6.46 0 0 0 4.56-2.07q4.2-.68 8.83-4.87 3-2.62 8-8.1 20.77-18.94 29.36-40.38 4.44-11.22 6.21-27.23c.36-3.61.65-6 .85-7.13a30.47 30.47 0 0 1 1.83-7 75.23 75.23 0 0 1 5.72-11q7.3-12 14-21.44c.89-1.22 2.23-3.08 4-5.6q2.31-3.4 3.78-5.66 2.37-4 2.86-5.06a12 12 0 0 0 .61-1.64 17.14 17.14 0 0 0 1.94-3.6 2.65 2.65 0 0 0-.42-2.8 2.39 2.39 0 0 0-1.1-1 4.91 4.91 0 0 1-.24-.74 13.42 13.42 0 0 0-4.57-5.23q-3.9-2.5-5.85-3.84l-13.14-8.74q-20-13.52-24.36-16.38Q748.4 72.29 723 55.67q-23.5-15.18-24.3-15.65m-4 38.67a5 5 0 0 0-4.35-1.2 5.27 5.27 0 0 0-3.9 2.62 6.72 6.72 0 0 0-.66 4.51 3.28 3.28 0 0 1 .18.61 5.45 5.45 0 0 0-.3 2.5l.24 3.9q.3 6.82-.06 15.16-.12 3.24-1.22 19.07-1.15 17-3.71 37.33-2.13 16.81-4.69 33.63-1.47-14-3-42.15-.36-4.64-1.52-22.66-1-13.95-1.28-22.6l-.67-21.38q-.12-7.42-.24-11.27a52.81 52.81 0 0 0-1.16-11.14c-.49-1.91-1.6-2.84-3.35-2.8s-2.78 1.09-3.1 3a54.3 54.3 0 0 0-.61 11l.36 11.2.55 22.36q.24 8.4.06 22.78-.24 16.56-.18 22.72.18 26 2 44.34.66 6.45 1.58 12.42-.24 9.21-.06 12.67a44.77 44.77 0 0 0 .55 6.22q.12 4.44.79 10a3.53 3.53 0 0 0 .43 1.59l5.11 72.72q5.79 80.34 7.92 112.68t2.29 87.86q.12 22.41-.18 40.56l-49.11 9.55-3.83-.12c-14.94-.65-88.34-.81-100.2-.49q-33.61.86-78.5 2.87-13.83.6-39.95.79-27.41.06-40.19.55-44.1 1.64-78.93.73c-16.16-.37-90.76-1.06-103.79-2.07q-11.94-.91-21.8-2.07-7.8-1.05-11.75-1.4a70 70 0 0 0-5.12-.3q.61-21.87.79-51.17.44-64.8-2.37-110.85t-3.9-151.47q-.3-29.73-.37-56.53l.12-2.07q1.35-16.26 1.59-25.15.54-16.45.85-24.61.42-14.73.18-24.91-.42-10.17-1.52-22.78-.61-7.61-.73-11.45a53.1 53.1 0 0 1 1.21-11.52 7.13 7.13 0 0 0-.79-5.54 6.92 6.92 0 0 0-3.71-3.34 6 6 0 0 0-4.63-.18 5.7 5.7 0 0 0-3.11 4.08q-2.43 9.38-1.83 22.41.3 7.56 1.65 22.78.48 10.73.67 24.85.12 4.69.18 24.85c0 1.1.08 2.24.12 3.41a367.64 367.64 0 0 0-2.43-11.51 197.57 197.57 0 0 0-6.21-21.62 100.36 100.36 0 0 1-4.57-20.4c-.29-2.27-.49-5.89-.61-10.84a74.69 74.69 0 0 0-.49-10.78 1.9 1.9 0 0 0-1.83-1.89 2.37 2.37 0 0 0-2.25 1.34q-3.52 7.13-3 18.76.18 5.55 2.19 19.43.36 2.63 1.22 10.29.6 6.46 1.34 10.24t1.34 7.61a146 146 0 0 0-13.34-20l-11.8-15.63a157.15 157.15 0 0 1-10.53-16.57c-.65-1.26-1.48-1.58-2.5-1a1.8 1.8 0 0 0-1.2 2.24 2.54 2.54 0 0 0 .16.38q4.33 11 15.23 32.76 10.71 21.2 15.16 32.83 14.19 36.74 16.08 69.38a5.32 5.32 0 0 0-.79.18c-.43 0-.85 0-1.28-.06a.82.82 0 0 1-.43-.12 106.3 106.3 0 0 0-5.84-10.42q-4.26-7.12-19.19-27.47l-21.25-29.21q-3.7-5.17-5.66-7.74-3.28-4.32-6-7.37-1.89-2.19-6.58-6.94-4.2-4.38-6.39-7a1 1 0 0 0-1.38-.29.85.85 0 0 0-.2.17 1.13 1.13 0 0 0-.36 1.56.76.76 0 0 0 .11.14q1.77 2.92 4.69 8.59 3 5.91 4.57 8.59 2.43 4.14 9 13.46 6.95 9.87 21 29.54a327.73 327.73 0 0 1 18 27.65 183.37 183.37 0 0 1 8.83 17.48c.12.81.44 2.23 1 4.27a18.56 18.56 0 0 1 .73 4.62q.12 5.61-5 4.27a22.27 22.27 0 0 1-7.55-4 3.15 3.15 0 0 0-1.4-.73q-7.8-10.84-19.43-24.55-21.5-25.28-28.87-36.18-7.72-12-11.81-17.9a160.84 160.84 0 0 0-13-16.88 92.24 92.24 0 0 0-14.68-13.52 28 28 0 0 0-6.94-3.71 21.75 21.75 0 0 1 2.86-2.38c1.26-1 3.06-2.27 5.42-3.9l11.45-9.13q14.36-11.23 21.47-16.97 25.4-20.2 41.77-36.72 4.14-4 9-9.56 2.13-2.49 8.59-9.87 3.41-3.94 9.19-10 7.5-8.1 9.26-9.92a77.56 77.56 0 0 1 20.95-15.78 107.58 107.58 0 0 1 24.48-9q13.89-3.42 32-2.8c1.7 0 3.84.16 6.4.36l86.25 2.32.06.06 31.36 2.8 17.3 1.52q2.51.79 6.76 1.83 3.9 1.16 9.2 3.05 3 1 9.14 3.16a167.76 167.76 0 0 0 37.45 8.71 191.37 191.37 0 0 0 39.1.13 146.36 146.36 0 0 0 37.88-8.9 6.54 6.54 0 0 0 4.08-4.26.16.16 0 0 0 .06-.12l16.31-.38a50.21 50.21 0 0 1-3 4.51q-7.8 9.93-25.09 17.48T430 49.89q-10-.43-20.16-1.58l-8.28-1.1q-1.65 5.66 8.22 8.16 15 4 53.41-1.83 36.9-5.55 51.94-21 5.79-6 7.12-11.39c17.54-.36 97-.85 118.35-1.46a71.8 71.8 0 0 1 12.91 3.8 148.26 148.26 0 0 1 22.66 12.2q7.85 5.05 46.83 30.58 23.51 15.41 47.26 31.36 20.34 13.71 24.36 16.51l11.14 8q1.83 1.34 5.6 4.26c.69.41 1.32.75 1.89 1-.57.6-1.56 1.64-3 3.1a.76.76 0 0 0-.31.43c-1.34 1.34-3.24 3.35-5.72 6s-6.93 8-13.34 15.84a151.16 151.16 0 0 0-22.45 37.72q-5.24 13.82-8 20.58a99.52 99.52 0 0 1-10.23 19.56 98.94 98.94 0 0 1-6.7 8q-4.87 4.94-7.31 7.37-6.71 7.06-8.16 9a22.23 22.23 0 0 0-4.75 9.38c-.74-.37-1.2-.61-1.4-.73q-4.14-2.07-7.49-4.08l-6.34-4-1.76-1 .18-8.1a66.83 66.83 0 0 1 .73-8.83 68.64 68.64 0 0 0 .85-8.59 17.4 17.4 0 0 0-.06-2.5q3.48-9.56 12.55-33.25 6.88-18 14.92-34.48 2.87-5.53 8.95-16.69a82.79 82.79 0 0 0 7.19-17.48 2.33 2.33 0 0 0-.79-2.74 2.26 2.26 0 0 0-2.8.13 55.06 55.06 0 0 0-12.12 12.54q-2.74 3.72-9.75 14.92-10 16-18.08 31.55a280.31 280.31 0 0 0-14.38 33.32c-.28 1-.57 1.87-.85 2.68 1-5.2 1.79-9.67 2.43-13.4q4.1-24.18 5.6-39.1a297.08 297.08 0 0 0 1.53-38.43q-.18-9-1.53-20.28-.66-4.69-2.92-20.16a6.72 6.72 0 0 0-1-2.75l-.06-.12a6.78 6.78 0 0 0-2.18-4.12Z"
        }, null, -1);

    function zie(e, t, r, n, s, o) {
        return Ge(), Qe("svg", Kie, [ye("path", {
            fill: e.background || "#333",
            "fill-rule": "evenodd",
            d: "M767.7 91.49c9.1 6.14 28.87 20.89 51 34-16.58 26-29.13 39.48-33.4 44.05s-25.84 71.28-33.16 78.6-14.52 21.26-22.15 21.56-57.29-24.21-57.29-24.21l5 69.36c3.86 53.57 5.49 91.14 6.91 112.7s.27 50.88.32 87.8c.08 14.94.94 28 .74 40.14.23 13.89-24.72 13.36-42.71 14.27s-90.4-1.21-114.64 0q-118.26 5.88-164.46 9c-30.74 2-143.42-2.19-143.42-2.19l-78.74-5.08s5.68-213.16-5-313c-4.37 2-15 9.81-26 15-26.61-24.79-59.55-58.15-86.93-100.72A218.18 218.18 0 0 0 4.7 147.49l21-18c9.61-7.47 17.21-14 23-18s48-41.43 52-46 29.67-35.78 47-45c7.63-3.94 15.32-7.93 24-10 14.68-3.61 43.81-2.7 40-3h80s59.46 3.84 50 3c18.66-.37 43.18 6.3 74.21 7.48 49 1.87 65.56 1.82 73.79 1.52s76.67-.93 149-3c4.14.77 8.54 1.25 13 3 6.29 2.56 16.2 6.4 25 12 5.23 3.37 20 12 46 29 0 0 15.2 11 45 31Z"
        }, null, 8, Yie), Vie])
    }
    const Xie = Fr(qie, [
            ["render", zie]
        ]),
        Jie = Br({
            components: {
                Shirt: Xie,
                TextInput: vA
            },
            props: {
                player: {
                    type: Object,
                    required: !0
                },
                background: {
                    type: Object,
                    required: !0
                },
                eventCode: {
                    type: String,
                    required: !0
                }
            },
            ecastKeys: {
                player: {
                    fn: ({
                        id: e
                    }) => `player:${e}`,
                    hasDeepRefs: !0
                },
                background: "background"
            },
            emits: {
                assemblySubmitted: () => !0
            },
            data() {
                return {
                    drawingIndex: 0,
                    isSubmitting: !1,
                    slogan: ""
                }
            },
            computed: {
                backgroundColor() {
                    var e;
                    return (e = this.background) == null ? void 0 : e.color
                }
            },
            methods: {
                getImage() {
                    return new mA(document.createElement("canvas"), this.player.doodle).renderImage()
                },
                async onSubmit() {
                    if (!this.slogan.length) {
                        console.error("SLOGAN IS EMPTY");
                        return
                    }
                    this.isSubmitting = !0;
                    const t = {
                            key: "artifiact:0",
                            appId: "awshirt-web",
                            categoryId: "TeeKOWeb",
                            blob: this.createBlob()
                        },
                        r = await this.$showModal("Options", {
                            text: this.$t("MODAL.TEXT"),
                            options: [{
                                text: this.$t("ACTION.YES"),
                                value: "yes"
                            }, {
                                text: this.$t("ACTION.NO"),
                                value: "no"
                            }]
                        });
                    if (!r || r === "no") {
                        this.isSubmitting = !1;
                        return
                    }
                    try {
                        await this.$ecast.send("artifact/create", t)
                    } catch (n) {
                        this.isSubmitting = !1, this.$handleEcastError(n)
                    }
                    this.$emit("assemblySubmitted")
                },
                createBlob() {
                    const e = {
                        avatar: "kappa",
                        index: 0,
                        name: this.player.name
                    };
                    return {
                        players: [e],
                        eventCode: this.eventCode,
                        shirts: [{
                            designer: e,
                            drawing: {
                                artist: e,
                                background: this.backgroundColor ? this.backgroundColor : "#2f5f9d",
                                lines: this.formatLines()
                            },
                            slogan: {
                                author: e,
                                slogan: this.slogan
                            }
                        }]
                    }
                },
                formatLines() {
                    return By.cloneDeep(this.player.doodle.lines).map(t => ({
                        color: t.color,
                        points: By.cloneDeep(t.points),
                        thickness: t.weight
                    }))
                }
            }
        }),
        Qie = e => (yp("data-v-dc033043"), e = e(), Tp(), e),
        Zie = {
            key: 0,
            class: "assembling"
        },
        ese = {
            class: "instruction"
        },
        tse = {
            class: "assembly"
        },
        rse = {
            class: "shirt"
        },
        nse = {
            class: "drawing-container"
        },
        ise = ["src"],
        sse = {
            class: "slogan-preview-container"
        },
        ose = ["textContent"],
        ase = {
            for: "slogan",
            class: "slogan-label"
        },
        cse = {
            class: "remaining"
        },
        use = {
            class: "inline"
        },
        lse = Qie(() => ye("button", {
            class: "submit"
        }, null, -1)),
        fse = {
            class: "disclaimer"
        };

    function dse(e, t, r, n, s, o) {
        const c = ln("Modal"),
            l = ln("Shirt"),
            f = ln("TextInput"),
            d = gs("t");
        return e.background ? (Ge(), Qe("div", Zie, [It(c, {
            class: "modal"
        }), ye("form", {
            class: "form-container",
            onSubmit: t[1] || (t[1] = ti((...p) => e.onSubmit && e.onSubmit(...p), ["prevent"]))
        }, [ye("div", ese, [Zr(ye("p", null, null, 512), [
            [d, "ASSEMBLING.INSTRUCTIONS"]
        ])]), ye("div", tse, [ye("div", rse, [ye("div", nse, [ye("img", {
            class: "drawing",
            alt: "drawing",
            draggable: "false",
            src: e.getImage()
        }, null, 8, ise)]), It(l, {
            background: e.backgroundColor
        }, null, 8, ["background"]), ye("div", sse, [ye("div", {
            class: "slogan-preview",
            textContent: kr(e.slogan)
        }, null, 8, ose)])])]), ye("label", ase, [ka(kr(e.$t("FORM.SLOGAN")) + " ", 1), ye("span", cse, kr(45 - e.slogan.length), 1)]), ye("div", use, [It(f, {
            id: "slogan",
            modelValue: e.slogan,
            "onUpdate:modelValue": t[0] || (t[0] = p => e.slogan = p),
            class: "slogan-input",
            autocapitalize: "off",
            autocorrect: "off",
            autocomplete: "off",
            maxlength: e.player.maxLength,
            disabled: e.isSubmitting,
            sanitizers: ["html", "emoji", "input"],
            placeholder: e.$t("FORM.SLOGAN_PLACEHOLDER")
        }, null, 8, ["modelValue", "maxlength", "disabled", "placeholder"]), lse]), ye("div", fse, [ye("p", null, kr(e.$t("ASSEMBLING.DISCLAIMER")), 1)])], 32)])) : Ur("", !0)
    }
    const hse = Fr(Jie, [
            ["render", dse],
            ["__scopeId", "data-v-dc033043"]
        ]),
        pse = Br({
            components: {
                Doodle: U7
            },
            props: {
                player: {
                    type: Object,
                    required: !0
                }
            },
            emits: {
                drawingSubmitted: () => !0
            },
            ecastKeys: {
                player: {
                    fn: ({
                        id: e
                    }) => `player:${e}`,
                    hasDeepRefs: !0
                }
            },
            data() {
                const e = ["#2f5f9d", "#d02c41", "#2a3a2a", "#0d162d", "#51346c", "#43342e", "#080808", "#505253"],
                    t = ["#000000", "#f32938", "#ffa500", "#f8e655", "#44d582", "#0046ae", "#bc4df8", "#634a2c", "#ffffff"],
                    r = [5, 12, 18];
                return {
                    backgroundColors: e,
                    colors: t,
                    weights: r,
                    slogan: "",
                    backgroundColor: e[0],
                    color: t[t.length - 1],
                    isSubmitting: !1,
                    isUndoing: !1,
                    scale: {
                        width: 2,
                        height: 2
                    },
                    weight: r[0]
                }
            },
            computed: {
                canSubmit() {
                    return !(this.isSubmitting || this.isUndoing || this.player.doodle.lines.length <= 0)
                }
            },
            methods: {
                onChangeBackgroundColor(e) {
                    this.backgroundColor = e
                },
                onChangeColor(e) {
                    this.color = e
                },
                onChangeWeight() {
                    const e = this.weights.findIndex(t => t === this.weight);
                    e !== -1 && (this.weight = this.weights[(e + 1) % this.weights.length])
                },
                async onSubmit() {
                    this.isSubmitting = !0;
                    try {
                        await this.$ecast.updateObject("background", {
                            color: this.backgroundColor
                        }), await this.$ecast.lock(this.player.doodle.key)
                    } catch (e) {
                        this.isSubmitting = !1, this.$handleEcastError(e)
                    }
                    this.$emit("drawingSubmitted")
                },
                async onUndo() {
                    this.isUndoing = !0;
                    try {
                        await this.$ecast.undoDoodle(this.player.doodle.key)
                    } catch (e) {
                        this.$handleEcastError(e)
                    } finally {
                        this.isUndoing = !1
                    }
                }
            }
        }),
        gse = {
            key: 0,
            class: "drawing"
        },
        _se = {
            id: "stage"
        },
        mse = {
            class: "instructions"
        },
        vse = {
            id: "tools"
        },
        Ese = {
            id: "weights"
        },
        yse = ["disabled"],
        Tse = {
            id: "colors"
        },
        bse = ["aria-label", "checked", "disabled", "data-color", "onChange"],
        Sse = {
            id: "doodle"
        },
        Ose = {
            id: "backgrounds"
        },
        Ase = ["aria-label", "checked", "disabled", "onChange"],
        Ise = {
            id: "actions"
        },
        Rse = ["disabled"],
        Nse = ye("svg", {
            width: "28",
            height: "28",
            version: "1.0",
            viewBox: "0 0 46 36"
        }, [ye("path", {
            d: "m6 7-6 6 6 7 7 7V17h25v11H7v8h39V8H13V4l-1-4-6 7z"
        })], -1),
        Cse = [Nse],
        wse = ["disabled"];

    function Lse(e, t, r, n, s, o) {
        const c = ln("Doodle");
        return e.player ? (Ge(), Qe("div", gse, [ye("div", _se, [ye("h1", mse, kr(e.$t("DRAWING.INSTRUCTIONS")), 1), ye("div", vse, [ye("div", Ese, [ye("button", {
            class: "weight",
            "aria-label": "weight",
            disabled: e.isSubmitting,
            style: Ti({
                backgroundColor: e.backgroundColor
            }),
            onClick: t[0] || (t[0] = (...l) => e.onChangeWeight && e.onChangeWeight(...l))
        }, [ye("div", {
            class: "circle",
            style: Ti({
                width: `${e.weight}px`,
                height: `${e.weight}px`,
                backgroundColor: e.color,
                borderRadius: "50%"
            })
        }, null, 4)], 12, yse)]), ye("div", Tse, [(Ge(!0), Qe(zt, null, Au(e.colors, (l, f) => (Ge(), Qe("input", {
            key: `color-${f}`,
            "aria-label": `color ${l}`,
            class: "color",
            checked: l === e.color,
            disabled: e.isSubmitting,
            "data-color": l,
            name: "colors",
            style: Ti({
                backgroundColor: l
            }),
            type: "radio",
            onChange: d => e.onChangeColor(l)
        }, null, 44, bse))), 128))])]), ye("div", Sse, [It(c, {
            "canvas-options": {
                color: e.color,
                scale: e.scale,
                weight: e.weight
            },
            "hide-submit": "",
            "hide-undo": "",
            player: e.player,
            style: Ti({
                backgroundColor: e.backgroundColor,
                pointerEvents: e.isSubmitting ? "none" : ""
            })
        }, null, 8, ["canvas-options", "player", "style"])]), ye("div", Ose, [(Ge(!0), Qe(zt, null, Au(e.backgroundColors, (l, f) => (Ge(), Qe("input", {
            key: `bg-${f}`,
            "aria-label": `background color ${l}`,
            class: "tab",
            checked: l === e.backgroundColor,
            disabled: e.isSubmitting,
            name: "backgrounds",
            style: Ti({
                backgroundColor: l
            }),
            type: "radio",
            onChange: d => e.onChangeBackgroundColor(l)
        }, null, 44, Ase))), 128))]), ye("div", Ise, [ye("button", {
            class: "undo",
            disabled: !e.canSubmit,
            onClick: t[1] || (t[1] = ti((...l) => e.onUndo && e.onUndo(...l), ["prevent"]))
        }, Cse, 8, Rse), ye("button", {
            class: "submit",
            disabled: !e.canSubmit,
            onClick: t[2] || (t[2] = ti((...l) => e.onSubmit && e.onSubmit(...l), ["prevent"]))
        }, null, 8, wse)])])])) : Ur("", !0)
    }
    const Pse = Fr(pse, [
            ["render", Lse]
        ]),
        $se = Br({
            components: {
                GalleryLink: Fz
            },
            props: {
                artifact: Object
            }
        }),
        Dse = {
            class: "post-submit"
        },
        xse = {
            class: "thank-you"
        },
        Mse = {
            class: "buy-now"
        };

    function kse(e, t, r, n, s, o) {
        const c = ln("GalleryLink");
        return Ge(), Qe("div", Dse, [ye("p", xse, kr(e.$t("INSTRUCTIONS.POST_SUBMIT")), 1), ye("button", Mse, [It(c, {
            class: "gallery-link",
            artifact: e.artifact
        }, {
            default: bp(() => [ka(kr(e.$t("FORM.BUY_NOW")), 1)]),
            _: 1
        }, 8, ["artifact"])])])
    }
    const Use = Fr($se, [
            ["render", kse],
            ["__scopeId", "data-v-81e02657"]
        ]),
        Bse = Br({
            props: {
                text: String,
                icon: String,
                shoppingCart: {
                    type: Boolean,
                    default: !1
                },
                options: {
                    type: Array,
                    required: !1
                }
            },
            emits: ["menuSelect"],
            data() {
                return {
                    currLocale: vs.locale,
                    open: !1
                }
            },
            methods: {
                handleChange(e) {
                    this.open = !1, this.$emit("menuSelect", e.value)
                },
                handleBlur(e) {
                    const t = e.relatedTarget;
                    (!t || !t.id.startsWith("nav-menu-item")) && (this.open = !1)
                },
                btnClick() {
                    this.open = !this.open
                }
            }
        }),
        Fse = {
            key: 0,
            class: "dropdown-menu alignRight"
        },
        Gse = ["id", "onClick", "onKeydown"];

    function Wse(e, t, r, n, s, o) {
        return Ge(), Qe("div", {
            class: "dropdown-container",
            tabindex: "0",
            onKeyup: t[3] || (t[3] = gu(c => e.open = !e.open, ["enter"])),
            onBlur: t[4] || (t[4] = (...c) => e.handleBlur && e.handleBlur(...c))
        }, [ye("div", {
            class: en(["menu-text", {
                openMenu: e.open
            }]),
            onClick: t[0] || (t[0] = c => e.open = !e.open),
            onKeydown: t[1] || (t[1] = gu(c => e.open = !e.open, ["enter"]))
        }, [ka(kr(e.text) + " ", 1), ye("i", {
            class: en(["arrow", {
                down: !e.open,
                up: e.open
            }])
        }, null, 2)], 34), e.open ? (Ge(), Qe("div", Fse, [(Ge(!0), Qe(zt, null, Au(e.options, (c, l) => (Ge(), Qe("div", {
            id: `nav-menu-item-${l}-${c.value}`,
            key: l,
            class: en(["nav-menu-item item paragraph-l", {
                topItem: l === 0
            }]),
            tabindex: "0",
            onClick: f => e.handleChange(c),
            onKeydown: gu(f => e.handleChange(c), ["enter"]),
            onBlur: t[2] || (t[2] = (...f) => e.handleBlur && e.handleBlur(...f))
        }, kr(c.displayValue), 43, Gse))), 128))])) : Ur("", !0)], 32)
    }
    const jse = Fr(Bse, [
            ["render", Wse],
            ["__scopeId", "data-v-2289e287"]
        ]),
        Hse = Br({
            components: {
                Assembling: hse,
                Drawing: Pse,
                TextInput: vA,
                PostSubmit: Use,
                LangDropDown: jse
            },
            props: {
                options: Object
            },
            data() {
                return {
                    locales: [{
                        displayValue: "Polski",
                        value: "en"
                    }],
                    nameLength: 12,
                    name: "",
                    isConnectingHost: !1,
                    isConnectingPlayer: !1,
                    playerConnected: !1,
                    doodleSubmitted: !1,
                    shirtAssembled: !1,
                    api: new Jn.APIClient({
                        host: $n.serverUrl,
                        scheme: "https"
                    }),
                    roomCode: "",
                    roomNotFound: !1,
                    hostClient: null,
                    artifact: void 0,
                    eventCode: ""
                }
            },
            ecastKeys: {
                player: {
                    fn: ({
                        id: e
                    }) => `player:${e}`,
                    hasDeepRefs: !0
                },
                background: "background"
            },
            computed: {
                screen() {
                    return this.playerConnected ? this.doodleSubmitted ? {
                        name: "Assembling",
                        on: {
                            assemblySubmitted: () => this.handleShirtAssembled()
                        }
                    } : {
                        name: "Drawing",
                        on: {
                            drawingSubmitted: () => this.handleSubmitDoodle()
                        }
                    } : {
                        name: "Waiting",
                        on: {}
                    }
                },
                canSubmit() {
                    return this.name.length > 0
                },
                ecastValues() {
                    return this.$ecastValues ? this.$ecastValues : null
                },
                currentLocale() {
                    const e = this.locales.find(t => t.value === this.$i18n.locale);
                    return e == null ? void 0 : e.displayValue
                },
                filteredLocales() {
                    return this.locales.filter(e => e.value !== this.$i18n.locale)
                }
            },
            mounted() {
                this.checkForEventCode()
            },
            methods: {
                async onStart() {
                    await this.connectHost(), await this.connectPlayer()
                },
                handleSubmitDoodle() {
                    this.doodleSubmitted = !0
                },
                handleShirtAssembled() {
                    this.shirtAssembled = !0
                },
                async connectHost() {
                    if (this.isConnectingHost) return;
                    const e = await this.api.createRoom({
                        appTag: "awshirt-web",
                        userId: (Math.random() * 1e5).toString()
                    });
                    if (!e) return this.showError("ERROR.ROOM_NOT_FOUND");
                    this.roomCode = e.code;
                    const t = await this.api.getRoom({
                        code: this.roomCode
                    });
                    this.hostClient = new Jn.WSClient({
                        debug: "false",
                        host: t.host,
                        code: e.code,
                        name: "awshirt-web-host",
                        role: "host",
                        token: e.token,
                        userId: (Math.random() * 1e5).toString()
                    }), this.hostClient.on("client/connected", r => void this.setUpPlayer(r)), this.hostClient.on("artifact", r => {
                        this.artifact = {
                            artifactId: r.artifactId,
                            rootId: r.rootId,
                            categoryId: r.categoryId
                        }
                    });
                    try {
                        this.isConnectingHost = !0, await this.hostClient.connect()
                    } catch (r) {
                        console.error("[teeko-web]", r), this.onConnectionError()
                    }
                    this.isConnectingHost = !1
                },
                async setUpPlayer(e) {
                    var n, s, o;
                    const t = {
                        acl: ["rw role:player"],
                        size: {
                            height: 300,
                            width: 300
                        }
                    };
                    await ((n = this.hostClient) == null ? void 0 : n.createDoodle("doodle", t));
                    const r = {
                        name: e.name,
                        maxLength: 45,
                        kind: "drawing",
                        doodle: {
                            $ref: "doodle"
                        },
                        responseKey: "background"
                    };
                    await ((s = this.hostClient) == null ? void 0 : s.createObject(`player:${e.id}`, r, ["rw role:player"])), await ((o = this.hostClient) == null ? void 0 : o.createObject("background", {
                        color: "#2f5f9d"
                    }, ["rw role:player"]))
                },
                async connectPlayer() {
                    var n;
                    if (this.isConnectingHost || this.isConnectingPlayer) return;
                    const e = await this.api.getRoom({
                            code: this.roomCode
                        }),
                        t = {
                            host: e.host,
                            code: this.roomCode.toUpperCase(),
                            name: this.name,
                            role: "player",
                            userId: (Math.random() * 1e5).toString(),
                            debug: "false"
                        },
                        r = new Jn.WSClient(t);
                    try {
                        this.isConnectingPlayer = !0;
                        const s = await r.connect();
                        this.$setupEcast({
                            room: e,
                            wsClient: r,
                            welcome: s
                        }), await ((n = this.hostClient) == null ? void 0 : n.lockRoom())
                    } catch (s) {
                        console.error("[teeko-web]", s), this.onConnectionError()
                    }
                    this.isConnectingPlayer = !1, this.playerConnected = !0
                },
                onConnectionError() {
                    this.showError("ERROR.GENERIC")
                },
                showError(e) {
                    this.$showModal("Error", {
                        text: this.$t("ERROR.TITLE"),
                        subtext: this.$t(e),
                        dismissText: this.$t("ACTION.OK")
                    })
                },
                localeChange(e) {
                    this.$i18n.locale = e
                },
                checkForEventCode() {
                    var r;
                    const e = (r = this.options) == null ? void 0 : r.match;
                    if (!e || !e.url.includes("event")) return;
                    const t = e.params.code;
                    t && (this.eventCode = t, console.log("DEBUG - eventCode:", t))
                },
                galleryLink(e, t, r) {
                    const n = e.includes("test") ? "http" : "https",
                        s = e.includes("test") ? "games-test.jackbox.tv" : "games.jackbox.tv";
                    return `${n}://${s}/artifact/${r}/${t}/`
                }
            }
        }),
        qse = e => (yp("data-v-7d944f4c"), e = e(), Tp(), e),
        Kse = {
            class: "tko-web"
        },
        Yse = {
            key: 0,
            class: "header-bar"
        },
        Vse = {
            class: "jbg-logo",
            target: "_blank",
            href: "https://www.jackboxgames.com/?utm_source=jackboxtv&utm_medium=logo&utm_campaign=jackboxgames"
        },
        zse = {
            key: 1,
            class: "main-menu"
        },
        Xse = qse(() => ye("div", {
            class: "logo"
        }, null, -1)),
        Jse = {
            class: "user-form"
        },
        Qse = {
            for: "username",
            class: "username-label"
        },
        Zse = {
            class: "remaining"
        },
        eoe = {
            class: "inline"
        },
        toe = ["disabled"],
        roe = {
            class: "tos",
            role: "complementary"
        },
        noe = {
            key: 0,
            class: "constrain"
        },
        ioe = {
            key: 1,
            class: "post-game"
        };

    function soe(e, t, r, n, s, o) {
        const c = ln("LangDropDown"),
            l = ln("TextInput"),
            f = ln("Assembling"),
            d = ln("Drawing"),
            p = ln("PostSubmit"),
            E = ln("Modal"),
            _ = gs("bb");
        return Ge(), Qe("div", Kse, [e.playerConnected ? Ur("", !0) : (Ge(), Qe("header", Yse, [ye("a", Vse, kr(e.$t("HOMEPAGE_LINK")), 1), It(c, {
            class: "lang-dropdown",
            options: e.filteredLocales,
            text: e.currentLocale,
            onMenuSelect: e.localeChange
        }, null, 8, ["options", "text", "onMenuSelect"])])), !e.playerConnected && !e.doodleSubmitted ? (Ge(), Qe("div", zse, [Xse, ye("div", Jse, [ye("form", {
            autocomplete: "off",
            onSubmit: t[1] || (t[1] = ti((...S) => e.onStart && e.onStart(...S), ["prevent"]))
        }, [ye("fieldset", null, [ye("label", Qse, [ka(kr(e.$t("FORM.NAME")) + " ", 1), ye("span", Zse, kr(e.nameLength - e.name.length), 1)]), ye("div", eoe, [It(l, {
            id: "username",
            modelValue: e.name,
            "onUpdate:modelValue": t[0] || (t[0] = S => e.name = S),
            class: "username",
            autocapitalize: "off",
            autocorrect: "off",
            autocomplete: "off",
            maxlength: e.nameLength,
            placeholder: e.$t("FORM.NAME_PLACEHOLDER"),
            sanitizers: ["username"]
        }, null, 8, ["modelValue", "maxlength", "placeholder"]), ye("button", {
            class: en(["submit", {
                connecting: e.isConnectingPlayer && e.isConnectingHost
            }]),
            disabled: !e.canSubmit
        }, null, 10, toe)])]), Zr(ye("p", roe, null, 512), [
            [_, e.$t("WARNING.TOS", {
                submit: "✓"
            })]
        ])], 32)])])) : (Ge(), Qe(zt, {
            key: 2
        }, [e.shirtAssembled ? Ur("", !0) : (Ge(), Qe("div", noe, [e.doodleSubmitted ? (Ge(), mo(f, Cu({
            key: 0
        }, e.ecastValues, {
            "event-code": e.eventCode,
            onAssemblySubmitted: e.handleShirtAssembled
        }), null, 16, ["event-code", "onAssemblySubmitted"])) : (Ge(), mo(d, Cu({
            key: 1
        }, e.ecastValues, {
            onDrawingSubmitted: e.handleSubmitDoodle
        }), null, 16, ["onDrawingSubmitted"]))])), e.artifact && e.shirtAssembled ? (Ge(), Qe("div", ioe, [It(p, {
            artifact: e.artifact
        }, null, 8, ["artifact"])])) : Ur("", !0)], 64)), It(E, {
            class: "modal"
        })])
    }
    const ooe = Fr(Hse, [
        ["render", soe],
        ["__scopeId", "data-v-7d944f4c"]
    ]);
    window.tv.register({
        mount: e => {
            var s, o;
            let t = fx(ooe, {
                options: e
            });
            t.config.unwrapInjectedRef = !0;
            let r;
            (s = e.room) != null && s.locale && (r = e.room.locale), (o = e.match) != null && o.params.locale && (r = e.match.params.locale), vs.set(r);
            const n = NM({
                fallbackLocale: "en",
                locale: vs.locale,
                messages: vs.mergeMessages(YH, Hie, L7)
            });
            return t.use(Hz), t.use(Gee), t.use(qre), t.use(n), t.use(Sne, {
                i18n: n
            }), t.use(Yne), t.use(Vne), t.mount("#app"), () => {
                t.unmount(), t = null
            }
        },
        info: e => ({
            tag: "@teeko-web",
            version: e.version,
            type: e.type,
            branch: e.branch
        })
    })
});
export default aoe();
//# sourceMappingURL=4c2292fe.js.map
