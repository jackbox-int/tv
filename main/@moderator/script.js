import * as VueLib from "https://esm.sh/vue@3.3.4";
import { createI18n as createVueI18n } from "https://esm.sh/vue-i18n@9.2.2";
import mixpanel from "https://esm.sh/mixpanel-browser@2.48.1";
import cloneDeep from "https://esm.sh/lodash-es@4.17.21/cloneDeep";
import debounce from "https://esm.sh/lodash-es@4.17.21/debounce";
import get from "https://esm.sh/lodash-es@4.17.21/get";
import sample from "https://esm.sh/lodash-es@4.17.21/sample";
import set from "https://esm.sh/lodash-es@4.17.21/set";
import * as Sentry from "https://esm.sh/@sentry/browser@7.120.4";

const {
    Comment: Rn,
    Fragment: qt,
    Text: ko,
    Transition: Fp,
    TransitionGroup: OB,
    computed: rn,
    createApp: kB,
    createBlock: tn,
    createCommentVNode: Pn,
    createElementBlock: et,
    createElementVNode: Te,
    createTextVNode: Bn,
    createVNode: ht,
    defineComponent: Wr,
    inject: As,
    mergeProps: kp,
    normalizeClass: Fr,
    openBlock: Pe,
    popScopeId: Mo,
    pushScopeId: $o,
    reactive: da,
    renderList: wp,
    resolveComponent: Vt,
    resolveDynamicComponent: CD,
    toDisplayString: Wt,
    watch: xs,
    withCtx: Ip,
    withDirectives: an
} = VueLib;
const nK = createVueI18n;
const Ed = mixpanel;
const jQ = cloneDeep;
const xee = debounce;
const cte = set;
const Eie = get;
const Bie = sample;
const Hne = (options = {}) => Sentry.showReportDialog(options.id && !options.eventId ? {
    ...options,
    eventId: options.id
} : options);

var sP = Object.defineProperty;
var aP = (t, e, r) => e in t ? sP(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[e] = r;
var ge = (t, e, r) => (aP(t, typeof e != "symbol" ? e + "" : e, r), r);
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
    new MutationObserver(s => {
        for (const a of s)
            if (a.type === "childList")
                for (const l of a.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && n(l)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(s) {
        const a = {};
        return s.integrity && (a.integrity = s.integrity), s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? a.credentials = "include" : s.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
    }

    function n(s) {
        if (s.ep) return;
        s.ep = !0;
        const a = r(s);
        fetch(s.href, a)
    }
})();

var dt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Hi(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}

function pK(t) {
    if (t.__esModule) return t;
    var e = t.default;
    if (typeof e == "function") {
        var r = function n() {
            return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
        };
        r.prototype = e.prototype
    } else r = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.keys(t).forEach(function(n) {
        var s = Object.getOwnPropertyDescriptor(t, n);
        Object.defineProperty(r, n, s.get ? s : {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        })
    }), r
}
class mf {
    static setup() {
        this.isSetup = !0, gtag("config", "G-V1QJVQMYF1", {
            send_page_view: !1
        }), Ed.init("2e284873b7269f13b850ac994abfd848", {
            debug: "false"
        })
    }
    static ga(e, r) {
        this.isSetup || this.setup(), gtag("event", e, r)
    }
    static mp(e, r) {
        this.isSetup || this.setup(), Ed.track(e, r)
    }
    static pageView(e) {
        this.ga("page_view", {
            page_title: e,
            page_location: `https://jackbox.tv/${e}`
        })
    }
    static gameStarted(e, r) {
        const n = {
            tag: e
        };
        r.isUGC !== void 0 && (n.is_ugc = r.isUGC), r.isSequel !== void 0 && (n.is_sequel = r.isSequel), r.locale !== void 0 && (n.locale = r.locale), r.mode !== void 0 && (n.mode = r.mode), r.numberOfPlayer !== void 0 && (n.number_of_players = r.numberOfPlayer), this.ga("game_start", n)
    }
    static gameJoined(e, r) {
        this.mp("Game Joined", {
            tag: e,
            ...r
        })
    }
    static bannerClick(e, r) {
        this.ga("banner_click", {
            url: e,
            location: r
        })
    }
    static externalLinkClick(e, r) {
        this.ga("external_link_click", {
            url: e,
            location: r
        })
    }
    static moderatorConnected(e) {
        this.ga("moderator_connected", {
            tag: e
        }), this.mp("Moderator Connected", {
            tag: e
        })
    }
    static itemModerated(e, r) {
        this.ga("item_moderated", {
            tag: e,
            was_rejected: r
        }), this.mp("Moderator Item", {
            tag: e,
            wasRejected: r
        })
    }
    static playerKicked(e, r) {
        this.ga("player_kicked", {
            tag: e,
            is_lobby: r
        }), this.mp("Moderator Kick", {
            tag: e,
            isLobby: r
        })
    }
    static galleryImpression(e, r) {
        this.ga("gallery_impression", {
            category_id: e,
            location: r
        })
    }
    static galleryClick(e, r) {
        this.ga("gallery_click", {
            category_id: e,
            location: r
        }), this.mp("Gallery Click", {
            categoryId: e,
            location: r
        })
    }
    static galleryAddToCart(e, r) {
        this.mp("Gallery Add To Cart", {
            categoryId: e,
            ...r
        })
    }
    static galleryCheckout(e, r) {
        this.mp("Gallery Checkout", {
            categoryId: e,
            ...r
        })
    }
    static galleryShare(e, r) {
        this.mp("Gallery Share", {
            categoryId: e,
            ...r
        })
    }
    static galleryWatch(e, r) {
        this.mp("Gallery Watch", {
            categoryId: e,
            ...r
        })
    }
    static galleryDownload(e, r) {
        this.mp("Gallery Download", {
            categoryId: e,
            ...r
        })
    }
}
ge(mf, "isSetup", !1);
const VK = [{
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
        name: "Fakin' It All Night Long",
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
    }, {
        name: "CAPTCHA Game",
        tag: "captcha",
        wrapper: "vue",
        isPublic: !1,
        directory: "ppad/captcha",
        categoryId: "CaptchaGame",
        features: ["moderation", "kicking"]
    }],
    fS = t => VK.find(e => e.tag === t || e.galleryId === t || e.categoryId === t);

function FK() {
    this.__data__ = [], this.size = 0
}
var WK = FK;

function HK(t, e) {
    return t === e || t !== t && e !== e
}
var xf = HK,
    jK = xf;

function XK(t, e) {
    for (var r = t.length; r--;)
        if (jK(t[r][0], e)) return r;
    return -1
}
var Af = XK,
    qK = Af,
    YK = Array.prototype,
    zK = YK.splice;

function JK(t) {
    var e = this.__data__,
        r = qK(e, t);
    if (r < 0) return !1;
    var n = e.length - 1;
    return r == n ? e.pop() : zK.call(e, r, 1), --this.size, !0
}
var ZK = JK,
    QK = Af;

function e$(t) {
    var e = this.__data__,
        r = QK(e, t);
    return r < 0 ? void 0 : e[r][1]
}
var t$ = e$,
    r$ = Af;

function n$(t) {
    return r$(this.__data__, t) > -1
}
var i$ = n$,
    s$ = Af;

function a$(t, e) {
    var r = this.__data__,
        n = s$(r, t);
    return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
}
var o$ = a$,
    u$ = WK,
    l$ = ZK,
    f$ = t$,
    c$ = i$,
    E$ = o$;

function Ba(t) {
    var e = -1,
        r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r;) {
        var n = t[e];
        this.set(n[0], n[1])
    }
}
Ba.prototype.clear = u$;
Ba.prototype.delete = l$;
Ba.prototype.get = f$;
Ba.prototype.has = c$;
Ba.prototype.set = E$;
var Sf = Ba,
    h$ = Sf;

function p$() {
    this.__data__ = new h$, this.size = 0
}
var _$ = p$;

function g$(t) {
    var e = this.__data__,
        r = e.delete(t);
    return this.size = e.size, r
}
var T$ = g$;

function R$(t) {
    return this.__data__.get(t)
}
var d$ = R$;

function m$(t) {
    return this.__data__.has(t)
}
var x$ = m$,
    A$ = typeof dt == "object" && dt && dt.Object === Object && dt,
    cS = A$,
    S$ = cS,
    v$ = typeof self == "object" && self && self.Object === Object && self,
    b$ = S$ || v$ || Function("return this")(),
    mn = b$,
    L$ = mn,
    y$ = L$.Symbol,
    vf = y$,
    hd = vf,
    ES = Object.prototype,
    C$ = ES.hasOwnProperty,
    O$ = ES.toString,
    uo = hd ? hd.toStringTag : void 0;

function I$(t) {
    var e = C$.call(t, uo),
        r = t[uo];
    try {
        t[uo] = void 0;
        var n = !0
    } catch {}
    var s = O$.call(t);
    return n && (e ? t[uo] = r : delete t[uo]), s
}
var N$ = I$,
    U$ = Object.prototype,
    P$ = U$.toString;

function D$(t) {
    return P$.call(t)
}
var B$ = D$,
    pd = vf,
    w$ = N$,
    K$ = B$,
    $$ = "[object Null]",
    M$ = "[object Undefined]",
    _d = pd ? pd.toStringTag : void 0;

function k$(t) {
    return t == null ? t === void 0 ? M$ : $$ : _d && _d in Object(t) ? w$(t) : K$(t)
}
var wa = k$;

function G$(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function")
}
var xn = G$,
    V$ = wa,
    F$ = xn,
    W$ = "[object AsyncFunction]",
    H$ = "[object Function]",
    j$ = "[object GeneratorFunction]",
    X$ = "[object Proxy]";

function q$(t) {
    if (!F$(t)) return !1;
    var e = V$(t);
    return e == H$ || e == j$ || e == W$ || e == X$
}
var E0 = q$,
    Y$ = mn,
    z$ = Y$["__core-js_shared__"],
    J$ = z$,
    RE = J$,
    gd = function() {
        var t = /[^.]+$/.exec(RE && RE.keys && RE.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
    }();

function Z$(t) {
    return !!gd && gd in t
}
var Q$ = Z$,
    eM = Function.prototype,
    tM = eM.toString;

function rM(t) {
    if (t != null) {
        try {
            return tM.call(t)
        } catch {}
        try {
            return t + ""
        } catch {}
    }
    return ""
}
var hS = rM,
    nM = E0,
    iM = Q$,
    sM = xn,
    aM = hS,
    oM = /[\\^$.*+?()[\]{}|]/g,
    uM = /^\[object .+?Constructor\]$/,
    lM = Function.prototype,
    fM = Object.prototype,
    cM = lM.toString,
    EM = fM.hasOwnProperty,
    hM = RegExp("^" + cM.call(EM).replace(oM, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function pM(t) {
    if (!sM(t) || iM(t)) return !1;
    var e = nM(t) ? hM : uM;
    return e.test(aM(t))
}
var _M = pM;

function gM(t, e) {
    return t == null ? void 0 : t[e]
}
var TM = gM,
    RM = _M,
    dM = TM;

function mM(t, e) {
    var r = dM(t, e);
    return RM(r) ? r : void 0
}
var Ns = mM,
    xM = Ns,
    AM = mn,
    SM = xM(AM, "Map"),
    h0 = SM,
    vM = Ns,
    bM = vM(Object, "create"),
    bf = bM,
    Td = bf;

function LM() {
    this.__data__ = Td ? Td(null) : {}, this.size = 0
}
var yM = LM;

function CM(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
}
var OM = CM,
    IM = bf,
    NM = "__lodash_hash_undefined__",
    UM = Object.prototype,
    PM = UM.hasOwnProperty;

function DM(t) {
    var e = this.__data__;
    if (IM) {
        var r = e[t];
        return r === NM ? void 0 : r
    }
    return PM.call(e, t) ? e[t] : void 0
}
var BM = DM,
    wM = bf,
    KM = Object.prototype,
    $M = KM.hasOwnProperty;

function MM(t) {
    var e = this.__data__;
    return wM ? e[t] !== void 0 : $M.call(e, t)
}
var kM = MM,
    GM = bf,
    VM = "__lodash_hash_undefined__";

function FM(t, e) {
    var r = this.__data__;
    return this.size += this.has(t) ? 0 : 1, r[t] = GM && e === void 0 ? VM : e, this
}
var WM = FM,
    HM = yM,
    jM = OM,
    XM = BM,
    qM = kM,
    YM = WM;

function Ka(t) {
    var e = -1,
        r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r;) {
        var n = t[e];
        this.set(n[0], n[1])
    }
}
Ka.prototype.clear = HM;
Ka.prototype.delete = jM;
Ka.prototype.get = XM;
Ka.prototype.has = qM;
Ka.prototype.set = YM;
var zM = Ka,
    Rd = zM,
    JM = Sf,
    ZM = h0;

function QM() {
    this.size = 0, this.__data__ = {
        hash: new Rd,
        map: new(ZM || JM),
        string: new Rd
    }
}
var e2 = QM;

function t2(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
}
var r2 = t2,
    n2 = r2;

function i2(t, e) {
    var r = t.__data__;
    return n2(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map
}
var Lf = i2,
    s2 = Lf;

function a2(t) {
    var e = s2(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
}
var o2 = a2,
    u2 = Lf;

function l2(t) {
    return u2(this, t).get(t)
}
var f2 = l2,
    c2 = Lf;

function E2(t) {
    return c2(this, t).has(t)
}
var h2 = E2,
    p2 = Lf;

function _2(t, e) {
    var r = p2(this, t),
        n = r.size;
    return r.set(t, e), this.size += r.size == n ? 0 : 1, this
}
var g2 = _2,
    T2 = e2,
    R2 = o2,
    d2 = f2,
    m2 = h2,
    x2 = g2;

function $a(t) {
    var e = -1,
        r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r;) {
        var n = t[e];
        this.set(n[0], n[1])
    }
}
$a.prototype.clear = T2;
$a.prototype.delete = R2;
$a.prototype.get = d2;
$a.prototype.has = m2;
$a.prototype.set = x2;
var pS = $a,
    A2 = Sf,
    S2 = h0,
    v2 = pS,
    b2 = 200;

function L2(t, e) {
    var r = this.__data__;
    if (r instanceof A2) {
        var n = r.__data__;
        if (!S2 || n.length < b2 - 1) return n.push([t, e]), this.size = ++r.size, this;
        r = this.__data__ = new v2(n)
    }
    return r.set(t, e), this.size = r.size, this
}
var y2 = L2,
    C2 = Sf,
    O2 = _$,
    I2 = T$,
    N2 = d$,
    U2 = x$,
    P2 = y2;

function Ma(t) {
    var e = this.__data__ = new C2(t);
    this.size = e.size
}
Ma.prototype.clear = O2;
Ma.prototype.delete = I2;
Ma.prototype.get = N2;
Ma.prototype.has = U2;
Ma.prototype.set = P2;
var _S = Ma,
    D2 = Ns,
    B2 = function() {
        try {
            var t = D2(Object, "defineProperty");
            return t({}, "", {}), t
        } catch {}
    }(),
    gS = B2,
    dd = gS;

function w2(t, e, r) {
    e == "__proto__" && dd ? dd(t, e, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
    }) : t[e] = r
}
var p0 = w2,
    K2 = p0,
    $2 = xf;

function M2(t, e, r) {
    (r !== void 0 && !$2(t[e], r) || r === void 0 && !(e in t)) && K2(t, e, r)
}
var TS = M2;

function k2(t) {
    return function(e, r, n) {
        for (var s = -1, a = Object(e), l = n(e), f = l.length; f--;) {
            var E = l[t ? f : ++s];
            if (r(a[E], E, a) === !1) break
        }
        return e
    }
}
var G2 = k2,
    V2 = G2,
    F2 = V2(),
    W2 = F2,
    Kl = {
        exports: {}
    };
Kl.exports;
(function(t, e) {
    var r = mn,
        n = e && !e.nodeType && e,
        s = n && !0 && t && !t.nodeType && t,
        a = s && s.exports === n,
        l = a ? r.Buffer : void 0,
        f = l ? l.allocUnsafe : void 0;

    function E(h, _) {
        if (_) return h.slice();
        var R = h.length,
            T = f ? f(R) : new h.constructor(R);
        return h.copy(T), T
    }
    t.exports = E
})(Kl, Kl.exports);
var RS = Kl.exports,
    H2 = mn,
    j2 = H2.Uint8Array,
    X2 = j2,
    md = X2;

function q2(t) {
    var e = new t.constructor(t.byteLength);
    return new md(e).set(new md(t)), e
}
var _0 = q2,
    Y2 = _0;

function z2(t, e) {
    var r = e ? Y2(t.buffer) : t.buffer;
    return new t.constructor(r, t.byteOffset, t.length)
}
var dS = z2;

function J2(t, e) {
    var r = -1,
        n = t.length;
    for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
    return e
}
var mS = J2,
    Z2 = xn,
    xd = Object.create,
    Q2 = function() {
        function t() {}
        return function(e) {
            if (!Z2(e)) return {};
            if (xd) return xd(e);
            t.prototype = e;
            var r = new t;
            return t.prototype = void 0, r
        }
    }(),
    ek = Q2;

function tk(t, e) {
    return function(r) {
        return t(e(r))
    }
}
var xS = tk,
    rk = xS,
    nk = rk(Object.getPrototypeOf, Object),
    g0 = nk,
    ik = Object.prototype;

function sk(t) {
    var e = t && t.constructor,
        r = typeof e == "function" && e.prototype || ik;
    return t === r
}
var T0 = sk,
    ak = ek,
    ok = g0,
    uk = T0;

function lk(t) {
    return typeof t.constructor == "function" && !uk(t) ? ak(ok(t)) : {}
}
var AS = lk;

function fk(t) {
    return t != null && typeof t == "object"
}
var qi = fk,
    ck = wa,
    Ek = qi,
    hk = "[object Arguments]";

function pk(t) {
    return Ek(t) && ck(t) == hk
}
var _k = pk,
    Ad = _k,
    gk = qi,
    SS = Object.prototype,
    Tk = SS.hasOwnProperty,
    Rk = SS.propertyIsEnumerable,
    dk = Ad(function() {
        return arguments
    }()) ? Ad : function(t) {
        return gk(t) && Tk.call(t, "callee") && !Rk.call(t, "callee")
    },
    vS = dk,
    mk = Array.isArray,
    Yi = mk,
    xk = 9007199254740991;

function Ak(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= xk
}
var bS = Ak,
    Sk = E0,
    vk = bS;

function bk(t) {
    return t != null && vk(t.length) && !Sk(t)
}
var yf = bk,
    Lk = yf,
    yk = qi;

function Ck(t) {
    return yk(t) && Lk(t)
}
var Ok = Ck,
    $l = {
        exports: {}
    };

function Ik() {
    return !1
}
var Nk = Ik;
$l.exports;
(function(t, e) {
    var r = mn,
        n = Nk,
        s = e && !e.nodeType && e,
        a = s && !0 && t && !t.nodeType && t,
        l = a && a.exports === s,
        f = l ? r.Buffer : void 0,
        E = f ? f.isBuffer : void 0,
        h = E || n;
    t.exports = h
})($l, $l.exports);
var R0 = $l.exports,
    Uk = wa,
    Pk = g0,
    Dk = qi,
    Bk = "[object Object]",
    wk = Function.prototype,
    Kk = Object.prototype,
    LS = wk.toString,
    $k = Kk.hasOwnProperty,
    Mk = LS.call(Object);

function kk(t) {
    if (!Dk(t) || Uk(t) != Bk) return !1;
    var e = Pk(t);
    if (e === null) return !0;
    var r = $k.call(e, "constructor") && e.constructor;
    return typeof r == "function" && r instanceof r && LS.call(r) == Mk
}
var Gk = kk,
    Vk = wa,
    Fk = bS,
    Wk = qi,
    Hk = "[object Arguments]",
    jk = "[object Array]",
    Xk = "[object Boolean]",
    qk = "[object Date]",
    Yk = "[object Error]",
    zk = "[object Function]",
    Jk = "[object Map]",
    Zk = "[object Number]",
    Qk = "[object Object]",
    e3 = "[object RegExp]",
    t3 = "[object Set]",
    r3 = "[object String]",
    n3 = "[object WeakMap]",
    i3 = "[object ArrayBuffer]",
    s3 = "[object DataView]",
    a3 = "[object Float32Array]",
    o3 = "[object Float64Array]",
    u3 = "[object Int8Array]",
    l3 = "[object Int16Array]",
    f3 = "[object Int32Array]",
    c3 = "[object Uint8Array]",
    E3 = "[object Uint8ClampedArray]",
    h3 = "[object Uint16Array]",
    p3 = "[object Uint32Array]",
    Ct = {};
Ct[a3] = Ct[o3] = Ct[u3] = Ct[l3] = Ct[f3] = Ct[c3] = Ct[E3] = Ct[h3] = Ct[p3] = !0;
Ct[Hk] = Ct[jk] = Ct[i3] = Ct[Xk] = Ct[s3] = Ct[qk] = Ct[Yk] = Ct[zk] = Ct[Jk] = Ct[Zk] = Ct[Qk] = Ct[e3] = Ct[t3] = Ct[r3] = Ct[n3] = !1;

function _3(t) {
    return Wk(t) && Fk(t.length) && !!Ct[Vk(t)]
}
var g3 = _3;

function T3(t) {
    return function(e) {
        return t(e)
    }
}
var d0 = T3,
    Ml = {
        exports: {}
    };
Ml.exports;
(function(t, e) {
    var r = cS,
        n = e && !e.nodeType && e,
        s = n && !0 && t && !t.nodeType && t,
        a = s && s.exports === n,
        l = a && r.process,
        f = function() {
            try {
                var E = s && s.require && s.require("util").types;
                return E || l && l.binding && l.binding("util")
            } catch {}
        }();
    t.exports = f
})(Ml, Ml.exports);
var m0 = Ml.exports,
    R3 = g3,
    d3 = d0,
    Sd = m0,
    vd = Sd && Sd.isTypedArray,
    m3 = vd ? d3(vd) : R3,
    yS = m3;

function x3(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
}
var CS = x3,
    A3 = p0,
    S3 = xf,
    v3 = Object.prototype,
    b3 = v3.hasOwnProperty;

function L3(t, e, r) {
    var n = t[e];
    (!(b3.call(t, e) && S3(n, r)) || r === void 0 && !(e in t)) && A3(t, e, r)
}
var x0 = L3,
    y3 = x0,
    C3 = p0;

function O3(t, e, r, n) {
    var s = !r;
    r || (r = {});
    for (var a = -1, l = e.length; ++a < l;) {
        var f = e[a],
            E = n ? n(r[f], t[f], f, r, t) : void 0;
        E === void 0 && (E = t[f]), s ? C3(r, f, E) : y3(r, f, E)
    }
    return r
}
var Fo = O3;

function I3(t, e) {
    for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
    return n
}
var N3 = I3,
    U3 = 9007199254740991,
    P3 = /^(?:0|[1-9]\d*)$/;

function D3(t, e) {
    var r = typeof t;
    return e = e ?? U3, !!e && (r == "number" || r != "symbol" && P3.test(t)) && t > -1 && t % 1 == 0 && t < e
}
var A0 = D3,
    B3 = N3,
    w3 = vS,
    K3 = Yi,
    $3 = R0,
    M3 = A0,
    k3 = yS,
    G3 = Object.prototype,
    V3 = G3.hasOwnProperty;

function F3(t, e) {
    var r = K3(t),
        n = !r && w3(t),
        s = !r && !n && $3(t),
        a = !r && !n && !s && k3(t),
        l = r || n || s || a,
        f = l ? B3(t.length, String) : [],
        E = f.length;
    for (var h in t)(e || V3.call(t, h)) && !(l && (h == "length" || s && (h == "offset" || h == "parent") || a && (h == "buffer" || h == "byteLength" || h == "byteOffset") || M3(h, E))) && f.push(h);
    return f
}
var OS = F3;

function W3(t) {
    var e = [];
    if (t != null)
        for (var r in Object(t)) e.push(r);
    return e
}
var H3 = W3,
    j3 = xn,
    X3 = T0,
    q3 = H3,
    Y3 = Object.prototype,
    z3 = Y3.hasOwnProperty;

function J3(t) {
    if (!j3(t)) return q3(t);
    var e = X3(t),
        r = [];
    for (var n in t) n == "constructor" && (e || !z3.call(t, n)) || r.push(n);
    return r
}
var Z3 = J3,
    Q3 = OS,
    e4 = Z3,
    t4 = yf;

function r4(t) {
    return t4(t) ? Q3(t, !0) : e4(t)
}
var Wo = r4,
    n4 = Fo,
    i4 = Wo;

function s4(t) {
    return n4(t, i4(t))
}
var a4 = s4,
    bd = TS,
    o4 = RS,
    u4 = dS,
    l4 = mS,
    f4 = AS,
    Ld = vS,
    yd = Yi,
    c4 = Ok,
    E4 = R0,
    h4 = E0,
    p4 = xn,
    _4 = Gk,
    g4 = yS,
    Cd = CS,
    T4 = a4;

function R4(t, e, r, n, s, a, l) {
    var f = Cd(t, r),
        E = Cd(e, r),
        h = l.get(E);
    if (h) {
        bd(t, r, h);
        return
    }
    var _ = a ? a(f, E, r + "", t, e, l) : void 0,
        R = _ === void 0;
    if (R) {
        var T = yd(E),
            v = !T && E4(E),
            C = !T && !v && g4(E);
        _ = E, T || v || C ? yd(f) ? _ = f : c4(f) ? _ = l4(f) : v ? (R = !1, _ = o4(E, !0)) : C ? (R = !1, _ = u4(E, !0)) : _ = [] : _4(E) || Ld(E) ? (_ = f, Ld(f) ? _ = T4(f) : (!p4(f) || h4(f)) && (_ = f4(E))) : R = !1
    }
    R && (l.set(E, _), s(_, E, n, a, l), l.delete(E)), bd(t, r, _)
}
var d4 = R4,
    m4 = _S,
    x4 = TS,
    A4 = W2,
    S4 = d4,
    v4 = xn,
    b4 = Wo,
    L4 = CS;

function IS(t, e, r, n, s) {
    t !== e && A4(e, function(a, l) {
        if (s || (s = new m4), v4(a)) S4(t, e, l, r, IS, n, s);
        else {
            var f = n ? n(L4(t, l), a, l + "", t, e, s) : void 0;
            f === void 0 && (f = a), x4(t, l, f)
        }
    }, b4)
}
var y4 = IS;

function C4(t) {
    return t
}
var NS = C4;

function O4(t, e, r) {
    switch (r.length) {
        case 0:
            return t.call(e);
        case 1:
            return t.call(e, r[0]);
        case 2:
            return t.call(e, r[0], r[1]);
        case 3:
            return t.call(e, r[0], r[1], r[2])
    }
    return t.apply(e, r)
}
var I4 = O4,
    N4 = I4,
    Od = Math.max;

function U4(t, e, r) {
    return e = Od(e === void 0 ? t.length - 1 : e, 0),
        function() {
            for (var n = arguments, s = -1, a = Od(n.length - e, 0), l = Array(a); ++s < a;) l[s] = n[e + s];
            s = -1;
            for (var f = Array(e + 1); ++s < e;) f[s] = n[s];
            return f[e] = r(l), N4(t, this, f)
        }
}
var P4 = U4;

function D4(t) {
    return function() {
        return t
    }
}
var B4 = D4,
    w4 = B4,
    Id = gS,
    K4 = NS,
    $4 = Id ? function(t, e) {
        return Id(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: w4(e),
            writable: !0
        })
    } : K4,
    M4 = $4,
    k4 = 800,
    G4 = 16,
    V4 = Date.now;

function F4(t) {
    var e = 0,
        r = 0;
    return function() {
        var n = V4(),
            s = G4 - (n - r);
        if (r = n, s > 0) {
            if (++e >= k4) return arguments[0]
        } else e = 0;
        return t.apply(void 0, arguments)
    }
}
var W4 = F4,
    H4 = M4,
    j4 = W4,
    X4 = j4(H4),
    q4 = X4,
    Y4 = NS,
    z4 = P4,
    J4 = q4;

function Z4(t, e) {
    return J4(z4(t, e, Y4), t + "")
}
var Q4 = Z4,
    eG = xf,
    tG = yf,
    rG = A0,
    nG = xn;

function iG(t, e, r) {
    if (!nG(r)) return !1;
    var n = typeof e;
    return (n == "number" ? tG(r) && rG(e, r.length) : n == "string" && e in r) ? eG(r[e], t) : !1
}
var sG = iG,
    aG = Q4,
    oG = sG;

function uG(t) {
    return aG(function(e, r) {
        var n = -1,
            s = r.length,
            a = s > 1 ? r[s - 1] : void 0,
            l = s > 2 ? r[2] : void 0;
        for (a = t.length > 3 && typeof a == "function" ? (s--, a) : void 0, l && oG(r[0], r[1], l) && (a = s < 3 ? void 0 : a, s = 1), e = Object(e); ++n < s;) {
            var f = r[n];
            f && t(e, f, n, a)
        }
        return e
    })
}
var lG = uG,
    fG = y4,
    cG = lG,
    EG = cG(function(t, e, r) {
        fG(t, e, r)
    }),
    hG = EG;
const pG = Hi(hG);
class pa {
    static set(e) {
        if (e && this.isSupported(e)) {
            this.locale = e;
            return
        }
        this.locale = this.getPreferredDeviceLocale()
    }
    static getPreferredDeviceLocale() {
        const e = navigator.languages;
        for (let r = 0; r < e.length; r++)
            if (this.isSupported(e[r])) return e[r];
        return this.supported[0]
    }
    static isSupported(e) {
        return Object.values(this.supported).includes(e)
    }
    static mergeMessages(...e) {
        return pG(e[0], ...e)
    }
}
ge(pa, "locale"), ge(pa, "supported", ["en", "pl"]);
var Oi;
let Ui = (Oi = class {
    static get serverUrl() {
        const e = this.getQueryParam("server") ?? this.getQueryParam("s");
        return !e || e === "live" ? "ecast.jackboxgames.com" : e === "local" ? "https://localhost" : e.includes("localhost") ? e : `${e}.jackboxgames.com`
    }
    static isDevelopment() {
        return window.location.hostname === "dev.jackbox.tv" || window.location.hostname === "localhost"
    }
    static isProduction() {
        return window.location.hostname === "jackbox.tv"
    }
    static get isCanvasSupported() {
        const e = document.createElement("canvas");
        return !!(e.getContext && e.getContext("2d"))
    }
    static htmlUnescape(e) {
        return String(e).replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&")
    }
    static htmlEscape(e) {
        return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    static sanitize(e) {
        const r = this.sanitizeInput(e).replace(/'/g, "’");
        return this.htmlEscape(r).trim()
    }
    static sanitizeName(e) {
        return e.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u017F\u2026!?*$+\-'_ .,]/gi, "").replace(/'/g, "’")
    }
    static sanitizeInput(e) {
        return e = e.replace("…", "..."), e.replace(/[^\u00A1\u0020-\u007E\u00BF-\u017F’]/gi, "")
    }
    static sanitizeEmoji(e) {
        return e.replace(/(\u00a9|\u00ae|[\u2000-\u2017]|[\u2020-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/, "")
    }
    static safeText(e) {
        const r = document.createElement("div");
        return r.textContent = e, r.innerHTML
    }
    static htmlTagsToBBCode(e, r) {
        if (!r.length) throw new Error("[Utils.htmlTagsToBBCode] No tag pairs were passed in");
        return r.reduce((n, s) => (n.replaceAll(`<${s[0]}>`, `[${s[1]}]`), n.replaceAll(`</${s[0]}>`, `</${s[1]}>`), n), e)
    }
    static hexToRgb(e) {
        const r = new ArrayBuffer(4);
        new DataView(r).setUint32(0, parseInt(e.replace("#", ""), 16), !1);
        const s = new Uint8Array(r);
        return `${s[1]},${s[2]},${s[3]}`
    }
    static adjustColor(e, r) {
        let n = !1,
            s = e;
        s[0] === "#" && (s = s.slice(1), n = !0);
        const a = parseInt(s, 16),
            l = Math.min(Math.max(0, (a >> 16) * r), 255),
            f = Math.min(Math.max(0, (a >> 8 & 255) * r), 255);
        let h = (Math.min(Math.max(0, (a & 255) * r), 255) | f << 8 | l << 16).toString(16);
        for (; h.length < s.length;) h = `0${h}`;
        return (n ? "#" : "") + h
    }
    static isInTolerance(e, r, n) {
        return !(Math.abs(e.x - r.x) < n || Math.abs(e.y - r.y) > n)
    }
    static getDistanceBetweenPoints(e, r) {
        const n = [e.x - r.x, e.y - r.y],
            s = Math.hypot(...n);
        return Math.round(s * 100) / 100
    }
    static getMidpoint(e, r) {
        return {
            x: (e.x + r.x) / 2,
            y: (e.y + r.y) / 2
        }
    }
    static getAngleBetweenPoints(e, r) {
        let s = Math.atan2(r.y - e.y, r.x - e.x) * (180 / Math.PI);
        return s < 0 && (s += 360), 360 - s
    }
    static getAngularDistance(e, r) {
        let n = (r - e) % 360;
        const s = n < 0 ? 1 : -1;
        return n = Math.abs(n), n > 180 ? s * (360 - n) : s * n
    }
    static getVelocity(e, r, n, s) {
        return this.getDistanceBetweenPoints(e, n) / (s - r)
    }
    static isInsideElement(e, r) {
        const n = r.getBoundingClientRect();
        return !(e.x < n.left || e.x > n.left + n.width || e.y < n.top || e.y > n.top + n.height)
    }
    static cyrb128(e) {
        let r = 1779033703,
            n = 3144134277,
            s = 1013904242,
            a = 2773480762;
        for (let l = 0, f; l < e.length; l++) f = e.charCodeAt(l), r = n ^ Math.imul(r ^ f, 597399067), n = s ^ Math.imul(n ^ f, 2869860233), s = a ^ Math.imul(s ^ f, 951274213), a = r ^ Math.imul(a ^ f, 2716044179);
        return r = Math.imul(s ^ r >>> 18, 597399067), n = Math.imul(a ^ n >>> 22, 2869860233), s = Math.imul(r ^ s >>> 17, 951274213), a = Math.imul(n ^ a >>> 19, 2716044179), [(r ^ n ^ s ^ a) >>> 0, (n ^ r) >>> 0, (s ^ r) >>> 0, (a ^ r) >>> 0]
    }
    static sfc32(e, r, n, s) {
        return function() {
            e >>>= 0, r >>>= 0, n >>>= 0, s >>>= 0;
            let l = e + r | 0;
            return e = r ^ r >>> 9, r = n + (n << 3) | 0, n = n << 21 | n >>> 11, s = s + 1 | 0, l = l + s | 0, n = n + l | 0, (l >>> 0) / 4294967296
        }
    }
}, ge(Oi, "queryParams", new URLSearchParams(window.location.search)), ge(Oi, "getQueryParam", e => Oi.queryParams.get(e)), ge(Oi, "sleep", e => new Promise(r => {
    window.setTimeout(r, e)
})), Oi);
class Mt {
    static get namespace() {
        var e;
        return ((e = window.tv.storage) == null ? void 0 : e.namespace) ?? this.defaultNamespace
    }
    static get isDisabled() {
        var e;
        return ((e = window.tv.storage) == null ? void 0 : e.isDisabled) ?? !1
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
    static setup(e, r) {
        delete window.tv.storage, window.tv.storage = {
            namespace: Ui.getQueryParam("namespace") ?? Ui.getQueryParam("ns") ?? this.defaultNamespace,
            isDisabled: Ui.queryParams.has("incognito") || Ui.queryParams.has("nc")
        }, e && (window.tv.storage.tag = e), r && (window.tv.storage.code = r.toLowerCase(), this.clearCodeScopedKeys(window.tv.storage.code))
    }
    static get(e, r) {
        return this.isSupported ? window.localStorage.getItem(this.getScopedKey(e, r)) : null
    }
    static set(e, r, n = "none") {
        if (this.isSupported) return window.localStorage.setItem(this.getScopedSetKey(e, n), r)
    }
    static remove(e, r) {
        if (this.isSupported) return window.localStorage.removeItem(this.getScopedKey(e, r))
    }
    static setTag(e) {
        const r = e.toLowerCase(),
            n = this.get("tags") ?? "[]",
            s = r.split("-")[0];
        let a = JSON.parse(n);
        a = a.filter(l => {
            const f = l.split("-")[0];
            return s !== f
        }), a.push(r), this.set("tags", JSON.stringify(a))
    }
    static getScopedKey(e, r) {
        const n = `${this.namespace}:${e}`,
            s = this.tag ? `${this.namespace}:${e}:tag:${this.tag}` : null,
            a = this.code ? `${this.namespace}:${e}:code:${this.code}` : null;
        if (r === "none") return n;
        if (r === "tag") {
            if (!s) throw new Error('[Storage] requested "tag" scope but tv.storage.tag is undefined');
            return s
        }
        if (r === "code") {
            if (!a) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
            return a
        }
        return a && window.localStorage.getItem(a) !== null ? a : s && window.localStorage.getItem(s) !== null ? s : n
    }
    static getScopedSetKey(e, r = "none") {
        if (r === "tag") {
            if (!this.tag) throw new Error('[Storage] requested "room" scope but tv.storage.tag is undefined');
            return `${this.namespace}:${e}:tag:${this.tag}`
        }
        if (r === "code") {
            if (!this.code) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
            return `${this.namespace}:${e}:code:${this.code}`
        }
        return `${this.namespace}:${e}`
    }
    static clearCodeScopedKeys(e) {
        this.isSupported && Object.keys(window.localStorage).forEach(r => {
            const n = r.split(":code:");
            n.length <= 1 || n[1] !== e && window.localStorage.removeItem(r)
        })
    }
}
ge(Mt, "defaultNamespace", "tv");
class xo {
    constructor() {
        ge(this, "artifacts");
        this.migrate(), this.artifacts = this.list()
    }
    get hasUnviewed() {
        return this.artifacts.some(e => !e.isViewed)
    }
    getUrl(e, r) {
        return r.galleryId ? `/gallery/${r.galleryId}/${e.artifactId}` : e.isTest ? `http://games-test.jackbox.tv/artifact/${e.categoryId}/${e.artifactId}/` : `https://games.jackbox.tv/artifact/${e.categoryId}/${e.artifactId}/`
    }
    getLocalArtifact(e) {
        const r = new Intl.DateTimeFormat(pa.locale, {
                year: "numeric",
                month: "short",
                day: "numeric"
            }),
            n = fS(e.categoryId);
        if (!n) throw new Error(`[Artifacts] Unknown game with categoryId ${e.categoryId}`);
        const s = new Date(e.time),
            a = r.format(s),
            l = this.getUrl(e, n);
        return {
            ...e,
            gameName: n.name ?? "",
            date: a,
            url: l
        }
    }
    list() {
        if (!Mt.isSupported) return [];
        const e = Date.now(),
            r = Mt.get("artifacts");
        if (!r) return [];
        try {
            return JSON.parse(r).filter(s => e - s.time < 525600 * 60 * 1e3).map(s => this.getLocalArtifact(s))
        } catch {
            return console.warn("[Artifacts] Unable to parse artifacts array"), []
        }
    }
    persist() {
        const e = this.artifacts.map(r => ({
            artifactId: r.artifactId,
            categoryId: r.categoryId,
            isTest: r.isTest,
            isViewed: r.isViewed,
            time: r.time
        }));
        Mt.set("artifacts", JSON.stringify(e))
    }
    setAsViewed(e) {
        if (Mt.isSupported && this.artifacts[e]) try {
            this.artifacts[e].isViewed = !0, this.persist()
        } catch {
            console.warn(`[Artifacts] Unable to mark artifact ${e} as viewed`)
        }
    }
    add(e) {
        var n;
        if (!Mt.isSupported) return;
        const r = {
            categoryId: e.categoryId,
            artifactId: e.artifactId,
            isTest: ((n = e.rootId) == null ? void 0 : n.includes("test")) ?? !1,
            time: new Date().getTime(),
            isViewed: !1
        };
        this.artifacts.unshift(this.getLocalArtifact(r)), this.persist()
    }
    remove(e) {
        if (Mt.isSupported) try {
            this.artifacts.splice(e, 1), this.persist()
        } catch {
            console.warn("[Artifacts] Unable to remove artifact")
        }
    }
    static setAsViewed(e) {
        new xo().setAsViewed(e)
    }
    static add(e) {
        new xo().add(e)
    }
    static remove(e) {
        new xo().remove(e)
    }
    migrate() {
        const e = Mt.get("galleries");
        if (!e) return;
        const n = JSON.parse(e).map(a => {
                const l = a.url.split("/"),
                    f = l[l.length - 2],
                    E = a.url.includes("games-test");
                return {
                    categoryId: a.categoryId,
                    artifactId: f,
                    isTest: E,
                    time: a.time,
                    isViewed: a.viewed
                }
            }),
            s = JSON.parse(Mt.get("artifacts") ?? "[]");
        Mt.set("artifacts", JSON.stringify([...n, ...s])), Mt.remove("galleries")
    }
}
var Ih = {
    exports: {}
};
(function(t, e) {
    var r = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof dt < "u" && dt,
        n = function() {
            function a() {
                this.fetch = !1, this.DOMException = r.DOMException
            }
            return a.prototype = r, new a
        }();
    (function(a) {
        (function(l) {
            var f = typeof a < "u" && a || typeof self < "u" && self || typeof f < "u" && f,
                E = {
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

            function h(H) {
                return H && DataView.prototype.isPrototypeOf(H)
            }
            if (E.arrayBuffer) var _ = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                R = ArrayBuffer.isView || function(H) {
                    return H && _.indexOf(Object.prototype.toString.call(H)) > -1
                };

            function T(H) {
                if (typeof H != "string" && (H = String(H)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(H) || H === "") throw new TypeError('Invalid character in header field name: "' + H + '"');
                return H.toLowerCase()
            }

            function v(H) {
                return typeof H != "string" && (H = String(H)), H
            }

            function C(H) {
                var Z = {
                    next: function() {
                        var pe = H.shift();
                        return {
                            done: pe === void 0,
                            value: pe
                        }
                    }
                };
                return E.iterable && (Z[Symbol.iterator] = function() {
                    return Z
                }), Z
            }

            function U(H) {
                this.map = {}, H instanceof U ? H.forEach(function(Z, pe) {
                    this.append(pe, Z)
                }, this) : Array.isArray(H) ? H.forEach(function(Z) {
                    this.append(Z[0], Z[1])
                }, this) : H && Object.getOwnPropertyNames(H).forEach(function(Z) {
                    this.append(Z, H[Z])
                }, this)
            }
            U.prototype.append = function(H, Z) {
                H = T(H), Z = v(Z);
                var pe = this.map[H];
                this.map[H] = pe ? pe + ", " + Z : Z
            }, U.prototype.delete = function(H) {
                delete this.map[T(H)]
            }, U.prototype.get = function(H) {
                return H = T(H), this.has(H) ? this.map[H] : null
            }, U.prototype.has = function(H) {
                return this.map.hasOwnProperty(T(H))
            }, U.prototype.set = function(H, Z) {
                this.map[T(H)] = v(Z)
            }, U.prototype.forEach = function(H, Z) {
                for (var pe in this.map) this.map.hasOwnProperty(pe) && H.call(Z, this.map[pe], pe, this)
            }, U.prototype.keys = function() {
                var H = [];
                return this.forEach(function(Z, pe) {
                    H.push(pe)
                }), C(H)
            }, U.prototype.values = function() {
                var H = [];
                return this.forEach(function(Z) {
                    H.push(Z)
                }), C(H)
            }, U.prototype.entries = function() {
                var H = [];
                return this.forEach(function(Z, pe) {
                    H.push([pe, Z])
                }), C(H)
            }, E.iterable && (U.prototype[Symbol.iterator] = U.prototype.entries);

            function B(H) {
                if (H.bodyUsed) return Promise.reject(new TypeError("Already read"));
                H.bodyUsed = !0
            }

            function y(H) {
                return new Promise(function(Z, pe) {
                    H.onload = function() {
                        Z(H.result)
                    }, H.onerror = function() {
                        pe(H.error)
                    }
                })
            }

            function V(H) {
                var Z = new FileReader,
                    pe = y(Z);
                return Z.readAsArrayBuffer(H), pe
            }

            function X(H) {
                var Z = new FileReader,
                    pe = y(Z);
                return Z.readAsText(H), pe
            }

            function M(H) {
                for (var Z = new Uint8Array(H), pe = new Array(Z.length), Re = 0; Re < Z.length; Re++) pe[Re] = String.fromCharCode(Z[Re]);
                return pe.join("")
            }

            function W(H) {
                if (H.slice) return H.slice(0);
                var Z = new Uint8Array(H.byteLength);
                return Z.set(new Uint8Array(H)), Z.buffer
            }

            function ee() {
                return this.bodyUsed = !1, this._initBody = function(H) {
                    this.bodyUsed = this.bodyUsed, this._bodyInit = H, H ? typeof H == "string" ? this._bodyText = H : E.blob && Blob.prototype.isPrototypeOf(H) ? this._bodyBlob = H : E.formData && FormData.prototype.isPrototypeOf(H) ? this._bodyFormData = H : E.searchParams && URLSearchParams.prototype.isPrototypeOf(H) ? this._bodyText = H.toString() : E.arrayBuffer && E.blob && h(H) ? (this._bodyArrayBuffer = W(H.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : E.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(H) || R(H)) ? this._bodyArrayBuffer = W(H) : this._bodyText = H = Object.prototype.toString.call(H) : this._bodyText = "", this.headers.get("content-type") || (typeof H == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : E.searchParams && URLSearchParams.prototype.isPrototypeOf(H) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, E.blob && (this.blob = function() {
                    var H = B(this);
                    if (H) return H;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    if (this._bodyArrayBuffer) {
                        var H = B(this);
                        return H || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                    } else return this.blob().then(V)
                }), this.text = function() {
                    var H = B(this);
                    if (H) return H;
                    if (this._bodyBlob) return X(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(M(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, E.formData && (this.formData = function() {
                    return this.text().then(Se)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            var te = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function fe(H) {
                var Z = H.toUpperCase();
                return te.indexOf(Z) > -1 ? Z : H
            }

            function he(H, Z) {
                if (!(this instanceof he)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                Z = Z || {};
                var pe = Z.body;
                if (H instanceof he) {
                    if (H.bodyUsed) throw new TypeError("Already read");
                    this.url = H.url, this.credentials = H.credentials, Z.headers || (this.headers = new U(H.headers)), this.method = H.method, this.mode = H.mode, this.signal = H.signal, !pe && H._bodyInit != null && (pe = H._bodyInit, H.bodyUsed = !0)
                } else this.url = String(H);
                if (this.credentials = Z.credentials || this.credentials || "same-origin", (Z.headers || !this.headers) && (this.headers = new U(Z.headers)), this.method = fe(Z.method || this.method || "GET"), this.mode = Z.mode || this.mode || null, this.signal = Z.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && pe) throw new TypeError("Body not allowed for GET or HEAD requests");
                if (this._initBody(pe), (this.method === "GET" || this.method === "HEAD") && (Z.cache === "no-store" || Z.cache === "no-cache")) {
                    var Re = /([?&])_=[^&]*/;
                    if (Re.test(this.url)) this.url = this.url.replace(Re, "$1_=" + new Date().getTime());
                    else {
                        var Be = /\?/;
                        this.url += (Be.test(this.url) ? "&" : "?") + "_=" + new Date().getTime()
                    }
                }
            }
            he.prototype.clone = function() {
                return new he(this, {
                    body: this._bodyInit
                })
            };

            function Se(H) {
                var Z = new FormData;
                return H.trim().split("&").forEach(function(pe) {
                    if (pe) {
                        var Re = pe.split("="),
                            Be = Re.shift().replace(/\+/g, " "),
                            Le = Re.join("=").replace(/\+/g, " ");
                        Z.append(decodeURIComponent(Be), decodeURIComponent(Le))
                    }
                }), Z
            }

            function Me(H) {
                var Z = new U,
                    pe = H.replace(/\r?\n[\t ]+/g, " ");
                return pe.split("\r").map(function(Re) {
                    return Re.indexOf(`
`) === 0 ? Re.substr(1, Re.length) : Re
                }).forEach(function(Re) {
                    var Be = Re.split(":"),
                        Le = Be.shift().trim();
                    if (Le) {
                        var Ce = Be.join(":").trim();
                        Z.append(Le, Ce)
                    }
                }), Z
            }
            ee.call(he.prototype);

            function Ee(H, Z) {
                if (!(this instanceof Ee)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                Z || (Z = {}), this.type = "default", this.status = Z.status === void 0 ? 200 : Z.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = Z.statusText === void 0 ? "" : "" + Z.statusText, this.headers = new U(Z.headers), this.url = Z.url || "", this._initBody(H)
            }
            ee.call(Ee.prototype), Ee.prototype.clone = function() {
                return new Ee(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new U(this.headers),
                    url: this.url
                })
            }, Ee.error = function() {
                var H = new Ee(null, {
                    status: 0,
                    statusText: ""
                });
                return H.type = "error", H
            };
            var Oe = [301, 302, 303, 307, 308];
            Ee.redirect = function(H, Z) {
                if (Oe.indexOf(Z) === -1) throw new RangeError("Invalid status code");
                return new Ee(null, {
                    status: Z,
                    headers: {
                        location: H
                    }
                })
            }, l.DOMException = f.DOMException;
            try {
                new l.DOMException
            } catch {
                l.DOMException = function(Z, pe) {
                    this.message = Z, this.name = pe;
                    var Re = Error(Z);
                    this.stack = Re.stack
                }, l.DOMException.prototype = Object.create(Error.prototype), l.DOMException.prototype.constructor = l.DOMException
            }

            function He(H, Z) {
                return new Promise(function(pe, Re) {
                    var Be = new he(H, Z);
                    if (Be.signal && Be.signal.aborted) return Re(new l.DOMException("Aborted", "AbortError"));
                    var Le = new XMLHttpRequest;

                    function Ce() {
                        Le.abort()
                    }
                    Le.onload = function() {
                        var ze = {
                            status: Le.status,
                            statusText: Le.statusText,
                            headers: Me(Le.getAllResponseHeaders() || "")
                        };
                        ze.url = "responseURL" in Le ? Le.responseURL : ze.headers.get("X-Request-URL");
                        var wt = "response" in Le ? Le.response : Le.responseText;
                        setTimeout(function() {
                            pe(new Ee(wt, ze))
                        }, 0)
                    }, Le.onerror = function() {
                        setTimeout(function() {
                            Re(new TypeError("Network request failed"))
                        }, 0)
                    }, Le.ontimeout = function() {
                        setTimeout(function() {
                            Re(new TypeError("Network request failed"))
                        }, 0)
                    }, Le.onabort = function() {
                        setTimeout(function() {
                            Re(new l.DOMException("Aborted", "AbortError"))
                        }, 0)
                    };

                    function it(ze) {
                        try {
                            return ze === "" && f.location.href ? f.location.href : ze
                        } catch {
                            return ze
                        }
                    }
                    Le.open(Be.method, it(Be.url), !0), Be.credentials === "include" ? Le.withCredentials = !0 : Be.credentials === "omit" && (Le.withCredentials = !1), "responseType" in Le && (E.blob ? Le.responseType = "blob" : E.arrayBuffer && Be.headers.get("Content-Type") && Be.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (Le.responseType = "arraybuffer")), Z && typeof Z.headers == "object" && !(Z.headers instanceof U) ? Object.getOwnPropertyNames(Z.headers).forEach(function(ze) {
                        Le.setRequestHeader(ze, v(Z.headers[ze]))
                    }) : Be.headers.forEach(function(ze, wt) {
                        Le.setRequestHeader(wt, ze)
                    }), Be.signal && (Be.signal.addEventListener("abort", Ce), Le.onreadystatechange = function() {
                        Le.readyState === 4 && Be.signal.removeEventListener("abort", Ce)
                    }), Le.send(typeof Be._bodyInit > "u" ? null : Be._bodyInit)
                })
            }
            return He.polyfill = !0, f.fetch || (f.fetch = He, f.Headers = U, f.Request = he, f.Response = Ee), l.Headers = U, l.Request = he, l.Response = Ee, l.fetch = He, l
        })({})
    })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
    var s = r.fetch ? r : n;
    e = s.fetch, e.default = s.fetch, e.fetch = s.fetch, e.Headers = s.Headers, e.Request = s.Request, e.Response = s.Response, t.exports = e
})(Ih, Ih.exports);
var _G = Ih.exports,
    gG = function() {
        if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var e = {},
            r = Symbol("test"),
            n = Object(r);
        if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return !1;
        var s = 42;
        e[r] = s;
        for (r in e) return !1;
        if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
        var a = Object.getOwnPropertySymbols(e);
        if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r)) return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
            var l = Object.getOwnPropertyDescriptor(e, r);
            if (l.value !== s || l.enumerable !== !0) return !1
        }
        return !0
    },
    Nd = typeof Symbol < "u" && Symbol,
    TG = gG,
    RG = function() {
        return typeof Nd != "function" || typeof Symbol != "function" || typeof Nd("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : TG()
    },
    dG = "Function.prototype.bind called on incompatible ",
    dE = Array.prototype.slice,
    mG = Object.prototype.toString,
    xG = "[object Function]",
    AG = function(e) {
        var r = this;
        if (typeof r != "function" || mG.call(r) !== xG) throw new TypeError(dG + r);
        for (var n = dE.call(arguments, 1), s, a = function() {
                if (this instanceof s) {
                    var _ = r.apply(this, n.concat(dE.call(arguments)));
                    return Object(_) === _ ? _ : this
                } else return r.apply(e, n.concat(dE.call(arguments)))
            }, l = Math.max(0, r.length - n.length), f = [], E = 0; E < l; E++) f.push("$" + E);
        if (s = Function("binder", "return function (" + f.join(",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
            var h = function() {};
            h.prototype = r.prototype, s.prototype = new h, h.prototype = null
        }
        return s
    },
    SG = AG,
    S0 = Function.prototype.bind || SG,
    vG = S0,
    bG = vG.call(Function.call, Object.prototype.hasOwnProperty),
    nt, ya = SyntaxError,
    US = Function,
    _a = TypeError,
    mE = function(t) {
        try {
            return US('"use strict"; return (' + t + ").constructor;")()
        } catch {}
    },
    bs = Object.getOwnPropertyDescriptor;
if (bs) try {
    bs({}, "")
} catch {
    bs = null
}
var xE = function() {
        throw new _a
    },
    LG = bs ? function() {
        try {
            return arguments.callee, xE
        } catch {
            try {
                return bs(arguments, "callee").get
            } catch {
                return xE
            }
        }
    }() : xE,
    Zs = RG(),
    vi = Object.getPrototypeOf || function(t) {
        return t.__proto__
    },
    ta = {},
    yG = typeof Uint8Array > "u" ? nt : vi(Uint8Array),
    ga = {
        "%AggregateError%": typeof AggregateError > "u" ? nt : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? nt : ArrayBuffer,
        "%ArrayIteratorPrototype%": Zs ? vi([][Symbol.iterator]()) : nt,
        "%AsyncFromSyncIteratorPrototype%": nt,
        "%AsyncFunction%": ta,
        "%AsyncGenerator%": ta,
        "%AsyncGeneratorFunction%": ta,
        "%AsyncIteratorPrototype%": ta,
        "%Atomics%": typeof Atomics > "u" ? nt : Atomics,
        "%BigInt%": typeof BigInt > "u" ? nt : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView > "u" ? nt : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array > "u" ? nt : Float32Array,
        "%Float64Array%": typeof Float64Array > "u" ? nt : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? nt : FinalizationRegistry,
        "%Function%": US,
        "%GeneratorFunction%": ta,
        "%Int8Array%": typeof Int8Array > "u" ? nt : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? nt : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? nt : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": Zs ? vi(vi([][Symbol.iterator]())) : nt,
        "%JSON%": typeof JSON == "object" ? JSON : nt,
        "%Map%": typeof Map > "u" ? nt : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !Zs ? nt : vi(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise > "u" ? nt : Promise,
        "%Proxy%": typeof Proxy > "u" ? nt : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect > "u" ? nt : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set > "u" ? nt : Set,
        "%SetIteratorPrototype%": typeof Set > "u" || !Zs ? nt : vi(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? nt : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": Zs ? vi("" [Symbol.iterator]()) : nt,
        "%Symbol%": Zs ? Symbol : nt,
        "%SyntaxError%": ya,
        "%ThrowTypeError%": LG,
        "%TypedArray%": yG,
        "%TypeError%": _a,
        "%Uint8Array%": typeof Uint8Array > "u" ? nt : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? nt : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? nt : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? nt : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? nt : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? nt : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? nt : WeakSet
    },
    CG = function t(e) {
        var r;
        if (e === "%AsyncFunction%") r = mE("async function () {}");
        else if (e === "%GeneratorFunction%") r = mE("function* () {}");
        else if (e === "%AsyncGeneratorFunction%") r = mE("async function* () {}");
        else if (e === "%AsyncGenerator%") {
            var n = t("%AsyncGeneratorFunction%");
            n && (r = n.prototype)
        } else if (e === "%AsyncIteratorPrototype%") {
            var s = t("%AsyncGenerator%");
            s && (r = vi(s.prototype))
        }
        return ga[e] = r, r
    },
    Ud = {
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
    Ho = S0,
    kl = bG,
    OG = Ho.call(Function.call, Array.prototype.concat),
    IG = Ho.call(Function.apply, Array.prototype.splice),
    Pd = Ho.call(Function.call, String.prototype.replace),
    Gl = Ho.call(Function.call, String.prototype.slice),
    NG = Ho.call(Function.call, RegExp.prototype.exec),
    UG = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    PG = /\\(\\)?/g,
    DG = function(e) {
        var r = Gl(e, 0, 1),
            n = Gl(e, -1);
        if (r === "%" && n !== "%") throw new ya("invalid intrinsic syntax, expected closing `%`");
        if (n === "%" && r !== "%") throw new ya("invalid intrinsic syntax, expected opening `%`");
        var s = [];
        return Pd(e, UG, function(a, l, f, E) {
            s[s.length] = f ? Pd(E, PG, "$1") : l || a
        }), s
    },
    BG = function(e, r) {
        var n = e,
            s;
        if (kl(Ud, n) && (s = Ud[n], n = "%" + s[0] + "%"), kl(ga, n)) {
            var a = ga[n];
            if (a === ta && (a = CG(n)), typeof a > "u" && !r) throw new _a("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: s,
                name: n,
                value: a
            }
        }
        throw new ya("intrinsic " + e + " does not exist!")
    },
    v0 = function(e, r) {
        if (typeof e != "string" || e.length === 0) throw new _a("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof r != "boolean") throw new _a('"allowMissing" argument must be a boolean');
        if (NG(/^%?[^%]*%?$/g, e) === null) throw new ya("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var n = DG(e),
            s = n.length > 0 ? n[0] : "",
            a = BG("%" + s + "%", r),
            l = a.name,
            f = a.value,
            E = !1,
            h = a.alias;
        h && (s = h[0], IG(n, OG([0, 1], h)));
        for (var _ = 1, R = !0; _ < n.length; _ += 1) {
            var T = n[_],
                v = Gl(T, 0, 1),
                C = Gl(T, -1);
            if ((v === '"' || v === "'" || v === "`" || C === '"' || C === "'" || C === "`") && v !== C) throw new ya("property names with quotes must have matching quotes");
            if ((T === "constructor" || !R) && (E = !0), s += "." + T, l = "%" + s + "%", kl(ga, l)) f = ga[l];
            else if (f != null) {
                if (!(T in f)) {
                    if (!r) throw new _a("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (bs && _ + 1 >= n.length) {
                    var U = bs(f, T);
                    R = !!U, R && "get" in U && !("originalValue" in U.get) ? f = U.get : f = f[T]
                } else R = kl(f, T), f = f[T];
                R && !E && (ga[l] = f)
            }
        }
        return f
    },
    PS = {
        exports: {}
    };
(function(t) {
    var e = S0,
        r = v0,
        n = r("%Function.prototype.apply%"),
        s = r("%Function.prototype.call%"),
        a = r("%Reflect.apply%", !0) || e.call(s, n),
        l = r("%Object.getOwnPropertyDescriptor%", !0),
        f = r("%Object.defineProperty%", !0),
        E = r("%Math.max%");
    if (f) try {
        f({}, "a", {
            value: 1
        })
    } catch {
        f = null
    }
    t.exports = function(R) {
        var T = a(e, s, arguments);
        if (l && f) {
            var v = l(T, "length");
            v.configurable && f(T, "length", {
                value: 1 + E(0, R.length - (arguments.length - 1))
            })
        }
        return T
    };
    var h = function() {
        return a(e, n, arguments)
    };
    f ? f(t.exports, "apply", {
        value: h
    }) : t.exports.apply = h
})(PS);
var wG = PS.exports,
    DS = v0,
    BS = wG,
    KG = BS(DS("String.prototype.indexOf")),
    $G = function(e, r) {
        var n = DS(e, !!r);
        return typeof n == "function" && KG(e, ".prototype.") > -1 ? BS(n) : n
    };
const MG = {},
    kG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: MG
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    GG = pK(kG);
var b0 = typeof Map == "function" && Map.prototype,
    AE = Object.getOwnPropertyDescriptor && b0 ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    Vl = b0 && AE && typeof AE.get == "function" ? AE.get : null,
    VG = b0 && Map.prototype.forEach,
    L0 = typeof Set == "function" && Set.prototype,
    SE = Object.getOwnPropertyDescriptor && L0 ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    Fl = L0 && SE && typeof SE.get == "function" ? SE.get : null,
    FG = L0 && Set.prototype.forEach,
    WG = typeof WeakMap == "function" && WeakMap.prototype,
    Ao = WG ? WeakMap.prototype.has : null,
    HG = typeof WeakSet == "function" && WeakSet.prototype,
    So = HG ? WeakSet.prototype.has : null,
    jG = typeof WeakRef == "function" && WeakRef.prototype,
    Dd = jG ? WeakRef.prototype.deref : null,
    XG = Boolean.prototype.valueOf,
    qG = Object.prototype.toString,
    YG = Function.prototype.toString,
    zG = String.prototype.match,
    y0 = String.prototype.slice,
    Pi = String.prototype.replace,
    JG = String.prototype.toUpperCase,
    Bd = String.prototype.toLowerCase,
    wS = RegExp.prototype.test,
    wd = Array.prototype.concat,
    Nn = Array.prototype.join,
    ZG = Array.prototype.slice,
    Kd = Math.floor,
    Nh = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    vE = Object.getOwnPropertySymbols,
    Uh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    Ca = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    Tr = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Ca || !0) ? Symbol.toStringTag : null,
    KS = Object.prototype.propertyIsEnumerable,
    $d = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__
    } : null);

function Md(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || wS.call(/e/, e)) return e;
    var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var n = t < 0 ? -Kd(-t) : Kd(t);
        if (n !== t) {
            var s = String(n),
                a = y0.call(e, s.length + 1);
            return Pi.call(s, r, "$&_") + "." + Pi.call(Pi.call(a, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return Pi.call(e, r, "$&_")
}
var Ph = GG,
    kd = Ph.custom,
    Gd = MS(kd) ? kd : null,
    QG = function t(e, r, n, s) {
        var a = r || {};
        if (bi(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (bi(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var l = bi(a, "customInspect") ? a.customInspect : !0;
        if (typeof l != "boolean" && l !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (bi(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (bi(a, "numericSeparator") && typeof a.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var f = a.numericSeparator;
        if (typeof e > "u") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return GS(e, a);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var E = String(e);
            return f ? Md(e, E) : E
        }
        if (typeof e == "bigint") {
            var h = String(e) + "n";
            return f ? Md(e, h) : h
        }
        var _ = typeof a.depth > "u" ? 5 : a.depth;
        if (typeof n > "u" && (n = 0), n >= _ && _ > 0 && typeof e == "object") return Dh(e) ? "[Array]" : "[Object]";
        var R = T8(a, n);
        if (typeof s > "u") s = [];
        else if (kS(s, e) >= 0) return "[Circular]";

        function T(Oe, He, H) {
            if (He && (s = ZG.call(s), s.push(He)), H) {
                var Z = {
                    depth: a.depth
                };
                return bi(a, "quoteStyle") && (Z.quoteStyle = a.quoteStyle), t(Oe, Z, n + 1, s)
            }
            return t(Oe, a, n + 1, s)
        }
        if (typeof e == "function" && !Vd(e)) {
            var v = u8(e),
                C = Zu(e, T);
            return "[Function" + (v ? ": " + v : " (anonymous)") + "]" + (C.length > 0 ? " { " + Nn.call(C, ", ") + " }" : "")
        }
        if (MS(e)) {
            var U = Ca ? Pi.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Uh.call(e);
            return typeof e == "object" && !Ca ? lo(U) : U
        }
        if (p8(e)) {
            for (var B = "<" + Bd.call(String(e.nodeName)), y = e.attributes || [], V = 0; V < y.length; V++) B += " " + y[V].name + "=" + $S(e8(y[V].value), "double", a);
            return B += ">", e.childNodes && e.childNodes.length && (B += "..."), B += "</" + Bd.call(String(e.nodeName)) + ">", B
        }
        if (Dh(e)) {
            if (e.length === 0) return "[]";
            var X = Zu(e, T);
            return R && !g8(X) ? "[" + Bh(X, R) + "]" : "[ " + Nn.call(X, ", ") + " ]"
        }
        if (r8(e)) {
            var M = Zu(e, T);
            return !("cause" in Error.prototype) && "cause" in e && !KS.call(e, "cause") ? "{ [" + String(e) + "] " + Nn.call(wd.call("[cause]: " + T(e.cause), M), ", ") + " }" : M.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Nn.call(M, ", ") + " }"
        }
        if (typeof e == "object" && l) {
            if (Gd && typeof e[Gd] == "function" && Ph) return Ph(e, {
                depth: _ - n
            });
            if (l !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (l8(e)) {
            var W = [];
            return VG.call(e, function(Oe, He) {
                W.push(T(He, e, !0) + " => " + T(Oe, e))
            }), Fd("Map", Vl.call(e), W, R)
        }
        if (E8(e)) {
            var ee = [];
            return FG.call(e, function(Oe) {
                ee.push(T(Oe, e))
            }), Fd("Set", Fl.call(e), ee, R)
        }
        if (f8(e)) return bE("WeakMap");
        if (h8(e)) return bE("WeakSet");
        if (c8(e)) return bE("WeakRef");
        if (i8(e)) return lo(T(Number(e)));
        if (a8(e)) return lo(T(Nh.call(e)));
        if (s8(e)) return lo(XG.call(e));
        if (n8(e)) return lo(T(String(e)));
        if (!t8(e) && !Vd(e)) {
            var te = Zu(e, T),
                fe = $d ? $d(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                he = e instanceof Object ? "" : "null prototype",
                Se = !fe && Tr && Object(e) === e && Tr in e ? y0.call(zi(e), 8, -1) : he ? "Object" : "",
                Me = fe || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                Ee = Me + (Se || he ? "[" + Nn.call(wd.call([], Se || [], he || []), ": ") + "] " : "");
            return te.length === 0 ? Ee + "{}" : R ? Ee + "{" + Bh(te, R) + "}" : Ee + "{ " + Nn.call(te, ", ") + " }"
        }
        return String(e)
    };

function $S(t, e, r) {
    var n = (r.quoteStyle || e) === "double" ? '"' : "'";
    return n + t + n
}

function e8(t) {
    return Pi.call(String(t), /"/g, "&quot;")
}

function Dh(t) {
    return zi(t) === "[object Array]" && (!Tr || !(typeof t == "object" && Tr in t))
}

function t8(t) {
    return zi(t) === "[object Date]" && (!Tr || !(typeof t == "object" && Tr in t))
}

function Vd(t) {
    return zi(t) === "[object RegExp]" && (!Tr || !(typeof t == "object" && Tr in t))
}

function r8(t) {
    return zi(t) === "[object Error]" && (!Tr || !(typeof t == "object" && Tr in t))
}

function n8(t) {
    return zi(t) === "[object String]" && (!Tr || !(typeof t == "object" && Tr in t))
}

function i8(t) {
    return zi(t) === "[object Number]" && (!Tr || !(typeof t == "object" && Tr in t))
}

function s8(t) {
    return zi(t) === "[object Boolean]" && (!Tr || !(typeof t == "object" && Tr in t))
}

function MS(t) {
    if (Ca) return t && typeof t == "object" && t instanceof Symbol;
    if (typeof t == "symbol") return !0;
    if (!t || typeof t != "object" || !Uh) return !1;
    try {
        return Uh.call(t), !0
    } catch {}
    return !1
}

function a8(t) {
    if (!t || typeof t != "object" || !Nh) return !1;
    try {
        return Nh.call(t), !0
    } catch {}
    return !1
}
var o8 = Object.prototype.hasOwnProperty || function(t) {
    return t in this
};

function bi(t, e) {
    return o8.call(t, e)
}

function zi(t) {
    return qG.call(t)
}

function u8(t) {
    if (t.name) return t.name;
    var e = zG.call(YG.call(t), /^function\s*([\w$]+)/);
    return e ? e[1] : null
}

function kS(t, e) {
    if (t.indexOf) return t.indexOf(e);
    for (var r = 0, n = t.length; r < n; r++)
        if (t[r] === e) return r;
    return -1
}

function l8(t) {
    if (!Vl || !t || typeof t != "object") return !1;
    try {
        Vl.call(t);
        try {
            Fl.call(t)
        } catch {
            return !0
        }
        return t instanceof Map
    } catch {}
    return !1
}

function f8(t) {
    if (!Ao || !t || typeof t != "object") return !1;
    try {
        Ao.call(t, Ao);
        try {
            So.call(t, So)
        } catch {
            return !0
        }
        return t instanceof WeakMap
    } catch {}
    return !1
}

function c8(t) {
    if (!Dd || !t || typeof t != "object") return !1;
    try {
        return Dd.call(t), !0
    } catch {}
    return !1
}

function E8(t) {
    if (!Fl || !t || typeof t != "object") return !1;
    try {
        Fl.call(t);
        try {
            Vl.call(t)
        } catch {
            return !0
        }
        return t instanceof Set
    } catch {}
    return !1
}

function h8(t) {
    if (!So || !t || typeof t != "object") return !1;
    try {
        So.call(t, So);
        try {
            Ao.call(t, Ao)
        } catch {
            return !0
        }
        return t instanceof WeakSet
    } catch {}
    return !1
}

function p8(t) {
    return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function"
}

function GS(t, e) {
    if (t.length > e.maxStringLength) {
        var r = t.length - e.maxStringLength,
            n = "... " + r + " more character" + (r > 1 ? "s" : "");
        return GS(y0.call(t, 0, e.maxStringLength), e) + n
    }
    var s = Pi.call(Pi.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, _8);
    return $S(s, "single", e)
}

function _8(t) {
    var e = t.charCodeAt(0),
        r = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
        } [e];
    return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + JG.call(e.toString(16))
}

function lo(t) {
    return "Object(" + t + ")"
}

function bE(t) {
    return t + " { ? }"
}

function Fd(t, e, r, n) {
    var s = n ? Bh(r, n) : Nn.call(r, ", ");
    return t + " (" + e + ") {" + s + "}"
}

function g8(t) {
    for (var e = 0; e < t.length; e++)
        if (kS(t[e], `
`) >= 0) return !1;
    return !0
}

function T8(t, e) {
    var r;
    if (t.indent === "	") r = "	";
    else if (typeof t.indent == "number" && t.indent > 0) r = Nn.call(Array(t.indent + 1), " ");
    else return null;
    return {
        base: r,
        prev: Nn.call(Array(e + 1), r)
    }
}

function Bh(t, e) {
    if (t.length === 0) return "";
    var r = `
` + e.prev + e.base;
    return r + Nn.call(t, "," + r) + `
` + e.prev
}

function Zu(t, e) {
    var r = Dh(t),
        n = [];
    if (r) {
        n.length = t.length;
        for (var s = 0; s < t.length; s++) n[s] = bi(t, s) ? e(t[s], t) : ""
    }
    var a = typeof vE == "function" ? vE(t) : [],
        l;
    if (Ca) {
        l = {};
        for (var f = 0; f < a.length; f++) l["$" + a[f]] = a[f]
    }
    for (var E in t) bi(t, E) && (r && String(Number(E)) === E && E < t.length || Ca && l["$" + E] instanceof Symbol || (wS.call(/[^\w$]/, E) ? n.push(e(E, t) + ": " + e(t[E], t)) : n.push(E + ": " + e(t[E], t))));
    if (typeof vE == "function")
        for (var h = 0; h < a.length; h++) KS.call(t, a[h]) && n.push("[" + e(a[h]) + "]: " + e(t[a[h]], t));
    return n
}
var C0 = v0,
    ka = $G,
    R8 = QG,
    d8 = C0("%TypeError%"),
    Qu = C0("%WeakMap%", !0),
    el = C0("%Map%", !0),
    m8 = ka("WeakMap.prototype.get", !0),
    x8 = ka("WeakMap.prototype.set", !0),
    A8 = ka("WeakMap.prototype.has", !0),
    S8 = ka("Map.prototype.get", !0),
    v8 = ka("Map.prototype.set", !0),
    b8 = ka("Map.prototype.has", !0),
    O0 = function(t, e) {
        for (var r = t, n;
            (n = r.next) !== null; r = n)
            if (n.key === e) return r.next = n.next, n.next = t.next, t.next = n, n
    },
    L8 = function(t, e) {
        var r = O0(t, e);
        return r && r.value
    },
    y8 = function(t, e, r) {
        var n = O0(t, e);
        n ? n.value = r : t.next = {
            key: e,
            next: t.next,
            value: r
        }
    },
    C8 = function(t, e) {
        return !!O0(t, e)
    },
    O8 = function() {
        var e, r, n, s = {
            assert: function(a) {
                if (!s.has(a)) throw new d8("Side channel does not contain " + R8(a))
            },
            get: function(a) {
                if (Qu && a && (typeof a == "object" || typeof a == "function")) {
                    if (e) return m8(e, a)
                } else if (el) {
                    if (r) return S8(r, a)
                } else if (n) return L8(n, a)
            },
            has: function(a) {
                if (Qu && a && (typeof a == "object" || typeof a == "function")) {
                    if (e) return A8(e, a)
                } else if (el) {
                    if (r) return b8(r, a)
                } else if (n) return C8(n, a);
                return !1
            },
            set: function(a, l) {
                Qu && a && (typeof a == "object" || typeof a == "function") ? (e || (e = new Qu), x8(e, a, l)) : el ? (r || (r = new el), v8(r, a, l)) : (n || (n = {
                    key: {},
                    next: null
                }), y8(n, a, l))
            }
        };
        return s
    },
    I8 = String.prototype.replace,
    N8 = /%20/g,
    LE = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    I0 = {
        default: LE.RFC3986,
        formatters: {
            RFC1738: function(t) {
                return I8.call(t, N8, "+")
            },
            RFC3986: function(t) {
                return String(t)
            }
        },
        RFC1738: LE.RFC1738,
        RFC3986: LE.RFC3986
    },
    U8 = I0,
    yE = Object.prototype.hasOwnProperty,
    Rs = Array.isArray,
    yn = function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
    }(),
    P8 = function(e) {
        for (; e.length > 1;) {
            var r = e.pop(),
                n = r.obj[r.prop];
            if (Rs(n)) {
                for (var s = [], a = 0; a < n.length; ++a) typeof n[a] < "u" && s.push(n[a]);
                r.obj[r.prop] = s
            }
        }
    },
    VS = function(e, r) {
        for (var n = r && r.plainObjects ? Object.create(null) : {}, s = 0; s < e.length; ++s) typeof e[s] < "u" && (n[s] = e[s]);
        return n
    },
    D8 = function t(e, r, n) {
        if (!r) return e;
        if (typeof r != "object") {
            if (Rs(e)) e.push(r);
            else if (e && typeof e == "object")(n && (n.plainObjects || n.allowPrototypes) || !yE.call(Object.prototype, r)) && (e[r] = !0);
            else return [e, r];
            return e
        }
        if (!e || typeof e != "object") return [e].concat(r);
        var s = e;
        return Rs(e) && !Rs(r) && (s = VS(e, n)), Rs(e) && Rs(r) ? (r.forEach(function(a, l) {
            if (yE.call(e, l)) {
                var f = e[l];
                f && typeof f == "object" && a && typeof a == "object" ? e[l] = t(f, a, n) : e.push(a)
            } else e[l] = a
        }), e) : Object.keys(r).reduce(function(a, l) {
            var f = r[l];
            return yE.call(a, l) ? a[l] = t(a[l], f, n) : a[l] = f, a
        }, s)
    },
    B8 = function(e, r) {
        return Object.keys(r).reduce(function(n, s) {
            return n[s] = r[s], n
        }, e)
    },
    w8 = function(t, e, r) {
        var n = t.replace(/\+/g, " ");
        if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(n)
        } catch {
            return n
        }
    },
    K8 = function(e, r, n, s, a) {
        if (e.length === 0) return e;
        var l = e;
        if (typeof e == "symbol" ? l = Symbol.prototype.toString.call(e) : typeof e != "string" && (l = String(e)), n === "iso-8859-1") return escape(l).replace(/%u[0-9a-f]{4}/gi, function(_) {
            return "%26%23" + parseInt(_.slice(2), 16) + "%3B"
        });
        for (var f = "", E = 0; E < l.length; ++E) {
            var h = l.charCodeAt(E);
            if (h === 45 || h === 46 || h === 95 || h === 126 || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || a === U8.RFC1738 && (h === 40 || h === 41)) {
                f += l.charAt(E);
                continue
            }
            if (h < 128) {
                f = f + yn[h];
                continue
            }
            if (h < 2048) {
                f = f + (yn[192 | h >> 6] + yn[128 | h & 63]);
                continue
            }
            if (h < 55296 || h >= 57344) {
                f = f + (yn[224 | h >> 12] + yn[128 | h >> 6 & 63] + yn[128 | h & 63]);
                continue
            }
            E += 1, h = 65536 + ((h & 1023) << 10 | l.charCodeAt(E) & 1023), f += yn[240 | h >> 18] + yn[128 | h >> 12 & 63] + yn[128 | h >> 6 & 63] + yn[128 | h & 63]
        }
        return f
    },
    $8 = function(e) {
        for (var r = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], n = [], s = 0; s < r.length; ++s)
            for (var a = r[s], l = a.obj[a.prop], f = Object.keys(l), E = 0; E < f.length; ++E) {
                var h = f[E],
                    _ = l[h];
                typeof _ == "object" && _ !== null && n.indexOf(_) === -1 && (r.push({
                    obj: l,
                    prop: h
                }), n.push(_))
            }
        return P8(r), e
    },
    M8 = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    },
    k8 = function(e) {
        return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    G8 = function(e, r) {
        return [].concat(e, r)
    },
    V8 = function(e, r) {
        if (Rs(e)) {
            for (var n = [], s = 0; s < e.length; s += 1) n.push(r(e[s]));
            return n
        }
        return r(e)
    },
    FS = {
        arrayToObject: VS,
        assign: B8,
        combine: G8,
        compact: $8,
        decode: w8,
        encode: K8,
        isBuffer: k8,
        isRegExp: M8,
        maybeMap: V8,
        merge: D8
    },
    WS = O8,
    dl = FS,
    vo = I0,
    F8 = Object.prototype.hasOwnProperty,
    Wd = {
        brackets: function(e) {
            return e + "[]"
        },
        comma: "comma",
        indices: function(e, r) {
            return e + "[" + r + "]"
        },
        repeat: function(e) {
            return e
        }
    },
    ri = Array.isArray,
    W8 = Array.prototype.push,
    HS = function(t, e) {
        W8.apply(t, ri(e) ? e : [e])
    },
    H8 = Date.prototype.toISOString,
    Hd = vo.default,
    pr = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: dl.encode,
        encodeValuesOnly: !1,
        format: Hd,
        formatter: vo.formatters[Hd],
        indices: !1,
        serializeDate: function(e) {
            return H8.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    j8 = function(e) {
        return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
    },
    CE = {},
    X8 = function t(e, r, n, s, a, l, f, E, h, _, R, T, v, C, U, B) {
        for (var y = e, V = B, X = 0, M = !1;
            (V = V.get(CE)) !== void 0 && !M;) {
            var W = V.get(e);
            if (X += 1, typeof W < "u") {
                if (W === X) throw new RangeError("Cyclic object value");
                M = !0
            }
            typeof V.get(CE) > "u" && (X = 0)
        }
        if (typeof E == "function" ? y = E(r, y) : y instanceof Date ? y = R(y) : n === "comma" && ri(y) && (y = dl.maybeMap(y, function(Z) {
                return Z instanceof Date ? R(Z) : Z
            })), y === null) {
            if (a) return f && !C ? f(r, pr.encoder, U, "key", T) : r;
            y = ""
        }
        if (j8(y) || dl.isBuffer(y)) {
            if (f) {
                var ee = C ? r : f(r, pr.encoder, U, "key", T);
                return [v(ee) + "=" + v(f(y, pr.encoder, U, "value", T))]
            }
            return [v(r) + "=" + v(String(y))]
        }
        var te = [];
        if (typeof y > "u") return te;
        var fe;
        if (n === "comma" && ri(y)) C && f && (y = dl.maybeMap(y, f)), fe = [{
            value: y.length > 0 ? y.join(",") || null : void 0
        }];
        else if (ri(E)) fe = E;
        else {
            var he = Object.keys(y);
            fe = h ? he.sort(h) : he
        }
        for (var Se = s && ri(y) && y.length === 1 ? r + "[]" : r, Me = 0; Me < fe.length; ++Me) {
            var Ee = fe[Me],
                Oe = typeof Ee == "object" && typeof Ee.value < "u" ? Ee.value : y[Ee];
            if (!(l && Oe === null)) {
                var He = ri(y) ? typeof n == "function" ? n(Se, Ee) : Se : Se + (_ ? "." + Ee : "[" + Ee + "]");
                B.set(e, X);
                var H = WS();
                H.set(CE, B), HS(te, t(Oe, He, n, s, a, l, n === "comma" && C && ri(y) ? null : f, E, h, _, R, T, v, C, U, H))
            }
        }
        return te
    },
    q8 = function(e) {
        if (!e) return pr;
        if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var r = e.charset || pr.charset;
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n = vo.default;
        if (typeof e.format < "u") {
            if (!F8.call(vo.formatters, e.format)) throw new TypeError("Unknown format option provided.");
            n = e.format
        }
        var s = vo.formatters[n],
            a = pr.filter;
        return (typeof e.filter == "function" || ri(e.filter)) && (a = e.filter), {
            addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : pr.addQueryPrefix,
            allowDots: typeof e.allowDots > "u" ? pr.allowDots : !!e.allowDots,
            charset: r,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : pr.charsetSentinel,
            delimiter: typeof e.delimiter > "u" ? pr.delimiter : e.delimiter,
            encode: typeof e.encode == "boolean" ? e.encode : pr.encode,
            encoder: typeof e.encoder == "function" ? e.encoder : pr.encoder,
            encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : pr.encodeValuesOnly,
            filter: a,
            format: n,
            formatter: s,
            serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : pr.serializeDate,
            skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : pr.skipNulls,
            sort: typeof e.sort == "function" ? e.sort : null,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : pr.strictNullHandling
        }
    },
    Y8 = function(t, e) {
        var r = t,
            n = q8(e),
            s, a;
        typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : ri(n.filter) && (a = n.filter, s = a);
        var l = [];
        if (typeof r != "object" || r === null) return "";
        var f;
        e && e.arrayFormat in Wd ? f = e.arrayFormat : e && "indices" in e ? f = e.indices ? "indices" : "repeat" : f = "indices";
        var E = Wd[f];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var h = E === "comma" && e && e.commaRoundTrip;
        s || (s = Object.keys(r)), n.sort && s.sort(n.sort);
        for (var _ = WS(), R = 0; R < s.length; ++R) {
            var T = s[R];
            n.skipNulls && r[T] === null || HS(l, X8(r[T], T, E, h, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, _))
        }
        var v = l.join(n.delimiter),
            C = n.addQueryPrefix === !0 ? "?" : "";
        return n.charsetSentinel && (n.charset === "iso-8859-1" ? C += "utf8=%26%2310003%3B&" : C += "utf8=%E2%9C%93&"), v.length > 0 ? C + v : ""
    },
    Oa = FS,
    wh = Object.prototype.hasOwnProperty,
    z8 = Array.isArray,
    ir = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: Oa.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    },
    J8 = function(t) {
        return t.replace(/&#(\d+);/g, function(e, r) {
            return String.fromCharCode(parseInt(r, 10))
        })
    },
    jS = function(t, e) {
        return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
    },
    Z8 = "utf8=%26%2310003%3B",
    Q8 = "utf8=%E2%9C%93",
    eV = function(e, r) {
        var n = {
                __proto__: null
            },
            s = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
            l = s.split(r.delimiter, a),
            f = -1,
            E, h = r.charset;
        if (r.charsetSentinel)
            for (E = 0; E < l.length; ++E) l[E].indexOf("utf8=") === 0 && (l[E] === Q8 ? h = "utf-8" : l[E] === Z8 && (h = "iso-8859-1"), f = E, E = l.length);
        for (E = 0; E < l.length; ++E)
            if (E !== f) {
                var _ = l[E],
                    R = _.indexOf("]="),
                    T = R === -1 ? _.indexOf("=") : R + 1,
                    v, C;
                T === -1 ? (v = r.decoder(_, ir.decoder, h, "key"), C = r.strictNullHandling ? null : "") : (v = r.decoder(_.slice(0, T), ir.decoder, h, "key"), C = Oa.maybeMap(jS(_.slice(T + 1), r), function(U) {
                    return r.decoder(U, ir.decoder, h, "value")
                })), C && r.interpretNumericEntities && h === "iso-8859-1" && (C = J8(C)), _.indexOf("[]=") > -1 && (C = z8(C) ? [C] : C), wh.call(n, v) ? n[v] = Oa.combine(n[v], C) : n[v] = C
            } return n
    },
    tV = function(t, e, r, n) {
        for (var s = n ? e : jS(e, r), a = t.length - 1; a >= 0; --a) {
            var l, f = t[a];
            if (f === "[]" && r.parseArrays) l = [].concat(s);
            else {
                l = r.plainObjects ? Object.create(null) : {};
                var E = f.charAt(0) === "[" && f.charAt(f.length - 1) === "]" ? f.slice(1, -1) : f,
                    h = parseInt(E, 10);
                !r.parseArrays && E === "" ? l = {
                    0: s
                } : !isNaN(h) && f !== E && String(h) === E && h >= 0 && r.parseArrays && h <= r.arrayLimit ? (l = [], l[h] = s) : E !== "__proto__" && (l[E] = s)
            }
            s = l
        }
        return s
    },
    rV = function(e, r, n, s) {
        if (e) {
            var a = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                l = /(\[[^[\]]*])/,
                f = /(\[[^[\]]*])/g,
                E = n.depth > 0 && l.exec(a),
                h = E ? a.slice(0, E.index) : a,
                _ = [];
            if (h) {
                if (!n.plainObjects && wh.call(Object.prototype, h) && !n.allowPrototypes) return;
                _.push(h)
            }
            for (var R = 0; n.depth > 0 && (E = f.exec(a)) !== null && R < n.depth;) {
                if (R += 1, !n.plainObjects && wh.call(Object.prototype, E[1].slice(1, -1)) && !n.allowPrototypes) return;
                _.push(E[1])
            }
            return E && _.push("[" + a.slice(E.index) + "]"), tV(_, r, n, s)
        }
    },
    nV = function(e) {
        if (!e) return ir;
        if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function") throw new TypeError("Decoder has to be a function.");
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r = typeof e.charset > "u" ? ir.charset : e.charset;
        return {
            allowDots: typeof e.allowDots > "u" ? ir.allowDots : !!e.allowDots,
            allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : ir.allowPrototypes,
            allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : ir.allowSparse,
            arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : ir.arrayLimit,
            charset: r,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : ir.charsetSentinel,
            comma: typeof e.comma == "boolean" ? e.comma : ir.comma,
            decoder: typeof e.decoder == "function" ? e.decoder : ir.decoder,
            delimiter: typeof e.delimiter == "string" || Oa.isRegExp(e.delimiter) ? e.delimiter : ir.delimiter,
            depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : ir.depth,
            ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
            interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : ir.interpretNumericEntities,
            parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : ir.parameterLimit,
            parseArrays: e.parseArrays !== !1,
            plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : ir.plainObjects,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : ir.strictNullHandling
        }
    },
    iV = function(t, e) {
        var r = nV(e);
        if (t === "" || t === null || typeof t > "u") return r.plainObjects ? Object.create(null) : {};
        for (var n = typeof t == "string" ? eV(t, r) : t, s = r.plainObjects ? Object.create(null) : {}, a = Object.keys(n), l = 0; l < a.length; ++l) {
            var f = a[l],
                E = rV(f, n[f], r, typeof t == "string");
            s = Oa.merge(s, E, r)
        }
        return r.allowSparse === !0 ? s : Oa.compact(s)
    },
    sV = Y8,
    aV = iV,
    oV = I0,
    XS = {
        formats: oV,
        parse: aV,
        stringify: sV
    };
let uV = class {
        constructor(e) {
            this.code = e.code, this.token = e.token, this.host = e.host
        }
    },
    lV = class {
        constructor(e) {
            this.appId = e.appId, this.appTag = e.appTag, this.audienceEnabled = e.audienceEnabled, this.code = e.code, this.host = e.host, this.audienceHost = e.audienceHost, this.locked = e.locked, this.full = e.full, this.maxPlayers = e.maxPlayers, this.minPlayers = e.minPlayers, this.moderationEnabled = e.moderationEnabled, this.passwordRequired = e.passwordRequired, this.twitchLocked = e.twitchLocked, this.locale = e.locale, this.keepalive = e.keepalive, this.controllerBranch = e.controllerBranch
        }
    },
    fV = class {
        constructor(e) {
            this.connections = e.connections
        }
    },
    cV = class {
        constructor(e) {
            this.cause = e.cause
        }
        whenReceived(e) {
            e.disconnect()
        }
    },
    EV = class {};
var Cf = {
    CreateRoomReply: uV,
    GetRoomReply: lV,
    GetAudienceReply: fV,
    RoomExit: cV,
    RoomLock: EV
};
const jd = _G,
    hV = XS,
    {
        CreateRoomReply: pV,
        GetRoomReply: _V
    } = Cf;
let gV = class {
    constructor(e) {
        if (!e.host) throw new Error("unable to create ecast APIClient: no host provided");
        if (this.host = e.host, !e.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
        this.scheme = e.scheme
    }
    url(e, r) {
        if (r) {
            let n = hV.stringify(r);
            return `${this.scheme}://${this.host}/api/v2${e}?${n}`
        }
        return `${this.scheme}://${this.host}/api/v2${e}`
    }
    async createRoom(e) {
        let r = {
                appTag: "test",
                userId: "fart",
                ...e
            },
            n = this.url("/rooms", r),
            a = await jd(n, {
                method: "POST"
            });
        const {
            body: l,
            error: f,
            ok: E
        } = await a.json();
        if (!E) throw new Error(`failed to create room: ${f}`);
        return new pV({
            code: l.code,
            token: l.token,
            host: l.host
        })
    }
    async getRoom(e) {
        let r = this.url(`/rooms/${e.code}`),
            s = await (await jd(r)).json();
        if (!s.ok) throw new Error(`unable to get room with options ${JSON.stringify(e)}: ${s.error}`);
        let a = s.body;
        return new _V({
            appId: a.appId,
            appTag: a.appTag,
            audienceEnabled: a.audienceEnabled,
            code: a.code,
            host: a.host,
            audienceHost: a.audienceHost,
            locked: a.locked,
            full: a.full,
            maxPlayers: a.maxPlayers,
            minPlayers: a.minPlayers,
            moderationEnabled: a.moderationEnabled,
            passwordRequired: a.passwordRequired,
            twitchLocked: a.twitchLocked,
            locale: a.locale,
            keepalive: a.keepalive,
            controllerBranch: a.controllerBranch
        })
    }
};
var TV = {
        APIClient: gV
    },
    ra = null;
typeof WebSocket < "u" ? ra = WebSocket : typeof MozWebSocket < "u" ? ra = MozWebSocket : typeof dt < "u" ? ra = dt.WebSocket || dt.MozWebSocket : typeof window < "u" ? ra = window.WebSocket || window.MozWebSocket : typeof self < "u" && (ra = self.WebSocket || self.MozWebSocket);
var RV = ra,
    N0 = {
        exports: {}
    },
    Ta = typeof Reflect == "object" ? Reflect : null,
    Xd = Ta && typeof Ta.apply == "function" ? Ta.apply : function(e, r, n) {
        return Function.prototype.apply.call(e, r, n)
    },
    ml;
Ta && typeof Ta.ownKeys == "function" ? ml = Ta.ownKeys : Object.getOwnPropertySymbols ? ml = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : ml = function(e) {
    return Object.getOwnPropertyNames(e)
};

function dV(t) {
    console && console.warn && console.warn(t)
}
var qS = Number.isNaN || function(e) {
    return e !== e
};

function _t() {
    _t.init.call(this)
}
N0.exports = _t;
N0.exports.once = SV;
_t.EventEmitter = _t;
_t.prototype._events = void 0;
_t.prototype._eventsCount = 0;
_t.prototype._maxListeners = void 0;
var qd = 10;

function Of(t) {
    if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
}
Object.defineProperty(_t, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return qd
    },
    set: function(t) {
        if (typeof t != "number" || t < 0 || qS(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        qd = t
    }
});
_t.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
_t.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || qS(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this
};

function YS(t) {
    return t._maxListeners === void 0 ? _t.defaultMaxListeners : t._maxListeners
}
_t.prototype.getMaxListeners = function() {
    return YS(this)
};
_t.prototype.emit = function(e) {
    for (var r = [], n = 1; n < arguments.length; n++) r.push(arguments[n]);
    var s = e === "error",
        a = this._events;
    if (a !== void 0) s = s && a.error === void 0;
    else if (!s) return !1;
    if (s) {
        var l;
        if (r.length > 0 && (l = r[0]), l instanceof Error) throw l;
        var f = new Error("Unhandled error." + (l ? " (" + l.message + ")" : ""));
        throw f.context = l, f
    }
    var E = a[e];
    if (E === void 0) return !1;
    if (typeof E == "function") Xd(E, this, r);
    else
        for (var h = E.length, _ = ev(E, h), n = 0; n < h; ++n) Xd(_[n], this, r);
    return !0
};

function zS(t, e, r, n) {
    var s, a, l;
    if (Of(r), a = t._events, a === void 0 ? (a = t._events = Object.create(null), t._eventsCount = 0) : (a.newListener !== void 0 && (t.emit("newListener", e, r.listener ? r.listener : r), a = t._events), l = a[e]), l === void 0) l = a[e] = r, ++t._eventsCount;
    else if (typeof l == "function" ? l = a[e] = n ? [r, l] : [l, r] : n ? l.unshift(r) : l.push(r), s = YS(t), s > 0 && l.length > s && !l.warned) {
        l.warned = !0;
        var f = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        f.name = "MaxListenersExceededWarning", f.emitter = t, f.type = e, f.count = l.length, dV(f)
    }
    return t
}
_t.prototype.addListener = function(e, r) {
    return zS(this, e, r, !1)
};
_t.prototype.on = _t.prototype.addListener;
_t.prototype.prependListener = function(e, r) {
    return zS(this, e, r, !0)
};

function mV() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function JS(t, e, r) {
    var n = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: r
        },
        s = mV.bind(n);
    return s.listener = r, n.wrapFn = s, s
}
_t.prototype.once = function(e, r) {
    return Of(r), this.on(e, JS(this, e, r)), this
};
_t.prototype.prependOnceListener = function(e, r) {
    return Of(r), this.prependListener(e, JS(this, e, r)), this
};
_t.prototype.removeListener = function(e, r) {
    var n, s, a, l, f;
    if (Of(r), s = this._events, s === void 0) return this;
    if (n = s[e], n === void 0) return this;
    if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[e], s.removeListener && this.emit("removeListener", e, n.listener || r));
    else if (typeof n != "function") {
        for (a = -1, l = n.length - 1; l >= 0; l--)
            if (n[l] === r || n[l].listener === r) {
                f = n[l].listener, a = l;
                break
            } if (a < 0) return this;
        a === 0 ? n.shift() : xV(n, a), n.length === 1 && (s[e] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", e, f || r)
    }
    return this
};
_t.prototype.off = _t.prototype.removeListener;
_t.prototype.removeAllListeners = function(e) {
    var r, n, s;
    if (n = this._events, n === void 0) return this;
    if (n.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n[e]), this;
    if (arguments.length === 0) {
        var a = Object.keys(n),
            l;
        for (s = 0; s < a.length; ++s) l = a[s], l !== "removeListener" && this.removeAllListeners(l);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
    }
    if (r = n[e], typeof r == "function") this.removeListener(e, r);
    else if (r !== void 0)
        for (s = r.length - 1; s >= 0; s--) this.removeListener(e, r[s]);
    return this
};

function ZS(t, e, r) {
    var n = t._events;
    if (n === void 0) return [];
    var s = n[e];
    return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? AV(s) : ev(s, s.length)
}
_t.prototype.listeners = function(e) {
    return ZS(this, e, !0)
};
_t.prototype.rawListeners = function(e) {
    return ZS(this, e, !1)
};
_t.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : QS.call(t, e)
};
_t.prototype.listenerCount = QS;

function QS(t) {
    var e = this._events;
    if (e !== void 0) {
        var r = e[t];
        if (typeof r == "function") return 1;
        if (r !== void 0) return r.length
    }
    return 0
}
_t.prototype.eventNames = function() {
    return this._eventsCount > 0 ? ml(this._events) : []
};

function ev(t, e) {
    for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
    return r
}

function xV(t, e) {
    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
    t.pop()
}

function AV(t) {
    for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
    return e
}

function SV(t, e) {
    return new Promise(function(r, n) {
        function s(l) {
            t.removeListener(e, a), n(l)
        }

        function a() {
            typeof t.removeListener == "function" && t.removeListener("error", s), r([].slice.call(arguments))
        }
        tv(t, e, a, {
            once: !0
        }), e !== "error" && vV(t, s, {
            once: !0
        })
    })
}

function vV(t, e, r) {
    typeof t.on == "function" && tv(t, "error", e, r)
}

function tv(t, e, r, n) {
    if (typeof t.on == "function") n.once ? t.once(e, r) : t.on(e, r);
    else if (typeof t.addEventListener == "function") t.addEventListener(e, function s(a) {
        n.once && t.removeEventListener(e, s), r(a)
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
}
var bV = N0.exports;
let LV = class {
        constructor(e) {
            e && (this.error = e.error, this.to = e.to, this.opcode = e.opcode)
        }
        toString() {
            return `ObservedError{
	to:${this.to}
	error:${this.error}
	opcode:${this.opcode}
}`
        }
    },
    If = class extends Error {
        constructor(e) {
            super(e), e && (this.code = e.code, this.message = e.message)
        }
    };
class jo extends If {
    constructor(e) {
        super(e), this.code = 1e3, this.message = e && e.message ? e.message : "ecast server error"
    }
}
class rv extends jo {
    constructor(e) {
        super(e), this.code = 1001, this.message = e && e.message ? e.message : "create room failed"
    }
}
class nv extends jo {
    constructor(e) {
        super(e), this.code = 1002, this.message = e && e.message ? e.message : "unable to connect to room"
    }
}
class iv extends jo {
    constructor(e) {
        super(e), this.code = 1003, this.message = e && e.message ? e.message : "server is shutting down"
    }
}
class ft extends If {
    constructor(e) {
        super(e), this.code = 2e3, this.message = e && e.message ? e.message : "ecast client error"
    }
}
class sv extends ft {
    constructor(e) {
        super(e), this.code = 2001, this.message = e && e.message ? e.message : "parse error in ecast protocol"
    }
}
class av extends ft {
    constructor(e) {
        super(e), this.code = 2002, this.message = e && e.message ? e.message : "missing opcode"
    }
}
class ov extends ft {
    constructor(e) {
        super(e), this.code = 2003, this.message = e && e.message ? e.message : "invalid opcode"
    }
}
class uv extends ft {
    constructor(e) {
        super(e), this.code = 2004, this.message = e && e.message ? e.message : "invalid arguments"
    }
}
class lv extends ft {
    constructor(e) {
        super(e), this.code = 2005, this.message = e && e.message ? e.message : "entity not found"
    }
}
class fv extends ft {
    constructor(e) {
        super(e), this.code = 2006, this.message = e && e.message ? e.message : "an entity already exists with that key"
    }
}
class cv extends ft {
    constructor(e) {
        super(e), this.code = 2007, this.message = e && e.message ? e.message : "the entity is not of the expected type"
    }
}
class Ev extends ft {
    constructor(e) {
        super(e), this.code = 2008, this.message = e && e.message ? e.message : "no such client"
    }
}
class hv extends ft {
    constructor(e) {
        super(e), this.code = 2009, this.message = e && e.message ? e.message : "room is locked"
    }
}
class pv extends ft {
    constructor(e) {
        super(e), this.code = 2010, this.message = e && e.message ? e.message : "room is full"
    }
}
class _v extends ft {
    constructor(e) {
        super(e), this.code = 2011, this.message = e && e.message ? e.message : "no such license"
    }
}
class gv extends ft {
    constructor(e) {
        super(e), this.code = 2012, this.message = e && e.message ? e.message : "invalid license"
    }
}
class Tv extends ft {
    constructor(e) {
        super(e), this.code = 2013, this.message = e && e.message ? e.message : "room not found"
    }
}
class Rv extends ft {
    constructor(e) {
        super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
    }
}
class dv extends ft {
    constructor(e) {
        super(e), this.code = 2015, this.message = e && e.message ? e.message : "twitch login required"
    }
}
class mv extends ft {
    constructor(e) {
        super(e), this.code = 2016, this.message = e && e.message ? e.message : "no such option"
    }
}
class xv extends ft {
    constructor(e) {
        super(e), this.code = 2017, this.message = e && e.message ? e.message : "password required"
    }
}
class Av extends ft {
    constructor(e) {
        super(e), this.code = 2018, this.message = e && e.message ? e.message : "invalid room password"
    }
}
class Sv extends ft {
    constructor(e) {
        super(e), this.code = 2019, this.message = e && e.message ? e.message : "missing name"
    }
}
class vv extends ft {
    constructor(e) {
        super(e), this.code = 2021, this.message = e && e.message ? e.message : "text did not pass text filters"
    }
}
class bv extends ft {
    constructor(e) {
        super(e), this.code = 2022, this.message = e && e.message ? e.message : "no such filter"
    }
}
class Lv extends ft {
    constructor(e) {
        super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
    }
}
class yv extends ft {
    constructor(e) {
        super(e), this.code = 2024, this.message = e && e.message ? e.message : "not connected to a room"
    }
}
class Cv extends ft {
    constructor(e) {
        super(e), this.code = 2025, this.message = e && e.message ? e.message : "illegal operation"
    }
}
class Ov extends ft {
    constructor(e) {
        super(e), this.code = 2026, this.message = e && e.message ? e.message : "invalid ACL change"
    }
}
class Iv extends ft {
    constructor(e) {
        super(e), this.code = 2027, this.message = e && e.message ? e.message : "room has already ended"
    }
}
class Nv extends ft {
    constructor(e) {
        super(e), this.code = 2028, this.message = e && e.message ? e.message : "the entity is locked"
    }
}
class Uv extends ft {
    constructor(e) {
        super(e), this.code = 2420, this.message = e && e.message ? e.message : "rate limit exceeded"
    }
}

function yV({
    code: t,
    message: e
}) {
    const r = CV[t];
    return r ? new r({
        message: e
    }) : new If({
        message: e
    })
}
var bo = {
    createError: yV,
    CallError: If,
    EcastServerError: jo,
    EcastCreateRoomFailed: rv,
    EcastDialRoomFailed: nv,
    EcastServerIsShuttingDown: iv,
    EcastClientError: ft,
    EcastParseError: sv,
    EcastRequestIsMissingOpcode: av,
    EcastRequestHasInvalidOpcode: ov,
    EcastRequestHasInvalidArguments: uv,
    EcastEntityNotFound: lv,
    EcastEntityAlreadyExists: fv,
    EcastEntityTypeError: cv,
    EcastNoSuchClient: Ev,
    EcastRoomIsLocked: hv,
    EcastRoomIsFull: pv,
    EcastLicenseNotFound: _v,
    EcastLicenseCheckFailed: gv,
    EcastRoomNotFound: Tv,
    EcastInvalidRole: Rv,
    EcastTwitchLoginRequired: dv,
    EcastInvalidOption: mv,
    EcastPasswordRequired: xv,
    EcastInvalidPassword: Av,
    EcastNameRequired: Sv,
    EcastFilterError: vv,
    EcastNoSuchFilter: bv,
    EcastPermissionDenied: Lv,
    EcastNotConnected: yv,
    EcastIllegalOperation: Cv,
    EcastACLChangeDenied: Ov,
    EcastRoomHasEnded: Iv,
    EcastEntityLocked: Nv,
    EcastRateLimitExceeded: Uv,
    ObservedError: LV
};
const CV = {
    1e3: jo,
    1001: rv,
    1002: nv,
    1003: iv,
    2e3: ft,
    2001: sv,
    2002: av,
    2003: ov,
    2004: uv,
    2005: lv,
    2006: fv,
    2007: cv,
    2008: Ev,
    2009: hv,
    2010: pv,
    2011: _v,
    2012: gv,
    2013: Tv,
    2014: Rv,
    2015: dv,
    2016: mv,
    2017: xv,
    2018: Av,
    2019: Sv,
    2021: vv,
    2022: bv,
    2023: Lv,
    2024: yv,
    2025: Cv,
    2026: Ov,
    2027: Iv,
    2028: Nv,
    2420: Uv
};
let OV = class {
        constructor(e) {
            this.id = e.id, this.deviceId = e.deviceId, this.name = e.name, this.secret = e.secret, this.reconnect = e.reconnect, this.entities = e.entities, this.here = e.here, this.profile = e.profile, this.replayEnd = e.replayEnd
        }
    },
    IV = class {
        constructor(e) {
            this.id = e.id, this.userId = e.userId, this.name = e.name, this.role = e.role, this.reconnect = e.reconnect
        }
    },
    NV = class {
        constructor(e) {
            this.id = e.id, this.role = e.role
        }
    },
    UV = class {
        constructor(e) {
            this.to = e.to, this.from = e.from, this.body = e.body, this.userId = e.userId
        }
    },
    PV = class {
        constructor(e) {
            this.id = e.id, this.banned = e.banned, this.reason = e.reason
        }
    };
var U0 = {
    ClientConnected: IV,
    ClientDisconnected: NV,
    ClientKicked: PV,
    ClientSend: UV,
    ClientWelcome: OV
};
let DV = class {
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
};
var P0 = {
    CountGroup: DV
};
let BV = class {
        constructor(e) {
            this.key = e.key, this.from = e.from, this.colors = e.colors, this.lines = e.lines, this.live = e.live, this.maxLayer = e.maxLayer, this.maxPoints = e.maxPoints, this.size = e.size, this.weights = e.weights, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
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
	maxLayer:${this.maxLayer}
	maxPoints:${this.maxPoints}
	size:${this.size}
	weights:${this.weights}
	meta:${JSON.stringify(this.meta)}
}`
        }
    },
    wV = class {
        constructor(e) {
            this.key = e.key, this.from = e.from, this.line = e.line
        }
        whenReceived(e) {
            e.entities[this.key].lines.push(this.line)
        }
        toString() {
            return `DoodleLine{
	val:${this.line}
}`
        }
    },
    KV = class {
        constructor(e) {
            this.key = e.key, this.from = e.from, this.index = e.index
        }
        whenReceived(e) {
            e.entities[this.key].lines.splice(this.index, 1)
        }
        toString() {
            return `DoodleLineRemoved{
	index:${this.index}
}`
        }
    };
var D0 = {
    DoodleEntity: BV,
    DoodleLine: wV,
    DoodleLineRemoved: KV
};
let $V = class {
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
};
var B0 = {
    GCounter: $V
};
let MV = class {
    constructor(e) {
        this.pc = e.pc, this.opcode = e.opcode, this.result = e.result
    }
};
var Pv = {
    Notification: MV
};
let kV = class Dv {
    constructor(e) {
        this.from = e.from, this.key = e.key, this.val = e.val, this.restrictions = e.restrictions, this.version = e.version, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
    }
    whenReceived(e) {
        if (e.entities[this.key] && e.entities[this.key] instanceof Dv && !this.restrictions) {
            e.entities[this.key].val = this.val, e.entities[this.key].meta = this.meta, e.entities[this.key].version = this.version, e.entities[this.key].from = this.from;
            return
        }
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
};
var w0 = {
    NumberEntity: kV
};
let GV = class {
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
    },
    VV = class {
        constructor(e) {
            this.message = e.message
        }
        toString() {
            return `ObjectEcho{message: ${this.message}}`
        }
    };
var K0 = {
    ObjectEntity: GV,
    ObjectEcho: VV
};
let FV = class {
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
};
var $0 = {
    PNCounter: FV
};
let WV = class {
    constructor(e) {
        this.pc = e.pc, this.re = e.re, this.opcode = e.opcode, this.result = e.result
    }
};
var Bv = {
    Reply: WV
};
let HV = class {
    constructor(e) {
        this.seq = e.seq, this.opcode = e.opcode, this.params = e.params
    }
};
var jV = {
    Request: HV
};
let XV = class {
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
    },
    qV = class {
        constructor(e) {
            this.key = e.key, this.val = e.val
        }
        toString() {
            return `StackElement{
	key:${this.key}
	value: ${JSON.stringify(this.val)}
}`
        }
    },
    YV = class {
        constructor(e) {
            this.key = e.key, this.vals = e.vals
        }
        toString() {
            return `StackElements{
	key:${this.key}
	values: ${JSON.stringify(this.vals)}
}`
        }
    };
var wv = {
    StackEntity: XV,
    StackElement: qV,
    StackElements: YV
};
let zV = class {
        constructor(e) {
            this.from = e.from, this.key = e.key, this.text = e.text, this.version = e.version, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
        }
        whenReceived(e) {
            e.entities[this.key] = this, e.emit("text " + this.key, this)
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
    JV = class {
        constructor(e) {
            this.message = e.message
        }
        toString() {
            return `TextEcho{
	key: ${this.key}
	message: ${this.message}
}`
        }
    };
var M0 = {
    TextEntity: zV,
    TextEcho: JV
};
let ZV = class {
        constructor(e) {
            this.from = e.from, this.key = e.key, this.meta = e.meta || {}, this.root = e.root, e.acl && (this.acl = e.acl)
        }
        whenReceived(e) {
            e.entities[this.key] = this
        }
        toString() {
            return `TextMap{
	key:${this.key}
	meta:${JSON.stringify(this.meta)}
}`
        }
    },
    QV = class {
        constructor(e) {
            this.from = e.from, this.key = e.key, this.msg = e.msg
        }
        toString() {
            const e = this.msg ? this.msg.join(", ") : this.msg;
            return `TextMapSynced{
	key:${this.key}
	from:${this.from}
	msg:${e}
}`
        }
    },
    e5 = class {
        constructor(e) {
            this.from = e.from, this.key = e.key, this.text = e.text, this.attributions = e.attributions
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
var k0 = {
    TextMapEntity: ZV,
    TextMapSynced: QV,
    TextMapState: e5
};
let t5 = class {
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
};
var G0 = {
    TextRing: t5
};
let r5 = class {
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
};
var Kv = {
    ArtifactEntity: r5
};
let n5 = class {
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
};
var $v = {
    DropEntity: n5
};
let i5 = class {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `Echo{message: ${this.message}
}`
    }
};
var s5 = {
    Echo: i5
};
let a5 = class {
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
};
var o5 = {
    LockEntity: a5
};
let u5 = class {
    constructor() {}
    toString() {
        return "OK"
    }
};
var Mv = {
    OK: u5
};
const {
    ArtifactEntity: l5
} = Kv, {
    ClientWelcome: f5,
    ClientConnected: c5,
    ClientDisconnected: E5,
    ClientKicked: h5,
    ClientSend: p5
} = U0, {
    CountGroup: _5
} = P0, {
    DoodleEntity: g5,
    DoodleLine: T5,
    DoodleLineRemoved: R5
} = D0, {
    StackEntity: d5,
    StackElement: m5,
    StackElements: x5
} = wv, {
    DropEntity: A5
} = $v, {
    Echo: S5
} = s5, {
    LockEntity: v5
} = o5, {
    GCounter: b5
} = B0, {
    GetAudienceReply: L5,
    RoomExit: y5,
    RoomLock: C5
} = Cf, {
    Notification: O5
} = Pv, {
    OK: I5
} = Mv, {
    NumberEntity: N5
} = w0, {
    ObjectEcho: U5,
    ObjectEntity: P5
} = K0, {
    PNCounter: Yd
} = $0, {
    Reply: D5
} = Bv, {
    TextEcho: B5,
    TextEntity: w5
} = M0, {
    TextRing: K5
} = G0, {
    createError: zd,
    ObservedError: $5
} = bo, {
    TextMapEntity: M5,
    TextMapSynced: k5,
    TextMapState: G5
} = k0;

function Kh(t, e, r) {
    switch (t) {
        case "ok":
            return new I5;
        case "echo":
            return new S5({
                message: e.message
            });
        case "lock":
            return new v5({
                key: e.key,
                from: e.from
            });
        case "error":
            return zd({
                code: e.code,
                message: e.msg
            });
        case "error/observed":
            return new $5({
                to: e.to,
                opcode: e.opcode,
                error: zd({
                    code: e.error.code,
                    message: e.error.msg
                })
            });
        case "string":
            return e;
        case "text":
            return new w5({
                from: e.from,
                key: e.key,
                text: e.val,
                version: e.version,
                meta: r,
                acl: e.acl
            });
        case "text/echo":
            return new B5({
                message: e.message
            });
        case "object":
            return new P5({
                from: e.from,
                key: e.key,
                val: e.val,
                meta: r,
                acl: e.acl
            });
        case "object/echo":
            return new U5({
                message: e.message
            });
        case "drop":
            return new A5({
                key: e.key
            });
        case "artifact":
            return new l5({
                key: e.key,
                artifactId: e.artifactId,
                categoryId: e.categoryId,
                rootId: e.rootId,
                meta: r
            });
        case "client/connected":
            return new c5({
                id: e.id,
                userId: e.userId,
                name: e.name,
                role: e.role,
                reconnect: e.reconnect
            });
        case "client/disconnected":
            return new E5({
                id: e.id,
                role: e.role
            });
        case "client/kicked":
            return new h5({
                id: e.id,
                banned: e.banned,
                reason: e.reason
            });
        case "client/send":
            return new p5({
                to: e.to,
                from: e.from,
                body: e.body,
                userId: e.userID
            });
        case "client/welcome": {
            let n = new f5({
                id: e.id,
                name: e.name,
                secret: e.secret,
                reconnect: e.reconnect,
                here: e.here,
                profile: e.profile,
                replayEnd: e.replayEnd
            });
            if (e.entities) {
                let s = {};
                Object.entries(e.entities).forEach(([a, l]) => {
                    s[a] = Kh(l[0], l[1], l[2])
                }), n.entities = s
            }
            return n
        }
        case "doodle":
            return new g5({
                key: e.key,
                from: e.from,
                colors: e.val.colors,
                lines: e.val.lines,
                live: e.val.live,
                maxLayer: e.val.maxLayer,
                maxPoints: e.val.maxPoints,
                size: e.val.size,
                weights: e.val.weights,
                meta: r,
                acl: e.acl
            });
        case "doodle/line":
            return new T5({
                key: e.key,
                from: e.from,
                line: e.val
            });
        case "doodle/line/removed":
            return new R5({
                key: e.key,
                from: e.from,
                index: e.index
            });
        case "stack":
            return new d5({
                key: e.key,
                size: e.size,
                from: e.from,
                version: e.version,
                meta: e.meta,
                acl: e.acl
            });
        case "stack/element":
            return new m5({
                key: e.key,
                val: e.val
            });
        case "stack/elements":
            return new x5({
                key: e.key,
                vals: e.vals
            });
        case "number":
            return new N5({
                key: e.key,
                val: e.val,
                restrictions: e.restrictions,
                from: e.from,
                version: e.version,
                meta: r,
                acl: e.acl
            });
        case "text-map":
            return new M5({
                key: e.key,
                from: e.from,
                root: e.root,
                meta: r,
                acl: e.acl
            });
        case "text-map/state":
            return new G5({
                key: e.key,
                from: e.from,
                attributions: e.attributions,
                text: e.text
            });
        case "text-map/synced":
            return new k5({
                key: e.key,
                from: e.from,
                msg: e.msg
            });
        case "room/exit":
            return new y5({
                cause: e.cause
            });
        case "room/lock":
            return new C5;
        case "room/get-audience":
            return new L5({
                connections: e.connections
            });
        case "audience":
            return new Yd({
                key: t,
                count: e[1]
            });
        case "audience/count-group":
            return new _5({
                key: e.key,
                choices: e.choices,
                meta: r
            });
        case "audience/text-ring":
            return new K5({
                key: e.key,
                elements: e.elements,
                meta: r
            });
        case "audience/g-counter":
            return new b5({
                key: e.key,
                count: e.count,
                meta: r
            });
        case "audience/pn-counter":
            return new Yd({
                key: e.key,
                count: e.count,
                meta: r
            });
        default:
            return console.error(`failed to parse result of type ${t}: ${JSON.stringify(e,null,2)}`), e
    }
}

function V5(t) {
    let e = JSON.parse(t.data),
        r = e.opcode || e.type;
    return e.re ? new D5({
        pc: e.pc,
        re: e.re,
        opcode: r,
        result: Kh(r, e.result)
    }) : new O5({
        pc: e.pc,
        opcode: r,
        result: Kh(r, e.result)
    })
}
var F5 = {
    parseResponseMessage: V5
};
const Jd = RV,
    W5 = XS,
    H5 = bV,
    {
        CallError: j5
    } = bo,
    {
        ClientWelcome: X5
    } = U0,
    {
        CountGroup: q5
    } = P0,
    {
        DoodleEntity: Y5
    } = D0,
    {
        GCounter: z5
    } = B0,
    {
        Notification: Zd
    } = Pv,
    {
        NumberEntity: J5
    } = w0,
    {
        ObjectEntity: OE
    } = K0,
    {
        PNCounter: Z5
    } = $0,
    {
        Reply: Q5
    } = Bv,
    {
        Request: eF
    } = jV,
    {
        StackEntity: tF
    } = wv,
    {
        TextEntity: IE
    } = M0,
    {
        TextMapEntity: rF
    } = k0,
    {
        TextRing: nF
    } = G0,
    {
        parseResponseMessage: iF
    } = F5,
    sF = 1e3 + Math.floor(Math.random() * 500),
    Qd = 13e3;
let aF = class extends H5 {
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
        const r = W5.stringify(e),
            n = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${r}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${r}`;
        return new Promise((s, a) => {
            let l = !1,
                f = !1,
                E = _ => {
                    s(_), l = !0
                },
                h = _ => {
                    a(_), l = !0
                };
            this.conn = new Jd(n, "ecast-v0"), this.conn.onmessage = _ => {
                this.debugLog(`recv <- ${JSON.stringify(JSON.parse(_.data),null,2)}`);
                const R = iF(_);
                if (R instanceof Q5) this.onReply(R);
                else if (R instanceof Zd) {
                    if (R.result instanceof X5) f = !0, this.id = R.result.id, this.deviceId = R.result.deviceId, this.entities = R.result.entities, this.secret = R.result.secret, R.result.name && (this.name = R.result.name), E(R.result);
                    else if (!l) {
                        h(R.result);
                        return
                    }
                    this.onNotification(R)
                } else console.error(`failed to parse response messsage: ${R}`)
            }, this.conn.onerror = _ => {
                l ? this.emit("socketError", _) : h(_)
            }, this.conn.onclose = _ => {
                this.debugLog("onclose", _.code), f && _.code === 1006 ? this.reconnect() : this.emit("socketClose", _)
            }, this.conn.onopen = _ => {
                this.emit("socketOpen", _)
            }
        })
    }
    sleep(e) {
        return new Promise(r => setTimeout(r, e))
    }
    debugLog(...e) {
        this.debug && console.log(`%c[WSClient:${this.name}]`, "background-color:blue;color:white;", ...e)
    }
    async reconnect() {
        this.disconnect(), this.debugLog("Attempting to reconnect");
        let e = 1,
            r = sF;
        for (;;) try {
            this.emit("connection", {
                status: "connecting",
                attempt: e
            }), await this.connect(), this.debugLog("reconnected"), this.emit("connection", {
                status: "connected"
            });
            return
        } catch (n) {
            if (this.debugLog("reconnect error", n), n.code === 1005 || n.code === 1e3) {
                this.debugLog("unable to reconnect!", n), this.emit("socketClose", n);
                return
            }
            if (r >= Qd) {
                this.debugLog("reconnect failed!", n), this.emit("socketClose", n);
                return
            }
            e += 1, this.debugLog("waiting", r), this.emit("connection", {
                status: "waiting",
                attempt: e
            }), await this.sleep(r), r = Math.min(Qd, r * 2)
        }
    }
    disconnect() {
        this.conn && (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
    }
    onReply(e) {
        const r = e.re,
            n = this.pending[r];
        if (!n) {
            const s = new Zd(e);
            s.re = r, this.emit("notification", s);
            return
        }
        delete this.pending[r], e.result instanceof j5 ? n.reject(e.result) : n.resolve(e.result)
    }
    onNotification(e) {
        typeof e.result.whenReceived == "function" && e.result.whenReceived(this), this.emit("notification", e), this.emit(e.opcode, e.result)
    }
    send(e, r = {}) {
        if (!this.conn) throw new Error("No connection available");
        if (this.conn.readyState !== Jd.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
        const n = ++this.seq,
            s = new eF({
                seq: n,
                opcode: e,
                params: r
            }),
            a = new Promise((f, E) => {
                this.pending[n] = {
                    resolve: f,
                    reject: E,
                    request: s
                }
            }),
            l = JSON.stringify(s);
        return this.debugLog(`send -> ${l}`), this.conn.send(l), a
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
    mail(e, r) {
        return this.send("client/send", {
            from: this.id,
            to: e,
            body: r
        })
    }
    kick(e, r = !1, n) {
        return this.send("client/kick", {
            id: e,
            ban: r,
            reason: n
        })
    }
    async drop(e) {
        const r = await this.send("drop", {
            key: e
        });
        return delete this.entities[e], r
    }
    echo(e) {
        return this.send("echo", {
            message: e
        })
    }
    async lock(e) {
        const r = await this.send("lock", {
            key: e
        });
        return this.entities[e].meta.locked = !0, r
    }
    async createNumber(e, r = {}) {
        let n = {
            key: e
        };
        const {
            val: s = 0,
            acl: a,
            min: l,
            max: f,
            increment: E,
            type: h
        } = r;
        n.val = s, a && (n.acl = a), l != null && (n.min = l), f != null && (n.max = f), E && (n.increment = E), h && (n.type = h);
        const _ = await this.send("number/create", n);
        return this.entities[e] = new J5({
            key: e,
            val: s,
            restrictions: {
                min: l,
                max: f,
                increment: E,
                type: h
            },
            meta: {
                locked: !1
            }
        }), _
    }
    async decrementNumber(e) {
        const r = await this.send("number/decrement", {
            key: e
        });
        return this.entities[e].val = r.val, r
    }
    async getNumber(e) {
        const r = await this.send("number/get", {
            key: e
        });
        return this.entities[e] ? (this.entities[e].val = r.val, this.entities[e].restrictions = r.restrictions) : this.entities[e] = r, r
    }
    async incrementNumber(e) {
        const r = await this.send("number/increment", {
            key: e
        });
        return this.entities[e].val = r.val, r
    }
    async updateNumber(e, r) {
        const n = await this.send("number/update", {
            key: e,
            val: r
        });
        return this.entities[e].val = r, n
    }
    async createObject(e, r, n) {
        const s = {
            key: e,
            val: r
        };
        n && (s.acl = n);
        const a = await this.send("object/create", s);
        return this.entities[e] = new OE({
            key: e,
            val: r,
            meta: {
                locked: !1
            }
        }), a
    }
    echoObject(e) {
        return this.send("object/echo", {
            message: e
        })
    }
    async getObject(e) {
        const r = await this.send("object/get", {
            key: e
        });
        return this.entities[e] ? (this.entities[e].val = r.val, this.entities[e].version = r.version, this.entities[e].from = r.from) : this.entities[e] = r, r
    }
    async setObject(e, r, n) {
        const s = {
            key: e,
            val: r
        };
        n && (s.acl = n);
        const a = await this.send("object/set", s);
        return this.entities[e] = new OE({
            key: e,
            val: r,
            meta: {
                locked: !1
            }
        }), a
    }
    async updateObject(e, r) {
        const n = await this.send("object/update", {
            key: e,
            val: r
        });
        return this.entities[e] = new OE({
            key: e,
            val: r,
            meta: {
                locked: !1
            }
        }), n
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
    async createText(e, r, n) {
        const s = {
                key: e,
                val: r
            },
            {
                acl: a,
                accept: l,
                reject: f
            } = n;
        a && (s.acl = a), l && (s.accept = l), f && (s.reject = f);
        const E = await this.send("text/create", s);
        return this.entities[e] = new IE({
            key: e,
            text: r,
            meta: {
                locked: !1
            }
        }), E
    }
    async setText(e, r, n) {
        const s = {
            key: e,
            val: r
        };
        n && (s.acl = n);
        const a = await this.send("text/set", s);
        return this.entities[e] = new IE({
            key: e,
            text: r,
            meta: {
                locked: !1
            }
        }), a
    }
    async updateText(e, r) {
        const n = await this.send("text/update", {
            key: e,
            val: r
        });
        return this.entities[e] = new IE({
            key: e,
            text: r,
            meta: {
                locked: !1
            }
        }), n
    }
    async createTextMap(e, r = {}) {
        const {
            val: n,
            notifyHost: s,
            acl: a,
            accept: l,
            reject: f
        } = r;
        let E = {
            key: e
        };
        n && (E.val = r.val), s && (E.notifyHost = r.notifyHost), a && (E.acl = a), l && (E.accept = l), f && (E.reject = f);
        const h = await this.send("text-map/create", E);
        return this.entities[e] = new rF({
            key: e,
            acl: a,
            meta: {
                locked: !1
            }
        }), h
    }
    async syncTextMap(e, r) {
        return await this.send("text-map/sync", {
            key: e,
            msg: r
        })
    }
    async getTextMap(e, r) {
        const {
            includeNodes: n
        } = r;
        return await this.send("text-map/get", {
            key: e,
            includeNodes: n
        })
    }
    async createDoodle(e, r) {
        let n = {
            key: e
        };
        const {
            acl: s,
            colors: a,
            live: l,
            maxLayer: f,
            maxPoints: E,
            size: h,
            weights: _
        } = r;
        s && (n.acl = s), a && (n.colors = a), n.live = l, f != null && (n.maxLayer = f), E != null && (n.maxPoints = E), h && (n.size = h), _ && (n.weights = _);
        const R = await this.send("doodle/create", n);
        return this.entities[e] = new Y5({
            key: e,
            colors: a,
            lines: [],
            live: l,
            maxLayer: n.maxLayer || 0,
            maxPoints: n.maxPoints || 0,
            size: h,
            weights: _,
            meta: {
                locked: !1
            }
        }), R
    }
    async getDoodle(e) {
        const r = await this.send("doodle/get", {
            key: e
        });
        return this.entities[e] ? this.entities[e].lines = r.lines : this.entities[e] = r, r
    }
    async strokeDoodle(e, r) {
        const {
            color: n,
            weight: s,
            layer: a,
            points: l,
            brush: f
        } = r, E = {
            color: n,
            weight: s,
            layer: a,
            points: l
        };
        f && (E.brush = f);
        const h = await this.send("doodle/stroke", {
            key: e,
            ...E
        });
        return this.entities[e].lines.push(E), h
    }
    async undoDoodle(e) {
        const r = await this.send("doodle/undo", {
            key: e
        });
        return this.entities[e].lines.pop(), r
    }
    async createStack(e, r) {
        const n = {
            key: e
        };
        r && (n.acl = r);
        const s = await this.send("stack/create", n);
        return this.entities[e] = new tF({
            key: e,
            size: 0,
            meta: {
                locked: !1
            }
        }), s
    }
    pushStack(e, r) {
        return this.send("stack/push", {
            key: e,
            val: r
        })
    }
    bulkPushStack(e, r) {
        return this.send("stack/bulkpush", {
            key: e,
            vals: r
        })
    }
    peekStack(e, r) {
        return this.send("stack/peek", {
            key: e,
            size: r
        })
    }
    popStack(e) {
        return this.send("stack/pop", {
            key: e
        })
    }
    async createCountGroup(e, r) {
        const n = await this.send("audience/count-group/create", {
            name: e,
            options: r
        });
        return this.entities[e] = new q5({
            key: e,
            choices: r,
            meta: {
                locked: !1
            }
        }), n
    }
    incrementCountGroupCounter(e, r, n = 1) {
        return this.send("audience/count-group/increment", {
            name: e,
            vote: r,
            times: n
        })
    }
    getCountGroup(e) {
        return this.send("audience/count-group/get", {
            name: e
        })
    }
    async createGCounter(e, r) {
        const n = await this.send("audience/g-counter/create", {
            key: e,
            count: r
        });
        return this.entities[e] = new z5({
            key: e,
            count: r,
            meta: {
                locked: !1
            }
        }), n
    }
    incrementGCounter(e, r) {
        return this.send("audience/g-counter/increment", {
            key: e,
            times: r
        })
    }
    getGCounter(e) {
        return this.send("audience/g-counter/get", {
            key: e
        })
    }
    async createPNCounter(e, r) {
        const n = await this.send("audience/pn-counter/create", {
            key: e,
            count: r
        });
        return this.entities[e] = new Z5({
            key: e,
            count: r,
            meta: {
                locked: !1
            }
        }), n
    }
    incrementPNCounter(e, r) {
        return this.send("audience/pn-counter/increment", {
            key: e,
            times: r
        })
    }
    decrementPNCounter(e, r) {
        return this.send("audience/pn-counter/decrement", {
            key: e,
            times: r
        })
    }
    getPNCounter(e) {
        return this.send("audience/pn-counter/get", {
            key: e
        })
    }
    async createTextRing(e, r) {
        const n = {
                key: e
            },
            {
                limit: s,
                accept: a,
                reject: l
            } = r;
        s && (n.limit = s), a && (n.accept = a), l && (n.reject = l);
        const f = await this.send("audience/text-ring/create", n);
        return this.entities[e] = new nF({
            key: e,
            elements: [],
            limit: s,
            meta: {
                locked: !1
            }
        }), f
    }
    getTextRing(e) {
        return this.send("audience/text-ring/get", {
            name: e
        })
    }
    pushTextRing(e, r) {
        return this.send("audience/text-ring/push", {
            name: e,
            text: r
        })
    }
};
var oF = {
    WSClient: aF
};
const {
    APIClient: uF
} = TV, {
    WSClient: lF
} = oF, {
    CreateRoomReply: fF,
    GetRoomReply: cF
} = Cf, {
    ClientWelcome: EF,
    ClientDisconnected: hF
} = U0, {
    ArtifactEntity: pF
} = Kv, {
    GCounter: _F
} = B0, {
    NumberEntity: gF
} = w0, {
    TextEntity: TF
} = M0, {
    DoodleEntity: RF
} = D0, {
    ObjectEntity: dF
} = K0, {
    CountGroup: mF
} = P0, {
    DropEntity: xF
} = $v, {
    OK: AF
} = Mv, {
    RoomExit: SF
} = Cf, {
    TextRing: vF
} = G0, {
    TextMapEntity: bF
} = k0, {
    PNCounter: LF
} = $0;
var Li = {
    APIClient: uF,
    WSClient: lF,
    ClientWelcome: EF,
    CreateRoomReply: fF,
    DropEntity: xF,
    GetRoomReply: cF,
    ClientDisconnected: hF,
    RoomExit: SF,
    OK: AF,
    ArtifactEntity: pF,
    DoodleEntity: RF,
    NumberEntity: gF,
    CountGroup: mF,
    GCounter: _F,
    ObjectEntity: dF,
    PNCounter: LF,
    TextEntity: TF,
    TextRing: vF,
    TextMapEntity: bF
};

function yF(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var em = {
    exports: {}
};
(function(t, e) {
    (function(r, n) {
        n(e)
    })(dt, function(r) {
        var n = typeof window < "u" ? window : typeof dt < "u" ? dt : typeof self < "u" ? self : {},
            s = function(L, K) {
                if (K = K.split(":")[0], L = +L, !L) return !1;
                switch (K) {
                    case "http":
                    case "ws":
                        return L !== 80;
                    case "https":
                    case "wss":
                        return L !== 443;
                    case "ftp":
                        return L !== 21;
                    case "gopher":
                        return L !== 70;
                    case "file":
                        return !1
                }
                return L !== 0
            },
            a = Object.prototype.hasOwnProperty,
            l;

        function f(O) {
            try {
                return decodeURIComponent(O.replace(/\+/g, " "))
            } catch {
                return null
            }
        }

        function E(O) {
            try {
                return encodeURIComponent(O)
            } catch {
                return null
            }
        }

        function h(O) {
            for (var L = /([^=?#&]+)=?([^&]*)/g, K = {}, b; b = L.exec(O);) {
                var w = f(b[1]),
                    J = f(b[2]);
                w === null || J === null || w in K || (K[w] = J)
            }
            return K
        }

        function _(O, L) {
            L = L || "";
            var K = [],
                b, w;
            typeof L != "string" && (L = "?");
            for (w in O)
                if (a.call(O, w)) {
                    if (b = O[w], !b && (b === null || b === l || isNaN(b)) && (b = ""), w = E(w), b = E(b), w === null || b === null) continue;
                    K.push(w + "=" + b)
                } return K.length ? L + K.join("&") : ""
        }
        var R = _,
            T = h,
            v = {
                stringify: R,
                parse: T
            },
            C = /[\n\r\t]/g,
            U = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            B = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            y = /^[a-zA-Z]:/,
            V = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;

        function X(O) {
            return (O || "").toString().replace(V, "")
        }
        var M = [
                ["#", "hash"],
                ["?", "query"],
                function(L, K) {
                    return te(K.protocol) ? L.replace(/\\/g, "/") : L
                },
                ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/:(\d*)$/, "port", void 0, 1],
                [NaN, "hostname", void 0, 1, 1]
            ],
            W = {
                hash: 1,
                query: 1
            };

        function ee(O) {
            var L;
            typeof window < "u" ? L = window : typeof n < "u" ? L = n : typeof self < "u" ? L = self : L = {};
            var K = L.location || {};
            O = O || K;
            var b = {},
                w = typeof O,
                J;
            if (O.protocol === "blob:") b = new Se(unescape(O.pathname), {});
            else if (w === "string") {
                b = new Se(O, {});
                for (J in W) delete b[J]
            } else if (w === "object") {
                for (J in O) J in W || (b[J] = O[J]);
                b.slashes === void 0 && (b.slashes = U.test(O.href))
            }
            return b
        }

        function te(O) {
            return O === "file:" || O === "ftp:" || O === "http:" || O === "https:" || O === "ws:" || O === "wss:"
        }

        function fe(O, L) {
            O = X(O), O = O.replace(C, ""), L = L || {};
            var K = B.exec(O),
                b = K[1] ? K[1].toLowerCase() : "",
                w = !!K[2],
                J = !!K[3],
                oe = 0,
                ce;
            return w ? J ? (ce = K[2] + K[3] + K[4], oe = K[2].length + K[3].length) : (ce = K[2] + K[4], oe = K[2].length) : J ? (ce = K[3] + K[4], oe = K[3].length) : ce = K[4], b === "file:" ? oe >= 2 && (ce = ce.slice(2)) : te(b) ? ce = K[4] : b ? w && (ce = ce.slice(2)) : oe >= 2 && te(L.protocol) && (ce = K[4]), {
                protocol: b,
                slashes: w || te(b),
                slashesCount: oe,
                rest: ce
            }
        }

        function he(O, L) {
            if (O === "") return L;
            for (var K = (L || "/").split("/").slice(0, -1).concat(O.split("/")), b = K.length, w = K[b - 1], J = !1, oe = 0; b--;) K[b] === "." ? K.splice(b, 1) : K[b] === ".." ? (K.splice(b, 1), oe++) : oe && (b === 0 && (J = !0), K.splice(b, 1), oe--);
            return J && K.unshift(""), (w === "." || w === "..") && K.push(""), K.join("/")
        }

        function Se(O, L, K) {
            if (O = X(O), O = O.replace(C, ""), !(this instanceof Se)) return new Se(O, L, K);
            var b, w, J, oe, ce, ye, gt = M.slice(),
                rr = typeof L,
                be = this,
                ws = 0;
            for (rr !== "object" && rr !== "string" && (K = L, L = null), K && typeof K != "function" && (K = v.parse), L = ee(L), w = fe(O || "", L), b = !w.protocol && !w.slashes, be.slashes = w.slashes || b && L.slashes, be.protocol = w.protocol || L.protocol || "", O = w.rest, (w.protocol === "file:" && (w.slashesCount !== 2 || y.test(O)) || !w.slashes && (w.protocol || w.slashesCount < 2 || !te(be.protocol))) && (gt[3] = [/(.*)/, "pathname"]); ws < gt.length; ws++) {
                if (oe = gt[ws], typeof oe == "function") {
                    O = oe(O, be);
                    continue
                }
                J = oe[0], ye = oe[1], J !== J ? be[ye] = O : typeof J == "string" ? (ce = J === "@" ? O.lastIndexOf(J) : O.indexOf(J), ~ce && (typeof oe[2] == "number" ? (be[ye] = O.slice(0, ce), O = O.slice(ce + oe[2])) : (be[ye] = O.slice(ce), O = O.slice(0, ce)))) : (ce = J.exec(O)) && (be[ye] = ce[1], O = O.slice(0, ce.index)), be[ye] = be[ye] || b && oe[3] && L[ye] || "", oe[4] && (be[ye] = be[ye].toLowerCase())
            }
            K && (be.query = K(be.query)), b && L.slashes && be.pathname.charAt(0) !== "/" && (be.pathname !== "" || L.pathname !== "") && (be.pathname = he(be.pathname, L.pathname)), be.pathname.charAt(0) !== "/" && te(be.protocol) && (be.pathname = "/" + be.pathname), s(be.port, be.protocol) || (be.host = be.hostname, be.port = ""), be.username = be.password = "", be.auth && (ce = be.auth.indexOf(":"), ~ce ? (be.username = be.auth.slice(0, ce), be.username = encodeURIComponent(decodeURIComponent(be.username)), be.password = be.auth.slice(ce + 1), be.password = encodeURIComponent(decodeURIComponent(be.password))) : be.username = encodeURIComponent(decodeURIComponent(be.auth)), be.auth = be.password ? be.username + ":" + be.password : be.username), be.origin = be.protocol !== "file:" && te(be.protocol) && be.host ? be.protocol + "//" + be.host : "null", be.href = be.toString()
        }

        function Me(O, L, K) {
            var b = this;
            switch (O) {
                case "query":
                    typeof L == "string" && L.length && (L = (K || v.parse)(L)), b[O] = L;
                    break;
                case "port":
                    b[O] = L, s(L, b.protocol) ? L && (b.host = b.hostname + ":" + L) : (b.host = b.hostname, b[O] = "");
                    break;
                case "hostname":
                    b[O] = L, b.port && (L += ":" + b.port), b.host = L;
                    break;
                case "host":
                    b[O] = L, /:\d+$/.test(L) ? (L = L.split(":"), b.port = L.pop(), b.hostname = L.join(":")) : (b.hostname = L, b.port = "");
                    break;
                case "protocol":
                    b.protocol = L.toLowerCase(), b.slashes = !K;
                    break;
                case "pathname":
                case "hash":
                    if (L) {
                        var w = O === "pathname" ? "/" : "#";
                        b[O] = L.charAt(0) !== w ? w + L : L
                    } else b[O] = L;
                    break;
                case "username":
                case "password":
                    b[O] = encodeURIComponent(L);
                    break;
                case "auth":
                    var J = L.indexOf(":");
                    ~J ? (b.username = L.slice(0, J), b.username = encodeURIComponent(decodeURIComponent(b.username)), b.password = L.slice(J + 1), b.password = encodeURIComponent(decodeURIComponent(b.password))) : b.username = encodeURIComponent(decodeURIComponent(L))
            }
            for (var oe = 0; oe < M.length; oe++) {
                var ce = M[oe];
                ce[4] && (b[ce[1]] = b[ce[1]].toLowerCase())
            }
            return b.auth = b.password ? b.username + ":" + b.password : b.username, b.origin = b.protocol !== "file:" && te(b.protocol) && b.host ? b.protocol + "//" + b.host : "null", b.href = b.toString(), b
        }

        function Ee(O) {
            (!O || typeof O != "function") && (O = v.stringify);
            var L, K = this,
                b = K.host,
                w = K.protocol;
            w && w.charAt(w.length - 1) !== ":" && (w += ":");
            var J = w + (K.protocol && K.slashes || te(K.protocol) ? "//" : "");
            return K.username ? (J += K.username, K.password && (J += ":" + K.password), J += "@") : K.password ? (J += ":" + K.password, J += "@") : K.protocol !== "file:" && te(K.protocol) && !b && K.pathname !== "/" && (J += "@"), b[b.length - 1] === ":" && (b += ":"), J += b + K.pathname, L = typeof K.query == "object" ? O(K.query) : K.query, L && (J += L.charAt(0) !== "?" ? "?" + L : L), K.hash && (J += K.hash), J
        }
        Se.prototype = {
            set: Me,
            toString: Ee
        }, Se.extractProtocol = fe, Se.location = ee, Se.trimLeft = X, Se.qs = v;
        var Oe = Se;

        function He(O, L) {
            setTimeout(function(K) {
                return O.call(K)
            }, 4, L)
        }

        function H(O, L) {
            typeof process < "u" && console[O].call(null, L)
        }

        function Z(O, L) {
            O === void 0 && (O = []);
            var K = [];
            return O.forEach(function(b) {
                L(b) || K.push(b)
            }), K
        }

        function pe(O, L) {
            O === void 0 && (O = []);
            var K = [];
            return O.forEach(function(b) {
                L(b) && K.push(b)
            }), K
        }
        var Re = function() {
            this.listeners = {}
        };
        Re.prototype.addEventListener = function(L, K) {
            typeof K == "function" && (Array.isArray(this.listeners[L]) || (this.listeners[L] = []), pe(this.listeners[L], function(b) {
                return b === K
            }).length === 0 && this.listeners[L].push(K))
        }, Re.prototype.removeEventListener = function(L, K) {
            var b = this.listeners[L];
            this.listeners[L] = Z(b, function(w) {
                return w === K
            })
        }, Re.prototype.dispatchEvent = function(L) {
            for (var K = this, b = [], w = arguments.length - 1; w-- > 0;) b[w] = arguments[w + 1];
            var J = L.type,
                oe = this.listeners[J];
            return Array.isArray(oe) ? (oe.forEach(function(ce) {
                b.length > 0 ? ce.apply(K, b) : ce.call(K, L)
            }), !0) : !1
        };

        function Be(O) {
            var L = O.indexOf("?");
            return L >= 0 ? O.slice(0, L) : O
        }
        var Le = function() {
            this.urlMap = {}
        };
        Le.prototype.attachWebSocket = function(L, K) {
            var b = Be(K),
                w = this.urlMap[b];
            if (w && w.server && w.websockets.indexOf(L) === -1) return w.websockets.push(L), w.server
        }, Le.prototype.addMembershipToRoom = function(L, K) {
            var b = this.urlMap[Be(L.url)];
            b && b.server && b.websockets.indexOf(L) !== -1 && (b.roomMemberships[K] || (b.roomMemberships[K] = []), b.roomMemberships[K].push(L))
        }, Le.prototype.attachServer = function(L, K) {
            var b = Be(K),
                w = this.urlMap[b];
            if (!w) return this.urlMap[b] = {
                server: L,
                websockets: [],
                roomMemberships: {}
            }, L
        }, Le.prototype.serverLookup = function(L) {
            var K = Be(L),
                b = this.urlMap[K];
            if (b) return b.server
        }, Le.prototype.websocketsLookup = function(L, K, b) {
            var w = Be(L),
                J, oe = this.urlMap[w];
            if (J = oe ? oe.websockets : [], K) {
                var ce = oe.roomMemberships[K];
                J = ce || []
            }
            return b ? J.filter(function(ye) {
                return ye !== b
            }) : J
        }, Le.prototype.removeServer = function(L) {
            delete this.urlMap[Be(L)]
        }, Le.prototype.removeWebSocket = function(L, K) {
            var b = Be(K),
                w = this.urlMap[b];
            w && (w.websockets = Z(w.websockets, function(J) {
                return J === L
            }))
        }, Le.prototype.removeMembershipFromRoom = function(L, K) {
            var b = this.urlMap[Be(L.url)],
                w = b.roomMemberships[K];
            b && w !== null && (b.roomMemberships[K] = Z(w, function(J) {
                return J === L
            }))
        };
        var Ce = new Le,
            it = {
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
            ze = {
                CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                EVENT: {
                    CONSTRUCT: "Failed to construct 'Event':",
                    MESSAGE: "Failed to construct 'MessageEvent':",
                    CLOSE: "Failed to construct 'CloseEvent':"
                }
            },
            wt = function() {};
        wt.prototype.stopPropagation = function() {}, wt.prototype.stopImmediatePropagation = function() {}, wt.prototype.initEvent = function(L, K, b) {
            L === void 0 && (L = "undefined"), K === void 0 && (K = !1), b === void 0 && (b = !1), this.type = "" + L, this.bubbles = !!K, this.cancelable = !!b
        };
        var cr = function(O) {
                function L(K, b) {
                    if (b === void 0 && (b = {}), O.call(this), !K) throw new TypeError(ze.EVENT_ERROR + " 1 argument required, but only 0 present.");
                    if (typeof b != "object") throw new TypeError(ze.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                    var w = b.bubbles,
                        J = b.cancelable;
                    this.type = "" + K, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = J ? !!J : !1, this.cancelBubble = !1, this.bubbles = w ? !!w : !1
                }
                return O && (L.__proto__ = O), L.prototype = Object.create(O && O.prototype), L.prototype.constructor = L, L
            }(wt),
            Kt = function(O) {
                function L(K, b) {
                    if (b === void 0 && (b = {}), O.call(this), !K) throw new TypeError(ze.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                    if (typeof b != "object") throw new TypeError(ze.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                    var w = b.bubbles,
                        J = b.cancelable,
                        oe = b.data,
                        ce = b.origin,
                        ye = b.lastEventId,
                        gt = b.ports;
                    this.type = "" + K, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = J ? !!J : !1, this.canncelBubble = !1, this.bubbles = w ? !!w : !1, this.origin = "" + ce, this.ports = typeof gt > "u" ? null : gt, this.data = typeof oe > "u" ? null : oe, this.lastEventId = "" + (ye || "")
                }
                return O && (L.__proto__ = O), L.prototype = Object.create(O && O.prototype), L.prototype.constructor = L, L
            }(wt),
            br = function(O) {
                function L(K, b) {
                    if (b === void 0 && (b = {}), O.call(this), !K) throw new TypeError(ze.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                    if (typeof b != "object") throw new TypeError(ze.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                    var w = b.bubbles,
                        J = b.cancelable,
                        oe = b.code,
                        ce = b.reason,
                        ye = b.wasClean;
                    this.type = "" + K, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = J ? !!J : !1, this.cancelBubble = !1, this.bubbles = w ? !!w : !1, this.code = typeof oe == "number" ? parseInt(oe, 10) : 0, this.reason = "" + (ce || ""), this.wasClean = ye ? !!ye : !1
                }
                return O && (L.__proto__ = O), L.prototype = Object.create(O && O.prototype), L.prototype.constructor = L, L
            }(wt);

        function ct(O) {
            var L = O.type,
                K = O.target,
                b = new cr(L);
            return K && (b.target = K, b.srcElement = K, b.currentTarget = K), b
        }

        function mt(O) {
            var L = O.type,
                K = O.origin,
                b = O.data,
                w = O.target,
                J = new Kt(L, {
                    data: b,
                    origin: K
                });
            return w && (J.target = w, J.srcElement = w, J.currentTarget = w), J
        }

        function xt(O) {
            var L = O.code,
                K = O.reason,
                b = O.type,
                w = O.target,
                J = O.wasClean;
            J || (J = L === it.CLOSE_NORMAL || L === it.CLOSE_NO_STATUS);
            var oe = new br(b, {
                code: L,
                reason: K,
                wasClean: J
            });
            return w && (oe.target = w, oe.srcElement = w, oe.currentTarget = w), oe
        }

        function zt(O, L, K) {
            O.readyState = ne.CLOSING;
            var b = Ce.serverLookup(O.url),
                w = xt({
                    type: "close",
                    target: O.target,
                    code: L,
                    reason: K
                });
            He(function() {
                Ce.removeWebSocket(O, O.url), O.readyState = ne.CLOSED, O.dispatchEvent(w), b && b.dispatchEvent(w, b)
            }, O)
        }

        function P(O, L, K) {
            O.readyState = ne.CLOSING;
            var b = Ce.serverLookup(O.url),
                w = xt({
                    type: "close",
                    target: O.target,
                    code: L,
                    reason: K,
                    wasClean: !1
                }),
                J = ct({
                    type: "error",
                    target: O.target
                });
            He(function() {
                Ce.removeWebSocket(O, O.url), O.readyState = ne.CLOSED, O.dispatchEvent(J), O.dispatchEvent(w), b && b.dispatchEvent(w, b)
            }, O)
        }

        function d(O) {
            return Object.prototype.toString.call(O) !== "[object Blob]" && !(O instanceof ArrayBuffer) && (O = String(O)), O
        }
        var m = new WeakMap;

        function N(O) {
            if (m.has(O)) return m.get(O);
            var L = new Proxy(O, {
                get: function(b, w) {
                    if (w === "close") return function(ce) {
                        ce === void 0 && (ce = {});
                        var ye = ce.code || it.CLOSE_NORMAL,
                            gt = ce.reason || "";
                        zt(L, ye, gt)
                    };
                    if (w === "send") return function(ce) {
                        ce = d(ce), O.dispatchEvent(mt({
                            type: "message",
                            data: ce,
                            origin: this.url,
                            target: O
                        }))
                    };
                    var J = function(oe) {
                        return oe === "message" ? "server::" + oe : oe
                    };
                    return w === "on" ? function(ce, ye) {
                        O.addEventListener(J(ce), ye)
                    } : w === "off" ? function(ce, ye) {
                        O.removeEventListener(J(ce), ye)
                    } : w === "target" ? O : b[w]
                }
            });
            return m.set(O, L), L
        }

        function G(O) {
            var L = encodeURIComponent(O).match(/%[89ABab]/g);
            return O.length + (L ? L.length : 0)
        }

        function Y(O) {
            var L = new Oe(O),
                K = L.pathname,
                b = L.protocol,
                w = L.hash;
            if (!O) throw new TypeError(ze.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
            if (K || (L.pathname = "/"), b === "") throw new SyntaxError(ze.CONSTRUCTOR_ERROR + " The URL '" + L.toString() + "' is invalid.");
            if (b !== "ws:" && b !== "wss:") throw new SyntaxError(ze.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + b + "' is not allowed.");
            if (w !== "") throw new SyntaxError(ze.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + w + "'). Fragment identifiers are not allowed in WebSocket URLs.");
            return L.toString()
        }

        function ae(O) {
            if (O === void 0 && (O = []), !Array.isArray(O) && typeof O != "string") throw new SyntaxError(ze.CONSTRUCTOR_ERROR + " The subprotocol '" + O.toString() + "' is invalid.");
            typeof O == "string" && (O = [O]);
            var L = O.map(function(b) {
                    return {
                        count: 1,
                        protocol: b
                    }
                }).reduce(function(b, w) {
                    return b[w.protocol] = (b[w.protocol] || 0) + w.count, b
                }, {}),
                K = Object.keys(L).filter(function(b) {
                    return L[b] > 1
                });
            if (K.length > 0) throw new SyntaxError(ze.CONSTRUCTOR_ERROR + " The subprotocol '" + K[0] + "' is duplicated.");
            return O
        }
        var ne = function(O) {
            function L(b, w) {
                O.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = Y(b), w = ae(w), this.protocol = w[0] || "", this.binaryType = "blob", this.readyState = L.CONNECTING;
                var J = N(this),
                    oe = Ce.attachWebSocket(J, this.url);
                He(function() {
                    if (this.readyState === L.CONNECTING)
                        if (oe)
                            if (oe.options.verifyClient && typeof oe.options.verifyClient == "function" && !oe.options.verifyClient()) this.readyState = L.CLOSED, H("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), Ce.removeWebSocket(J, this.url), this.dispatchEvent(ct({
                                type: "error",
                                target: this
                            })), this.dispatchEvent(xt({
                                type: "close",
                                target: this,
                                code: it.CLOSE_NORMAL
                            }));
                            else {
                                if (oe.options.selectProtocol && typeof oe.options.selectProtocol == "function") {
                                    var ye = oe.options.selectProtocol(w),
                                        gt = ye !== "",
                                        rr = w.indexOf(ye) !== -1;
                                    if (gt && !rr) {
                                        this.readyState = L.CLOSED, H("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), Ce.removeWebSocket(J, this.url), this.dispatchEvent(ct({
                                            type: "error",
                                            target: this
                                        })), this.dispatchEvent(xt({
                                            type: "close",
                                            target: this,
                                            code: it.CLOSE_NORMAL
                                        }));
                                        return
                                    }
                                    this.protocol = ye
                                }
                                this.readyState = L.OPEN, this.dispatchEvent(ct({
                                    type: "open",
                                    target: this
                                })), oe.dispatchEvent(ct({
                                    type: "connection"
                                }), J)
                            }
                    else this.readyState = L.CLOSED, this.dispatchEvent(ct({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(xt({
                        type: "close",
                        target: this,
                        code: it.CLOSE_NORMAL
                    })), H("error", "WebSocket connection to '" + this.url + "' failed")
                }, this)
            }
            O && (L.__proto__ = O), L.prototype = Object.create(O && O.prototype), L.prototype.constructor = L;
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
            }, K.onopen.set = function(b) {
                this.removeEventListener("open", this._onopen), this._onopen = b, this.addEventListener("open", b)
            }, K.onmessage.set = function(b) {
                this.removeEventListener("message", this._onmessage), this._onmessage = b, this.addEventListener("message", b)
            }, K.onclose.set = function(b) {
                this.removeEventListener("close", this._onclose), this._onclose = b, this.addEventListener("close", b)
            }, K.onerror.set = function(b) {
                this.removeEventListener("error", this._onerror), this._onerror = b, this.addEventListener("error", b)
            }, L.prototype.send = function(w) {
                var J = this;
                if (this.readyState === L.CONNECTING) throw new Error("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state");
                var oe = mt({
                        type: "server::message",
                        origin: this.url,
                        data: d(w)
                    }),
                    ce = Ce.serverLookup(this.url);
                ce && He(function() {
                    J.dispatchEvent(oe, w)
                }, ce)
            }, L.prototype.close = function(w, J) {
                if (w !== void 0 && (typeof w != "number" || w !== 1e3 && (w < 3e3 || w > 4999))) throw new TypeError(ze.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + w + " is neither.");
                if (J !== void 0) {
                    var oe = G(J);
                    if (oe > 123) throw new SyntaxError(ze.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                }
                if (!(this.readyState === L.CLOSING || this.readyState === L.CLOSED)) {
                    var ce = N(this);
                    this.readyState === L.CONNECTING ? P(ce, w || it.CLOSE_ABNORMAL, J) : zt(ce, w || it.CLOSE_NO_STATUS, J)
                }
            }, Object.defineProperties(L.prototype, K), L
        }(Re);
        ne.CONNECTING = 0, ne.prototype.CONNECTING = ne.CONNECTING, ne.OPEN = 1, ne.prototype.OPEN = ne.OPEN, ne.CLOSING = 2, ne.prototype.CLOSING = ne.CLOSING, ne.CLOSED = 3, ne.prototype.CLOSED = ne.CLOSED;
        var le = function(O) {
            function L(b, w) {
                var J = this;
                b === void 0 && (b = "socket.io"), w === void 0 && (w = ""), O.call(this), this.binaryType = "blob";
                var oe = new Oe(b);
                oe.pathname || (oe.pathname = "/"), this.url = oe.toString(), this.readyState = L.CONNECTING, this.protocol = "", this.target = this, typeof w == "string" || typeof w == "object" && w !== null ? this.protocol = w : Array.isArray(w) && w.length > 0 && (this.protocol = w[0]);
                var ce = Ce.attachWebSocket(this, this.url);
                He(function() {
                    ce ? (this.readyState = L.OPEN, ce.dispatchEvent(ct({
                        type: "connection"
                    }), ce, this), ce.dispatchEvent(ct({
                        type: "connect"
                    }), ce, this), this.dispatchEvent(ct({
                        type: "connect",
                        target: this
                    }))) : (this.readyState = L.CLOSED, this.dispatchEvent(ct({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(xt({
                        type: "close",
                        target: this,
                        code: it.CLOSE_NORMAL
                    })), H("error", "Socket.io connection to '" + this.url + "' failed"))
                }, this), this.addEventListener("close", function(ye) {
                    J.dispatchEvent(xt({
                        type: "disconnect",
                        target: ye.target,
                        code: ye.code
                    }))
                })
            }
            O && (L.__proto__ = O), L.prototype = Object.create(O && O.prototype), L.prototype.constructor = L;
            var K = {
                broadcast: {}
            };
            return L.prototype.close = function() {
                if (this.readyState === L.OPEN) {
                    var w = Ce.serverLookup(this.url);
                    return Ce.removeWebSocket(this, this.url), this.readyState = L.CLOSED, this.dispatchEvent(xt({
                        type: "close",
                        target: this,
                        code: it.CLOSE_NORMAL
                    })), w && w.dispatchEvent(xt({
                        type: "disconnect",
                        target: this,
                        code: it.CLOSE_NORMAL
                    }), w), this
                }
            }, L.prototype.disconnect = function() {
                return this.close()
            }, L.prototype.emit = function(w) {
                for (var J = [], oe = arguments.length - 1; oe-- > 0;) J[oe] = arguments[oe + 1];
                if (this.readyState !== L.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var ce = mt({
                        type: w,
                        origin: this.url,
                        data: J
                    }),
                    ye = Ce.serverLookup(this.url);
                return ye && ye.dispatchEvent.apply(ye, [ce].concat(J)), this
            }, L.prototype.send = function(w) {
                return this.emit("message", w), this
            }, K.broadcast.get = function() {
                if (this.readyState !== L.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var b = this,
                    w = Ce.serverLookup(this.url);
                if (!w) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                return {
                    emit: function(oe, ce) {
                        return w.emit(oe, ce, {
                            websockets: Ce.websocketsLookup(b.url, null, b)
                        }), b
                    },
                    to: function(oe) {
                        return w.to(oe, b)
                    },
                    in: function(oe) {
                        return w.in(oe, b)
                    }
                }
            }, L.prototype.on = function(w, J) {
                return this.addEventListener(w, J), this
            }, L.prototype.off = function(w, J) {
                this.removeEventListener(w, J)
            }, L.prototype.hasListeners = function(w) {
                var J = this.listeners[w];
                return Array.isArray(J) ? !!J.length : !1
            }, L.prototype.join = function(w) {
                Ce.addMembershipToRoom(this, w)
            }, L.prototype.leave = function(w) {
                Ce.removeMembershipFromRoom(this, w)
            }, L.prototype.to = function(w) {
                return this.broadcast.to(w)
            }, L.prototype.in = function() {
                return this.to.apply(null, arguments)
            }, L.prototype.dispatchEvent = function(w) {
                for (var J = this, oe = [], ce = arguments.length - 1; ce-- > 0;) oe[ce] = arguments[ce + 1];
                var ye = w.type,
                    gt = this.listeners[ye];
                if (!Array.isArray(gt)) return !1;
                gt.forEach(function(rr) {
                    oe.length > 0 ? rr.apply(J, oe) : rr.call(J, w.data ? w.data : w)
                })
            }, Object.defineProperties(L.prototype, K), L
        }(Re);
        le.CONNECTING = 0, le.OPEN = 1, le.CLOSING = 2, le.CLOSED = 3;
        var z = function(L, K) {
            return new le(L, K)
        };
        z.connect = function(L, K) {
            return z(L, K)
        };
        var F = function(O) {
            return O.reduce(function(L, K) {
                return L.indexOf(K) > -1 ? L : L.concat(K)
            }, [])
        };

        function j() {
            return typeof window < "u" ? window : typeof process == "object" && typeof yF == "function" && typeof dt == "object" ? dt : this
        }
        var xe = {
                mock: !0,
                verifyClient: null,
                selectProtocol: null
            },
            me = function(O) {
                function L(K, b) {
                    b === void 0 && (b = xe), O.call(this);
                    var w = new Oe(K);
                    w.pathname || (w.pathname = "/"), this.url = w.toString(), this.originalWebSocket = null;
                    var J = Ce.attachServer(this, this.url);
                    if (!J) throw this.dispatchEvent(ct({
                        type: "error"
                    })), new Error("A mock server is already listening on this url");
                    this.options = Object.assign({}, xe, b), this.options.mock && this.mockWebsocket()
                }
                return O && (L.__proto__ = O), L.prototype = Object.create(O && O.prototype), L.prototype.constructor = L, L.prototype.mockWebsocket = function() {
                    var b = j();
                    this.originalWebSocket = b.WebSocket, b.WebSocket = ne
                }, L.prototype.restoreWebsocket = function() {
                    var b = j();
                    this.originalWebSocket !== null && (b.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                }, L.prototype.stop = function(b) {
                    b === void 0 && (b = function() {}), this.options.mock && this.restoreWebsocket(), Ce.removeServer(this.url), typeof b == "function" && b()
                }, L.prototype.on = function(b, w) {
                    this.addEventListener(b, w)
                }, L.prototype.off = function(b, w) {
                    this.removeEventListener(b, w)
                }, L.prototype.close = function(b) {
                    b === void 0 && (b = {});
                    var w = b.code,
                        J = b.reason,
                        oe = b.wasClean,
                        ce = Ce.websocketsLookup(this.url);
                    Ce.removeServer(this.url), ce.forEach(function(ye) {
                        ye.readyState = ne.CLOSED, ye.dispatchEvent(xt({
                            type: "close",
                            target: ye.target,
                            code: w || it.CLOSE_NORMAL,
                            reason: J || "",
                            wasClean: oe
                        }))
                    }), this.dispatchEvent(xt({
                        type: "close"
                    }), this)
                }, L.prototype.emit = function(b, w, J) {
                    var oe = this;
                    J === void 0 && (J = {});
                    var ce = J.websockets;
                    ce || (ce = Ce.websocketsLookup(this.url));
                    var ye;
                    typeof J != "object" || arguments.length > 3 ? (w = Array.prototype.slice.call(arguments, 1, arguments.length), ye = w.map(function(gt) {
                        return d(gt)
                    })) : ye = d(w), ce.forEach(function(gt) {
                        var rr = gt instanceof le ? w : ye;
                        Array.isArray(rr) ? gt.dispatchEvent.apply(gt, [mt({
                            type: b,
                            data: rr,
                            origin: oe.url,
                            target: gt.target
                        })].concat(rr)) : gt.dispatchEvent(mt({
                            type: b,
                            data: rr,
                            origin: oe.url,
                            target: gt.target
                        }))
                    })
                }, L.prototype.clients = function() {
                    return Ce.websocketsLookup(this.url)
                }, L.prototype.to = function(b, w, J) {
                    var oe = this;
                    J === void 0 && (J = []);
                    var ce = this,
                        ye = F(J.concat(Ce.websocketsLookup(this.url, b, w)));
                    return {
                        to: function(gt, rr) {
                            return oe.to.call(oe, gt, rr, ye)
                        },
                        emit: function(rr, be) {
                            ce.emit(rr, be, {
                                websockets: ye
                            })
                        }
                    }
                }, L.prototype.in = function() {
                    for (var b = [], w = arguments.length; w--;) b[w] = arguments[w];
                    return this.to.apply(null, b)
                }, L.prototype.simulate = function(b) {
                    var w = Ce.websocketsLookup(this.url);
                    b === "error" && w.forEach(function(J) {
                        J.readyState = ne.CLOSED, J.dispatchEvent(ct({
                            type: "error",
                            target: J.target
                        }))
                    })
                }, L
            }(Re);
        me.of = function(L) {
            return new me(L)
        };
        var we = me,
            Xe = ne,
            ke = z;
        r.Server = we, r.WebSocket = Xe, r.SocketIO = ke, Object.defineProperty(r, "__esModule", {
            value: !0
        })
    })
})(em, em.exports);
var kv = {
    exports: {}
};
(function(t) {
    (function() {
        function e(f, E) {
            var h = f.x - E.x,
                _ = f.y - E.y;
            return h * h + _ * _
        }

        function r(f, E, h) {
            var _ = E.x,
                R = E.y,
                T = h.x - _,
                v = h.y - R;
            if (T !== 0 || v !== 0) {
                var C = ((f.x - _) * T + (f.y - R) * v) / (T * T + v * v);
                C > 1 ? (_ = h.x, R = h.y) : C > 0 && (_ += T * C, R += v * C)
            }
            return T = f.x - _, v = f.y - R, T * T + v * v
        }

        function n(f, E) {
            for (var h = f[0], _ = [h], R, T = 1, v = f.length; T < v; T++) R = f[T], e(R, h) > E && (_.push(R), h = R);
            return h !== R && _.push(R), _
        }

        function s(f, E, h, _, R) {
            for (var T = _, v, C = E + 1; C < h; C++) {
                var U = r(f[C], f[E], f[h]);
                U > T && (v = C, T = U)
            }
            T > _ && (v - E > 1 && s(f, E, v, _, R), R.push(f[v]), h - v > 1 && s(f, v, h, _, R))
        }

        function a(f, E) {
            var h = f.length - 1,
                _ = [f[0]];
            return s(f, 0, h, E, _), _.push(f[h]), _
        }

        function l(f, E, h) {
            if (f.length <= 2) return f;
            var _ = E !== void 0 ? E * E : 1;
            return f = h ? f : n(f, _), f = a(f, _), f
        }
        t.exports = l, t.exports.default = l
    })()
})(kv);
var CF = kv.exports;
const Gv = Hi(CF);
class OF {
    constructor(e, r, n, s) {
        ge(this, "renderCanvas");
        ge(this, "canvases", []);
        ge(this, "maxPoints", Number.MAX_SAFE_INTEGER);
        ge(this, "tolerance", 1);
        ge(this, "lines", []);
        ge(this, "lines2", []);
        ge(this, "currentLine", {
            color: "#000",
            thickness: 0,
            points: []
        });
        ge(this, "isSubmitting", !1);
        ge(this, "isInteracting", !1);
        ge(this, "currentColor", "#000");
        ge(this, "currentThickness", 4);
        ge(this, "currentFrame", 0);
        ge(this, "width", 400);
        ge(this, "height", 400);
        this.width = r, this.height = n, this.renderCanvas = document.createElement("canvas"), s.thickness && (this.currentThickness = s.thickness), s.color && (this.currentColor = s.color), s.maxPoints && (this.maxPoints = s.maxPoints), this.setupElements(e), this.draw()
    }
    createCanvasObject(e) {
        const r = document.createElement("canvas");
        r.width = this.width, r.height = this.height, r.style.display = "none", this.canvases.push({
            name: e,
            element: r,
            dirty: !0
        })
    }
    getCanvasObject(e) {
        const r = this.canvases.find(n => n.name === e);
        if (!r) throw new Error(`No canvas found with name ${e}`);
        return r
    }
    setupElements(e) {
        this.renderCanvas.classList.add("draw-canvas"), this.renderCanvas.width = this.width, this.renderCanvas.height = this.height, this.renderCanvas.style.width = "100%", this.renderCanvas.style.margin = "0px auto", this.renderCanvas.style.height = "100%", this.renderCanvas.style.top = "0", this.renderCanvas.style.left = "0", e.append(this.renderCanvas), this.createCanvasObject("inactive"), this.createCanvasObject("active"), this.createCanvasObject("line")
    }
    get submitting() {
        return this.isSubmitting
    }
    set submitting(e) {
        this.isSubmitting = e
    }
    get color() {
        return this.currentColor
    }
    set color(e) {
        this.currentColor = e
    }
    get thickness() {
        return this.currentThickness
    }
    set thickness(e) {
        this.currentThickness = e
    }
    get frame() {
        return this.currentFrame
    }
    set frame(e) {
        this.currentFrame = e, this.getCanvasObject("active").dirty = !0, this.getCanvasObject("inactive").dirty = !0, this.draw()
    }
    get canvasElement() {
        return this.renderCanvas
    }
    toObject() {
        return {
            frame0: this.exportLines(this.lines),
            frame1: this.exportLines(this.lines2)
        }
    }
    onDown(e) {
        this.isSubmitting || (this.isInteracting = !0, this.addLine(e), this.getCanvasObject("line").dirty = !0, this.draw())
    }
    onMove(e) {
        if (!this.isInteracting || this.isSubmitting) return;
        const r = this.getLastDrawnPoint();
        if (!r) {
            this.addPoint(e), this.getCanvasObject("line").dirty = !0;
            return
        }
        const n = .5 * this.thickness,
            s = {
                x: e.x - r.x,
                y: e.y - r.y
            },
            a = Math.sqrt(s.x ** 2 + s.y ** 2);
        if (a > n) {
            const l = (a - n) / a,
                f = {
                    x: s.x * l,
                    y: s.y * l
                },
                E = {
                    x: r.x + f.x,
                    y: r.y + f.y
                };
            this.addPoint(E), this.getCanvasObject("line").dirty = !0, this.draw()
        }
    }
    onUp() {
        this.isSubmitting || this.isInteracting && (this.isInteracting = !1, this.endLine(), this.getCanvasObject("active").dirty = !0, this.getCanvasObject("line").dirty = !0, this.draw())
    }
    addLine(e) {
        const r = this.currentColor,
            n = this.currentThickness;
        this.currentLine = {
            color: r,
            thickness: n,
            points: []
        }, this.addPoint(e)
    }
    addPoint(e) {
        const r = this.currentLine;
        if (!r) return;
        const n = {
            x: Math.min(Math.max(.5 * r.thickness, e.x), this.renderCanvas.width - .5 * r.thickness),
            y: Math.min(Math.max(.5 * r.thickness, e.y), this.renderCanvas.height - .5 * r.thickness)
        };
        r.points.push(n)
    }
    getLastDrawnPoint() {
        return this.currentLine.points.length === 0 ? null : this.currentLine.points[this.currentLine.points.length - 1]
    }
    endLine() {
        const r = this.currentFrame === 0 ? this.lines : this.lines2,
            n = Gv(this.currentLine.points);
        r.push({
            ...this.currentLine,
            points: n
        }), this.currentLine = {
            color: "#000",
            thickness: 0,
            points: []
        }
    }
    parseLines(e) {
        let r = "#000",
            n = 1;
        return e.map(s => {
            let a = [];
            return typeof s.points == "string" ? a = s.points.split("|").map(l => {
                const [f, E] = l.split(",");
                return {
                    x: parseInt(f, 10),
                    y: parseInt(E, 10)
                }
            }) : a = s.points, s.color && s.color !== r && (r = s.color), s.thickness && s.thickness !== n && (n = s.thickness), {
                color: r,
                thickness: n,
                points: a
            }
        })
    }
    exportLines(e) {
        return e.map(r => ({
            ...r,
            points: r.points.map(n => `${n.x},${n.y}`).join("|")
        }))
    }
    draw() {
        const e = this.renderCanvas.getContext("2d");
        if (!e) return;
        e.clearRect(0, 0, this.width, this.height);
        const r = this.getCanvasObject("inactive");
        if (r.dirty) {
            const a = r.element.getContext("2d");
            a.clearRect(0, 0, this.width, this.height), (this.currentFrame === 0 ? this.lines2 : this.lines).forEach(f => this.drawLine(a, f)), r.dirty = !1
        }
        e.save(), e.globalAlpha = .1, e.drawImage(r.element, 0, 0), e.restore();
        const n = this.getCanvasObject("active");
        if (n.dirty) {
            const a = n.element.getContext("2d");
            a.clearRect(0, 0, this.width, this.height), (this.currentFrame === 0 ? this.lines : this.lines2).forEach(f => this.drawLine(a, f)), n.dirty = !1
        }
        e.drawImage(n.element, 0, 0);
        const s = this.getCanvasObject("line");
        if (s.dirty) {
            const a = s.element.getContext("2d");
            a.clearRect(0, 0, this.width, this.height), this.drawLine(a, this.currentLine), s.dirty = !1
        }
        e.drawImage(s.element, 0, 0)
    }
    drawLine(e, r) {
        e.strokeStyle = r.color, e.lineWidth = r.thickness, e.lineCap = "round", e.lineJoin = "round", e.fillStyle = r.color, e.strokeStyle = r.color, e.beginPath(), r.points.forEach((n, s) => {
            s === 0 && (e.save(), e.arc(n.x, n.y, r.thickness / 2, 0, 2 * Math.PI), e.fill(), e.restore(), e.beginPath(), e.moveTo(n.x, n.y)), e.lineTo(n.x, n.y)
        }), e.stroke()
    }
}
class Vv {
    constructor(e, r) {
        ge(this, "stageElement");
        ge(this, "width", 400);
        ge(this, "height", 400);
        ge(this, "interactCanvas");
        ge(this, "isDrawing", !1);
        ge(this, "callbacks", {});
        ge(this, "capturedPointer");
        ge(this, "onPointerDown", e => {
            if (e.preventDefault(), !e.isPrimary || this.capturedPointer) return;
            const r = this.getEventPoint(e);
            this.interactCanvas.onDown(r), this.stageElement.setPointerCapture(e.pointerId), this.capturedPointer = {
                pointerId: e.pointerId,
                pointerType: e.pointerType
            }
        });
        ge(this, "onPointerMove", e => {
            if (e.preventDefault(), !this.capturedPointer || !e.isPrimary || e.pointerType !== this.capturedPointer.pointerType) return;
            const r = this.getEventPoint(e);
            this.interactCanvas.onMove(r)
        });
        ge(this, "onLostPointerCapture", e => {
            if (e.preventDefault(), !this.capturedPointer || !e.isPrimary || e.pointerType !== this.capturedPointer.pointerType) return;
            this.interactCanvas.onUp(), this.emit("up");
            const r = this.capturedPointer.pointerId;
            this.stageElement.hasPointerCapture(r) && this.stageElement.releasePointerCapture(r), this.capturedPointer = void 0
        });
        ge(this, "onPointerEnd", e => {
            if (e.preventDefault(), !this.capturedPointer || !e.isPrimary || e.pointerType !== this.capturedPointer.pointerType) return;
            this.interactCanvas.onUp(), this.emit("up");
            const r = this.capturedPointer.pointerId;
            this.stageElement.hasPointerCapture(r) && this.stageElement.releasePointerCapture(r), this.capturedPointer = void 0
        });
        ge(this, "onMouseDown", e => {
            e.preventDefault();
            const r = this.getEventPoint(e);
            this.interactCanvas.onDown(r), this.isDrawing = !0
        });
        ge(this, "onMouseMove", e => {
            if (e.preventDefault(), !this.isDrawing) return;
            const r = this.getEventPoint(e);
            this.interactCanvas.onMove(r)
        });
        ge(this, "onMouseUp", e => {
            e.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
        });
        ge(this, "onTouchStart", e => {
            e.preventDefault();
            const r = this.getEventPoint(e.touches[0]);
            this.interactCanvas.onDown(r), this.isDrawing = !0
        });
        ge(this, "onTouchMove", e => {
            if (e.preventDefault(), !this.isDrawing) return;
            const r = this.getEventPoint(e.touches[0]);
            this.interactCanvas.onMove(r)
        });
        ge(this, "onTouchCancel", e => {
            e.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
        });
        ge(this, "onTouchEnd", e => {
            e.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
        });
        r.width && (this.width = r.width), r.height && (this.height = r.height), this.stageElement = e, this.setupElements(), this.setupEvents(), r.InteractCanvas ? this.interactCanvas = new r.InteractCanvas(e, this.width, this.height, r) : this.interactCanvas = new OF(e, this.width, this.height, r)
    }
    on(e, r) {
        this.callbacks[e] = this.callbacks[e] || [], this.callbacks[e].push(r)
    }
    off(e, r) {
        this.callbacks[e] = (this.callbacks[e] || []).filter(n => n !== r)
    }
    emit(e, ...r) {
        (this.callbacks[e] || []).map(n => n(...r))
    }
    beforeDestroy() {
        this.tearDownEvents()
    }
    get canvas() {
        return this.interactCanvas
    }
    getObject() {
        return this.interactCanvas.toObject()
    }
    setupElements() {
        this.stageElement.style.touchAction = "none"
    }
    setupEvents() {
        typeof PointerEvent == "function" ? (this.stageElement.addEventListener("pointerdown", this.onPointerDown), this.stageElement.addEventListener("pointermove", this.onPointerMove), this.stageElement.addEventListener("lostpointercapture", this.onLostPointerCapture), this.stageElement.addEventListener("pointerup", this.onPointerEnd)) : (this.stageElement.addEventListener("mousedown", this.onMouseDown), this.stageElement.addEventListener("mousemove", this.onMouseMove), document.addEventListener("mouseup", this.onMouseUp.bind(this.stageElement)), this.stageElement.addEventListener("touchstart", this.onTouchStart), this.stageElement.addEventListener("touchmove", this.onTouchMove), this.stageElement.addEventListener("touchcancel", this.onTouchCancel), this.stageElement.addEventListener("touchend", this.onTouchEnd))
    }
    tearDownEvents() {
        typeof PointerEvent == "function" ? (this.stageElement.removeEventListener("pointerdown", this.onPointerDown), this.stageElement.removeEventListener("pointermove", this.onPointerMove), this.stageElement.removeEventListener("lostpointercapture", this.onLostPointerCapture), this.stageElement.removeEventListener("pointerup", this.onPointerEnd)) : (this.stageElement.removeEventListener("mousedown", this.onMouseDown), this.stageElement.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("mouseup", this.onMouseUp), this.stageElement.removeEventListener("touchstart", this.onTouchStart), this.stageElement.removeEventListener("touchmove", this.onTouchMove), this.stageElement.removeEventListener("touchcancel", this.onTouchCancel), this.stageElement.removeEventListener("touchend", this.onTouchEnd))
    }
    getPropValue(e, r) {
        return parseFloat(e.getPropertyValue(r)) || 0
    }
    getCanvasOffset() {
        const e = this.interactCanvas.canvasElement,
            r = window.getComputedStyle(e),
            n = e.getBoundingClientRect(),
            s = r.transform !== "none" ? r.transform.replace("matrix(", "").split(",") : ["1", "1", "1", "1"],
            a = parseFloat(s[0]),
            l = parseFloat(s[3]),
            f = (this.getPropValue(r, "border-left-width") + this.getPropValue(r, "border-right-width")) * a,
            E = (this.getPropValue(r, "border-top-width") + this.getPropValue(r, "border-bottom-width")) * l,
            h = (this.getPropValue(r, "padding-left") + this.getPropValue(r, "padding-right")) * a,
            _ = (this.getPropValue(r, "padding-top") + this.getPropValue(r, "padding-bottom")) * l;
        return {
            scaleX: (n.width - f - h) / e.width,
            scaleY: (n.height - E - _) / e.height,
            offsetX: n.left + (this.getPropValue(r, "border-left-width") + this.getPropValue(r, "padding-left")) * a,
            offsetY: n.top + (this.getPropValue(r, "border-top-width") + this.getPropValue(r, "padding-top")) * l
        }
    }
    getEventPoint(e) {
        const {
            scaleX: r,
            scaleY: n,
            offsetX: s,
            offsetY: a
        } = this.getCanvasOffset(), l = e.clientX, f = e.clientY;
        let E = (l - s) / r,
            h = (f - a) / n;
        return E = Math.max(0, Math.min(this.width, E)), h = Math.max(0, Math.min(this.height, h)), E = Math.round(E), h = Math.round(h), {
            x: E,
            y: h
        }
    }
}
var Fv = {},
    V0 = {},
    F0 = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.EXTENDED_PICTOGRAPHIC = t.CLUSTER_BREAK = void 0,
        function(e) {
            e[e.CR = 0] = "CR", e[e.LF = 1] = "LF", e[e.CONTROL = 2] = "CONTROL", e[e.EXTEND = 3] = "EXTEND", e[e.REGIONAL_INDICATOR = 4] = "REGIONAL_INDICATOR", e[e.SPACINGMARK = 5] = "SPACINGMARK", e[e.L = 6] = "L", e[e.V = 7] = "V", e[e.T = 8] = "T", e[e.LV = 9] = "LV", e[e.LVT = 10] = "LVT", e[e.OTHER = 11] = "OTHER", e[e.PREPEND = 12] = "PREPEND", e[e.E_BASE = 13] = "E_BASE", e[e.E_MODIFIER = 14] = "E_MODIFIER", e[e.ZWJ = 15] = "ZWJ", e[e.GLUE_AFTER_ZWJ = 16] = "GLUE_AFTER_ZWJ", e[e.E_BASE_GAZ = 17] = "E_BASE_GAZ"
        }(t.CLUSTER_BREAK || (t.CLUSTER_BREAK = {})), t.EXTENDED_PICTOGRAPHIC = 101
})(F0);
var W0 = {};
Object.defineProperty(W0, "__esModule", {
    value: !0
});
const Ze = F0,
    zn = 0,
    NE = 1,
    IF = 2,
    NF = 3,
    UF = 4;
class PF {
    static isSurrogate(e, r) {
        return 55296 <= e.charCodeAt(r) && e.charCodeAt(r) <= 56319 && 56320 <= e.charCodeAt(r + 1) && e.charCodeAt(r + 1) <= 57343
    }
    static codePointAt(e, r) {
        r === void 0 && (r = 0);
        const n = e.charCodeAt(r);
        if (55296 <= n && n <= 56319 && r < e.length - 1) {
            const s = n,
                a = e.charCodeAt(r + 1);
            return 56320 <= a && a <= 57343 ? (s - 55296) * 1024 + (a - 56320) + 65536 : s
        }
        if (56320 <= n && n <= 57343 && r >= 1) {
            const s = e.charCodeAt(r - 1),
                a = n;
            return 55296 <= s && s <= 56319 ? (s - 55296) * 1024 + (a - 56320) + 65536 : a
        }
        return n
    }
    static shouldBreak(e, r, n, s, a, l) {
        const f = [e].concat(r).concat([n]),
            E = [s].concat(a).concat([l]),
            h = f[f.length - 2],
            _ = n,
            R = l,
            T = f.lastIndexOf(Ze.CLUSTER_BREAK.REGIONAL_INDICATOR);
        if (T > 0 && f.slice(1, T).every(function(C) {
                return C === Ze.CLUSTER_BREAK.REGIONAL_INDICATOR
            }) && [Ze.CLUSTER_BREAK.PREPEND, Ze.CLUSTER_BREAK.REGIONAL_INDICATOR].indexOf(h) === -1) return f.filter(function(C) {
            return C === Ze.CLUSTER_BREAK.REGIONAL_INDICATOR
        }).length % 2 === 1 ? NF : UF;
        if (h === Ze.CLUSTER_BREAK.CR && _ === Ze.CLUSTER_BREAK.LF) return zn;
        if (h === Ze.CLUSTER_BREAK.CONTROL || h === Ze.CLUSTER_BREAK.CR || h === Ze.CLUSTER_BREAK.LF) return NE;
        if (_ === Ze.CLUSTER_BREAK.CONTROL || _ === Ze.CLUSTER_BREAK.CR || _ === Ze.CLUSTER_BREAK.LF) return NE;
        if (h === Ze.CLUSTER_BREAK.L && (_ === Ze.CLUSTER_BREAK.L || _ === Ze.CLUSTER_BREAK.V || _ === Ze.CLUSTER_BREAK.LV || _ === Ze.CLUSTER_BREAK.LVT)) return zn;
        if ((h === Ze.CLUSTER_BREAK.LV || h === Ze.CLUSTER_BREAK.V) && (_ === Ze.CLUSTER_BREAK.V || _ === Ze.CLUSTER_BREAK.T)) return zn;
        if ((h === Ze.CLUSTER_BREAK.LVT || h === Ze.CLUSTER_BREAK.T) && _ === Ze.CLUSTER_BREAK.T) return zn;
        if (_ === Ze.CLUSTER_BREAK.EXTEND || _ === Ze.CLUSTER_BREAK.ZWJ) return zn;
        if (_ === Ze.CLUSTER_BREAK.SPACINGMARK) return zn;
        if (h === Ze.CLUSTER_BREAK.PREPEND) return zn;
        const v = E.slice(0, -1).lastIndexOf(Ze.EXTENDED_PICTOGRAPHIC);
        return v !== -1 && E[v] === Ze.EXTENDED_PICTOGRAPHIC && f.slice(v + 1, -2).every(function(C) {
            return C === Ze.CLUSTER_BREAK.EXTEND
        }) && h === Ze.CLUSTER_BREAK.ZWJ && R === Ze.EXTENDED_PICTOGRAPHIC ? zn : r.indexOf(Ze.CLUSTER_BREAK.REGIONAL_INDICATOR) !== -1 ? IF : h === Ze.CLUSTER_BREAK.REGIONAL_INDICATOR && _ === Ze.CLUSTER_BREAK.REGIONAL_INDICATOR ? zn : NE
    }
}
W0.default = PF;
var H0 = {};
Object.defineProperty(H0, "__esModule", {
    value: !0
});
class DF {
    constructor(e, r) {
        this._index = 0, this._str = e, this._nextBreak = r
    } [Symbol.iterator]() {
        return this
    }
    next() {
        let e;
        if ((e = this._nextBreak(this._str, this._index)) < this._str.length) {
            const r = this._str.slice(this._index, e);
            return this._index = e, {
                value: r,
                done: !1
            }
        }
        if (this._index < this._str.length) {
            const r = this._str.slice(this._index);
            return this._index = this._str.length, {
                value: r,
                done: !1
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }
}
H0.default = DF;
var Wv = dt && dt.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
};
Object.defineProperty(V0, "__esModule", {
    value: !0
});
const u = F0,
    tl = Wv(W0),
    BF = Wv(H0);
class ei {
    static nextBreak(e, r) {
        if (r === void 0 && (r = 0), r < 0) return 0;
        if (r >= e.length - 1) return e.length;
        const n = tl.default.codePointAt(e, r),
            s = ei.getGraphemeBreakProperty(n),
            a = ei.getEmojiProperty(n),
            l = [],
            f = [];
        for (let E = r + 1; E < e.length; E++) {
            if (tl.default.isSurrogate(e, E - 1)) continue;
            const h = tl.default.codePointAt(e, E),
                _ = ei.getGraphemeBreakProperty(h),
                R = ei.getEmojiProperty(h);
            if (tl.default.shouldBreak(s, l, _, a, f, R)) return E;
            l.push(_), f.push(R)
        }
        return e.length
    }
    splitGraphemes(e) {
        const r = [];
        let n = 0,
            s;
        for (;
            (s = ei.nextBreak(e, n)) < e.length;) r.push(e.slice(n, s)), n = s;
        return n < e.length && r.push(e.slice(n)), r
    }
    iterateGraphemes(e) {
        return new BF.default(e, ei.nextBreak)
    }
    countGraphemes(e) {
        let r = 0,
            n = 0,
            s;
        for (;
            (s = ei.nextBreak(e, n)) < e.length;) n = s, r++;
        return n < e.length && r++, r
    }
    static getGraphemeBreakProperty(e) {
        if (e < 48905) {
            if (e < 44116) {
                if (e < 4141) {
                    if (e < 2818) {
                        if (e < 2363)
                            if (e < 1759) {
                                if (e < 1471) {
                                    if (e < 127) {
                                        if (e < 11) {
                                            if (e < 10) {
                                                if (0 <= e && e <= 9) return u.CLUSTER_BREAK.CONTROL
                                            } else if (e === 10) return u.CLUSTER_BREAK.LF
                                        } else if (e < 13) {
                                            if (11 <= e && e <= 12) return u.CLUSTER_BREAK.CONTROL
                                        } else if (e < 14) {
                                            if (e === 13) return u.CLUSTER_BREAK.CR
                                        } else if (14 <= e && e <= 31) return u.CLUSTER_BREAK.CONTROL
                                    } else if (e < 768) {
                                        if (e < 173) {
                                            if (127 <= e && e <= 159) return u.CLUSTER_BREAK.CONTROL
                                        } else if (e === 173) return u.CLUSTER_BREAK.CONTROL
                                    } else if (e < 1155) {
                                        if (768 <= e && e <= 879) return u.CLUSTER_BREAK.EXTEND
                                    } else if (e < 1425) {
                                        if (1155 <= e && e <= 1161) return u.CLUSTER_BREAK.EXTEND
                                    } else if (1425 <= e && e <= 1469) return u.CLUSTER_BREAK.EXTEND
                                } else if (e < 1552) {
                                    if (e < 1476) {
                                        if (e < 1473) {
                                            if (e === 1471) return u.CLUSTER_BREAK.EXTEND
                                        } else if (1473 <= e && e <= 1474) return u.CLUSTER_BREAK.EXTEND
                                    } else if (e < 1479) {
                                        if (1476 <= e && e <= 1477) return u.CLUSTER_BREAK.EXTEND
                                    } else if (e < 1536) {
                                        if (e === 1479) return u.CLUSTER_BREAK.EXTEND
                                    } else if (1536 <= e && e <= 1541) return u.CLUSTER_BREAK.PREPEND
                                } else if (e < 1648) {
                                    if (e < 1564) {
                                        if (1552 <= e && e <= 1562) return u.CLUSTER_BREAK.EXTEND
                                    } else if (e < 1611) {
                                        if (e === 1564) return u.CLUSTER_BREAK.CONTROL
                                    } else if (1611 <= e && e <= 1631) return u.CLUSTER_BREAK.EXTEND
                                } else if (e < 1750) {
                                    if (e === 1648) return u.CLUSTER_BREAK.EXTEND
                                } else if (e < 1757) {
                                    if (1750 <= e && e <= 1756) return u.CLUSTER_BREAK.EXTEND
                                } else if (e === 1757) return u.CLUSTER_BREAK.PREPEND
                            } else if (e < 2075) {
                            if (e < 1840)
                                if (e < 1770) {
                                    if (e < 1767) {
                                        if (1759 <= e && e <= 1764) return u.CLUSTER_BREAK.EXTEND
                                    } else if (1767 <= e && e <= 1768) return u.CLUSTER_BREAK.EXTEND
                                } else if (e < 1807) {
                                if (1770 <= e && e <= 1773) return u.CLUSTER_BREAK.EXTEND
                            } else {
                                if (e === 1807) return u.CLUSTER_BREAK.PREPEND;
                                if (e === 1809) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 2027) {
                                if (e < 1958) {
                                    if (1840 <= e && e <= 1866) return u.CLUSTER_BREAK.EXTEND
                                } else if (1958 <= e && e <= 1968) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 2045) {
                                if (2027 <= e && e <= 2035) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 2070) {
                                if (e === 2045) return u.CLUSTER_BREAK.EXTEND
                            } else if (2070 <= e && e <= 2073) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 2200) {
                            if (e < 2089) {
                                if (e < 2085) {
                                    if (2075 <= e && e <= 2083) return u.CLUSTER_BREAK.EXTEND
                                } else if (2085 <= e && e <= 2087) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 2137) {
                                if (2089 <= e && e <= 2093) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 2192) {
                                if (2137 <= e && e <= 2139) return u.CLUSTER_BREAK.EXTEND
                            } else if (2192 <= e && e <= 2193) return u.CLUSTER_BREAK.PREPEND
                        } else if (e < 2275) {
                            if (e < 2250) {
                                if (2200 <= e && e <= 2207) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 2274) {
                                if (2250 <= e && e <= 2273) return u.CLUSTER_BREAK.EXTEND
                            } else if (e === 2274) return u.CLUSTER_BREAK.PREPEND
                        } else if (e < 2307) {
                            if (2275 <= e && e <= 2306) return u.CLUSTER_BREAK.EXTEND
                        } else {
                            if (e === 2307) return u.CLUSTER_BREAK.SPACINGMARK;
                            if (e === 2362) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 2561) {
                            if (e < 2434) {
                                if (e < 2381) {
                                    if (e < 2366) {
                                        if (e === 2363) return u.CLUSTER_BREAK.SPACINGMARK;
                                        if (e === 2364) return u.CLUSTER_BREAK.EXTEND
                                    } else if (e < 2369) {
                                        if (2366 <= e && e <= 2368) return u.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e < 2377) {
                                        if (2369 <= e && e <= 2376) return u.CLUSTER_BREAK.EXTEND
                                    } else if (2377 <= e && e <= 2380) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 2385) {
                                    if (e < 2382) {
                                        if (e === 2381) return u.CLUSTER_BREAK.EXTEND
                                    } else if (2382 <= e && e <= 2383) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 2402) {
                                    if (2385 <= e && e <= 2391) return u.CLUSTER_BREAK.EXTEND
                                } else if (e < 2433) {
                                    if (2402 <= e && e <= 2403) return u.CLUSTER_BREAK.EXTEND
                                } else if (e === 2433) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 2503) {
                                if (e < 2494) {
                                    if (e < 2492) {
                                        if (2434 <= e && e <= 2435) return u.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e === 2492) return u.CLUSTER_BREAK.EXTEND
                                } else if (e < 2495) {
                                    if (e === 2494) return u.CLUSTER_BREAK.EXTEND
                                } else if (e < 2497) {
                                    if (2495 <= e && e <= 2496) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (2497 <= e && e <= 2500) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 2519) {
                                if (e < 2507) {
                                    if (2503 <= e && e <= 2504) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 2509) {
                                    if (2507 <= e && e <= 2508) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (e === 2509) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 2530) {
                                if (e === 2519) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 2558) {
                                if (2530 <= e && e <= 2531) return u.CLUSTER_BREAK.EXTEND
                            } else if (e === 2558) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 2691) {
                            if (e < 2631) {
                                if (e < 2620) {
                                    if (e < 2563) {
                                        if (2561 <= e && e <= 2562) return u.CLUSTER_BREAK.EXTEND
                                    } else if (e === 2563) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 2622) {
                                    if (e === 2620) return u.CLUSTER_BREAK.EXTEND
                                } else if (e < 2625) {
                                    if (2622 <= e && e <= 2624) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (2625 <= e && e <= 2626) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 2672) {
                                if (e < 2635) {
                                    if (2631 <= e && e <= 2632) return u.CLUSTER_BREAK.EXTEND
                                } else if (e < 2641) {
                                    if (2635 <= e && e <= 2637) return u.CLUSTER_BREAK.EXTEND
                                } else if (e === 2641) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 2677) {
                                if (2672 <= e && e <= 2673) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 2689) {
                                if (e === 2677) return u.CLUSTER_BREAK.EXTEND
                            } else if (2689 <= e && e <= 2690) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 2761) {
                            if (e < 2750) {
                                if (e === 2691) return u.CLUSTER_BREAK.SPACINGMARK;
                                if (e === 2748) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 2753) {
                                if (2750 <= e && e <= 2752) return u.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 2759) {
                                if (2753 <= e && e <= 2757) return u.CLUSTER_BREAK.EXTEND
                            } else if (2759 <= e && e <= 2760) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 2786) {
                            if (e < 2763) {
                                if (e === 2761) return u.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 2765) {
                                if (2763 <= e && e <= 2764) return u.CLUSTER_BREAK.SPACINGMARK
                            } else if (e === 2765) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 2810) {
                            if (2786 <= e && e <= 2787) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 2817) {
                            if (2810 <= e && e <= 2815) return u.CLUSTER_BREAK.EXTEND
                        } else if (e === 2817) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 3315) {
                        if (e < 3076) {
                            if (e < 2946) {
                                if (e < 2887) {
                                    if (e < 2878) {
                                        if (e < 2876) {
                                            if (2818 <= e && e <= 2819) return u.CLUSTER_BREAK.SPACINGMARK
                                        } else if (e === 2876) return u.CLUSTER_BREAK.EXTEND
                                    } else if (e < 2880) {
                                        if (2878 <= e && e <= 2879) return u.CLUSTER_BREAK.EXTEND
                                    } else if (e < 2881) {
                                        if (e === 2880) return u.CLUSTER_BREAK.SPACINGMARK
                                    } else if (2881 <= e && e <= 2884) return u.CLUSTER_BREAK.EXTEND
                                } else if (e < 2893) {
                                    if (e < 2891) {
                                        if (2887 <= e && e <= 2888) return u.CLUSTER_BREAK.SPACINGMARK
                                    } else if (2891 <= e && e <= 2892) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 2901) {
                                    if (e === 2893) return u.CLUSTER_BREAK.EXTEND
                                } else if (e < 2914) {
                                    if (2901 <= e && e <= 2903) return u.CLUSTER_BREAK.EXTEND
                                } else if (2914 <= e && e <= 2915) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 3014) {
                                if (e < 3007) {
                                    if (e === 2946 || e === 3006) return u.CLUSTER_BREAK.EXTEND
                                } else if (e < 3008) {
                                    if (e === 3007) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 3009) {
                                    if (e === 3008) return u.CLUSTER_BREAK.EXTEND
                                } else if (3009 <= e && e <= 3010) return u.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 3031) {
                                if (e < 3018) {
                                    if (3014 <= e && e <= 3016) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 3021) {
                                    if (3018 <= e && e <= 3020) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (e === 3021) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 3072) {
                                if (e === 3031) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 3073) {
                                if (e === 3072) return u.CLUSTER_BREAK.EXTEND
                            } else if (3073 <= e && e <= 3075) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 3262) {
                            if (e < 3146) {
                                if (e < 3134) {
                                    if (e === 3076 || e === 3132) return u.CLUSTER_BREAK.EXTEND
                                } else if (e < 3137) {
                                    if (3134 <= e && e <= 3136) return u.CLUSTER_BREAK.EXTEND
                                } else if (e < 3142) {
                                    if (3137 <= e && e <= 3140) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (3142 <= e && e <= 3144) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 3201) {
                                if (e < 3157) {
                                    if (3146 <= e && e <= 3149) return u.CLUSTER_BREAK.EXTEND
                                } else if (e < 3170) {
                                    if (3157 <= e && e <= 3158) return u.CLUSTER_BREAK.EXTEND
                                } else if (3170 <= e && e <= 3171) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 3202) {
                                if (e === 3201) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 3260) {
                                if (3202 <= e && e <= 3203) return u.CLUSTER_BREAK.SPACINGMARK
                            } else if (e === 3260) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 3270) {
                            if (e < 3264) {
                                if (e === 3262) return u.CLUSTER_BREAK.SPACINGMARK;
                                if (e === 3263) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 3266) {
                                if (3264 <= e && e <= 3265) return u.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 3267) {
                                if (e === 3266) return u.CLUSTER_BREAK.EXTEND
                            } else if (3267 <= e && e <= 3268) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 3276) {
                            if (e < 3271) {
                                if (e === 3270) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 3274) {
                                if (3271 <= e && e <= 3272) return u.CLUSTER_BREAK.SPACINGMARK
                            } else if (3274 <= e && e <= 3275) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 3285) {
                            if (3276 <= e && e <= 3277) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 3298) {
                            if (3285 <= e && e <= 3286) return u.CLUSTER_BREAK.EXTEND
                        } else if (3298 <= e && e <= 3299) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 3551) {
                        if (e < 3406) {
                            if (e < 3391) {
                                if (e < 3330) {
                                    if (e < 3328) {
                                        if (e === 3315) return u.CLUSTER_BREAK.SPACINGMARK
                                    } else if (3328 <= e && e <= 3329) return u.CLUSTER_BREAK.EXTEND
                                } else if (e < 3387) {
                                    if (3330 <= e && e <= 3331) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 3390) {
                                    if (3387 <= e && e <= 3388) return u.CLUSTER_BREAK.EXTEND
                                } else if (e === 3390) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 3398) {
                                if (e < 3393) {
                                    if (3391 <= e && e <= 3392) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (3393 <= e && e <= 3396) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 3402) {
                                if (3398 <= e && e <= 3400) return u.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 3405) {
                                if (3402 <= e && e <= 3404) return u.CLUSTER_BREAK.SPACINGMARK
                            } else if (e === 3405) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 3530) {
                            if (e < 3426) {
                                if (e === 3406) return u.CLUSTER_BREAK.PREPEND;
                                if (e === 3415) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 3457) {
                                if (3426 <= e && e <= 3427) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 3458) {
                                if (e === 3457) return u.CLUSTER_BREAK.EXTEND
                            } else if (3458 <= e && e <= 3459) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 3538) {
                            if (e < 3535) {
                                if (e === 3530) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 3536) {
                                if (e === 3535) return u.CLUSTER_BREAK.EXTEND
                            } else if (3536 <= e && e <= 3537) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 3542) {
                            if (3538 <= e && e <= 3540) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 3544) {
                            if (e === 3542) return u.CLUSTER_BREAK.EXTEND
                        } else if (3544 <= e && e <= 3550) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 3893) {
                        if (e < 3655) {
                            if (e < 3633) {
                                if (e < 3570) {
                                    if (e === 3551) return u.CLUSTER_BREAK.EXTEND
                                } else if (3570 <= e && e <= 3571) return u.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 3635) {
                                if (e === 3633) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 3636) {
                                if (e === 3635) return u.CLUSTER_BREAK.SPACINGMARK
                            } else if (3636 <= e && e <= 3642) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 3764)
                            if (e < 3761) {
                                if (3655 <= e && e <= 3662) return u.CLUSTER_BREAK.EXTEND
                            } else {
                                if (e === 3761) return u.CLUSTER_BREAK.EXTEND;
                                if (e === 3763) return u.CLUSTER_BREAK.SPACINGMARK
                            }
                        else if (e < 3784) {
                            if (3764 <= e && e <= 3772) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 3864) {
                            if (3784 <= e && e <= 3790) return u.CLUSTER_BREAK.EXTEND
                        } else if (3864 <= e && e <= 3865) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 3967) {
                        if (e < 3897) {
                            if (e === 3893 || e === 3895) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 3902) {
                            if (e === 3897) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 3953) {
                            if (3902 <= e && e <= 3903) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (3953 <= e && e <= 3966) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 3981) {
                        if (e < 3968) {
                            if (e === 3967) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 3974) {
                            if (3968 <= e && e <= 3972) return u.CLUSTER_BREAK.EXTEND
                        } else if (3974 <= e && e <= 3975) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 3993) {
                        if (3981 <= e && e <= 3991) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 4038) {
                        if (3993 <= e && e <= 4028) return u.CLUSTER_BREAK.EXTEND
                    } else if (e === 4038) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 7204) {
                    if (e < 6448) {
                        if (e < 5938) {
                            if (e < 4226) {
                                if (e < 4157) {
                                    if (e < 4146) {
                                        if (e < 4145) {
                                            if (4141 <= e && e <= 4144) return u.CLUSTER_BREAK.EXTEND
                                        } else if (e === 4145) return u.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e < 4153) {
                                        if (4146 <= e && e <= 4151) return u.CLUSTER_BREAK.EXTEND
                                    } else if (e < 4155) {
                                        if (4153 <= e && e <= 4154) return u.CLUSTER_BREAK.EXTEND
                                    } else if (4155 <= e && e <= 4156) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 4184) {
                                    if (e < 4182) {
                                        if (4157 <= e && e <= 4158) return u.CLUSTER_BREAK.EXTEND
                                    } else if (4182 <= e && e <= 4183) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 4190) {
                                    if (4184 <= e && e <= 4185) return u.CLUSTER_BREAK.EXTEND
                                } else if (e < 4209) {
                                    if (4190 <= e && e <= 4192) return u.CLUSTER_BREAK.EXTEND
                                } else if (4209 <= e && e <= 4212) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 4352) {
                                if (e < 4229) {
                                    if (e === 4226) return u.CLUSTER_BREAK.EXTEND;
                                    if (e === 4228) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 4237) {
                                    if (4229 <= e && e <= 4230) return u.CLUSTER_BREAK.EXTEND
                                } else if (e === 4237 || e === 4253) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 4957) {
                                if (e < 4448) {
                                    if (4352 <= e && e <= 4447) return u.CLUSTER_BREAK.L
                                } else if (e < 4520) {
                                    if (4448 <= e && e <= 4519) return u.CLUSTER_BREAK.V
                                } else if (4520 <= e && e <= 4607) return u.CLUSTER_BREAK.T
                            } else if (e < 5906) {
                                if (4957 <= e && e <= 4959) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 5909) {
                                if (5906 <= e && e <= 5908) return u.CLUSTER_BREAK.EXTEND
                            } else if (e === 5909) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 6089) {
                            if (e < 6070) {
                                if (e < 5970) {
                                    if (e < 5940) {
                                        if (5938 <= e && e <= 5939) return u.CLUSTER_BREAK.EXTEND
                                    } else if (e === 5940) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 6002) {
                                    if (5970 <= e && e <= 5971) return u.CLUSTER_BREAK.EXTEND
                                } else if (e < 6068) {
                                    if (6002 <= e && e <= 6003) return u.CLUSTER_BREAK.EXTEND
                                } else if (6068 <= e && e <= 6069) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 6078) {
                                if (e < 6071) {
                                    if (e === 6070) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (6071 <= e && e <= 6077) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 6086) {
                                if (6078 <= e && e <= 6085) return u.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 6087) {
                                if (e === 6086) return u.CLUSTER_BREAK.EXTEND
                            } else if (6087 <= e && e <= 6088) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 6277)
                            if (e < 6155) {
                                if (e < 6109) {
                                    if (6089 <= e && e <= 6099) return u.CLUSTER_BREAK.EXTEND
                                } else if (e === 6109) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 6158) {
                            if (6155 <= e && e <= 6157) return u.CLUSTER_BREAK.EXTEND
                        } else {
                            if (e === 6158) return u.CLUSTER_BREAK.CONTROL;
                            if (e === 6159) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 6435) {
                            if (e < 6313) {
                                if (6277 <= e && e <= 6278) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 6432) {
                                if (e === 6313) return u.CLUSTER_BREAK.EXTEND
                            } else if (6432 <= e && e <= 6434) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 6439) {
                            if (6435 <= e && e <= 6438) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 6441) {
                            if (6439 <= e && e <= 6440) return u.CLUSTER_BREAK.EXTEND
                        } else if (6441 <= e && e <= 6443) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 6971) {
                        if (e < 6744)
                            if (e < 6681) {
                                if (e < 6451) {
                                    if (e < 6450) {
                                        if (6448 <= e && e <= 6449) return u.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e === 6450) return u.CLUSTER_BREAK.EXTEND
                                } else if (e < 6457) {
                                    if (6451 <= e && e <= 6456) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 6679) {
                                    if (6457 <= e && e <= 6459) return u.CLUSTER_BREAK.EXTEND
                                } else if (6679 <= e && e <= 6680) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 6741) {
                            if (e < 6683) {
                                if (6681 <= e && e <= 6682) return u.CLUSTER_BREAK.SPACINGMARK
                            } else if (e === 6683) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 6742) {
                            if (e === 6741) return u.CLUSTER_BREAK.SPACINGMARK
                        } else {
                            if (e === 6742) return u.CLUSTER_BREAK.EXTEND;
                            if (e === 6743) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 6771) {
                            if (e < 6754) {
                                if (e < 6752) {
                                    if (6744 <= e && e <= 6750) return u.CLUSTER_BREAK.EXTEND
                                } else if (e === 6752) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 6757) {
                                if (e === 6754) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 6765) {
                                if (6757 <= e && e <= 6764) return u.CLUSTER_BREAK.EXTEND
                            } else if (6765 <= e && e <= 6770) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 6912) {
                            if (e < 6783) {
                                if (6771 <= e && e <= 6780) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 6832) {
                                if (e === 6783) return u.CLUSTER_BREAK.EXTEND
                            } else if (6832 <= e && e <= 6862) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 6916) {
                            if (6912 <= e && e <= 6915) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 6964) {
                            if (e === 6916) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (6964 <= e && e <= 6970) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 7080) {
                        if (e < 7019) {
                            if (e < 6973) {
                                if (e === 6971) return u.CLUSTER_BREAK.SPACINGMARK;
                                if (e === 6972) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 6978) {
                                if (6973 <= e && e <= 6977) return u.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 6979) {
                                if (e === 6978) return u.CLUSTER_BREAK.EXTEND
                            } else if (6979 <= e && e <= 6980) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 7073) {
                            if (e < 7040) {
                                if (7019 <= e && e <= 7027) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 7042) {
                                if (7040 <= e && e <= 7041) return u.CLUSTER_BREAK.EXTEND
                            } else if (e === 7042) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 7074) {
                            if (e === 7073) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 7078) {
                            if (7074 <= e && e <= 7077) return u.CLUSTER_BREAK.EXTEND
                        } else if (7078 <= e && e <= 7079) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 7144)
                        if (e < 7083) {
                            if (e < 7082) {
                                if (7080 <= e && e <= 7081) return u.CLUSTER_BREAK.EXTEND
                            } else if (e === 7082) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 7142) {
                        if (7083 <= e && e <= 7085) return u.CLUSTER_BREAK.EXTEND
                    } else {
                        if (e === 7142) return u.CLUSTER_BREAK.EXTEND;
                        if (e === 7143) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 7150) {
                        if (e < 7146) {
                            if (7144 <= e && e <= 7145) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 7149) {
                            if (7146 <= e && e <= 7148) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e === 7149) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 7151) {
                        if (e === 7150) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 7154) {
                        if (7151 <= e && e <= 7153) return u.CLUSTER_BREAK.EXTEND
                    } else if (7154 <= e && e <= 7155) return u.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 43346) {
                    if (e < 11647) {
                        if (e < 7415) {
                            if (e < 7380) {
                                if (e < 7220) {
                                    if (e < 7212) {
                                        if (7204 <= e && e <= 7211) return u.CLUSTER_BREAK.SPACINGMARK
                                    } else if (7212 <= e && e <= 7219) return u.CLUSTER_BREAK.EXTEND
                                } else if (e < 7222) {
                                    if (7220 <= e && e <= 7221) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 7376) {
                                    if (7222 <= e && e <= 7223) return u.CLUSTER_BREAK.EXTEND
                                } else if (7376 <= e && e <= 7378) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 7394) {
                                if (e < 7393) {
                                    if (7380 <= e && e <= 7392) return u.CLUSTER_BREAK.EXTEND
                                } else if (e === 7393) return u.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 7405) {
                                if (7394 <= e && e <= 7400) return u.CLUSTER_BREAK.EXTEND
                            } else if (e === 7405 || e === 7412) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 8205)
                            if (e < 7616) {
                                if (e < 7416) {
                                    if (e === 7415) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (7416 <= e && e <= 7417) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 8203) {
                            if (7616 <= e && e <= 7679) return u.CLUSTER_BREAK.EXTEND
                        } else {
                            if (e === 8203) return u.CLUSTER_BREAK.CONTROL;
                            if (e === 8204) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 8288) {
                            if (e < 8206) {
                                if (e === 8205) return u.CLUSTER_BREAK.ZWJ
                            } else if (e < 8232) {
                                if (8206 <= e && e <= 8207) return u.CLUSTER_BREAK.CONTROL
                            } else if (8232 <= e && e <= 8238) return u.CLUSTER_BREAK.CONTROL
                        } else if (e < 8400) {
                            if (8288 <= e && e <= 8303) return u.CLUSTER_BREAK.CONTROL
                        } else if (e < 11503) {
                            if (8400 <= e && e <= 8432) return u.CLUSTER_BREAK.EXTEND
                        } else if (11503 <= e && e <= 11505) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 43043) {
                        if (e < 42612) {
                            if (e < 12330) {
                                if (e < 11744) {
                                    if (e === 11647) return u.CLUSTER_BREAK.EXTEND
                                } else if (11744 <= e && e <= 11775) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 12441) {
                                if (12330 <= e && e <= 12335) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 42607) {
                                if (12441 <= e && e <= 12442) return u.CLUSTER_BREAK.EXTEND
                            } else if (42607 <= e && e <= 42610) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 43010) {
                            if (e < 42654) {
                                if (42612 <= e && e <= 42621) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 42736) {
                                if (42654 <= e && e <= 42655) return u.CLUSTER_BREAK.EXTEND
                            } else if (42736 <= e && e <= 42737) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 43014) {
                            if (e === 43010) return u.CLUSTER_BREAK.EXTEND
                        } else if (e === 43014 || e === 43019) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 43188) {
                        if (e < 43047) {
                            if (e < 43045) {
                                if (43043 <= e && e <= 43044) return u.CLUSTER_BREAK.SPACINGMARK
                            } else if (43045 <= e && e <= 43046) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 43052) {
                            if (e === 43047) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 43136) {
                            if (e === 43052) return u.CLUSTER_BREAK.EXTEND
                        } else if (43136 <= e && e <= 43137) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 43263) {
                        if (e < 43204) {
                            if (43188 <= e && e <= 43203) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 43232) {
                            if (43204 <= e && e <= 43205) return u.CLUSTER_BREAK.EXTEND
                        } else if (43232 <= e && e <= 43249) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 43302) {
                        if (e === 43263) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 43335) {
                        if (43302 <= e && e <= 43309) return u.CLUSTER_BREAK.EXTEND
                    } else if (43335 <= e && e <= 43345) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 43698) {
                    if (e < 43493) {
                        if (e < 43444)
                            if (e < 43392) {
                                if (e < 43360) {
                                    if (43346 <= e && e <= 43347) return u.CLUSTER_BREAK.SPACINGMARK
                                } else if (43360 <= e && e <= 43388) return u.CLUSTER_BREAK.L
                            } else if (e < 43395) {
                            if (43392 <= e && e <= 43394) return u.CLUSTER_BREAK.EXTEND
                        } else {
                            if (e === 43395) return u.CLUSTER_BREAK.SPACINGMARK;
                            if (e === 43443) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 43450) {
                            if (e < 43446) {
                                if (43444 <= e && e <= 43445) return u.CLUSTER_BREAK.SPACINGMARK
                            } else if (43446 <= e && e <= 43449) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 43452) {
                            if (43450 <= e && e <= 43451) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 43454) {
                            if (43452 <= e && e <= 43453) return u.CLUSTER_BREAK.EXTEND
                        } else if (43454 <= e && e <= 43456) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 43573) {
                        if (e < 43567) {
                            if (e < 43561) {
                                if (e === 43493) return u.CLUSTER_BREAK.EXTEND
                            } else if (43561 <= e && e <= 43566) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 43569) {
                            if (43567 <= e && e <= 43568) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 43571) {
                            if (43569 <= e && e <= 43570) return u.CLUSTER_BREAK.EXTEND
                        } else if (43571 <= e && e <= 43572) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 43597) {
                        if (e < 43587) {
                            if (43573 <= e && e <= 43574) return u.CLUSTER_BREAK.EXTEND
                        } else if (e === 43587 || e === 43596) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 43644) {
                        if (e === 43597) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e === 43644 || e === 43696) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 44006) {
                    if (e < 43756)
                        if (e < 43710) {
                            if (e < 43703) {
                                if (43698 <= e && e <= 43700) return u.CLUSTER_BREAK.EXTEND
                            } else if (43703 <= e && e <= 43704) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 43713) {
                        if (43710 <= e && e <= 43711) return u.CLUSTER_BREAK.EXTEND
                    } else {
                        if (e === 43713) return u.CLUSTER_BREAK.EXTEND;
                        if (e === 43755) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 43766) {
                        if (e < 43758) {
                            if (43756 <= e && e <= 43757) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 43765) {
                            if (43758 <= e && e <= 43759) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e === 43765) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 44003) {
                        if (e === 43766) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 44005) {
                        if (44003 <= e && e <= 44004) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e === 44005) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 44032)
                    if (e < 44009) {
                        if (e < 44008) {
                            if (44006 <= e && e <= 44007) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e === 44008) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 44012) {
                    if (44009 <= e && e <= 44010) return u.CLUSTER_BREAK.SPACINGMARK
                } else {
                    if (e === 44012) return u.CLUSTER_BREAK.SPACINGMARK;
                    if (e === 44013) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 44061) {
                    if (e < 44033) {
                        if (e === 44032) return u.CLUSTER_BREAK.LV
                    } else if (e < 44060) {
                        if (44033 <= e && e <= 44059) return u.CLUSTER_BREAK.LVT
                    } else if (e === 44060) return u.CLUSTER_BREAK.LV
                } else if (e < 44088) {
                    if (44061 <= e && e <= 44087) return u.CLUSTER_BREAK.LVT
                } else if (e < 44089) {
                    if (e === 44088) return u.CLUSTER_BREAK.LV
                } else if (44089 <= e && e <= 44115) return u.CLUSTER_BREAK.LVT
            } else if (e < 46497) {
                if (e < 45293) {
                    if (e < 44704) {
                        if (e < 44397) {
                            if (e < 44256) {
                                if (e < 44173) {
                                    if (e < 44144) {
                                        if (e < 44117) {
                                            if (e === 44116) return u.CLUSTER_BREAK.LV
                                        } else if (44117 <= e && e <= 44143) return u.CLUSTER_BREAK.LVT
                                    } else if (e < 44145) {
                                        if (e === 44144) return u.CLUSTER_BREAK.LV
                                    } else if (e < 44172) {
                                        if (44145 <= e && e <= 44171) return u.CLUSTER_BREAK.LVT
                                    } else if (e === 44172) return u.CLUSTER_BREAK.LV
                                } else if (e < 44201) {
                                    if (e < 44200) {
                                        if (44173 <= e && e <= 44199) return u.CLUSTER_BREAK.LVT
                                    } else if (e === 44200) return u.CLUSTER_BREAK.LV
                                } else if (e < 44228) {
                                    if (44201 <= e && e <= 44227) return u.CLUSTER_BREAK.LVT
                                } else if (e < 44229) {
                                    if (e === 44228) return u.CLUSTER_BREAK.LV
                                } else if (44229 <= e && e <= 44255) return u.CLUSTER_BREAK.LVT
                            } else if (e < 44313) {
                                if (e < 44284) {
                                    if (e < 44257) {
                                        if (e === 44256) return u.CLUSTER_BREAK.LV
                                    } else if (44257 <= e && e <= 44283) return u.CLUSTER_BREAK.LVT
                                } else if (e < 44285) {
                                    if (e === 44284) return u.CLUSTER_BREAK.LV
                                } else if (e < 44312) {
                                    if (44285 <= e && e <= 44311) return u.CLUSTER_BREAK.LVT
                                } else if (e === 44312) return u.CLUSTER_BREAK.LV
                            } else if (e < 44368) {
                                if (e < 44340) {
                                    if (44313 <= e && e <= 44339) return u.CLUSTER_BREAK.LVT
                                } else if (e < 44341) {
                                    if (e === 44340) return u.CLUSTER_BREAK.LV
                                } else if (44341 <= e && e <= 44367) return u.CLUSTER_BREAK.LVT
                            } else if (e < 44369) {
                                if (e === 44368) return u.CLUSTER_BREAK.LV
                            } else if (e < 44396) {
                                if (44369 <= e && e <= 44395) return u.CLUSTER_BREAK.LVT
                            } else if (e === 44396) return u.CLUSTER_BREAK.LV
                        } else if (e < 44537) {
                            if (e < 44480) {
                                if (e < 44425) {
                                    if (e < 44424) {
                                        if (44397 <= e && e <= 44423) return u.CLUSTER_BREAK.LVT
                                    } else if (e === 44424) return u.CLUSTER_BREAK.LV
                                } else if (e < 44452) {
                                    if (44425 <= e && e <= 44451) return u.CLUSTER_BREAK.LVT
                                } else if (e < 44453) {
                                    if (e === 44452) return u.CLUSTER_BREAK.LV
                                } else if (44453 <= e && e <= 44479) return u.CLUSTER_BREAK.LVT
                            } else if (e < 44508) {
                                if (e < 44481) {
                                    if (e === 44480) return u.CLUSTER_BREAK.LV
                                } else if (44481 <= e && e <= 44507) return u.CLUSTER_BREAK.LVT
                            } else if (e < 44509) {
                                if (e === 44508) return u.CLUSTER_BREAK.LV
                            } else if (e < 44536) {
                                if (44509 <= e && e <= 44535) return u.CLUSTER_BREAK.LVT
                            } else if (e === 44536) return u.CLUSTER_BREAK.LV
                        } else if (e < 44620) {
                            if (e < 44565) {
                                if (e < 44564) {
                                    if (44537 <= e && e <= 44563) return u.CLUSTER_BREAK.LVT
                                } else if (e === 44564) return u.CLUSTER_BREAK.LV
                            } else if (e < 44592) {
                                if (44565 <= e && e <= 44591) return u.CLUSTER_BREAK.LVT
                            } else if (e < 44593) {
                                if (e === 44592) return u.CLUSTER_BREAK.LV
                            } else if (44593 <= e && e <= 44619) return u.CLUSTER_BREAK.LVT
                        } else if (e < 44649) {
                            if (e < 44621) {
                                if (e === 44620) return u.CLUSTER_BREAK.LV
                            } else if (e < 44648) {
                                if (44621 <= e && e <= 44647) return u.CLUSTER_BREAK.LVT
                            } else if (e === 44648) return u.CLUSTER_BREAK.LV
                        } else if (e < 44676) {
                            if (44649 <= e && e <= 44675) return u.CLUSTER_BREAK.LVT
                        } else if (e < 44677) {
                            if (e === 44676) return u.CLUSTER_BREAK.LV
                        } else if (44677 <= e && e <= 44703) return u.CLUSTER_BREAK.LVT
                    } else if (e < 44985) {
                        if (e < 44844) {
                            if (e < 44761) {
                                if (e < 44732) {
                                    if (e < 44705) {
                                        if (e === 44704) return u.CLUSTER_BREAK.LV
                                    } else if (44705 <= e && e <= 44731) return u.CLUSTER_BREAK.LVT
                                } else if (e < 44733) {
                                    if (e === 44732) return u.CLUSTER_BREAK.LV
                                } else if (e < 44760) {
                                    if (44733 <= e && e <= 44759) return u.CLUSTER_BREAK.LVT
                                } else if (e === 44760) return u.CLUSTER_BREAK.LV
                            } else if (e < 44789) {
                                if (e < 44788) {
                                    if (44761 <= e && e <= 44787) return u.CLUSTER_BREAK.LVT
                                } else if (e === 44788) return u.CLUSTER_BREAK.LV
                            } else if (e < 44816) {
                                if (44789 <= e && e <= 44815) return u.CLUSTER_BREAK.LVT
                            } else if (e < 44817) {
                                if (e === 44816) return u.CLUSTER_BREAK.LV
                            } else if (44817 <= e && e <= 44843) return u.CLUSTER_BREAK.LVT
                        } else if (e < 44901) {
                            if (e < 44872) {
                                if (e < 44845) {
                                    if (e === 44844) return u.CLUSTER_BREAK.LV
                                } else if (44845 <= e && e <= 44871) return u.CLUSTER_BREAK.LVT
                            } else if (e < 44873) {
                                if (e === 44872) return u.CLUSTER_BREAK.LV
                            } else if (e < 44900) {
                                if (44873 <= e && e <= 44899) return u.CLUSTER_BREAK.LVT
                            } else if (e === 44900) return u.CLUSTER_BREAK.LV
                        } else if (e < 44956) {
                            if (e < 44928) {
                                if (44901 <= e && e <= 44927) return u.CLUSTER_BREAK.LVT
                            } else if (e < 44929) {
                                if (e === 44928) return u.CLUSTER_BREAK.LV
                            } else if (44929 <= e && e <= 44955) return u.CLUSTER_BREAK.LVT
                        } else if (e < 44957) {
                            if (e === 44956) return u.CLUSTER_BREAK.LV
                        } else if (e < 44984) {
                            if (44957 <= e && e <= 44983) return u.CLUSTER_BREAK.LVT
                        } else if (e === 44984) return u.CLUSTER_BREAK.LV
                    } else if (e < 45152) {
                        if (e < 45068) {
                            if (e < 45013) {
                                if (e < 45012) {
                                    if (44985 <= e && e <= 45011) return u.CLUSTER_BREAK.LVT
                                } else if (e === 45012) return u.CLUSTER_BREAK.LV
                            } else if (e < 45040) {
                                if (45013 <= e && e <= 45039) return u.CLUSTER_BREAK.LVT
                            } else if (e < 45041) {
                                if (e === 45040) return u.CLUSTER_BREAK.LV
                            } else if (45041 <= e && e <= 45067) return u.CLUSTER_BREAK.LVT
                        } else if (e < 45097) {
                            if (e < 45069) {
                                if (e === 45068) return u.CLUSTER_BREAK.LV
                            } else if (e < 45096) {
                                if (45069 <= e && e <= 45095) return u.CLUSTER_BREAK.LVT
                            } else if (e === 45096) return u.CLUSTER_BREAK.LV
                        } else if (e < 45124) {
                            if (45097 <= e && e <= 45123) return u.CLUSTER_BREAK.LVT
                        } else if (e < 45125) {
                            if (e === 45124) return u.CLUSTER_BREAK.LV
                        } else if (45125 <= e && e <= 45151) return u.CLUSTER_BREAK.LVT
                    } else if (e < 45209) {
                        if (e < 45180) {
                            if (e < 45153) {
                                if (e === 45152) return u.CLUSTER_BREAK.LV
                            } else if (45153 <= e && e <= 45179) return u.CLUSTER_BREAK.LVT
                        } else if (e < 45181) {
                            if (e === 45180) return u.CLUSTER_BREAK.LV
                        } else if (e < 45208) {
                            if (45181 <= e && e <= 45207) return u.CLUSTER_BREAK.LVT
                        } else if (e === 45208) return u.CLUSTER_BREAK.LV
                    } else if (e < 45264) {
                        if (e < 45236) {
                            if (45209 <= e && e <= 45235) return u.CLUSTER_BREAK.LVT
                        } else if (e < 45237) {
                            if (e === 45236) return u.CLUSTER_BREAK.LV
                        } else if (45237 <= e && e <= 45263) return u.CLUSTER_BREAK.LVT
                    } else if (e < 45265) {
                        if (e === 45264) return u.CLUSTER_BREAK.LV
                    } else if (e < 45292) {
                        if (45265 <= e && e <= 45291) return u.CLUSTER_BREAK.LVT
                    } else if (e === 45292) return u.CLUSTER_BREAK.LV
                } else if (e < 45908) {
                    if (e < 45600) {
                        if (e < 45433) {
                            if (e < 45376) {
                                if (e < 45321) {
                                    if (e < 45320) {
                                        if (45293 <= e && e <= 45319) return u.CLUSTER_BREAK.LVT
                                    } else if (e === 45320) return u.CLUSTER_BREAK.LV
                                } else if (e < 45348) {
                                    if (45321 <= e && e <= 45347) return u.CLUSTER_BREAK.LVT
                                } else if (e < 45349) {
                                    if (e === 45348) return u.CLUSTER_BREAK.LV
                                } else if (45349 <= e && e <= 45375) return u.CLUSTER_BREAK.LVT
                            } else if (e < 45404) {
                                if (e < 45377) {
                                    if (e === 45376) return u.CLUSTER_BREAK.LV
                                } else if (45377 <= e && e <= 45403) return u.CLUSTER_BREAK.LVT
                            } else if (e < 45405) {
                                if (e === 45404) return u.CLUSTER_BREAK.LV
                            } else if (e < 45432) {
                                if (45405 <= e && e <= 45431) return u.CLUSTER_BREAK.LVT
                            } else if (e === 45432) return u.CLUSTER_BREAK.LV
                        } else if (e < 45516) {
                            if (e < 45461) {
                                if (e < 45460) {
                                    if (45433 <= e && e <= 45459) return u.CLUSTER_BREAK.LVT
                                } else if (e === 45460) return u.CLUSTER_BREAK.LV
                            } else if (e < 45488) {
                                if (45461 <= e && e <= 45487) return u.CLUSTER_BREAK.LVT
                            } else if (e < 45489) {
                                if (e === 45488) return u.CLUSTER_BREAK.LV
                            } else if (45489 <= e && e <= 45515) return u.CLUSTER_BREAK.LVT
                        } else if (e < 45545) {
                            if (e < 45517) {
                                if (e === 45516) return u.CLUSTER_BREAK.LV
                            } else if (e < 45544) {
                                if (45517 <= e && e <= 45543) return u.CLUSTER_BREAK.LVT
                            } else if (e === 45544) return u.CLUSTER_BREAK.LV
                        } else if (e < 45572) {
                            if (45545 <= e && e <= 45571) return u.CLUSTER_BREAK.LVT
                        } else if (e < 45573) {
                            if (e === 45572) return u.CLUSTER_BREAK.LV
                        } else if (45573 <= e && e <= 45599) return u.CLUSTER_BREAK.LVT
                    } else if (e < 45741) {
                        if (e < 45657) {
                            if (e < 45628) {
                                if (e < 45601) {
                                    if (e === 45600) return u.CLUSTER_BREAK.LV
                                } else if (45601 <= e && e <= 45627) return u.CLUSTER_BREAK.LVT
                            } else if (e < 45629) {
                                if (e === 45628) return u.CLUSTER_BREAK.LV
                            } else if (e < 45656) {
                                if (45629 <= e && e <= 45655) return u.CLUSTER_BREAK.LVT
                            } else if (e === 45656) return u.CLUSTER_BREAK.LV
                        } else if (e < 45712) {
                            if (e < 45684) {
                                if (45657 <= e && e <= 45683) return u.CLUSTER_BREAK.LVT
                            } else if (e < 45685) {
                                if (e === 45684) return u.CLUSTER_BREAK.LV
                            } else if (45685 <= e && e <= 45711) return u.CLUSTER_BREAK.LVT
                        } else if (e < 45713) {
                            if (e === 45712) return u.CLUSTER_BREAK.LV
                        } else if (e < 45740) {
                            if (45713 <= e && e <= 45739) return u.CLUSTER_BREAK.LVT
                        } else if (e === 45740) return u.CLUSTER_BREAK.LV
                    } else if (e < 45824) {
                        if (e < 45769) {
                            if (e < 45768) {
                                if (45741 <= e && e <= 45767) return u.CLUSTER_BREAK.LVT
                            } else if (e === 45768) return u.CLUSTER_BREAK.LV
                        } else if (e < 45796) {
                            if (45769 <= e && e <= 45795) return u.CLUSTER_BREAK.LVT
                        } else if (e < 45797) {
                            if (e === 45796) return u.CLUSTER_BREAK.LV
                        } else if (45797 <= e && e <= 45823) return u.CLUSTER_BREAK.LVT
                    } else if (e < 45853) {
                        if (e < 45825) {
                            if (e === 45824) return u.CLUSTER_BREAK.LV
                        } else if (e < 45852) {
                            if (45825 <= e && e <= 45851) return u.CLUSTER_BREAK.LVT
                        } else if (e === 45852) return u.CLUSTER_BREAK.LV
                    } else if (e < 45880) {
                        if (45853 <= e && e <= 45879) return u.CLUSTER_BREAK.LVT
                    } else if (e < 45881) {
                        if (e === 45880) return u.CLUSTER_BREAK.LV
                    } else if (45881 <= e && e <= 45907) return u.CLUSTER_BREAK.LVT
                } else if (e < 46189) {
                    if (e < 46048) {
                        if (e < 45965) {
                            if (e < 45936) {
                                if (e < 45909) {
                                    if (e === 45908) return u.CLUSTER_BREAK.LV
                                } else if (45909 <= e && e <= 45935) return u.CLUSTER_BREAK.LVT
                            } else if (e < 45937) {
                                if (e === 45936) return u.CLUSTER_BREAK.LV
                            } else if (e < 45964) {
                                if (45937 <= e && e <= 45963) return u.CLUSTER_BREAK.LVT
                            } else if (e === 45964) return u.CLUSTER_BREAK.LV
                        } else if (e < 45993) {
                            if (e < 45992) {
                                if (45965 <= e && e <= 45991) return u.CLUSTER_BREAK.LVT
                            } else if (e === 45992) return u.CLUSTER_BREAK.LV
                        } else if (e < 46020) {
                            if (45993 <= e && e <= 46019) return u.CLUSTER_BREAK.LVT
                        } else if (e < 46021) {
                            if (e === 46020) return u.CLUSTER_BREAK.LV
                        } else if (46021 <= e && e <= 46047) return u.CLUSTER_BREAK.LVT
                    } else if (e < 46105) {
                        if (e < 46076) {
                            if (e < 46049) {
                                if (e === 46048) return u.CLUSTER_BREAK.LV
                            } else if (46049 <= e && e <= 46075) return u.CLUSTER_BREAK.LVT
                        } else if (e < 46077) {
                            if (e === 46076) return u.CLUSTER_BREAK.LV
                        } else if (e < 46104) {
                            if (46077 <= e && e <= 46103) return u.CLUSTER_BREAK.LVT
                        } else if (e === 46104) return u.CLUSTER_BREAK.LV
                    } else if (e < 46160) {
                        if (e < 46132) {
                            if (46105 <= e && e <= 46131) return u.CLUSTER_BREAK.LVT
                        } else if (e < 46133) {
                            if (e === 46132) return u.CLUSTER_BREAK.LV
                        } else if (46133 <= e && e <= 46159) return u.CLUSTER_BREAK.LVT
                    } else if (e < 46161) {
                        if (e === 46160) return u.CLUSTER_BREAK.LV
                    } else if (e < 46188) {
                        if (46161 <= e && e <= 46187) return u.CLUSTER_BREAK.LVT
                    } else if (e === 46188) return u.CLUSTER_BREAK.LV
                } else if (e < 46356) {
                    if (e < 46272) {
                        if (e < 46217) {
                            if (e < 46216) {
                                if (46189 <= e && e <= 46215) return u.CLUSTER_BREAK.LVT
                            } else if (e === 46216) return u.CLUSTER_BREAK.LV
                        } else if (e < 46244) {
                            if (46217 <= e && e <= 46243) return u.CLUSTER_BREAK.LVT
                        } else if (e < 46245) {
                            if (e === 46244) return u.CLUSTER_BREAK.LV
                        } else if (46245 <= e && e <= 46271) return u.CLUSTER_BREAK.LVT
                    } else if (e < 46301) {
                        if (e < 46273) {
                            if (e === 46272) return u.CLUSTER_BREAK.LV
                        } else if (e < 46300) {
                            if (46273 <= e && e <= 46299) return u.CLUSTER_BREAK.LVT
                        } else if (e === 46300) return u.CLUSTER_BREAK.LV
                    } else if (e < 46328) {
                        if (46301 <= e && e <= 46327) return u.CLUSTER_BREAK.LVT
                    } else if (e < 46329) {
                        if (e === 46328) return u.CLUSTER_BREAK.LV
                    } else if (46329 <= e && e <= 46355) return u.CLUSTER_BREAK.LVT
                } else if (e < 46413) {
                    if (e < 46384) {
                        if (e < 46357) {
                            if (e === 46356) return u.CLUSTER_BREAK.LV
                        } else if (46357 <= e && e <= 46383) return u.CLUSTER_BREAK.LVT
                    } else if (e < 46385) {
                        if (e === 46384) return u.CLUSTER_BREAK.LV
                    } else if (e < 46412) {
                        if (46385 <= e && e <= 46411) return u.CLUSTER_BREAK.LVT
                    } else if (e === 46412) return u.CLUSTER_BREAK.LV
                } else if (e < 46468) {
                    if (e < 46440) {
                        if (46413 <= e && e <= 46439) return u.CLUSTER_BREAK.LVT
                    } else if (e < 46441) {
                        if (e === 46440) return u.CLUSTER_BREAK.LV
                    } else if (46441 <= e && e <= 46467) return u.CLUSTER_BREAK.LVT
                } else if (e < 46469) {
                    if (e === 46468) return u.CLUSTER_BREAK.LV
                } else if (e < 46496) {
                    if (46469 <= e && e <= 46495) return u.CLUSTER_BREAK.LVT
                } else if (e === 46496) return u.CLUSTER_BREAK.LV
            } else if (e < 47701) {
                if (e < 47112) {
                    if (e < 46804) {
                        if (e < 46637) {
                            if (e < 46580) {
                                if (e < 46525) {
                                    if (e < 46524) {
                                        if (46497 <= e && e <= 46523) return u.CLUSTER_BREAK.LVT
                                    } else if (e === 46524) return u.CLUSTER_BREAK.LV
                                } else if (e < 46552) {
                                    if (46525 <= e && e <= 46551) return u.CLUSTER_BREAK.LVT
                                } else if (e < 46553) {
                                    if (e === 46552) return u.CLUSTER_BREAK.LV
                                } else if (46553 <= e && e <= 46579) return u.CLUSTER_BREAK.LVT
                            } else if (e < 46608) {
                                if (e < 46581) {
                                    if (e === 46580) return u.CLUSTER_BREAK.LV
                                } else if (46581 <= e && e <= 46607) return u.CLUSTER_BREAK.LVT
                            } else if (e < 46609) {
                                if (e === 46608) return u.CLUSTER_BREAK.LV
                            } else if (e < 46636) {
                                if (46609 <= e && e <= 46635) return u.CLUSTER_BREAK.LVT
                            } else if (e === 46636) return u.CLUSTER_BREAK.LV
                        } else if (e < 46720) {
                            if (e < 46665) {
                                if (e < 46664) {
                                    if (46637 <= e && e <= 46663) return u.CLUSTER_BREAK.LVT
                                } else if (e === 46664) return u.CLUSTER_BREAK.LV
                            } else if (e < 46692) {
                                if (46665 <= e && e <= 46691) return u.CLUSTER_BREAK.LVT
                            } else if (e < 46693) {
                                if (e === 46692) return u.CLUSTER_BREAK.LV
                            } else if (46693 <= e && e <= 46719) return u.CLUSTER_BREAK.LVT
                        } else if (e < 46749) {
                            if (e < 46721) {
                                if (e === 46720) return u.CLUSTER_BREAK.LV
                            } else if (e < 46748) {
                                if (46721 <= e && e <= 46747) return u.CLUSTER_BREAK.LVT
                            } else if (e === 46748) return u.CLUSTER_BREAK.LV
                        } else if (e < 46776) {
                            if (46749 <= e && e <= 46775) return u.CLUSTER_BREAK.LVT
                        } else if (e < 46777) {
                            if (e === 46776) return u.CLUSTER_BREAK.LV
                        } else if (46777 <= e && e <= 46803) return u.CLUSTER_BREAK.LVT
                    } else if (e < 46945) {
                        if (e < 46861) {
                            if (e < 46832) {
                                if (e < 46805) {
                                    if (e === 46804) return u.CLUSTER_BREAK.LV
                                } else if (46805 <= e && e <= 46831) return u.CLUSTER_BREAK.LVT
                            } else if (e < 46833) {
                                if (e === 46832) return u.CLUSTER_BREAK.LV
                            } else if (e < 46860) {
                                if (46833 <= e && e <= 46859) return u.CLUSTER_BREAK.LVT
                            } else if (e === 46860) return u.CLUSTER_BREAK.LV
                        } else if (e < 46916) {
                            if (e < 46888) {
                                if (46861 <= e && e <= 46887) return u.CLUSTER_BREAK.LVT
                            } else if (e < 46889) {
                                if (e === 46888) return u.CLUSTER_BREAK.LV
                            } else if (46889 <= e && e <= 46915) return u.CLUSTER_BREAK.LVT
                        } else if (e < 46917) {
                            if (e === 46916) return u.CLUSTER_BREAK.LV
                        } else if (e < 46944) {
                            if (46917 <= e && e <= 46943) return u.CLUSTER_BREAK.LVT
                        } else if (e === 46944) return u.CLUSTER_BREAK.LV
                    } else if (e < 47028) {
                        if (e < 46973) {
                            if (e < 46972) {
                                if (46945 <= e && e <= 46971) return u.CLUSTER_BREAK.LVT
                            } else if (e === 46972) return u.CLUSTER_BREAK.LV
                        } else if (e < 47e3) {
                            if (46973 <= e && e <= 46999) return u.CLUSTER_BREAK.LVT
                        } else if (e < 47001) {
                            if (e === 47e3) return u.CLUSTER_BREAK.LV
                        } else if (47001 <= e && e <= 47027) return u.CLUSTER_BREAK.LVT
                    } else if (e < 47057) {
                        if (e < 47029) {
                            if (e === 47028) return u.CLUSTER_BREAK.LV
                        } else if (e < 47056) {
                            if (47029 <= e && e <= 47055) return u.CLUSTER_BREAK.LVT
                        } else if (e === 47056) return u.CLUSTER_BREAK.LV
                    } else if (e < 47084) {
                        if (47057 <= e && e <= 47083) return u.CLUSTER_BREAK.LVT
                    } else if (e < 47085) {
                        if (e === 47084) return u.CLUSTER_BREAK.LV
                    } else if (47085 <= e && e <= 47111) return u.CLUSTER_BREAK.LVT
                } else if (e < 47393) {
                    if (e < 47252) {
                        if (e < 47169) {
                            if (e < 47140) {
                                if (e < 47113) {
                                    if (e === 47112) return u.CLUSTER_BREAK.LV
                                } else if (47113 <= e && e <= 47139) return u.CLUSTER_BREAK.LVT
                            } else if (e < 47141) {
                                if (e === 47140) return u.CLUSTER_BREAK.LV
                            } else if (e < 47168) {
                                if (47141 <= e && e <= 47167) return u.CLUSTER_BREAK.LVT
                            } else if (e === 47168) return u.CLUSTER_BREAK.LV
                        } else if (e < 47197) {
                            if (e < 47196) {
                                if (47169 <= e && e <= 47195) return u.CLUSTER_BREAK.LVT
                            } else if (e === 47196) return u.CLUSTER_BREAK.LV
                        } else if (e < 47224) {
                            if (47197 <= e && e <= 47223) return u.CLUSTER_BREAK.LVT
                        } else if (e < 47225) {
                            if (e === 47224) return u.CLUSTER_BREAK.LV
                        } else if (47225 <= e && e <= 47251) return u.CLUSTER_BREAK.LVT
                    } else if (e < 47309) {
                        if (e < 47280) {
                            if (e < 47253) {
                                if (e === 47252) return u.CLUSTER_BREAK.LV
                            } else if (47253 <= e && e <= 47279) return u.CLUSTER_BREAK.LVT
                        } else if (e < 47281) {
                            if (e === 47280) return u.CLUSTER_BREAK.LV
                        } else if (e < 47308) {
                            if (47281 <= e && e <= 47307) return u.CLUSTER_BREAK.LVT
                        } else if (e === 47308) return u.CLUSTER_BREAK.LV
                    } else if (e < 47364) {
                        if (e < 47336) {
                            if (47309 <= e && e <= 47335) return u.CLUSTER_BREAK.LVT
                        } else if (e < 47337) {
                            if (e === 47336) return u.CLUSTER_BREAK.LV
                        } else if (47337 <= e && e <= 47363) return u.CLUSTER_BREAK.LVT
                    } else if (e < 47365) {
                        if (e === 47364) return u.CLUSTER_BREAK.LV
                    } else if (e < 47392) {
                        if (47365 <= e && e <= 47391) return u.CLUSTER_BREAK.LVT
                    } else if (e === 47392) return u.CLUSTER_BREAK.LV
                } else if (e < 47560) {
                    if (e < 47476) {
                        if (e < 47421) {
                            if (e < 47420) {
                                if (47393 <= e && e <= 47419) return u.CLUSTER_BREAK.LVT
                            } else if (e === 47420) return u.CLUSTER_BREAK.LV
                        } else if (e < 47448) {
                            if (47421 <= e && e <= 47447) return u.CLUSTER_BREAK.LVT
                        } else if (e < 47449) {
                            if (e === 47448) return u.CLUSTER_BREAK.LV
                        } else if (47449 <= e && e <= 47475) return u.CLUSTER_BREAK.LVT
                    } else if (e < 47505) {
                        if (e < 47477) {
                            if (e === 47476) return u.CLUSTER_BREAK.LV
                        } else if (e < 47504) {
                            if (47477 <= e && e <= 47503) return u.CLUSTER_BREAK.LVT
                        } else if (e === 47504) return u.CLUSTER_BREAK.LV
                    } else if (e < 47532) {
                        if (47505 <= e && e <= 47531) return u.CLUSTER_BREAK.LVT
                    } else if (e < 47533) {
                        if (e === 47532) return u.CLUSTER_BREAK.LV
                    } else if (47533 <= e && e <= 47559) return u.CLUSTER_BREAK.LVT
                } else if (e < 47617) {
                    if (e < 47588) {
                        if (e < 47561) {
                            if (e === 47560) return u.CLUSTER_BREAK.LV
                        } else if (47561 <= e && e <= 47587) return u.CLUSTER_BREAK.LVT
                    } else if (e < 47589) {
                        if (e === 47588) return u.CLUSTER_BREAK.LV
                    } else if (e < 47616) {
                        if (47589 <= e && e <= 47615) return u.CLUSTER_BREAK.LVT
                    } else if (e === 47616) return u.CLUSTER_BREAK.LV
                } else if (e < 47672) {
                    if (e < 47644) {
                        if (47617 <= e && e <= 47643) return u.CLUSTER_BREAK.LVT
                    } else if (e < 47645) {
                        if (e === 47644) return u.CLUSTER_BREAK.LV
                    } else if (47645 <= e && e <= 47671) return u.CLUSTER_BREAK.LVT
                } else if (e < 47673) {
                    if (e === 47672) return u.CLUSTER_BREAK.LV
                } else if (e < 47700) {
                    if (47673 <= e && e <= 47699) return u.CLUSTER_BREAK.LVT
                } else if (e === 47700) return u.CLUSTER_BREAK.LV
            } else if (e < 48316) {
                if (e < 48008) {
                    if (e < 47841) {
                        if (e < 47784) {
                            if (e < 47729) {
                                if (e < 47728) {
                                    if (47701 <= e && e <= 47727) return u.CLUSTER_BREAK.LVT
                                } else if (e === 47728) return u.CLUSTER_BREAK.LV
                            } else if (e < 47756) {
                                if (47729 <= e && e <= 47755) return u.CLUSTER_BREAK.LVT
                            } else if (e < 47757) {
                                if (e === 47756) return u.CLUSTER_BREAK.LV
                            } else if (47757 <= e && e <= 47783) return u.CLUSTER_BREAK.LVT
                        } else if (e < 47812) {
                            if (e < 47785) {
                                if (e === 47784) return u.CLUSTER_BREAK.LV
                            } else if (47785 <= e && e <= 47811) return u.CLUSTER_BREAK.LVT
                        } else if (e < 47813) {
                            if (e === 47812) return u.CLUSTER_BREAK.LV
                        } else if (e < 47840) {
                            if (47813 <= e && e <= 47839) return u.CLUSTER_BREAK.LVT
                        } else if (e === 47840) return u.CLUSTER_BREAK.LV
                    } else if (e < 47924) {
                        if (e < 47869) {
                            if (e < 47868) {
                                if (47841 <= e && e <= 47867) return u.CLUSTER_BREAK.LVT
                            } else if (e === 47868) return u.CLUSTER_BREAK.LV
                        } else if (e < 47896) {
                            if (47869 <= e && e <= 47895) return u.CLUSTER_BREAK.LVT
                        } else if (e < 47897) {
                            if (e === 47896) return u.CLUSTER_BREAK.LV
                        } else if (47897 <= e && e <= 47923) return u.CLUSTER_BREAK.LVT
                    } else if (e < 47953) {
                        if (e < 47925) {
                            if (e === 47924) return u.CLUSTER_BREAK.LV
                        } else if (e < 47952) {
                            if (47925 <= e && e <= 47951) return u.CLUSTER_BREAK.LVT
                        } else if (e === 47952) return u.CLUSTER_BREAK.LV
                    } else if (e < 47980) {
                        if (47953 <= e && e <= 47979) return u.CLUSTER_BREAK.LVT
                    } else if (e < 47981) {
                        if (e === 47980) return u.CLUSTER_BREAK.LV
                    } else if (47981 <= e && e <= 48007) return u.CLUSTER_BREAK.LVT
                } else if (e < 48149) {
                    if (e < 48065) {
                        if (e < 48036) {
                            if (e < 48009) {
                                if (e === 48008) return u.CLUSTER_BREAK.LV
                            } else if (48009 <= e && e <= 48035) return u.CLUSTER_BREAK.LVT
                        } else if (e < 48037) {
                            if (e === 48036) return u.CLUSTER_BREAK.LV
                        } else if (e < 48064) {
                            if (48037 <= e && e <= 48063) return u.CLUSTER_BREAK.LVT
                        } else if (e === 48064) return u.CLUSTER_BREAK.LV
                    } else if (e < 48120) {
                        if (e < 48092) {
                            if (48065 <= e && e <= 48091) return u.CLUSTER_BREAK.LVT
                        } else if (e < 48093) {
                            if (e === 48092) return u.CLUSTER_BREAK.LV
                        } else if (48093 <= e && e <= 48119) return u.CLUSTER_BREAK.LVT
                    } else if (e < 48121) {
                        if (e === 48120) return u.CLUSTER_BREAK.LV
                    } else if (e < 48148) {
                        if (48121 <= e && e <= 48147) return u.CLUSTER_BREAK.LVT
                    } else if (e === 48148) return u.CLUSTER_BREAK.LV
                } else if (e < 48232) {
                    if (e < 48177) {
                        if (e < 48176) {
                            if (48149 <= e && e <= 48175) return u.CLUSTER_BREAK.LVT
                        } else if (e === 48176) return u.CLUSTER_BREAK.LV
                    } else if (e < 48204) {
                        if (48177 <= e && e <= 48203) return u.CLUSTER_BREAK.LVT
                    } else if (e < 48205) {
                        if (e === 48204) return u.CLUSTER_BREAK.LV
                    } else if (48205 <= e && e <= 48231) return u.CLUSTER_BREAK.LVT
                } else if (e < 48261) {
                    if (e < 48233) {
                        if (e === 48232) return u.CLUSTER_BREAK.LV
                    } else if (e < 48260) {
                        if (48233 <= e && e <= 48259) return u.CLUSTER_BREAK.LVT
                    } else if (e === 48260) return u.CLUSTER_BREAK.LV
                } else if (e < 48288) {
                    if (48261 <= e && e <= 48287) return u.CLUSTER_BREAK.LVT
                } else if (e < 48289) {
                    if (e === 48288) return u.CLUSTER_BREAK.LV
                } else if (48289 <= e && e <= 48315) return u.CLUSTER_BREAK.LVT
            } else if (e < 48597) {
                if (e < 48456) {
                    if (e < 48373) {
                        if (e < 48344) {
                            if (e < 48317) {
                                if (e === 48316) return u.CLUSTER_BREAK.LV
                            } else if (48317 <= e && e <= 48343) return u.CLUSTER_BREAK.LVT
                        } else if (e < 48345) {
                            if (e === 48344) return u.CLUSTER_BREAK.LV
                        } else if (e < 48372) {
                            if (48345 <= e && e <= 48371) return u.CLUSTER_BREAK.LVT
                        } else if (e === 48372) return u.CLUSTER_BREAK.LV
                    } else if (e < 48401) {
                        if (e < 48400) {
                            if (48373 <= e && e <= 48399) return u.CLUSTER_BREAK.LVT
                        } else if (e === 48400) return u.CLUSTER_BREAK.LV
                    } else if (e < 48428) {
                        if (48401 <= e && e <= 48427) return u.CLUSTER_BREAK.LVT
                    } else if (e < 48429) {
                        if (e === 48428) return u.CLUSTER_BREAK.LV
                    } else if (48429 <= e && e <= 48455) return u.CLUSTER_BREAK.LVT
                } else if (e < 48513) {
                    if (e < 48484) {
                        if (e < 48457) {
                            if (e === 48456) return u.CLUSTER_BREAK.LV
                        } else if (48457 <= e && e <= 48483) return u.CLUSTER_BREAK.LVT
                    } else if (e < 48485) {
                        if (e === 48484) return u.CLUSTER_BREAK.LV
                    } else if (e < 48512) {
                        if (48485 <= e && e <= 48511) return u.CLUSTER_BREAK.LVT
                    } else if (e === 48512) return u.CLUSTER_BREAK.LV
                } else if (e < 48568) {
                    if (e < 48540) {
                        if (48513 <= e && e <= 48539) return u.CLUSTER_BREAK.LVT
                    } else if (e < 48541) {
                        if (e === 48540) return u.CLUSTER_BREAK.LV
                    } else if (48541 <= e && e <= 48567) return u.CLUSTER_BREAK.LVT
                } else if (e < 48569) {
                    if (e === 48568) return u.CLUSTER_BREAK.LV
                } else if (e < 48596) {
                    if (48569 <= e && e <= 48595) return u.CLUSTER_BREAK.LVT
                } else if (e === 48596) return u.CLUSTER_BREAK.LV
            } else if (e < 48764) {
                if (e < 48680) {
                    if (e < 48625) {
                        if (e < 48624) {
                            if (48597 <= e && e <= 48623) return u.CLUSTER_BREAK.LVT
                        } else if (e === 48624) return u.CLUSTER_BREAK.LV
                    } else if (e < 48652) {
                        if (48625 <= e && e <= 48651) return u.CLUSTER_BREAK.LVT
                    } else if (e < 48653) {
                        if (e === 48652) return u.CLUSTER_BREAK.LV
                    } else if (48653 <= e && e <= 48679) return u.CLUSTER_BREAK.LVT
                } else if (e < 48709) {
                    if (e < 48681) {
                        if (e === 48680) return u.CLUSTER_BREAK.LV
                    } else if (e < 48708) {
                        if (48681 <= e && e <= 48707) return u.CLUSTER_BREAK.LVT
                    } else if (e === 48708) return u.CLUSTER_BREAK.LV
                } else if (e < 48736) {
                    if (48709 <= e && e <= 48735) return u.CLUSTER_BREAK.LVT
                } else if (e < 48737) {
                    if (e === 48736) return u.CLUSTER_BREAK.LV
                } else if (48737 <= e && e <= 48763) return u.CLUSTER_BREAK.LVT
            } else if (e < 48821) {
                if (e < 48792) {
                    if (e < 48765) {
                        if (e === 48764) return u.CLUSTER_BREAK.LV
                    } else if (48765 <= e && e <= 48791) return u.CLUSTER_BREAK.LVT
                } else if (e < 48793) {
                    if (e === 48792) return u.CLUSTER_BREAK.LV
                } else if (e < 48820) {
                    if (48793 <= e && e <= 48819) return u.CLUSTER_BREAK.LVT
                } else if (e === 48820) return u.CLUSTER_BREAK.LV
            } else if (e < 48876) {
                if (e < 48848) {
                    if (48821 <= e && e <= 48847) return u.CLUSTER_BREAK.LVT
                } else if (e < 48849) {
                    if (e === 48848) return u.CLUSTER_BREAK.LV
                } else if (48849 <= e && e <= 48875) return u.CLUSTER_BREAK.LVT
            } else if (e < 48877) {
                if (e === 48876) return u.CLUSTER_BREAK.LV
            } else if (e < 48904) {
                if (48877 <= e && e <= 48903) return u.CLUSTER_BREAK.LVT
            } else if (e === 48904) return u.CLUSTER_BREAK.LV
        } else if (e < 53720) {
            if (e < 51312) {
                if (e < 50108) {
                    if (e < 49493) {
                        if (e < 49212) {
                            if (e < 49045) {
                                if (e < 48988) {
                                    if (e < 48933) {
                                        if (e < 48932) {
                                            if (48905 <= e && e <= 48931) return u.CLUSTER_BREAK.LVT
                                        } else if (e === 48932) return u.CLUSTER_BREAK.LV
                                    } else if (e < 48960) {
                                        if (48933 <= e && e <= 48959) return u.CLUSTER_BREAK.LVT
                                    } else if (e < 48961) {
                                        if (e === 48960) return u.CLUSTER_BREAK.LV
                                    } else if (48961 <= e && e <= 48987) return u.CLUSTER_BREAK.LVT
                                } else if (e < 49016) {
                                    if (e < 48989) {
                                        if (e === 48988) return u.CLUSTER_BREAK.LV
                                    } else if (48989 <= e && e <= 49015) return u.CLUSTER_BREAK.LVT
                                } else if (e < 49017) {
                                    if (e === 49016) return u.CLUSTER_BREAK.LV
                                } else if (e < 49044) {
                                    if (49017 <= e && e <= 49043) return u.CLUSTER_BREAK.LVT
                                } else if (e === 49044) return u.CLUSTER_BREAK.LV
                            } else if (e < 49128) {
                                if (e < 49073) {
                                    if (e < 49072) {
                                        if (49045 <= e && e <= 49071) return u.CLUSTER_BREAK.LVT
                                    } else if (e === 49072) return u.CLUSTER_BREAK.LV
                                } else if (e < 49100) {
                                    if (49073 <= e && e <= 49099) return u.CLUSTER_BREAK.LVT
                                } else if (e < 49101) {
                                    if (e === 49100) return u.CLUSTER_BREAK.LV
                                } else if (49101 <= e && e <= 49127) return u.CLUSTER_BREAK.LVT
                            } else if (e < 49157) {
                                if (e < 49129) {
                                    if (e === 49128) return u.CLUSTER_BREAK.LV
                                } else if (e < 49156) {
                                    if (49129 <= e && e <= 49155) return u.CLUSTER_BREAK.LVT
                                } else if (e === 49156) return u.CLUSTER_BREAK.LV
                            } else if (e < 49184) {
                                if (49157 <= e && e <= 49183) return u.CLUSTER_BREAK.LVT
                            } else if (e < 49185) {
                                if (e === 49184) return u.CLUSTER_BREAK.LV
                            } else if (49185 <= e && e <= 49211) return u.CLUSTER_BREAK.LVT
                        } else if (e < 49352) {
                            if (e < 49269) {
                                if (e < 49240) {
                                    if (e < 49213) {
                                        if (e === 49212) return u.CLUSTER_BREAK.LV
                                    } else if (49213 <= e && e <= 49239) return u.CLUSTER_BREAK.LVT
                                } else if (e < 49241) {
                                    if (e === 49240) return u.CLUSTER_BREAK.LV
                                } else if (e < 49268) {
                                    if (49241 <= e && e <= 49267) return u.CLUSTER_BREAK.LVT
                                } else if (e === 49268) return u.CLUSTER_BREAK.LV
                            } else if (e < 49297) {
                                if (e < 49296) {
                                    if (49269 <= e && e <= 49295) return u.CLUSTER_BREAK.LVT
                                } else if (e === 49296) return u.CLUSTER_BREAK.LV
                            } else if (e < 49324) {
                                if (49297 <= e && e <= 49323) return u.CLUSTER_BREAK.LVT
                            } else if (e < 49325) {
                                if (e === 49324) return u.CLUSTER_BREAK.LV
                            } else if (49325 <= e && e <= 49351) return u.CLUSTER_BREAK.LVT
                        } else if (e < 49409) {
                            if (e < 49380) {
                                if (e < 49353) {
                                    if (e === 49352) return u.CLUSTER_BREAK.LV
                                } else if (49353 <= e && e <= 49379) return u.CLUSTER_BREAK.LVT
                            } else if (e < 49381) {
                                if (e === 49380) return u.CLUSTER_BREAK.LV
                            } else if (e < 49408) {
                                if (49381 <= e && e <= 49407) return u.CLUSTER_BREAK.LVT
                            } else if (e === 49408) return u.CLUSTER_BREAK.LV
                        } else if (e < 49464) {
                            if (e < 49436) {
                                if (49409 <= e && e <= 49435) return u.CLUSTER_BREAK.LVT
                            } else if (e < 49437) {
                                if (e === 49436) return u.CLUSTER_BREAK.LV
                            } else if (49437 <= e && e <= 49463) return u.CLUSTER_BREAK.LVT
                        } else if (e < 49465) {
                            if (e === 49464) return u.CLUSTER_BREAK.LV
                        } else if (e < 49492) {
                            if (49465 <= e && e <= 49491) return u.CLUSTER_BREAK.LVT
                        } else if (e === 49492) return u.CLUSTER_BREAK.LV
                    } else if (e < 49800) {
                        if (e < 49633) {
                            if (e < 49576) {
                                if (e < 49521) {
                                    if (e < 49520) {
                                        if (49493 <= e && e <= 49519) return u.CLUSTER_BREAK.LVT
                                    } else if (e === 49520) return u.CLUSTER_BREAK.LV
                                } else if (e < 49548) {
                                    if (49521 <= e && e <= 49547) return u.CLUSTER_BREAK.LVT
                                } else if (e < 49549) {
                                    if (e === 49548) return u.CLUSTER_BREAK.LV
                                } else if (49549 <= e && e <= 49575) return u.CLUSTER_BREAK.LVT
                            } else if (e < 49604) {
                                if (e < 49577) {
                                    if (e === 49576) return u.CLUSTER_BREAK.LV
                                } else if (49577 <= e && e <= 49603) return u.CLUSTER_BREAK.LVT
                            } else if (e < 49605) {
                                if (e === 49604) return u.CLUSTER_BREAK.LV
                            } else if (e < 49632) {
                                if (49605 <= e && e <= 49631) return u.CLUSTER_BREAK.LVT
                            } else if (e === 49632) return u.CLUSTER_BREAK.LV
                        } else if (e < 49716) {
                            if (e < 49661) {
                                if (e < 49660) {
                                    if (49633 <= e && e <= 49659) return u.CLUSTER_BREAK.LVT
                                } else if (e === 49660) return u.CLUSTER_BREAK.LV
                            } else if (e < 49688) {
                                if (49661 <= e && e <= 49687) return u.CLUSTER_BREAK.LVT
                            } else if (e < 49689) {
                                if (e === 49688) return u.CLUSTER_BREAK.LV
                            } else if (49689 <= e && e <= 49715) return u.CLUSTER_BREAK.LVT
                        } else if (e < 49745) {
                            if (e < 49717) {
                                if (e === 49716) return u.CLUSTER_BREAK.LV
                            } else if (e < 49744) {
                                if (49717 <= e && e <= 49743) return u.CLUSTER_BREAK.LVT
                            } else if (e === 49744) return u.CLUSTER_BREAK.LV
                        } else if (e < 49772) {
                            if (49745 <= e && e <= 49771) return u.CLUSTER_BREAK.LVT
                        } else if (e < 49773) {
                            if (e === 49772) return u.CLUSTER_BREAK.LV
                        } else if (49773 <= e && e <= 49799) return u.CLUSTER_BREAK.LVT
                    } else if (e < 49941) {
                        if (e < 49857) {
                            if (e < 49828) {
                                if (e < 49801) {
                                    if (e === 49800) return u.CLUSTER_BREAK.LV
                                } else if (49801 <= e && e <= 49827) return u.CLUSTER_BREAK.LVT
                            } else if (e < 49829) {
                                if (e === 49828) return u.CLUSTER_BREAK.LV
                            } else if (e < 49856) {
                                if (49829 <= e && e <= 49855) return u.CLUSTER_BREAK.LVT
                            } else if (e === 49856) return u.CLUSTER_BREAK.LV
                        } else if (e < 49912) {
                            if (e < 49884) {
                                if (49857 <= e && e <= 49883) return u.CLUSTER_BREAK.LVT
                            } else if (e < 49885) {
                                if (e === 49884) return u.CLUSTER_BREAK.LV
                            } else if (49885 <= e && e <= 49911) return u.CLUSTER_BREAK.LVT
                        } else if (e < 49913) {
                            if (e === 49912) return u.CLUSTER_BREAK.LV
                        } else if (e < 49940) {
                            if (49913 <= e && e <= 49939) return u.CLUSTER_BREAK.LVT
                        } else if (e === 49940) return u.CLUSTER_BREAK.LV
                    } else if (e < 50024) {
                        if (e < 49969) {
                            if (e < 49968) {
                                if (49941 <= e && e <= 49967) return u.CLUSTER_BREAK.LVT
                            } else if (e === 49968) return u.CLUSTER_BREAK.LV
                        } else if (e < 49996) {
                            if (49969 <= e && e <= 49995) return u.CLUSTER_BREAK.LVT
                        } else if (e < 49997) {
                            if (e === 49996) return u.CLUSTER_BREAK.LV
                        } else if (49997 <= e && e <= 50023) return u.CLUSTER_BREAK.LVT
                    } else if (e < 50053) {
                        if (e < 50025) {
                            if (e === 50024) return u.CLUSTER_BREAK.LV
                        } else if (e < 50052) {
                            if (50025 <= e && e <= 50051) return u.CLUSTER_BREAK.LVT
                        } else if (e === 50052) return u.CLUSTER_BREAK.LV
                    } else if (e < 50080) {
                        if (50053 <= e && e <= 50079) return u.CLUSTER_BREAK.LVT
                    } else if (e < 50081) {
                        if (e === 50080) return u.CLUSTER_BREAK.LV
                    } else if (50081 <= e && e <= 50107) return u.CLUSTER_BREAK.LVT
                } else if (e < 50697) {
                    if (e < 50389) {
                        if (e < 50248) {
                            if (e < 50165) {
                                if (e < 50136) {
                                    if (e < 50109) {
                                        if (e === 50108) return u.CLUSTER_BREAK.LV
                                    } else if (50109 <= e && e <= 50135) return u.CLUSTER_BREAK.LVT
                                } else if (e < 50137) {
                                    if (e === 50136) return u.CLUSTER_BREAK.LV
                                } else if (e < 50164) {
                                    if (50137 <= e && e <= 50163) return u.CLUSTER_BREAK.LVT
                                } else if (e === 50164) return u.CLUSTER_BREAK.LV
                            } else if (e < 50193) {
                                if (e < 50192) {
                                    if (50165 <= e && e <= 50191) return u.CLUSTER_BREAK.LVT
                                } else if (e === 50192) return u.CLUSTER_BREAK.LV
                            } else if (e < 50220) {
                                if (50193 <= e && e <= 50219) return u.CLUSTER_BREAK.LVT
                            } else if (e < 50221) {
                                if (e === 50220) return u.CLUSTER_BREAK.LV
                            } else if (50221 <= e && e <= 50247) return u.CLUSTER_BREAK.LVT
                        } else if (e < 50305) {
                            if (e < 50276) {
                                if (e < 50249) {
                                    if (e === 50248) return u.CLUSTER_BREAK.LV
                                } else if (50249 <= e && e <= 50275) return u.CLUSTER_BREAK.LVT
                            } else if (e < 50277) {
                                if (e === 50276) return u.CLUSTER_BREAK.LV
                            } else if (e < 50304) {
                                if (50277 <= e && e <= 50303) return u.CLUSTER_BREAK.LVT
                            } else if (e === 50304) return u.CLUSTER_BREAK.LV
                        } else if (e < 50360) {
                            if (e < 50332) {
                                if (50305 <= e && e <= 50331) return u.CLUSTER_BREAK.LVT
                            } else if (e < 50333) {
                                if (e === 50332) return u.CLUSTER_BREAK.LV
                            } else if (50333 <= e && e <= 50359) return u.CLUSTER_BREAK.LVT
                        } else if (e < 50361) {
                            if (e === 50360) return u.CLUSTER_BREAK.LV
                        } else if (e < 50388) {
                            if (50361 <= e && e <= 50387) return u.CLUSTER_BREAK.LVT
                        } else if (e === 50388) return u.CLUSTER_BREAK.LV
                    } else if (e < 50556) {
                        if (e < 50472) {
                            if (e < 50417) {
                                if (e < 50416) {
                                    if (50389 <= e && e <= 50415) return u.CLUSTER_BREAK.LVT
                                } else if (e === 50416) return u.CLUSTER_BREAK.LV
                            } else if (e < 50444) {
                                if (50417 <= e && e <= 50443) return u.CLUSTER_BREAK.LVT
                            } else if (e < 50445) {
                                if (e === 50444) return u.CLUSTER_BREAK.LV
                            } else if (50445 <= e && e <= 50471) return u.CLUSTER_BREAK.LVT
                        } else if (e < 50501) {
                            if (e < 50473) {
                                if (e === 50472) return u.CLUSTER_BREAK.LV
                            } else if (e < 50500) {
                                if (50473 <= e && e <= 50499) return u.CLUSTER_BREAK.LVT
                            } else if (e === 50500) return u.CLUSTER_BREAK.LV
                        } else if (e < 50528) {
                            if (50501 <= e && e <= 50527) return u.CLUSTER_BREAK.LVT
                        } else if (e < 50529) {
                            if (e === 50528) return u.CLUSTER_BREAK.LV
                        } else if (50529 <= e && e <= 50555) return u.CLUSTER_BREAK.LVT
                    } else if (e < 50613) {
                        if (e < 50584) {
                            if (e < 50557) {
                                if (e === 50556) return u.CLUSTER_BREAK.LV
                            } else if (50557 <= e && e <= 50583) return u.CLUSTER_BREAK.LVT
                        } else if (e < 50585) {
                            if (e === 50584) return u.CLUSTER_BREAK.LV
                        } else if (e < 50612) {
                            if (50585 <= e && e <= 50611) return u.CLUSTER_BREAK.LVT
                        } else if (e === 50612) return u.CLUSTER_BREAK.LV
                    } else if (e < 50668) {
                        if (e < 50640) {
                            if (50613 <= e && e <= 50639) return u.CLUSTER_BREAK.LVT
                        } else if (e < 50641) {
                            if (e === 50640) return u.CLUSTER_BREAK.LV
                        } else if (50641 <= e && e <= 50667) return u.CLUSTER_BREAK.LVT
                    } else if (e < 50669) {
                        if (e === 50668) return u.CLUSTER_BREAK.LV
                    } else if (e < 50696) {
                        if (50669 <= e && e <= 50695) return u.CLUSTER_BREAK.LVT
                    } else if (e === 50696) return u.CLUSTER_BREAK.LV
                } else if (e < 51004) {
                    if (e < 50837) {
                        if (e < 50780) {
                            if (e < 50725) {
                                if (e < 50724) {
                                    if (50697 <= e && e <= 50723) return u.CLUSTER_BREAK.LVT
                                } else if (e === 50724) return u.CLUSTER_BREAK.LV
                            } else if (e < 50752) {
                                if (50725 <= e && e <= 50751) return u.CLUSTER_BREAK.LVT
                            } else if (e < 50753) {
                                if (e === 50752) return u.CLUSTER_BREAK.LV
                            } else if (50753 <= e && e <= 50779) return u.CLUSTER_BREAK.LVT
                        } else if (e < 50808) {
                            if (e < 50781) {
                                if (e === 50780) return u.CLUSTER_BREAK.LV
                            } else if (50781 <= e && e <= 50807) return u.CLUSTER_BREAK.LVT
                        } else if (e < 50809) {
                            if (e === 50808) return u.CLUSTER_BREAK.LV
                        } else if (e < 50836) {
                            if (50809 <= e && e <= 50835) return u.CLUSTER_BREAK.LVT
                        } else if (e === 50836) return u.CLUSTER_BREAK.LV
                    } else if (e < 50920) {
                        if (e < 50865) {
                            if (e < 50864) {
                                if (50837 <= e && e <= 50863) return u.CLUSTER_BREAK.LVT
                            } else if (e === 50864) return u.CLUSTER_BREAK.LV
                        } else if (e < 50892) {
                            if (50865 <= e && e <= 50891) return u.CLUSTER_BREAK.LVT
                        } else if (e < 50893) {
                            if (e === 50892) return u.CLUSTER_BREAK.LV
                        } else if (50893 <= e && e <= 50919) return u.CLUSTER_BREAK.LVT
                    } else if (e < 50949) {
                        if (e < 50921) {
                            if (e === 50920) return u.CLUSTER_BREAK.LV
                        } else if (e < 50948) {
                            if (50921 <= e && e <= 50947) return u.CLUSTER_BREAK.LVT
                        } else if (e === 50948) return u.CLUSTER_BREAK.LV
                    } else if (e < 50976) {
                        if (50949 <= e && e <= 50975) return u.CLUSTER_BREAK.LVT
                    } else if (e < 50977) {
                        if (e === 50976) return u.CLUSTER_BREAK.LV
                    } else if (50977 <= e && e <= 51003) return u.CLUSTER_BREAK.LVT
                } else if (e < 51145) {
                    if (e < 51061) {
                        if (e < 51032) {
                            if (e < 51005) {
                                if (e === 51004) return u.CLUSTER_BREAK.LV
                            } else if (51005 <= e && e <= 51031) return u.CLUSTER_BREAK.LVT
                        } else if (e < 51033) {
                            if (e === 51032) return u.CLUSTER_BREAK.LV
                        } else if (e < 51060) {
                            if (51033 <= e && e <= 51059) return u.CLUSTER_BREAK.LVT
                        } else if (e === 51060) return u.CLUSTER_BREAK.LV
                    } else if (e < 51116) {
                        if (e < 51088) {
                            if (51061 <= e && e <= 51087) return u.CLUSTER_BREAK.LVT
                        } else if (e < 51089) {
                            if (e === 51088) return u.CLUSTER_BREAK.LV
                        } else if (51089 <= e && e <= 51115) return u.CLUSTER_BREAK.LVT
                    } else if (e < 51117) {
                        if (e === 51116) return u.CLUSTER_BREAK.LV
                    } else if (e < 51144) {
                        if (51117 <= e && e <= 51143) return u.CLUSTER_BREAK.LVT
                    } else if (e === 51144) return u.CLUSTER_BREAK.LV
                } else if (e < 51228) {
                    if (e < 51173) {
                        if (e < 51172) {
                            if (51145 <= e && e <= 51171) return u.CLUSTER_BREAK.LVT
                        } else if (e === 51172) return u.CLUSTER_BREAK.LV
                    } else if (e < 51200) {
                        if (51173 <= e && e <= 51199) return u.CLUSTER_BREAK.LVT
                    } else if (e < 51201) {
                        if (e === 51200) return u.CLUSTER_BREAK.LV
                    } else if (51201 <= e && e <= 51227) return u.CLUSTER_BREAK.LVT
                } else if (e < 51257) {
                    if (e < 51229) {
                        if (e === 51228) return u.CLUSTER_BREAK.LV
                    } else if (e < 51256) {
                        if (51229 <= e && e <= 51255) return u.CLUSTER_BREAK.LVT
                    } else if (e === 51256) return u.CLUSTER_BREAK.LV
                } else if (e < 51284) {
                    if (51257 <= e && e <= 51283) return u.CLUSTER_BREAK.LVT
                } else if (e < 51285) {
                    if (e === 51284) return u.CLUSTER_BREAK.LV
                } else if (51285 <= e && e <= 51311) return u.CLUSTER_BREAK.LVT
            } else if (e < 52516) {
                if (e < 51901) {
                    if (e < 51593) {
                        if (e < 51452) {
                            if (e < 51369) {
                                if (e < 51340) {
                                    if (e < 51313) {
                                        if (e === 51312) return u.CLUSTER_BREAK.LV
                                    } else if (51313 <= e && e <= 51339) return u.CLUSTER_BREAK.LVT
                                } else if (e < 51341) {
                                    if (e === 51340) return u.CLUSTER_BREAK.LV
                                } else if (e < 51368) {
                                    if (51341 <= e && e <= 51367) return u.CLUSTER_BREAK.LVT
                                } else if (e === 51368) return u.CLUSTER_BREAK.LV
                            } else if (e < 51397) {
                                if (e < 51396) {
                                    if (51369 <= e && e <= 51395) return u.CLUSTER_BREAK.LVT
                                } else if (e === 51396) return u.CLUSTER_BREAK.LV
                            } else if (e < 51424) {
                                if (51397 <= e && e <= 51423) return u.CLUSTER_BREAK.LVT
                            } else if (e < 51425) {
                                if (e === 51424) return u.CLUSTER_BREAK.LV
                            } else if (51425 <= e && e <= 51451) return u.CLUSTER_BREAK.LVT
                        } else if (e < 51509) {
                            if (e < 51480) {
                                if (e < 51453) {
                                    if (e === 51452) return u.CLUSTER_BREAK.LV
                                } else if (51453 <= e && e <= 51479) return u.CLUSTER_BREAK.LVT
                            } else if (e < 51481) {
                                if (e === 51480) return u.CLUSTER_BREAK.LV
                            } else if (e < 51508) {
                                if (51481 <= e && e <= 51507) return u.CLUSTER_BREAK.LVT
                            } else if (e === 51508) return u.CLUSTER_BREAK.LV
                        } else if (e < 51564) {
                            if (e < 51536) {
                                if (51509 <= e && e <= 51535) return u.CLUSTER_BREAK.LVT
                            } else if (e < 51537) {
                                if (e === 51536) return u.CLUSTER_BREAK.LV
                            } else if (51537 <= e && e <= 51563) return u.CLUSTER_BREAK.LVT
                        } else if (e < 51565) {
                            if (e === 51564) return u.CLUSTER_BREAK.LV
                        } else if (e < 51592) {
                            if (51565 <= e && e <= 51591) return u.CLUSTER_BREAK.LVT
                        } else if (e === 51592) return u.CLUSTER_BREAK.LV
                    } else if (e < 51760) {
                        if (e < 51676) {
                            if (e < 51621) {
                                if (e < 51620) {
                                    if (51593 <= e && e <= 51619) return u.CLUSTER_BREAK.LVT
                                } else if (e === 51620) return u.CLUSTER_BREAK.LV
                            } else if (e < 51648) {
                                if (51621 <= e && e <= 51647) return u.CLUSTER_BREAK.LVT
                            } else if (e < 51649) {
                                if (e === 51648) return u.CLUSTER_BREAK.LV
                            } else if (51649 <= e && e <= 51675) return u.CLUSTER_BREAK.LVT
                        } else if (e < 51705) {
                            if (e < 51677) {
                                if (e === 51676) return u.CLUSTER_BREAK.LV
                            } else if (e < 51704) {
                                if (51677 <= e && e <= 51703) return u.CLUSTER_BREAK.LVT
                            } else if (e === 51704) return u.CLUSTER_BREAK.LV
                        } else if (e < 51732) {
                            if (51705 <= e && e <= 51731) return u.CLUSTER_BREAK.LVT
                        } else if (e < 51733) {
                            if (e === 51732) return u.CLUSTER_BREAK.LV
                        } else if (51733 <= e && e <= 51759) return u.CLUSTER_BREAK.LVT
                    } else if (e < 51817) {
                        if (e < 51788) {
                            if (e < 51761) {
                                if (e === 51760) return u.CLUSTER_BREAK.LV
                            } else if (51761 <= e && e <= 51787) return u.CLUSTER_BREAK.LVT
                        } else if (e < 51789) {
                            if (e === 51788) return u.CLUSTER_BREAK.LV
                        } else if (e < 51816) {
                            if (51789 <= e && e <= 51815) return u.CLUSTER_BREAK.LVT
                        } else if (e === 51816) return u.CLUSTER_BREAK.LV
                    } else if (e < 51872) {
                        if (e < 51844) {
                            if (51817 <= e && e <= 51843) return u.CLUSTER_BREAK.LVT
                        } else if (e < 51845) {
                            if (e === 51844) return u.CLUSTER_BREAK.LV
                        } else if (51845 <= e && e <= 51871) return u.CLUSTER_BREAK.LVT
                    } else if (e < 51873) {
                        if (e === 51872) return u.CLUSTER_BREAK.LV
                    } else if (e < 51900) {
                        if (51873 <= e && e <= 51899) return u.CLUSTER_BREAK.LVT
                    } else if (e === 51900) return u.CLUSTER_BREAK.LV
                } else if (e < 52208) {
                    if (e < 52041) {
                        if (e < 51984) {
                            if (e < 51929) {
                                if (e < 51928) {
                                    if (51901 <= e && e <= 51927) return u.CLUSTER_BREAK.LVT
                                } else if (e === 51928) return u.CLUSTER_BREAK.LV
                            } else if (e < 51956) {
                                if (51929 <= e && e <= 51955) return u.CLUSTER_BREAK.LVT
                            } else if (e < 51957) {
                                if (e === 51956) return u.CLUSTER_BREAK.LV
                            } else if (51957 <= e && e <= 51983) return u.CLUSTER_BREAK.LVT
                        } else if (e < 52012) {
                            if (e < 51985) {
                                if (e === 51984) return u.CLUSTER_BREAK.LV
                            } else if (51985 <= e && e <= 52011) return u.CLUSTER_BREAK.LVT
                        } else if (e < 52013) {
                            if (e === 52012) return u.CLUSTER_BREAK.LV
                        } else if (e < 52040) {
                            if (52013 <= e && e <= 52039) return u.CLUSTER_BREAK.LVT
                        } else if (e === 52040) return u.CLUSTER_BREAK.LV
                    } else if (e < 52124) {
                        if (e < 52069) {
                            if (e < 52068) {
                                if (52041 <= e && e <= 52067) return u.CLUSTER_BREAK.LVT
                            } else if (e === 52068) return u.CLUSTER_BREAK.LV
                        } else if (e < 52096) {
                            if (52069 <= e && e <= 52095) return u.CLUSTER_BREAK.LVT
                        } else if (e < 52097) {
                            if (e === 52096) return u.CLUSTER_BREAK.LV
                        } else if (52097 <= e && e <= 52123) return u.CLUSTER_BREAK.LVT
                    } else if (e < 52153) {
                        if (e < 52125) {
                            if (e === 52124) return u.CLUSTER_BREAK.LV
                        } else if (e < 52152) {
                            if (52125 <= e && e <= 52151) return u.CLUSTER_BREAK.LVT
                        } else if (e === 52152) return u.CLUSTER_BREAK.LV
                    } else if (e < 52180) {
                        if (52153 <= e && e <= 52179) return u.CLUSTER_BREAK.LVT
                    } else if (e < 52181) {
                        if (e === 52180) return u.CLUSTER_BREAK.LV
                    } else if (52181 <= e && e <= 52207) return u.CLUSTER_BREAK.LVT
                } else if (e < 52349) {
                    if (e < 52265) {
                        if (e < 52236) {
                            if (e < 52209) {
                                if (e === 52208) return u.CLUSTER_BREAK.LV
                            } else if (52209 <= e && e <= 52235) return u.CLUSTER_BREAK.LVT
                        } else if (e < 52237) {
                            if (e === 52236) return u.CLUSTER_BREAK.LV
                        } else if (e < 52264) {
                            if (52237 <= e && e <= 52263) return u.CLUSTER_BREAK.LVT
                        } else if (e === 52264) return u.CLUSTER_BREAK.LV
                    } else if (e < 52320) {
                        if (e < 52292) {
                            if (52265 <= e && e <= 52291) return u.CLUSTER_BREAK.LVT
                        } else if (e < 52293) {
                            if (e === 52292) return u.CLUSTER_BREAK.LV
                        } else if (52293 <= e && e <= 52319) return u.CLUSTER_BREAK.LVT
                    } else if (e < 52321) {
                        if (e === 52320) return u.CLUSTER_BREAK.LV
                    } else if (e < 52348) {
                        if (52321 <= e && e <= 52347) return u.CLUSTER_BREAK.LVT
                    } else if (e === 52348) return u.CLUSTER_BREAK.LV
                } else if (e < 52432) {
                    if (e < 52377) {
                        if (e < 52376) {
                            if (52349 <= e && e <= 52375) return u.CLUSTER_BREAK.LVT
                        } else if (e === 52376) return u.CLUSTER_BREAK.LV
                    } else if (e < 52404) {
                        if (52377 <= e && e <= 52403) return u.CLUSTER_BREAK.LVT
                    } else if (e < 52405) {
                        if (e === 52404) return u.CLUSTER_BREAK.LV
                    } else if (52405 <= e && e <= 52431) return u.CLUSTER_BREAK.LVT
                } else if (e < 52461) {
                    if (e < 52433) {
                        if (e === 52432) return u.CLUSTER_BREAK.LV
                    } else if (e < 52460) {
                        if (52433 <= e && e <= 52459) return u.CLUSTER_BREAK.LVT
                    } else if (e === 52460) return u.CLUSTER_BREAK.LV
                } else if (e < 52488) {
                    if (52461 <= e && e <= 52487) return u.CLUSTER_BREAK.LVT
                } else if (e < 52489) {
                    if (e === 52488) return u.CLUSTER_BREAK.LV
                } else if (52489 <= e && e <= 52515) return u.CLUSTER_BREAK.LVT
            } else if (e < 53105) {
                if (e < 52797) {
                    if (e < 52656) {
                        if (e < 52573) {
                            if (e < 52544) {
                                if (e < 52517) {
                                    if (e === 52516) return u.CLUSTER_BREAK.LV
                                } else if (52517 <= e && e <= 52543) return u.CLUSTER_BREAK.LVT
                            } else if (e < 52545) {
                                if (e === 52544) return u.CLUSTER_BREAK.LV
                            } else if (e < 52572) {
                                if (52545 <= e && e <= 52571) return u.CLUSTER_BREAK.LVT
                            } else if (e === 52572) return u.CLUSTER_BREAK.LV
                        } else if (e < 52601) {
                            if (e < 52600) {
                                if (52573 <= e && e <= 52599) return u.CLUSTER_BREAK.LVT
                            } else if (e === 52600) return u.CLUSTER_BREAK.LV
                        } else if (e < 52628) {
                            if (52601 <= e && e <= 52627) return u.CLUSTER_BREAK.LVT
                        } else if (e < 52629) {
                            if (e === 52628) return u.CLUSTER_BREAK.LV
                        } else if (52629 <= e && e <= 52655) return u.CLUSTER_BREAK.LVT
                    } else if (e < 52713) {
                        if (e < 52684) {
                            if (e < 52657) {
                                if (e === 52656) return u.CLUSTER_BREAK.LV
                            } else if (52657 <= e && e <= 52683) return u.CLUSTER_BREAK.LVT
                        } else if (e < 52685) {
                            if (e === 52684) return u.CLUSTER_BREAK.LV
                        } else if (e < 52712) {
                            if (52685 <= e && e <= 52711) return u.CLUSTER_BREAK.LVT
                        } else if (e === 52712) return u.CLUSTER_BREAK.LV
                    } else if (e < 52768) {
                        if (e < 52740) {
                            if (52713 <= e && e <= 52739) return u.CLUSTER_BREAK.LVT
                        } else if (e < 52741) {
                            if (e === 52740) return u.CLUSTER_BREAK.LV
                        } else if (52741 <= e && e <= 52767) return u.CLUSTER_BREAK.LVT
                    } else if (e < 52769) {
                        if (e === 52768) return u.CLUSTER_BREAK.LV
                    } else if (e < 52796) {
                        if (52769 <= e && e <= 52795) return u.CLUSTER_BREAK.LVT
                    } else if (e === 52796) return u.CLUSTER_BREAK.LV
                } else if (e < 52964) {
                    if (e < 52880) {
                        if (e < 52825) {
                            if (e < 52824) {
                                if (52797 <= e && e <= 52823) return u.CLUSTER_BREAK.LVT
                            } else if (e === 52824) return u.CLUSTER_BREAK.LV
                        } else if (e < 52852) {
                            if (52825 <= e && e <= 52851) return u.CLUSTER_BREAK.LVT
                        } else if (e < 52853) {
                            if (e === 52852) return u.CLUSTER_BREAK.LV
                        } else if (52853 <= e && e <= 52879) return u.CLUSTER_BREAK.LVT
                    } else if (e < 52909) {
                        if (e < 52881) {
                            if (e === 52880) return u.CLUSTER_BREAK.LV
                        } else if (e < 52908) {
                            if (52881 <= e && e <= 52907) return u.CLUSTER_BREAK.LVT
                        } else if (e === 52908) return u.CLUSTER_BREAK.LV
                    } else if (e < 52936) {
                        if (52909 <= e && e <= 52935) return u.CLUSTER_BREAK.LVT
                    } else if (e < 52937) {
                        if (e === 52936) return u.CLUSTER_BREAK.LV
                    } else if (52937 <= e && e <= 52963) return u.CLUSTER_BREAK.LVT
                } else if (e < 53021) {
                    if (e < 52992) {
                        if (e < 52965) {
                            if (e === 52964) return u.CLUSTER_BREAK.LV
                        } else if (52965 <= e && e <= 52991) return u.CLUSTER_BREAK.LVT
                    } else if (e < 52993) {
                        if (e === 52992) return u.CLUSTER_BREAK.LV
                    } else if (e < 53020) {
                        if (52993 <= e && e <= 53019) return u.CLUSTER_BREAK.LVT
                    } else if (e === 53020) return u.CLUSTER_BREAK.LV
                } else if (e < 53076) {
                    if (e < 53048) {
                        if (53021 <= e && e <= 53047) return u.CLUSTER_BREAK.LVT
                    } else if (e < 53049) {
                        if (e === 53048) return u.CLUSTER_BREAK.LV
                    } else if (53049 <= e && e <= 53075) return u.CLUSTER_BREAK.LVT
                } else if (e < 53077) {
                    if (e === 53076) return u.CLUSTER_BREAK.LV
                } else if (e < 53104) {
                    if (53077 <= e && e <= 53103) return u.CLUSTER_BREAK.LVT
                } else if (e === 53104) return u.CLUSTER_BREAK.LV
            } else if (e < 53412) {
                if (e < 53245) {
                    if (e < 53188) {
                        if (e < 53133) {
                            if (e < 53132) {
                                if (53105 <= e && e <= 53131) return u.CLUSTER_BREAK.LVT
                            } else if (e === 53132) return u.CLUSTER_BREAK.LV
                        } else if (e < 53160) {
                            if (53133 <= e && e <= 53159) return u.CLUSTER_BREAK.LVT
                        } else if (e < 53161) {
                            if (e === 53160) return u.CLUSTER_BREAK.LV
                        } else if (53161 <= e && e <= 53187) return u.CLUSTER_BREAK.LVT
                    } else if (e < 53216) {
                        if (e < 53189) {
                            if (e === 53188) return u.CLUSTER_BREAK.LV
                        } else if (53189 <= e && e <= 53215) return u.CLUSTER_BREAK.LVT
                    } else if (e < 53217) {
                        if (e === 53216) return u.CLUSTER_BREAK.LV
                    } else if (e < 53244) {
                        if (53217 <= e && e <= 53243) return u.CLUSTER_BREAK.LVT
                    } else if (e === 53244) return u.CLUSTER_BREAK.LV
                } else if (e < 53328) {
                    if (e < 53273) {
                        if (e < 53272) {
                            if (53245 <= e && e <= 53271) return u.CLUSTER_BREAK.LVT
                        } else if (e === 53272) return u.CLUSTER_BREAK.LV
                    } else if (e < 53300) {
                        if (53273 <= e && e <= 53299) return u.CLUSTER_BREAK.LVT
                    } else if (e < 53301) {
                        if (e === 53300) return u.CLUSTER_BREAK.LV
                    } else if (53301 <= e && e <= 53327) return u.CLUSTER_BREAK.LVT
                } else if (e < 53357) {
                    if (e < 53329) {
                        if (e === 53328) return u.CLUSTER_BREAK.LV
                    } else if (e < 53356) {
                        if (53329 <= e && e <= 53355) return u.CLUSTER_BREAK.LVT
                    } else if (e === 53356) return u.CLUSTER_BREAK.LV
                } else if (e < 53384) {
                    if (53357 <= e && e <= 53383) return u.CLUSTER_BREAK.LVT
                } else if (e < 53385) {
                    if (e === 53384) return u.CLUSTER_BREAK.LV
                } else if (53385 <= e && e <= 53411) return u.CLUSTER_BREAK.LVT
            } else if (e < 53553) {
                if (e < 53469) {
                    if (e < 53440) {
                        if (e < 53413) {
                            if (e === 53412) return u.CLUSTER_BREAK.LV
                        } else if (53413 <= e && e <= 53439) return u.CLUSTER_BREAK.LVT
                    } else if (e < 53441) {
                        if (e === 53440) return u.CLUSTER_BREAK.LV
                    } else if (e < 53468) {
                        if (53441 <= e && e <= 53467) return u.CLUSTER_BREAK.LVT
                    } else if (e === 53468) return u.CLUSTER_BREAK.LV
                } else if (e < 53524) {
                    if (e < 53496) {
                        if (53469 <= e && e <= 53495) return u.CLUSTER_BREAK.LVT
                    } else if (e < 53497) {
                        if (e === 53496) return u.CLUSTER_BREAK.LV
                    } else if (53497 <= e && e <= 53523) return u.CLUSTER_BREAK.LVT
                } else if (e < 53525) {
                    if (e === 53524) return u.CLUSTER_BREAK.LV
                } else if (e < 53552) {
                    if (53525 <= e && e <= 53551) return u.CLUSTER_BREAK.LVT
                } else if (e === 53552) return u.CLUSTER_BREAK.LV
            } else if (e < 53636) {
                if (e < 53581) {
                    if (e < 53580) {
                        if (53553 <= e && e <= 53579) return u.CLUSTER_BREAK.LVT
                    } else if (e === 53580) return u.CLUSTER_BREAK.LV
                } else if (e < 53608) {
                    if (53581 <= e && e <= 53607) return u.CLUSTER_BREAK.LVT
                } else if (e < 53609) {
                    if (e === 53608) return u.CLUSTER_BREAK.LV
                } else if (53609 <= e && e <= 53635) return u.CLUSTER_BREAK.LVT
            } else if (e < 53665) {
                if (e < 53637) {
                    if (e === 53636) return u.CLUSTER_BREAK.LV
                } else if (e < 53664) {
                    if (53637 <= e && e <= 53663) return u.CLUSTER_BREAK.LVT
                } else if (e === 53664) return u.CLUSTER_BREAK.LV
            } else if (e < 53692) {
                if (53665 <= e && e <= 53691) return u.CLUSTER_BREAK.LVT
            } else if (e < 53693) {
                if (e === 53692) return u.CLUSTER_BREAK.LV
            } else if (53693 <= e && e <= 53719) return u.CLUSTER_BREAK.LVT
        } else if (e < 70459) {
            if (e < 54897) {
                if (e < 54308) {
                    if (e < 54001) {
                        if (e < 53860) {
                            if (e < 53777) {
                                if (e < 53748) {
                                    if (e < 53721) {
                                        if (e === 53720) return u.CLUSTER_BREAK.LV
                                    } else if (53721 <= e && e <= 53747) return u.CLUSTER_BREAK.LVT
                                } else if (e < 53749) {
                                    if (e === 53748) return u.CLUSTER_BREAK.LV
                                } else if (e < 53776) {
                                    if (53749 <= e && e <= 53775) return u.CLUSTER_BREAK.LVT
                                } else if (e === 53776) return u.CLUSTER_BREAK.LV
                            } else if (e < 53805) {
                                if (e < 53804) {
                                    if (53777 <= e && e <= 53803) return u.CLUSTER_BREAK.LVT
                                } else if (e === 53804) return u.CLUSTER_BREAK.LV
                            } else if (e < 53832) {
                                if (53805 <= e && e <= 53831) return u.CLUSTER_BREAK.LVT
                            } else if (e < 53833) {
                                if (e === 53832) return u.CLUSTER_BREAK.LV
                            } else if (53833 <= e && e <= 53859) return u.CLUSTER_BREAK.LVT
                        } else if (e < 53917) {
                            if (e < 53888) {
                                if (e < 53861) {
                                    if (e === 53860) return u.CLUSTER_BREAK.LV
                                } else if (53861 <= e && e <= 53887) return u.CLUSTER_BREAK.LVT
                            } else if (e < 53889) {
                                if (e === 53888) return u.CLUSTER_BREAK.LV
                            } else if (e < 53916) {
                                if (53889 <= e && e <= 53915) return u.CLUSTER_BREAK.LVT
                            } else if (e === 53916) return u.CLUSTER_BREAK.LV
                        } else if (e < 53972) {
                            if (e < 53944) {
                                if (53917 <= e && e <= 53943) return u.CLUSTER_BREAK.LVT
                            } else if (e < 53945) {
                                if (e === 53944) return u.CLUSTER_BREAK.LV
                            } else if (53945 <= e && e <= 53971) return u.CLUSTER_BREAK.LVT
                        } else if (e < 53973) {
                            if (e === 53972) return u.CLUSTER_BREAK.LV
                        } else if (e < 54e3) {
                            if (53973 <= e && e <= 53999) return u.CLUSTER_BREAK.LVT
                        } else if (e === 54e3) return u.CLUSTER_BREAK.LV
                    } else if (e < 54141) {
                        if (e < 54084) {
                            if (e < 54029) {
                                if (e < 54028) {
                                    if (54001 <= e && e <= 54027) return u.CLUSTER_BREAK.LVT
                                } else if (e === 54028) return u.CLUSTER_BREAK.LV
                            } else if (e < 54056) {
                                if (54029 <= e && e <= 54055) return u.CLUSTER_BREAK.LVT
                            } else if (e < 54057) {
                                if (e === 54056) return u.CLUSTER_BREAK.LV
                            } else if (54057 <= e && e <= 54083) return u.CLUSTER_BREAK.LVT
                        } else if (e < 54112) {
                            if (e < 54085) {
                                if (e === 54084) return u.CLUSTER_BREAK.LV
                            } else if (54085 <= e && e <= 54111) return u.CLUSTER_BREAK.LVT
                        } else if (e < 54113) {
                            if (e === 54112) return u.CLUSTER_BREAK.LV
                        } else if (e < 54140) {
                            if (54113 <= e && e <= 54139) return u.CLUSTER_BREAK.LVT
                        } else if (e === 54140) return u.CLUSTER_BREAK.LV
                    } else if (e < 54224) {
                        if (e < 54169) {
                            if (e < 54168) {
                                if (54141 <= e && e <= 54167) return u.CLUSTER_BREAK.LVT
                            } else if (e === 54168) return u.CLUSTER_BREAK.LV
                        } else if (e < 54196) {
                            if (54169 <= e && e <= 54195) return u.CLUSTER_BREAK.LVT
                        } else if (e < 54197) {
                            if (e === 54196) return u.CLUSTER_BREAK.LV
                        } else if (54197 <= e && e <= 54223) return u.CLUSTER_BREAK.LVT
                    } else if (e < 54253) {
                        if (e < 54225) {
                            if (e === 54224) return u.CLUSTER_BREAK.LV
                        } else if (e < 54252) {
                            if (54225 <= e && e <= 54251) return u.CLUSTER_BREAK.LVT
                        } else if (e === 54252) return u.CLUSTER_BREAK.LV
                    } else if (e < 54280) {
                        if (54253 <= e && e <= 54279) return u.CLUSTER_BREAK.LVT
                    } else if (e < 54281) {
                        if (e === 54280) return u.CLUSTER_BREAK.LV
                    } else if (54281 <= e && e <= 54307) return u.CLUSTER_BREAK.LVT
                } else if (e < 54589) {
                    if (e < 54448) {
                        if (e < 54365) {
                            if (e < 54336) {
                                if (e < 54309) {
                                    if (e === 54308) return u.CLUSTER_BREAK.LV
                                } else if (54309 <= e && e <= 54335) return u.CLUSTER_BREAK.LVT
                            } else if (e < 54337) {
                                if (e === 54336) return u.CLUSTER_BREAK.LV
                            } else if (e < 54364) {
                                if (54337 <= e && e <= 54363) return u.CLUSTER_BREAK.LVT
                            } else if (e === 54364) return u.CLUSTER_BREAK.LV
                        } else if (e < 54393) {
                            if (e < 54392) {
                                if (54365 <= e && e <= 54391) return u.CLUSTER_BREAK.LVT
                            } else if (e === 54392) return u.CLUSTER_BREAK.LV
                        } else if (e < 54420) {
                            if (54393 <= e && e <= 54419) return u.CLUSTER_BREAK.LVT
                        } else if (e < 54421) {
                            if (e === 54420) return u.CLUSTER_BREAK.LV
                        } else if (54421 <= e && e <= 54447) return u.CLUSTER_BREAK.LVT
                    } else if (e < 54505) {
                        if (e < 54476) {
                            if (e < 54449) {
                                if (e === 54448) return u.CLUSTER_BREAK.LV
                            } else if (54449 <= e && e <= 54475) return u.CLUSTER_BREAK.LVT
                        } else if (e < 54477) {
                            if (e === 54476) return u.CLUSTER_BREAK.LV
                        } else if (e < 54504) {
                            if (54477 <= e && e <= 54503) return u.CLUSTER_BREAK.LVT
                        } else if (e === 54504) return u.CLUSTER_BREAK.LV
                    } else if (e < 54560) {
                        if (e < 54532) {
                            if (54505 <= e && e <= 54531) return u.CLUSTER_BREAK.LVT
                        } else if (e < 54533) {
                            if (e === 54532) return u.CLUSTER_BREAK.LV
                        } else if (54533 <= e && e <= 54559) return u.CLUSTER_BREAK.LVT
                    } else if (e < 54561) {
                        if (e === 54560) return u.CLUSTER_BREAK.LV
                    } else if (e < 54588) {
                        if (54561 <= e && e <= 54587) return u.CLUSTER_BREAK.LVT
                    } else if (e === 54588) return u.CLUSTER_BREAK.LV
                } else if (e < 54756) {
                    if (e < 54672) {
                        if (e < 54617) {
                            if (e < 54616) {
                                if (54589 <= e && e <= 54615) return u.CLUSTER_BREAK.LVT
                            } else if (e === 54616) return u.CLUSTER_BREAK.LV
                        } else if (e < 54644) {
                            if (54617 <= e && e <= 54643) return u.CLUSTER_BREAK.LVT
                        } else if (e < 54645) {
                            if (e === 54644) return u.CLUSTER_BREAK.LV
                        } else if (54645 <= e && e <= 54671) return u.CLUSTER_BREAK.LVT
                    } else if (e < 54701) {
                        if (e < 54673) {
                            if (e === 54672) return u.CLUSTER_BREAK.LV
                        } else if (e < 54700) {
                            if (54673 <= e && e <= 54699) return u.CLUSTER_BREAK.LVT
                        } else if (e === 54700) return u.CLUSTER_BREAK.LV
                    } else if (e < 54728) {
                        if (54701 <= e && e <= 54727) return u.CLUSTER_BREAK.LVT
                    } else if (e < 54729) {
                        if (e === 54728) return u.CLUSTER_BREAK.LV
                    } else if (54729 <= e && e <= 54755) return u.CLUSTER_BREAK.LVT
                } else if (e < 54813) {
                    if (e < 54784) {
                        if (e < 54757) {
                            if (e === 54756) return u.CLUSTER_BREAK.LV
                        } else if (54757 <= e && e <= 54783) return u.CLUSTER_BREAK.LVT
                    } else if (e < 54785) {
                        if (e === 54784) return u.CLUSTER_BREAK.LV
                    } else if (e < 54812) {
                        if (54785 <= e && e <= 54811) return u.CLUSTER_BREAK.LVT
                    } else if (e === 54812) return u.CLUSTER_BREAK.LV
                } else if (e < 54868) {
                    if (e < 54840) {
                        if (54813 <= e && e <= 54839) return u.CLUSTER_BREAK.LVT
                    } else if (e < 54841) {
                        if (e === 54840) return u.CLUSTER_BREAK.LV
                    } else if (54841 <= e && e <= 54867) return u.CLUSTER_BREAK.LVT
                } else if (e < 54869) {
                    if (e === 54868) return u.CLUSTER_BREAK.LV
                } else if (e < 54896) {
                    if (54869 <= e && e <= 54895) return u.CLUSTER_BREAK.LVT
                } else if (e === 54896) return u.CLUSTER_BREAK.LV
            } else if (e < 69632) {
                if (e < 55216) {
                    if (e < 55037) {
                        if (e < 54980) {
                            if (e < 54925) {
                                if (e < 54924) {
                                    if (54897 <= e && e <= 54923) return u.CLUSTER_BREAK.LVT
                                } else if (e === 54924) return u.CLUSTER_BREAK.LV
                            } else if (e < 54952) {
                                if (54925 <= e && e <= 54951) return u.CLUSTER_BREAK.LVT
                            } else if (e < 54953) {
                                if (e === 54952) return u.CLUSTER_BREAK.LV
                            } else if (54953 <= e && e <= 54979) return u.CLUSTER_BREAK.LVT
                        } else if (e < 55008) {
                            if (e < 54981) {
                                if (e === 54980) return u.CLUSTER_BREAK.LV
                            } else if (54981 <= e && e <= 55007) return u.CLUSTER_BREAK.LVT
                        } else if (e < 55009) {
                            if (e === 55008) return u.CLUSTER_BREAK.LV
                        } else if (e < 55036) {
                            if (55009 <= e && e <= 55035) return u.CLUSTER_BREAK.LVT
                        } else if (e === 55036) return u.CLUSTER_BREAK.LV
                    } else if (e < 55120) {
                        if (e < 55065) {
                            if (e < 55064) {
                                if (55037 <= e && e <= 55063) return u.CLUSTER_BREAK.LVT
                            } else if (e === 55064) return u.CLUSTER_BREAK.LV
                        } else if (e < 55092) {
                            if (55065 <= e && e <= 55091) return u.CLUSTER_BREAK.LVT
                        } else if (e < 55093) {
                            if (e === 55092) return u.CLUSTER_BREAK.LV
                        } else if (55093 <= e && e <= 55119) return u.CLUSTER_BREAK.LVT
                    } else if (e < 55149) {
                        if (e < 55121) {
                            if (e === 55120) return u.CLUSTER_BREAK.LV
                        } else if (e < 55148) {
                            if (55121 <= e && e <= 55147) return u.CLUSTER_BREAK.LVT
                        } else if (e === 55148) return u.CLUSTER_BREAK.LV
                    } else if (e < 55176) {
                        if (55149 <= e && e <= 55175) return u.CLUSTER_BREAK.LVT
                    } else if (e < 55177) {
                        if (e === 55176) return u.CLUSTER_BREAK.LV
                    } else if (55177 <= e && e <= 55203) return u.CLUSTER_BREAK.LVT
                } else if (e < 68097) {
                    if (e < 65279) {
                        if (e < 64286) {
                            if (e < 55243) {
                                if (55216 <= e && e <= 55238) return u.CLUSTER_BREAK.V
                            } else if (55243 <= e && e <= 55291) return u.CLUSTER_BREAK.T
                        } else if (e < 65024) {
                            if (e === 64286) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 65056) {
                            if (65024 <= e && e <= 65039) return u.CLUSTER_BREAK.EXTEND
                        } else if (65056 <= e && e <= 65071) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 66045) {
                        if (e < 65438) {
                            if (e === 65279) return u.CLUSTER_BREAK.CONTROL
                        } else if (e < 65520) {
                            if (65438 <= e && e <= 65439) return u.CLUSTER_BREAK.EXTEND
                        } else if (65520 <= e && e <= 65531) return u.CLUSTER_BREAK.CONTROL
                    } else if (e < 66272) {
                        if (e === 66045) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 66422) {
                        if (e === 66272) return u.CLUSTER_BREAK.EXTEND
                    } else if (66422 <= e && e <= 66426) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 68325) {
                    if (e < 68108) {
                        if (e < 68101) {
                            if (68097 <= e && e <= 68099) return u.CLUSTER_BREAK.EXTEND
                        } else if (68101 <= e && e <= 68102) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 68152) {
                        if (68108 <= e && e <= 68111) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 68159) {
                        if (68152 <= e && e <= 68154) return u.CLUSTER_BREAK.EXTEND
                    } else if (e === 68159) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 69373) {
                    if (e < 68900) {
                        if (68325 <= e && e <= 68326) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 69291) {
                        if (68900 <= e && e <= 68903) return u.CLUSTER_BREAK.EXTEND
                    } else if (69291 <= e && e <= 69292) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 69446) {
                    if (69373 <= e && e <= 69375) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 69506) {
                    if (69446 <= e && e <= 69456) return u.CLUSTER_BREAK.EXTEND
                } else if (69506 <= e && e <= 69509) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 70016) {
                if (e < 69815) {
                    if (e < 69747) {
                        if (e < 69634) {
                            if (e === 69632) return u.CLUSTER_BREAK.SPACINGMARK;
                            if (e === 69633) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 69688) {
                            if (e === 69634) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 69744) {
                            if (69688 <= e && e <= 69702) return u.CLUSTER_BREAK.EXTEND
                        } else if (e === 69744) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 69762) {
                        if (e < 69759) {
                            if (69747 <= e && e <= 69748) return u.CLUSTER_BREAK.EXTEND
                        } else if (69759 <= e && e <= 69761) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 69808) {
                        if (e === 69762) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 69811) {
                        if (69808 <= e && e <= 69810) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (69811 <= e && e <= 69814) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 69888)
                    if (e < 69821) {
                        if (e < 69817) {
                            if (69815 <= e && e <= 69816) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (69817 <= e && e <= 69818) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 69826) {
                    if (e === 69821) return u.CLUSTER_BREAK.PREPEND
                } else {
                    if (e === 69826) return u.CLUSTER_BREAK.EXTEND;
                    if (e === 69837) return u.CLUSTER_BREAK.PREPEND
                } else if (e < 69933) {
                    if (e < 69927) {
                        if (69888 <= e && e <= 69890) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 69932) {
                        if (69927 <= e && e <= 69931) return u.CLUSTER_BREAK.EXTEND
                    } else if (e === 69932) return u.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 69957) {
                    if (69933 <= e && e <= 69940) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 70003) {
                    if (69957 <= e && e <= 69958) return u.CLUSTER_BREAK.SPACINGMARK
                } else if (e === 70003) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 70194) {
                if (e < 70082) {
                    if (e < 70067) {
                        if (e < 70018) {
                            if (70016 <= e && e <= 70017) return u.CLUSTER_BREAK.EXTEND
                        } else if (e === 70018) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 70070) {
                        if (70067 <= e && e <= 70069) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 70079) {
                        if (70070 <= e && e <= 70078) return u.CLUSTER_BREAK.EXTEND
                    } else if (70079 <= e && e <= 70080) return u.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 70095) {
                    if (e < 70089) {
                        if (70082 <= e && e <= 70083) return u.CLUSTER_BREAK.PREPEND
                    } else if (e < 70094) {
                        if (70089 <= e && e <= 70092) return u.CLUSTER_BREAK.EXTEND
                    } else if (e === 70094) return u.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 70188) {
                    if (e === 70095) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 70191) {
                    if (70188 <= e && e <= 70190) return u.CLUSTER_BREAK.SPACINGMARK
                } else if (70191 <= e && e <= 70193) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 70209) {
                if (e < 70197) {
                    if (e < 70196) {
                        if (70194 <= e && e <= 70195) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e === 70196) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 70198) {
                    if (e === 70197) return u.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 70206) {
                    if (70198 <= e && e <= 70199) return u.CLUSTER_BREAK.EXTEND
                } else if (e === 70206) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 70371) {
                if (e < 70367) {
                    if (e === 70209) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 70368) {
                    if (e === 70367) return u.CLUSTER_BREAK.EXTEND
                } else if (70368 <= e && e <= 70370) return u.CLUSTER_BREAK.SPACINGMARK
            } else if (e < 70400) {
                if (70371 <= e && e <= 70378) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 70402) {
                if (70400 <= e && e <= 70401) return u.CLUSTER_BREAK.EXTEND
            } else if (70402 <= e && e <= 70403) return u.CLUSTER_BREAK.SPACINGMARK
        } else if (e < 72343) {
            if (e < 71339) {
                if (e < 70841) {
                    if (e < 70512) {
                        if (e < 70471) {
                            if (e < 70463) {
                                if (e < 70462) {
                                    if (70459 <= e && e <= 70460) return u.CLUSTER_BREAK.EXTEND
                                } else if (e === 70462) return u.CLUSTER_BREAK.EXTEND
                            } else if (e < 70464) {
                                if (e === 70463) return u.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 70465) {
                                if (e === 70464) return u.CLUSTER_BREAK.EXTEND
                            } else if (70465 <= e && e <= 70468) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 70487) {
                            if (e < 70475) {
                                if (70471 <= e && e <= 70472) return u.CLUSTER_BREAK.SPACINGMARK
                            } else if (70475 <= e && e <= 70477) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 70498) {
                            if (e === 70487) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 70502) {
                            if (70498 <= e && e <= 70499) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (70502 <= e && e <= 70508) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 70725) {
                        if (e < 70712) {
                            if (e < 70709) {
                                if (70512 <= e && e <= 70516) return u.CLUSTER_BREAK.EXTEND
                            } else if (70709 <= e && e <= 70711) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 70720) {
                            if (70712 <= e && e <= 70719) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 70722) {
                            if (70720 <= e && e <= 70721) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (70722 <= e && e <= 70724) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 70832) {
                        if (e < 70726) {
                            if (e === 70725) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e === 70726 || e === 70750) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 70833) {
                        if (e === 70832) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 70835) {
                        if (70833 <= e && e <= 70834) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (70835 <= e && e <= 70840) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 71096) {
                    if (e < 70847)
                        if (e < 70843) {
                            if (e === 70841) return u.CLUSTER_BREAK.SPACINGMARK;
                            if (e === 70842) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 70845) {
                        if (70843 <= e && e <= 70844) return u.CLUSTER_BREAK.SPACINGMARK
                    } else {
                        if (e === 70845) return u.CLUSTER_BREAK.EXTEND;
                        if (e === 70846) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 71087) {
                        if (e < 70849) {
                            if (70847 <= e && e <= 70848) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 70850) {
                            if (e === 70849) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (70850 <= e && e <= 70851) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 71088) {
                        if (e === 71087) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 71090) {
                        if (71088 <= e && e <= 71089) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (71090 <= e && e <= 71093) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 71216) {
                    if (e < 71102) {
                        if (e < 71100) {
                            if (71096 <= e && e <= 71099) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (71100 <= e && e <= 71101) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 71103) {
                        if (e === 71102) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 71132) {
                        if (71103 <= e && e <= 71104) return u.CLUSTER_BREAK.EXTEND
                    } else if (71132 <= e && e <= 71133) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 71229) {
                    if (e < 71219) {
                        if (71216 <= e && e <= 71218) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 71227) {
                        if (71219 <= e && e <= 71226) return u.CLUSTER_BREAK.EXTEND
                    } else if (71227 <= e && e <= 71228) return u.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 71230) {
                    if (e === 71229) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 71231) {
                    if (e === 71230) return u.CLUSTER_BREAK.SPACINGMARK
                } else if (71231 <= e && e <= 71232) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 71999)
                if (e < 71463) {
                    if (e < 71350) {
                        if (e < 71341) {
                            if (e === 71339) return u.CLUSTER_BREAK.EXTEND;
                            if (e === 71340) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 71342) {
                            if (e === 71341) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 71344) {
                            if (71342 <= e && e <= 71343) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (71344 <= e && e <= 71349) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 71453) {
                        if (e === 71350) return u.CLUSTER_BREAK.SPACINGMARK;
                        if (e === 71351) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 71458) {
                        if (71453 <= e && e <= 71455) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 71462) {
                        if (71458 <= e && e <= 71461) return u.CLUSTER_BREAK.EXTEND
                    } else if (e === 71462) return u.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 71984) {
                if (e < 71727) {
                    if (e < 71724) {
                        if (71463 <= e && e <= 71467) return u.CLUSTER_BREAK.EXTEND
                    } else if (71724 <= e && e <= 71726) return u.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 71736) {
                    if (71727 <= e && e <= 71735) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 71737) {
                    if (e === 71736) return u.CLUSTER_BREAK.SPACINGMARK
                } else if (71737 <= e && e <= 71738) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 71995) {
                if (e < 71985) {
                    if (e === 71984) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 71991) {
                    if (71985 <= e && e <= 71989) return u.CLUSTER_BREAK.SPACINGMARK
                } else if (71991 <= e && e <= 71992) return u.CLUSTER_BREAK.SPACINGMARK
            } else if (e < 71997) {
                if (71995 <= e && e <= 71996) return u.CLUSTER_BREAK.EXTEND
            } else {
                if (e === 71997) return u.CLUSTER_BREAK.SPACINGMARK;
                if (e === 71998) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 72193)
                if (e < 72145)
                    if (e < 72001) {
                        if (e === 71999) return u.CLUSTER_BREAK.PREPEND;
                        if (e === 72e3) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 72002) {
                if (e === 72001) return u.CLUSTER_BREAK.PREPEND
            } else {
                if (e === 72002) return u.CLUSTER_BREAK.SPACINGMARK;
                if (e === 72003) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 72156) {
                if (e < 72148) {
                    if (72145 <= e && e <= 72147) return u.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 72154) {
                    if (72148 <= e && e <= 72151) return u.CLUSTER_BREAK.EXTEND
                } else if (72154 <= e && e <= 72155) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 72160) {
                if (72156 <= e && e <= 72159) return u.CLUSTER_BREAK.SPACINGMARK
            } else {
                if (e === 72160) return u.CLUSTER_BREAK.EXTEND;
                if (e === 72164) return u.CLUSTER_BREAK.SPACINGMARK
            } else if (e < 72263) {
                if (e < 72249) {
                    if (e < 72243) {
                        if (72193 <= e && e <= 72202) return u.CLUSTER_BREAK.EXTEND
                    } else if (72243 <= e && e <= 72248) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 72250) {
                    if (e === 72249) return u.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 72251) {
                    if (e === 72250) return u.CLUSTER_BREAK.PREPEND
                } else if (72251 <= e && e <= 72254) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 72281) {
                if (e < 72273) {
                    if (e === 72263) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 72279) {
                    if (72273 <= e && e <= 72278) return u.CLUSTER_BREAK.EXTEND
                } else if (72279 <= e && e <= 72280) return u.CLUSTER_BREAK.SPACINGMARK
            } else if (e < 72324) {
                if (72281 <= e && e <= 72283) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 72330) {
                if (72324 <= e && e <= 72329) return u.CLUSTER_BREAK.PREPEND
            } else if (72330 <= e && e <= 72342) return u.CLUSTER_BREAK.EXTEND
        } else if (e < 94033) {
            if (e < 73104) {
                if (e < 72881) {
                    if (e < 72766) {
                        if (e < 72751) {
                            if (e < 72344) {
                                if (e === 72343) return u.CLUSTER_BREAK.SPACINGMARK
                            } else if (72344 <= e && e <= 72345) return u.CLUSTER_BREAK.EXTEND
                        } else if (e < 72752) {
                            if (e === 72751) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 72760) {
                            if (72752 <= e && e <= 72758) return u.CLUSTER_BREAK.EXTEND
                        } else if (72760 <= e && e <= 72765) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 72850) {
                        if (e === 72766) return u.CLUSTER_BREAK.SPACINGMARK;
                        if (e === 72767) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 72873) {
                        if (72850 <= e && e <= 72871) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 72874) {
                        if (e === 72873) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (72874 <= e && e <= 72880) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 73018) {
                    if (e < 72884) {
                        if (e < 72882) {
                            if (e === 72881) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (72882 <= e && e <= 72883) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 72885) {
                        if (e === 72884) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 73009) {
                        if (72885 <= e && e <= 72886) return u.CLUSTER_BREAK.EXTEND
                    } else if (73009 <= e && e <= 73014) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 73030) {
                    if (e < 73020) {
                        if (e === 73018) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 73023) {
                        if (73020 <= e && e <= 73021) return u.CLUSTER_BREAK.EXTEND
                    } else if (73023 <= e && e <= 73029) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 73031) {
                    if (e === 73030) return u.CLUSTER_BREAK.PREPEND
                } else if (e < 73098) {
                    if (e === 73031) return u.CLUSTER_BREAK.EXTEND
                } else if (73098 <= e && e <= 73102) return u.CLUSTER_BREAK.SPACINGMARK
            } else if (e < 73526) {
                if (e < 73459)
                    if (e < 73109) {
                        if (e < 73107) {
                            if (73104 <= e && e <= 73105) return u.CLUSTER_BREAK.EXTEND
                        } else if (73107 <= e && e <= 73108) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 73110) {
                    if (e === 73109) return u.CLUSTER_BREAK.EXTEND
                } else {
                    if (e === 73110) return u.CLUSTER_BREAK.SPACINGMARK;
                    if (e === 73111) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 73474) {
                    if (e < 73461) {
                        if (73459 <= e && e <= 73460) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 73472) {
                        if (73461 <= e && e <= 73462) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (73472 <= e && e <= 73473) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 73475) {
                    if (e === 73474) return u.CLUSTER_BREAK.PREPEND
                } else if (e < 73524) {
                    if (e === 73475) return u.CLUSTER_BREAK.SPACINGMARK
                } else if (73524 <= e && e <= 73525) return u.CLUSTER_BREAK.SPACINGMARK
            } else if (e < 78896)
                if (e < 73536) {
                    if (e < 73534) {
                        if (73526 <= e && e <= 73530) return u.CLUSTER_BREAK.EXTEND
                    } else if (73534 <= e && e <= 73535) return u.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 73537) {
                if (e === 73536) return u.CLUSTER_BREAK.EXTEND
            } else {
                if (e === 73537) return u.CLUSTER_BREAK.SPACINGMARK;
                if (e === 73538) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 92912) {
                if (e < 78912) {
                    if (78896 <= e && e <= 78911) return u.CLUSTER_BREAK.CONTROL
                } else if (e < 78919) {
                    if (e === 78912) return u.CLUSTER_BREAK.EXTEND
                } else if (78919 <= e && e <= 78933) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 92976) {
                if (92912 <= e && e <= 92916) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 94031) {
                if (92976 <= e && e <= 92982) return u.CLUSTER_BREAK.EXTEND
            } else if (e === 94031) return u.CLUSTER_BREAK.EXTEND
        } else if (e < 121476) {
            if (e < 119143)
                if (e < 113824) {
                    if (e < 94180) {
                        if (e < 94095) {
                            if (94033 <= e && e <= 94087) return u.CLUSTER_BREAK.SPACINGMARK
                        } else if (94095 <= e && e <= 94098) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 94192) {
                        if (e === 94180) return u.CLUSTER_BREAK.EXTEND
                    } else if (e < 113821) {
                        if (94192 <= e && e <= 94193) return u.CLUSTER_BREAK.SPACINGMARK
                    } else if (113821 <= e && e <= 113822) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 118576) {
                if (e < 118528) {
                    if (113824 <= e && e <= 113827) return u.CLUSTER_BREAK.CONTROL
                } else if (118528 <= e && e <= 118573) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 119141) {
                if (118576 <= e && e <= 118598) return u.CLUSTER_BREAK.EXTEND
            } else {
                if (e === 119141) return u.CLUSTER_BREAK.EXTEND;
                if (e === 119142) return u.CLUSTER_BREAK.SPACINGMARK
            } else if (e < 119173) {
                if (e < 119150) {
                    if (e < 119149) {
                        if (119143 <= e && e <= 119145) return u.CLUSTER_BREAK.EXTEND
                    } else if (e === 119149) return u.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 119155) {
                    if (119150 <= e && e <= 119154) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 119163) {
                    if (119155 <= e && e <= 119162) return u.CLUSTER_BREAK.CONTROL
                } else if (119163 <= e && e <= 119170) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 121344) {
                if (e < 119210) {
                    if (119173 <= e && e <= 119179) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 119362) {
                    if (119210 <= e && e <= 119213) return u.CLUSTER_BREAK.EXTEND
                } else if (119362 <= e && e <= 119364) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 121403) {
                if (121344 <= e && e <= 121398) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 121461) {
                if (121403 <= e && e <= 121452) return u.CLUSTER_BREAK.EXTEND
            } else if (e === 121461) return u.CLUSTER_BREAK.EXTEND
        } else if (e < 123628) {
            if (e < 122907) {
                if (e < 121505) {
                    if (e < 121499) {
                        if (e === 121476) return u.CLUSTER_BREAK.EXTEND
                    } else if (121499 <= e && e <= 121503) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 122880) {
                    if (121505 <= e && e <= 121519) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 122888) {
                    if (122880 <= e && e <= 122886) return u.CLUSTER_BREAK.EXTEND
                } else if (122888 <= e && e <= 122904) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 123023) {
                if (e < 122915) {
                    if (122907 <= e && e <= 122913) return u.CLUSTER_BREAK.EXTEND
                } else if (e < 122918) {
                    if (122915 <= e && e <= 122916) return u.CLUSTER_BREAK.EXTEND
                } else if (122918 <= e && e <= 122922) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 123184) {
                if (e === 123023) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 123566) {
                if (123184 <= e && e <= 123190) return u.CLUSTER_BREAK.EXTEND
            } else if (e === 123566) return u.CLUSTER_BREAK.EXTEND
        } else if (e < 127995) {
            if (e < 125136) {
                if (e < 124140) {
                    if (123628 <= e && e <= 123631) return u.CLUSTER_BREAK.EXTEND
                } else if (124140 <= e && e <= 124143) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 125252) {
                if (125136 <= e && e <= 125142) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 127462) {
                if (125252 <= e && e <= 125258) return u.CLUSTER_BREAK.EXTEND
            } else if (127462 <= e && e <= 127487) return u.CLUSTER_BREAK.REGIONAL_INDICATOR
        } else if (e < 917632) {
            if (e < 917504) {
                if (127995 <= e && e <= 127999) return u.CLUSTER_BREAK.EXTEND
            } else if (e < 917536) {
                if (917504 <= e && e <= 917535) return u.CLUSTER_BREAK.CONTROL
            } else if (917536 <= e && e <= 917631) return u.CLUSTER_BREAK.EXTEND
        } else if (e < 917760) {
            if (917632 <= e && e <= 917759) return u.CLUSTER_BREAK.CONTROL
        } else if (e < 918e3) {
            if (917760 <= e && e <= 917999) return u.CLUSTER_BREAK.EXTEND
        } else if (918e3 <= e && e <= 921599) return u.CLUSTER_BREAK.CONTROL;
        return u.CLUSTER_BREAK.OTHER
    }
    static getEmojiProperty(e) {
        if (e < 10160) {
            if (e < 9728) {
                if (e < 9e3) {
                    if (e < 8482) {
                        if (e < 8252) {
                            if (e === 169 || e === 174) return u.EXTENDED_PICTOGRAPHIC
                        } else if (e === 8252 || e === 8265) return u.EXTENDED_PICTOGRAPHIC
                    } else if (e < 8596) {
                        if (e === 8482 || e === 8505) return u.EXTENDED_PICTOGRAPHIC
                    } else if (e < 8617) {
                        if (8596 <= e && e <= 8601) return u.EXTENDED_PICTOGRAPHIC
                    } else if (e < 8986) {
                        if (8617 <= e && e <= 8618) return u.EXTENDED_PICTOGRAPHIC
                    } else if (8986 <= e && e <= 8987) return u.EXTENDED_PICTOGRAPHIC
                } else if (e < 9410) {
                    if (e < 9167) {
                        if (e === 9e3 || e === 9096) return u.EXTENDED_PICTOGRAPHIC
                    } else if (e < 9193) {
                        if (e === 9167) return u.EXTENDED_PICTOGRAPHIC
                    } else if (e < 9208) {
                        if (9193 <= e && e <= 9203) return u.EXTENDED_PICTOGRAPHIC
                    } else if (9208 <= e && e <= 9210) return u.EXTENDED_PICTOGRAPHIC
                } else if (e < 9654) {
                    if (e < 9642) {
                        if (e === 9410) return u.EXTENDED_PICTOGRAPHIC
                    } else if (9642 <= e && e <= 9643) return u.EXTENDED_PICTOGRAPHIC
                } else if (e < 9664) {
                    if (e === 9654) return u.EXTENDED_PICTOGRAPHIC
                } else if (e < 9723) {
                    if (e === 9664) return u.EXTENDED_PICTOGRAPHIC
                } else if (9723 <= e && e <= 9726) return u.EXTENDED_PICTOGRAPHIC
            } else if (e < 10035) {
                if (e < 10004) {
                    if (e < 9748) {
                        if (e < 9735) {
                            if (9728 <= e && e <= 9733) return u.EXTENDED_PICTOGRAPHIC
                        } else if (9735 <= e && e <= 9746) return u.EXTENDED_PICTOGRAPHIC
                    } else if (e < 9872) {
                        if (9748 <= e && e <= 9861) return u.EXTENDED_PICTOGRAPHIC
                    } else if (e < 9992) {
                        if (9872 <= e && e <= 9989) return u.EXTENDED_PICTOGRAPHIC
                    } else if (9992 <= e && e <= 10002) return u.EXTENDED_PICTOGRAPHIC
                } else if (e < 10013) {
                    if (e === 10004 || e === 10006) return u.EXTENDED_PICTOGRAPHIC
                } else if (e < 10017) {
                    if (e === 10013) return u.EXTENDED_PICTOGRAPHIC
                } else if (e === 10017 || e === 10024) return u.EXTENDED_PICTOGRAPHIC
            } else if (e < 10067) {
                if (e < 10055) {
                    if (e < 10052) {
                        if (10035 <= e && e <= 10036) return u.EXTENDED_PICTOGRAPHIC
                    } else if (e === 10052) return u.EXTENDED_PICTOGRAPHIC
                } else if (e < 10060) {
                    if (e === 10055) return u.EXTENDED_PICTOGRAPHIC
                } else if (e === 10060 || e === 10062) return u.EXTENDED_PICTOGRAPHIC
            } else if (e < 10083) {
                if (e < 10071) {
                    if (10067 <= e && e <= 10069) return u.EXTENDED_PICTOGRAPHIC
                } else if (e === 10071) return u.EXTENDED_PICTOGRAPHIC
            } else if (e < 10133) {
                if (10083 <= e && e <= 10087) return u.EXTENDED_PICTOGRAPHIC
            } else if (e < 10145) {
                if (10133 <= e && e <= 10135) return u.EXTENDED_PICTOGRAPHIC
            } else if (e === 10145) return u.EXTENDED_PICTOGRAPHIC
        } else if (e < 127489) {
            if (e < 12951) {
                if (e < 11035) {
                    if (e < 10548) {
                        if (e === 10160 || e === 10175) return u.EXTENDED_PICTOGRAPHIC
                    } else if (e < 11013) {
                        if (10548 <= e && e <= 10549) return u.EXTENDED_PICTOGRAPHIC
                    } else if (11013 <= e && e <= 11015) return u.EXTENDED_PICTOGRAPHIC
                } else if (e < 11093) {
                    if (e < 11088) {
                        if (11035 <= e && e <= 11036) return u.EXTENDED_PICTOGRAPHIC
                    } else if (e === 11088) return u.EXTENDED_PICTOGRAPHIC
                } else if (e < 12336) {
                    if (e === 11093) return u.EXTENDED_PICTOGRAPHIC
                } else if (e === 12336 || e === 12349) return u.EXTENDED_PICTOGRAPHIC
            } else if (e < 127340) {
                if (e < 126976) {
                    if (e === 12951 || e === 12953) return u.EXTENDED_PICTOGRAPHIC
                } else if (e < 127245) {
                    if (126976 <= e && e <= 127231) return u.EXTENDED_PICTOGRAPHIC
                } else if (e < 127279) {
                    if (127245 <= e && e <= 127247) return u.EXTENDED_PICTOGRAPHIC
                } else if (e === 127279) return u.EXTENDED_PICTOGRAPHIC
            } else if (e < 127374) {
                if (e < 127358) {
                    if (127340 <= e && e <= 127345) return u.EXTENDED_PICTOGRAPHIC
                } else if (127358 <= e && e <= 127359) return u.EXTENDED_PICTOGRAPHIC
            } else if (e < 127377) {
                if (e === 127374) return u.EXTENDED_PICTOGRAPHIC
            } else if (e < 127405) {
                if (127377 <= e && e <= 127386) return u.EXTENDED_PICTOGRAPHIC
            } else if (127405 <= e && e <= 127461) return u.EXTENDED_PICTOGRAPHIC
        } else if (e < 128981) {
            if (e < 127561) {
                if (e < 127535) {
                    if (e < 127514) {
                        if (127489 <= e && e <= 127503) return u.EXTENDED_PICTOGRAPHIC
                    } else if (e === 127514) return u.EXTENDED_PICTOGRAPHIC
                } else if (e < 127538) {
                    if (e === 127535) return u.EXTENDED_PICTOGRAPHIC
                } else if (e < 127548) {
                    if (127538 <= e && e <= 127546) return u.EXTENDED_PICTOGRAPHIC
                } else if (127548 <= e && e <= 127551) return u.EXTENDED_PICTOGRAPHIC
            } else if (e < 128326) {
                if (e < 128e3) {
                    if (127561 <= e && e <= 127994) return u.EXTENDED_PICTOGRAPHIC
                } else if (128e3 <= e && e <= 128317) return u.EXTENDED_PICTOGRAPHIC
            } else if (e < 128640) {
                if (128326 <= e && e <= 128591) return u.EXTENDED_PICTOGRAPHIC
            } else if (e < 128884) {
                if (128640 <= e && e <= 128767) return u.EXTENDED_PICTOGRAPHIC
            } else if (128884 <= e && e <= 128895) return u.EXTENDED_PICTOGRAPHIC
        } else if (e < 129198) {
            if (e < 129096) {
                if (e < 129036) {
                    if (128981 <= e && e <= 129023) return u.EXTENDED_PICTOGRAPHIC
                } else if (129036 <= e && e <= 129039) return u.EXTENDED_PICTOGRAPHIC
            } else if (e < 129114) {
                if (129096 <= e && e <= 129103) return u.EXTENDED_PICTOGRAPHIC
            } else if (e < 129160) {
                if (129114 <= e && e <= 129119) return u.EXTENDED_PICTOGRAPHIC
            } else if (129160 <= e && e <= 129167) return u.EXTENDED_PICTOGRAPHIC
        } else if (e < 129340) {
            if (e < 129292) {
                if (129198 <= e && e <= 129279) return u.EXTENDED_PICTOGRAPHIC
            } else if (129292 <= e && e <= 129338) return u.EXTENDED_PICTOGRAPHIC
        } else if (e < 129351) {
            if (129340 <= e && e <= 129349) return u.EXTENDED_PICTOGRAPHIC
        } else if (e < 130048) {
            if (129351 <= e && e <= 129791) return u.EXTENDED_PICTOGRAPHIC
        } else if (130048 <= e && e <= 131069) return u.EXTENDED_PICTOGRAPHIC;
        return u.CLUSTER_BREAK.OTHER
    }
}
V0.default = ei;
var wF = dt && dt.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
};
Object.defineProperty(Fv, "__esModule", {
    value: !0
});
const KF = wF(V0);
var $F = Fv.default = KF.default;
new $F;
class MF {
    static withTypes(e, r) {
        let n = e;
        return r.forEach(s => {
            s === "html" && (n = this.html(n)), s === "username" && (n = this.username(n)), s === "emoji" && (n = this.emoji(n)), s === "input" && (n = this.input(n))
        }), n
    }
    static html(e) {
        if (String(e).match(/<fart>/g)) {
            const n = new Audio(new URL("main/@moderator/assets/YVsrF-nO.wav", import.meta.url).href);
            n.volume = .1, n.play()
        }
        const r = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
        return String(e).replace(r, "")
    }
    static input(e) {
        return e.replace("…", "...").replace(/[^\u00A1\u0020-\u007E\u00BF-\u017F\u2019]/gi, "")
    }
    static username(e) {
        return e.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u017F\u2026!?*$+\-'_ .,]/gi, "").replace(/'/g, "’")
    }
    static emoji(e) {
        return e.replace(/(\u00A9|\u00AE|[\u2000-\u2017]|[\u2020-\u3300]|\uD83C[\uD000-\uDFFF]|\uD83D[\uD000-\uDFFF]|\uD83E[\uD000-\uDFFF])/, "")
    }
}
const kF = {
        BACK: "Back",
        CANCEL: "Cancel",
        CLOSE: "Close",
        CONFIRM: "Confirm",
        CREATE: "Create",
        DELETE: "Delete",
        DONE: "Done",
        EDIT: "Edit",
        OK: "OK",
        NEXT: "Next",
        NO: "No",
        PLAY: "Play",
        PUBLISH: "Publish",
        REMOVE: "Remove",
        RESET: "Reset",
        SUBMIT: "Submit",
        TRY_AGAIN: "Try Again",
        UNDO: "Undo",
        YES: "Yes"
    },
    GF = {
        UGC: {
            VISIBILITY_CONTROLLER_OFF: "prompts hidden on players’ devices",
            VISIBILITY_CONTROLLER_ON: "prompts shown on players’ devices",
            VISIBILITY_SCREEN_OFF: "prompts hidden on game screen",
            VISIBILITY_SCREEN_ON: "prompts shown on game screen"
        }
    },
    VF = {
        DISCONNECTED: "You have been disconnected.",
        DRAWING_NOTHING: "You have to draw something!",
        PLAYER_KICKED: "You have been kicked from the game by a moderator.",
        ROOM_DESTROYED: "Thanks for playing!",
        ROOM_DISCONNECTED: "Disconnected",
        TEXT_NAUGHTY: "I’m afraid you can’t write that. Please be respectful of other players.",
        TEXT_NOTHING: "You can’t enter nothing!",
        TITLE: "Error"
    },
    FF = "LOADING",
    WF = {
        JOINED_COUNT: "{count} of {maxPlayers} players joined",
        PLAYERS_NEEDED: "1 player needed to start | {count} players needed to start",
        WAITING_FOR_VIP: "Waiting for {name} to start the game",
        WAITING_FOR_GAMEPAD: "Waiting for the game to start",
        WAITING_FOR_NEW_GAME: "Waiting for a new game to start",
        GAME_STARTING: "Game is starting",
        BUTTON_START: "Press to Start",
        BUTTON_CANCEL: "Press to Cancel"
    },
    HF = {
        GALLERY_LINK: "Visit the Gallery",
        NEW_GAME_STARTED: "A new game has started",
        PLAY_AGAIN: "Play again?",
        THANKS_FOR_PLAYING: "Thanks for playing!",
        BUTTON_GO_TO_GAME: "Go to game",
        BUTTON_GO_TO_JACKBOX: "Back to jackbox.tv",
        BUTTON_SAME_PLAYERS: "Same players",
        BUTTON_NEW_PLAYERS: "New players"
    },
    jF = {
        AND: "AND",
        OR: "OR"
    },
    XF = {
        BUTTON_SKIP: "Skip",
        BUTTON_NEXT: "Next",
        BUTTON_DONE: "Let’s Go!"
    },
    qF = {
        NAME: "AUDIENCE"
    },
    YF = {
        CART: {
            CHECK_OUT: "Check out",
            EMPTY: "Your cart is empty",
            TITLE: "Shopping Cart",
            TOTAL: "Total"
        }
    },
    zF = {
        EPISODE_REPORT: "Report Episode",
        EPISODE_UNLOAD: "Unload Episode",
        EPISODE_VIEW_AUTHOR: "View Author",
        EPISODES_LOAD: "Load an episode by id:",
        EPISODES_MENU: "Episodes Menu",
        EPISODES_SELECT: "Or select an epsiode:",
        EPISODES_WARNING: "Warning: user generated content is not rated",
        INSTRUCTION: {
            CREATE_TITLE: "first things first, enter a name for the episode that will contain all your prompts and hit create.",
            LOAD: "create or load?",
            PUBLISH: "publish your episode",
            TITLE: "name your episode",
            TOGGLE_VISIBILITY: "tap to show/hide prompts",
            WRITE: "write your prompts"
        },
        WARNING: {
            DELETE: "Are you sure you want to delete this episode?",
            TOS: "By sharing content, you agree to our [tos]Terms of Service[/tos]",
            TOS_AGREE: "agree and share"
        },
        BACK_TO_EPISODES: "back to episodes",
        BACK_TO_MENU: "back to menu",
        CREATE_NEW_EPISODE: "create a new episode",
        PREVIOUS_EPISODES: "previous episodes",
        PROMPT_ADD: "add prompt",
        PROMPT_PLACEHOLDER: "enter a prompt",
        PROMPTS_COUNT_HIDDEN: "({count} hidden)",
        TITLE_PLACEHOLDER: "enter a title"
    },
    JF = {
        BROADCASTER: {
            SUBTEXT: "You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.",
            WARNING: "THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED"
        },
        RECONNECTED: {
            TEXT: "RECONNECTED",
            SUBTEXT: "Have fun!"
        },
        RECONNECTING: {
            CONTROLLER: {
                TEXT: "CONNECTION INTERRUPTED",
                SUBTEXT: "Attempting to reconnect ({attempt} of 5)"
            },
            GAME: {
                TEXT: "GAME CONNECTION INTERRUPTED",
                SUBTEXT: "Please wait while we attempt to reconnect"
            }
        },
        PAUSED: {
            TEXT: "THE GAME IS PAUSED",
            SUBTEXT: "Anything you submit will still be sent to the game."
        }
    },
    ZF = {
        SHARE: "Share",
        COPY_TO_CLIPBOARD: "Copy to clipboard",
        COPIED: "Copied"
    },
    QF = {
        ACTION: kF,
        ALT: GF,
        ERROR: VF,
        LOADING: FF,
        LOBBY: WF,
        POST_GAME: HF,
        SEPARATOR: jF,
        TUTORIAL: XF,
        AUDIENCE: qF,
        GALLERY: YF,
        UGC: zF,
        TOAST: JF,
        SHARE: ZF
    },
    e9 = {
        BACK: "Retour",
        CANCEL: "Annuler",
        CLOSE: "Fermer",
        CONFIRM: "Confirmer",
        CREATE: "Créer",
        DELETE: "Supprimer",
        DONE: "Terminé",
        EDIT: "Modifier",
        OK: "OK",
        NEXT: "Suivant",
        NO: "Non",
        PLAY: "Jouer",
        PUBLISH: "Publier",
        REMOVE: "Supprimer",
        RESET: "Réinitialiser",
        SUBMIT: "Envoyer",
        TRY_AGAIN: "Réessayer",
        UNDO: "Annuler",
        YES: "Oui"
    },
    t9 = {
        UGC: {
            VISIBILITY_CONTROLLER_OFF: "sujets non affichés sur les appareils des joueurs",
            VISIBILITY_CONTROLLER_ON: "sujets affichés sur les appareils des joueurs",
            VISIBILITY_SCREEN_OFF: "sujets non affichés sur l'écran de jeu",
            VISIBILITY_SCREEN_ON: "sujets affichés sur l'écran de jeu"
        }
    },
    r9 = {
        DISCONNECTED: "Vous avez été déconnecté(e).",
        DRAWING_NOTHING: "Vous devez dessiner quelque chose !",
        PLAYER_KICKED: "Vous avez été éjecté(e) de la partie par un modérateur.",
        ROOM_DESTROYED: "Merci d'avoir joué !",
        ROOM_DISCONNECTED: "Déconnexion",
        TEXT_NAUGHTY: "Je crains que vous ne puissiez pas écrire ça. Respectez les autres joueurs.",
        TEXT_NOTHING: "Vous ne pouvez pas ne rien entrer",
        TITLE: "Erreur"
    },
    n9 = "CHARGEMENT",
    i9 = {
        JOINED_COUNT: "{count} joueurs sur {maxPlayers} ont rejoint la partie",
        PLAYERS_NEEDED: "1 joueur nécessaire pour commencer | {count} joueurs nécessaires pour commencer",
        WAITING_FOR_VIP: "En attente de {name} pour commencer la partie",
        WAITING_FOR_GAMEPAD: "En attente du début de la partie",
        WAITING_FOR_NEW_GAME: "En attente du début d'une nouvelle partie",
        GAME_STARTING: "La partie commence",
        BUTTON_START: "Appuyer pour commencer",
        BUTTON_CANCEL: "Appuyer pour annuler"
    },
    s9 = {
        GALLERY_LINK: "Visiter la galerie",
        NEW_GAME_STARTED: "Une nouvelle partie a commencé",
        PLAY_AGAIN: "Rejouer ?",
        THANKS_FOR_PLAYING: "Merci d'avoir joué !",
        BUTTON_GO_TO_GAME: "Aller au jeu",
        BUTTON_GO_TO_JACKBOX: "Retour à jackbox.tv",
        BUTTON_SAME_PLAYERS: "Mêmes joueurs",
        BUTTON_NEW_PLAYERS: "Nouveaux joueurs"
    },
    a9 = {
        AND: "ET",
        OR: "OU"
    },
    o9 = {
        BUTTON_SKIP: "Passer",
        BUTTON_NEXT: "Suivant",
        BUTTON_DONE: "Allons-y !"
    },
    u9 = {
        NAME: "SPECTATEURS"
    },
    l9 = {
        CART: {
            CHECK_OUT: "Paiement",
            EMPTY: "Votre panier est vide",
            TITLE: "Panier",
            TOTAL: "Total"
        }
    },
    f9 = {
        EPISODE_REPORT: "Signaler l'épisode",
        EPISODE_UNLOAD: "Retirer l'épisode",
        EPISODE_VIEW_AUTHOR: "Voir l'auteur",
        EPISODES_LOAD: "Charger un épisode par id :",
        EPISODES_MENU: "Menu des épisodes",
        EPISODES_SELECT: "Ou sélectionner un épisode :",
        EPISODES_WARNING: "Attention : le contenu généré par les utilisateurs ne fait pas l'objet d'un classement",
        INSTRUCTION: {
            CREATE_TITLE: "commencez par donner un nom à l'épisode qui contiendra vos sujets, puis touchez créer.",
            LOAD: "créer ou charger ?",
            PUBLISH: "publiez votre épisode",
            TITLE: "donnez un nom à votre épisode",
            TOGGLE_VISIBILITY: "touchez pour afficher/masquer les sujets",
            WRITE: "écrivez vos sujets"
        },
        WARNING: {
            DELETE: "Voulez-vous vraiment supprimer cet épisode ?",
            TOS: "En partageant votre contenu, vous acceptez nos [tos]Conditions de service[/tos]",
            TOS_AGREE: "accepter et partager"
        },
        BACK_TO_EPISODES: "retour aux épisodes",
        BACK_TO_MENU: "retour au menu",
        CREATE_NEW_EPISODE: "créer un nouvel épisode",
        PREVIOUS_EPISODES: "épisodes précédents",
        PROMPT_ADD: "ajouter un sujet",
        PROMPT_PLACEHOLDER: "taper un sujet",
        PROMPTS_COUNT_HIDDEN: "({count} non affiché)",
        TITLE_PLACEHOLDER: "taper un titre"
    },
    c9 = {
        BROADCASTER: {
            SUBTEXT: "La connexion de votre compte à l'extension Twitch Jackbox Audience Kit a réussi.",
            WARNING: "LE PARAMÈTRE 'PUBLIC' N'EST PAS ACTIVÉ DANS CETTE SALLE."
        },
        RECONNECTED: {
            TEXT: "RECONNECTÉ(E)",
            SUBTEXT: "Amusez-vous bien !"
        },
        RECONNECTING: {
            CONTROLLER: {
                TEXT: "CONNEXION INTERROMPUE",
                SUBTEXT: "Tentative de reconnexion ({attempt} sur 5)"
            },
            GAME: {
                TEXT: "CONNEXION AU JEU INTERROMPUE",
                SUBTEXT: "Veuillez patienter pendant que nous tentons de vous reconnecter."
            }
        },
        PAUSED: {
            TEXT: "LA PARTIE EST EN PAUSE",
            SUBTEXT: "Tout ce que vous proposez sera quand même envoyé dans le jeu."
        }
    },
    E9 = {
        SHARE: "Partager",
        COPY_TO_CLIPBOARD: "Copier dans le presse-papiers",
        COPIED: "Copié"
    },
    h9 = {
        ACTION: e9,
        ALT: t9,
        ERROR: r9,
        LOADING: n9,
        LOBBY: i9,
        POST_GAME: s9,
        SEPARATOR: a9,
        TUTORIAL: o9,
        AUDIENCE: u9,
        GALLERY: l9,
        UGC: f9,
        TOAST: c9,
        SHARE: E9
    },
    p9 = {
        BACK: "Indietro",
        CANCEL: "Annulla",
        CLOSE: "Chiuda",
        CONFIRM: "Conferma",
        CREATE: "Crea",
        DELETE: "Elimina",
        DONE: "Fine",
        EDIT: "Modifica",
        OK: "OK",
        NEXT: "Prossimo",
        NO: "No",
        PLAY: "Gioca",
        PUBLISH: "Pubblica",
        REMOVE: "Rimuovi",
        RESET: "Reset",
        SUBMIT: "Invia",
        TRY_AGAIN: "Riprova",
        UNDO: "Annulla",
        YES: "Sì"
    },
    _9 = {
        UGC: {
            VISIBILITY_CONTROLLER_OFF: "definizioni nascoste sui dispositivi dei giocatori",
            VISIBILITY_CONTROLLER_ON: "definizioni visualizzate sui dispositivi dei giocatori",
            VISIBILITY_SCREEN_OFF: "definizioni nascoste sullo schermo di gioco",
            VISIBILITY_SCREEN_ON: "definizioni visualizzate sullo schermo di gioco"
        }
    },
    g9 = {
        DISCONNECTED: "È stata effettuata la disconnessione.",
        DRAWING_NOTHING: "Devi disegnare qualcosa!",
        PLAYER_KICKED: "Un moderatore ti ha cacciato dalla partita.",
        ROOM_DESTROYED: "Grazie per aver scelto di giocare con noi!",
        ROOM_DISCONNECTED: "Disconnessione effettuata",
        TEXT_NAUGHTY: "Purtroppo non puoi scrivere questa cosa. Abbi rispetto per gli altri giocatori.",
        TEXT_NOTHING: "Devi per forza inserire qualcosa!",
        TITLE: "Errore"
    },
    T9 = "CARICAMENTO",
    R9 = {
        JOINED_COUNT: "{count} su {maxPlayers} giocatori in partita",
        PLAYERS_NEEDED: "Manca 1 giocatore per iniziare | Mancano {count} giocatori per iniziare",
        WAITING_FOR_VIP: "In attesa di {name} per iniziare la partita",
        WAITING_FOR_GAMEPAD: "In attesa d'iniziare la partita",
        WAITING_FOR_NEW_GAME: "In attesa d'iniziare una nuova partita",
        GAME_STARTING: "La partita sta per iniziare",
        BUTTON_START: "Premi per avviare",
        BUTTON_CANCEL: "Premi per annullare"
    },
    d9 = {
        GALLERY_LINK: "Visita la galleria",
        NEW_GAME_STARTED: "È iniziata una nuova partita",
        PLAY_AGAIN: "Vuoi giocare di nuovo?",
        THANKS_FOR_PLAYING: "Grazie per aver scelto di giocare con noi!",
        BUTTON_GO_TO_GAME: "Vai al gioco",
        BUTTON_GO_TO_JACKBOX: "Torna a jackbox.tv",
        BUTTON_SAME_PLAYERS: "Stessi giocatori",
        BUTTON_NEW_PLAYERS: "Nuovi giocatori"
    },
    m9 = {
        AND: "E",
        OR: "O"
    },
    x9 = {
        BUTTON_SKIP: "Salta",
        BUTTON_NEXT: "Avanti",
        BUTTON_DONE: "Iniziamo!"
    },
    A9 = {
        NAME: "PUBBLICO"
    },
    S9 = {
        CART: {
            CHECK_OUT: "Vai al pagamento",
            EMPTY: "Il carrello è vuoto",
            TITLE: "Carrello",
            TOTAL: "Totale"
        }
    },
    v9 = {
        EPISODE_REPORT: "Segnala episodio",
        EPISODE_UNLOAD: "Rimuovi episodio",
        EPISODE_VIEW_AUTHOR: "Mostra autore",
        EPISODES_LOAD: "Carica un episodio in base al suo id:",
        EPISODES_MENU: "Menu Episodi",
        EPISODES_SELECT: "Oppure seleziona un episodio:",
        EPISODES_WARNING: "Attenzione: il contenuto generato dagli utenti non è classificato",
        INSTRUCTION: {
            CREATE_TITLE: "per prima cosa, inserisci un nome per l’episodio che contenga tutti i tuoi suggerimenti e premi crea.",
            LOAD: "creare o caricare?",
            PUBLISH: "pubblica il tuo episodio",
            TITLE: "dai un nome al tuo episodio",
            TOGGLE_VISIBILITY: "tocca per mostrare/nascondere suggerimenti",
            WRITE: "scrivi le tue definizioni"
        },
        WARNING: {
            DELETE: "Vuoi davvero eliminare questo episodio?",
            TOS: "Condividendo i contenuti, accetti le nostre [tos]Condizioni del servizio[/tos]",
            TOS_AGREE: "accetta e condividi"
        },
        BACK_TO_EPISODES: "torna agli episodi",
        BACK_TO_MENU: "torna al menu",
        CREATE_NEW_EPISODE: "crea un nuovo episodio",
        PREVIOUS_EPISODES: "episodi precedenti",
        PROMPT_ADD: "aggiungi suggerimento",
        PROMPT_PLACEHOLDER: "inserisci suggerimento",
        PROMPTS_COUNT_HIDDEN: "({count} nascosti)",
        TITLE_PLACEHOLDER: "inserisci un titolo"
    },
    b9 = {
        BROADCASTER: {
            SUBTEXT: "Il collegamento del tuo account con l'estensione per Twitch Jackbox Audience Kit è andato a buon fine.",
            WARNING: "L'IMPOSTAZIONE DEL PUBBLICO NON È ATTIVA PER QUESTA STANZA"
        },
        RECONNECTED: {
            TEXT: "RICONNESSO",
            SUBTEXT: "Buon divertimento!"
        },
        RECONNECTING: {
            CONTROLLER: {
                TEXT: "CONNESSIONE INTERROTTA",
                SUBTEXT: "Tentativo di riconnessione in corso ({attempt} di 5)"
            },
            GAME: {
                TEXT: "CONNESSIONE AL GIOCO INTERROTTA",
                SUBTEXT: "Resta in attesa mentre proviamo a riconnetterci"
            }
        },
        PAUSED: {
            TEXT: "IL GIOCO È IN PAUSA",
            SUBTEXT: "Qualsiasi cosa invii sarà comunque inviata al gioco."
        }
    },
    L9 = {
        SHARE: "Condividi",
        COPY_TO_CLIPBOARD: "Copia negli appunti",
        COPIED: "Copiato"
    },
    y9 = {
        ACTION: p9,
        ALT: _9,
        ERROR: g9,
        LOADING: T9,
        LOBBY: R9,
        POST_GAME: d9,
        SEPARATOR: m9,
        TUTORIAL: x9,
        AUDIENCE: A9,
        GALLERY: S9,
        UGC: v9,
        TOAST: b9,
        SHARE: L9
    },
    C9 = {
        BACK: "Zurück",
        CANCEL: "Abbrechen",
        CLOSE: "Schließen",
        CONFIRM: "Bestätigen",
        CREATE: "Erstellen",
        DELETE: "Löschen",
        DONE: "Fertig",
        EDIT: "Bearbeiten",
        OK: "OK",
        NEXT: "Weiter",
        NO: "Nein",
        PLAY: "Spielen",
        PUBLISH: "Veröffentlichen",
        REMOVE: "Entfernen",
        RESET: "Neu starten",
        SUBMIT: "Abschicken",
        TRY_AGAIN: "Erneut versuchen",
        UNDO: "Rückgängig",
        YES: "Ja"
    },
    O9 = {
        UGC: {
            VISIBILITY_CONTROLLER_OFF: "Prompts auf Spielergeräten verborgen",
            VISIBILITY_CONTROLLER_ON: "Prompts auf Spielergeräten angezeigt",
            VISIBILITY_SCREEN_OFF: "Prompts auf Spielbildschirm verborgen",
            VISIBILITY_SCREEN_ON: "Prompts auf Spielbildschirm angezeigt"
        }
    },
    I9 = {
        DISCONNECTED: "Deine Verbindung wurde getrennt.",
        DRAWING_NOTHING: "Du musst irgendwas zeichnen!",
        PLAYER_KICKED: "Du wurdest von einem Moderator gekickt.",
        ROOM_DESTROYED: "Danke fürs Spielen!",
        ROOM_DISCONNECTED: "Verbindung getrennt",
        TEXT_NAUGHTY: "Das kannst du leider nicht schreiben. Bitte nimm Rücksicht auf deine Mitspieler.",
        TEXT_NOTHING: "Du musst etwas eingeben!",
        TITLE: "Fehler"
    },
    N9 = "LADE",
    U9 = {
        JOINED_COUNT: "{count} von {maxPlayers} Spielern sind beigetreten",
        PLAYERS_NEEDED: "1 Spieler zum Starten benötigt | {count} Spieler zum Starten benötigt",
        WAITING_FOR_VIP: "Warten, bis {name} das Spiel startet",
        WAITING_FOR_GAMEPAD: "Warten, bis das Spiel startet",
        WAITING_FOR_NEW_GAME: "Warten, bis ein neues Spiel startet",
        GAME_STARTING: "Das Spiel beginnt",
        BUTTON_START: "Zum Starten drücken",
        BUTTON_CANCEL: "Zum Abbrechen drücken"
    },
    P9 = {
        GALLERY_LINK: "Galerie besuchen",
        NEW_GAME_STARTED: "Ein neues Spiel hat begonnen",
        PLAY_AGAIN: "Erneut spielen?",
        THANKS_FOR_PLAYING: "Danke fürs Spielen!",
        BUTTON_GO_TO_GAME: "Zum Spiel",
        BUTTON_GO_TO_JACKBOX: "Zurück zu jackbox.tv",
        BUTTON_SAME_PLAYERS: "Selbe Spieler",
        BUTTON_NEW_PLAYERS: "Neue Spieler"
    },
    D9 = {
        AND: "UND",
        OR: "ODER"
    },
    B9 = {
        BUTTON_SKIP: "Überspringen",
        BUTTON_NEXT: "Weiter",
        BUTTON_DONE: "Los geht's!"
    },
    w9 = {
        NAME: "PUBLIKUM"
    },
    K9 = {
        CART: {
            CHECK_OUT: "Kasse",
            EMPTY: "Dein Einkaufswagen ist leer",
            TITLE: "Einkaufswagen",
            TOTAL: "Gesamtsumme"
        }
    },
    $9 = {
        EPISODE_REPORT: "Episode melden",
        EPISODE_UNLOAD: "Episode deaktivieren",
        EPISODE_VIEW_AUTHOR: "Autor ansehen",
        EPISODES_LOAD: "Lade eine Episode über dessen ID:",
        EPISODES_MENU: "Episoden-Menü",
        EPISODES_SELECT: "Oder wähle eine Episode aus:",
        EPISODES_WARNING: "Achtung: Von Nutzern erstellte Inhalte werden nicht auf Familientauglichkeit geprüft",
        INSTRUCTION: {
            CREATE_TITLE: 'Benenne als allererstes deine Episode, die alle deine Prompts enthalten wird und drücke dann "Erstellen".',
            LOAD: "Erstellen oder laden?",
            PUBLISH: "Veröffentliche deine Episode",
            TITLE: "Benenne deine Episode",
            TOGGLE_VISIBILITY: "Drücken, um Prompts zu zeigen / zu verstecken",
            WRITE: "Schreibe deine Prompts"
        },
        WARNING: {
            DELETE: "Bist du sicher, dass du diese Episode löschen möchtest?",
            TOS: "Durch das Teilen von Inhalten stimmst du unseren [tos]Nutzungsbedingungen[/tos] zu",
            TOS_AGREE: "Zustimmen und teilen"
        },
        BACK_TO_EPISODES: "Zurück zu den Episoden",
        BACK_TO_MENU: "Zurück zum Menü",
        CREATE_NEW_EPISODE: "Eigene Episode erstellen",
        PREVIOUS_EPISODES: "Vorige Episoden",
        PROMPT_ADD: "Prompt hinzufügen",
        PROMPT_PLACEHOLDER: "Prompt eingeben",
        PROMPTS_COUNT_HIDDEN: "({count} versteckt)",
        TITLE_PLACEHOLDER: "Titel eingeben"
    },
    M9 = {
        BROADCASTER: {
            SUBTEXT: "Du hast dein Konto erfolgreich mit der Jackbox Audience Kit Twitch-Erweiterung verknüpft.",
            WARNING: "FÜR DIESEN RAUM IST DIE PUBLIKUMS-EINSTELLUNG NICHT AKTIV"
        },
        RECONNECTED: {
            TEXT: "NEU VERBUNDEN",
            SUBTEXT: "Viel Spaß!"
        },
        RECONNECTING: {
            CONTROLLER: {
                TEXT: "VERBINDUNG UNTERBROCHEN",
                SUBTEXT: "Versuche neu zu verbinden ({attempt} von 5)"
            },
            GAME: {
                TEXT: "VERBINDUNG ZUM SPIEL UNTERBROCHEN",
                SUBTEXT: "Bitte warte während wir versuchen, die Verbindung wiederherzustellen."
            }
        },
        PAUSED: {
            TEXT: "DAS SPIEL IST PAUSIERT",
            SUBTEXT: "Alles, was du abschickst, wird weiterhin ans Spiel gesendet."
        }
    },
    k9 = {
        SHARE: "Teilen",
        COPY_TO_CLIPBOARD: "In Zwischenablage kopieren",
        COPIED: "Kopiert"
    },
    G9 = {
        ACTION: C9,
        ALT: O9,
        ERROR: I9,
        LOADING: N9,
        LOBBY: U9,
        POST_GAME: P9,
        SEPARATOR: D9,
        TUTORIAL: B9,
        AUDIENCE: w9,
        GALLERY: K9,
        UGC: $9,
        TOAST: M9,
        SHARE: k9
    },
    V9 = {
        BACK: "Atrás",
        CANCEL: "Cancelar",
        CLOSE: "Cerrar",
        CONFIRM: "Confirmar",
        CREATE: "Crear",
        DELETE: "Borrar",
        DONE: "Hecho",
        EDIT: "Editar",
        OK: "Aceptar",
        NEXT: "Siguiente",
        NO: "No",
        PLAY: "Jugar",
        PUBLISH: "Publicar",
        REMOVE: "Eliminar",
        RESET: "Reiniciar",
        SUBMIT: "Enviar",
        TRY_AGAIN: "Volver a intentarlo",
        UNDO: "Deshacer",
        YES: "Sí"
    },
    F9 = {
        UGC: {
            VISIBILITY_CONTROLLER_OFF: "los enunciados no se muestran en el dispositivo del jugador",
            VISIBILITY_CONTROLLER_ON: "los enunciados se muestran en el dispositivo del jugador",
            VISIBILITY_SCREEN_OFF: "los enunciados no se muestran en la pantalla",
            VISIBILITY_SCREEN_ON: "los enunciados se muestran en la pantalla"
        }
    },
    W9 = {
        DISCONNECTED: "Te has desconectado.",
        DRAWING_NOTHING: "¡Tienes que dibujar algo!",
        PLAYER_KICKED: "Un moderador te ha expulsado de la partida.",
        ROOM_DESTROYED: "¡Gracias por jugar!",
        ROOM_DISCONNECTED: "Desconectado",
        TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Hay que ser respetuoso con los demás jugadores.",
        TEXT_NOTHING: "Tienes que escribir algo",
        TITLE: "Error"
    },
    H9 = "CARGANDO",
    j9 = {
        JOINED_COUNT: "Se han unido {count} de {maxPlayers} jugadores",
        PLAYERS_NEEDED: "Se necesita 1 jugador para empezar | Se necesitan {count} jugadores para empezar",
        WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
        WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
        WAITING_FOR_NEW_GAME: "Esperando a que empiece otra partida",
        GAME_STARTING: "La partida va a empezar",
        BUTTON_START: "Pulsa para empezar",
        BUTTON_CANCEL: "Pulsa para cancelar"
    },
    X9 = {
        GALLERY_LINK: "Visita la galería",
        NEW_GAME_STARTED: "Ha empezado una nueva partida",
        PLAY_AGAIN: "¿Jugar otra vez?",
        THANKS_FOR_PLAYING: "¡Gracias por jugar!",
        BUTTON_GO_TO_GAME: "Ir a al juego",
        BUTTON_GO_TO_JACKBOX: "Volver a jackbox.tv",
        BUTTON_SAME_PLAYERS: "Los mismos jugadores",
        BUTTON_NEW_PLAYERS: "Nuevos jugadores"
    },
    q9 = {
        AND: "Y",
        OR: "O"
    },
    Y9 = {
        BUTTON_SKIP: "Omitir",
        BUTTON_NEXT: "Siguiente",
        BUTTON_DONE: "¡Vamos!"
    },
    z9 = {
        NAME: "PÚBLICO"
    },
    J9 = {
        CART: {
            CHECK_OUT: "Pagar",
            EMPTY: "El carrito está vacío",
            TITLE: "Carrito de la compra",
            TOTAL: "Total"
        }
    },
    Z9 = {
        EPISODE_REPORT: "Denunciar episodio",
        EPISODE_UNLOAD: "Retirar episodio",
        EPISODE_VIEW_AUTHOR: "Ver autor",
        EPISODES_LOAD: "Cargar un episodio por ID:",
        EPISODES_MENU: "Menú de episodios",
        EPISODES_SELECT: "O selecciona un episodio:",
        EPISODES_WARNING: "Aviso: El contenido de los usuarios no tiene clasificación de edad",
        INSTRUCTION: {
            CREATE_TITLE: "en primer lugar, ponle un nombre al episodio que contendrá tus enunciados y dale a crear.",
            LOAD: "¿crear o cargar?",
            PUBLISH: "publica tu episodio",
            TITLE: "ponle nombre al episodio",
            TOGGLE_VISIBILITY: "toca para mostrar u ocultar los enunciados",
            WRITE: "escribe los enunciados"
        },
        WARNING: {
            DELETE: "¿Seguro que quieres borrar este episodio?",
            TOS: "Al compartir contenidos, aceptas las [tos]Condiciones del servicio[/tos]",
            TOS_AGREE: "aceptar y compartir"
        },
        BACK_TO_EPISODES: "volver a los episodios",
        BACK_TO_MENU: "volver al menú",
        CREATE_NEW_EPISODE: "crear nuevo episodio",
        PREVIOUS_EPISODES: "episodios anteriores",
        PROMPT_ADD: "añadir enunciado",
        PROMPT_PLACEHOLDER: "escribe un enunciado",
        PROMPTS_COUNT_HIDDEN: "({count} ocultos)",
        TITLE_PLACEHOLDER: "escribe un título"
    },
    Q9 = {
        BROADCASTER: {
            SUBTEXT: "Has conectado tu cuenta con éxito a la extensión de Twitch del kit para público de Jackbox.",
            WARNING: "ESTA SALA NO TIENE LA FUNCIÓN DE PÚBLICO HABILITADA"
        },
        RECONNECTED: {
            TEXT: "CONEXIÓN RESTABLECIDA",
            SUBTEXT: "¡Diviértete!"
        },
        RECONNECTING: {
            CONTROLLER: {
                TEXT: "SE HA INTERRUMPIDO LA CONEXIÓN",
                SUBTEXT: "Recuperando conexión (intento {attempt} de 5)"
            },
            GAME: {
                TEXT: "SE HA INTERRUMPIDO LA CONEXIÓN CON EL JUEGO",
                SUBTEXT: "Espera mientras intentamos recuperar la conexión"
            }
        },
        PAUSED: {
            TEXT: "PARTIDA EN PAUSA",
            SUBTEXT: "Tus respuestas se enviarán igualmente al juego."
        }
    },
    e6 = {
        SHARE: "Compartir",
        COPY_TO_CLIPBOARD: "Copiar al portapapeles",
        COPIED: "Copiado"
    },
    t6 = {
        ACTION: V9,
        ALT: F9,
        ERROR: W9,
        LOADING: H9,
        LOBBY: j9,
        POST_GAME: X9,
        SEPARATOR: q9,
        TUTORIAL: Y9,
        AUDIENCE: z9,
        GALLERY: J9,
        UGC: Z9,
        TOAST: Q9,
        SHARE: e6
    },
    r6 = {
        BACK: "Volver",
        CANCEL: "Cancelar",
        CLOSE: "Cerrar",
        CONFIRM: "Confirmar",
        CREATE: "Crear",
        DELETE: "Borrar",
        DONE: "Listo",
        EDIT: "Editar",
        OK: "Aceptar",
        NEXT: "Siguiente",
        NO: "No",
        PLAY: "Jugar",
        PUBLISH: "Publicar",
        REMOVE: "Quitar",
        RESET: "Reiniciar",
        SUBMIT: "Enviar",
        TRY_AGAIN: "Volver a intentarlo",
        UNDO: "Deshacer",
        YES: "Sí"
    },
    n6 = {
        UGC: {
            VISIBILITY_CONTROLLER_OFF: "indicaciones ocultas en los dispositivos de los jugadores",
            VISIBILITY_CONTROLLER_ON: "indicaciones presentes en los dispositivos de los jugadores",
            VISIBILITY_SCREEN_OFF: "indicaciones ocultas en la pantalla del juego",
            VISIBILITY_SCREEN_ON: "indicaciones presentes en la pantalla del juego"
        }
    },
    i6 = {
        DISCONNECTED: "Te desconectaste.",
        DRAWING_NOTHING: "¡Tienes que dibujar algo!",
        PLAYER_KICKED: "Un moderador te expulsó del juego.",
        ROOM_DESTROYED: "¡Gracias por jugar!",
        ROOM_DISCONNECTED: "Desconectado",
        TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Seamos respetuosos con los demás jugadores.",
        TEXT_NOTHING: "¡Tienes que escribir algo!",
        TITLE: "Error"
    },
    s6 = "CARGANDO",
    a6 = {
        JOINED_COUNT: "{count} de {maxPlayers} jugadores se unieron",
        PLAYERS_NEEDED: "Se necesita 1 jugador para empezar | Se necesitan {count} jugadores para empezar",
        WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
        WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
        WAITING_FOR_NEW_GAME: "Esperando a que empiece una partida nueva",
        GAME_STARTING: "La partida va a empezar",
        BUTTON_START: "Pulsa para empezar",
        BUTTON_CANCEL: "Pulsa para cancelar"
    },
    o6 = {
        GALLERY_LINK: "Visita la galería",
        NEW_GAME_STARTED: "Una partida nueva ha empezado",
        PLAY_AGAIN: "¿Jugar otra vez?",
        THANKS_FOR_PLAYING: "¡Gracias por jugar!",
        BUTTON_GO_TO_GAME: "Ir a la partida",
        BUTTON_GO_TO_JACKBOX: "Volver a jackbox.tv",
        BUTTON_SAME_PLAYERS: "Los mismos jugadores",
        BUTTON_NEW_PLAYERS: "Nuevos jugadores"
    },
    u6 = {
        AND: "Y",
        OR: "O"
    },
    l6 = {
        BUTTON_SKIP: "Omitir",
        BUTTON_NEXT: "Siguiente",
        BUTTON_DONE: "¡Vamos!"
    },
    f6 = {
        NAME: "PÚBLICO"
    },
    c6 = {
        CART: {
            CHECK_OUT: "Comprar ahora",
            EMPTY: "Tu carrito está vacío",
            TITLE: "Carrito de compras",
            TOTAL: "Total"
        }
    },
    E6 = {
        EPISODE_REPORT: "Denunciar episodio",
        EPISODE_UNLOAD: "Descargar episodio",
        EPISODE_VIEW_AUTHOR: "Ver autor",
        EPISODES_LOAD: "Cargar un episodio por ID:",
        EPISODES_MENU: "Menú de episodios",
        EPISODES_SELECT: "O selecciona un episodio:",
        EPISODES_WARNING: "Aviso: El contenido de los usuarios no tiene clasificación por edades",
        INSTRUCTION: {
            CREATE_TITLE: "Lo primero que debes hacer es escribir un nombre para el episodio que contendrá todas sus indicaciones y pulsar crear.",
            LOAD: "¿Crear o cargar?",
            PUBLISH: "Publica tu episodio",
            TITLE: "Nombra tu episodio",
            TOGGLE_VISIBILITY: "Pulsa para mostrar/ocultar las indicaciones",
            WRITE: "Escribe tus indicaciones"
        },
        WARNING: {
            DELETE: "¿De verdad quieres borrar este episodio?",
            TOS: "Al compartir contenido, aceptas nuestros [tos]Términos de servicio[/tos]",
            TOS_AGREE: "Aceptar y compartir"
        },
        BACK_TO_EPISODES: "Volver a los episodios",
        BACK_TO_MENU: "Volver al menú",
        CREATE_NEW_EPISODE: "Crear un nuevo episodio",
        PREVIOUS_EPISODES: "Episodios anteriores",
        PROMPT_ADD: "Añadir indicación",
        PROMPT_PLACEHOLDER: "Escribe una indicación",
        PROMPTS_COUNT_HIDDEN: "({count} oculto(s))",
        TITLE_PLACEHOLDER: "Escribir un título"
    },
    h6 = {
        BROADCASTER: {
            SUBTEXT: "Conectaste correctamente tu cuenta a la extensión para Twitch del kit para público de Jackbox.",
            WARNING: "ESTA SALA NO TIENE ACTIVADA LA OPCIÓN DE PÚBLICO"
        },
        RECONNECTED: {
            TEXT: "CONEXIÓN RESTABLECIDA",
            SUBTEXT: "¡Diviértete!"
        },
        RECONNECTING: {
            CONTROLLER: {
                TEXT: "CONEXIÓN INTERRUMPIDA",
                SUBTEXT: "Intento de reconexión ({attempt} de 5)"
            },
            GAME: {
                TEXT: "SE INTERRUMPIÓ LA CONEXIÓN AL JUEGO",
                SUBTEXT: "Espera mientras intentamos restablecer la conexión"
            }
        },
        PAUSED: {
            TEXT: "EL JUEGO ESTÁ EN PAUSA",
            SUBTEXT: "Todo lo que ingreses será enviado al juego."
        }
    },
    p6 = {
        SHARE: "Compartir",
        COPY_TO_CLIPBOARD: "Copiar al portapapeles",
        COPIED: "Se copió"
    },
    _6 = {
        ACTION: r6,
        ALT: n6,
        ERROR: i6,
        LOADING: s6,
        LOBBY: a6,
        POST_GAME: o6,
        SEPARATOR: u6,
        TUTORIAL: l6,
        AUDIENCE: f6,
        GALLERY: c6,
        UGC: E6,
        TOAST: h6,
        SHARE: p6
    },
    g6 = {
        BACK: "Voltar",
        CANCEL: "Cancelar",
        CLOSE: "Fechar",
        CONFIRM: "Confirmar",
        CREATE: "Criar",
        DELETE: "Excluir",
        DONE: "Pronto",
        EDIT: "Editar",
        OK: "OK",
        NEXT: "Avançar",
        NO: "Não",
        PLAY: "Jogar",
        PUBLISH: "Publicar",
        REMOVE: "Remover",
        RESET: "Redefinir",
        SUBMIT: "Enviar",
        TRY_AGAIN: "Tentar de novo",
        UNDO: "Desfazer",
        YES: "Sim"
    },
    T6 = {
        UGC: {
            VISIBILITY_CONTROLLER_OFF: "enunciados ocultos no dispositivo dos jogadores",
            VISIBILITY_CONTROLLER_ON: "enunciados exibidos no dispositivo dos jogadores",
            VISIBILITY_SCREEN_OFF: "enunciados ocultos na tela do jogo",
            VISIBILITY_SCREEN_ON: "enunciados exibidos na tela do jogo"
        }
    },
    R6 = {
        DISCONNECTED: "Você foi desconectado.",
        DRAWING_NOTHING: "Você tem que desenhar!",
        PLAYER_KICKED: "Você foi expulso do jogo por um moderador.",
        ROOM_DESTROYED: "Obrigado por jogar!",
        ROOM_DISCONNECTED: "Desconectado",
        TEXT_NAUGHTY: "Não pode escrever isso. Respeite os outros jogadores.",
        TEXT_NOTHING: "Não dá para inserir texto vazio!",
        TITLE: "Erro"
    },
    d6 = "CARREGANDO",
    m6 = {
        JOINED_COUNT: "{count} de {maxPlayers} jogadores entraram",
        PLAYERS_NEEDED: "1 jogador necessário para começar | {count} jogadores necessários para começar",
        WAITING_FOR_VIP: "Aguardando {name} começar o jogo",
        WAITING_FOR_GAMEPAD: "Aguardando o começo do jogo",
        WAITING_FOR_NEW_GAME: "Aguardando o começo de uma nova partida",
        GAME_STARTING: "O jogo está começando",
        BUTTON_START: "Aperte para começar",
        BUTTON_CANCEL: "Aperte para cancelar"
    },
    x6 = {
        GALLERY_LINK: "Visitar a galeria",
        NEW_GAME_STARTED: "Começou uma nova partida",
        PLAY_AGAIN: "Jogar de novo?",
        THANKS_FOR_PLAYING: "Obrigado por jogar!",
        BUTTON_GO_TO_GAME: "Ir para o jogo",
        BUTTON_GO_TO_JACKBOX: "Voltar para jackbox.tv",
        BUTTON_SAME_PLAYERS: "Mesmos jogadores",
        BUTTON_NEW_PLAYERS: "Outros jogadores"
    },
    A6 = {
        AND: "E",
        OR: "OU"
    },
    S6 = {
        BUTTON_SKIP: "Pular",
        BUTTON_NEXT: "Avançar",
        BUTTON_DONE: "Vamos lá!"
    },
    v6 = {
        NAME: "PLATEIA"
    },
    b6 = {
        CART: {
            CHECK_OUT: "Finalizar",
            EMPTY: "Seu carrinho está vazio",
            TITLE: "Carrinho de Compras",
            TOTAL: "Total"
        }
    },
    L6 = {
        EPISODE_REPORT: "Denunciar episódio",
        EPISODE_UNLOAD: "Excluir cópia local do episódio",
        EPISODE_VIEW_AUTHOR: "Visualizar autor",
        EPISODES_LOAD: "Carregar um episódio por ID:",
        EPISODES_MENU: "Menu de episódios",
        EPISODES_SELECT: "Ou selecione um episódio:",
        EPISODES_WARNING: "Aviso: os conteúdos gerados pelos usuários não têm classificação indicativa",
        INSTRUCTION: {
            CREATE_TITLE: "para começar, insira o nome do episódio que conterá todos os seus enunciados e aperte “Criar”.",
            LOAD: "criar ou carregar?",
            PUBLISH: "publicar seu episódio",
            TITLE: "dê um nome ao seu episódio",
            TOGGLE_VISIBILITY: "toque para exibir/ocultar enunciados",
            WRITE: "escreva seus enunciados"
        },
        WARNING: {
            DELETE: "Deseja mesmo excluir este episódio?",
            TOS: "Ao compartilhar conteúdo, você concordará com os nossos [tos]Termos de Serviço[/tos]",
            TOS_AGREE: "concordar e compartilhar"
        },
        BACK_TO_EPISODES: "voltar aos episódios",
        BACK_TO_MENU: "voltar ao menu",
        CREATE_NEW_EPISODE: "criar novo episódio",
        PREVIOUS_EPISODES: "episódios anteriores",
        PROMPT_ADD: "adicionar enunciado",
        PROMPT_PLACEHOLDER: "insira um enunciado",
        PROMPTS_COUNT_HIDDEN: "({count} oculto[s])",
        TITLE_PLACEHOLDER: "insira um título"
    },
    y6 = {
        BROADCASTER: {
            SUBTEXT: "Você conectou sua conta à extensão Jackbox Audience Kit para Twitch.",
            WARNING: "A CONFIGURAÇÃO DE PLATEIA NÃO ESTÁ ATIVA NESTA SALA"
        },
        RECONNECTED: {
            TEXT: "CONEXÃO RESTABELECIDA",
            SUBTEXT: "Divirtam-se!"
        },
        RECONNECTING: {
            CONTROLLER: {
                TEXT: "CONEXÃO INTERROMPIDA",
                SUBTEXT: "Tentando reconectar-se ({attempt} de 5)"
            },
            GAME: {
                TEXT: "CONEXÃO DO JOGO INTERROMPIDA",
                SUBTEXT: "Aguarde enquanto tentamos restabelecer a conexão"
            }
        },
        PAUSED: {
            TEXT: "O JOGO ESTÁ PAUSADO",
            SUBTEXT: "Tudo que você enviar ainda será enviado ao jogo."
        }
    },
    C6 = {
        SHARE: "Compartilhar",
        COPY_TO_CLIPBOARD: "Copiar para área de transferência",
        COPIED: "Copiado"
    },
    O6 = {
        ACTION: g6,
        ALT: T6,
        ERROR: R6,
        LOADING: d6,
        LOBBY: m6,
        POST_GAME: x6,
        SEPARATOR: A6,
        TUTORIAL: S6,
        AUDIENCE: v6,
        GALLERY: b6,
        UGC: L6,
        TOAST: y6,
        SHARE: C6
    },
    I6 = {
        en: QF,
        pl: G9
    },
    N6 = {
        LABEL: "BRANCH",
        REFRESH_REQUIRED: "Refresh Required",
        PREFERRED: "PREFERRED BRANCH",
        SELECT: "Select a Branch",
        WAITING: "Waiting for Room"
    },
    U6 = {
        ACCEPT_ALL: "Got it!",
        CONSENT_MODAL: {
            ARIA: "Cookie consent form"
        },
        DESCRIPTION: "We use cookies to improve your game experience and analyze website traffic. Find out more in our [pp]Privacy Policy[/pp].",
        REJECT_ALL: "Opt out"
    },
    P6 = {
        UNSUPPORTED_BROWSER: "This game is not supported on this browser. View '?' or HELP to see a list of compatible browsers.",
        ROOM_IS_FULL: "The game is full",
        ROOM_NOT_FOUND: "Room not found",
        AUDIENCE_IS_FULL: "The audience is full",
        UNABLE_TO_CONNECT: "Unable to connect to the Jackbox Games server. This is commonly caused by adblockers or privacy extensions.",
        UNABLE_TO_PRELOAD: "Unable to preload this game bundle",
        KICKED: "You cannot join because you have been kicked by a moderator",
        REQUIRES_TWITCH_LOGIN: "Game requires Twitch login",
        ROOM_IS_LOCKED: "Game is locked",
        INCORRECT_PASSWORD: "Incorrect password",
        GENERIC: "Error joining this game",
        FILTER_NAME: "This game has profanity filters enabled. Please pick a different name."
    },
    D6 = {
        NAME: "NAME",
        NAME_PLACEHOLDER: "ENTER YOUR NAME",
        PASSWORD_PLACEHOLDER: "ENTER 5-DIGIT PASSWORD",
        PASSWORD_REQUIRED_TITLE: "Password required",
        PASSWORD_REQUIRED_BODY: "Please enter the password or join as an audience member",
        PASSWORD_JOIN_AS_PLAYER: "Join as Player",
        PASSWORD_JOIN_AS_AUDIENCE: "Join Audience",
        ROOM_CODE: "ROOM CODE",
        ROOM_CODE_PLACEHOLDER: "ENTER 4-LETTER CODE"
    },
    B6 = "Link to Jackbox Games Homepage",
    w6 = {
        APPEARANCE: "APPEARANCE",
        DARK: "dark",
        HELP: "HELP",
        TWITCH: "TWITCH",
        LIGHT: "light",
        LOGOUT: "LOGOUT",
        MERCH: "MERCH",
        PAST_GAMES: "PAST GAMES",
        MAILING_LIST: "MAILING LIST",
        MODERATOR: "MODERATOR"
    },
    K6 = {
        CALL_TO_ACTION: {
            SHOP: "VIEW GAME & SHOP",
            VIEW: "VIEW THIS GAME"
        },
        NEW: "NEW",
        PLAYED_ON: "PLAYED ON",
        REMOVE: {
            CONFIRM: "Are you sure?",
            DESCRIPTION: `This will permanently remove this game
from your past games list.`,
            MANAGE: "Remove Game?",
            TITLE: "Are You Sure?"
        }
    },
    $6 = {
        EMPTY: "No Past Games Yet",
        MANAGE: "MANAGE",
        TITLE: "YOUR PAST GAMES"
    },
    M6 = {
        TITLE: "RECENT GAMES",
        VIEW_ALL: {
            BUTTON: "VIEW ALL",
            LINK: "VIEW ALL PAST GAMES"
        }
    },
    k6 = {
        GAME_FULL: "Game is full",
        GAME_STARTED: "Game has started",
        ROOM_NOT_FOUND: "Room not found"
    },
    G6 = {
        GAME_FULL: "GAME IS FULL",
        GAME_STARTED: "GAME HAS STARTED",
        JOIN_AUDIENCE: "JOIN AUDIENCE",
        RECONNECT: "RECONNECT",
        TWITCH_LOGIN: "LOGIN WITH TWITCH"
    },
    V6 = {
        CAMERA: "[b]HEADS UP:[/b] We’re not detecting a camera, but you can still play the game without a photo. If this seems wrong, try joining with a different browser.",
        STYLE: "[b]HEADS UP:[/b] Your browser seems a bit outdated, and will have some issues displaying this game.",
        TOS: "By clicking {submit}, you agree to our [tos]Terms of Service[/tos]"
    },
    F6 = {
        BRANCH: N6,
        COOKIE: U6,
        ERROR: P6,
        FORM: D6,
        HOMEPAGE_LINK: B6,
        MENU: w6,
        PAST_GAME: K6,
        PAST_GAMES: $6,
        RECENT_GAMES: M6,
        STATUS: k6,
        SUBMIT: G6,
        WARNING: V6
    },
    g7 = {
        LABEL: "GAŁĄŹ",
        REFRESH_REQUIRED: "Wymagane odświeżenie",
        PREFERRED: "PREFEROWANA GAŁĄŹ",
        SELECT: "Wybierz swoją gałąź",
        WAITING: "Oczekiwanie na pokój"
    },
    T7 = {
        ACCEPT_ALL: "Okay!",
        CONSENT_MODAL: {
            ARIA: "Zgoda na pliki cookie"
        },
        DESCRIPTION: "Używamy plików cookie, aby poprawić twoje doświadczenie z gry i analizować ruch na naszej stronie. Więcej informacji znajdziesz w naszej [pp]polityce prywatności[/pp].",
        REJECT_ALL: "Odrzuć"
    },
    R7 = {
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
    d7 = {
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
    m7 = "Link do strony głównej Jackbox Games",
    x7 = {
        APPEARANCE: "WYGLĄD",
        DARK: "Ciemny",
        HELP: "POMOC",
        TWITCH: "TWITCH",
        LIGHT: "Jasny",
        LOGOUT: "WYLOGUJ",
        MERCH: "SKLEP",
        PAST_GAMES: "INNE GRY",
        MAILING_LIST: "LISTA MAILINGOWA",
        MODERATOR: "MODERATOR"
    },
    A7 = {
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
    S7 = {
        EMPTY: "Brak poprzednich gier",
        MANAGE: "ZARZĄDZAJ",
        TITLE: "TWOJE POPRZEDNIE GRY"
    },
    v7 = {
        TITLE: "AKTUALNE GRY",
        VIEW_ALL: {
            BUTTON: "ZOBACZ WSZYSTKIE",
            LINK: "ZOBACZ WSZYSTKIE POPRZEDNIE GRY"
        }
    },
    b7 = {
        GAME_FULL: "Gra jest pełna",
        GAME_STARTED: "Gra już się rozpoczęła",
        ROOM_NOT_FOUND: "Nie znaleziono pokoju."
    },
    L7 = {
        GAME_FULL: "GRA JEST PEŁNA",
        GAME_STARTED: "GRA JUŻ SIĘ ROZPOCZĘŁA",
        JOIN_AUDIENCE: "DOŁĄCZ DO PUBLICZNOŚCI",
        RECONNECT: "POŁĄCZ PONOWNIE",
        TWITCH_LOGIN: "ZALOGUJ PRZEZ TWITCH"
    },
    y7 = {
        CAMERA: "[b]UWAGA:[/b] Nie wykryto kamery, ale możesz grać także bez zdjęcia. Jeśli masz kamerę, spróbuj użyć innej przeglądarki.",
        STYLE: "[b]UWAGA:[/b] Twoja przeglądarka wydaje się nieco przestarzała. Mogą wystąpić problemy z wyświetlaniem tej gry.",
        TOS: "Klikając {submit}, akceptujesz nasze [tos]warunki korzystania[/tos]"
    },
    C7 = {
        BRANCH: g7,
        COOKIE: T7,
        ERROR: R7,
        FORM: d7,
        HOMEPAGE_LINK: m7,
        MENU: x7,
        PAST_GAME: A7,
        PAST_GAMES: S7,
        RECENT_GAMES: v7,
        STATUS: b7,
        SUBMIT: L7,
        WARNING: y7
    },

    pW = {
        en: F6,
        pl: C7
    },
    Rr = (t, e) => {
        const r = t.__vccOpts || t;
        for (const [n, s] of e) r[n] = s;
        return r
    };
class rl {
    static toPrecision(e, r) {
        const n = 10 ** r;
        return Math.round((e + Number.EPSILON) * n) / n
    }
}
class _W {
    constructor(e, r, n) {
        ge(this, "DEFAULT_WIDTH", 400);
        ge(this, "DEFAULT_HEIGHT", 400);
        ge(this, "canvas");
        ge(this, "ctx");
        ge(this, "doodle");
        ge(this, "brush", "");
        ge(this, "brushDrawFunctions", {});
        ge(this, "color", "#000000");
        ge(this, "layer", 0);
        ge(this, "points", []);
        ge(this, "precision", 2);
        ge(this, "scale", {
            width: 1,
            height: 1
        });
        ge(this, "tolerance", .5);
        ge(this, "weight", 4);
        ge(this, "weightScale", 1);
        ge(this, "isInteracting", !1);
        var s, a, l;
        n != null && n.brush && (this.brush = n.brush), n != null && n.brushDrawFunctions && (this.brushDrawFunctions = n.brushDrawFunctions), n != null && n.color && (this.color = n.color), n != null && n.layer && (this.layer = n.layer), n != null && n.precision && (this.precision = n.precision), n != null && n.scale && (this.scale = n.scale), n != null && n.tolerance && (this.tolerance = n.tolerance), n != null && n.weight && (this.weight = n.weight), n != null && n.weightScale && (this.weightScale = n.weightScale), e.width = (((s = r.size) == null ? void 0 : s.width) ?? this.DEFAULT_WIDTH) * this.scale.width, e.height = (((a = r.size) == null ? void 0 : a.height) ?? this.DEFAULT_HEIGHT) * this.scale.height, this.canvas = e, this.ctx = e.getContext("2d"), (l = this.ctx) == null || l.scale(this.scale.width, this.scale.height), this.doodle = r, this.doodle.lines.length && this.drawLines()
    }
    addPoint(e) {
        this.points.push(e)
    }
    normalizePoint(e) {
        const r = {
                x: e.x / this.scale.width,
                y: e.y / this.scale.height
            },
            n = {
                x: Math.min(Math.max(.5 * this.weight, r.x), this.canvas.width / this.scale.width - .5 * this.weight),
                y: Math.min(Math.max(.5 * this.weight, r.y), this.canvas.height / this.scale.height - .5 * this.weight)
            };
        return {
            x: rl.toPrecision(n.x, this.precision),
            y: rl.toPrecision(n.y, this.precision)
        }
    }
    drawLines() {
        if (!this.ctx) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const e = this.doodle.maxLayer ?? 0,
            r = Array.from({
                length: e + 1
            }, () => {
                const a = document.createElement("canvas");
                a.width = this.canvas.width, a.height = this.canvas.height;
                const l = a.getContext("2d");
                return l == null || l.scale(this.scale.width, this.scale.height), {
                    canvas: a,
                    ctx: l
                }
            }),
            n = a => {
                if (a.color !== "transparent") return;
                const l = a.layer != null ? a.layer : this.layer;
                for (let f = 0; f <= l; f++) this.drawLine(a, r[f].ctx)
            };
        Object.values(this.doodle.lines).forEach(a => {
            const l = r[a.layer ?? 0].ctx;
            a.color === "transparent" ? n(a) : this.drawLine(a, l)
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
            canvas: a
        }) => {
            this.ctx.drawImage(a, 0, 0, this.canvas.width / this.scale.width, this.canvas.height / this.scale.height)
        })
    }
    drawLine(e, r) {
        if (!r) return;
        const n = e.brush && this.brushDrawFunctions[e.brush];
        if (n) {
            n(e, r);
            return
        }
        e.color === "transparent" ? r.globalCompositeOperation = "destination-out" : (r.fillStyle = e.color, r.globalCompositeOperation = "source-over", r.strokeStyle = e.color), r.lineCap = "round", r.lineJoin = "round", r.lineWidth = e.weight * this.weightScale, r.beginPath(), e.points.forEach((s, a) => {
            e.points.length === 1 && a === 0 && (r.save(), r.arc(s.x, s.y, e.weight / 2, 0, 2 * Math.PI), r.fill(), r.restore(), r.beginPath()), r.lineTo(s.x, s.y)
        }), r.stroke()
    }
    renderImage(e = "image/png") {
        return this.doodle.lines.length > 0 && this.drawLines(), this.canvas.toDataURL(e)
    }
    onStart(e) {
        this.isInteracting = !0;
        const r = this.normalizePoint(e);
        this.addPoint(r), this.drawLines()
    }
    onMove(e) {
        if (!this.isInteracting) return;
        const r = this.points[this.points.length - 1];
        if (!r) {
            this.addPoint(this.normalizePoint(e));
            return
        }
        const n = .5 * this.weight,
            s = {
                x: e.x - r.x,
                y: e.y - r.y
            },
            a = Math.sqrt(s.x ** 2 + s.y ** 2);
        if (a > n) {
            const l = (a - n) / a,
                f = {
                    x: s.x * l,
                    y: s.y * l
                },
                E = {
                    x: r.x + f.x,
                    y: r.y + f.y
                };
            this.addPoint(this.normalizePoint(E)), this.drawLines()
        }
    }
    onEnd() {
        if (!this.isInteracting) return null;
        const e = {
            brush: this.brush,
            color: this.color,
            index: this.doodle.lines.length,
            layer: this.layer,
            points: Gv(this.points, this.tolerance).map(r => ({
                x: rl.toPrecision(r.x, this.precision),
                y: rl.toPrecision(r.y, this.precision)
            })),
            weight: this.weight
        };
        return this.isInteracting = !1, this.points = [], e
    }
}
const gW = Wr({
        props: {
            modelValue: String,
            sanitizers: Array
        },
        emits: {
            "update:modelValue": t => !0
        },
        watch: {
            modelValue(t, e) {
                if (t !== e) {
                    const r = this.$refs.input;
                    r.value = t
                }
            }
        },
        methods: {
            async onInput(t) {
                const e = t.target,
                    r = e.maxLength === -1 ? Number.MAX_SAFE_INTEGER : e.maxLength;
                if (this.sanitizers && (e.value = MF.withTypes(e.value, [...this.sanitizers])), e.value.length > r) {
                    e.value = e.value.substring(0, r);
                    return
                }
                this.$emit("update:modelValue", e.value), await this.$nextTick(), e.value !== this.modelValue && (e.value = this.modelValue)
            }
        }
    }),
    TW = ["value"];

function RW(t, e, r, n, s, a) {
    return Pe(), et("input", {
        ref: "input",
        value: t.modelValue,
        onInput: e[0] || (e[0] = (...l) => t.onInput && t.onInput(...l))
    }, null, 40, TW)
}
const dW = Rr(gW, [
    ["render", RW]
]);
class Ete {
    constructor() {
        ge(this, "wsClient");
        ge(this, "isKicked", !1);
        ge(this, "isHostPaused", !1);
        ge(this, "watchStopHandler");
        ge(this, "keyMap");
        ge(this, "providerMap");
        ge(this, "mappedValues", da({}));
        ge(this, "shouldParseBlobcast", !1);
        ge(this, "callbackMap", new Map);
        ge(this, "pausedKeys", null);
        ge(this, "pausedEvents", null);
        ge(this, "keyMapKeys");
        ge(this, "providerMapKeys");
        ge(this, "hotValues");
        ge(this, "newValues");
        ge(this, "pause", (e = [], r = null) => {
            if (e) {
                const n = this.pausedKeys ?? [];
                n.push(...e), this.pausedKeys = n
            }
            if (r) {
                const n = this.pausedEvents ?? [];
                n.push(...r), this.pausedEvents = n
            }
        });
        ge(this, "resume", () => {
            this.pausedKeys = null, this.pausedEvents = null, this.sync()
        });
        ge(this, "sync", xee(() => {
            if (this.wsClient && !(!this.keyMap && !this.providerMap)) {
                if (this.pausedKeys && !this.pausedKeys.length) {
                    this.emit("didReceivePausedEntities", this.wsClient.entities);
                    return
                }
                this.hotValues = {}, this.newValues = {}, this.normalize().mapKeysToValues().mapProvidersToValues().deleteDropped().hydrateRefs().syncExisting(), delete this.hotValues, delete this.newValues, this.checkHostIsPausedChange()
            }
        }, 50))
    }
    setWSClient(e) {
        this.wsClient = e, this.setupWatcher(), e.on("connection", this.onConnection.bind(this)), e.on("room/exit", this.onRoomExit.bind(this)), e.on("room/lock", this.onRoomLock.bind(this)), e.on("client/connected", this.onClientConnected.bind(this)), e.on("client/disconnected", this.onClientDisconnected.bind(this)), e.on("client/kicked", this.onClientKicked.bind(this)), e.on("socketClose", this.onSocketClose.bind(this))
    }
    setupWatcher() {
        this.wsClient.entities = da(this.wsClient.entities), this.watchStopHandler = xs(this.wsClient.entities, this.sync)
    }
    valueForEntity(e) {
        return e instanceof Li.ArtifactEntity || e instanceof Li.DoodleEntity || e instanceof Li.TextMapEntity || e instanceof Li.NumberEntity ? e : e instanceof Li.ObjectEntity ? jQ(e.val) : e instanceof Li.TextEntity ? e.text : null
    }
    normalize() {
        var r;
        const e = Object.keys(this.wsClient.entities);
        for (let n = 0; n < e.length; n++) {
            let s = e[n];
            if ((r = this.pausedKeys) != null && r.includes(s)) {
                this.emit("didReceivePausedEntities", {
                    [s]: this.wsClient.entities[s]
                });
                continue
            }
            const a = this.valueForEntity(this.wsClient.entities[s]);
            if (a != null) {
                if (this.shouldParseBlobcast) {
                    const l = s.split(":");
                    if (l[0] === "bc")
                        if (l[1] === "customer") {
                            if (l[2] !== `${this.wsClient.id}`) continue;
                            s = "player"
                        } else l[1] === "room" && (s = "room")
                }
                this.hotValues[s] = a
            }
        }
        return this
    }
    hydrateRefs() {
        const e = (r, n, s = !1, a = !1) => {
            const l = r.$ref ?? r.ref;
            if (l) {
                const f = this.hotValues[l];
                if (f === void 0)
                    if (a) console.warn(`[ecastPlugin] entity "${n}" referenced nonexistent optional entity "${l}"`);
                    else throw new Error(`[ecastPlugin] entity "${n}" referenced entity "${l}" but it does not exist`);
                cte(this.newValues, n, f)
            } else s && Object.entries(r).forEach(([f, E]) => {
                E !== null && typeof E == "object" && e(E, `${n}.${f}`, s, a)
            })
        };
        return Object.entries(this.newValues).forEach(([r, n]) => {
            n && Object.entries(n).forEach(([s, a]) => {
                a !== null && typeof a == "object" && e(a, `${r}.${s}`, this.keyHasDeepRefs(r), this.keyHasOptionalRefs(r))
            })
        }), this
    }
    keyHasDeepRefs(e) {
        var r, n, s, a;
        return !!((n = (r = this.keyMap) == null ? void 0 : r[e]) != null && n.hasDeepRefs || (a = (s = this.providerMap) == null ? void 0 : s[e]) != null && a.hasDeepRefs)
    }
    keyHasOptionalRefs(e) {
        var r, n, s, a;
        return !!((n = (r = this.keyMap) == null ? void 0 : r[e]) != null && n.hasOptionalRefs || (a = (s = this.providerMap) == null ? void 0 : s[e]) != null && a.hasOptionalRefs)
    }
    mapKeysToValues() {
        if (!this.keyMap) return this;
        for (let e = 0; e < this.keyMapKeys.length; e++) this.newValues[this.keyMapKeys[e]] = this.hotValues[this.keyMap[this.keyMapKeys[e]].key];
        return this
    }
    mapProvidersToValues() {
        if (!this.providerMap) return this;
        for (let e = 0; e < this.providerMapKeys.length; e++) this.newValues[this.providerMapKeys[e]] = this.providerMap[this.providerMapKeys[e]].fn(this.hotValues, this.wsClient);
        return this
    }
    deleteDropped() {
        const e = Object.keys(this.mappedValues);
        for (let r = 0; r < e.length; r++) this.newValues[e[r]] || delete this.mappedValues[e[r]];
        return this
    }
    syncExisting() {
        const e = Object.keys(this.newValues);
        for (let r = 0; r < e.length; r++) this.mappedValues[e[r]] = this.newValues[e[r]];
        return this.mappedValues
    }
    checkHostIsPausedChange() {
        const e = this.mappedValues.hostIsPaused;
        e && !this.isHostPaused ? (this.isHostPaused = !0, this.emit("hostDidPause")) : !e && this.isHostPaused && (this.isHostPaused = !1, this.emit("hostDidUnpause"))
    }
    addKeys(e) {
        this.keyMap || (this.keyMap = {}), Object.keys(e).forEach(r => {
            if (typeof e[r] == "function") {
                const n = e[r];
                this.keyMap[r] = {
                    key: n(this.wsClient),
                    hasDeepRefs: !1,
                    hasOptionalRefs: !1
                };
                return
            }
            if (typeof e[r] == "object") {
                const n = e[r];
                this.keyMap[r] = {
                    key: n.fn ? n.fn(this.wsClient) : n.key,
                    hasDeepRefs: n.hasDeepRefs ?? !1,
                    hasOptionalRefs: n.hasOptionalRefs ?? !1
                };
                return
            }
            this.keyMap[r] = {
                key: e[r]
            }
        }), this.keyMapKeys = Object.keys(this.keyMap), this.sync()
    }
    purgeKeys(e) {
        this.keyMap && (Object.keys(e).forEach(r => {
            this.keyMap[r] && delete this.keyMap[r]
        }), this.keyMapKeys = Object.keys(this.keyMap), this.sync())
    }
    addProviders(e) {
        this.providerMap || (this.providerMap = {}), Object.keys(e).forEach(r => {
            if (typeof e[r] == "object") {
                const n = e[r];
                this.providerMap[r] = {
                    fn: n.fn,
                    hasDeepRefs: n.hasDeepRefs ?? !1
                };
                return
            }
            this.providerMap[r] = {
                fn: e[r]
            }
        }), this.providerMapKeys = Object.keys(this.providerMap), this.sync()
    }
    purgeProviders(e) {
        this.providerMap && (Object.keys(e).forEach(r => {
            this.providerMap[r] && delete this.providerMap[r]
        }), this.providerMapKeys = Object.keys(this.providerMap), this.sync())
    }
    on(e, r) {
        const n = this.callbackMap.get(e) ?? new Set;
        n.size || this.callbackMap.set(e, n), n.add(r)
    }
    off(e, r) {
        const n = this.callbackMap.get(e);
        n && n.delete(r)
    }
    emit(e, r) {
        var n, s;
        if (this.pausedEvents && this.pausedEvents.includes(e)) {
            (n = this.callbackMap.get("didEmitPausedEvent")) == null || n.forEach(a => a(e));
            return
        }(s = this.callbackMap.get(e)) == null || s.forEach(a => a(r))
    }
    onConnection(e) {
        if (e.status === "connected") {
            this.emit("didReconnect");
            return
        }
        this.emit("isReconnecting", e.attempt ?? 0)
    }
    onClientConnected(e) {
        e.role === "host" && e.reconnect && this.emit("hostDidReconnect")
    }
    onClientDisconnected(e) {
        e.role === "host" && this.emit("hostDidDisconnect")
    }
    onRoomLock() {
        this.emit("roomDidLock")
    }
    onRoomExit() {
        this.emit("roomDidExit")
    }
    onClientKicked() {
        var e;
        this.isKicked = !0, (e = this.watchStopHandler) == null || e.call(this), this.emit("wasKicked")
    }
    onSocketClose() {
        this.isKicked || this.emit("didDisconnect")
    }
}
const Gr = new Ete,
    hte = {
        install: (t, e) => {
            t.config.globalProperties.$setupEcast = r => {
                Gr.setWSClient(r.wsClient), r.wsClient.on("artifact", n => xo.add(n)), r.wsClient.on("connection", n => {
                    n.status === "connected" && Gr.setupWatcher()
                }), Gr.sync(), t.config.globalProperties.$ecast = Gr.wsClient, t.config.globalProperties.$ecastManager = Gr, t.config.globalProperties.$ecastValues = Gr.mappedValues, t.config.globalProperties.$ecastRoom = r.room, t.config.globalProperties.$ecastWelcome = r.welcome, t.config.globalProperties.$syncEcast = Gr.sync, t.config.globalProperties.$pauseEcastUpdates = Gr.pause, t.config.globalProperties.$resumeEcastUpdates = Gr.resume, t.mixin({
                    beforeCreate() {
                        this.$options.ecastKeys && Gr.addKeys(this.$options.ecastKeys), this.$options.ecastProviders && Gr.addProviders(this.$options.ecastProviders)
                    },
                    beforeDestroy() {
                        this.$options.ecastKeys && Gr.purgeKeys(this.$options.ecastKeys), this.$options.ecastProviders && Gr.purgeProviders(this.$options.ecastProviders)
                    }
                })
            }, e != null && e.wsClient && t.config.globalProperties.$setupEcast(e)
        }
    },
    __ = {
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
const jne = Wr({
        setup() {
            return {
                fatalError: As(__.fatal.error)
            }
        },
        computed: {
            message() {
                var n, s, a, l;
                const t = ((s = (n = this.fatalError) == null ? void 0 : n.event) == null ? void 0 : s.event_id) ?? "Unknown";
                let e = "";
                const r = (l = (a = this.fatalError) == null ? void 0 : a.hint) == null ? void 0 : l.originalException;
                return r ? typeof r == "string" ? e = r : e = r.message : e = "An unknown error occured", `Version:
${window.tv.manifest.loader.version}

Event ID:
${t}

${e}`
            }
        },
        methods: {
            onFeedbackClick() {
                var t, e;
                Hne({
                    id: ((e = (t = this.fatalError) == null ? void 0 : t.event) == null ? void 0 : e.event_id) ?? "Unknown"
                })
            }
        }
    }),
    Qo = t => ($o("data-v-d0abff79"), t = t(), Mo(), t),
    Xne = {
        class: "jbg fatal"
    },
    qne = {
        class: "constrain"
    },
    Yne = Qo(() => Te("a", {
        class: "logo",
        href: "/",
        "aria-label": "Jackbox Games Logo"
    }, null, -1)),
    zne = {
        class: "content"
    },
    Jne = Qo(() => Te("h1", null, "You have encountered an error", -1)),
    Zne = Qo(() => Te("p", null, "Something went wrong! But don't worry, you can try a few things to get going.", -1)),
    Qne = Qo(() => Te("ul", null, [Te("li", null, "Refresh the page"), Te("li", null, "Turn off adblockers or other browser extensions."), Te("li", null, "Check your connection to the Internet."), Te("li", null, "Make sure you're using an up-to-date browser."), Te("li", null, "If that doesn't work, let us know.")], -1)),
    eie = Qo(() => Te("hr", null, null, -1)),
    tie = {
        class: "error"
    };

function rie(t, e, r, n, s, a) {
    return Pe(), et("div", Xne, [Te("div", qne, [Yne, Te("div", zne, [Jne, Zne, Qne, Te("button", {
        onClick: e[0] || (e[0] = (...l) => t.onFeedbackClick && t.onFeedbackClick(...l))
    }, "Tell us what happened"), eie, Te("pre", tie, Wt(t.message), 1)])])])
}
const nie = Rr(jne, [
        ["render", rie],
        ["__scopeId", "data-v-d0abff79"]
    ]),
    _l = da({
        hasCrashed: !1
    }),
    iie = {
        install: t => {
            if (t.config.globalProperties.$handleEcastError) return;
            t.provide(__.fatal.error, rn(() => _l));
            const e = (r, n) => {
                var s, a;
                if (r instanceof bo.EcastEntityNotFound || r instanceof bo.EcastFilterError || r instanceof bo.EcastRateLimitExceeded || r instanceof Error && ((s = r.message) != null && s.includes("Socket not ready to send")) || r instanceof Error && ((a = r.message) != null && a.includes("No connection available"))) return console.warn(r);
                throw n ? console.error(n, r) : console.error(r), r
            };
            window.tv.onError = async (r, n) => {
                if (r.level === "error" && (_l.hasCrashed = !0, _l.event = r, _l.hint = n), t.config.globalProperties.$debugRecorder) return await t.config.globalProperties.$debugRecorder.sendToEcast()
            }, t.component("Fatal", nie), t.config.globalProperties.$handleEcastError = e
        }
    };
function Nx(t, e) {
    const r = t.global.locale,
        n = t.global.messages[r],
        s = Eie(n, e);
    return Array.isArray(s) || console.warn(`[i18nPlugin] Translation with key ${e} is not an array`), Bie(s)
}
const wie = {
        install: (t, e) => {
            t.directive("ts", (r, n) => {
                const s = Nx(e.i18n, n.value);
                r.textContent = s || ""
            }), t.config.globalProperties.$ts = function(n) {
                return Nx(e.i18n, n) || ""
            }, t.config.globalProperties.$messages = e.i18n.global.messages, t.config.globalProperties.$t = e.i18n.global.t, t.config.globalProperties.$tc = e.i18n.global.tc, t.config.globalProperties.$te = e.i18n.global.te, t.config.globalProperties.$tm = e.i18n.global.tm
        }
    },
    Kie = Wr({
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
    $ie = "main/@moderator/assets/cJZ5etop.png",
    Mie = "main/@moderator/assets/zfGFf4oR.png",
    kie = "main/@moderator/assets/7_tk-HxY.png",
    Gie = {
        key: 0,
        class: "image",
        src: $ie,
        alt: "Kicked"
    },
    Vie = {
        key: 1,
        class: "image",
        src: Mie,
        alt: "Thank You"
    },
    Fie = {
        key: 2,
        class: "image",
        src: kie,
        alt: "Error"
    },
    Wie = {
        class: "text"
    },
    Hie = {
        key: 3,
        class: "subtext"
    },
    jie = {
        class: "actions"
    };

function Xie(t, e, r, n, s, a) {
    const l = xa("bb");
    return Pe(), et("div", {
        class: Fr(["error-model", t.classes])
    }, [t.image === "tear" ? (Pe(), et("img", Gie)) : t.image === "moon" ? (Pe(), et("img", Vie)) : (Pe(), et("img", Fie)), an(Te("h3", Wie, null, 512), [
        [l, t.text]
    ]), t.subtext ? an((Pe(), et("h3", Hie, null, 512)), [
        [l, t.subtext]
    ]) : Pn("", !0), Te("div", jie, [an(Te("button", {
        onClick: e[0] || (e[0] = Ef(f => t.$emit("resolve"), ["prevent"]))
    }, null, 512), [
        [l, t.dismissText]
    ])])], 2)
}
const qie = Rr(Kie, [
        ["render", Xie],
        ["__scopeId", "data-v-420dd700"]
    ]),
    Yie = Wr({
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
    zie = {
        class: "text"
    },
    Jie = {
        key: 0,
        class: "subtext"
    },
    Zie = {
        class: "actions"
    },
    Qie = ["onClick"];

function ese(t, e, r, n, s, a) {
    const l = xa("bb");
    return Pe(), et("div", {
        class: Fr(["options-modal", t.classes])
    }, [an(Te("h3", zie, null, 512), [
        [l, t.text]
    ]), t.subtext ? an((Pe(), et("h3", Jie, null, 512)), [
        [l, t.subtext]
    ]) : Pn("", !0), Te("div", Zie, [(Pe(!0), et(qt, null, wp(t.options, (f, E) => an((Pe(), et("button", {
        key: E,
        class: Fr(f.classes),
        onClick: Ef(h => t.$emit("resolve", f.value), ["prevent"])
    }, null, 10, Qie)), [
        [l, f.text]
    ])), 128))])], 2)
}
const tse = Rr(Yie, [
        ["render", ese],
        ["__scopeId", "data-v-db592987"]
    ]),
    rse = Wr({
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
            show(t, e = {}, r = {}) {
                return this.props = e, this.classes = r.classes || "jbg", t === "Error" ? this.content = qie : t === "Options" ? this.content = tse : this.content = t, new Promise(n => {
                    this.resolve = n
                })
            },
            hide() {
                this.props = null, this.resolve && this.resolve()
            },
            onResolve(...t) {
                this.props = null, this.resolve(...t)
            },
            onBackgroundClick() {
                this.props = null, this.resolve()
            }
        }
    }),
    nse = {
        class: "sandbox"
    };

function ise(t, e, r, n, s, a) {
    return Pe(), tn(Fp, {
        name: "modal-transition"
    }, {
        default: Ip(() => [t.props ? (Pe(), et("div", {
            key: 0,
            class: Fr(["modal", t.classes]),
            onKeyup: e[0] || (e[0] = KB((...l) => t.onBackgroundClick && t.onBackgroundClick(...l), ["esc"])),
            onClick: e[1] || (e[1] = Ef((...l) => t.onBackgroundClick && t.onBackgroundClick(...l), ["self"]))
        }, [Te("div", nse, [t.content ? (Pe(), tn(CD(t.content), kp({
            key: 0,
            class: "content"
        }, t.props, {
            onResolve: t.onResolve
        }), null, 16, ["onResolve"])) : Pn("", !0)])], 34)) : Pn("", !0)]),
        _: 1
    })
}
const sse = Rr(rse, [
        ["render", ise],
        ["__scopeId", "data-v-2e99f2ab"]
    ]),
    ase = {
        install: t => {
            let e;
            const r = () => {
                    if (!e) throw new Error("No ModalComponent is registered");
                    return e.hide()
                },
                n = (a, l, f) => {
                    if (!e) throw new Error("No ModalComponent is registered");
                    return e.show(a, l, f)
                },
                s = a => {
                    e = a
                };
            t.component("Modal", sse), t.config.globalProperties.$hideModal = r, t.config.globalProperties.$showModal = n, t.config.globalProperties.$registerModal = s
        }
    };
_n("");
const ose = {
        GAME: "Game",
        PASSWORD: "PASSWORD"
    },
    use = {
        KICK: "Kick?",
        KICK_PLAYERS: "KICK PLAYERS",
        MODERATE: "Moderate",
        APPROVE_ALL: "Approve All",
        REJECT_ALL: "Reject All"
    },
    lse = {
        ROOM_DESTROYED: "Thanks for helping out!"
    },
    fse = {
        DISABLED: "Moderation Disabled",
        KICKED: "KICKED",
        UNSUPPORTED: "Moderation Unsupported",
        WAITING_FOR_SUBMISSIONS: "Waiting for submissions"
    },
    cse = {
        DISABLED: "The moderation setting for this game is turned off. Turn it on and restart the game to moderate content.",
        UNSUPPORTED: "{gameName} doesn't have anything to moderate, but thanks for wanting to help out!"
    },
    Ese = "Submitted by:",
    hse = {
        FORM: ose,
        ACTION: use,
        ERROR: lse,
        STATUS: fse,
        WARNING: cse,
        SUBMITTED_BY: Ese
    },
    Cse = {
        GAME: "Gra",
        PASSWORD: "HASŁO"
    },
    Ose = {
        KICK: "Wyrzucić?",
        KICK_PLAYERS: "WYRZUĆ GRACZY",
        MODERATE: "Moderuj",
        APPROVE_ALL: "Zatwierdź wszystko",
        REJECT_ALL: "Odrzuć wszystko"
    },
    Ise = {
        ROOM_DESTROYED: "Dzięki za pomoc!"
    },
    Nse = {
        DISABLED: "Moderacja wyłączona",
        KICKED: "WYRZUCONO",
        UNSUPPORTED: "Moderacja nieobsługiwana",
        WAITING_FOR_SUBMISSIONS: "Oczekiwanie na zgłoszenia"
    },
    Use = {
        DISABLED: "Moderacja dla tej gry jest wyłączona. Włącz ją i uruchom grę ponownie, aby móc moderować treści.",
        UNSUPPORTED: "{gameName} nie ma treści do moderowania, ale dzięki za chęć pomocy!"
    },
    Pse = "Wysłane przez:",
    Dse = {
        FORM: Cse,
        ACTION: Ose,
        ERROR: Ise,
        STATUS: Nse,
        WARNING: Use,
        SUBMITTED_BY: Pse
    },
    rae = {
        en: hse,
        pl: Dse
    },
    nae = Wr({
        components: {
            TextInput: dW
        },
        props: {
            game: Object,
            room: Object
        },
        emits: {
            connectionDidChange: t => !0,
            roomDidChange: t => !0
        },
        data() {
            return {
                codeLength: 4,
                code: "",
                passwordLength: 5,
                password: "",
                isConnecting: !1,
                api: new Li.APIClient({
                    host: Ui.serverUrl,
                    scheme: "https"
                }),
                roomNotFound: !1
            }
        },
        computed: {
            hasFormData() {
                return !(this.code.length !== this.codeLength || this.password.length !== this.passwordLength)
            },
            state() {
                var n, s;
                if (!this.room) return {
                    canSubmit: !1,
                    isEnabled: !1,
                    isSupported: !1,
                    statusKey: this.code.length === this.codeLength && this.roomNotFound ? "STATUS.ROOM_NOT_FOUND" : ""
                };
                const t = ((n = this.game) == null ? void 0 : n.features) ?? [],
                    e = t.includes("moderation") || t.includes("kicking"),
                    r = this.room.moderationEnabled;
                return e ? r ? {
                    canSubmit: this.hasFormData,
                    isEnabled: r,
                    isSupported: e,
                    statusText: ((s = this.game) == null ? void 0 : s.name) ?? "???"
                } : {
                    canSubmit: !1,
                    isEnabled: r,
                    isSupported: e,
                    statusKey: "STATUS.DISABLED"
                } : {
                    canSubmit: !1,
                    isEnabled: r,
                    isSupported: e,
                    statusKey: "STATUS.UNSUPPORTED"
                }
            }
        },
        beforeMount() {
            this.populateFromStorage()
        },
        methods: {
            async populateFromStorage() {
                Mt.isSupported && (this.code = (Mt.get("moderator-code") ?? "").toUpperCase(), this.password = (Mt.get("moderator-password") ?? "").toUpperCase(), this.code && await this.getRoomInfo(), this.room || (this.code = "", this.password = "", Mt.remove("moderator-code"), Mt.remove("moderator-password")))
            },
            onCodeInput() {
                const t = /\s/g;
                if (this.code = this.code.replace(t, "").trim().toUpperCase(), this.code.length !== this.codeLength) {
                    this.$emit("roomDidChange", null);
                    return
                }
                this.getRoomInfo()
            },
            onPasswordInput() {
                const t = /\s/g;
                this.password = this.password.replace(t, "").trim()
            },
            async onFormSubmit() {
                await this.connect()
            },
            async getRoomInfo() {
                this.roomNotFound = !1;
                try {
                    const t = await this.api.getRoom({
                        code: this.code
                    });
                    this.$emit("roomDidChange", t), this.$i18n.locale = t.locale
                } catch (t) {
                    console.warn(t), this.$emit("roomDidChange", null), this.roomNotFound = !0
                }
            },
            async connect() {
                if (this.isConnecting || !this.state.canSubmit) return;
                if (await this.getRoomInfo(), !this.room) return this.showError("ERROR.ROOM_NOT_FOUND");
                const t = {
                        host: this.room.host,
                        code: this.code.toUpperCase(),
                        name: "moderator",
                        password: this.password,
                        role: "moderator",
                        debug: "false"
                    },
                    e = new Li.WSClient(t);
                try {
                    this.isConnecting = !0;
                    const r = await e.connect();
                    this.$setupEcast({
                        room: this.room,
                        wsClient: e,
                        welcome: r
                    }), Mt.set("moderator-code", this.code), Mt.set("moderator-password", this.password), mf.moderatorConnected(this.room.appTag), this.$emit("connectionDidChange", !0)
                } catch (r) {
                    console.error("[moderator]", r), this.onConnectionError()
                }
                this.isConnecting = !1
            },
            onConnectionError() {
                this.showError("ERROR.GENERIC")
            },
            showError(t) {
                this.$showModal("Error", {
                    text: this.$t("ERROR.TITLE"),
                    subtext: this.$t(t),
                    dismissText: this.$t("ACTION.OK")
                })
            }
        }
    }),
    iae = t => ($o("data-v-98d50cef"), t = t(), Mo(), t),
    sae = {
        class: "constrain"
    },
    aae = {
        for: "roomcode"
    },
    oae = {
        key: 0,
        class: "status"
    },
    uae = {
        key: 1,
        class: "status"
    },
    lae = {
        for: "password"
    },
    fae = ["disabled"],
    cae = iae(() => Te("div", {
        class: "loading"
    }, null, -1)),
    Eae = {
        key: 0,
        class: "warning"
    },
    hae = {
        key: 1,
        class: "warning"
    };

function pae(t, e, r, n, s, a) {
    var E;
    const l = Vt("TextInput"),
        f = xa("t");
    return Pe(), et("div", sae, [Te("form", {
        autocomplete: "off",
        onSubmit: e[2] || (e[2] = Ef((...h) => t.onFormSubmit && t.onFormSubmit(...h), ["prevent"]))
    }, [Te("fieldset", null, [Te("label", aae, [Bn(Wt(t.$t("FORM.ROOM_CODE")) + " ", 1), t.state.statusKey ? an((Pe(), et("span", oae, null, 512)), [
        [f, t.state.statusKey]
    ]) : t.state.statusText ? (Pe(), et("span", uae, Wt(t.state.statusText), 1)) : Pn("", !0)]), ht(l, {
        id: "roomcode",
        modelValue: t.code,
        "onUpdate:modelValue": e[0] || (e[0] = h => t.code = h),
        type: "text",
        autocapitalize: "off",
        autocorrect: "off",
        autocomplete: "off",
        placeholder: t.$t("FORM.ROOM_CODE_PLACEHOLDER"),
        maxlength: t.codeLength,
        onInput: t.onCodeInput
    }, null, 8, ["modelValue", "placeholder", "maxlength", "onInput"]), an(Te("label", lae, null, 512), [
        [f, "FORM.PASSWORD"]
    ]), ht(l, {
        id: "password",
        modelValue: t.password,
        "onUpdate:modelValue": e[1] || (e[1] = h => t.password = h),
        type: "text",
        inputmode: "numeric",
        autocapitalize: "off",
        autocorrect: "off",
        autocomplete: "off",
        placeholder: t.$t("FORM.PASSWORD_PLACEHOLDER"),
        maxlength: t.passwordLength,
        onInput: t.onPasswordInput
    }, null, 8, ["modelValue", "placeholder", "maxlength", "onInput"]), Te("button", {
        type: "submit",
        class: Fr({
            connecting: t.isConnecting
        }),
        disabled: !t.state.canSubmit
    }, [an(Te("span", null, null, 512), [
        [f, "ACTION.MODERATE"]
    ]), cae], 10, fae)])], 32), t.room && !t.state.isSupported ? (Pe(), et("p", Eae, Wt(t.$t("WARNING.UNSUPPORTED", {
        gameName: ((E = t.game) == null ? void 0 : E.name) ?? "This game"
    })), 1)) : t.room && !t.state.isEnabled ? (Pe(), et("p", hae, Wt(t.$t("WARNING.DISABLED")), 1)) : Pn("", !0)])
}
const _ae = Rr(nae, [
        ["render", pae],
        ["__scopeId", "data-v-98d50cef"]
    ]),
    gae = {},
    Tae = {
        viewBox: "0 0 250 250"
    },
    Rae = Te("path", {
        class: "blast",
        d: `M66.19,181a5.82,5.82,0,0,0-3-11.16l-24.4,3.66,11.34-27.75-26.6-13.83L49,116.09,35.61,89.27l29.9,2.21L70.44,61.9
           l22.9,19.37,21.37-21,5.87,24a5.82,5.82,0,1,0,11.3-2.77L121.13,37.6,92.74,65.53,62.33,39.81,55.78,79.1,16.07,76.16
           l17.79,35.63L0,132.76l35.34,18.37L20.27,188l44.64-6.7A5.36,5.36,0,0,0,66.19,181Z`
    }, null, -1),
    dae = Te("path", {
        class: "boot",
        d: `M175.43,180l-51.6-15.27a35,35,0,0,1-17.69-12l-24.2-30.81-8.41,6.61a6.2,6.2,0,0,0-1,8.71L96.7,168.08
           a41.34,41.34,0,0,0,20.7,14.08c10.7,3.2,26.15,7.67,38,10.57,10.15,2.47,17.14-.26,21.59-3.59A5.17,5.17,0,0,0,175.43,180Z
           m74.19-40.48c-27.16-3.78-37.67-21.22-41.74-33.73A10.37,10.37,0,0,0,192.77,100l-7.45,4.37,11.59,16.33
           a5.17,5.17,0,0,1-1.23,7.21,4.81,4.81,0,0,1-1.09.59,5.17,5.17,0,0,1-6.12-1.81l-12.11-17.06-8.22,4.83,9.77,13.77
           a5.16,5.16,0,0,1-1.22,7.21,5,5,0,0,1-1.09.59,5.17,5.17,0,0,1-6.12-1.81l-10.3-14.51L153,123.36
           c-25.15-32-58.39-10.82-64.48-6.5l24.18,30.78a26.78,26.78,0,0,0,13.52,9.18L241.85,191
           C252.6,165.67,249.62,139.54,249.62,139.54Zm-64.75,56.8a4.13,4.13,0,0,0,2.79,5c7.38,2.23,20,6.13,37.08,10.84
           a5.2,5.2,0,0,0,5.37-1.67,74.42,74.42,0,0,0,8.1-11.95l-50-14.92Z`
    }, null, -1),
    mae = [Rae, dae];

function xae(t, e) {
    return Pe(), et("svg", Tae, mae)
}
const Aae = Rr(gae, [
        ["render", xae]
    ]),
    Sae = Wr({
        components: {
            KickSVG: Aae
        },
        props: {
            hasStarted: Boolean
        },
        data() {
            return {
                shouldShow: !1,
                players: []
            }
        },
        beforeMount() {
            this.processWelcomeMessage(), this.bindConnectedEvent(), this.bindKickedEvent()
        },
        methods: {
            processWelcomeMessage() {
                Object.values(this.$ecastWelcome.here).forEach(t => {
                    t.roles.player && this.players.push({
                        name: t.roles.player.name,
                        id: t.id,
                        isKicked: t.roles.kicked
                    })
                })
            },
            bindConnectedEvent() {
                this.$ecast.on("client/connected", t => {
                    t.role !== "player" || this.players.find(r => r.id === t.id) || this.players.push({
                        name: t.name,
                        id: t.id,
                        isKicked: !1
                    })
                })
            },
            bindKickedEvent() {
                this.$ecast.on("client/kicked", t => {
                    this.setKicked(t.id, !0)
                })
            },
            setKicked(t, e) {
                const r = this.players.find(n => n.id === t);
                r && (r.isKicked = e)
            },
            onKickToggleClick() {
                this.shouldShow = !this.shouldShow
            },
            async onKickClick(t) {
                t.isKicked = !0;
                try {
                    await this.$ecast.kick(t.id, !0), mf.playerKicked(this.$ecastRoom.appTag, !this.hasStarted)
                } catch (e) {
                    t.isKicked = !1, this.$handleEcastError(e)
                }
            }
        }
    }),
    CL = t => ($o("data-v-23c5a82b"), t = t(), Mo(), t),
    vae = ["disabled"],
    bae = CL(() => Te("svg", {
        viewBox: "0 0 23 40",
        class: "tab left"
    }, [Te("path", {
        "vector-effect": "non-scaling-stroke",
        d: "M23,0A16.41,16.41,0,0,0,7.18,12.08L0,40"
    })], -1)),
    Lae = CL(() => Te("svg", {
        viewBox: "0 0 23 40",
        class: "tab right"
    }, [Te("path", {
        "vector-effect": "non-scaling-stroke",
        d: "M23,0A16.41,16.41,0,0,0,7.18,12.08L0,40"
    })], -1)),
    yae = {
        class: "players"
    },
    Cae = {
        class: "name"
    },
    Oae = ["onClick"],
    Iae = {
        key: 1,
        class: "kick-message"
    };

function Nae(t, e, r, n, s, a) {
    const l = Vt("KickSVG"),
        f = xa("t");
    return Pe(), et("div", {
        class: Fr(["kicking", {
            showing: t.shouldShow
        }])
    }, [Te("button", {
        class: "kick-toggle",
        disabled: !t.players.length,
        onClick: e[0] || (e[0] = (...E) => t.onKickToggleClick && t.onKickToggleClick(...E))
    }, [bae, ht(l, {
        class: "icon"
    }), Bn(" " + Wt(t.$t("ACTION.KICK_PLAYERS")) + " ", 1), Lae], 8, vae), Te("div", yae, [(Pe(!0), et(qt, null, wp(t.players, E => (Pe(), et("div", {
        key: E.id,
        class: Fr(["player", {
            kicked: E.isKicked
        }])
    }, [Te("span", Cae, Wt(E.name), 1), E.isKicked ? an((Pe(), et("span", Iae, null, 512)), [
        [f, "STATUS.KICKED"]
    ]) : (Pe(), et("button", {
        key: 0,
        class: "kick-button",
        onClick: h => t.onKickClick(E)
    }, Wt(t.$t("ACTION.KICK")), 9, Oae))], 2))), 128))])], 2)
}
const Uae = Rr(Sae, [
        ["render", Nae],
        ["__scopeId", "data-v-23c5a82b"]
    ]),
    Pae = {},
    Dae = {
        viewBox: "0 0 180 180"
    },
    Bae = Te("path", {
        d: `M117.12,75.42c-11.42,2-18.38,14.83-10.11,24.06,12.27,8.19,40.38,6,53.76,3h0c10.55-1.73,16.29-14.82,9.27-23.15C157.27,
           69.89,132.14,72.54,117.12,75.42Zm-16.5,68.29c0-5.8,1.39-10.22,4.33-13.46-6.5-5.1-6.62-19.81-.7-25.51-14.2-12.23-4.1-33.27,
           13.21-35.48-10.8-7.93-.89-25.71-.89-40.06,0-10.95-9.33-29.2-26.16-29.2-24.14,0-9,18.16-9,40.87,0,19.64-19.87,25.38-30.12,
           43.44h0A43.87,43.87,0,0,0,46.66,96a3.14,3.14,0,0,1-3.47,2.41c-6.22-2.13.35-11.1,1.61-14.61l-23.15-2.7S6.24,89.35,6.24,
           121.75c0,42.53,21.9,44.33,21.9,44.33l25.92-6a47.93,47.93,0,0,1-6.94-8.7c-2.59-4.08,4-7.89,6.27-3.64a48,48,0,0,0,8.45,11
           h0c9,8.7,22.8,15.31,44.07,17.15-4-5.07-3.2-15.46.35-20.14A15.14,15.14,0,0,1,100.62,143.71Zm68-.77
           c.09-3.78-1-7.83-4.35-10-10.41,3-44,2.87-52.31-.87-10,6.84-6.18,20.92,5.87,23h0C128.47,157.22,169.5,163.23,168.64,142.94Z
           m5-26.29c.32-5.15-2.16-10.07-7.08-12.15-10.5,5.63-43.64,5.5-55.2,1.72-10.61,7.52-5.93,23,7.26,23.59h0c8.07,1.64,30.09,1.72,
           39.13.39h0C165.52,129.58,174.77,125.93,173.67,116.65Zm-16.94,43.26c-13.36,2.08-31.35,2.34-44-2.48-11.35,13.94,3.9,22.29,
           18.17,22.21C144,181.28,166.76,177.74,156.73,159.91Z`
    }, null, -1),
    wae = [Bae];

function Kae(t, e) {
    return Pe(), et("svg", Dae, wae)
}
const eu = Rr(Pae, [
        ["render", Kae]
    ]),
    $ae = {},
    Mae = {
        viewBox: "0 0 180 180"
    },
    kae = Te("path", {
        d: `M170,100.64c7-8.33,1.28-21.42-9.27-23.15h0c-13.38-3-41.49-5.16-53.76,3-8.27,9.23-1.31,22.11,10.11,24.06
           C132.14,107.46,157.27,110.11,170,100.64ZM106.26,24.25c-3.55-4.68-4.37-15.07-.35-20.14C84.64,6,70.82,12.56,61.84,21.26
           h0a48,48,0,0,0-8.45,11c-2.29,4.25-8.86.44-6.27-3.64a47.93,47.93,0,0,1,6.94-8.7l-25.92-6s-21.9,1.8-21.9,44.33
           c0,32.4,15.41,40.63,15.41,40.63l23.15-2.7C43.54,92.67,37,83.7,43.19,81.57A3.14,3.14,0,0,1,46.66,84a43.87,43.87,0,0,0,4.58,
           11.71h0c10.25,18.06,30.12,23.8,30.12,43.44,0,22.71-15.1,40.87,9,40.87,16.83,0,26.16-18.25,26.16-29.2,
           0-14.35-9.91-32.13.89-40.06-17.31-2.21-27.41-23.25-13.21-35.48-5.92-5.7-5.8-20.41.7-25.51-2.94-3.24-4.33-7.66-4.33-13.46
           A15.14,15.14,0,0,1,106.26,24.25Zm11.59.7h0C105.8,27,102,41.08,112,47.92c8.35-3.74,41.9-3.84,52.31-.87,3.38-2.16,4.44-6.21,
           4.35-10C169.5,16.77,128.47,22.78,117.85,25ZM157.78,49.8h0c-9-1.33-31.06-1.25-39.13.39h0c-13.19.56-17.87,16.07-7.26,23.59,
           11.56-3.78,44.7-3.91,55.2,1.72,4.92-2.08,7.4-7,7.08-12.15C174.77,54.07,165.52,50.42,157.78,49.8ZM130.88.36c-14.27-.08-29.52,
           8.27-18.17,22.21,12.67-4.82,30.66-4.56,44-2.48C166.76,2.26,144-1.28,130.88.36Z`
    }, null, -1),
    Gae = [kae];

function Vae(t, e) {
    return Pe(), et("svg", Mae, Gae)
}
const tu = Rr($ae, [
        ["render", Vae]
    ]),
    Fae = Wr({
        components: {
            ApproveSVG: eu,
            RejectSVG: tu
        },
        props: {
            item: Object
        },
        emits: {
            acceptWasClicked: t => !0,
            rejectWasClicked: t => !0
        },
        mounted() {
            const t = this.$refs.stage,
                e = this.item.value.size.width,
                r = this.item.value.frames || [],
                n = new Vv(t, {
                    width: this.item.value.size.width * r.length,
                    height: this.item.value.size.height
                }),
                s = n.canvas.renderCanvas.getContext("2d");
            s && r.forEach((a, l) => {
                s.save(), s.translate(e * l, 0), n.canvas.parseLines(a).forEach(E => n.canvas.drawLine(s, E)), s.restore()
            })
        }
    }),
    Wae = {
        ref: "stage",
        class: "stage"
    },
    Hae = {
        class: "name"
    },
    jae = {
        class: "item-buttons"
    },
    Xae = ["disabled"],
    qae = ["disabled"];

function Yae(t, e, r, n, s, a) {
    const l = Vt("ApproveSVG"),
        f = Vt("RejectSVG");
    return Pe(), et(qt, null, [Te("div", Wae, null, 512), Te("p", Hae, [Bn(Wt(t.$t("SUBMITTED_BY")) + " ", 1), Te("span", null, Wt(t.item.name), 1)]), Te("div", jae, [Te("button", {
        "aria-label": "accept",
        class: "accept",
        disabled: t.item.status !== "pending",
        onClick: e[0] || (e[0] = E => t.$emit("acceptWasClicked", t.item))
    }, [ht(l, {
        class: "icon"
    })], 8, Xae), Te("button", {
        "aria-label": "reject",
        class: "reject",
        disabled: t.item.status === "rejected",
        onClick: e[1] || (e[1] = E => t.$emit("rejectWasClicked", t.item))
    }, [ht(f, {
        class: "icon"
    })], 8, qae)])], 64)
}
const zae = Rr(Fae, [
        ["render", Yae],
        ["__scopeId", "data-v-9edf792e"]
    ]),
    Jae = Wr({
        components: {
            ApproveSVG: eu,
            RejectSVG: tu
        },
        props: {
            item: Object
        },
        emits: {
            acceptWasClicked: t => !0,
            rejectWasClicked: t => !0
        },
        data() {
            return {
                canvas: null
            }
        },
        computed: {
            itemSrc() {
                return this.canvas ? this.canvas.renderImage() : ""
            }
        },
        async beforeCreate() {
            !this.item.value.doodle.live && !this.item.value.doodle.lines.length && await this.$ecast.getDoodle(this.item.value.doodle.key)
        },
        mounted() {
            this.canvas = new _W(document.createElement("canvas"), this.item.value.doodle)
        }
    }),
    Zae = ["src"],
    Qae = {
        class: "name"
    },
    eoe = {
        class: "item-buttons"
    },
    toe = ["disabled"],
    roe = ["disabled"];

function noe(t, e, r, n, s, a) {
    const l = Vt("ApproveSVG"),
        f = Vt("RejectSVG");
    return Pe(), et(qt, null, [Te("div", {
        class: "stage",
        style: rf({
            background: t.item.value.background
        })
    }, [Te("img", {
        src: t.itemSrc,
        alt: ""
    }, null, 8, Zae)], 4), Te("p", Qae, [Bn(Wt(t.$t("SUBMITTED_BY")) + " ", 1), Te("span", null, Wt(t.item.name), 1)]), Te("div", eoe, [Te("button", {
        "aria-label": "accept",
        class: "accept",
        disabled: t.item.status !== "pending",
        onClick: e[0] || (e[0] = E => t.$emit("acceptWasClicked", t.item))
    }, [ht(l, {
        class: "icon"
    })], 8, toe), Te("button", {
        "aria-label": "reject",
        class: "reject",
        disabled: t.item.status === "rejected",
        onClick: e[1] || (e[1] = E => t.$emit("rejectWasClicked", t.item))
    }, [ht(f, {
        class: "icon"
    })], 8, roe)])], 64)
}
const ioe = Rr(Jae, [
        ["render", noe],
        ["__scopeId", "data-v-e1399247"]
    ]),
    soe = Wr({
        components: {
            ApproveSVG: eu,
            RejectSVG: tu
        },
        props: {
            item: Object
        },
        emits: {
            acceptWasClicked: t => !0,
            rejectWasClicked: t => !0
        },
        mounted() {
            const t = this.$refs.stage,
                e = new Vv(t, {
                    width: this.item.value.size.width,
                    height: this.item.value.size.height
                }),
                r = e.canvas.parseLines(this.item.value.lines),
                n = e.canvas.renderCanvas.getContext("2d");
            n && r.forEach(s => e.canvas.drawLine(n, s))
        }
    }),
    aoe = {
        ref: "stage",
        class: "stage"
    },
    ooe = {
        class: "name"
    },
    uoe = {
        class: "item-buttons"
    },
    loe = ["disabled"],
    foe = ["disabled"];

function coe(t, e, r, n, s, a) {
    const l = Vt("ApproveSVG"),
        f = Vt("RejectSVG");
    return Pe(), et(qt, null, [Te("div", aoe, null, 512), Te("p", ooe, [Bn(Wt(t.$t("SUBMITTED_BY")) + " ", 1), Te("span", null, Wt(t.item.name), 1)]), Te("div", uoe, [Te("button", {
        "aria-label": "accept",
        class: "accept",
        disabled: t.item.status !== "pending",
        onClick: e[0] || (e[0] = E => t.$emit("acceptWasClicked", t.item))
    }, [ht(l, {
        class: "icon"
    })], 8, loe), Te("button", {
        "aria-label": "reject",
        class: "reject",
        disabled: t.item.status === "rejected",
        onClick: e[1] || (e[1] = E => t.$emit("rejectWasClicked", t.item))
    }, [ht(f, {
        class: "icon"
    })], 8, foe)])], 64)
}
const Eoe = Rr(soe, [
        ["render", coe],
        ["__scopeId", "data-v-77738b81"]
    ]),
    hoe = Wr({
        components: {
            ApproveSVG: eu,
            RejectSVG: tu
        },
        props: {
            item: Object
        },
        emits: {
            acceptWasClicked: t => !0,
            rejectWasClicked: t => !0
        },
        methods: {
            htmlUnescape(t) {
                return Ui.htmlUnescape(t)
            }
        }
    }),
    poe = {
        class: "value"
    },
    _oe = {
        class: "name"
    },
    goe = {
        class: "item-buttons"
    },
    Toe = ["disabled"],
    Roe = ["disabled"];

function doe(t, e, r, n, s, a) {
    const l = Vt("ApproveSVG"),
        f = Vt("RejectSVG");
    return Pe(), et(qt, null, [Te("p", poe, Wt(t.htmlUnescape(t.item.value)), 1), Te("p", _oe, [Bn(Wt(t.$t("SUBMITTED_BY")) + " ", 1), Te("span", null, Wt(t.item.name), 1)]), Te("div", goe, [Te("button", {
        "aria-label": "accept",
        class: "accept",
        disabled: t.item.status !== "pending",
        onClick: e[0] || (e[0] = E => t.$emit("acceptWasClicked", t.item))
    }, [ht(l, {
        class: "icon"
    })], 8, Toe), Te("button", {
        "aria-label": "reject",
        class: "reject",
        disabled: t.item.status === "rejected",
        onClick: e[1] || (e[1] = E => t.$emit("rejectWasClicked", t.item))
    }, [ht(f, {
        class: "icon"
    })], 8, Roe)])], 64)
}
const moe = Rr(hoe, [
        ["render", doe]
    ]),
    xoe = Wr({
        components: {
            Kicking: Uae,
            AnimationItem: zae,
            DoodleItem: ioe,
            DrawingItem: Eoe,
            TextItem: moe,
            ApproveSVG: eu,
            RejectSVG: tu
        },
        props: {
            items: {
                default () {
                    return []
                },
                type: Array
            },
            isConnected: Boolean,
            hasStarted: Boolean,
            game: Object,
            room: Object
        },
        ecastProviders: {
            items: {
                hasDeepRefs: !0,
                fn: t => {
                    const e = [];
                    return Object.keys(t).forEach(r => {
                        const n = r.split(":");
                        if (n[0] !== "moderate") return;
                        const s = n[1];
                        if (!["animation", "doodle", "drawing", "text"].includes(s)) return;
                        const a = {
                            key: r,
                            type: s,
                            status: t[r].status,
                            name: t[r].name,
                            value: t[r].value,
                            context: ""
                        };
                        t[r].context && (t[r].context.bb ? a.context = t[r].context.bb : t[r].context.html ? a.context = Ui.htmlTagsToBBCode(t[r].context.html, [
                            ["i", "i"]
                        ]) : t[r].context.text ? a.context = t[r].context.text : typeof t[r].context == "string" && (a.context = t[r].context)), e.push(a)
                    }), e
                }
            }
        },
        data() {
            return {}
        },
        computed: {
            hasKicking() {
                var t;
                return (t = this.game) != null && t.features ? this.game.features.includes("kicking") : !1
            },
            hasModeration() {
                var t;
                return (t = this.game) != null && t.features ? this.game.features.includes("moderation") : !0
            },
            pendingItems() {
                return this.items.filter(t => t.status === "pending")
            }
        },
        methods: {
            htmlUnescape(t) {
                return Ui.htmlUnescape(t)
            },
            onAcceptAllClick() {
                this.updateStatus(this.pendingItems, "accepted")
            },
            onRejectAllClick() {
                this.updateStatus(this.pendingItems, "rejected")
            },
            onAcceptClick(t) {
                t.status === "pending" && this.updateStatus([t], "accepted")
            },
            onRejectClick(t) {
                t.status !== "rejected" && this.updateStatus([t], "rejected")
            },
            async updateStatus(t, e) {
                try {
                    const r = t.map(n => {
                        const s = this.$ecast.entities[n.key].val;
                        return s.status = e, this.$ecast.updateObject(n.key, s)
                    });
                    await Promise.all(r)
                } catch (r) {
                    console.error("[Moderation] unable to update moderation entities", r)
                }
                try {
                    await this.$ecast.mail(1, {
                        id: t.map(r => r.key),
                        status: e
                    })
                } catch (r) {
                    console.error("[Moderation] unable to notify host by mail", r)
                }
                t.forEach(() => {
                    mf.itemModerated(this.room.appTag, e === "rejected")
                }), this.$syncEcast()
            }
        }
    }),
    Aoe = t => ($o("data-v-e8c19314"), t = t(), Mo(), t),
    Soe = {
        class: "constrain"
    },
    voe = {
        class: "top"
    },
    boe = {
        class: "alls"
    },
    Loe = ["disabled"],
    yoe = ["disabled"],
    Coe = {
        key: 0,
        class: "empty"
    },
    Ooe = {
        class: "empty-text"
    },
    Ioe = Aoe(() => Te("div", {
        class: "loading disabled"
    }, null, -1)),
    Noe = {
        key: 0,
        class: "context"
    };

function Uoe(t, e, r, n, s, a) {
    var U;
    const l = Vt("Kicking"),
        f = Vt("ApproveSVG"),
        E = Vt("RejectSVG"),
        h = Vt("AnimationItem"),
        _ = Vt("DoodleItem"),
        R = Vt("DrawingItem"),
        T = Vt("TextItem"),
        v = xa("t"),
        C = xa("bb");
    return Pe(), et("div", Soe, [Te("div", voe, [Te("p", null, [Te("span", null, Wt(t.$t("FORM.GAME")) + ":", 1), Bn(Wt(((U = t.game) == null ? void 0 : U.name) ?? "???"), 1)])]), t.hasKicking ? (Pe(), tn(l, {
        key: 0,
        class: Fr({
            expand: !t.hasModeration
        }),
        "has-started": t.hasStarted
    }, null, 8, ["class", "has-started"])) : Pn("", !0), t.hasModeration ? (Pe(), et(qt, {
        key: 1
    }, [Te("div", boe, [Te("button", {
        class: "all accept",
        disabled: !t.pendingItems.length,
        onClick: e[0] || (e[0] = (...B) => t.onAcceptAllClick && t.onAcceptAllClick(...B))
    }, [ht(f, {
        class: "icon"
    }), Bn(" " + Wt(t.$t("ACTION.APPROVE_ALL")), 1)], 8, Loe), Te("button", {
        class: "all reject",
        disabled: !t.pendingItems.length,
        onClick: e[1] || (e[1] = (...B) => t.onRejectAllClick && t.onRejectAllClick(...B))
    }, [ht(E, {
        class: "icon"
    }), Bn(" " + Wt(t.$t("ACTION.REJECT_ALL")), 1)], 8, yoe)]), t.items.length ? (Pe(), tn(OB, {
        key: 1,
        name: "items",
        tag: "div",
        class: "items"
    }, {
        default: Ip(() => [(Pe(!0), et(qt, null, wp(t.items, B => (Pe(), et("div", {
            key: B.key,
            class: Fr(["item text", B.status])
        }, [B.context ? an((Pe(), et("p", Noe, null, 512)), [
            [C, t.htmlUnescape(B.context)]
        ]) : Pn("", !0), B.type === "animation" ? (Pe(), tn(h, {
            key: 1,
            item: B,
            onAcceptWasClicked: t.onAcceptClick,
            onRejectWasClicked: t.onRejectClick
        }, null, 8, ["item", "onAcceptWasClicked", "onRejectWasClicked"])) : B.type === "doodle" ? (Pe(), tn(_, {
            key: 2,
            item: B,
            onAcceptWasClicked: t.onAcceptClick,
            onRejectWasClicked: t.onRejectClick
        }, null, 8, ["item", "onAcceptWasClicked", "onRejectWasClicked"])) : B.type === "drawing" ? (Pe(), tn(R, {
            key: 3,
            item: B,
            onAcceptWasClicked: t.onAcceptClick,
            onRejectWasClicked: t.onRejectClick
        }, null, 8, ["item", "onAcceptWasClicked", "onRejectWasClicked"])) : B.type === "text" ? (Pe(), tn(T, {
            key: 4,
            item: B,
            onAcceptWasClicked: t.onAcceptClick,
            onRejectWasClicked: t.onRejectClick
        }, null, 8, ["item", "onAcceptWasClicked", "onRejectWasClicked"])) : Pn("", !0)], 2))), 128))]),
        _: 1
    })) : (Pe(), et("div", Coe, [an(Te("p", Ooe, null, 512), [
        [v, "STATUS.WAITING_FOR_SUBMISSIONS"]
    ]), Ioe]))], 64)) : Pn("", !0)])
}
const Poe = Rr(xoe, [
        ["render", Uoe],
        ["__scopeId", "data-v-e8c19314"]
    ]),
    Doe = Wr({
        name: "@moderator",
        components: {
            Connect: _ae,
            Moderate: Poe
        },
        props: {
            items: {
                default: () => [],
                type: Array
            }
        },
        setup() {
            return {
                fatalError: As(__.fatal.error)
            }
        },
        data() {
            return {
                isConnected: !1,
                hasConnected: !1,
                hasStarted: !1,
                theme: Mt.get("preference:theme") || "device",
                room: null
            }
        },
        computed: {
            ecastValues() {
                return this.$ecastValues ? this.$ecastValues : null
            },
            classes() {
                return [`locale-${this.$i18n.locale}`, `theme-${this.theme}`]
            },
            game() {
                return this.room ? fS(this.room.appTag) ?? null : null
            },
            shouldShowFatal() {
                var t;
                return ((t = this.fatalError) == null ? void 0 : t.hasCrashed) ?? !1
            }
        },
        beforeMount() {
            window.addEventListener("storage", this.onStorageChange)
        },
        beforeUnmount() {
            window.removeEventListener("storage", this.onStorageChange)
        },
        methods: {
            onStorageChange(t) {
                t.key === "tv:preference:theme" && (this.theme = Mt.get("preference:theme") || "device")
            },
            onConnectionDidChange(t) {
                !this.hasConnected && t && (this.hasConnected = !0, this.$ecastManager.on("roomDidExit", () => {
                    this.onRoomExit()
                }), this.$ecastManager.on("didDisconnect", () => {
                    this.onSocketClose()
                }), this.$ecastManager.on("roomDidLock", this.onRoomLock), this.hasStarted = this.$ecastRoom.locked), this.isConnected = t
            },
            onRoomDidChange(t) {
                this.room = t
            },
            async onRoomExit() {
                Mt.remove("moderator-code"), await this.$showModal("Error", {
                    text: this.$t("ERROR.ROOM_DISCONNECTED"),
                    subtext: this.$t("ERROR.ROOM_DESTROYED"),
                    dismissText: this.$t("ACTION.OK")
                }), window.location.reload()
            },
            async onSocketClose() {
                Mt.remove("moderator-code"), await this.$showModal("Error", {
                    text: this.$t("ERROR.DISCONNECTED"),
                    dismissText: this.$t("ACTION.OK")
                }), window.location.reload()
            },
            onRoomLock() {
                this.hasStarted = !0
            }
        }
    }),
    Boe = t => ($o("data-v-3d1fbf1a"), t = t(), Mo(), t),
    woe = Boe(() => Te("header", {
        class: "header"
    }, [Te("div", {
        class: "logo"
    })], -1));

function Koe(t, e, r, n, s, a) {
    const l = Vt("Fatal"),
        f = Vt("Connect"),
        E = Vt("Moderate"),
        h = Vt("Modal");
    return t.shouldShowFatal ? (Pe(), tn(l, {
        key: 0
    })) : (Pe(), et("div", {
        key: 1,
        class: Fr(["jbg schemable moderator", t.classes])
    }, [woe, t.hasConnected ? (Pe(), tn(E, kp({
        key: 1
    }, t.ecastValues, {
        game: t.game,
        room: t.room,
        "is-connected": t.isConnected,
        "has-started": t.hasStarted
    }), null, 16, ["game", "room", "is-connected", "has-started"])) : (Pe(), tn(f, {
        key: 0,
        game: t.game,
        room: t.room,
        onConnectionDidChange: t.onConnectionDidChange,
        onRoomDidChange: t.onRoomDidChange
    }, null, 8, ["game", "room", "onConnectionDidChange", "onRoomDidChange"])), ht(h)], 2))
}
const $oe = Rr(Doe, [
    ["render", Koe],
    ["__scopeId", "data-v-3d1fbf1a"]
]);
window.tv.register({
    mount: t => {
        var s, a;
        let e = kB($oe);
        e.config.unwrapInjectedRef = !0;
        let r;
        (s = t.room) != null && s.locale && (r = t.room.locale), (a = t.match) != null && a.params.locale && (r = t.match.params.locale), pa.set(r);
        const n = nK({
            fallbackLocale: "en",
            locale: pa.locale,
            messages: pa.mergeMessages(I6, rae, pW)
        });
        return e.use(gz), e.use(hte), e.use(iie), e.use(n), e.use(wie, {
            i18n: n
        }), e.use(ase), e.mount("#app"), () => {
            e.unmount(), e = null
        }
    },
    info: t => ({
        tag: "@moderator",
        version: t.version,
        type: t.type,
        branch: t.branch
    })
});
//# sourceMappingURL=22ccNSAK.js.map
