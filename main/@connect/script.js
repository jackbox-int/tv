import * as VueLib from "https://esm.sh/vue@3.4.21";
import { createI18n as createVueI18n } from "https://esm.sh/vue-i18n@9.11.0";
import { register as registerSwiperElements } from "https://esm.sh/swiper@11.1.4/element/bundle";
import mixpanel from "https://esm.sh/mixpanel-browser@2.48.1";
import merge from "https://esm.sh/lodash-es@4.17.21/merge";
import get from "https://esm.sh/lodash-es@4.17.21/get";
import sample from "https://esm.sh/lodash-es@4.17.21/sample";
import * as CookieConsent from "https://esm.sh/vanilla-cookieconsent@3.0.1";
import * as Sentry from "https://esm.sh/@sentry/browser@7.120.4";

const {
    createApp: cK,
    defineComponent: cr,
    inject: Qs,
    ref: vn,
    ref: Hs,
    reactive: Mc,
    openBlock: Le,
    createElementBlock: Oe,
    createElementVNode: ve,
    createVNode: Vt,
    createBlock: Pi,
    createCommentVNode: gt,
    createTextVNode: ds,
    Transition: jc,
    resolveComponent: un,
    resolveDirective: Eo,
    withDirectives: br,
    withKeys: so,
    withModifiers: yn,
    Fragment: qt,
    renderList: gs,
    toDisplayString: Je,
    normalizeClass: Vr,
    normalizeStyle: Dc,
    mergeProps: my,
    withCtx: Gc,
    resolveDynamicComponent: BM,
    createStaticVNode: v$,
    pushScopeId: zl,
    popScopeId: ql
} = VueLib;
const Xk = createVueI18n;
const n3 = registerSwiperElements;
const Vb = mixpanel;
const d6 = merge;
const Tte = { install: (app, options) => { app.config.globalProperties.$cc = CookieConsent; CookieConsent.run?.(options); } };
const dse = (options = {}) => Sentry.showReportDialog(options);
const vg = {
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

var BB = Object.defineProperty;
var MB = (t, e, r) => e in t ? BB(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[e] = r;
var Xn = (t, e, r) => (MB(t, typeof e != "symbol" ? e + "" : e, r), r);
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function n(i) {
        if (i.ep) return;
        i.ep = !0;
        const s = r(i);
        fetch(i.href, s)
    }
})();
var It = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Qc(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}

function i3(t) {
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
        var i = Object.getOwnPropertyDescriptor(t, n);
        Object.defineProperty(r, n, i.get ? i : {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        })
    }), r
}
class la {
    static setup() {
        this.isSetup = !0, gtag("config", "G-V1QJVQMYF1", {
            send_page_view: !1
        }), Vb.init("2e284873b7269f13b850ac994abfd848", {
            debug: "false"
        })
    }
    static ga(e, r) {
        this.isSetup || this.setup(), gtag("event", e, r)
    }
    static mp(e, r) {
        this.isSetup || this.setup(), Vb.track(e, r)
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
Xn(la, "isSetup", !1);
const N3 = [{
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
        name: "Dirty Drawful",
        tag: "drawful3",
        wrapper: "vue",
        isPublic: !1,
        directory: "ppad/drawful3",
        categoryId: "Drawful3Game",
        features: ["moderation", "kicking"]
    }, {
        name: "Let Me Finish",
        tag: "captcha",
        wrapper: "vue",
        isPublic: !1,
        directory: "ppad/captcha",
        categoryId: "CAPTCHAGame",
        features: ["moderation", "kicking"]
    }],
    eu = t => N3.find(e => e.tag === t || e.galleryId === t || e.categoryId === t);

class qs {
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
        return d6(e[0], ...e)
    }
}
Xn(qs, "locale"), Xn(qs, "supported", ["en"]);
const Za = class Za {
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
        return r.reduce((n, i) => (n.replaceAll(`<${i[0]}>`, `[${i[1]}]`), n.replaceAll(`</${i[0]}>`, `</${i[1]}>`), n), e)
    }
    static hexToRgb(e) {
        const r = new ArrayBuffer(4);
        new DataView(r).setUint32(0, parseInt(e.replace("#", ""), 16), !1);
        const i = new Uint8Array(r);
        return `${i[1]},${i[2]},${i[3]}`
    }
    static adjustColor(e, r) {
        let n = !1,
            i = e;
        i[0] === "#" && (i = i.slice(1), n = !0);
        const s = parseInt(i, 16),
            o = Math.min(Math.max(0, (s >> 16) * r), 255),
            f = Math.min(Math.max(0, (s >> 8 & 255) * r), 255);
        let p = (Math.min(Math.max(0, (s & 255) * r), 255) | f << 8 | o << 16).toString(16);
        for (; p.length < i.length;) p = `0${p}`;
        return (n ? "#" : "") + p
    }
    static isInTolerance(e, r, n) {
        return !(Math.abs(e.x - r.x) < n || Math.abs(e.y - r.y) > n)
    }
    static getDistanceBetweenPoints(e, r) {
        const n = [e.x - r.x, e.y - r.y],
            i = Math.hypot(...n);
        return Math.round(i * 100) / 100
    }
    static getMidpoint(e, r) {
        return {
            x: (e.x + r.x) / 2,
            y: (e.y + r.y) / 2
        }
    }
    static getAngleBetweenPoints(e, r) {
        let i = Math.atan2(r.y - e.y, r.x - e.x) * (180 / Math.PI);
        return i < 0 && (i += 360), 360 - i
    }
    static getAngularDistance(e, r) {
        let n = (r - e) % 360;
        const i = n < 0 ? 1 : -1;
        return n = Math.abs(n), n > 180 ? i * (360 - n) : i * n
    }
    static getVelocity(e, r, n, i) {
        return this.getDistanceBetweenPoints(e, n) / (i - r)
    }
    static isInsideElement(e, r) {
        const n = r.getBoundingClientRect();
        return !(e.x < n.left || e.x > n.left + n.width || e.y < n.top || e.y > n.top + n.height)
    }
    static cyrb128(e) {
        let r = 1779033703,
            n = 3144134277,
            i = 1013904242,
            s = 2773480762;
        for (let o = 0, f; o < e.length; o++) f = e.charCodeAt(o), r = n ^ Math.imul(r ^ f, 597399067), n = i ^ Math.imul(n ^ f, 2869860233), i = s ^ Math.imul(i ^ f, 951274213), s = r ^ Math.imul(s ^ f, 2716044179);
        return r = Math.imul(i ^ r >>> 18, 597399067), n = Math.imul(s ^ n >>> 22, 2869860233), i = Math.imul(r ^ i >>> 17, 951274213), s = Math.imul(n ^ s >>> 19, 2716044179), [(r ^ n ^ i ^ s) >>> 0, (n ^ r) >>> 0, (i ^ r) >>> 0, (s ^ r) >>> 0]
    }
    static sfc32(e, r, n, i) {
        return function() {
            e >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0;
            let o = e + r | 0;
            return e = r ^ r >>> 9, r = n + (n << 3) | 0, n = n << 21 | n >>> 11, i = i + 1 | 0, o = o + i | 0, n = n + o | 0, (o >>> 0) / 4294967296
        }
    }
};
Xn(Za, "queryParams", new URLSearchParams(window.location.search)), Xn(Za, "getQueryParam", e => Za.queryParams.get(e)), Xn(Za, "sleep", e => new Promise(r => {
    window.setTimeout(r, e)
}));
let us = Za;
class qe {
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
            namespace: us.getQueryParam("namespace") ?? us.getQueryParam("ns") ?? this.defaultNamespace,
            isDisabled: us.queryParams.has("incognito") || us.queryParams.has("nc")
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
            i = r.split("-")[0];
        let s = JSON.parse(n);
        s = s.filter(o => {
            const f = o.split("-")[0];
            return i !== f
        }), s.push(r), this.set("tags", JSON.stringify(s))
    }
    static getScopedKey(e, r) {
        const n = `${this.namespace}:${e}`,
            i = this.tag ? `${this.namespace}:${e}:tag:${this.tag}` : null,
            s = this.code ? `${this.namespace}:${e}:code:${this.code}` : null;
        if (r === "none") return n;
        if (r === "tag") {
            if (!i) throw new Error('[Storage] requested "tag" scope but tv.storage.tag is undefined');
            return i
        }
        if (r === "code") {
            if (!s) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
            return s
        }
        return s && window.localStorage.getItem(s) !== null ? s : i && window.localStorage.getItem(i) !== null ? i : n
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
Xn(qe, "defaultNamespace", "tv");
class oo {
    constructor() {
        Xn(this, "artifacts");
        this.migrate(), this.artifacts = this.list()
    }
    get hasUnviewed() {
        return this.artifacts.some(e => !e.isViewed)
    }
    getUrl(e, r) {
        return r.galleryId ? `/gallery/${r.galleryId}/${e.artifactId}` : e.isTest ? `http://games-test.jackbox.tv/artifact/${e.categoryId}/${e.artifactId}/` : `https://games.jackbox.tv/artifact/${e.categoryId}/${e.artifactId}/`
    }
    getLocalArtifact(e) {
        const r = new Intl.DateTimeFormat(qs.locale, {
                year: "numeric",
                month: "short",
                day: "numeric"
            }),
            n = eu(e.categoryId);
        if (!n) throw new Error(`[Artifacts] Unknown game with categoryId ${e.categoryId}`);
        const i = new Date(e.time),
            s = r.format(i),
            o = this.getUrl(e, n);
        return {
            ...e,
            gameName: n.name ?? "",
            date: s,
            url: o
        }
    }
    list() {
        if (!qe.isSupported) return [];
        const e = Date.now(),
            r = qe.get("artifacts");
        if (!r) return [];
        try {
            return JSON.parse(r).filter(i => e - i.time < 525600 * 60 * 1e3).map(i => this.getLocalArtifact(i))
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
        qe.set("artifacts", JSON.stringify(e))
    }
    setAsViewed(e) {
        if (qe.isSupported && this.artifacts[e]) try {
            this.artifacts[e].isViewed = !0, this.persist()
        } catch {
            console.warn(`[Artifacts] Unable to mark artifact ${e} as viewed`)
        }
    }
    add(e) {
        var n;
        if (!qe.isSupported) return;
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
        if (qe.isSupported) try {
            this.artifacts.splice(e, 1), this.persist()
        } catch {
            console.warn("[Artifacts] Unable to remove artifact")
        }
    }
    static setAsViewed(e) {
        new oo().setAsViewed(e)
    }
    static add(e) {
        new oo().add(e)
    }
    static remove(e) {
        new oo().remove(e)
    }
    migrate() {
        const e = qe.get("galleries");
        if (!e) return;
        const n = JSON.parse(e).map(s => {
                const o = s.url.split("/"),
                    f = o[o.length - 2],
                    c = s.url.includes("games-test");
                return {
                    categoryId: s.categoryId,
                    artifactId: f,
                    isTest: c,
                    time: s.time,
                    isViewed: s.viewed
                }
            }),
            i = JSON.parse(qe.get("artifacts") ?? "[]");
        qe.set("artifacts", JSON.stringify([...n, ...i])), qe.remove("galleries")
    }
}
var yE = {
    exports: {}
};
(function(t, e) {
    var r = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof It < "u" && It,
        n = function() {
            function s() {
                this.fetch = !1, this.DOMException = r.DOMException
            }
            return s.prototype = r, new s
        }();
    (function(s) {
        (function(o) {
            var f = typeof s < "u" && s || typeof self < "u" && self || typeof f < "u" && f,
                c = {
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

            function p(N) {
                return N && DataView.prototype.isPrototypeOf(N)
            }
            if (c.arrayBuffer) var d = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                E = ArrayBuffer.isView || function(N) {
                    return N && d.indexOf(Object.prototype.toString.call(N)) > -1
                };

            function m(N) {
                if (typeof N != "string" && (N = String(N)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(N) || N === "") throw new TypeError('Invalid character in header field name: "' + N + '"');
                return N.toLowerCase()
            }

            function g(N) {
                return typeof N != "string" && (N = String(N)), N
            }

            function T(N) {
                var X = {
                    next: function() {
                        var H = N.shift();
                        return {
                            done: H === void 0,
                            value: H
                        }
                    }
                };
                return c.iterable && (X[Symbol.iterator] = function() {
                    return X
                }), X
            }

            function b(N) {
                this.map = {}, N instanceof b ? N.forEach(function(X, H) {
                    this.append(H, X)
                }, this) : Array.isArray(N) ? N.forEach(function(X) {
                    this.append(X[0], X[1])
                }, this) : N && Object.getOwnPropertyNames(N).forEach(function(X) {
                    this.append(X, N[X])
                }, this)
            }
            b.prototype.append = function(N, X) {
                N = m(N), X = g(X);
                var H = this.map[N];
                this.map[N] = H ? H + ", " + X : X
            }, b.prototype.delete = function(N) {
                delete this.map[m(N)]
            }, b.prototype.get = function(N) {
                return N = m(N), this.has(N) ? this.map[N] : null
            }, b.prototype.has = function(N) {
                return this.map.hasOwnProperty(m(N))
            }, b.prototype.set = function(N, X) {
                this.map[m(N)] = g(X)
            }, b.prototype.forEach = function(N, X) {
                for (var H in this.map) this.map.hasOwnProperty(H) && N.call(X, this.map[H], H, this)
            }, b.prototype.keys = function() {
                var N = [];
                return this.forEach(function(X, H) {
                    N.push(H)
                }), T(N)
            }, b.prototype.values = function() {
                var N = [];
                return this.forEach(function(X) {
                    N.push(X)
                }), T(N)
            }, b.prototype.entries = function() {
                var N = [];
                return this.forEach(function(X, H) {
                    N.push([H, X])
                }), T(N)
            }, c.iterable && (b.prototype[Symbol.iterator] = b.prototype.entries);

            function S(N) {
                if (N.bodyUsed) return Promise.reject(new TypeError("Already read"));
                N.bodyUsed = !0
            }

            function v(N) {
                return new Promise(function(X, H) {
                    N.onload = function() {
                        X(N.result)
                    }, N.onerror = function() {
                        H(N.error)
                    }
                })
            }

            function R(N) {
                var X = new FileReader,
                    H = v(X);
                return X.readAsArrayBuffer(N), H
            }

            function x(N) {
                var X = new FileReader,
                    H = v(X);
                return X.readAsText(N), H
            }

            function C(N) {
                for (var X = new Uint8Array(N), H = new Array(X.length), Q = 0; Q < X.length; Q++) H[Q] = String.fromCharCode(X[Q]);
                return H.join("")
            }

            function B(N) {
                if (N.slice) return N.slice(0);
                var X = new Uint8Array(N.byteLength);
                return X.set(new Uint8Array(N)), X.buffer
            }

            function K() {
                return this.bodyUsed = !1, this._initBody = function(N) {
                    this.bodyUsed = this.bodyUsed, this._bodyInit = N, N ? typeof N == "string" ? this._bodyText = N : c.blob && Blob.prototype.isPrototypeOf(N) ? this._bodyBlob = N : c.formData && FormData.prototype.isPrototypeOf(N) ? this._bodyFormData = N : c.searchParams && URLSearchParams.prototype.isPrototypeOf(N) ? this._bodyText = N.toString() : c.arrayBuffer && c.blob && p(N) ? (this._bodyArrayBuffer = B(N.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : c.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(N) || E(N)) ? this._bodyArrayBuffer = B(N) : this._bodyText = N = Object.prototype.toString.call(N) : this._bodyText = "", this.headers.get("content-type") || (typeof N == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : c.searchParams && URLSearchParams.prototype.isPrototypeOf(N) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, c.blob && (this.blob = function() {
                    var N = S(this);
                    if (N) return N;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    if (this._bodyArrayBuffer) {
                        var N = S(this);
                        return N || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                    } else return this.blob().then(R)
                }), this.text = function() {
                    var N = S(this);
                    if (N) return N;
                    if (this._bodyBlob) return x(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(C(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, c.formData && (this.formData = function() {
                    return this.text().then(se)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            var G = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function W(N) {
                var X = N.toUpperCase();
                return G.indexOf(X) > -1 ? X : N
            }

            function P(N, X) {
                if (!(this instanceof P)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                X = X || {};
                var H = X.body;
                if (N instanceof P) {
                    if (N.bodyUsed) throw new TypeError("Already read");
                    this.url = N.url, this.credentials = N.credentials, X.headers || (this.headers = new b(N.headers)), this.method = N.method, this.mode = N.mode, this.signal = N.signal, !H && N._bodyInit != null && (H = N._bodyInit, N.bodyUsed = !0)
                } else this.url = String(N);
                if (this.credentials = X.credentials || this.credentials || "same-origin", (X.headers || !this.headers) && (this.headers = new b(X.headers)), this.method = W(X.method || this.method || "GET"), this.mode = X.mode || this.mode || null, this.signal = X.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && H) throw new TypeError("Body not allowed for GET or HEAD requests");
                if (this._initBody(H), (this.method === "GET" || this.method === "HEAD") && (X.cache === "no-store" || X.cache === "no-cache")) {
                    var Q = /([?&])_=[^&]*/;
                    if (Q.test(this.url)) this.url = this.url.replace(Q, "$1_=" + new Date().getTime());
                    else {
                        var re = /\?/;
                        this.url += (re.test(this.url) ? "&" : "?") + "_=" + new Date().getTime()
                    }
                }
            }
            P.prototype.clone = function() {
                return new P(this, {
                    body: this._bodyInit
                })
            };

            function se(N) {
                var X = new FormData;
                return N.trim().split("&").forEach(function(H) {
                    if (H) {
                        var Q = H.split("="),
                            re = Q.shift().replace(/\+/g, " "),
                            ge = Q.join("=").replace(/\+/g, " ");
                        X.append(decodeURIComponent(re), decodeURIComponent(ge))
                    }
                }), X
            }

            function ee(N) {
                var X = new b,
                    H = N.replace(/\r?\n[\t ]+/g, " ");
                return H.split("\r").map(function(Q) {
                    return Q.indexOf(`
`) === 0 ? Q.substr(1, Q.length) : Q
                }).forEach(function(Q) {
                    var re = Q.split(":"),
                        ge = re.shift().trim();
                    if (ge) {
                        var xe = re.join(":").trim();
                        X.append(ge, xe)
                    }
                }), X
            }
            K.call(P.prototype);

            function F(N, X) {
                if (!(this instanceof F)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                X || (X = {}), this.type = "default", this.status = X.status === void 0 ? 200 : X.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = X.statusText === void 0 ? "" : "" + X.statusText, this.headers = new b(X.headers), this.url = X.url || "", this._initBody(N)
            }
            K.call(F.prototype), F.prototype.clone = function() {
                return new F(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new b(this.headers),
                    url: this.url
                })
            }, F.error = function() {
                var N = new F(null, {
                    status: 0,
                    statusText: ""
                });
                return N.type = "error", N
            };
            var q = [301, 302, 303, 307, 308];
            F.redirect = function(N, X) {
                if (q.indexOf(X) === -1) throw new RangeError("Invalid status code");
                return new F(null, {
                    status: X,
                    headers: {
                        location: N
                    }
                })
            }, o.DOMException = f.DOMException;
            try {
                new o.DOMException
            } catch {
                o.DOMException = function(X, H) {
                    this.message = X, this.name = H;
                    var Q = Error(X);
                    this.stack = Q.stack
                }, o.DOMException.prototype = Object.create(Error.prototype), o.DOMException.prototype.constructor = o.DOMException
            }

            function M(N, X) {
                return new Promise(function(H, Q) {
                    var re = new P(N, X);
                    if (re.signal && re.signal.aborted) return Q(new o.DOMException("Aborted", "AbortError"));
                    var ge = new XMLHttpRequest;

                    function xe() {
                        ge.abort()
                    }
                    ge.onload = function() {
                        var ye = {
                            status: ge.status,
                            statusText: ge.statusText,
                            headers: ee(ge.getAllResponseHeaders() || "")
                        };
                        ye.url = "responseURL" in ge ? ge.responseURL : ye.headers.get("X-Request-URL");
                        var Ve = "response" in ge ? ge.response : ge.responseText;
                        setTimeout(function() {
                            H(new F(Ve, ye))
                        }, 0)
                    }, ge.onerror = function() {
                        setTimeout(function() {
                            Q(new TypeError("Network request failed"))
                        }, 0)
                    }, ge.ontimeout = function() {
                        setTimeout(function() {
                            Q(new TypeError("Network request failed"))
                        }, 0)
                    }, ge.onabort = function() {
                        setTimeout(function() {
                            Q(new o.DOMException("Aborted", "AbortError"))
                        }, 0)
                    };

                    function Me(ye) {
                        try {
                            return ye === "" && f.location.href ? f.location.href : ye
                        } catch {
                            return ye
                        }
                    }
                    ge.open(re.method, Me(re.url), !0), re.credentials === "include" ? ge.withCredentials = !0 : re.credentials === "omit" && (ge.withCredentials = !1), "responseType" in ge && (c.blob ? ge.responseType = "blob" : c.arrayBuffer && re.headers.get("Content-Type") && re.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (ge.responseType = "arraybuffer")), X && typeof X.headers == "object" && !(X.headers instanceof b) ? Object.getOwnPropertyNames(X.headers).forEach(function(ye) {
                        ge.setRequestHeader(ye, g(X.headers[ye]))
                    }) : re.headers.forEach(function(ye, Ve) {
                        ge.setRequestHeader(Ve, ye)
                    }), re.signal && (re.signal.addEventListener("abort", xe), ge.onreadystatechange = function() {
                        ge.readyState === 4 && re.signal.removeEventListener("abort", xe)
                    }), ge.send(typeof re._bodyInit > "u" ? null : re._bodyInit)
                })
            }
            return M.polyfill = !0, f.fetch || (f.fetch = M, f.Headers = b, f.Request = P, f.Response = F), o.Headers = b, o.Request = P, o.Response = F, o.fetch = M, o
        })({})
    })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
    var i = r.fetch ? r : n;
    e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, t.exports = e
})(yE, yE.exports);
var h6 = yE.exports,
    E6 = Error,
    m6 = EvalError,
    g6 = RangeError,
    _6 = ReferenceError,
    BA = SyntaxError,
    tu = TypeError,
    T6 = URIError,
    v6 = function() {
        if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var e = {},
            r = Symbol("test"),
            n = Object(r);
        if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return !1;
        var i = 42;
        e[r] = i;
        for (r in e) return !1;
        if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
        var s = Object.getOwnPropertySymbols(e);
        if (s.length !== 1 || s[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r)) return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
            var o = Object.getOwnPropertyDescriptor(e, r);
            if (o.value !== i || o.enumerable !== !0) return !1
        }
        return !0
    },
    ox = typeof Symbol < "u" && Symbol,
    b6 = v6,
    x6 = function() {
        return typeof ox != "function" || typeof Symbol != "function" || typeof ox("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : b6()
    },
    oh = {
        __proto__: null,
        foo: {}
    },
    R6 = Object,
    S6 = function() {
        return {
            __proto__: oh
        }.foo === oh.foo && !(oh instanceof R6)
    },
    y6 = "Function.prototype.bind called on incompatible ",
    A6 = Object.prototype.toString,
    L6 = Math.max,
    C6 = "[object Function]",
    lx = function(e, r) {
        for (var n = [], i = 0; i < e.length; i += 1) n[i] = e[i];
        for (var s = 0; s < r.length; s += 1) n[s + e.length] = r[s];
        return n
    },
    w6 = function(e, r) {
        for (var n = [], i = r || 0, s = 0; i < e.length; i += 1, s += 1) n[s] = e[i];
        return n
    },
    O6 = function(t, e) {
        for (var r = "", n = 0; n < t.length; n += 1) r += t[n], n + 1 < t.length && (r += e);
        return r
    },
    I6 = function(e) {
        var r = this;
        if (typeof r != "function" || A6.apply(r) !== C6) throw new TypeError(y6 + r);
        for (var n = w6(arguments, 1), i, s = function() {
                if (this instanceof i) {
                    var d = r.apply(this, lx(n, arguments));
                    return Object(d) === d ? d : this
                }
                return r.apply(e, lx(n, arguments))
            }, o = L6(0, r.length - n.length), f = [], c = 0; c < o; c++) f[c] = "$" + c;
        if (i = Function("binder", "return function (" + O6(f, ",") + "){ return binder.apply(this,arguments); }")(s), r.prototype) {
            var p = function() {};
            p.prototype = r.prototype, i.prototype = new p, p.prototype = null
        }
        return i
    },
    N6 = I6,
    Em = Function.prototype.bind || N6,
    P6 = Function.prototype.call,
    U6 = Object.prototype.hasOwnProperty,
    D6 = Em,
    B6 = D6.call(P6, U6),
    dt, M6 = E6,
    $6 = m6,
    K6 = g6,
    k6 = _6,
    yo = BA,
    lo = tu,
    G6 = T6,
    MA = Function,
    lh = function(t) {
        try {
            return MA('"use strict"; return (' + t + ").constructor;")()
        } catch {}
    },
    ta = Object.getOwnPropertyDescriptor;
if (ta) try {
    ta({}, "")
} catch {
    ta = null
}
var uh = function() {
        throw new lo
    },
    V6 = ta ? function() {
        try {
            return arguments.callee, uh
        } catch {
            try {
                return ta(arguments, "callee").get
            } catch {
                return uh
            }
        }
    }() : uh,
    Ma = x6(),
    F6 = S6(),
    Er = Object.getPrototypeOf || (F6 ? function(t) {
        return t.__proto__
    } : null),
    Ha = {},
    H6 = typeof Uint8Array > "u" || !Er ? dt : Er(Uint8Array),
    ra = {
        __proto__: null,
        "%AggregateError%": typeof AggregateError > "u" ? dt : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? dt : ArrayBuffer,
        "%ArrayIteratorPrototype%": Ma && Er ? Er([][Symbol.iterator]()) : dt,
        "%AsyncFromSyncIteratorPrototype%": dt,
        "%AsyncFunction%": Ha,
        "%AsyncGenerator%": Ha,
        "%AsyncGeneratorFunction%": Ha,
        "%AsyncIteratorPrototype%": Ha,
        "%Atomics%": typeof Atomics > "u" ? dt : Atomics,
        "%BigInt%": typeof BigInt > "u" ? dt : BigInt,
        "%BigInt64Array%": typeof BigInt64Array > "u" ? dt : BigInt64Array,
        "%BigUint64Array%": typeof BigUint64Array > "u" ? dt : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView > "u" ? dt : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": M6,
        "%eval%": eval,
        "%EvalError%": $6,
        "%Float32Array%": typeof Float32Array > "u" ? dt : Float32Array,
        "%Float64Array%": typeof Float64Array > "u" ? dt : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? dt : FinalizationRegistry,
        "%Function%": MA,
        "%GeneratorFunction%": Ha,
        "%Int8Array%": typeof Int8Array > "u" ? dt : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? dt : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? dt : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": Ma && Er ? Er(Er([][Symbol.iterator]())) : dt,
        "%JSON%": typeof JSON == "object" ? JSON : dt,
        "%Map%": typeof Map > "u" ? dt : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !Ma || !Er ? dt : Er(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise > "u" ? dt : Promise,
        "%Proxy%": typeof Proxy > "u" ? dt : Proxy,
        "%RangeError%": K6,
        "%ReferenceError%": k6,
        "%Reflect%": typeof Reflect > "u" ? dt : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set > "u" ? dt : Set,
        "%SetIteratorPrototype%": typeof Set > "u" || !Ma || !Er ? dt : Er(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? dt : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": Ma && Er ? Er("" [Symbol.iterator]()) : dt,
        "%Symbol%": Ma ? Symbol : dt,
        "%SyntaxError%": yo,
        "%ThrowTypeError%": V6,
        "%TypedArray%": H6,
        "%TypeError%": lo,
        "%Uint8Array%": typeof Uint8Array > "u" ? dt : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? dt : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? dt : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? dt : Uint32Array,
        "%URIError%": G6,
        "%WeakMap%": typeof WeakMap > "u" ? dt : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? dt : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? dt : WeakSet
    };
if (Er) try {
    null.error
} catch (t) {
    var W6 = Er(Er(t));
    ra["%Error.prototype%"] = W6
}
var X6 = function t(e) {
        var r;
        if (e === "%AsyncFunction%") r = lh("async function () {}");
        else if (e === "%GeneratorFunction%") r = lh("function* () {}");
        else if (e === "%AsyncGeneratorFunction%") r = lh("async function* () {}");
        else if (e === "%AsyncGenerator%") {
            var n = t("%AsyncGeneratorFunction%");
            n && (r = n.prototype)
        } else if (e === "%AsyncIteratorPrototype%") {
            var i = t("%AsyncGenerator%");
            i && Er && (r = Er(i.prototype))
        }
        return ra[e] = r, r
    },
    ux = {
        __proto__: null,
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
    ru = Em,
    Ec = B6,
    j6 = ru.call(Function.call, Array.prototype.concat),
    z6 = ru.call(Function.apply, Array.prototype.splice),
    fx = ru.call(Function.call, String.prototype.replace),
    mc = ru.call(Function.call, String.prototype.slice),
    q6 = ru.call(Function.call, RegExp.prototype.exec),
    Y6 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    J6 = /\\(\\)?/g,
    Z6 = function(e) {
        var r = mc(e, 0, 1),
            n = mc(e, -1);
        if (r === "%" && n !== "%") throw new yo("invalid intrinsic syntax, expected closing `%`");
        if (n === "%" && r !== "%") throw new yo("invalid intrinsic syntax, expected opening `%`");
        var i = [];
        return fx(e, Y6, function(s, o, f, c) {
            i[i.length] = f ? fx(c, J6, "$1") : o || s
        }), i
    },
    Q6 = function(e, r) {
        var n = e,
            i;
        if (Ec(ux, n) && (i = ux[n], n = "%" + i[0] + "%"), Ec(ra, n)) {
            var s = ra[n];
            if (s === Ha && (s = X6(n)), typeof s > "u" && !r) throw new lo("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: i,
                name: n,
                value: s
            }
        }
        throw new yo("intrinsic " + e + " does not exist!")
    },
    Go = function(e, r) {
        if (typeof e != "string" || e.length === 0) throw new lo("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof r != "boolean") throw new lo('"allowMissing" argument must be a boolean');
        if (q6(/^%?[^%]*%?$/, e) === null) throw new yo("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var n = Z6(e),
            i = n.length > 0 ? n[0] : "",
            s = Q6("%" + i + "%", r),
            o = s.name,
            f = s.value,
            c = !1,
            p = s.alias;
        p && (i = p[0], z6(n, j6([0, 1], p)));
        for (var d = 1, E = !0; d < n.length; d += 1) {
            var m = n[d],
                g = mc(m, 0, 1),
                T = mc(m, -1);
            if ((g === '"' || g === "'" || g === "`" || T === '"' || T === "'" || T === "`") && g !== T) throw new yo("property names with quotes must have matching quotes");
            if ((m === "constructor" || !E) && (c = !0), i += "." + m, o = "%" + i + "%", Ec(ra, o)) f = ra[o];
            else if (f != null) {
                if (!(m in f)) {
                    if (!r) throw new lo("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (ta && d + 1 >= n.length) {
                    var b = ta(f, m);
                    E = !!b, E && "get" in b && !("originalValue" in b.get) ? f = b.get : f = f[m]
                } else E = Ec(f, m), f = f[m];
                E && !c && (ra[o] = f)
            }
        }
        return f
    },
    $A = {
        exports: {}
    },
    fh, cx;

function mm() {
    if (cx) return fh;
    cx = 1;
    var t = Go,
        e = t("%Object.defineProperty%", !0) || !1;
    if (e) try {
        e({}, "a", {
            value: 1
        })
    } catch {
        e = !1
    }
    return fh = e, fh
}
var eH = Go,
    $f = eH("%Object.getOwnPropertyDescriptor%", !0);
if ($f) try {
    $f([], "length")
} catch {
    $f = null
}
var KA = $f,
    px = mm(),
    tH = BA,
    $a = tu,
    dx = KA,
    rH = function(e, r, n) {
        if (!e || typeof e != "object" && typeof e != "function") throw new $a("`obj` must be an object or a function`");
        if (typeof r != "string" && typeof r != "symbol") throw new $a("`property` must be a string or a symbol`");
        if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null) throw new $a("`nonEnumerable`, if provided, must be a boolean or null");
        if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null) throw new $a("`nonWritable`, if provided, must be a boolean or null");
        if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null) throw new $a("`nonConfigurable`, if provided, must be a boolean or null");
        if (arguments.length > 6 && typeof arguments[6] != "boolean") throw new $a("`loose`, if provided, must be a boolean");
        var i = arguments.length > 3 ? arguments[3] : null,
            s = arguments.length > 4 ? arguments[4] : null,
            o = arguments.length > 5 ? arguments[5] : null,
            f = arguments.length > 6 ? arguments[6] : !1,
            c = !!dx && dx(e, r);
        if (px) px(e, r, {
            configurable: o === null && c ? c.configurable : !o,
            enumerable: i === null && c ? c.enumerable : !i,
            value: n,
            writable: s === null && c ? c.writable : !s
        });
        else if (f || !i && !s && !o) e[r] = n;
        else throw new tH("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")
    },
    AE = mm(),
    kA = function() {
        return !!AE
    };
kA.hasArrayLengthDefineBug = function() {
    if (!AE) return null;
    try {
        return AE([], "length", {
            value: 1
        }).length !== 1
    } catch {
        return !0
    }
};
var nH = kA,
    iH = Go,
    hx = rH,
    sH = nH(),
    Ex = KA,
    mx = tu,
    aH = iH("%Math.floor%"),
    oH = function(e, r) {
        if (typeof e != "function") throw new mx("`fn` is not a function");
        if (typeof r != "number" || r < 0 || r > 4294967295 || aH(r) !== r) throw new mx("`length` must be a positive 32-bit integer");
        var n = arguments.length > 2 && !!arguments[2],
            i = !0,
            s = !0;
        if ("length" in e && Ex) {
            var o = Ex(e, "length");
            o && !o.configurable && (i = !1), o && !o.writable && (s = !1)
        }
        return (i || s || !n) && (sH ? hx(e, "length", r, !0, !0) : hx(e, "length", r)), e
    };
(function(t) {
    var e = Em,
        r = Go,
        n = oH,
        i = tu,
        s = r("%Function.prototype.apply%"),
        o = r("%Function.prototype.call%"),
        f = r("%Reflect.apply%", !0) || e.call(o, s),
        c = mm(),
        p = r("%Math.max%");
    t.exports = function(m) {
        if (typeof m != "function") throw new i("a function is required");
        var g = f(e, o, arguments);
        return n(g, 1 + p(0, m.length - (arguments.length - 1)), !0)
    };
    var d = function() {
        return f(e, s, arguments)
    };
    c ? c(t.exports, "apply", {
        value: d
    }) : t.exports.apply = d
})($A);
var lH = $A.exports,
    GA = Go,
    VA = lH,
    uH = VA(GA("String.prototype.indexOf")),
    fH = function(e, r) {
        var n = GA(e, !!r);
        return typeof n == "function" && uH(e, ".prototype.") > -1 ? VA(n) : n
    };
const cH = {},
    pH = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: cH
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    dH = i3(pH);
var gm = typeof Map == "function" && Map.prototype,
    ch = Object.getOwnPropertyDescriptor && gm ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    gc = gm && ch && typeof ch.get == "function" ? ch.get : null,
    gx = gm && Map.prototype.forEach,
    _m = typeof Set == "function" && Set.prototype,
    ph = Object.getOwnPropertyDescriptor && _m ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    _c = _m && ph && typeof ph.get == "function" ? ph.get : null,
    _x = _m && Set.prototype.forEach,
    hH = typeof WeakMap == "function" && WeakMap.prototype,
    Al = hH ? WeakMap.prototype.has : null,
    EH = typeof WeakSet == "function" && WeakSet.prototype,
    Ll = EH ? WeakSet.prototype.has : null,
    mH = typeof WeakRef == "function" && WeakRef.prototype,
    Tx = mH ? WeakRef.prototype.deref : null,
    gH = Boolean.prototype.valueOf,
    _H = Object.prototype.toString,
    TH = Function.prototype.toString,
    vH = String.prototype.match,
    Tm = String.prototype.slice,
    fs = String.prototype.replace,
    bH = String.prototype.toUpperCase,
    vx = String.prototype.toLowerCase,
    FA = RegExp.prototype.test,
    bx = Array.prototype.concat,
    Qn = Array.prototype.join,
    xH = Array.prototype.slice,
    xx = Math.floor,
    LE = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    dh = Object.getOwnPropertySymbols,
    CE = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    Ao = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    Pr = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Ao || !0) ? Symbol.toStringTag : null,
    HA = Object.prototype.propertyIsEnumerable,
    Rx = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__
    } : null);

function Sx(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || FA.call(/e/, e)) return e;
    var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var n = t < 0 ? -xx(-t) : xx(t);
        if (n !== t) {
            var i = String(n),
                s = Tm.call(e, i.length + 1);
            return fs.call(i, r, "$&_") + "." + fs.call(fs.call(s, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return fs.call(e, r, "$&_")
}
var wE = dH,
    yx = wE.custom,
    Ax = XA(yx) ? yx : null,
    RH = function t(e, r, n, i) {
        var s = r || {};
        if (rs(s, "quoteStyle") && s.quoteStyle !== "single" && s.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (rs(s, "maxStringLength") && (typeof s.maxStringLength == "number" ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : s.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var o = rs(s, "customInspect") ? s.customInspect : !0;
        if (typeof o != "boolean" && o !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (rs(s, "indent") && s.indent !== null && s.indent !== "	" && !(parseInt(s.indent, 10) === s.indent && s.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (rs(s, "numericSeparator") && typeof s.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var f = s.numericSeparator;
        if (typeof e > "u") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return zA(e, s);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var c = String(e);
            return f ? Sx(e, c) : c
        }
        if (typeof e == "bigint") {
            var p = String(e) + "n";
            return f ? Sx(e, p) : p
        }
        var d = typeof s.depth > "u" ? 5 : s.depth;
        if (typeof n > "u" && (n = 0), n >= d && d > 0 && typeof e == "object") return OE(e) ? "[Array]" : "[Object]";
        var E = GH(s, n);
        if (typeof i > "u") i = [];
        else if (jA(i, e) >= 0) return "[Circular]";

        function m(q, M, N) {
            if (M && (i = xH.call(i), i.push(M)), N) {
                var X = {
                    depth: s.depth
                };
                return rs(s, "quoteStyle") && (X.quoteStyle = s.quoteStyle), t(q, X, n + 1, i)
            }
            return t(q, s, n + 1, i)
        }
        if (typeof e == "function" && !Lx(e)) {
            var g = NH(e),
                T = lf(e, m);
            return "[Function" + (g ? ": " + g : " (anonymous)") + "]" + (T.length > 0 ? " { " + Qn.call(T, ", ") + " }" : "")
        }
        if (XA(e)) {
            var b = Ao ? fs.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : CE.call(e);
            return typeof e == "object" && !Ao ? cl(b) : b
        }
        if ($H(e)) {
            for (var S = "<" + vx.call(String(e.nodeName)), v = e.attributes || [], R = 0; R < v.length; R++) S += " " + v[R].name + "=" + WA(SH(v[R].value), "double", s);
            return S += ">", e.childNodes && e.childNodes.length && (S += "..."), S += "</" + vx.call(String(e.nodeName)) + ">", S
        }
        if (OE(e)) {
            if (e.length === 0) return "[]";
            var x = lf(e, m);
            return E && !kH(x) ? "[" + IE(x, E) + "]" : "[ " + Qn.call(x, ", ") + " ]"
        }
        if (AH(e)) {
            var C = lf(e, m);
            return !("cause" in Error.prototype) && "cause" in e && !HA.call(e, "cause") ? "{ [" + String(e) + "] " + Qn.call(bx.call("[cause]: " + m(e.cause), C), ", ") + " }" : C.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Qn.call(C, ", ") + " }"
        }
        if (typeof e == "object" && o) {
            if (Ax && typeof e[Ax] == "function" && wE) return wE(e, {
                depth: d - n
            });
            if (o !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (PH(e)) {
            var B = [];
            return gx && gx.call(e, function(q, M) {
                B.push(m(M, e, !0) + " => " + m(q, e))
            }), Cx("Map", gc.call(e), B, E)
        }
        if (BH(e)) {
            var K = [];
            return _x && _x.call(e, function(q) {
                K.push(m(q, e))
            }), Cx("Set", _c.call(e), K, E)
        }
        if (UH(e)) return hh("WeakMap");
        if (MH(e)) return hh("WeakSet");
        if (DH(e)) return hh("WeakRef");
        if (CH(e)) return cl(m(Number(e)));
        if (OH(e)) return cl(m(LE.call(e)));
        if (wH(e)) return cl(gH.call(e));
        if (LH(e)) return cl(m(String(e)));
        if (typeof window < "u" && e === window) return "{ [object Window] }";
        if (e === It) return "{ [object globalThis] }";
        if (!yH(e) && !Lx(e)) {
            var G = lf(e, m),
                W = Rx ? Rx(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                P = e instanceof Object ? "" : "null prototype",
                se = !W && Pr && Object(e) === e && Pr in e ? Tm.call(As(e), 8, -1) : P ? "Object" : "",
                ee = W || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                F = ee + (se || P ? "[" + Qn.call(bx.call([], se || [], P || []), ": ") + "] " : "");
            return G.length === 0 ? F + "{}" : E ? F + "{" + IE(G, E) + "}" : F + "{ " + Qn.call(G, ", ") + " }"
        }
        return String(e)
    };

function WA(t, e, r) {
    var n = (r.quoteStyle || e) === "double" ? '"' : "'";
    return n + t + n
}

function SH(t) {
    return fs.call(String(t), /"/g, "&quot;")
}

function OE(t) {
    return As(t) === "[object Array]" && (!Pr || !(typeof t == "object" && Pr in t))
}

function yH(t) {
    return As(t) === "[object Date]" && (!Pr || !(typeof t == "object" && Pr in t))
}

function Lx(t) {
    return As(t) === "[object RegExp]" && (!Pr || !(typeof t == "object" && Pr in t))
}

function AH(t) {
    return As(t) === "[object Error]" && (!Pr || !(typeof t == "object" && Pr in t))
}

function LH(t) {
    return As(t) === "[object String]" && (!Pr || !(typeof t == "object" && Pr in t))
}

function CH(t) {
    return As(t) === "[object Number]" && (!Pr || !(typeof t == "object" && Pr in t))
}

function wH(t) {
    return As(t) === "[object Boolean]" && (!Pr || !(typeof t == "object" && Pr in t))
}

function XA(t) {
    if (Ao) return t && typeof t == "object" && t instanceof Symbol;
    if (typeof t == "symbol") return !0;
    if (!t || typeof t != "object" || !CE) return !1;
    try {
        return CE.call(t), !0
    } catch {}
    return !1
}

function OH(t) {
    if (!t || typeof t != "object" || !LE) return !1;
    try {
        return LE.call(t), !0
    } catch {}
    return !1
}
var IH = Object.prototype.hasOwnProperty || function(t) {
    return t in this
};

function rs(t, e) {
    return IH.call(t, e)
}

function As(t) {
    return _H.call(t)
}

function NH(t) {
    if (t.name) return t.name;
    var e = vH.call(TH.call(t), /^function\s*([\w$]+)/);
    return e ? e[1] : null
}

function jA(t, e) {
    if (t.indexOf) return t.indexOf(e);
    for (var r = 0, n = t.length; r < n; r++)
        if (t[r] === e) return r;
    return -1
}

function PH(t) {
    if (!gc || !t || typeof t != "object") return !1;
    try {
        gc.call(t);
        try {
            _c.call(t)
        } catch {
            return !0
        }
        return t instanceof Map
    } catch {}
    return !1
}

function UH(t) {
    if (!Al || !t || typeof t != "object") return !1;
    try {
        Al.call(t, Al);
        try {
            Ll.call(t, Ll)
        } catch {
            return !0
        }
        return t instanceof WeakMap
    } catch {}
    return !1
}

function DH(t) {
    if (!Tx || !t || typeof t != "object") return !1;
    try {
        return Tx.call(t), !0
    } catch {}
    return !1
}

function BH(t) {
    if (!_c || !t || typeof t != "object") return !1;
    try {
        _c.call(t);
        try {
            gc.call(t)
        } catch {
            return !0
        }
        return t instanceof Set
    } catch {}
    return !1
}

function MH(t) {
    if (!Ll || !t || typeof t != "object") return !1;
    try {
        Ll.call(t, Ll);
        try {
            Al.call(t, Al)
        } catch {
            return !0
        }
        return t instanceof WeakSet
    } catch {}
    return !1
}

function $H(t) {
    return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function"
}

function zA(t, e) {
    if (t.length > e.maxStringLength) {
        var r = t.length - e.maxStringLength,
            n = "... " + r + " more character" + (r > 1 ? "s" : "");
        return zA(Tm.call(t, 0, e.maxStringLength), e) + n
    }
    var i = fs.call(fs.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, KH);
    return WA(i, "single", e)
}

function KH(t) {
    var e = t.charCodeAt(0),
        r = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
        } [e];
    return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + bH.call(e.toString(16))
}

function cl(t) {
    return "Object(" + t + ")"
}

function hh(t) {
    return t + " { ? }"
}

function Cx(t, e, r, n) {
    var i = n ? IE(r, n) : Qn.call(r, ", ");
    return t + " (" + e + ") {" + i + "}"
}

function kH(t) {
    for (var e = 0; e < t.length; e++)
        if (jA(t[e], `
`) >= 0) return !1;
    return !0
}

function GH(t, e) {
    var r;
    if (t.indent === "	") r = "	";
    else if (typeof t.indent == "number" && t.indent > 0) r = Qn.call(Array(t.indent + 1), " ");
    else return null;
    return {
        base: r,
        prev: Qn.call(Array(e + 1), r)
    }
}

function IE(t, e) {
    if (t.length === 0) return "";
    var r = `
` + e.prev + e.base;
    return r + Qn.call(t, "," + r) + `
` + e.prev
}

function lf(t, e) {
    var r = OE(t),
        n = [];
    if (r) {
        n.length = t.length;
        for (var i = 0; i < t.length; i++) n[i] = rs(t, i) ? e(t[i], t) : ""
    }
    var s = typeof dh == "function" ? dh(t) : [],
        o;
    if (Ao) {
        o = {};
        for (var f = 0; f < s.length; f++) o["$" + s[f]] = s[f]
    }
    for (var c in t) rs(t, c) && (r && String(Number(c)) === c && c < t.length || Ao && o["$" + c] instanceof Symbol || (FA.call(/[^\w$]/, c) ? n.push(e(c, t) + ": " + e(t[c], t)) : n.push(c + ": " + e(t[c], t))));
    if (typeof dh == "function")
        for (var p = 0; p < s.length; p++) HA.call(t, s[p]) && n.push("[" + e(s[p]) + "]: " + e(t[s[p]], t));
    return n
}
var qA = Go,
    Vo = fH,
    VH = RH,
    FH = tu,
    uf = qA("%WeakMap%", !0),
    ff = qA("%Map%", !0),
    HH = Vo("WeakMap.prototype.get", !0),
    WH = Vo("WeakMap.prototype.set", !0),
    XH = Vo("WeakMap.prototype.has", !0),
    jH = Vo("Map.prototype.get", !0),
    zH = Vo("Map.prototype.set", !0),
    qH = Vo("Map.prototype.has", !0),
    vm = function(t, e) {
        for (var r = t, n;
            (n = r.next) !== null; r = n)
            if (n.key === e) return r.next = n.next, n.next = t.next, t.next = n, n
    },
    YH = function(t, e) {
        var r = vm(t, e);
        return r && r.value
    },
    JH = function(t, e, r) {
        var n = vm(t, e);
        n ? n.value = r : t.next = {
            key: e,
            next: t.next,
            value: r
        }
    },
    ZH = function(t, e) {
        return !!vm(t, e)
    },
    QH = function() {
        var e, r, n, i = {
            assert: function(s) {
                if (!i.has(s)) throw new FH("Side channel does not contain " + VH(s))
            },
            get: function(s) {
                if (uf && s && (typeof s == "object" || typeof s == "function")) {
                    if (e) return HH(e, s)
                } else if (ff) {
                    if (r) return jH(r, s)
                } else if (n) return YH(n, s)
            },
            has: function(s) {
                if (uf && s && (typeof s == "object" || typeof s == "function")) {
                    if (e) return XH(e, s)
                } else if (ff) {
                    if (r) return qH(r, s)
                } else if (n) return ZH(n, s);
                return !1
            },
            set: function(s, o) {
                uf && s && (typeof s == "object" || typeof s == "function") ? (e || (e = new uf), WH(e, s, o)) : ff ? (r || (r = new ff), zH(r, s, o)) : (n || (n = {
                    key: {},
                    next: null
                }), JH(n, s, o))
            }
        };
        return i
    },
    e7 = String.prototype.replace,
    t7 = /%20/g,
    Eh = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    bm = {
        default: Eh.RFC3986,
        formatters: {
            RFC1738: function(t) {
                return e7.call(t, t7, "+")
            },
            RFC3986: function(t) {
                return String(t)
            }
        },
        RFC1738: Eh.RFC1738,
        RFC3986: Eh.RFC3986
    },
    r7 = bm,
    mh = Object.prototype.hasOwnProperty,
    js = Array.isArray,
    qn = function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
    }(),
    n7 = function(e) {
        for (; e.length > 1;) {
            var r = e.pop(),
                n = r.obj[r.prop];
            if (js(n)) {
                for (var i = [], s = 0; s < n.length; ++s) typeof n[s] < "u" && i.push(n[s]);
                r.obj[r.prop] = i
            }
        }
    },
    YA = function(e, r) {
        for (var n = r && r.plainObjects ? Object.create(null) : {}, i = 0; i < e.length; ++i) typeof e[i] < "u" && (n[i] = e[i]);
        return n
    },
    i7 = function t(e, r, n) {
        if (!r) return e;
        if (typeof r != "object") {
            if (js(e)) e.push(r);
            else if (e && typeof e == "object")(n && (n.plainObjects || n.allowPrototypes) || !mh.call(Object.prototype, r)) && (e[r] = !0);
            else return [e, r];
            return e
        }
        if (!e || typeof e != "object") return [e].concat(r);
        var i = e;
        return js(e) && !js(r) && (i = YA(e, n)), js(e) && js(r) ? (r.forEach(function(s, o) {
            if (mh.call(e, o)) {
                var f = e[o];
                f && typeof f == "object" && s && typeof s == "object" ? e[o] = t(f, s, n) : e.push(s)
            } else e[o] = s
        }), e) : Object.keys(r).reduce(function(s, o) {
            var f = r[o];
            return mh.call(s, o) ? s[o] = t(s[o], f, n) : s[o] = f, s
        }, i)
    },
    s7 = function(e, r) {
        return Object.keys(r).reduce(function(n, i) {
            return n[i] = r[i], n
        }, e)
    },
    a7 = function(t, e, r) {
        var n = t.replace(/\+/g, " ");
        if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(n)
        } catch {
            return n
        }
    },
    o7 = function(e, r, n, i, s) {
        if (e.length === 0) return e;
        var o = e;
        if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), n === "iso-8859-1") return escape(o).replace(/%u[0-9a-f]{4}/gi, function(d) {
            return "%26%23" + parseInt(d.slice(2), 16) + "%3B"
        });
        for (var f = "", c = 0; c < o.length; ++c) {
            var p = o.charCodeAt(c);
            if (p === 45 || p === 46 || p === 95 || p === 126 || p >= 48 && p <= 57 || p >= 65 && p <= 90 || p >= 97 && p <= 122 || s === r7.RFC1738 && (p === 40 || p === 41)) {
                f += o.charAt(c);
                continue
            }
            if (p < 128) {
                f = f + qn[p];
                continue
            }
            if (p < 2048) {
                f = f + (qn[192 | p >> 6] + qn[128 | p & 63]);
                continue
            }
            if (p < 55296 || p >= 57344) {
                f = f + (qn[224 | p >> 12] + qn[128 | p >> 6 & 63] + qn[128 | p & 63]);
                continue
            }
            c += 1, p = 65536 + ((p & 1023) << 10 | o.charCodeAt(c) & 1023), f += qn[240 | p >> 18] + qn[128 | p >> 12 & 63] + qn[128 | p >> 6 & 63] + qn[128 | p & 63]
        }
        return f
    },
    l7 = function(e) {
        for (var r = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], n = [], i = 0; i < r.length; ++i)
            for (var s = r[i], o = s.obj[s.prop], f = Object.keys(o), c = 0; c < f.length; ++c) {
                var p = f[c],
                    d = o[p];
                typeof d == "object" && d !== null && n.indexOf(d) === -1 && (r.push({
                    obj: o,
                    prop: p
                }), n.push(d))
            }
        return n7(r), e
    },
    u7 = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    },
    f7 = function(e) {
        return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    c7 = function(e, r) {
        return [].concat(e, r)
    },
    p7 = function(e, r) {
        if (js(e)) {
            for (var n = [], i = 0; i < e.length; i += 1) n.push(r(e[i]));
            return n
        }
        return r(e)
    },
    JA = {
        arrayToObject: YA,
        assign: s7,
        combine: c7,
        compact: l7,
        decode: a7,
        encode: o7,
        isBuffer: f7,
        isRegExp: u7,
        maybeMap: p7,
        merge: i7
    },
    ZA = QH,
    Kf = JA,
    Cl = bm,
    d7 = Object.prototype.hasOwnProperty,
    wx = {
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
    Ai = Array.isArray,
    h7 = Array.prototype.push,
    QA = function(t, e) {
        h7.apply(t, Ai(e) ? e : [e])
    },
    E7 = Date.prototype.toISOString,
    Ox = Cl.default,
    Lr = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: Kf.encode,
        encodeValuesOnly: !1,
        format: Ox,
        formatter: Cl.formatters[Ox],
        indices: !1,
        serializeDate: function(e) {
            return E7.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    m7 = function(e) {
        return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
    },
    gh = {},
    g7 = function t(e, r, n, i, s, o, f, c, p, d, E, m, g, T, b, S) {
        for (var v = e, R = S, x = 0, C = !1;
            (R = R.get(gh)) !== void 0 && !C;) {
            var B = R.get(e);
            if (x += 1, typeof B < "u") {
                if (B === x) throw new RangeError("Cyclic object value");
                C = !0
            }
            typeof R.get(gh) > "u" && (x = 0)
        }
        if (typeof c == "function" ? v = c(r, v) : v instanceof Date ? v = E(v) : n === "comma" && Ai(v) && (v = Kf.maybeMap(v, function(X) {
                return X instanceof Date ? E(X) : X
            })), v === null) {
            if (s) return f && !T ? f(r, Lr.encoder, b, "key", m) : r;
            v = ""
        }
        if (m7(v) || Kf.isBuffer(v)) {
            if (f) {
                var K = T ? r : f(r, Lr.encoder, b, "key", m);
                return [g(K) + "=" + g(f(v, Lr.encoder, b, "value", m))]
            }
            return [g(r) + "=" + g(String(v))]
        }
        var G = [];
        if (typeof v > "u") return G;
        var W;
        if (n === "comma" && Ai(v)) T && f && (v = Kf.maybeMap(v, f)), W = [{
            value: v.length > 0 ? v.join(",") || null : void 0
        }];
        else if (Ai(c)) W = c;
        else {
            var P = Object.keys(v);
            W = p ? P.sort(p) : P
        }
        for (var se = i && Ai(v) && v.length === 1 ? r + "[]" : r, ee = 0; ee < W.length; ++ee) {
            var F = W[ee],
                q = typeof F == "object" && typeof F.value < "u" ? F.value : v[F];
            if (!(o && q === null)) {
                var M = Ai(v) ? typeof n == "function" ? n(se, F) : se : se + (d ? "." + F : "[" + F + "]");
                S.set(e, x);
                var N = ZA();
                N.set(gh, S), QA(G, t(q, M, n, i, s, o, n === "comma" && T && Ai(v) ? null : f, c, p, d, E, m, g, T, b, N))
            }
        }
        return G
    },
    _7 = function(e) {
        if (!e) return Lr;
        if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var r = e.charset || Lr.charset;
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n = Cl.default;
        if (typeof e.format < "u") {
            if (!d7.call(Cl.formatters, e.format)) throw new TypeError("Unknown format option provided.");
            n = e.format
        }
        var i = Cl.formatters[n],
            s = Lr.filter;
        return (typeof e.filter == "function" || Ai(e.filter)) && (s = e.filter), {
            addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : Lr.addQueryPrefix,
            allowDots: typeof e.allowDots > "u" ? Lr.allowDots : !!e.allowDots,
            charset: r,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Lr.charsetSentinel,
            delimiter: typeof e.delimiter > "u" ? Lr.delimiter : e.delimiter,
            encode: typeof e.encode == "boolean" ? e.encode : Lr.encode,
            encoder: typeof e.encoder == "function" ? e.encoder : Lr.encoder,
            encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : Lr.encodeValuesOnly,
            filter: s,
            format: n,
            formatter: i,
            serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : Lr.serializeDate,
            skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : Lr.skipNulls,
            sort: typeof e.sort == "function" ? e.sort : null,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Lr.strictNullHandling
        }
    },
    T7 = function(t, e) {
        var r = t,
            n = _7(e),
            i, s;
        typeof n.filter == "function" ? (s = n.filter, r = s("", r)) : Ai(n.filter) && (s = n.filter, i = s);
        var o = [];
        if (typeof r != "object" || r === null) return "";
        var f;
        e && e.arrayFormat in wx ? f = e.arrayFormat : e && "indices" in e ? f = e.indices ? "indices" : "repeat" : f = "indices";
        var c = wx[f];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var p = c === "comma" && e && e.commaRoundTrip;
        i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
        for (var d = ZA(), E = 0; E < i.length; ++E) {
            var m = i[E];
            n.skipNulls && r[m] === null || QA(o, g7(r[m], m, c, p, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, d))
        }
        var g = o.join(n.delimiter),
            T = n.addQueryPrefix === !0 ? "?" : "";
        return n.charsetSentinel && (n.charset === "iso-8859-1" ? T += "utf8=%26%2310003%3B&" : T += "utf8=%E2%9C%93&"), g.length > 0 ? T + g : ""
    },
    Lo = JA,
    NE = Object.prototype.hasOwnProperty,
    v7 = Array.isArray,
    hr = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: Lo.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    },
    b7 = function(t) {
        return t.replace(/&#(\d+);/g, function(e, r) {
            return String.fromCharCode(parseInt(r, 10))
        })
    },
    e1 = function(t, e) {
        return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
    },
    x7 = "utf8=%26%2310003%3B",
    R7 = "utf8=%E2%9C%93",
    S7 = function(e, r) {
        var n = {
                __proto__: null
            },
            i = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            s = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
            o = i.split(r.delimiter, s),
            f = -1,
            c, p = r.charset;
        if (r.charsetSentinel)
            for (c = 0; c < o.length; ++c) o[c].indexOf("utf8=") === 0 && (o[c] === R7 ? p = "utf-8" : o[c] === x7 && (p = "iso-8859-1"), f = c, c = o.length);
        for (c = 0; c < o.length; ++c)
            if (c !== f) {
                var d = o[c],
                    E = d.indexOf("]="),
                    m = E === -1 ? d.indexOf("=") : E + 1,
                    g, T;
                m === -1 ? (g = r.decoder(d, hr.decoder, p, "key"), T = r.strictNullHandling ? null : "") : (g = r.decoder(d.slice(0, m), hr.decoder, p, "key"), T = Lo.maybeMap(e1(d.slice(m + 1), r), function(b) {
                    return r.decoder(b, hr.decoder, p, "value")
                })), T && r.interpretNumericEntities && p === "iso-8859-1" && (T = b7(T)), d.indexOf("[]=") > -1 && (T = v7(T) ? [T] : T), NE.call(n, g) ? n[g] = Lo.combine(n[g], T) : n[g] = T
            } return n
    },
    y7 = function(t, e, r, n) {
        for (var i = n ? e : e1(e, r), s = t.length - 1; s >= 0; --s) {
            var o, f = t[s];
            if (f === "[]" && r.parseArrays) o = [].concat(i);
            else {
                o = r.plainObjects ? Object.create(null) : {};
                var c = f.charAt(0) === "[" && f.charAt(f.length - 1) === "]" ? f.slice(1, -1) : f,
                    p = parseInt(c, 10);
                !r.parseArrays && c === "" ? o = {
                    0: i
                } : !isNaN(p) && f !== c && String(p) === c && p >= 0 && r.parseArrays && p <= r.arrayLimit ? (o = [], o[p] = i) : c !== "__proto__" && (o[c] = i)
            }
            i = o
        }
        return i
    },
    A7 = function(e, r, n, i) {
        if (e) {
            var s = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                o = /(\[[^[\]]*])/,
                f = /(\[[^[\]]*])/g,
                c = n.depth > 0 && o.exec(s),
                p = c ? s.slice(0, c.index) : s,
                d = [];
            if (p) {
                if (!n.plainObjects && NE.call(Object.prototype, p) && !n.allowPrototypes) return;
                d.push(p)
            }
            for (var E = 0; n.depth > 0 && (c = f.exec(s)) !== null && E < n.depth;) {
                if (E += 1, !n.plainObjects && NE.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes) return;
                d.push(c[1])
            }
            return c && d.push("[" + s.slice(c.index) + "]"), y7(d, r, n, i)
        }
    },
    L7 = function(e) {
        if (!e) return hr;
        if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function") throw new TypeError("Decoder has to be a function.");
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r = typeof e.charset > "u" ? hr.charset : e.charset;
        return {
            allowDots: typeof e.allowDots > "u" ? hr.allowDots : !!e.allowDots,
            allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : hr.allowPrototypes,
            allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : hr.allowSparse,
            arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : hr.arrayLimit,
            charset: r,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : hr.charsetSentinel,
            comma: typeof e.comma == "boolean" ? e.comma : hr.comma,
            decoder: typeof e.decoder == "function" ? e.decoder : hr.decoder,
            delimiter: typeof e.delimiter == "string" || Lo.isRegExp(e.delimiter) ? e.delimiter : hr.delimiter,
            depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : hr.depth,
            ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
            interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : hr.interpretNumericEntities,
            parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : hr.parameterLimit,
            parseArrays: e.parseArrays !== !1,
            plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : hr.plainObjects,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : hr.strictNullHandling
        }
    },
    C7 = function(t, e) {
        var r = L7(e);
        if (t === "" || t === null || typeof t > "u") return r.plainObjects ? Object.create(null) : {};
        for (var n = typeof t == "string" ? S7(t, r) : t, i = r.plainObjects ? Object.create(null) : {}, s = Object.keys(n), o = 0; o < s.length; ++o) {
            var f = s[o],
                c = A7(f, n[f], r, typeof t == "string");
            i = Lo.merge(i, c, r)
        }
        return r.allowSparse === !0 ? i : Lo.compact(i)
    },
    w7 = T7,
    O7 = C7,
    I7 = bm,
    t1 = {
        formats: I7,
        parse: O7,
        stringify: w7
    };
let N7 = class {
        constructor(e) {
            this.code = e.code, this.token = e.token, this.host = e.host
        }
    },
    P7 = class {
        constructor(e) {
            this.appId = e.appId, this.appTag = e.appTag, this.audienceEnabled = e.audienceEnabled, this.code = e.code, this.host = e.host, this.audienceHost = e.audienceHost, this.locked = e.locked, this.full = e.full, this.maxPlayers = e.maxPlayers, this.minPlayers = e.minPlayers, this.moderationEnabled = e.moderationEnabled, this.passwordRequired = e.passwordRequired, this.twitchLocked = e.twitchLocked, this.locale = e.locale, this.keepalive = e.keepalive, this.controllerBranch = e.controllerBranch
        }
    },
    U7 = class {
        constructor(e) {
            this.connections = e.connections
        }
    },
    D7 = class {
        constructor(e) {
            this.cause = e.cause
        }
        whenReceived(e) {
            e.disconnect()
        }
    },
    B7 = class {};
var fp = {
    CreateRoomReply: N7,
    GetRoomReply: P7,
    GetAudienceReply: U7,
    RoomExit: D7,
    RoomLock: B7
};
const Ix = h6,
    M7 = t1,
    {
        CreateRoomReply: $7,
        GetRoomReply: K7
    } = fp;
let k7 = class {
    constructor(e) {
        if (!e.host) throw new Error("unable to create ecast APIClient: no host provided");
        if (this.host = e.host, !e.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
        this.scheme = e.scheme
    }
    url(e, r) {
        if (r) {
            let n = M7.stringify(r);
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
            s = await Ix(n, {
                method: "POST"
            });
        const {
            body: o,
            error: f,
            ok: c
        } = await s.json();
        if (!c) throw new Error(`failed to create room: ${f}`);
        return new $7({
            code: o.code,
            token: o.token,
            host: o.host
        })
    }
    async getRoom(e) {
        let r = this.url(`/rooms/${e.code}`),
            i = await (await Ix(r)).json();
        if (!i.ok) throw new Error(`unable to get room with options ${JSON.stringify(e)}: ${i.error}`);
        let s = i.body;
        return new K7({
            appId: s.appId,
            appTag: s.appTag,
            audienceEnabled: s.audienceEnabled,
            code: s.code,
            host: s.host,
            audienceHost: s.audienceHost,
            locked: s.locked,
            full: s.full,
            maxPlayers: s.maxPlayers,
            minPlayers: s.minPlayers,
            moderationEnabled: s.moderationEnabled,
            passwordRequired: s.passwordRequired,
            twitchLocked: s.twitchLocked,
            locale: s.locale,
            keepalive: s.keepalive,
            controllerBranch: s.controllerBranch
        })
    }
};
var G7 = {
        APIClient: k7
    },
    Wa = null;
typeof WebSocket < "u" ? Wa = WebSocket : typeof MozWebSocket < "u" ? Wa = MozWebSocket : typeof It < "u" ? Wa = It.WebSocket || It.MozWebSocket : typeof window < "u" ? Wa = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Wa = self.WebSocket || self.MozWebSocket);
var V7 = Wa,
    xm = {
        exports: {}
    },
    uo = typeof Reflect == "object" ? Reflect : null,
    Nx = uo && typeof uo.apply == "function" ? uo.apply : function(e, r, n) {
        return Function.prototype.apply.call(e, r, n)
    },
    kf;
uo && typeof uo.ownKeys == "function" ? kf = uo.ownKeys : Object.getOwnPropertySymbols ? kf = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : kf = function(e) {
    return Object.getOwnPropertyNames(e)
};

function F7(t) {
    console && console.warn && console.warn(t)
}
var r1 = Number.isNaN || function(e) {
    return e !== e
};

function Ut() {
    Ut.init.call(this)
}
xm.exports = Ut;
xm.exports.once = j7;
Ut.EventEmitter = Ut;
Ut.prototype._events = void 0;
Ut.prototype._eventsCount = 0;
Ut.prototype._maxListeners = void 0;
var Px = 10;

function cp(t) {
    if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
}
Object.defineProperty(Ut, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return Px
    },
    set: function(t) {
        if (typeof t != "number" || t < 0 || r1(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        Px = t
    }
});
Ut.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
Ut.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || r1(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this
};

function n1(t) {
    return t._maxListeners === void 0 ? Ut.defaultMaxListeners : t._maxListeners
}
Ut.prototype.getMaxListeners = function() {
    return n1(this)
};
Ut.prototype.emit = function(e) {
    for (var r = [], n = 1; n < arguments.length; n++) r.push(arguments[n]);
    var i = e === "error",
        s = this._events;
    if (s !== void 0) i = i && s.error === void 0;
    else if (!i) return !1;
    if (i) {
        var o;
        if (r.length > 0 && (o = r[0]), o instanceof Error) throw o;
        var f = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
        throw f.context = o, f
    }
    var c = s[e];
    if (c === void 0) return !1;
    if (typeof c == "function") Nx(c, this, r);
    else
        for (var p = c.length, d = l1(c, p), n = 0; n < p; ++n) Nx(d[n], this, r);
    return !0
};

function i1(t, e, r, n) {
    var i, s, o;
    if (cp(r), s = t._events, s === void 0 ? (s = t._events = Object.create(null), t._eventsCount = 0) : (s.newListener !== void 0 && (t.emit("newListener", e, r.listener ? r.listener : r), s = t._events), o = s[e]), o === void 0) o = s[e] = r, ++t._eventsCount;
    else if (typeof o == "function" ? o = s[e] = n ? [r, o] : [o, r] : n ? o.unshift(r) : o.push(r), i = n1(t), i > 0 && o.length > i && !o.warned) {
        o.warned = !0;
        var f = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        f.name = "MaxListenersExceededWarning", f.emitter = t, f.type = e, f.count = o.length, F7(f)
    }
    return t
}
Ut.prototype.addListener = function(e, r) {
    return i1(this, e, r, !1)
};
Ut.prototype.on = Ut.prototype.addListener;
Ut.prototype.prependListener = function(e, r) {
    return i1(this, e, r, !0)
};

function H7() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function s1(t, e, r) {
    var n = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: r
        },
        i = H7.bind(n);
    return i.listener = r, n.wrapFn = i, i
}
Ut.prototype.once = function(e, r) {
    return cp(r), this.on(e, s1(this, e, r)), this
};
Ut.prototype.prependOnceListener = function(e, r) {
    return cp(r), this.prependListener(e, s1(this, e, r)), this
};
Ut.prototype.removeListener = function(e, r) {
    var n, i, s, o, f;
    if (cp(r), i = this._events, i === void 0) return this;
    if (n = i[e], n === void 0) return this;
    if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || r));
    else if (typeof n != "function") {
        for (s = -1, o = n.length - 1; o >= 0; o--)
            if (n[o] === r || n[o].listener === r) {
                f = n[o].listener, s = o;
                break
            } if (s < 0) return this;
        s === 0 ? n.shift() : W7(n, s), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, f || r)
    }
    return this
};
Ut.prototype.off = Ut.prototype.removeListener;
Ut.prototype.removeAllListeners = function(e) {
    var r, n, i;
    if (n = this._events, n === void 0) return this;
    if (n.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n[e]), this;
    if (arguments.length === 0) {
        var s = Object.keys(n),
            o;
        for (i = 0; i < s.length; ++i) o = s[i], o !== "removeListener" && this.removeAllListeners(o);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
    }
    if (r = n[e], typeof r == "function") this.removeListener(e, r);
    else if (r !== void 0)
        for (i = r.length - 1; i >= 0; i--) this.removeListener(e, r[i]);
    return this
};

function a1(t, e, r) {
    var n = t._events;
    if (n === void 0) return [];
    var i = n[e];
    return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? X7(i) : l1(i, i.length)
}
Ut.prototype.listeners = function(e) {
    return a1(this, e, !0)
};
Ut.prototype.rawListeners = function(e) {
    return a1(this, e, !1)
};
Ut.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : o1.call(t, e)
};
Ut.prototype.listenerCount = o1;

function o1(t) {
    var e = this._events;
    if (e !== void 0) {
        var r = e[t];
        if (typeof r == "function") return 1;
        if (r !== void 0) return r.length
    }
    return 0
}
Ut.prototype.eventNames = function() {
    return this._eventsCount > 0 ? kf(this._events) : []
};

function l1(t, e) {
    for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
    return r
}

function W7(t, e) {
    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
    t.pop()
}

function X7(t) {
    for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
    return e
}

function j7(t, e) {
    return new Promise(function(r, n) {
        function i(o) {
            t.removeListener(e, s), n(o)
        }

        function s() {
            typeof t.removeListener == "function" && t.removeListener("error", i), r([].slice.call(arguments))
        }
        u1(t, e, s, {
            once: !0
        }), e !== "error" && z7(t, i, {
            once: !0
        })
    })
}

function z7(t, e, r) {
    typeof t.on == "function" && u1(t, "error", e, r)
}

function u1(t, e, r, n) {
    if (typeof t.on == "function") n.once ? t.once(e, r) : t.on(e, r);
    else if (typeof t.addEventListener == "function") t.addEventListener(e, function i(s) {
        n.once && t.removeEventListener(e, i), r(s)
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
}
var q7 = xm.exports;
let Y7 = class {
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
    pp = class extends Error {
        constructor(e) {
            super(e), e && (this.code = e.code, this.message = e.message)
        }
    };
class nu extends pp {
    constructor(e) {
        super(e), this.code = 1e3, this.message = e && e.message ? e.message : "ecast server error"
    }
}
class f1 extends nu {
    constructor(e) {
        super(e), this.code = 1001, this.message = e && e.message ? e.message : "create room failed"
    }
}
class c1 extends nu {
    constructor(e) {
        super(e), this.code = 1002, this.message = e && e.message ? e.message : "unable to connect to room"
    }
}
class p1 extends nu {
    constructor(e) {
        super(e), this.code = 1003, this.message = e && e.message ? e.message : "server is shutting down"
    }
}
class Ct extends pp {
    constructor(e) {
        super(e), this.code = 2e3, this.message = e && e.message ? e.message : "ecast client error"
    }
}
class d1 extends Ct {
    constructor(e) {
        super(e), this.code = 2001, this.message = e && e.message ? e.message : "parse error in ecast protocol"
    }
}
class h1 extends Ct {
    constructor(e) {
        super(e), this.code = 2002, this.message = e && e.message ? e.message : "missing opcode"
    }
}
class E1 extends Ct {
    constructor(e) {
        super(e), this.code = 2003, this.message = e && e.message ? e.message : "invalid opcode"
    }
}
class m1 extends Ct {
    constructor(e) {
        super(e), this.code = 2004, this.message = e && e.message ? e.message : "invalid arguments"
    }
}
class g1 extends Ct {
    constructor(e) {
        super(e), this.code = 2005, this.message = e && e.message ? e.message : "entity not found"
    }
}
class _1 extends Ct {
    constructor(e) {
        super(e), this.code = 2006, this.message = e && e.message ? e.message : "an entity already exists with that key"
    }
}
class T1 extends Ct {
    constructor(e) {
        super(e), this.code = 2007, this.message = e && e.message ? e.message : "the entity is not of the expected type"
    }
}
class v1 extends Ct {
    constructor(e) {
        super(e), this.code = 2008, this.message = e && e.message ? e.message : "no such client"
    }
}
class b1 extends Ct {
    constructor(e) {
        super(e), this.code = 2009, this.message = e && e.message ? e.message : "room is locked"
    }
}
class x1 extends Ct {
    constructor(e) {
        super(e), this.code = 2010, this.message = e && e.message ? e.message : "room is full"
    }
}
class R1 extends Ct {
    constructor(e) {
        super(e), this.code = 2011, this.message = e && e.message ? e.message : "no such license"
    }
}
class S1 extends Ct {
    constructor(e) {
        super(e), this.code = 2012, this.message = e && e.message ? e.message : "invalid license"
    }
}
class y1 extends Ct {
    constructor(e) {
        super(e), this.code = 2013, this.message = e && e.message ? e.message : "room not found"
    }
}
class A1 extends Ct {
    constructor(e) {
        super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
    }
}
class L1 extends Ct {
    constructor(e) {
        super(e), this.code = 2015, this.message = e && e.message ? e.message : "twitch login required"
    }
}
class C1 extends Ct {
    constructor(e) {
        super(e), this.code = 2016, this.message = e && e.message ? e.message : "no such option"
    }
}
class w1 extends Ct {
    constructor(e) {
        super(e), this.code = 2017, this.message = e && e.message ? e.message : "password required"
    }
}
class O1 extends Ct {
    constructor(e) {
        super(e), this.code = 2018, this.message = e && e.message ? e.message : "invalid room password"
    }
}
class I1 extends Ct {
    constructor(e) {
        super(e), this.code = 2019, this.message = e && e.message ? e.message : "missing name"
    }
}
class N1 extends Ct {
    constructor(e) {
        super(e), this.code = 2021, this.message = e && e.message ? e.message : "text did not pass text filters"
    }
}
class P1 extends Ct {
    constructor(e) {
        super(e), this.code = 2022, this.message = e && e.message ? e.message : "no such filter"
    }
}
class U1 extends Ct {
    constructor(e) {
        super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
    }
}
class D1 extends Ct {
    constructor(e) {
        super(e), this.code = 2024, this.message = e && e.message ? e.message : "not connected to a room"
    }
}
class B1 extends Ct {
    constructor(e) {
        super(e), this.code = 2025, this.message = e && e.message ? e.message : "illegal operation"
    }
}
class M1 extends Ct {
    constructor(e) {
        super(e), this.code = 2026, this.message = e && e.message ? e.message : "invalid ACL change"
    }
}
class $1 extends Ct {
    constructor(e) {
        super(e), this.code = 2027, this.message = e && e.message ? e.message : "room has already ended"
    }
}
class K1 extends Ct {
    constructor(e) {
        super(e), this.code = 2028, this.message = e && e.message ? e.message : "the entity is locked"
    }
}
class k1 extends Ct {
    constructor(e) {
        super(e), this.code = 2420, this.message = e && e.message ? e.message : "rate limit exceeded"
    }
}

function J7({
    code: t,
    message: e
}) {
    const r = Z7[t];
    return r ? new r({
        message: e
    }) : new pp({
        message: e
    })
}
var wl = {
    createError: J7,
    CallError: pp,
    EcastServerError: nu,
    EcastCreateRoomFailed: f1,
    EcastDialRoomFailed: c1,
    EcastServerIsShuttingDown: p1,
    EcastClientError: Ct,
    EcastParseError: d1,
    EcastRequestIsMissingOpcode: h1,
    EcastRequestHasInvalidOpcode: E1,
    EcastRequestHasInvalidArguments: m1,
    EcastEntityNotFound: g1,
    EcastEntityAlreadyExists: _1,
    EcastEntityTypeError: T1,
    EcastNoSuchClient: v1,
    EcastRoomIsLocked: b1,
    EcastRoomIsFull: x1,
    EcastLicenseNotFound: R1,
    EcastLicenseCheckFailed: S1,
    EcastRoomNotFound: y1,
    EcastInvalidRole: A1,
    EcastTwitchLoginRequired: L1,
    EcastInvalidOption: C1,
    EcastPasswordRequired: w1,
    EcastInvalidPassword: O1,
    EcastNameRequired: I1,
    EcastFilterError: N1,
    EcastNoSuchFilter: P1,
    EcastPermissionDenied: U1,
    EcastNotConnected: D1,
    EcastIllegalOperation: B1,
    EcastACLChangeDenied: M1,
    EcastRoomHasEnded: $1,
    EcastEntityLocked: K1,
    EcastRateLimitExceeded: k1,
    ObservedError: Y7
};
const Z7 = {
    1e3: nu,
    1001: f1,
    1002: c1,
    1003: p1,
    2e3: Ct,
    2001: d1,
    2002: h1,
    2003: E1,
    2004: m1,
    2005: g1,
    2006: _1,
    2007: T1,
    2008: v1,
    2009: b1,
    2010: x1,
    2011: R1,
    2012: S1,
    2013: y1,
    2014: A1,
    2015: L1,
    2016: C1,
    2017: w1,
    2018: O1,
    2019: I1,
    2021: N1,
    2022: P1,
    2023: U1,
    2024: D1,
    2025: B1,
    2026: M1,
    2027: $1,
    2028: K1,
    2420: k1
};
let Q7 = class {
        constructor(e) {
            this.id = e.id, this.deviceId = e.deviceId, this.name = e.name, this.secret = e.secret, this.reconnect = e.reconnect, this.entities = e.entities, this.here = e.here, this.profile = e.profile, this.replayEnd = e.replayEnd
        }
    },
    eW = class {
        constructor(e) {
            this.id = e.id, this.userId = e.userId, this.name = e.name, this.role = e.role, this.reconnect = e.reconnect
        }
    },
    tW = class {
        constructor(e) {
            this.id = e.id, this.role = e.role
        }
    },
    rW = class {
        constructor(e) {
            this.to = e.to, this.from = e.from, this.body = e.body, this.userId = e.userId
        }
    },
    nW = class {
        constructor(e) {
            this.id = e.id, this.banned = e.banned, this.reason = e.reason
        }
    };
var Rm = {
    ClientConnected: eW,
    ClientDisconnected: tW,
    ClientKicked: nW,
    ClientSend: rW,
    ClientWelcome: Q7
};
let iW = class {
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
var Sm = {
    CountGroup: iW
};
let sW = class {
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
    aW = class {
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
    oW = class {
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
var ym = {
    DoodleEntity: sW,
    DoodleLine: aW,
    DoodleLineRemoved: oW
};
let lW = class {
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
var Am = {
    GCounter: lW
};
let uW = class {
    constructor(e) {
        this.pc = e.pc, this.opcode = e.opcode, this.result = e.result
    }
};
var G1 = {
    Notification: uW
};
let fW = class V1 {
    constructor(e) {
        this.from = e.from, this.key = e.key, this.val = e.val, this.restrictions = e.restrictions, this.version = e.version, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
    }
    whenReceived(e) {
        if (e.entities[this.key] && e.entities[this.key] instanceof V1 && !this.restrictions) {
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
var Lm = {
    NumberEntity: fW
};
let cW = class {
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
    pW = class {
        constructor(e) {
            this.message = e.message
        }
        toString() {
            return `ObjectEcho{message: ${this.message}}`
        }
    };
var Cm = {
    ObjectEntity: cW,
    ObjectEcho: pW
};
let dW = class {
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
var wm = {
    PNCounter: dW
};
let hW = class {
    constructor(e) {
        this.pc = e.pc, this.re = e.re, this.opcode = e.opcode, this.result = e.result
    }
};
var F1 = {
    Reply: hW
};
let EW = class {
    constructor(e) {
        this.seq = e.seq, this.opcode = e.opcode, this.params = e.params
    }
};
var mW = {
    Request: EW
};
let gW = class {
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
    _W = class {
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
    TW = class {
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
var H1 = {
    StackEntity: gW,
    StackElement: _W,
    StackElements: TW
};
let vW = class {
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
    bW = class {
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
var Om = {
    TextEntity: vW,
    TextEcho: bW
};
let xW = class {
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
    RW = class {
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
    SW = class {
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
var Im = {
    TextMapEntity: xW,
    TextMapSynced: RW,
    TextMapState: SW
};
let yW = class {
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
var Nm = {
    TextRing: yW
};
let AW = class {
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
var W1 = {
    ArtifactEntity: AW
};
let LW = class {
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
var X1 = {
    DropEntity: LW
};
let CW = class {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `Echo{message: ${this.message}
}`
    }
};
var wW = {
    Echo: CW
};
let OW = class {
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
var IW = {
    LockEntity: OW
};
let NW = class {
    constructor() {}
    toString() {
        return "OK"
    }
};
var j1 = {
    OK: NW
};
const {
    ArtifactEntity: PW
} = W1, {
    ClientWelcome: UW,
    ClientConnected: DW,
    ClientDisconnected: BW,
    ClientKicked: MW,
    ClientSend: $W
} = Rm, {
    CountGroup: KW
} = Sm, {
    DoodleEntity: kW,
    DoodleLine: GW,
    DoodleLineRemoved: VW
} = ym, {
    StackEntity: FW,
    StackElement: HW,
    StackElements: WW
} = H1, {
    DropEntity: XW
} = X1, {
    Echo: jW
} = wW, {
    LockEntity: zW
} = IW, {
    GCounter: qW
} = Am, {
    GetAudienceReply: YW,
    RoomExit: JW,
    RoomLock: ZW
} = fp, {
    Notification: QW
} = G1, {
    OK: eX
} = j1, {
    NumberEntity: tX
} = Lm, {
    ObjectEcho: rX,
    ObjectEntity: nX
} = Cm, {
    PNCounter: Ux
} = wm, {
    Reply: iX
} = F1, {
    TextEcho: sX,
    TextEntity: aX
} = Om, {
    TextRing: oX
} = Nm, {
    createError: Dx,
    ObservedError: lX
} = wl, {
    TextMapEntity: uX,
    TextMapSynced: fX,
    TextMapState: cX
} = Im;

function PE(t, e, r) {
    switch (t) {
        case "ok":
            return new eX;
        case "echo":
            return new jW({
                message: e.message
            });
        case "lock":
            return new zW({
                key: e.key,
                from: e.from
            });
        case "error":
            return Dx({
                code: e.code,
                message: e.msg
            });
        case "error/observed":
            return new lX({
                to: e.to,
                opcode: e.opcode,
                error: Dx({
                    code: e.error.code,
                    message: e.error.msg
                })
            });
        case "string":
            return e;
        case "text":
            return new aX({
                from: e.from,
                key: e.key,
                text: e.val,
                version: e.version,
                meta: r,
                acl: e.acl
            });
        case "text/echo":
            return new sX({
                message: e.message
            });
        case "object":
            return new nX({
                from: e.from,
                key: e.key,
                val: e.val,
                meta: r,
                acl: e.acl
            });
        case "object/echo":
            return new rX({
                message: e.message
            });
        case "drop":
            return new XW({
                key: e.key
            });
        case "artifact":
            return new PW({
                key: e.key,
                artifactId: e.artifactId,
                categoryId: e.categoryId,
                rootId: e.rootId,
                meta: r
            });
        case "client/connected":
            return new DW({
                id: e.id,
                userId: e.userId,
                name: e.name,
                role: e.role,
                reconnect: e.reconnect
            });
        case "client/disconnected":
            return new BW({
                id: e.id,
                role: e.role
            });
        case "client/kicked":
            return new MW({
                id: e.id,
                banned: e.banned,
                reason: e.reason
            });
        case "client/send":
            return new $W({
                to: e.to,
                from: e.from,
                body: e.body,
                userId: e.userID
            });
        case "client/welcome": {
            let n = new UW({
                id: e.id,
                name: e.name,
                secret: e.secret,
                reconnect: e.reconnect,
                here: e.here,
                profile: e.profile,
                replayEnd: e.replayEnd
            });
            if (e.entities) {
                let i = {};
                Object.entries(e.entities).forEach(([s, o]) => {
                    i[s] = PE(o[0], o[1], o[2])
                }), n.entities = i
            }
            return n
        }
        case "doodle":
            return new kW({
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
            return new GW({
                key: e.key,
                from: e.from,
                line: e.val
            });
        case "doodle/line/removed":
            return new VW({
                key: e.key,
                from: e.from,
                index: e.index
            });
        case "stack":
            return new FW({
                key: e.key,
                size: e.size,
                from: e.from,
                version: e.version,
                meta: e.meta,
                acl: e.acl
            });
        case "stack/element":
            return new HW({
                key: e.key,
                val: e.val
            });
        case "stack/elements":
            return new WW({
                key: e.key,
                vals: e.vals
            });
        case "number":
            return new tX({
                key: e.key,
                val: e.val,
                restrictions: e.restrictions,
                from: e.from,
                version: e.version,
                meta: r,
                acl: e.acl
            });
        case "text-map":
            return new uX({
                key: e.key,
                from: e.from,
                root: e.root,
                meta: r,
                acl: e.acl
            });
        case "text-map/state":
            return new cX({
                key: e.key,
                from: e.from,
                attributions: e.attributions,
                text: e.text
            });
        case "text-map/synced":
            return new fX({
                key: e.key,
                from: e.from,
                msg: e.msg
            });
        case "room/exit":
            return new JW({
                cause: e.cause
            });
        case "room/lock":
            return new ZW;
        case "room/get-audience":
            return new YW({
                connections: e.connections
            });
        case "audience":
            return new Ux({
                key: t,
                count: e[1]
            });
        case "audience/count-group":
            return new KW({
                key: e.key,
                choices: e.choices,
                meta: r
            });
        case "audience/text-ring":
            return new oX({
                key: e.key,
                elements: e.elements,
                meta: r
            });
        case "audience/g-counter":
            return new qW({
                key: e.key,
                count: e.count,
                meta: r
            });
        case "audience/pn-counter":
            return new Ux({
                key: e.key,
                count: e.count,
                meta: r
            });
        default:
            return console.error(`failed to parse result of type ${t}: ${JSON.stringify(e,null,2)}`), e
    }
}

function pX(t) {
    let e = JSON.parse(t.data),
        r = e.opcode || e.type;
    return e.re ? new iX({
        pc: e.pc,
        re: e.re,
        opcode: r,
        result: PE(r, e.result)
    }) : new QW({
        pc: e.pc,
        opcode: r,
        result: PE(r, e.result)
    })
}
var dX = {
    parseResponseMessage: pX
};
const Bx = V7,
    hX = t1,
    EX = q7,
    {
        CallError: mX
    } = wl,
    {
        ClientWelcome: gX
    } = Rm,
    {
        CountGroup: _X
    } = Sm,
    {
        DoodleEntity: TX
    } = ym,
    {
        GCounter: vX
    } = Am,
    {
        Notification: Mx
    } = G1,
    {
        NumberEntity: bX
    } = Lm,
    {
        ObjectEntity: _h
    } = Cm,
    {
        PNCounter: xX
    } = wm,
    {
        Reply: RX
    } = F1,
    {
        Request: SX
    } = mW,
    {
        StackEntity: yX
    } = H1,
    {
        TextEntity: Th
    } = Om,
    {
        TextMapEntity: AX
    } = Im,
    {
        TextRing: LX
    } = Nm,
    {
        parseResponseMessage: CX
    } = dX,
    wX = 1e3 + Math.floor(Math.random() * 500),
    $x = 13e3;
let OX = class extends EX {
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
        const r = hX.stringify(e),
            n = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${r}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${r}`;
        return new Promise((i, s) => {
            let o = !1,
                f = !1,
                c = d => {
                    i(d), o = !0
                },
                p = d => {
                    s(d), o = !0
                };
            this.conn = new Bx(n, "ecast-v0"), this.conn.onmessage = d => {
                this.debugLog(`recv <- ${JSON.stringify(JSON.parse(d.data),null,2)}`);
                const E = CX(d);
                if (E instanceof RX) this.onReply(E);
                else if (E instanceof Mx) {
                    if (E.result instanceof gX) f = !0, this.id = E.result.id, this.deviceId = E.result.deviceId, this.entities = E.result.entities, this.secret = E.result.secret, E.result.name && (this.name = E.result.name), c(E.result);
                    else if (!o) {
                        p(E.result);
                        return
                    }
                    this.onNotification(E)
                } else console.error(`failed to parse response messsage: ${E}`)
            }, this.conn.onerror = d => {
                o ? this.emit("socketError", d) : p(d)
            }, this.conn.onclose = d => {
                this.debugLog("onclose", d.code), f && d.code === 1006 ? this.reconnect() : this.emit("socketClose", d)
            }, this.conn.onopen = d => {
                this.emit("socketOpen", d)
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
            r = wX;
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
            if (r >= $x) {
                this.debugLog("reconnect failed!", n), this.emit("socketClose", n);
                return
            }
            e += 1, this.debugLog("waiting", r), this.emit("connection", {
                status: "waiting",
                attempt: e
            }), await this.sleep(r), r = Math.min($x, r * 2)
        }
    }
    disconnect() {
        this.conn && (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
    }
    onReply(e) {
        const r = e.re,
            n = this.pending[r];
        if (!n) {
            const i = new Mx(e);
            i.re = r, this.emit("notification", i);
            return
        }
        delete this.pending[r], e.result instanceof mX ? n.reject(e.result) : n.resolve(e.result)
    }
    onNotification(e) {
        typeof e.result.whenReceived == "function" && e.result.whenReceived(this), this.emit("notification", e), this.emit(e.opcode, e.result)
    }
    send(e, r = {}) {
        if (!this.conn) throw new Error("No connection available");
        if (this.conn.readyState !== Bx.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
        const n = ++this.seq,
            i = new SX({
                seq: n,
                opcode: e,
                params: r
            }),
            s = new Promise((f, c) => {
                this.pending[n] = {
                    resolve: f,
                    reject: c,
                    request: i
                }
            }),
            o = JSON.stringify(i);
        return this.debugLog(`send -> ${o}`), this.conn.send(o), s
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
            val: i = 0,
            acl: s,
            min: o,
            max: f,
            increment: c,
            type: p
        } = r;
        n.val = i, s && (n.acl = s), o != null && (n.min = o), f != null && (n.max = f), c && (n.increment = c), p && (n.type = p);
        const d = await this.send("number/create", n);
        return this.entities[e] = new bX({
            key: e,
            val: i,
            restrictions: {
                min: o,
                max: f,
                increment: c,
                type: p
            },
            meta: {
                locked: !1
            }
        }), d
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
        const i = {
            key: e,
            val: r
        };
        n && (i.acl = n);
        const s = await this.send("object/create", i);
        return this.entities[e] = new _h({
            key: e,
            val: r,
            meta: {
                locked: !1
            }
        }), s
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
        const i = {
            key: e,
            val: r
        };
        n && (i.acl = n);
        const s = await this.send("object/set", i);
        return this.entities[e] = new _h({
            key: e,
            val: r,
            meta: {
                locked: !1
            }
        }), s
    }
    async updateObject(e, r) {
        const n = await this.send("object/update", {
            key: e,
            val: r
        });
        return this.entities[e] = new _h({
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
        const i = {
                key: e,
                val: r
            },
            {
                acl: s,
                accept: o,
                reject: f
            } = n;
        s && (i.acl = s), o && (i.accept = o), f && (i.reject = f);
        const c = await this.send("text/create", i);
        return this.entities[e] = new Th({
            key: e,
            text: r,
            meta: {
                locked: !1
            }
        }), c
    }
    async setText(e, r, n) {
        const i = {
            key: e,
            val: r
        };
        n && (i.acl = n);
        const s = await this.send("text/set", i);
        return this.entities[e] = new Th({
            key: e,
            text: r,
            meta: {
                locked: !1
            }
        }), s
    }
    async updateText(e, r) {
        const n = await this.send("text/update", {
            key: e,
            val: r
        });
        return this.entities[e] = new Th({
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
            notifyHost: i,
            acl: s,
            accept: o,
            reject: f
        } = r;
        let c = {
            key: e
        };
        n && (c.val = r.val), i && (c.notifyHost = r.notifyHost), s && (c.acl = s), o && (c.accept = o), f && (c.reject = f);
        const p = await this.send("text-map/create", c);
        return this.entities[e] = new AX({
            key: e,
            acl: s,
            meta: {
                locked: !1
            }
        }), p
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
            acl: i,
            colors: s,
            live: o,
            maxLayer: f,
            maxPoints: c,
            size: p,
            weights: d
        } = r;
        i && (n.acl = i), s && (n.colors = s), n.live = o, f != null && (n.maxLayer = f), c != null && (n.maxPoints = c), p && (n.size = p), d && (n.weights = d);
        const E = await this.send("doodle/create", n);
        return this.entities[e] = new TX({
            key: e,
            colors: s,
            lines: [],
            live: o,
            maxLayer: n.maxLayer || 0,
            maxPoints: n.maxPoints || 0,
            size: p,
            weights: d,
            meta: {
                locked: !1
            }
        }), E
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
            weight: i,
            layer: s,
            points: o,
            brush: f
        } = r, c = {
            color: n,
            weight: i,
            layer: s,
            points: o
        };
        f && (c.brush = f);
        const p = await this.send("doodle/stroke", {
            key: e,
            ...c
        });
        return this.entities[e].lines.push(c), p
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
        const i = await this.send("stack/create", n);
        return this.entities[e] = new yX({
            key: e,
            size: 0,
            meta: {
                locked: !1
            }
        }), i
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
        return this.entities[e] = new _X({
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
        return this.entities[e] = new vX({
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
        return this.entities[e] = new xX({
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
                limit: i,
                accept: s,
                reject: o
            } = r;
        i && (n.limit = i), s && (n.accept = s), o && (n.reject = o);
        const f = await this.send("audience/text-ring/create", n);
        return this.entities[e] = new LX({
            key: e,
            elements: [],
            limit: i,
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
var IX = {
    WSClient: OX
};
const {
    APIClient: NX
} = G7, {
    WSClient: PX
} = IX, {
    CreateRoomReply: UX,
    GetRoomReply: DX
} = fp, {
    ClientWelcome: BX,
    ClientDisconnected: MX
} = Rm, {
    ArtifactEntity: $X
} = W1, {
    GCounter: KX
} = Am, {
    NumberEntity: kX
} = Lm, {
    TextEntity: GX
} = Om, {
    DoodleEntity: VX
} = ym, {
    ObjectEntity: FX
} = Cm, {
    CountGroup: HX
} = Sm, {
    DropEntity: WX
} = X1, {
    OK: XX
} = j1, {
    RoomExit: jX
} = fp, {
    TextRing: zX
} = Nm, {
    TextMapEntity: qX
} = Im, {
    PNCounter: YX
} = wm;
var JX = {
    APIClient: NX,
    WSClient: PX,
    ClientWelcome: BX,
    CreateRoomReply: UX,
    DropEntity: WX,
    GetRoomReply: DX,
    ClientDisconnected: MX,
    RoomExit: jX,
    OK: XX,
    ArtifactEntity: $X,
    DoodleEntity: VX,
    NumberEntity: kX,
    CountGroup: HX,
    GCounter: KX,
    ObjectEntity: FX,
    PNCounter: YX,
    TextEntity: GX,
    TextRing: zX,
    TextMapEntity: qX
};

function ZX(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var Kx = {
    exports: {}
};
(function(t, e) {
    (function(r, n) {
        n(e)
    })(It, function(r) {
        var n = typeof window < "u" ? window : typeof It < "u" ? It : typeof self < "u" ? self : {},
            i = function(U, z) {
                if (z = z.split(":")[0], U = +U, !U) return !1;
                switch (z) {
                    case "http":
                    case "ws":
                        return U !== 80;
                    case "https":
                    case "wss":
                        return U !== 443;
                    case "ftp":
                        return U !== 21;
                    case "gopher":
                        return U !== 70;
                    case "file":
                        return !1
                }
                return U !== 0
            },
            s = Object.prototype.hasOwnProperty,
            o;

        function f(k) {
            try {
                return decodeURIComponent(k.replace(/\+/g, " "))
            } catch {
                return null
            }
        }

        function c(k) {
            try {
                return encodeURIComponent(k)
            } catch {
                return null
            }
        }

        function p(k) {
            for (var U = /([^=?#&]+)=?([^&]*)/g, z = {}, D; D = U.exec(k);) {
                var Y = f(D[1]),
                    le = f(D[2]);
                Y === null || le === null || Y in z || (z[Y] = le)
            }
            return z
        }

        function d(k, U) {
            U = U || "";
            var z = [],
                D, Y;
            typeof U != "string" && (U = "?");
            for (Y in k)
                if (s.call(k, Y)) {
                    if (D = k[Y], !D && (D === null || D === o || isNaN(D)) && (D = ""), Y = c(Y), D = c(D), Y === null || D === null) continue;
                    z.push(Y + "=" + D)
                } return z.length ? U + z.join("&") : ""
        }
        var E = d,
            m = p,
            g = {
                stringify: E,
                parse: m
            },
            T = /[\n\r\t]/g,
            b = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            S = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            v = /^[a-zA-Z]:/,
            R = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;

        function x(k) {
            return (k || "").toString().replace(R, "")
        }
        var C = [
                ["#", "hash"],
                ["?", "query"],
                function(U, z) {
                    return G(z.protocol) ? U.replace(/\\/g, "/") : U
                },
                ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/:(\d*)$/, "port", void 0, 1],
                [NaN, "hostname", void 0, 1, 1]
            ],
            B = {
                hash: 1,
                query: 1
            };

        function K(k) {
            var U;
            typeof window < "u" ? U = window : typeof n < "u" ? U = n : typeof self < "u" ? U = self : U = {};
            var z = U.location || {};
            k = k || z;
            var D = {},
                Y = typeof k,
                le;
            if (k.protocol === "blob:") D = new se(unescape(k.pathname), {});
            else if (Y === "string") {
                D = new se(k, {});
                for (le in B) delete D[le]
            } else if (Y === "object") {
                for (le in k) le in B || (D[le] = k[le]);
                D.slashes === void 0 && (D.slashes = b.test(k.href))
            }
            return D
        }

        function G(k) {
            return k === "file:" || k === "ftp:" || k === "http:" || k === "https:" || k === "ws:" || k === "wss:"
        }

        function W(k, U) {
            k = x(k), k = k.replace(T, ""), U = U || {};
            var z = S.exec(k),
                D = z[1] ? z[1].toLowerCase() : "",
                Y = !!z[2],
                le = !!z[3],
                Se = 0,
                be;
            return Y ? le ? (be = z[2] + z[3] + z[4], Se = z[2].length + z[3].length) : (be = z[2] + z[4], Se = z[2].length) : le ? (be = z[3] + z[4], Se = z[3].length) : be = z[4], D === "file:" ? Se >= 2 && (be = be.slice(2)) : G(D) ? be = z[4] : D ? Y && (be = be.slice(2)) : Se >= 2 && G(U.protocol) && (be = z[4]), {
                protocol: D,
                slashes: Y || G(D),
                slashesCount: Se,
                rest: be
            }
        }

        function P(k, U) {
            if (k === "") return U;
            for (var z = (U || "/").split("/").slice(0, -1).concat(k.split("/")), D = z.length, Y = z[D - 1], le = !1, Se = 0; D--;) z[D] === "." ? z.splice(D, 1) : z[D] === ".." ? (z.splice(D, 1), Se++) : Se && (D === 0 && (le = !0), z.splice(D, 1), Se--);
            return le && z.unshift(""), (Y === "." || Y === "..") && z.push(""), z.join("/")
        }

        function se(k, U, z) {
            if (k = x(k), k = k.replace(T, ""), !(this instanceof se)) return new se(k, U, z);
            var D, Y, le, Se, be, Be, yt = C.slice(),
                pr = typeof U,
                ke = this,
                xa = 0;
            for (pr !== "object" && pr !== "string" && (z = U, U = null), z && typeof z != "function" && (z = g.parse), U = K(U), Y = W(k || "", U), D = !Y.protocol && !Y.slashes, ke.slashes = Y.slashes || D && U.slashes, ke.protocol = Y.protocol || U.protocol || "", k = Y.rest, (Y.protocol === "file:" && (Y.slashesCount !== 2 || v.test(k)) || !Y.slashes && (Y.protocol || Y.slashesCount < 2 || !G(ke.protocol))) && (yt[3] = [/(.*)/, "pathname"]); xa < yt.length; xa++) {
                if (Se = yt[xa], typeof Se == "function") {
                    k = Se(k, ke);
                    continue
                }
                le = Se[0], Be = Se[1], le !== le ? ke[Be] = k : typeof le == "string" ? (be = le === "@" ? k.lastIndexOf(le) : k.indexOf(le), ~be && (typeof Se[2] == "number" ? (ke[Be] = k.slice(0, be), k = k.slice(be + Se[2])) : (ke[Be] = k.slice(be), k = k.slice(0, be)))) : (be = le.exec(k)) && (ke[Be] = be[1], k = k.slice(0, be.index)), ke[Be] = ke[Be] || D && Se[3] && U[Be] || "", Se[4] && (ke[Be] = ke[Be].toLowerCase())
            }
            z && (ke.query = z(ke.query)), D && U.slashes && ke.pathname.charAt(0) !== "/" && (ke.pathname !== "" || U.pathname !== "") && (ke.pathname = P(ke.pathname, U.pathname)), ke.pathname.charAt(0) !== "/" && G(ke.protocol) && (ke.pathname = "/" + ke.pathname), i(ke.port, ke.protocol) || (ke.host = ke.hostname, ke.port = ""), ke.username = ke.password = "", ke.auth && (be = ke.auth.indexOf(":"), ~be ? (ke.username = ke.auth.slice(0, be), ke.username = encodeURIComponent(decodeURIComponent(ke.username)), ke.password = ke.auth.slice(be + 1), ke.password = encodeURIComponent(decodeURIComponent(ke.password))) : ke.username = encodeURIComponent(decodeURIComponent(ke.auth)), ke.auth = ke.password ? ke.username + ":" + ke.password : ke.username), ke.origin = ke.protocol !== "file:" && G(ke.protocol) && ke.host ? ke.protocol + "//" + ke.host : "null", ke.href = ke.toString()
        }

        function ee(k, U, z) {
            var D = this;
            switch (k) {
                case "query":
                    typeof U == "string" && U.length && (U = (z || g.parse)(U)), D[k] = U;
                    break;
                case "port":
                    D[k] = U, i(U, D.protocol) ? U && (D.host = D.hostname + ":" + U) : (D.host = D.hostname, D[k] = "");
                    break;
                case "hostname":
                    D[k] = U, D.port && (U += ":" + D.port), D.host = U;
                    break;
                case "host":
                    D[k] = U, /:\d+$/.test(U) ? (U = U.split(":"), D.port = U.pop(), D.hostname = U.join(":")) : (D.hostname = U, D.port = "");
                    break;
                case "protocol":
                    D.protocol = U.toLowerCase(), D.slashes = !z;
                    break;
                case "pathname":
                case "hash":
                    if (U) {
                        var Y = k === "pathname" ? "/" : "#";
                        D[k] = U.charAt(0) !== Y ? Y + U : U
                    } else D[k] = U;
                    break;
                case "username":
                case "password":
                    D[k] = encodeURIComponent(U);
                    break;
                case "auth":
                    var le = U.indexOf(":");
                    ~le ? (D.username = U.slice(0, le), D.username = encodeURIComponent(decodeURIComponent(D.username)), D.password = U.slice(le + 1), D.password = encodeURIComponent(decodeURIComponent(D.password))) : D.username = encodeURIComponent(decodeURIComponent(U))
            }
            for (var Se = 0; Se < C.length; Se++) {
                var be = C[Se];
                be[4] && (D[be[1]] = D[be[1]].toLowerCase())
            }
            return D.auth = D.password ? D.username + ":" + D.password : D.username, D.origin = D.protocol !== "file:" && G(D.protocol) && D.host ? D.protocol + "//" + D.host : "null", D.href = D.toString(), D
        }

        function F(k) {
            (!k || typeof k != "function") && (k = g.stringify);
            var U, z = this,
                D = z.host,
                Y = z.protocol;
            Y && Y.charAt(Y.length - 1) !== ":" && (Y += ":");
            var le = Y + (z.protocol && z.slashes || G(z.protocol) ? "//" : "");
            return z.username ? (le += z.username, z.password && (le += ":" + z.password), le += "@") : z.password ? (le += ":" + z.password, le += "@") : z.protocol !== "file:" && G(z.protocol) && !D && z.pathname !== "/" && (le += "@"), D[D.length - 1] === ":" && (D += ":"), le += D + z.pathname, U = typeof z.query == "object" ? k(z.query) : z.query, U && (le += U.charAt(0) !== "?" ? "?" + U : U), z.hash && (le += z.hash), le
        }
        se.prototype = {
            set: ee,
            toString: F
        }, se.extractProtocol = W, se.location = K, se.trimLeft = x, se.qs = g;
        var q = se;

        function M(k, U) {
            setTimeout(function(z) {
                return k.call(z)
            }, 4, U)
        }

        function N(k, U) {
            typeof process < "u" && console[k].call(null, U)
        }

        function X(k, U) {
            k === void 0 && (k = []);
            var z = [];
            return k.forEach(function(D) {
                U(D) || z.push(D)
            }), z
        }

        function H(k, U) {
            k === void 0 && (k = []);
            var z = [];
            return k.forEach(function(D) {
                U(D) && z.push(D)
            }), z
        }
        var Q = function() {
            this.listeners = {}
        };
        Q.prototype.addEventListener = function(U, z) {
            typeof z == "function" && (Array.isArray(this.listeners[U]) || (this.listeners[U] = []), H(this.listeners[U], function(D) {
                return D === z
            }).length === 0 && this.listeners[U].push(z))
        }, Q.prototype.removeEventListener = function(U, z) {
            var D = this.listeners[U];
            this.listeners[U] = X(D, function(Y) {
                return Y === z
            })
        }, Q.prototype.dispatchEvent = function(U) {
            for (var z = this, D = [], Y = arguments.length - 1; Y-- > 0;) D[Y] = arguments[Y + 1];
            var le = U.type,
                Se = this.listeners[le];
            return Array.isArray(Se) ? (Se.forEach(function(be) {
                D.length > 0 ? be.apply(z, D) : be.call(z, U)
            }), !0) : !1
        };

        function re(k) {
            var U = k.indexOf("?");
            return U >= 0 ? k.slice(0, U) : k
        }
        var ge = function() {
            this.urlMap = {}
        };
        ge.prototype.attachWebSocket = function(U, z) {
            var D = re(z),
                Y = this.urlMap[D];
            if (Y && Y.server && Y.websockets.indexOf(U) === -1) return Y.websockets.push(U), Y.server
        }, ge.prototype.addMembershipToRoom = function(U, z) {
            var D = this.urlMap[re(U.url)];
            D && D.server && D.websockets.indexOf(U) !== -1 && (D.roomMemberships[z] || (D.roomMemberships[z] = []), D.roomMemberships[z].push(U))
        }, ge.prototype.attachServer = function(U, z) {
            var D = re(z),
                Y = this.urlMap[D];
            if (!Y) return this.urlMap[D] = {
                server: U,
                websockets: [],
                roomMemberships: {}
            }, U
        }, ge.prototype.serverLookup = function(U) {
            var z = re(U),
                D = this.urlMap[z];
            if (D) return D.server
        }, ge.prototype.websocketsLookup = function(U, z, D) {
            var Y = re(U),
                le, Se = this.urlMap[Y];
            if (le = Se ? Se.websockets : [], z) {
                var be = Se.roomMemberships[z];
                le = be || []
            }
            return D ? le.filter(function(Be) {
                return Be !== D
            }) : le
        }, ge.prototype.removeServer = function(U) {
            delete this.urlMap[re(U)]
        }, ge.prototype.removeWebSocket = function(U, z) {
            var D = re(z),
                Y = this.urlMap[D];
            Y && (Y.websockets = X(Y.websockets, function(le) {
                return le === U
            }))
        }, ge.prototype.removeMembershipFromRoom = function(U, z) {
            var D = this.urlMap[re(U.url)],
                Y = D.roomMemberships[z];
            D && Y !== null && (D.roomMemberships[z] = X(Y, function(le) {
                return le === U
            }))
        };
        var xe = new ge,
            Me = {
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
            ye = {
                CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                EVENT: {
                    CONSTRUCT: "Failed to construct 'Event':",
                    MESSAGE: "Failed to construct 'MessageEvent':",
                    CLOSE: "Failed to construct 'CloseEvent':"
                }
            },
            Ve = function() {};
        Ve.prototype.stopPropagation = function() {}, Ve.prototype.stopImmediatePropagation = function() {}, Ve.prototype.initEvent = function(U, z, D) {
            U === void 0 && (U = "undefined"), z === void 0 && (z = !1), D === void 0 && (D = !1), this.type = "" + U, this.bubbles = !!z, this.cancelable = !!D
        };
        var xt = function(k) {
                function U(z, D) {
                    if (D === void 0 && (D = {}), k.call(this), !z) throw new TypeError(ye.EVENT_ERROR + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError(ye.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                    var Y = D.bubbles,
                        le = D.cancelable;
                    this.type = "" + z, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = le ? !!le : !1, this.cancelBubble = !1, this.bubbles = Y ? !!Y : !1
                }
                return k && (U.__proto__ = k), U.prototype = Object.create(k && k.prototype), U.prototype.constructor = U, U
            }(Ve),
            je = function(k) {
                function U(z, D) {
                    if (D === void 0 && (D = {}), k.call(this), !z) throw new TypeError(ye.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError(ye.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                    var Y = D.bubbles,
                        le = D.cancelable,
                        Se = D.data,
                        be = D.origin,
                        Be = D.lastEventId,
                        yt = D.ports;
                    this.type = "" + z, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = le ? !!le : !1, this.canncelBubble = !1, this.bubbles = Y ? !!Y : !1, this.origin = "" + be, this.ports = typeof yt > "u" ? null : yt, this.data = typeof Se > "u" ? null : Se, this.lastEventId = "" + (Be || "")
                }
                return k && (U.__proto__ = k), U.prototype = Object.create(k && k.prototype), U.prototype.constructor = U, U
            }(Ve),
            ht = function(k) {
                function U(z, D) {
                    if (D === void 0 && (D = {}), k.call(this), !z) throw new TypeError(ye.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError(ye.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                    var Y = D.bubbles,
                        le = D.cancelable,
                        Se = D.code,
                        be = D.reason,
                        Be = D.wasClean;
                    this.type = "" + z, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = le ? !!le : !1, this.cancelBubble = !1, this.bubbles = Y ? !!Y : !1, this.code = typeof Se == "number" ? parseInt(Se, 10) : 0, this.reason = "" + (be || ""), this.wasClean = Be ? !!Be : !1
                }
                return k && (U.__proto__ = k), U.prototype = Object.create(k && k.prototype), U.prototype.constructor = U, U
            }(Ve);

        function Ge(k) {
            var U = k.type,
                z = k.target,
                D = new xt(U);
            return z && (D.target = z, D.srcElement = z, D.currentTarget = z), D
        }

        function it(k) {
            var U = k.type,
                z = k.origin,
                D = k.data,
                Y = k.target,
                le = new je(U, {
                    data: D,
                    origin: z
                });
            return Y && (le.target = Y, le.srcElement = Y, le.currentTarget = Y), le
        }

        function st(k) {
            var U = k.code,
                z = k.reason,
                D = k.type,
                Y = k.target,
                le = k.wasClean;
            le || (le = U === Me.CLOSE_NORMAL || U === Me.CLOSE_NO_STATUS);
            var Se = new ht(D, {
                code: U,
                reason: z,
                wasClean: le
            });
            return Y && (Se.target = Y, Se.srcElement = Y, Se.currentTarget = Y), Se
        }

        function St(k, U, z) {
            k.readyState = de.CLOSING;
            var D = xe.serverLookup(k.url),
                Y = st({
                    type: "close",
                    target: k.target,
                    code: U,
                    reason: z
                });
            M(function() {
                xe.removeWebSocket(k, k.url), k.readyState = de.CLOSED, k.dispatchEvent(Y), D && D.dispatchEvent(Y, D)
            }, k)
        }

        function Dt(k, U, z) {
            k.readyState = de.CLOSING;
            var D = xe.serverLookup(k.url),
                Y = st({
                    type: "close",
                    target: k.target,
                    code: U,
                    reason: z,
                    wasClean: !1
                }),
                le = Ge({
                    type: "error",
                    target: k.target
                });
            M(function() {
                xe.removeWebSocket(k, k.url), k.readyState = de.CLOSED, k.dispatchEvent(le), k.dispatchEvent(Y), D && D.dispatchEvent(Y, D)
            }, k)
        }

        function A(k) {
            return Object.prototype.toString.call(k) !== "[object Blob]" && !(k instanceof ArrayBuffer) && (k = String(k)), k
        }
        var y = new WeakMap;

        function $(k) {
            if (y.has(k)) return y.get(k);
            var U = new Proxy(k, {
                get: function(D, Y) {
                    if (Y === "close") return function(be) {
                        be === void 0 && (be = {});
                        var Be = be.code || Me.CLOSE_NORMAL,
                            yt = be.reason || "";
                        St(U, Be, yt)
                    };
                    if (Y === "send") return function(be) {
                        be = A(be), k.dispatchEvent(it({
                            type: "message",
                            data: be,
                            origin: this.url,
                            target: k
                        }))
                    };
                    var le = function(Se) {
                        return Se === "message" ? "server::" + Se : Se
                    };
                    return Y === "on" ? function(be, Be) {
                        k.addEventListener(le(be), Be)
                    } : Y === "off" ? function(be, Be) {
                        k.removeEventListener(le(be), Be)
                    } : Y === "target" ? k : D[Y]
                }
            });
            return y.set(k, U), U
        }

        function J(k) {
            var U = encodeURIComponent(k).match(/%[89ABab]/g);
            return k.length + (U ? U.length : 0)
        }

        function ne(k) {
            var U = new q(k),
                z = U.pathname,
                D = U.protocol,
                Y = U.hash;
            if (!k) throw new TypeError(ye.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
            if (z || (U.pathname = "/"), D === "") throw new SyntaxError(ye.CONSTRUCTOR_ERROR + " The URL '" + U.toString() + "' is invalid.");
            if (D !== "ws:" && D !== "wss:") throw new SyntaxError(ye.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + D + "' is not allowed.");
            if (Y !== "") throw new SyntaxError(ye.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + Y + "'). Fragment identifiers are not allowed in WebSocket URLs.");
            return U.toString()
        }

        function ue(k) {
            if (k === void 0 && (k = []), !Array.isArray(k) && typeof k != "string") throw new SyntaxError(ye.CONSTRUCTOR_ERROR + " The subprotocol '" + k.toString() + "' is invalid.");
            typeof k == "string" && (k = [k]);
            var U = k.map(function(D) {
                    return {
                        count: 1,
                        protocol: D
                    }
                }).reduce(function(D, Y) {
                    return D[Y.protocol] = (D[Y.protocol] || 0) + Y.count, D
                }, {}),
                z = Object.keys(U).filter(function(D) {
                    return U[D] > 1
                });
            if (z.length > 0) throw new SyntaxError(ye.CONSTRUCTOR_ERROR + " The subprotocol '" + z[0] + "' is duplicated.");
            return k
        }
        var de = function(k) {
            function U(D, Y) {
                k.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = ne(D), Y = ue(Y), this.protocol = Y[0] || "", this.binaryType = "blob", this.readyState = U.CONNECTING;
                var le = $(this),
                    Se = xe.attachWebSocket(le, this.url);
                M(function() {
                    if (this.readyState === U.CONNECTING)
                        if (Se)
                            if (Se.options.verifyClient && typeof Se.options.verifyClient == "function" && !Se.options.verifyClient()) this.readyState = U.CLOSED, N("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), xe.removeWebSocket(le, this.url), this.dispatchEvent(Ge({
                                type: "error",
                                target: this
                            })), this.dispatchEvent(st({
                                type: "close",
                                target: this,
                                code: Me.CLOSE_NORMAL
                            }));
                            else {
                                if (Se.options.selectProtocol && typeof Se.options.selectProtocol == "function") {
                                    var Be = Se.options.selectProtocol(Y),
                                        yt = Be !== "",
                                        pr = Y.indexOf(Be) !== -1;
                                    if (yt && !pr) {
                                        this.readyState = U.CLOSED, N("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), xe.removeWebSocket(le, this.url), this.dispatchEvent(Ge({
                                            type: "error",
                                            target: this
                                        })), this.dispatchEvent(st({
                                            type: "close",
                                            target: this,
                                            code: Me.CLOSE_NORMAL
                                        }));
                                        return
                                    }
                                    this.protocol = Be
                                }
                                this.readyState = U.OPEN, this.dispatchEvent(Ge({
                                    type: "open",
                                    target: this
                                })), Se.dispatchEvent(Ge({
                                    type: "connection"
                                }), le)
                            }
                    else this.readyState = U.CLOSED, this.dispatchEvent(Ge({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(st({
                        type: "close",
                        target: this,
                        code: Me.CLOSE_NORMAL
                    })), N("error", "WebSocket connection to '" + this.url + "' failed")
                }, this)
            }
            k && (U.__proto__ = k), U.prototype = Object.create(k && k.prototype), U.prototype.constructor = U;
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
            }, U.prototype.send = function(Y) {
                var le = this;
                if (this.readyState === U.CONNECTING) throw new Error("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state");
                var Se = it({
                        type: "server::message",
                        origin: this.url,
                        data: A(Y)
                    }),
                    be = xe.serverLookup(this.url);
                be && M(function() {
                    le.dispatchEvent(Se, Y)
                }, be)
            }, U.prototype.close = function(Y, le) {
                if (Y !== void 0 && (typeof Y != "number" || Y !== 1e3 && (Y < 3e3 || Y > 4999))) throw new TypeError(ye.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + Y + " is neither.");
                if (le !== void 0) {
                    var Se = J(le);
                    if (Se > 123) throw new SyntaxError(ye.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                }
                if (!(this.readyState === U.CLOSING || this.readyState === U.CLOSED)) {
                    var be = $(this);
                    this.readyState === U.CONNECTING ? Dt(be, Y || Me.CLOSE_ABNORMAL, le) : St(be, Y || Me.CLOSE_NO_STATUS, le)
                }
            }, Object.defineProperties(U.prototype, z), U
        }(Q);
        de.CONNECTING = 0, de.prototype.CONNECTING = de.CONNECTING, de.OPEN = 1, de.prototype.OPEN = de.OPEN, de.CLOSING = 2, de.prototype.CLOSING = de.CLOSING, de.CLOSED = 3, de.prototype.CLOSED = de.CLOSED;
        var me = function(k) {
            function U(D, Y) {
                var le = this;
                D === void 0 && (D = "socket.io"), Y === void 0 && (Y = ""), k.call(this), this.binaryType = "blob";
                var Se = new q(D);
                Se.pathname || (Se.pathname = "/"), this.url = Se.toString(), this.readyState = U.CONNECTING, this.protocol = "", this.target = this, typeof Y == "string" || typeof Y == "object" && Y !== null ? this.protocol = Y : Array.isArray(Y) && Y.length > 0 && (this.protocol = Y[0]);
                var be = xe.attachWebSocket(this, this.url);
                M(function() {
                    be ? (this.readyState = U.OPEN, be.dispatchEvent(Ge({
                        type: "connection"
                    }), be, this), be.dispatchEvent(Ge({
                        type: "connect"
                    }), be, this), this.dispatchEvent(Ge({
                        type: "connect",
                        target: this
                    }))) : (this.readyState = U.CLOSED, this.dispatchEvent(Ge({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(st({
                        type: "close",
                        target: this,
                        code: Me.CLOSE_NORMAL
                    })), N("error", "Socket.io connection to '" + this.url + "' failed"))
                }, this), this.addEventListener("close", function(Be) {
                    le.dispatchEvent(st({
                        type: "disconnect",
                        target: Be.target,
                        code: Be.code
                    }))
                })
            }
            k && (U.__proto__ = k), U.prototype = Object.create(k && k.prototype), U.prototype.constructor = U;
            var z = {
                broadcast: {}
            };
            return U.prototype.close = function() {
                if (this.readyState === U.OPEN) {
                    var Y = xe.serverLookup(this.url);
                    return xe.removeWebSocket(this, this.url), this.readyState = U.CLOSED, this.dispatchEvent(st({
                        type: "close",
                        target: this,
                        code: Me.CLOSE_NORMAL
                    })), Y && Y.dispatchEvent(st({
                        type: "disconnect",
                        target: this,
                        code: Me.CLOSE_NORMAL
                    }), Y), this
                }
            }, U.prototype.disconnect = function() {
                return this.close()
            }, U.prototype.emit = function(Y) {
                for (var le = [], Se = arguments.length - 1; Se-- > 0;) le[Se] = arguments[Se + 1];
                if (this.readyState !== U.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var be = it({
                        type: Y,
                        origin: this.url,
                        data: le
                    }),
                    Be = xe.serverLookup(this.url);
                return Be && Be.dispatchEvent.apply(Be, [be].concat(le)), this
            }, U.prototype.send = function(Y) {
                return this.emit("message", Y), this
            }, z.broadcast.get = function() {
                if (this.readyState !== U.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var D = this,
                    Y = xe.serverLookup(this.url);
                if (!Y) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                return {
                    emit: function(Se, be) {
                        return Y.emit(Se, be, {
                            websockets: xe.websocketsLookup(D.url, null, D)
                        }), D
                    },
                    to: function(Se) {
                        return Y.to(Se, D)
                    },
                    in: function(Se) {
                        return Y.in(Se, D)
                    }
                }
            }, U.prototype.on = function(Y, le) {
                return this.addEventListener(Y, le), this
            }, U.prototype.off = function(Y, le) {
                this.removeEventListener(Y, le)
            }, U.prototype.hasListeners = function(Y) {
                var le = this.listeners[Y];
                return Array.isArray(le) ? !!le.length : !1
            }, U.prototype.join = function(Y) {
                xe.addMembershipToRoom(this, Y)
            }, U.prototype.leave = function(Y) {
                xe.removeMembershipFromRoom(this, Y)
            }, U.prototype.to = function(Y) {
                return this.broadcast.to(Y)
            }, U.prototype.in = function() {
                return this.to.apply(null, arguments)
            }, U.prototype.dispatchEvent = function(Y) {
                for (var le = this, Se = [], be = arguments.length - 1; be-- > 0;) Se[be] = arguments[be + 1];
                var Be = Y.type,
                    yt = this.listeners[Be];
                if (!Array.isArray(yt)) return !1;
                yt.forEach(function(pr) {
                    Se.length > 0 ? pr.apply(le, Se) : pr.call(le, Y.data ? Y.data : Y)
                })
            }, Object.defineProperties(U.prototype, z), U
        }(Q);
        me.CONNECTING = 0, me.OPEN = 1, me.CLOSING = 2, me.CLOSED = 3;
        var Re = function(U, z) {
            return new me(U, z)
        };
        Re.connect = function(U, z) {
            return Re(U, z)
        };
        var _e = function(k) {
            return k.reduce(function(U, z) {
                return U.indexOf(z) > -1 ? U : U.concat(z)
            }, [])
        };

        function Ce() {
            return typeof window < "u" ? window : typeof process == "object" && typeof ZX == "function" && typeof It == "object" ? It : this
        }
        var Ke = {
                mock: !0,
                verifyClient: null,
                selectProtocol: null
            },
            Ae = function(k) {
                function U(z, D) {
                    D === void 0 && (D = Ke), k.call(this);
                    var Y = new q(z);
                    Y.pathname || (Y.pathname = "/"), this.url = Y.toString(), this.originalWebSocket = null;
                    var le = xe.attachServer(this, this.url);
                    if (!le) throw this.dispatchEvent(Ge({
                        type: "error"
                    })), new Error("A mock server is already listening on this url");
                    this.options = Object.assign({}, Ke, D), this.options.mock && this.mockWebsocket()
                }
                return k && (U.__proto__ = k), U.prototype = Object.create(k && k.prototype), U.prototype.constructor = U, U.prototype.mockWebsocket = function() {
                    var D = Ce();
                    this.originalWebSocket = D.WebSocket, D.WebSocket = de
                }, U.prototype.restoreWebsocket = function() {
                    var D = Ce();
                    this.originalWebSocket !== null && (D.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                }, U.prototype.stop = function(D) {
                    D === void 0 && (D = function() {}), this.options.mock && this.restoreWebsocket(), xe.removeServer(this.url), typeof D == "function" && D()
                }, U.prototype.on = function(D, Y) {
                    this.addEventListener(D, Y)
                }, U.prototype.off = function(D, Y) {
                    this.removeEventListener(D, Y)
                }, U.prototype.close = function(D) {
                    D === void 0 && (D = {});
                    var Y = D.code,
                        le = D.reason,
                        Se = D.wasClean,
                        be = xe.websocketsLookup(this.url);
                    xe.removeServer(this.url), be.forEach(function(Be) {
                        Be.readyState = de.CLOSED, Be.dispatchEvent(st({
                            type: "close",
                            target: Be.target,
                            code: Y || Me.CLOSE_NORMAL,
                            reason: le || "",
                            wasClean: Se
                        }))
                    }), this.dispatchEvent(st({
                        type: "close"
                    }), this)
                }, U.prototype.emit = function(D, Y, le) {
                    var Se = this;
                    le === void 0 && (le = {});
                    var be = le.websockets;
                    be || (be = xe.websocketsLookup(this.url));
                    var Be;
                    typeof le != "object" || arguments.length > 3 ? (Y = Array.prototype.slice.call(arguments, 1, arguments.length), Be = Y.map(function(yt) {
                        return A(yt)
                    })) : Be = A(Y), be.forEach(function(yt) {
                        var pr = yt instanceof me ? Y : Be;
                        Array.isArray(pr) ? yt.dispatchEvent.apply(yt, [it({
                            type: D,
                            data: pr,
                            origin: Se.url,
                            target: yt.target
                        })].concat(pr)) : yt.dispatchEvent(it({
                            type: D,
                            data: pr,
                            origin: Se.url,
                            target: yt.target
                        }))
                    })
                }, U.prototype.clients = function() {
                    return xe.websocketsLookup(this.url)
                }, U.prototype.to = function(D, Y, le) {
                    var Se = this;
                    le === void 0 && (le = []);
                    var be = this,
                        Be = _e(le.concat(xe.websocketsLookup(this.url, D, Y)));
                    return {
                        to: function(yt, pr) {
                            return Se.to.call(Se, yt, pr, Be)
                        },
                        emit: function(pr, ke) {
                            be.emit(pr, ke, {
                                websockets: Be
                            })
                        }
                    }
                }, U.prototype.in = function() {
                    for (var D = [], Y = arguments.length; Y--;) D[Y] = arguments[Y];
                    return this.to.apply(null, D)
                }, U.prototype.simulate = function(D) {
                    var Y = xe.websocketsLookup(this.url);
                    D === "error" && Y.forEach(function(le) {
                        le.readyState = de.CLOSED, le.dispatchEvent(Ge({
                            type: "error",
                            target: le.target
                        }))
                    })
                }, U
            }(Q);
        Ae.of = function(U) {
            return new Ae(U)
        };
        var ie = Ae,
            oe = de,
            De = Re;
        r.Server = ie, r.WebSocket = oe, r.SocketIO = De, Object.defineProperty(r, "__esModule", {
            value: !0
        })
    })
})(Kx, Kx.exports);
var QX = {
    exports: {}
};
(function(t) {
    (function() {
        function e(f, c) {
            var p = f.x - c.x,
                d = f.y - c.y;
            return p * p + d * d
        }

        function r(f, c, p) {
            var d = c.x,
                E = c.y,
                m = p.x - d,
                g = p.y - E;
            if (m !== 0 || g !== 0) {
                var T = ((f.x - d) * m + (f.y - E) * g) / (m * m + g * g);
                T > 1 ? (d = p.x, E = p.y) : T > 0 && (d += m * T, E += g * T)
            }
            return m = f.x - d, g = f.y - E, m * m + g * g
        }

        function n(f, c) {
            for (var p = f[0], d = [p], E, m = 1, g = f.length; m < g; m++) E = f[m], e(E, p) > c && (d.push(E), p = E);
            return p !== E && d.push(E), d
        }

        function i(f, c, p, d, E) {
            for (var m = d, g, T = c + 1; T < p; T++) {
                var b = r(f[T], f[c], f[p]);
                b > m && (g = T, m = b)
            }
            m > d && (g - c > 1 && i(f, c, g, d, E), E.push(f[g]), p - g > 1 && i(f, g, p, d, E))
        }

        function s(f, c) {
            var p = f.length - 1,
                d = [f[0]];
            return i(f, 0, p, c, d), d.push(f[p]), d
        }

        function o(f, c, p) {
            if (f.length <= 2) return f;
            var d = c !== void 0 ? c * c : 1;
            return f = p ? f : n(f, d), f = s(f, d), f
        }
        t.exports = o, t.exports.default = o
    })()
})(QX);
var z1 = {},
    Pm = {},
    Um = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.EXTENDED_PICTOGRAPHIC = t.CLUSTER_BREAK = void 0,
        function(e) {
            e[e.CR = 0] = "CR", e[e.LF = 1] = "LF", e[e.CONTROL = 2] = "CONTROL", e[e.EXTEND = 3] = "EXTEND", e[e.REGIONAL_INDICATOR = 4] = "REGIONAL_INDICATOR", e[e.SPACINGMARK = 5] = "SPACINGMARK", e[e.L = 6] = "L", e[e.V = 7] = "V", e[e.T = 8] = "T", e[e.LV = 9] = "LV", e[e.LVT = 10] = "LVT", e[e.OTHER = 11] = "OTHER", e[e.PREPEND = 12] = "PREPEND", e[e.E_BASE = 13] = "E_BASE", e[e.E_MODIFIER = 14] = "E_MODIFIER", e[e.ZWJ = 15] = "ZWJ", e[e.GLUE_AFTER_ZWJ = 16] = "GLUE_AFTER_ZWJ", e[e.E_BASE_GAZ = 17] = "E_BASE_GAZ"
        }(t.CLUSTER_BREAK || (t.CLUSTER_BREAK = {})), t.EXTENDED_PICTOGRAPHIC = 101
})(Um);
var Dm = {};
Object.defineProperty(Dm, "__esModule", {
    value: !0
});
const ct = Um,
    bi = 0,
    vh = 1,
    ej = 2,
    tj = 3,
    rj = 4;
class nj {
    static isSurrogate(e, r) {
        return 55296 <= e.charCodeAt(r) && e.charCodeAt(r) <= 56319 && 56320 <= e.charCodeAt(r + 1) && e.charCodeAt(r + 1) <= 57343
    }
    static codePointAt(e, r) {
        r === void 0 && (r = 0);
        const n = e.charCodeAt(r);
        if (55296 <= n && n <= 56319 && r < e.length - 1) {
            const i = n,
                s = e.charCodeAt(r + 1);
            return 56320 <= s && s <= 57343 ? (i - 55296) * 1024 + (s - 56320) + 65536 : i
        }
        if (56320 <= n && n <= 57343 && r >= 1) {
            const i = e.charCodeAt(r - 1),
                s = n;
            return 55296 <= i && i <= 56319 ? (i - 55296) * 1024 + (s - 56320) + 65536 : s
        }
        return n
    }
    static shouldBreak(e, r, n, i, s, o) {
        const f = [e].concat(r).concat([n]),
            c = [i].concat(s).concat([o]),
            p = f[f.length - 2],
            d = n,
            E = o,
            m = f.lastIndexOf(ct.CLUSTER_BREAK.REGIONAL_INDICATOR);
        if (m > 0 && f.slice(1, m).every(function(T) {
                return T === ct.CLUSTER_BREAK.REGIONAL_INDICATOR
            }) && [ct.CLUSTER_BREAK.PREPEND, ct.CLUSTER_BREAK.REGIONAL_INDICATOR].indexOf(p) === -1) return f.filter(function(T) {
            return T === ct.CLUSTER_BREAK.REGIONAL_INDICATOR
        }).length % 2 === 1 ? tj : rj;
        if (p === ct.CLUSTER_BREAK.CR && d === ct.CLUSTER_BREAK.LF) return bi;
        if (p === ct.CLUSTER_BREAK.CONTROL || p === ct.CLUSTER_BREAK.CR || p === ct.CLUSTER_BREAK.LF) return vh;
        if (d === ct.CLUSTER_BREAK.CONTROL || d === ct.CLUSTER_BREAK.CR || d === ct.CLUSTER_BREAK.LF) return vh;
        if (p === ct.CLUSTER_BREAK.L && (d === ct.CLUSTER_BREAK.L || d === ct.CLUSTER_BREAK.V || d === ct.CLUSTER_BREAK.LV || d === ct.CLUSTER_BREAK.LVT)) return bi;
        if ((p === ct.CLUSTER_BREAK.LV || p === ct.CLUSTER_BREAK.V) && (d === ct.CLUSTER_BREAK.V || d === ct.CLUSTER_BREAK.T)) return bi;
        if ((p === ct.CLUSTER_BREAK.LVT || p === ct.CLUSTER_BREAK.T) && d === ct.CLUSTER_BREAK.T) return bi;
        if (d === ct.CLUSTER_BREAK.EXTEND || d === ct.CLUSTER_BREAK.ZWJ) return bi;
        if (d === ct.CLUSTER_BREAK.SPACINGMARK) return bi;
        if (p === ct.CLUSTER_BREAK.PREPEND) return bi;
        const g = c.slice(0, -1).lastIndexOf(ct.EXTENDED_PICTOGRAPHIC);
        return g !== -1 && c[g] === ct.EXTENDED_PICTOGRAPHIC && f.slice(g + 1, -2).every(function(T) {
            return T === ct.CLUSTER_BREAK.EXTEND
        }) && p === ct.CLUSTER_BREAK.ZWJ && E === ct.EXTENDED_PICTOGRAPHIC ? bi : r.indexOf(ct.CLUSTER_BREAK.REGIONAL_INDICATOR) !== -1 ? ej : p === ct.CLUSTER_BREAK.REGIONAL_INDICATOR && d === ct.CLUSTER_BREAK.REGIONAL_INDICATOR ? bi : vh
    }
}
Dm.default = nj;
var Bm = {};
Object.defineProperty(Bm, "__esModule", {
    value: !0
});
class ij {
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
Bm.default = ij;
var q1 = It && It.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
};
Object.defineProperty(Pm, "__esModule", {
    value: !0
});
const u = Um,
    cf = q1(Dm),
    sj = q1(Bm);
class Si {
    static nextBreak(e, r) {
        if (r === void 0 && (r = 0), r < 0) return 0;
        if (r >= e.length - 1) return e.length;
        const n = cf.default.codePointAt(e, r),
            i = Si.getGraphemeBreakProperty(n),
            s = Si.getEmojiProperty(n),
            o = [],
            f = [];
        for (let c = r + 1; c < e.length; c++) {
            if (cf.default.isSurrogate(e, c - 1)) continue;
            const p = cf.default.codePointAt(e, c),
                d = Si.getGraphemeBreakProperty(p),
                E = Si.getEmojiProperty(p);
            if (cf.default.shouldBreak(i, o, d, s, f, E)) return c;
            o.push(d), f.push(E)
        }
        return e.length
    }
    splitGraphemes(e) {
        const r = [];
        let n = 0,
            i;
        for (;
            (i = Si.nextBreak(e, n)) < e.length;) r.push(e.slice(n, i)), n = i;
        return n < e.length && r.push(e.slice(n)), r
    }
    iterateGraphemes(e) {
        return new sj.default(e, Si.nextBreak)
    }
    countGraphemes(e) {
        let r = 0,
            n = 0,
            i;
        for (;
            (i = Si.nextBreak(e, n)) < e.length;) n = i, r++;
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
Pm.default = Si;
var aj = It && It.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
};
Object.defineProperty(z1, "__esModule", {
    value: !0
});
const oj = aj(Pm);
var lj = z1.default = oj.default;
new lj;
class uj {
    static async warningsForAppTag(e) {
        var i;
        const r = [],
            n = eu(e);
        return this.isCanvasSupported || r.push("canvas"), this.isFlexboxSupported || r.push("flexbox"), (i = n == null ? void 0 : n.features) != null && i.includes("camera") && !await this.isCameraSupported && r.push("camera"), r
    }
    static get isCanvasSupported() {
        const e = document.createElement("canvas");
        return !!(e.getContext && e.getContext("2d"))
    }
    static get isFlexboxSupported() {
        try {
            return CSS.supports("flex-wrap", "wrap")
        } catch {
            return !1
        }
    }
    static get isCameraSupported() {
        return new Promise((e, r) => {
            var n;
            (n = navigator.mediaDevices) == null || n.enumerateDevices().then(i => e(i.some(s => s.kind === "videoinput"))).catch(i => r(i))
        })
    }
}
class UE {
    static withTypes(e, r) {
        let n = e;
        return r.forEach(i => {
            typeof this[i] == "function" && (n = this[i](n))
        }), n
    }
    static html(e) {
        if (String(e).match(/<fart>/g)) {
            const n = new Audio(new URL("main/@connect/assets/BhWysX6c.wav", import.meta.url).href);
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
    static nonEmoji(e) {
        return e.replace(new RegExp("\\p{Currency_Symbol}", "gu"), "").replace(new RegExp("\\p{Letter}", "gu"), "").replace(new RegExp("\\p{Number}", "gu"), "").replace(new RegExp("\\p{Math_Symbol}", "gu"), "").replace(new RegExp("\\p{Punctuation}", "gu"), "").replace(new RegExp("\\p{Separator}", "gu"), "").replace(/[`^¿]/gu, "")
    }
}
let pf;
const fj = new Uint8Array(16);

function cj() {
    if (!pf && (pf = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !pf)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return pf(fj)
}
const Tr = [];
for (let t = 0; t < 256; ++t) Tr.push((t + 256).toString(16).slice(1));

function pj(t, e = 0) {
    return Tr[t[e + 0]] + Tr[t[e + 1]] + Tr[t[e + 2]] + Tr[t[e + 3]] + "-" + Tr[t[e + 4]] + Tr[t[e + 5]] + "-" + Tr[t[e + 6]] + Tr[t[e + 7]] + "-" + Tr[t[e + 8]] + Tr[t[e + 9]] + "-" + Tr[t[e + 10]] + Tr[t[e + 11]] + Tr[t[e + 12]] + Tr[t[e + 13]] + Tr[t[e + 14]] + Tr[t[e + 15]]
}
const dj = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    kx = {
        randomUUID: dj
    };

function hj(t, e, r) {
    if (kx.randomUUID && !e && !t) return kx.randomUUID();
    t = t || {};
    const n = t.random || (t.rng || cj)();
    if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, e) {
        r = r || 0;
        for (let i = 0; i < 16; ++i) e[r + i] = n[i];
        return e
    }
    return pj(n)
}
class Ej {
    constructor(e) {
        Xn(this, "user");
        if (!qe.isSupported) {
            console.warn("Twitch Login requires local storage");
            return
        }
        this.processParams(e)
    }
    prepare() {
        return !qe.isSupported || !qe.get("token") ? null : this.fetchUser()
    }
    login() {
        if (!qe.isSupported) return;
        const e = hj();
        qe.set("twitchState", e);
        const r = "yn2iepd23vskpmkzgeg2lkfsct7gsc";
        let n = `https://${window.location.hostname}`;
        window.location.hostname === "localhost" && (n = "http://localhost:9090/");
        let i = "https://id.twitch.tv/oauth2/authorize";
        i += `?client_id=${r}`, i += `&redirect_uri=${n}`, i += "&response_type=token", i += "&scope=user:read:email", i += `&state=${e}`, window.location.href = i
    }
    logout() {
        qe.isSupported && (delete this.user, qe.remove("token"))
    }
    processParams(e) {
        if (!e || !qe.isSupported) return;
        const r = qe.get("twitchState");
        if (!r) {
            console.error("[Twitch] Could not find the expected state in local storage");
            return
        }
        const n = new URLSearchParams(e),
            i = n.get("access_token"),
            s = n.get("state");
        if (!i) {
            console.error("[Twitch] Invalid Twitch redirect hash");
            return
        }
        s !== r && console.error("[Twitch] State parameter doesn't match the expected state"), qe.set("token", i), qe.remove("twitchState"), window.history.replaceState({}, document.title, "/")
    }
    async fetchUser() {
        if (!qe.isSupported) return null;
        const e = qe.get("token");
        if (!e) throw new Error("[Twitch] Token not found in local storage");
        try {
            const n = await (await fetch("https://api.twitch.tv/helix/users", {
                headers: {
                    Authorization: `Bearer ${e}`,
                    "Client-ID": "yn2iepd23vskpmkzgeg2lkfsct7gsc"
                }
            })).json();
            if (!n || !n.data) return null;
            const i = n.data[0];
            return i.token = e, this.user = i, this.user
        } catch (r) {
            return console.warn(r), null
        }
    }
}
const iz = {
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
        SUBMIT: "Wyślij",
        TRY_AGAIN: "Spróbuj ponownie",
        UNDO: "Cofnij",
        YES: "Tak"
    },
    sz = {
        UGC: {
            VISIBILITY_CONTROLLER_OFF: "Wskazówki ukryte na urządzeniach graczy",
            VISIBILITY_CONTROLLER_ON: "Wskazówki wyświetlane na urządzeniach graczy",
            VISIBILITY_SCREEN_OFF: "Wskazówki ukryte na ekranie gry",
            VISIBILITY_SCREEN_ON: "Wskazówki wyświetlane na ekranie gry"
        }
    },
    az = {
        DISCONNECTED: "Utracono połączenie.",
        DRAWING_NOTHING: "Musisz coś narysować!",
        PLAYER_KICKED: "Zostałeś wyrzucony przez moderatora.",
        ROOM_DESTROYED: "Dziękujemy za grę!",
        ROOM_DISCONNECTED: "Utracono połączenie",
        TEXT_NAUGHTY: "Przepraszamy, nie możesz tego wpisać. Prosimy o wyrozumiałość dla innych graczy.",
        TEXT_NOTHING: "Musisz coś wpisać!",
        TITLE: "Błąd"
    },
    oz = "ZAŁADUJ",
    lz = {
        JOINED_COUNT: "Dołączyło {count} z {maxPlayers} graczy",
        PLAYERS_NEEDED: "Potrzebny 1 gracz do rozpoczęcia | Potrzebnych jest {count} graczy do rozpoczęcia",
        WAITING_FOR_VIP: "Oczekiwanie na rozpoczęcie gry przez {name}",
        WAITING_FOR_GAMEPAD: "Oczekiwanie na rozpoczęcie gry",
        WAITING_FOR_NEW_GAME: "Oczekiwanie na rozpoczęcie nowej gry",
        GAME_STARTING: "Gra się rozpoczyna",
        BUTTON_START: "Naciśnij, aby rozpocząć",
        BUTTON_CANCEL: "Naciśnij, aby anulować"
    },
    uz = {
        GALLERY_LINK: "Odwiedź Galerię",
        NEW_GAME_STARTED: "Rozpoczęła się nowa gra",
        PLAY_AGAIN: "Zagrać ponownie?",
        THANKS_FOR_PLAYING: "Dziękujemy za grę!",
        BUTTON_GO_TO_GAME: "Przejdź do gry",
        BUTTON_GO_TO_JACKBOX: "Wróć do jackbox.pl",
        BUTTON_SAME_PLAYERS: "Ci sami gracze",
        BUTTON_NEW_PLAYERS: "Nowi gracze"
    },
    fz = {
        AND: "I",
        OR: "LUB"
    },
    cz = {
        BUTTON_SKIP: "Pomiń",
        BUTTON_NEXT: "Dalej",
        BUTTON_DONE: "Jazda!"
    },
    pz = {
        NAZWA: "Publiczność"
    },
    dz = {
        CART: {
            CHECK_OUT: "Przejdź do kasy",
            EMPTY: "Twój koszyk jest pusty",
            TITLE: "Koszyk",
            TOTAL: "Suma"
        }
    },
    hz = {
        EPISODE_REPORT: "Zgłoś Odcinek",
        EPISODE_UNLOAD: "Dezaktywuj odcinek",
        EPISODE_VIEW_AUTHOR: "Wyświetl autora",
        EPISODES_LOAD: "Załaduj odcinek na podstawie jego identyfikatora:",
        EPISODES_MENU: "Menu odcinków",
        EPISODES_SELECT: "Albo wybierz odcinek:",
        EPISODES_WARNING: "Uwaga: Treści tworzone przez użytkowników nie są sprawdzane pod kątem odpowiedniości dla całej rodziny",
        INSTRUCTION: {
            CREATE_TITLE: 'Najpierw nadaj nazwę swojemu odcinkowi, który będzie zawierał wszystkie Twoje podpowiedzi, a następnie naciśnij „Utwórz”".',
            LOAD: "Utwórz lub wczytaj?",
            PUBLISH: "Opublikuj swój odcinek",
            TITLE: "Nadaj tytuł swojemu odcinkowi",
            TOGGLE_VISIBILITY: "Naciśnij, aby wyświetlić / ukryć podpowiedzi",
            WRITE: "Napisz swoje podpowiedzi"
        },
        WARNING: {
            DELETE: "Czy na pewno chcesz usunąć ten odcinek?",
            TOS: "Udostępniając treści, wyrażasz zgodę na nasze [tos]Warunki korzystania z serwisu[/tos]",
            TOS_AGREE: "Polub i udostępnij"
        },
        BACK_TO_EPISODES: "Powrót do odcinków",
        BACK_TO_MENU: "Powrót do menu",
        CREATE_NEW_EPISODE: "Utwórz własny odcinek",
        PREVIOUS_EPISODES: "Poprzedni odcinek",
        PROMPT_ADD: "Dodaj podpowiedź",
        PROMPT_PLACEHOLDER: "Wprowadź  podpowiedź",
        PROMPTS_COUNT_HIDDEN: "({count} ukrytych)",
        TITLE_PLACEHOLDER: "Wprowadź tytuł"
    },
    Ez = {
        BROADCASTER: {
            SUBTEXT: "Pomyślnie połączyłeś swoje konto z rozszerzeniem Jackbox Audience Kit na Twitchu.",
            WARNING: "W TYM POMIESZCZENIU USTAWIENIE DOTYCZĄCE PUBLICZNOŚCI NIE JEST AKTYWNE"
        },
        RECONNECTED: {
            TEXT: "NOWE POŁĄCZENIE",
            SUBTEXT: "Miłej zabawy!"
        },
        RECONNECTING: {
            CONTROLLER: {
                TEXT: "POŁĄCZENIE PRZERWANE",
                SUBTEXT: "Ponownie nawiązanie połączenia ({attempt} z 5)"
            },
            GAME: {
                TEXT: "POŁĄCZENIE Z GRĄ ZAKŁÓCONE",
                SUBTEXT: "Proszę poczekać, podczas gdy próbujemy przywrócić połączenie."
            }
        },
        PAUSED: {
            TEXT: "GRA ZOSTAŁA SPAUZOWANA",
            SUBTEXT: "Everything you submit will continue to be sent to the game."
        }
    },
    mz = {
        SHARE: "Udostępnij",
        COPY_TO_CLIPBOARD: "Kopiuj do schowka",
        COPIED: "Skopiowano"
    },
    gz = {
        ACTION: iz,
        ALT: sz,
        ERROR: az,
        LOADING: oz,
        LOBBY: lz,
        POST_GAME: uz,
        SEPARATOR: fz,
        TUTORIAL: cz,
        AUDIENCE: pz,
        GALLERY: dz,
        UGC: hz,
        TOAST: Ez,
        SHARE: mz
    },
    aq = {
        en: gz
    },
    Ur = (t, e) => {
        const r = t.__vccOpts || t;
        for (const [n, i] of e) r[n] = i;
        return r
    };
const oq = cr({
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
                if (this.sanitizers && (e.value = UE.withTypes(e.value, [...this.sanitizers])), e.value.length > r) {
                    e.value = e.value.substring(0, r);
                    return
                }
                this.$emit("update:modelValue", e.value), await this.$nextTick(), e.value !== this.modelValue && (e.value = this.modelValue)
            }
        }
    }),
    lq = ["value"];

function uq(t, e, r, n, i, s) {
    return Le(), Oe("input", {
        ref: "input",
        value: t.modelValue,
        onInput: e[0] || (e[0] = (...o) => t.onInput && t.onInput(...o))
    }, null, 40, lq)
}
const fq = Ur(oq, [
    ["render", uq]
]);
var Fs, df, Ol = typeof Map == "function" ? new Map : (Fs = [], df = [], {
        has: function(t) {
            return Fs.indexOf(t) > -1
        },
        get: function(t) {
            return df[Fs.indexOf(t)]
        },
        set: function(t, e) {
            Fs.indexOf(t) === -1 && (Fs.push(t), df.push(e))
        },
        delete: function(t) {
            var e = Fs.indexOf(t);
            e > -1 && (Fs.splice(e, 1), df.splice(e, 1))
        }
    }),
    Y1 = function(t) {
        return new Event(t, {
            bubbles: !0
        })
    };
try {
    new Event("test")
} catch {
    Y1 = function(e) {
        var r = document.createEvent("Event");
        return r.initEvent(e, !0, !1), r
    }
}

function cq(t) {
    var e = Ol.get(t);
    e && e.destroy()
}

function pq(t) {
    var e = Ol.get(t);
    e && e.update()
}
var hf = null;
typeof window > "u" || typeof window.getComputedStyle != "function" ? ((hf = function(t) {
    return t
}).destroy = function(t) {
    return t
}, hf.update = function(t) {
    return t
}) : ((hf = function(t, e) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], function(r) {
        return function(n) {
            if (n && n.nodeName && n.nodeName === "TEXTAREA" && !Ol.has(n)) {
                var i, s = null,
                    o = null,
                    f = null,
                    c = function() {
                        n.clientWidth !== o && m()
                    },
                    p = (function(g) {
                        window.removeEventListener("resize", c, !1), n.removeEventListener("input", m, !1), n.removeEventListener("keyup", m, !1), n.removeEventListener("autosize:destroy", p, !1), n.removeEventListener("autosize:update", m, !1), Object.keys(g).forEach(function(T) {
                            n.style[T] = g[T]
                        }), Ol.delete(n)
                    }).bind(n, {
                        height: n.style.height,
                        resize: n.style.resize,
                        overflowY: n.style.overflowY,
                        overflowX: n.style.overflowX,
                        wordWrap: n.style.wordWrap
                    });
                n.addEventListener("autosize:destroy", p, !1), "onpropertychange" in n && "oninput" in n && n.addEventListener("keyup", m, !1), window.addEventListener("resize", c, !1), n.addEventListener("input", m, !1), n.addEventListener("autosize:update", m, !1), n.style.overflowX = "hidden", n.style.wordWrap = "break-word", Ol.set(n, {
                    destroy: p,
                    update: m
                }), (i = window.getComputedStyle(n, null)).resize === "vertical" ? n.style.resize = "none" : i.resize === "both" && (n.style.resize = "horizontal"), s = i.boxSizing === "content-box" ? -(parseFloat(i.paddingTop) + parseFloat(i.paddingBottom)) : parseFloat(i.borderTopWidth) + parseFloat(i.borderBottomWidth), isNaN(s) && (s = 0), m()
            }

            function d(g) {
                var T = n.style.width;
                n.style.width = "0px", n.style.width = T, n.style.overflowY = g
            }

            function E() {
                if (n.scrollHeight !== 0) {
                    var g = function(b) {
                            for (var S = []; b && b.parentNode && b.parentNode instanceof Element;) b.parentNode.scrollTop && S.push({
                                node: b.parentNode,
                                scrollTop: b.parentNode.scrollTop
                            }), b = b.parentNode;
                            return S
                        }(n),
                        T = document.documentElement && document.documentElement.scrollTop;
                    n.style.height = "", n.style.height = n.scrollHeight + s + "px", o = n.clientWidth, g.forEach(function(b) {
                        b.node.scrollTop = b.scrollTop
                    }), T && (document.documentElement.scrollTop = T)
                }
            }

            function m() {
                E();
                var g = Math.round(parseFloat(n.style.height)),
                    T = window.getComputedStyle(n, null),
                    b = T.boxSizing === "content-box" ? Math.round(parseFloat(T.height)) : n.offsetHeight;
                if (b < g ? T.overflowY === "hidden" && (d("scroll"), E(), b = T.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight) : T.overflowY !== "hidden" && (d("hidden"), E(), b = T.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight), f !== b) {
                    f = b;
                    var S = Y1("autosize:resized");
                    try {
                        n.dispatchEvent(S)
                    } catch {}
                }
            }
        }(r)
    }), t
}).destroy = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], cq), t
}, hf.update = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], pq), t
});
var pl = function(t) {
        return t && t.Math === Math && t
    },
    Zr = pl(typeof globalThis == "object" && globalThis) || pl(typeof window == "object" && window) || pl(typeof self == "object" && self) || pl(typeof It == "object" && It) || pl(typeof It == "object" && It) || function() {
        return this
    }() || Function("return this")(),
    Mm = {},
    fn = function(t) {
        try {
            return !!t()
        } catch {
            return !0
        }
    },
    dq = fn,
    Ls = !dq(function() {
        return Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1] !== 7
    }),
    hq = fn,
    $m = !hq(function() {
        var t = (function() {}).bind();
        return typeof t != "function" || t.hasOwnProperty("prototype")
    }),
    Eq = $m,
    Ef = Function.prototype.call,
    Mi = Eq ? Ef.bind(Ef) : function() {
        return Ef.apply(Ef, arguments)
    },
    J1 = {},
    Z1 = {}.propertyIsEnumerable,
    Q1 = Object.getOwnPropertyDescriptor,
    mq = Q1 && !Z1.call({
        1: 2
    }, 1);
J1.f = mq ? function(e) {
    var r = Q1(this, e);
    return !!r && r.enumerable
} : Z1;
var eL = function(t, e) {
        return {
            enumerable: !(t & 1),
            configurable: !(t & 2),
            writable: !(t & 4),
            value: e
        }
    },
    tL = $m,
    rL = Function.prototype,
    DE = rL.call,
    gq = tL && rL.bind.bind(DE, DE),
    Hr = tL ? gq : function(t) {
        return function() {
            return DE.apply(t, arguments)
        }
    },
    nL = Hr,
    _q = nL({}.toString),
    Tq = nL("".slice),
    dp = function(t) {
        return Tq(_q(t), 8, -1)
    },
    vq = Hr,
    bq = fn,
    xq = dp,
    bh = Object,
    Rq = vq("".split),
    Sq = bq(function() {
        return !bh("z").propertyIsEnumerable(0)
    }) ? function(t) {
        return xq(t) === "String" ? Rq(t, "") : bh(t)
    } : bh,
    hp = function(t) {
        return t == null
    },
    yq = hp,
    Aq = TypeError,
    iu = function(t) {
        if (yq(t)) throw new Aq("Can't call method on " + t);
        return t
    },
    Lq = Sq,
    Cq = iu,
    Ep = function(t) {
        return Lq(Cq(t))
    },
    xh = typeof document == "object" && document.all,
    Qr = typeof xh > "u" && xh !== void 0 ? function(t) {
        return typeof t == "function" || t === xh
    } : function(t) {
        return typeof t == "function"
    },
    wq = Qr,
    Fo = function(t) {
        return typeof t == "object" ? t !== null : wq(t)
    },
    Rh = Zr,
    Oq = Qr,
    Iq = function(t) {
        return Oq(t) ? t : void 0
    },
    Km = function(t, e) {
        return arguments.length < 2 ? Iq(Rh[t]) : Rh[t] && Rh[t][e]
    },
    Nq = Hr,
    iL = Nq({}.isPrototypeOf),
    Pq = typeof navigator < "u" && String(navigator.userAgent) || "",
    sL = Zr,
    Sh = Pq,
    Gx = sL.process,
    Vx = sL.Deno,
    Fx = Gx && Gx.versions || Vx && Vx.version,
    Hx = Fx && Fx.v8,
    Pn, vc;
Hx && (Pn = Hx.split("."), vc = Pn[0] > 0 && Pn[0] < 4 ? 1 : +(Pn[0] + Pn[1]));
!vc && Sh && (Pn = Sh.match(/Edge\/(\d+)/), (!Pn || Pn[1] >= 74) && (Pn = Sh.match(/Chrome\/(\d+)/), Pn && (vc = +Pn[1])));
var Uq = vc,
    Wx = Uq,
    Dq = fn,
    Bq = Zr,
    Mq = Bq.String,
    aL = !!Object.getOwnPropertySymbols && !Dq(function() {
        var t = Symbol("symbol detection");
        return !Mq(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && Wx && Wx < 41
    }),
    $q = aL,
    oL = $q && !Symbol.sham && typeof Symbol.iterator == "symbol",
    Kq = Km,
    kq = Qr,
    Gq = iL,
    Vq = oL,
    Fq = Object,
    lL = Vq ? function(t) {
        return typeof t == "symbol"
    } : function(t) {
        var e = Kq("Symbol");
        return kq(e) && Gq(e.prototype, Fq(t))
    },
    Hq = String,
    Wq = function(t) {
        try {
            return Hq(t)
        } catch {
            return "Object"
        }
    },
    Xq = Qr,
    jq = Wq,
    zq = TypeError,
    qq = function(t) {
        if (Xq(t)) return t;
        throw new zq(jq(t) + " is not a function")
    },
    Yq = qq,
    Jq = hp,
    km = function(t, e) {
        var r = t[e];
        return Jq(r) ? void 0 : Yq(r)
    },
    yh = Mi,
    Ah = Qr,
    Lh = Fo,
    Zq = TypeError,
    Qq = function(t, e) {
        var r, n;
        if (e === "string" && Ah(r = t.toString) && !Lh(n = yh(r, t)) || Ah(r = t.valueOf) && !Lh(n = yh(r, t)) || e !== "string" && Ah(r = t.toString) && !Lh(n = yh(r, t))) return n;
        throw new Zq("Can't convert object to primitive value")
    },
    uL = {
        exports: {}
    },
    Xx = Zr,
    eY = Object.defineProperty,
    Gm = function(t, e) {
        try {
            eY(Xx, t, {
                value: e,
                configurable: !0,
                writable: !0
            })
        } catch {
            Xx[t] = e
        }
        return e
    },
    tY = Zr,
    rY = Gm,
    jx = "__core-js_shared__",
    zx = uL.exports = tY[jx] || rY(jx, {});
(zx.versions || (zx.versions = [])).push({
    version: "3.36.1",
    mode: "global",
    copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE",
    source: "https://github.com/zloirock/core-js"
});
var Vm = uL.exports,
    qx = Vm,
    Fm = function(t, e) {
        return qx[t] || (qx[t] = e || {})
    },
    nY = iu,
    iY = Object,
    fL = function(t) {
        return iY(nY(t))
    },
    sY = Hr,
    aY = fL,
    oY = sY({}.hasOwnProperty),
    Cs = Object.hasOwn || function(e, r) {
        return oY(aY(e), r)
    },
    lY = Hr,
    uY = 0,
    fY = Math.random(),
    cY = lY(1 .toString),
    cL = function(t) {
        return "Symbol(" + (t === void 0 ? "" : t) + ")_" + cY(++uY + fY, 36)
    },
    pY = Zr,
    dY = Fm,
    Yx = Cs,
    hY = cL,
    EY = aL,
    mY = oL,
    qa = pY.Symbol,
    Ch = dY("wks"),
    gY = mY ? qa.for || qa : qa && qa.withoutSetter || hY,
    ga = function(t) {
        return Yx(Ch, t) || (Ch[t] = EY && Yx(qa, t) ? qa[t] : gY("Symbol." + t)), Ch[t]
    },
    _Y = Mi,
    Jx = Fo,
    Zx = lL,
    TY = km,
    vY = Qq,
    bY = ga,
    xY = TypeError,
    RY = bY("toPrimitive"),
    SY = function(t, e) {
        if (!Jx(t) || Zx(t)) return t;
        var r = TY(t, RY),
            n;
        if (r) {
            if (e === void 0 && (e = "default"), n = _Y(r, t, e), !Jx(n) || Zx(n)) return n;
            throw new xY("Can't convert object to primitive value")
        }
        return e === void 0 && (e = "number"), vY(t, e)
    },
    yY = SY,
    AY = lL,
    pL = function(t) {
        var e = yY(t, "string");
        return AY(e) ? e : e + ""
    },
    LY = Zr,
    Qx = Fo,
    BE = LY.document,
    CY = Qx(BE) && Qx(BE.createElement),
    dL = function(t) {
        return CY ? BE.createElement(t) : {}
    },
    wY = Ls,
    OY = fn,
    IY = dL,
    hL = !wY && !OY(function() {
        return Object.defineProperty(IY("div"), "a", {
            get: function() {
                return 7
            }
        }).a !== 7
    }),
    NY = Ls,
    PY = Mi,
    UY = J1,
    DY = eL,
    BY = Ep,
    MY = pL,
    $Y = Cs,
    KY = hL,
    eR = Object.getOwnPropertyDescriptor;
Mm.f = NY ? eR : function(e, r) {
    if (e = BY(e), r = MY(r), KY) try {
        return eR(e, r)
    } catch {}
    if ($Y(e, r)) return DY(!PY(UY.f, e, r), e[r])
};
var su = {},
    kY = Ls,
    GY = fn,
    EL = kY && GY(function() {
        return Object.defineProperty(function() {}, "prototype", {
            value: 42,
            writable: !1
        }).prototype !== 42
    }),
    VY = Fo,
    FY = String,
    HY = TypeError,
    _a = function(t) {
        if (VY(t)) return t;
        throw new HY(FY(t) + " is not an object")
    },
    WY = Ls,
    XY = hL,
    jY = EL,
    mf = _a,
    tR = pL,
    zY = TypeError,
    wh = Object.defineProperty,
    qY = Object.getOwnPropertyDescriptor,
    Oh = "enumerable",
    Ih = "configurable",
    Nh = "writable";
su.f = WY ? jY ? function(e, r, n) {
    if (mf(e), r = tR(r), mf(n), typeof e == "function" && r === "prototype" && "value" in n && Nh in n && !n[Nh]) {
        var i = qY(e, r);
        i && i[Nh] && (e[r] = n.value, n = {
            configurable: Ih in n ? n[Ih] : i[Ih],
            enumerable: Oh in n ? n[Oh] : i[Oh],
            writable: !1
        })
    }
    return wh(e, r, n)
} : wh : function(e, r, n) {
    if (mf(e), r = tR(r), mf(n), XY) try {
        return wh(e, r, n)
    } catch {}
    if ("get" in n || "set" in n) throw new zY("Accessors not supported");
    return "value" in n && (e[r] = n.value), e
};
var YY = Ls,
    JY = su,
    ZY = eL,
    Hm = YY ? function(t, e, r) {
        return JY.f(t, e, ZY(1, r))
    } : function(t, e, r) {
        return t[e] = r, t
    },
    mL = {
        exports: {}
    },
    ME = Ls,
    QY = Cs,
    gL = Function.prototype,
    eJ = ME && Object.getOwnPropertyDescriptor,
    Wm = QY(gL, "name"),
    tJ = Wm && (function() {}).name === "something",
    rJ = Wm && (!ME || ME && eJ(gL, "name").configurable),
    nJ = {
        EXISTS: Wm,
        PROPER: tJ,
        CONFIGURABLE: rJ
    },
    iJ = Hr,
    sJ = Qr,
    $E = Vm,
    aJ = iJ(Function.toString);
sJ($E.inspectSource) || ($E.inspectSource = function(t) {
    return aJ(t)
});
var oJ = $E.inspectSource,
    lJ = Zr,
    uJ = Qr,
    rR = lJ.WeakMap,
    fJ = uJ(rR) && /native code/.test(String(rR)),
    cJ = Fm,
    pJ = cL,
    nR = cJ("keys"),
    _L = function(t) {
        return nR[t] || (nR[t] = pJ(t))
    },
    Xm = {},
    dJ = fJ,
    TL = Zr,
    hJ = Fo,
    EJ = Hm,
    Ph = Cs,
    Uh = Vm,
    mJ = _L,
    gJ = Xm,
    iR = "Object already initialized",
    KE = TL.TypeError,
    _J = TL.WeakMap,
    bc, Fl, xc, TJ = function(t) {
        return xc(t) ? Fl(t) : bc(t, {})
    },
    vJ = function(t) {
        return function(e) {
            var r;
            if (!hJ(e) || (r = Fl(e)).type !== t) throw new KE("Incompatible receiver, " + t + " required");
            return r
        }
    };
if (dJ || Uh.state) {
    var Yn = Uh.state || (Uh.state = new _J);
    Yn.get = Yn.get, Yn.has = Yn.has, Yn.set = Yn.set, bc = function(t, e) {
        if (Yn.has(t)) throw new KE(iR);
        return e.facade = t, Yn.set(t, e), e
    }, Fl = function(t) {
        return Yn.get(t) || {}
    }, xc = function(t) {
        return Yn.has(t)
    }
} else {
    var Ka = mJ("state");
    gJ[Ka] = !0, bc = function(t, e) {
        if (Ph(t, Ka)) throw new KE(iR);
        return e.facade = t, EJ(t, Ka, e), e
    }, Fl = function(t) {
        return Ph(t, Ka) ? t[Ka] : {}
    }, xc = function(t) {
        return Ph(t, Ka)
    }
}
var vL = {
        set: bc,
        get: Fl,
        has: xc,
        enforce: TJ,
        getterFor: vJ
    },
    jm = Hr,
    bJ = fn,
    xJ = Qr,
    gf = Cs,
    kE = Ls,
    RJ = nJ.CONFIGURABLE,
    SJ = oJ,
    bL = vL,
    yJ = bL.enforce,
    AJ = bL.get,
    sR = String,
    Gf = Object.defineProperty,
    LJ = jm("".slice),
    CJ = jm("".replace),
    wJ = jm([].join),
    OJ = kE && !bJ(function() {
        return Gf(function() {}, "length", {
            value: 8
        }).length !== 8
    }),
    IJ = String(String).split("String"),
    NJ = mL.exports = function(t, e, r) {
        LJ(sR(e), 0, 7) === "Symbol(" && (e = "[" + CJ(sR(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), r && r.getter && (e = "get " + e), r && r.setter && (e = "set " + e), (!gf(t, "name") || RJ && t.name !== e) && (kE ? Gf(t, "name", {
            value: e,
            configurable: !0
        }) : t.name = e), OJ && r && gf(r, "arity") && t.length !== r.arity && Gf(t, "length", {
            value: r.arity
        });
        try {
            r && gf(r, "constructor") && r.constructor ? kE && Gf(t, "prototype", {
                writable: !1
            }) : t.prototype && (t.prototype = void 0)
        } catch {}
        var n = yJ(t);
        return gf(n, "source") || (n.source = wJ(IJ, typeof e == "string" ? e : "")), t
    };
Function.prototype.toString = NJ(function() {
    return xJ(this) && AJ(this).source || SJ(this)
}, "toString");
var PJ = mL.exports,
    UJ = Qr,
    DJ = su,
    BJ = PJ,
    MJ = Gm,
    xL = function(t, e, r, n) {
        n || (n = {});
        var i = n.enumerable,
            s = n.name !== void 0 ? n.name : e;
        if (UJ(r) && BJ(r, s, n), n.global) i ? t[e] = r : MJ(e, r);
        else {
            try {
                n.unsafe ? t[e] && (i = !0) : delete t[e]
            } catch {}
            i ? t[e] = r : DJ.f(t, e, {
                value: r,
                enumerable: !1,
                configurable: !n.nonConfigurable,
                writable: !n.nonWritable
            })
        }
        return t
    },
    RL = {},
    $J = Math.ceil,
    KJ = Math.floor,
    kJ = Math.trunc || function(e) {
        var r = +e;
        return (r > 0 ? KJ : $J)(r)
    },
    GJ = kJ,
    mp = function(t) {
        var e = +t;
        return e !== e || e === 0 ? 0 : GJ(e)
    },
    VJ = mp,
    FJ = Math.max,
    HJ = Math.min,
    WJ = function(t, e) {
        var r = VJ(t);
        return r < 0 ? FJ(r + e, 0) : HJ(r, e)
    },
    XJ = mp,
    jJ = Math.min,
    SL = function(t) {
        var e = XJ(t);
        return e > 0 ? jJ(e, 9007199254740991) : 0
    },
    zJ = SL,
    qJ = function(t) {
        return zJ(t.length)
    },
    YJ = Ep,
    JJ = WJ,
    ZJ = qJ,
    aR = function(t) {
        return function(e, r, n) {
            var i = YJ(e),
                s = ZJ(i);
            if (s === 0) return !t && -1;
            var o = JJ(n, s),
                f;
            if (t && r !== r) {
                for (; s > o;)
                    if (f = i[o++], f !== f) return !0
            } else
                for (; s > o; o++)
                    if ((t || o in i) && i[o] === r) return t || o || 0;
            return !t && -1
        }
    },
    QJ = {
        includes: aR(!0),
        indexOf: aR(!1)
    },
    eZ = Hr,
    Dh = Cs,
    tZ = Ep,
    rZ = QJ.indexOf,
    nZ = Xm,
    oR = eZ([].push),
    yL = function(t, e) {
        var r = tZ(t),
            n = 0,
            i = [],
            s;
        for (s in r) !Dh(nZ, s) && Dh(r, s) && oR(i, s);
        for (; e.length > n;) Dh(r, s = e[n++]) && (~rZ(i, s) || oR(i, s));
        return i
    },
    zm = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    iZ = yL,
    sZ = zm,
    aZ = sZ.concat("length", "prototype");
RL.f = Object.getOwnPropertyNames || function(e) {
    return iZ(e, aZ)
};
var AL = {};
AL.f = Object.getOwnPropertySymbols;
var oZ = Km,
    lZ = Hr,
    uZ = RL,
    fZ = AL,
    cZ = _a,
    pZ = lZ([].concat),
    dZ = oZ("Reflect", "ownKeys") || function(e) {
        var r = uZ.f(cZ(e)),
            n = fZ.f;
        return n ? pZ(r, n(e)) : r
    },
    lR = Cs,
    hZ = dZ,
    EZ = Mm,
    mZ = su,
    gZ = function(t, e, r) {
        for (var n = hZ(e), i = mZ.f, s = EZ.f, o = 0; o < n.length; o++) {
            var f = n[o];
            !lR(t, f) && !(r && lR(r, f)) && i(t, f, s(e, f))
        }
    },
    _Z = fn,
    TZ = Qr,
    vZ = /#|\.prototype\./,
    au = function(t, e) {
        var r = xZ[bZ(t)];
        return r === SZ ? !0 : r === RZ ? !1 : TZ(e) ? _Z(e) : !!e
    },
    bZ = au.normalize = function(t) {
        return String(t).replace(vZ, ".").toLowerCase()
    },
    xZ = au.data = {},
    RZ = au.NATIVE = "N",
    SZ = au.POLYFILL = "P",
    yZ = au,
    _f = Zr,
    AZ = Mm.f,
    LZ = Hm,
    CZ = xL,
    wZ = Gm,
    OZ = gZ,
    IZ = yZ,
    LL = function(t, e) {
        var r = t.target,
            n = t.global,
            i = t.stat,
            s, o, f, c, p, d;
        if (n ? o = _f : i ? o = _f[r] || wZ(r, {}) : o = _f[r] && _f[r].prototype, o)
            for (f in e) {
                if (p = e[f], t.dontCallGetSet ? (d = AZ(o, f), c = d && d.value) : c = o[f], s = IZ(n ? f : r + (i ? "." : "#") + f, t.forced), !s && c !== void 0) {
                    if (typeof p == typeof c) continue;
                    OZ(p, c)
                }(t.sham || c && c.sham) && LZ(p, "sham", !0), CZ(o, f, p, t)
            }
    },
    NZ = Fo,
    PZ = dp,
    UZ = ga,
    DZ = UZ("match"),
    BZ = function(t) {
        var e;
        return NZ(t) && ((e = t[DZ]) !== void 0 ? !!e : PZ(t) === "RegExp")
    },
    MZ = ga,
    $Z = MZ("toStringTag"),
    CL = {};
CL[$Z] = "z";
var KZ = String(CL) === "[object z]",
    kZ = KZ,
    GZ = Qr,
    Vf = dp,
    VZ = ga,
    FZ = VZ("toStringTag"),
    HZ = Object,
    WZ = Vf(function() {
        return arguments
    }()) === "Arguments",
    XZ = function(t, e) {
        try {
            return t[e]
        } catch {}
    },
    jZ = kZ ? Vf : function(t) {
        var e, r, n;
        return t === void 0 ? "Undefined" : t === null ? "Null" : typeof(r = XZ(e = HZ(t), FZ)) == "string" ? r : WZ ? Vf(e) : (n = Vf(e)) === "Object" && GZ(e.callee) ? "Arguments" : n
    },
    zZ = jZ,
    qZ = String,
    gp = function(t) {
        if (zZ(t) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
        return qZ(t)
    },
    YZ = _a,
    wL = function() {
        var t = YZ(this),
            e = "";
        return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e
    },
    JZ = Mi,
    ZZ = Cs,
    QZ = iL,
    eQ = wL,
    uR = RegExp.prototype,
    tQ = function(t) {
        var e = t.flags;
        return e === void 0 && !("flags" in uR) && !ZZ(t, "flags") && QZ(uR, t) ? JZ(eQ, t) : e
    },
    qm = Hr,
    rQ = fL,
    nQ = Math.floor,
    Bh = qm("".charAt),
    iQ = qm("".replace),
    Mh = qm("".slice),
    sQ = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    aQ = /\$([$&'`]|\d{1,2})/g,
    OL = function(t, e, r, n, i, s) {
        var o = r + t.length,
            f = n.length,
            c = aQ;
        return i !== void 0 && (i = rQ(i), c = sQ), iQ(s, c, function(p, d) {
            var E;
            switch (Bh(d, 0)) {
                case "$":
                    return "$";
                case "&":
                    return t;
                case "`":
                    return Mh(e, 0, r);
                case "'":
                    return Mh(e, o);
                case "<":
                    E = i[Mh(d, 1, -1)];
                    break;
                default:
                    var m = +d;
                    if (m === 0) return p;
                    if (m > f) {
                        var g = nQ(m / 10);
                        return g === 0 ? p : g <= f ? n[g - 1] === void 0 ? Bh(d, 1) : n[g - 1] + Bh(d, 1) : p
                    }
                    E = n[m - 1]
            }
            return E === void 0 ? "" : E
        })
    },
    oQ = LL,
    lQ = Mi,
    Ym = Hr,
    fR = iu,
    uQ = Qr,
    fQ = hp,
    cQ = BZ,
    dl = gp,
    pQ = km,
    dQ = tQ,
    hQ = OL,
    EQ = ga,
    mQ = EQ("replace"),
    gQ = TypeError,
    $h = Ym("".indexOf);
Ym("".replace);
var cR = Ym("".slice),
    _Q = Math.max;
oQ({
    target: "String",
    proto: !0
}, {
    replaceAll: function(e, r) {
        var n = fR(this),
            i, s, o, f, c, p, d, E, m, g = 0,
            T = 0,
            b = "";
        if (!fQ(e)) {
            if (i = cQ(e), i && (s = dl(fR(dQ(e))), !~$h(s, "g"))) throw new gQ("`.replaceAll` does not allow non-global regexes");
            if (o = pQ(e, mQ), o) return lQ(o, e, n, r)
        }
        for (f = dl(n), c = dl(e), p = uQ(r), p || (r = dl(r)), d = c.length, E = _Q(1, d), g = $h(f, c); g !== -1;) m = p ? dl(r(c, g, f)) : hQ(c, f, g, [], void 0, r), b += cR(f, T, g) + m, T = g + d, g = g + E > f.length ? -1 : $h(f, c, g + E);
        return T < f.length && (b += cR(f, T)), b
    }
});
var Jm = fn,
    TQ = Zr,
    Zm = TQ.RegExp,
    Qm = Jm(function() {
        var t = Zm("a", "y");
        return t.lastIndex = 2, t.exec("abcd") !== null
    }),
    vQ = Qm || Jm(function() {
        return !Zm("a", "y").sticky
    }),
    bQ = Qm || Jm(function() {
        var t = Zm("^r", "gy");
        return t.lastIndex = 2, t.exec("str") !== null
    }),
    xQ = {
        BROKEN_CARET: bQ,
        MISSED_STICKY: vQ,
        UNSUPPORTED_Y: Qm
    },
    IL = {},
    RQ = yL,
    SQ = zm,
    yQ = Object.keys || function(e) {
        return RQ(e, SQ)
    },
    AQ = Ls,
    LQ = EL,
    CQ = su,
    wQ = _a,
    OQ = Ep,
    IQ = yQ;
IL.f = AQ && !LQ ? Object.defineProperties : function(e, r) {
    wQ(e);
    for (var n = OQ(r), i = IQ(r), s = i.length, o = 0, f; s > o;) CQ.f(e, f = i[o++], n[f]);
    return e
};
var NQ = Km,
    PQ = NQ("document", "documentElement"),
    UQ = _a,
    DQ = IL,
    pR = zm,
    BQ = Xm,
    MQ = PQ,
    $Q = dL,
    KQ = _L,
    dR = ">",
    hR = "<",
    GE = "prototype",
    VE = "script",
    NL = KQ("IE_PROTO"),
    Kh = function() {},
    PL = function(t) {
        return hR + VE + dR + t + hR + "/" + VE + dR
    },
    ER = function(t) {
        t.write(PL("")), t.close();
        var e = t.parentWindow.Object;
        return t = null, e
    },
    kQ = function() {
        var t = $Q("iframe"),
            e = "java" + VE + ":",
            r;
        return t.style.display = "none", MQ.appendChild(t), t.src = String(e), r = t.contentWindow.document, r.open(), r.write(PL("document.F=Object")), r.close(), r.F
    },
    Tf, Ff = function() {
        try {
            Tf = new ActiveXObject("htmlfile")
        } catch {}
        Ff = typeof document < "u" ? document.domain && Tf ? ER(Tf) : kQ() : ER(Tf);
        for (var t = pR.length; t--;) delete Ff[GE][pR[t]];
        return Ff()
    };
BQ[NL] = !0;
var GQ = Object.create || function(e, r) {
        var n;
        return e !== null ? (Kh[GE] = UQ(e), n = new Kh, Kh[GE] = null, n[NL] = e) : n = Ff(), r === void 0 ? n : DQ.f(n, r)
    },
    VQ = fn,
    FQ = Zr,
    HQ = FQ.RegExp,
    WQ = VQ(function() {
        var t = HQ(".", "s");
        return !(t.dotAll && t.test(`
`) && t.flags === "s")
    }),
    XQ = fn,
    jQ = Zr,
    zQ = jQ.RegExp,
    qQ = XQ(function() {
        var t = zQ("(?<a>b)", "g");
        return t.exec("b").groups.a !== "b" || "b".replace(t, "$<a>c") !== "bc"
    }),
    Ya = Mi,
    _p = Hr,
    YQ = gp,
    JQ = wL,
    ZQ = xQ,
    QQ = Fm,
    eee = GQ,
    tee = vL.get,
    ree = WQ,
    nee = qQ,
    iee = QQ("native-string-replace", String.prototype.replace),
    Rc = RegExp.prototype.exec,
    FE = Rc,
    see = _p("".charAt),
    aee = _p("".indexOf),
    oee = _p("".replace),
    kh = _p("".slice),
    HE = function() {
        var t = /a/,
            e = /b*/g;
        return Ya(Rc, t, "a"), Ya(Rc, e, "a"), t.lastIndex !== 0 || e.lastIndex !== 0
    }(),
    UL = ZQ.BROKEN_CARET,
    WE = /()??/.exec("")[1] !== void 0,
    lee = HE || WE || UL || ree || nee;
lee && (FE = function(e) {
    var r = this,
        n = tee(r),
        i = YQ(e),
        s = n.raw,
        o, f, c, p, d, E, m;
    if (s) return s.lastIndex = r.lastIndex, o = Ya(FE, s, i), r.lastIndex = s.lastIndex, o;
    var g = n.groups,
        T = UL && r.sticky,
        b = Ya(JQ, r),
        S = r.source,
        v = 0,
        R = i;
    if (T && (b = oee(b, "y", ""), aee(b, "g") === -1 && (b += "g"), R = kh(i, r.lastIndex), r.lastIndex > 0 && (!r.multiline || r.multiline && see(i, r.lastIndex - 1) !== `
`) && (S = "(?: " + S + ")", R = " " + R, v++), f = new RegExp("^(?:" + S + ")", b)), WE && (f = new RegExp("^" + S + "$(?!\\s)", b)), HE && (c = r.lastIndex), p = Ya(Rc, T ? f : r, R), T ? p ? (p.input = kh(p.input, v), p[0] = kh(p[0], v), p.index = r.lastIndex, r.lastIndex += p[0].length) : r.lastIndex = 0 : HE && p && (r.lastIndex = r.global ? p.index + p[0].length : c), WE && p && p.length > 1 && Ya(iee, p[0], f, function() {
            for (d = 1; d < arguments.length - 2; d++) arguments[d] === void 0 && (p[d] = void 0)
        }), p && g)
        for (p.groups = E = eee(null), d = 0; d < g.length; d++) m = g[d], E[m[0]] = p[m[1]];
    return p
});
var eg = FE,
    uee = LL,
    mR = eg;
uee({
    target: "RegExp",
    proto: !0,
    forced: /./.exec !== mR
}, {
    exec: mR
});
var fee = $m,
    DL = Function.prototype,
    gR = DL.apply,
    _R = DL.call,
    cee = typeof Reflect == "object" && Reflect.apply || (fee ? _R.bind(gR) : function() {
        return _R.apply(gR, arguments)
    }),
    TR = Mi,
    vR = xL,
    pee = eg,
    bR = fn,
    BL = ga,
    dee = Hm,
    hee = BL("species"),
    Gh = RegExp.prototype,
    Eee = function(t, e, r, n) {
        var i = BL(t),
            s = !bR(function() {
                var p = {};
                return p[i] = function() {
                    return 7
                }, "" [t](p) !== 7
            }),
            o = s && !bR(function() {
                var p = !1,
                    d = /a/;
                return t === "split" && (d = {}, d.constructor = {}, d.constructor[hee] = function() {
                    return d
                }, d.flags = "", d[i] = /./ [i]), d.exec = function() {
                    return p = !0, null
                }, d[i](""), !p
            });
        if (!s || !o || r) {
            var f = /./ [i],
                c = e(i, "" [t], function(p, d, E, m, g) {
                    var T = d.exec;
                    return T === pee || T === Gh.exec ? s && !g ? {
                        done: !0,
                        value: TR(f, d, E, m)
                    } : {
                        done: !0,
                        value: TR(p, E, d, m)
                    } : {
                        done: !1
                    }
                });
            vR(String.prototype, t, c[0]), vR(Gh, i, c[1])
        }
        n && dee(Gh[i], "sham", !0)
    },
    tg = Hr,
    mee = mp,
    gee = gp,
    _ee = iu,
    Tee = tg("".charAt),
    xR = tg("".charCodeAt),
    vee = tg("".slice),
    RR = function(t) {
        return function(e, r) {
            var n = gee(_ee(e)),
                i = mee(r),
                s = n.length,
                o, f;
            return i < 0 || i >= s ? t ? "" : void 0 : (o = xR(n, i), o < 55296 || o > 56319 || i + 1 === s || (f = xR(n, i + 1)) < 56320 || f > 57343 ? t ? Tee(n, i) : o : t ? vee(n, i, i + 2) : (o - 55296 << 10) + (f - 56320) + 65536)
        }
    },
    bee = {
        codeAt: RR(!1),
        charAt: RR(!0)
    },
    xee = bee.charAt,
    Ree = function(t, e, r) {
        return e + (r ? xee(t, e).length : 1)
    },
    SR = Mi,
    See = _a,
    yee = Qr,
    Aee = dp,
    Lee = eg,
    Cee = TypeError,
    wee = function(t, e) {
        var r = t.exec;
        if (yee(r)) {
            var n = SR(r, t, e);
            return n !== null && See(n), n
        }
        if (Aee(t) === "RegExp") return SR(Lee, t, e);
        throw new Cee("RegExp#exec called on incompatible receiver")
    },
    Oee = cee,
    yR = Mi,
    Tp = Hr,
    Iee = Eee,
    Nee = fn,
    Pee = _a,
    Uee = Qr,
    Dee = hp,
    Bee = mp,
    Mee = SL,
    ka = gp,
    $ee = iu,
    Kee = Ree,
    kee = km,
    Gee = OL,
    Vee = wee,
    Fee = ga,
    XE = Fee("replace"),
    Hee = Math.max,
    Wee = Math.min,
    Xee = Tp([].concat),
    Vh = Tp([].push),
    AR = Tp("".indexOf),
    LR = Tp("".slice),
    jee = function(t) {
        return t === void 0 ? t : String(t)
    },
    zee = function() {
        return "a".replace(/./, "$0") === "$0"
    }(),
    CR = function() {
        return /./ [XE] ? /./ [XE]("a", "$0") === "" : !1
    }(),
    qee = !Nee(function() {
        var t = /./;
        return t.exec = function() {
            var e = [];
            return e.groups = {
                a: "7"
            }, e
        }, "".replace(t, "$<a>") !== "7"
    });
Iee("replace", function(t, e, r) {
    var n = CR ? "$" : "$0";
    return [function(s, o) {
        var f = $ee(this),
            c = Dee(s) ? void 0 : kee(s, XE);
        return c ? yR(c, s, f, o) : yR(e, ka(f), s, o)
    }, function(i, s) {
        var o = Pee(this),
            f = ka(i);
        if (typeof s == "string" && AR(s, n) === -1 && AR(s, "$<") === -1) {
            var c = r(e, o, f, s);
            if (c.done) return c.value
        }
        var p = Uee(s);
        p || (s = ka(s));
        var d = o.global,
            E;
        d && (E = o.unicode, o.lastIndex = 0);
        for (var m = [], g; g = Vee(o, f), !(g === null || (Vh(m, g), !d));) {
            var T = ka(g[0]);
            T === "" && (o.lastIndex = Kee(f, Mee(o.lastIndex), E))
        }
        for (var b = "", S = 0, v = 0; v < m.length; v++) {
            g = m[v];
            for (var R = ka(g[0]), x = Hee(Wee(Bee(g.index), f.length), 0), C = [], B, K = 1; K < g.length; K++) Vh(C, jee(g[K]));
            var G = g.groups;
            if (p) {
                var W = Xee([R], C, x, f);
                G !== void 0 && Vh(W, G), B = ka(Oee(s, void 0, W))
            } else B = Gee(R, f, x, C, G, s);
            x >= S && (b += LR(f, S, x) + B, S = x + R.length)
        }
        return b + LR(f, S)
    }]
}, !qee || !zee || CR);
var Yee = Zr,
    Jee = Hr,
    Zee = function(t, e) {
        return Jee(Yee[t].prototype[e])
    },
    Qee = Zee;
Qee("String", "replaceAll");
var Ri = {},
    vp = {},
    ML = {},
    bp = {},
    rg = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Token = void 0;
    var e = function() {
        function r(n, i, s, o) {
            this.type = n, this.content = i, this.attributes = s, this.text = o
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
    t.Token = e,
        function(r) {
            (function(n) {
                n[n.text = 0] = "text", n[n.startTag = 1] = "startTag", n[n.endTag = 2] = "endTag"
            })(r.Type || (r.Type = {}))
        }(e = t.Token || (t.Token = {})), t.Token = e
})(rg);
Object.defineProperty(bp, "__esModule", {
    value: !0
});
bp.Tokenizer = void 0;
var Yi = rg,
    ete = function() {
        function t(e) {
            this.tags = e
        }
        return t.prototype.tokenizeString = function(e) {
            var r = this,
                n = this.getTokens(e),
                i = [],
                s = !1,
                o = "",
                f = "";
            return n.forEach(function(c) {
                var p = r.tags[c.content],
                    d = !0;
                !p && !s ? c.convertToTextToken() : s ? c.type === Yi.Token.Type.endTag && c.content === o ? (s = !1, i.push(t.createTextToken(f))) : (c.convertToTextToken(), f += c.content, d = !1) : p.noNesting && c.type === Yi.Token.Type.startTag && (s = !0, o = c.content, f = ""), d && i.push(c)
            }), i
        }, t.prototype.getTokens = function(e) {
            for (var r = '\\[(/\\w*)\\]|\\[(\\w*)+(=(["])' + t.valueChars + "*\\4)?( (" + t.nameChars + '+)?=(["])(' + t.valueChars + "+)\\7)*\\]", n = new RegExp(r, "g"), i = [], s = n.exec(e), o = 0; s;) {
                var f = s.index - o;
                f > 0 && i.push(t.createTextToken(e.substr(o, f))), i.push(t.createTagToken(s)), o = n.lastIndex, s = n.exec(e)
            }
            var c = e.length - o;
            return c > 0 && i.push(t.createTextToken(e.substr(o, c))), i
        }, t.createTextToken = function(e) {
            return new Yi.Token(Yi.Token.Type.text, e)
        }, t.createTagToken = function(e) {
            if (!e[1]) {
                for (var r = e[2], n = {}, i = new RegExp("(" + t.nameChars + '+)?=(["])(' + t.valueChars + "+)\\2", "g"), s = e[0].substr(1 + r.length, e[0].length - 2 - r.length), o = i.exec(s); o;) o[1] ? n[o[1]] = o[3] : n[r] = o[3], o = i.exec(s);
                return new Yi.Token(Yi.Token.Type.startTag, r, n, e[0])
            }
            return new Yi.Token(Yi.Token.Type.endTag, e[1].substr(1, e[1].length - 1))
        }, t.nameChars = "[a-zA-Z0-9\\.\\-_:;/]", t.valueChars = "[a-zA-Z0-9\\.\\-_:;#/\\s]", t
    }();
bp.Tokenizer = ete;
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ParseTree = void 0;
    var e = bp,
        r = rg,
        n = function() {
            function i(s) {
                this.subTrees = [], this.type = s.type, this.content = s.content, s.attributes && (this.attributes = s.attributes), s.subTrees && (this.subTrees = s.subTrees)
            }
            return Object.defineProperty(i.prototype, "isValid", {
                get: function() {
                    return this.subTrees.length ? this.subTrees.every(function(s) {
                        return s.isValid
                    }) : !0
                },
                enumerable: !1,
                configurable: !0
            }), i.prototype.toString = function() {
                return this.type + " - " + this.content
            }, i.buildTree = function(s, o) {
                var f = new e.Tokenizer(o),
                    c = f.tokenizeString(s),
                    p = new i({
                        type: i.Type.root,
                        content: s
                    });
                return this.buildTreeFromTokens(p, c.reverse())
            }, i.buildTreeFromTokens = function(s, o, f) {
                if (f === void 0 && (f = ""), !s) return null;
                if (!o.length) return s;
                var c = o.pop();
                if (!c) return null;
                if (c.type === r.Token.Type.text) {
                    var p = new i({
                        type: i.Type.text,
                        content: c.content
                    });
                    s.subTrees.push(p)
                }
                if (c.type === r.Token.Type.startTag) {
                    var d = c.content,
                        p = new i({
                            type: i.Type.tag,
                            content: d,
                            attributes: c.attributes
                        }),
                        E = i.buildTreeFromTokens(p, o, d);
                    if (!E) return null;
                    s.subTrees.push(E)
                }
                if (c.type === r.Token.Type.endTag) {
                    var d = c.content;
                    return d === f ? s : null
                }
                return !o.length && f !== "" ? null : this.buildTreeFromTokens(s, o, f)
            }, i
        }();
    t.ParseTree = n,
        function(i) {
            (function(s) {
                s[s.root = 0] = "root", s[s.text = 1] = "text", s[s.tag = 2] = "tag"
            })(i.Type || (i.Type = {}))
        }(n = t.ParseTree || (t.ParseTree = {})), t.ParseTree = n
})(ML);
var ou = {};
Object.defineProperty(ou, "__esModule", {
    value: !0
});
ou.Tag = void 0;
var tte = function() {
    function t(e) {
        var r;
        this.tagName = e.tagName, this.insertLineBreaks = e.insertLineBreaks, this.suppressLineBreaks = e.suppressLineBreaks, this.noNesting = e.noNesting, this.markupGenerator = (r = e.markupGenerator) !== null && r !== void 0 ? r : function(n, i) {
            return "<" + n.tagName + ">" + i + "</" + n.tagName + ">"
        }
    }
    return t.create = function(e, r, n) {
        var i, s, o;
        return n === void 0 && (n = {}), new t({
            tagName: e,
            insertLineBreaks: (i = n.insertLineBreaks) !== null && i !== void 0 ? i : !0,
            suppressLineBreaks: (s = n.suppressLineBreaks) !== null && s !== void 0 ? s : !1,
            noNesting: (o = n.noNesting) !== null && o !== void 0 ? o : !1,
            markupGenerator: r
        })
    }, t
}();
ou.Tag = tte;
Object.defineProperty(vp, "__esModule", {
    value: !0
});
vp.BBCodeParser = void 0;
var wR = ML,
    OR = ou,
    rte = function() {
        function t(e, r) {
            this.options = r, this.escapeHTML = !1, this.tags = e, r && (this.escapeHTML = r.escapeHTML)
        }
        return Object.defineProperty(t, "defaultTags", {
            get: function() {
                return {
                    b: OR.Tag.create("b"),
                    i: OR.Tag.create("i")
                }
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.parse = function(e, r, n, i) {
            r === void 0 && (r = !1), n === void 0 && (n = !0), i === void 0 && (i = !0);
            var s = wR.ParseTree.buildTree(e, this.tags);
            return !s || !s.isValid ? e : this.treeToHtml(s.subTrees, n, i, r)
        }, t.prototype.addTag = function(e, r) {
            this.tags[e] = r
        }, t.prototype.treeToHtml = function(e, r, n, i) {
            var s = this;
            i === void 0 && (i = !1);
            var o = "",
                f = !1;
            return e.forEach(function(c) {
                var p;
                if (c.type === wR.ParseTree.Type.text) {
                    var d = c.content;
                    n && (d = s.escapeHTML ? t.escapeHTML(d) : d), r && !f && (d = d.replace(/(\r\n|\n|\r)/gm, "<br>"), f = !1), o += d
                } else {
                    var E = s.tags[c.content],
                        m = s.treeToHtml(c.subTrees, E.insertLineBreaks, n, i);
                    i ? o += m : o += E.markupGenerator(E, m, (p = c.attributes) !== null && p !== void 0 ? p : {}), f = E.suppressLineBreaks
                }
            }), o
        }, t.escapeHTML = function(e) {
            return e.replace(/[&<>]/g, function(r) {
                return t.tagsToReplace[r] || r
            })
        }, t.tagsToReplace = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;"
        }, t
    }();
vp.BBCodeParser = rte;
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Tag = t.BBCodeParser = void 0;
    var e = vp;
    Object.defineProperty(t, "BBCodeParser", {
        enumerable: !0,
        get: function() {
            return e.BBCodeParser
        }
    });
    var r = ou;
    Object.defineProperty(t, "Tag", {
        enumerable: !0,
        get: function() {
            return r.Tag
        }
    })
})(Ri);
const nte = {
    install: t => {
        const e = {
            section: Ri.Tag.create("section", (s, o, {
                section: f
            }) => `<div ${f?`class="section ${f}"`:'class="section"'}>${o}</div>`)
        };
        ["b", "bold", "B"].forEach(s => {
            e[s] = Ri.Tag.create(s, (o, f) => `<strong>${f}</strong>`)
        }), ["i", "italic", "I"].forEach(s => {
            e[s] = Ri.Tag.create(s, (o, f) => `<em>${f}</em>`)
        }), e.tos = Ri.Tag.create("tos", (s, o) => `<a class="tosLink" href="https://jackboxgames.com/terms-of-service/" target="_blank">${o}</a>`), e.pp = Ri.Tag.create("pp", (s, o) => `<a class="ppLink" href="https://jackboxgames.com/privacy-policy/" target="_blank">${o}</a>`);
        const i = new Ri.BBCodeParser(e);
        t.directive("bb", {
            mounted(s, o) {
                const f = document.createElement("div");
                f.textContent = o.value, s.innerHTML = i.parse(f.innerHTML)
            },
            updated(s, o) {
                const f = document.createElement("div");
                f.textContent = o.value, s.innerHTML = i.parse(f.innerHTML)
            }
        }), t.mixin({
            beforeCreate() {
                this.$options.bb && Object.keys(this.$options.bb).forEach(s => {
                    const o = this.$options.bb[s];
                    if (o instanceof Function) {
                        i.addTag(s, Ri.Tag.create(s, o));
                        return
                    }
                    i.addTag(s, Ri.Tag.create(s, o.generator, o.options))
                })
            }
        }), t.config.globalProperties.$bb = s => (typeof s != "string" && console.warn(`[BBCodePlugin] Received unexpected ${typeof s} with value ${s};converting to string before parsing.`), i.parse(String(s)))
    }
};
const hse = cr({
        setup() {
            return {
                fatalError: Qs(vg.fatal.error)
            }
        },
        computed: {
            message() {
                var n, i, s, o;
                const t = ((i = (n = this.fatalError) == null ? void 0 : n.event) == null ? void 0 : i.event_id) ?? "Unknown";
                let e = "";
                const r = (o = (s = this.fatalError) == null ? void 0 : s.hint) == null ? void 0 : o.originalException;
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
                dse({
                    id: ((e = (t = this.fatalError) == null ? void 0 : t.event) == null ? void 0 : e.event_id) ?? "Unknown"
                })
            }
        }
    }),
    uu = t => (zl("data-v-d0abff79"), t = t(), ql(), t),
    Ese = {
        class: "jbg fatal"
    },
    mse = {
        class: "constrain"
    },
    gse = uu(() => ve("a", {
        class: "logo",
        href: "/",
        "aria-label": "Jackbox Games Logo"
    }, null, -1)),
    _se = {
        class: "content"
    },
    Tse = uu(() => ve("h1", null, "You have encountered an error", -1)),
    vse = uu(() => ve("p", null, "Something went wrong! But don't worry, you can try a few things to get going.", -1)),
    bse = uu(() => ve("ul", null, [ve("li", null, "Refresh the page"), ve("li", null, "Turn off adblockers or other browser extensions."), ve("li", null, "Check your connection to the Internet."), ve("li", null, "Make sure you're using an up-to-date browser."), ve("li", null, "If that doesn't work, let us know.")], -1)),
    xse = uu(() => ve("hr", null, null, -1)),
    Rse = {
        class: "error"
    };

function Sse(t, e, r, n, i, s) {
    return Le(), Oe("div", Ese, [ve("div", mse, [gse, ve("div", _se, [Tse, vse, bse, ve("button", {
        onClick: e[0] || (e[0] = (...o) => t.onFeedbackClick && t.onFeedbackClick(...o))
    }, "Tell us what happened"), xse, ve("pre", Rse, Je(t.message), 1)])])])
}
const yse = Ur(hse, [
        ["render", Sse],
        ["__scopeId", "data-v-d0abff79"]
    ]),
    Lf = Mc({
        hasCrashed: !1
    }),
    Ase = {
        install: t => {
            if (t.config.globalProperties.$handleEcastError) return;
            t.provide(vg.fatal.error, vn(() => Lf));
            const e = (r, n) => {
                var i, s;
                if (r instanceof wl.EcastEntityNotFound || r instanceof wl.EcastFilterError || r instanceof wl.EcastRateLimitExceeded || r instanceof Error && ((i = r.message) != null && i.includes("Socket not ready to send")) || r instanceof Error && ((s = r.message) != null && s.includes("No connection available"))) return console.warn(r);
                throw n ? console.error(n, r) : console.error(r), r
            };
            window.tv.onError = async (r, n) => {
                if (r.level === "error" && (Lf.hasCrashed = !0, Lf.event = r, Lf.hint = n), t.config.globalProperties.$debugRecorder) return await t.config.globalProperties.$debugRecorder.sendToEcast()
            }, t.component("Fatal", yse), t.config.globalProperties.$handleEcastError = e
        }
    };
const Use = get;
const nae = sample;

function mS(t, e) {
    const r = t.global.locale,
        n = t.global.messages[r],
        i = Use(n, e);
    return Array.isArray(i) || console.warn(`[i18nPlugin] Translation with key ${e} is not an array`), nae(i)
}
const iae = {
        install: (t, e) => {
            t.directive("ts", (r, n) => {
                const i = mS(e.i18n, n.value);
                r.textContent = i || ""
            }), t.config.globalProperties.$ts = function(n) {
                return mS(e.i18n, n) || ""
            }, t.config.globalProperties.$messages = e.i18n.global.messages, t.config.globalProperties.$t = e.i18n.global.t, t.config.globalProperties.$tc = e.i18n.global.tc, t.config.globalProperties.$te = e.i18n.global.te, t.config.globalProperties.$tm = e.i18n.global.tm
        }
    },
    sae = cr({
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
    aae = "main/@connect/assets/Bwlnl62i.png",
    oae = "main/@connect/assets/DN8YV_ih.png",
    lae = "main/@connect/assets/Dv-2T4fF.png",
    uae = {
        key: 0,
        class: "image",
        src: aae,
        alt: "Kicked"
    },
    fae = {
        key: 1,
        class: "image",
        src: oae,
        alt: "Thank You"
    },
    cae = {
        key: 2,
        class: "image",
        src: lae,
        alt: "Error"
    },
    pae = {
        class: "text"
    },
    dae = {
        key: 3,
        class: "subtext"
    },
    hae = {
        class: "actions"
    };

function Eae(t, e, r, n, i, s) {
    const o = Eo("bb");
    return Le(), Oe("div", {
        class: Vr(["error-model", t.classes])
    }, [t.image === "tear" ? (Le(), Oe("img", uae)) : t.image === "moon" ? (Le(), Oe("img", fae)) : (Le(), Oe("img", cae)), br(ve("h3", pae, null, 512), [
        [o, t.text]
    ]), t.subtext ? br((Le(), Oe("h3", dae, null, 512)), [
        [o, t.subtext]
    ]) : gt("", !0), ve("div", hae, [br(ve("button", {
        onClick: e[0] || (e[0] = yn(f => t.$emit("resolve"), ["prevent"]))
    }, null, 512), [
        [o, t.dismissText]
    ])])], 2)
}
const mae = Ur(sae, [
        ["render", Eae],
        ["__scopeId", "data-v-420dd700"]
    ]),
    gae = cr({
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
    _ae = {
        class: "text"
    },
    Tae = {
        key: 0,
        class: "subtext"
    },
    vae = {
        class: "actions"
    },
    bae = ["onClick"];

function xae(t, e, r, n, i, s) {
    const o = Eo("bb");
    return Le(), Oe("div", {
        class: Vr(["options-modal", t.classes])
    }, [br(ve("h3", _ae, null, 512), [
        [o, t.text]
    ]), t.subtext ? br((Le(), Oe("h3", Tae, null, 512)), [
        [o, t.subtext]
    ]) : gt("", !0), ve("div", vae, [(Le(!0), Oe(qt, null, gs(t.options, (f, c) => br((Le(), Oe("button", {
        key: c,
        class: Vr(f.classes),
        onClick: yn(p => t.$emit("resolve", f.value), ["prevent"])
    }, null, 10, bae)), [
        [o, f.text]
    ])), 128))])], 2)
}
const Rae = Ur(gae, [
        ["render", xae],
        ["__scopeId", "data-v-db592987"]
    ]),
    Sae = cr({
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
                return this.props = e, this.classes = r.classes || "jbg", t === "Error" ? this.content = mae : t === "Options" ? this.content = Rae : this.content = t, new Promise(n => {
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
    yae = {
        class: "sandbox"
    };

function Aae(t, e, r, n, i, s) {
    return Le(), Pi(jc, {
        name: "modal-transition"
    }, {
        default: Gc(() => [t.props ? (Le(), Oe("div", {
            key: 0,
            class: Vr(["modal", t.classes]),
            onKeyup: e[0] || (e[0] = so((...o) => t.onBackgroundClick && t.onBackgroundClick(...o), ["esc"])),
            onClick: e[1] || (e[1] = yn((...o) => t.onBackgroundClick && t.onBackgroundClick(...o), ["self"]))
        }, [ve("div", yae, [t.content ? (Le(), Pi(BM(t.content), my({
            key: 0,
            class: "content"
        }, t.props, {
            onResolve: t.onResolve
        }), null, 16, ["onResolve"])) : gt("", !0)])], 34)) : gt("", !0)]),
        _: 1
    })
}
const Lae = Ur(Sae, [
        ["render", Aae],
        ["__scopeId", "data-v-2e99f2ab"]
    ]),
    Cae = {
        install: t => {
            let e;
            const r = () => {
                    if (!e) throw new Error("No ModalComponent is registered");
                    return e.hide()
                },
                n = (s, o, f) => {
                    if (!e) throw new Error("No ModalComponent is registered");
                    return e.show(s, o, f)
                },
                i = s => {
                    e = s
                };
            t.component("Modal", Lae), t.config.globalProperties.$hideModal = r, t.config.globalProperties.$showModal = n, t.config.globalProperties.$registerModal = i
        }
    };
Hs("");
const hoe = {
        LABEL: "GAŁĄŹ",
        REFRESH_REQUIRED: "Wymagane odświeżenie",
        PREFERRED: "PREFEROWANA GAŁĄŹ",
        SELECT: "Wybierz swoją gałąź",
        WAITING: "Oczekiwanie na pokój"
    },
    Eoe = {
        ACCEPT_ALL: "Okay!",
        CONSENT_MODAL: {
            ARIA: "Zgoda na pliki cookie"
        },
        DESCRIPTION: "Używamy plików cookie, aby poprawić twoje doświadczenie z gry i analizować ruch na naszej stronie. Więcej informacji znajdziesz w naszej [pp]polityce prywatności[/pp].",
        REJECT_ALL: "Odrzuć"
    },
    moe = {
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
    goe = {
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
    _oe = "Link do strony głównej Jackbox Games",
    Toe = {
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
    voe = {
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
    boe = {
        EMPTY: "Brak poprzednich gier",
        MANAGE: "ZARZĄDZAJ",
        TITLE: "TWOJE POPRZEDNIE GRY"
    },
    xoe = {
        TITLE: "AKTUALNE GRY",
        VIEW_ALL: {
            BUTTON: "ZOBACZ WSZYSTKIE",
            LINK: "ZOBACZ WSZYSTKIE POPRZEDNIE GRY"
        }
    },
    Roe = {
        GAME_FULL: "Gra jest pełna",
        GAME_STARTED: "Gra już się rozpoczęła",
        ROOM_NOT_FOUND: "Nie znaleziono pokoju."
    },
    Soe = {
        GAME_FULL: "GRA JEST PEŁNA",
        GAME_STARTED: "GRA JUŻ SIĘ ROZPOCZĘŁA",
        JOIN_AUDIENCE: "DOŁĄCZ DO PUBLICZNOŚCI",
        RECONNECT: "POŁĄCZ PONOWNIE",
        TWITCH_LOGIN: "ZALOGUJ PRZEZ TWITCH"
    },
    yoe = {
        CAMERA: "[b]UWAGA:[/b] Nie wykryto kamery, ale możesz grać także bez niej. Jeśli masz kamerę, spróbuj użyć innej przeglądarki.",
        STYLE: "[b]UWAGA:[/b] Twoja przeglądarka wydaje się nieco przestarzała. Mogą wystąpić problemy z wyświetlaniem tej gry.",
        TOS: "Klikając {submit}, akceptujesz nasze [tos]warunki korzystania[/tos]"
    },
    Aoe = {
        BRANCH: hoe,
        COOKIE: Eoe,
        ERROR: moe,
        FORM: goe,
        HOMEPAGE_LINK: _oe,
        MENU: Toe,
        PAST_GAME: voe,
        PAST_GAMES: boe,
        RECENT_GAMES: xoe,
        STATUS: Roe,
        SUBMIT: Soe,
        WARNING: yoe
    },
    Va = {
        en: Aoe
    };
var Cf, ple = new Uint8Array(16);

function dle() {
    if (!Cf && (Cf = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Cf)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return Cf(ple)
}
const hle = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function Ele(t) {
    return typeof t == "string" && hle.test(t)
}
var vr = [];
for (var Yh = 0; Yh < 256; ++Yh) vr.push((Yh + 256).toString(16).substr(1));

function mle(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        r = (vr[t[e + 0]] + vr[t[e + 1]] + vr[t[e + 2]] + vr[t[e + 3]] + "-" + vr[t[e + 4]] + vr[t[e + 5]] + "-" + vr[t[e + 6]] + vr[t[e + 7]] + "-" + vr[t[e + 8]] + vr[t[e + 9]] + "-" + vr[t[e + 10]] + vr[t[e + 11]] + vr[t[e + 12]] + vr[t[e + 13]] + vr[t[e + 14]] + vr[t[e + 15]]).toLowerCase();
    if (!Ele(r)) throw TypeError("Stringified UUID is invalid");
    return r
}

function gle(t, e, r) {
    t = t || {};
    var n = t.random || (t.rng || dle)();
    if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, e) {
        r = r || 0;
        for (var i = 0; i < 16; ++i) e[r + i] = n[i];
        return e
    }
    return mle(n)
}
const _le = cr({
        props: {
            room: Object
        },
        emits: ["resolve"],
        data() {
            return {
                passwordLength: 5,
                password: ""
            }
        },
        computed: {
            canSubmit() {
                return this.password.length >= this.passwordLength
            }
        },
        mounted() {
            this.$refs.input.focus()
        },
        methods: {
            onInput(t) {
                const e = t.target;
                this.password = e.value.toUpperCase()
            }
        }
    }),
    Tle = "main/@connect/assets/BP6xhM9y.png",
    iw = t => (zl("data-v-711f56b2"), t = t(), ql(), t),
    vle = {
        class: "jbg password"
    },
    ble = iw(() => ve("img", {
        class: "image",
        src: Tle,
        alt: "Enter Password"
    }, null, -1)),
    xle = {
        class: "text"
    },
    Rle = {
        key: 0,
        class: "subtext"
    },
    Sle = {
        class: "actions"
    },
    yle = ["value", "placeholder", "maxlength"],
    Ale = ["disabled"],
    Lle = iw(() => ve("hr", null, null, -1)),
    Cle = {
        class: "or"
    };

function wle(t, e, r, n, i, s) {
    const o = Eo("bb");
    return Le(), Oe("div", vle, [ble, ve("h3", xle, Je(t.$t("FORM.PASSWORD_REQUIRED_TITLE")), 1), t.room.audienceEnabled ? (Le(), Oe("p", Rle, Je(t.$t("FORM.PASSWORD_REQUIRED_BODY")), 1)) : gt("", !0), ve("div", Sle, [ve("input", {
        ref: "input",
        type: "text",
        value: t.password,
        placeholder: t.$t("FORM.PASSWORD_PLACEHOLDER"),
        maxlength: t.passwordLength,
        autocapitalize: "off",
        autocorrect: "off",
        autocomplete: "off",
        "aria-label": "password",
        onInput: e[0] || (e[0] = (...f) => t.onInput && t.onInput(...f))
    }, null, 40, yle), ve("button", {
        type: "submit",
        disabled: !t.canSubmit,
        onClick: e[1] || (e[1] = yn(f => t.$emit("resolve", t.password), ["prevent"]))
    }, Je(t.$t("FORM.PASSWORD_JOIN_AS_PLAYER")), 9, Ale), t.room.audienceEnabled ? (Le(), Oe(qt, {
        key: 0
    }, [Lle, ve("p", Cle, Je(t.$t("SEPARATOR.OR")), 1), br(ve("button", {
        class: "audience",
        type: "submit",
        onClick: e[2] || (e[2] = yn(f => t.$emit("resolve", !0), ["prevent"]))
    }, null, 512), [
        [o, t.$t("FORM.PASSWORD_JOIN_AS_AUDIENCE")]
    ])], 64)) : (Le(), Oe("button", {
        key: 1,
        class: "cancel",
        onClick: e[3] || (e[3] = yn(f => t.$emit("resolve", !1), ["prevent"]))
    }, Je(t.$t("ACTION.CANCEL")), 1))])])
}
const Ole = Ur(_le, [
        ["render", wle],
        ["__scopeId", "data-v-711f56b2"]
    ]),
    Ile = cr({
        components: {
            TextInput: fq
        },
        props: {
            match: Object,
            twitchUser: Object
        },
        emits: {
            twitchLoginWasClicked: () => !0
        },
        data() {
            return {
                codeLength: 4,
                code: "",
                nameLength: 12,
                name: "",
                passwordLength: 5,
                password: "",
                branch: "",
                isConnecting: !1,
                reconnectData: null,
                api: new JX.APIClient({
                    host: us.serverUrl,
                    scheme: "https"
                }),
                isPreloading: !1,
                preloaded: {
                    appTag: null,
                    branch: null
                },
                room: null,
                roomNotFound: !1,
                warnings: []
            }
        },
        computed: {
            canConnect() {
                return !(!this.hasFormData || this.isConnecting || this.isPreloading || !this.preloaded.appTag)
            },
            hasFormData() {
                return !(this.code.length !== this.codeLength || !this.name || this.name.length > this.nameLength)
            },
            isReconnectable() {
                var t, e, r;
                return !(!this.reconnectData || ((t = this.room) == null ? void 0 : t.code) !== this.reconnectData.code || (r = (e = this.game) == null ? void 0 : e.features) != null && r.includes("dropInDropOut") && this.room && (this.reconnectData.joinAs === "player" && this.room.full || this.reconnectData.joinAs === "audience" && !this.room.full))
            },
            game() {
                var t;
                return (t = this.room) != null && t.appTag ? eu(this.room.appTag) ?? null : null
            },
            state() {
                var e, r;
                if (!this.room) return {
                    canSubmit: !1,
                    statusKey: this.code.length === this.codeLength && this.roomNotFound ? "STATUS.ROOM_NOT_FOUND" : "",
                    submitKey: "ACTION.PLAY"
                };
                let t = "???";
                return (e = this.game) != null && e.name && ((r = this.game) != null && r.isPublic || us.isDevelopment()) && (t = this.game.name), this.isReconnectable ? {
                    canSubmit: this.canConnect,
                    statusKey: t,
                    submitKey: "SUBMIT.RECONNECT",
                    joinAs: this.reconnectData.joinAs
                } : this.room.locked ? this.room.audienceEnabled ? {
                    canSubmit: this.canConnect,
                    statusKey: "STATUS.GAME_STARTED",
                    submitKey: "SUBMIT.JOIN_AUDIENCE",
                    joinAs: "audience"
                } : {
                    canSubmit: !1,
                    statusKey: "STATUS.GAME_STARTED",
                    submitKey: "SUBMIT.GAME_STARTED"
                } : this.room.full ? this.room.audienceEnabled ? {
                    canSubmit: this.canConnect,
                    statusKey: "STATUS.GAME_FULL",
                    submitKey: "SUBMIT.JOIN_AUDIENCE",
                    joinAs: "audience"
                } : {
                    canSubmit: !1,
                    statusKey: "STATUS.GAME_FULL",
                    submitKey: "SUBMIT.GAME_FULL"
                } : {
                    canSubmit: this.canConnect,
                    statusText: t,
                    submitKey: "ACTION.PLAY",
                    joinAs: "player"
                }
            },
            shouldShowBranchOptions() {
                return window.tv.manifest.environment !== "production"
            },
            branchOptions() {
                if (!this.room) return {};
                const t = {};
                return Object.entries(window.tv.manifest.branches).forEach(([e, r]) => {
                    r.bundles[this.room.appTag] && (t[e] = r)
                }), t
            },
            selectedBranch() {
                return window.tv.manifest.branches[this.branch]
            },
            selectedBundle() {
                var t;
                if (this.room) return (t = window.tv.manifest.branches[this.branch]) == null ? void 0 : t.bundles[this.room.appTag]
            },
            displayBranchLastUpdated() {
                if (this.selectedBranch) return new Date(this.selectedBranch.lastUpdated).toLocaleString()
            },
            displayBranchType() {
                if (this.selectedBranch) return this.selectedBranch.type === "production" ? "PROD" : "DEV"
            },
            displayVersion() {
                var t, e;
                return ((t = this.selectedBundle) == null ? void 0 : t.version) ?? ((e = this.selectedBranch) == null ? void 0 : e.version)
            }
        },
        watch: {
            twitchUser: "twitchDidUpdate",
            branch: "preloadBundle"
        },
        beforeMount() {
            this.populateFromStorage(), this.populateFromURL(), this.checkReconnect()
        },
        methods: {
            populateFromStorage() {
                qe.isSupported && (this.code = (qe.get("code") ?? "").toUpperCase(), this.name = (qe.get("name") ?? "").toUpperCase())
            },
            populateFromURL() {
                var n, i, s, o, f, c;
                const t = (i = (n = this.match) == null ? void 0 : n.params) == null ? void 0 : i.code,
                    e = (o = (s = this.match) == null ? void 0 : s.params) == null ? void 0 : o.name,
                    r = (c = (f = this.match) == null ? void 0 : f.params) == null ? void 0 : c.password;
                t && t.length === this.codeLength && (this.code = t.toUpperCase(), this.getRoomInfo()), e && (this.name = e), r && (this.password = r)
            },
            async checkReconnect() {
                if (!this.code) return;
                if (await this.getRoomInfo(), !this.room) {
                    this.code = "", qe.remove("code"), qe.remove("reconnect");
                    return
                }
                const t = qe.get("reconnect");
                if (t) {
                    const [e, r, n, i] = t.split(":");
                    this.reconnectData = {
                        code: this.code,
                        id: parseInt(e, 10),
                        joinAs: r,
                        secret: n,
                        branch: i
                    }
                }
            },
            onCodeInput() {
                const t = /\s/g;
                if (this.code = this.code.replace(t, "").trim().toUpperCase(), this.code.length !== this.codeLength) {
                    this.room = null;
                    return
                }
                this.getRoomInfo()
            },
            onNameInput() {
                const t = /^\s+/;
                this.name = this.name.replace(t, "");
                const e = UE.username(this.name);
                this.name = e.toUpperCase()
            },
            async onFormSubmit() {
                await this.connect(this.state.joinAs)
            },
            getBranchForRoom() {
                var n, i;
                if (!this.room) return null;
                const t = this.room.appTag,
                    e = window.tv.manifest.branches,
                    r = [this.branch, (i = (n = this.match) == null ? void 0 : n.params) == null ? void 0 : i.branch, this.room.controllerBranch, "** hmr **", qe.get("preference:branch"), "** dist **", "main"];
                for (let s = 0; s <= r.length; s++) {
                    const o = r[s];
                    if (o && e[o] && e[o].bundles[t]) return o
                }
                return null
            },
            shouldPromptForPassword(t) {
                return !(t !== "player" || this.isReconnectable || !this.room.passwordRequired || this.password)
            },
            async promptForPassword() {
                const t = await this.$showModal(Ole, {
                    room: this.room
                });
                if (t) {
                    if (t === !0) {
                        this.connect("audience");
                        return
                    }
                    this.password = t, this.connect("player")
                }
            },
            shouldPromptForTwitch(t) {
                return !(t !== "player" || !this.room.twitchLocked || this.twitchUser)
            },
            async promptForTwitch() {
                var r;
                const t = [{
                    text: this.$t("SUBMIT.TWITCH_LOGIN"),
                    classes: ["twitch"],
                    value: "twitch"
                }];
                switch ((r = this.room) != null && r.audienceEnabled ? t.push({
                        text: this.$t("SUBMIT.JOIN_AUDIENCE"),
                        classes: ["audience"],
                        value: "audience"
                    }) : t.push({
                        text: this.$t("ACTION.CANCEL"),
                        classes: ["cancel"],
                        value: "cancel"
                    }), await this.$showModal("Options", {
                        text: this.$t("ERROR.REQUIRES_TWITCH_LOGIN"),
                        options: t
                    })) {
                    case "twitch":
                        this.$emit("twitchLoginWasClicked");
                        return;
                    case "audience":
                        this.connect("audience")
                }
            },
            twitchDidUpdate(t, e) {
                if (t) {
                    let r = t.display_name;
                    r.length > this.nameLength && (r = `${r.slice(0,this.nameLength-1)}…`), this.name = r;
                    return
                }
                e && !t && (this.name = "")
            },
            async promptForRetry(t) {
                var n;
                let e = [{
                    text: this.$t("ACTION.OK"),
                    classes: ["cancel"],
                    value: "close"
                }];
                if ((n = this.room) != null && n.audienceEnabled && (e = [{
                        text: this.$t("FORM.PASSWORD_JOIN_AS_AUDIENCE"),
                        classes: ["audience"],
                        value: "audience"
                    }, {
                        text: this.$t("ACTION.CANCEL"),
                        classes: ["cancel"],
                        value: "close"
                    }]), t === "ERROR.AUDIENCE_IS_FULL" && (e = [{
                        text: this.$t("ACTION.OK"),
                        classes: ["ok"],
                        value: "ok"
                    }]), await this.$showModal("Options", {
                        text: this.$t(t),
                        options: e
                    }) === "audience") return this.connect("audience")
            },
            async getRoomInfo() {
                this.roomNotFound = !1;
                try {
                    const t = await this.api.getRoom({
                        code: this.code
                    });
                    this.room = t, this.warnings = await uj.warningsForAppTag(t.appTag), this.$i18n.locale = this.room.locale;
                    const e = this.getBranchForRoom();
                    if (!e) return;
                    this.branch = e, await this.preloadBundle()
                } catch (t) {
                    console.warn(t), this.room = null, this.roomNotFound = !0, this.branch = ""
                }
            },
            async preloadBundle() {
                if (!this.room || !this.branch || this.isPreloading) return;
                const t = this.preloaded.appTag !== this.room.appTag,
                    e = this.preloaded.branch !== this.branch;
                if (!(!t && !e)) {
                    this.preloaded = {
                        appTag: null,
                        branch: null
                    };
                    try {
                        this.isPreloading = !0, await window.tv.load({
                            app: this.room.appTag,
                            branch: this.branch
                        }), this.preloaded = {
                            appTag: this.room.appTag,
                            branch: this.branch
                        }
                    } catch (r) {
                        console.error(r), this.showError("ERROR.UNABLE_TO_PRELOAD")
                    }
                    this.isPreloading = !1
                }
            },
            getConnectOptions(t) {
                const e = t === "audience" ? this.room.audienceHost : this.room.host;
                let r = UE.username(this.name).trim();
                r.length > this.nameLength && (r = `${r.substring(0,this.nameLength-1)}…`);
                let n = gle();
                qe.isSupported && (n = qe.get("uuid") ?? n, qe.set("uuid", n));
                const i = {
                    host: e,
                    code: this.code.toUpperCase(),
                    name: r,
                    password: this.password,
                    role: t,
                    userId: n,
                    debug: "false"
                };
                return this.twitchUser && (i.twitchToken = this.twitchUser.token), this.isReconnectable && (i.id = this.reconnectData.id, i.secret = this.reconnectData.secret), i
            },
            async connect(t) {
                var r, n, i, s;
                if (!t || this.isConnecting || !this.state.canSubmit) return;
                if (await this.getRoomInfo(), !this.room) return this.showError("ERROR.ROOM_NOT_FOUND");
                if (this.shouldPromptForPassword(t)) return this.promptForPassword();
                if (this.shouldPromptForTwitch(t)) return this.promptForTwitch();
                if (!window.tv.connect || !window.tv.mount) return this.showError("ERROR.GENERIC");
                const e = this.getConnectOptions(t);
                if (e.host && e.code && e.name && !this.isConnecting) try {
                    this.isConnecting = !0;
                    const o = await window.tv.connect(e);
                    return this.storeReconnectData(e, o, t), la.setup(), la.gameJoined(this.room.appTag, {
                        role: t,
                        locale: this.room.locale || "en",
                        isQR: ((n = (r = this.match) == null ? void 0 : r.params) == null ? void 0 : n.ref) === "qr",
                        isTwitchConnected: !!e.twitchToken,
                        isReconnect: o.reconnect
                    }), window.tv.mount({
                        app: this.room.appTag,
                        branch: this.branch,
                        match: this.match,
                        room: this.room,
                        version: ((i = this.selectedBundle) == null ? void 0 : i.version) ?? ((s = this.selectedBranch) == null ? void 0 : s.version),
                        welcome: o
                    })
                } catch (o) {
                    console.error("[connect]", o), this.isConnecting = !1, this.onConnectionError(o, t)
                }
            },
            storeReconnectData(t, e, r) {
                qe.isSupported && this.shouldReplaceReconnectData(r) && (qe.set("name", t.name), qe.set("code", this.code), qe.set("branch", this.branch), qe.set("reconnect", `${e.id}:${r}:${e.secret}:${this.branch}`))
            },
            shouldReplaceReconnectData(t) {
                var e, r, n;
                return t === "player" || ((e = this.reconnectData) == null ? void 0 : e.joinAs) !== "player" || !((n = (r = this.game) == null ? void 0 : r.features) != null && n.includes("dropInDropOut"))
            },
            isEcastError(t) {
                return "code" in t
            },
            async onConnectionError(t, e) {
                var r;
                if (this.isEcastError(t)) return t.code === 2010 ? e === "audience" ? this.promptForRetry("ERROR.AUDIENCE_IS_FULL") : this.promptForRetry("ERROR.ROOM_IS_FULL") : t.code === 2009 ? this.promptForRetry("ERROR.ROOM_IS_LOCKED") : t.code === 2018 ? (await this.$showModal("Error", {
                    text: this.$t("ERROR.TITLE"),
                    subtext: this.$t("ERROR.INCORRECT_PASSWORD"),
                    dismissText: this.$t("ACTION.TRY_AGAIN")
                }), this.password = "", this.connect("player")) : t.code === 2013 ? this.showError("ERROR.ROOM_NOT_FOUND") : t.code === 2015 ? this.showError("ERROR.REQUIRES_TWITCH_LOGIN") : t.code === 2017 ? this.showError("FORM.PASSWORD_REQUIRED_TITLE") : t.code === 2021 ? this.showError("ERROR.FILTER_NAME") : t.code === 2023 ? this.showError("ERROR.KICKED") : void 0;
                if ((r = t.message) != null && r.includes("Network request failed")) return this.showError("ERROR.UNABLE_TO_CONNECT");
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
    Nle = t => (zl("data-v-47cae0dc"), t = t(), ql(), t),
    Ple = {
        for: "roomcode"
    },
    Ule = {
        key: 0,
        class: "status"
    },
    Dle = {
        key: 1,
        class: "status"
    },
    Ble = {
        key: 0,
        class: "warnings"
    },
    Mle = {
        for: "username"
    },
    $le = {
        class: "remaining"
    },
    Kle = {
        for: "branch"
    },
    kle = {
        key: 0,
        class: "status date"
    },
    Gle = ["disabled"],
    Vle = {
        key: 0,
        value: "",
        disabled: ""
    },
    Fle = {
        key: 1,
        value: "",
        disabled: ""
    },
    Hle = ["value"],
    Wle = {
        key: 0,
        class: "details"
    },
    Xle = ["disabled"],
    jle = Nle(() => ve("div", {
        class: "loading"
    }, null, -1)),
    zle = {
        class: "tos",
        role: "complementary"
    };

function qle(t, e, r, n, i, s) {
    const o = un("TextInput"),
        f = Eo("t"),
        c = Eo("bb");
    return Le(), Oe("form", {
        autocomplete: "off",
        onSubmit: e[3] || (e[3] = yn((...p) => t.onFormSubmit && t.onFormSubmit(...p), ["prevent"]))
    }, [ve("fieldset", null, [ve("label", Ple, [ds(Je(t.$t("FORM.ROOM_CODE")) + " ", 1), t.state.statusKey ? br((Le(), Oe("span", Ule, null, 512)), [
        [f, t.state.statusKey]
    ]) : t.state.statusText ? (Le(), Oe("span", Dle, Je(t.state.statusText), 1)) : gt("", !0)]), Vt(o, {
        id: "roomcode",
        modelValue: t.code,
        "onUpdate:modelValue": e[0] || (e[0] = p => t.code = p),
        type: "text",
        autocapitalize: "off",
        autocorrect: "off",
        autocomplete: "off",
        placeholder: t.$t("FORM.ROOM_CODE_PLACEHOLDER"),
        maxlength: t.codeLength,
        onInput: t.onCodeInput
    }, null, 8, ["modelValue", "placeholder", "maxlength", "onInput"]), t.room && t.warnings.length ? (Le(), Oe("div", Ble, [(Le(!0), Oe(qt, null, gs(t.warnings, p => (Le(), Oe(qt, null, [p === "flexbox" ? br((Le(), Oe("p", {
        key: p
    })), [
        [c, t.$t("WARNING.STYLE")]
    ]) : gt("", !0), p === "canvas" ? br((Le(), Oe("p", {
        key: p
    })), [
        [c, t.$t("ERROR.UNSUPPORTED_BROWSER")]
    ]) : gt("", !0), p === "camera" ? br((Le(), Oe("p", {
        key: p
    })), [
        [c, t.$t("WARNING.CAMERA")]
    ]) : gt("", !0)], 64))), 256))])) : gt("", !0), ve("label", Mle, [ds(Je(t.$t("FORM.NAME")) + " ", 1), ve("span", $le, Je(t.nameLength - t.name.length), 1)]), Vt(o, {
        id: "username",
        modelValue: t.name,
        "onUpdate:modelValue": e[1] || (e[1] = p => t.name = p),
        type: "text",
        autocapitalize: "off",
        autocorrect: "off",
        autocomplete: "off",
        disabled: t.twitchUser !== void 0,
        placeholder: t.$t("FORM.NAME_PLACEHOLDER"),
        maxlength: t.nameLength,
        onInput: t.onNameInput
    }, null, 8, ["modelValue", "disabled", "placeholder", "maxlength", "onInput"]), t.shouldShowBranchOptions ? (Le(), Oe(qt, {
        key: 1
    }, [ve("label", Kle, [ds(Je(t.$t("BRANCH.LABEL")) + " ", 1), t.selectedBranch ? (Le(), Oe("span", kle, Je(t.displayBranchLastUpdated), 1)) : gt("", !0)]), ve("div", {
        class: Vr(["select", {
            disabled: !t.room
        }])
    }, [br(ve("select", {
        id: "branch",
        "onUpdate:modelValue": e[2] || (e[2] = p => t.branch = p),
        class: Vr({
            "no-selection": !t.selectedBranch
        }),
        disabled: !t.room || t.isPreloading
    }, [t.room ? (Le(), Oe("option", Fle, Je(t.$t("BRANCH.SELECT")), 1)) : (Le(), Oe("option", Vle, Je(t.$t("BRANCH.WAITING")), 1)), (Le(!0), Oe(qt, null, gs(t.branchOptions, (p, d) => (Le(), Oe("option", {
        key: d,
        value: d
    }, Je(d), 9, Hle))), 128))], 10, Gle), [
        [Ay, t.branch]
    ]), t.selectedBranch ? (Le(), Oe("p", Wle, Je(t.displayBranchType) + " " + Je(t.displayVersion), 1)) : gt("", !0)], 2)], 64)) : gt("", !0), ve("button", {
        id: "button-join",
        type: "submit",
        class: Vr({
            connecting: t.isConnecting,
            audience: t.state.joinAs === "audience"
        }),
        disabled: !t.state.canSubmit
    }, [ve("span", null, Je(t.$t(t.state.submitKey)), 1), jle], 10, Xle)]), br(ve("p", zle, null, 512), [
        [c, t.$t("WARNING.TOS", {
            submit: t.$t(t.state.submitKey)
        })]
    ])], 32)
}
const Yle = Ur(Ile, [
        ["render", qle],
        ["__scopeId", "data-v-47cae0dc"]
    ]),
    Jle = cr({
        props: {
            pastGame: {
                type: Object,
                required: !0
            },
            isManaging: Boolean,
            index: Number,
            location: String
        },
        emits: {
            remove: t => !0
        },
        data() {
            return {
                viewed: !1,
                status: "loading",
                showConfirm: !1
            }
        },
        computed: {
            cta() {
                var t;
                return (t = this.pastGame.game.shopItems) != null && t.length ? this.$t("PAST_GAME.CALL_TO_ACTION.SHOP") : this.$t("PAST_GAME.CALL_TO_ACTION.VIEW")
            },
            hasPreviews() {
                var t;
                return ((t = this.pastGame.game.features) == null ? void 0 : t.includes("previews")) ?? !1
            },
            imageClasses() {
                return this.status === "error" || !this.hasPreviews ? ["fallback", this.pastGame.artifact.categoryId] : this.status === "success" ? ["preview"] : []
            },
            imageSrc() {
                return `https://s3.amazonaws.com/jbg-blobcast-artifacts/${this.pastGame.artifact.gameName}/${this.pastGame.artifact.artifactId}/preview.png`
            },
            name() {
                return this.showConfirm ? this.$t("PAST_GAME.REMOVE.CONFIRM") : this.isManaging ? this.$t("PAST_GAME.REMOVE.MANAGE") : this.pastGame.game.name ?? ""
            }
        },
        watch: {
            isManaging() {
                this.showConfirm = !1
            }
        },
        mounted() {
            la.galleryImpression(this.pastGame.artifact.categoryId, this.location)
        },
        methods: {
            onImageLoad() {
                this.status = "success"
            },
            onImageError() {
                this.status = "error"
            },
            onClick(t) {
                if (this.isManaging) {
                    t.preventDefault(), this.showConfirm = !0;
                    return
                }
                oo.setAsViewed(this.index), this.viewed = !0, la.galleryClick(this.pastGame.artifact.categoryId, this.location)
            },
            onCancelClick() {
                this.showConfirm = !1
            }
        }
    }),
    Lp = t => (zl("data-v-a6916483"), t = t(), ql(), t),
    Zle = ["href"],
    Qle = ["src", "alt"],
    eue = {
        class: "cta"
    },
    tue = Lp(() => ve("svg", {
        viewBox: "0 0 200 200",
        class: "external-icon"
    }, [ve("path", {
        d: `M185,106c-8.3,0-15,6.7-15,15v44c0,2.8-2.2,5-5,5H35c-2.8,0-5-2.2-5-5V35c0-2.8,2.2-5,5-5h44c8.3,0,15-6.7,15-15
                       S87.3,0,79,0H35C15.7,0,0,15.7,0,35v130c0,19.3,15.7,35,35,35h130
                       c19.3,0,35-15.7,35-35v-44C200,112.7,193.3,106,185,106z`
    }), ve("path", {
        d: `M184,0h-54c-8.3,0-15,6.7-15,15s6.7,15,15,15h18.8L90.4,88.4c-5.9,5.9-5.9,15.4,0,21.2c2.9,2.9,6.8,4.4,10.6,4.4
                        s7.7-1.5,10.6-4.4L170,51.2V70c0,8.3,6.7,15,15,15s15-6.7,15-15V16C200,7.2,192.8,0,184,0z`
    })], -1)),
    rue = {
        class: "content"
    },
    nue = {
        class: "name"
    },
    iue = {
        class: "date"
    },
    sue = {
        key: 0,
        class: "new"
    },
    aue = {
        key: 0,
        class: "items"
    },
    oue = {
        key: 0,
        viewBox: "0 0 200 200"
    },
    lue = Lp(() => ve("path", {
        d: `M187.4,47.8l-34.1-15.9V29c0-8.8-7.2-16-16-16H57.8c-8.8,0-16,7.2-16,16v18.9L13.6,61.1c-3.9,1.8-6.8,5-8.3,9
                    c-1.5,4-1.3,8.4,0.5,12.2l45,96.4c1.8,3.9,5,6.8,9,8.3c1.8,0.6,3.6,1,5.5,1c2.3,0,4.6-0.5,6.8-1.5l42.7-19.9l14.2,6.6
                    c2.2,1,4.5,1.5,6.7,1.5c6,0,11.8-3.4,14.5-9.2l45-96.4C198.9,61,195.4,51.5,187.4,47.8z M133.4,91.7L107,35.2
                    c-0.4-0.8-0.8-1.5-1.2-2.1h27.6V91.7z M61.8,33h12l-12,5.6V33z M67.2,166.7L25.7,77.5l64.9-30.3l41.6,89.2l-21.7,10.1
                    c0,0,0,0,0,0L67.2,166.7z M153.4,111.4V54l22,10.3L153.4,111.4z`
    }, null, -1)),
    uue = [lue],
    fue = {
        key: 1,
        viewBox: "0 0 200 200"
    },
    cue = Lp(() => ve("path", {
        d: `M164.7,52.2h-20.7V35.5c0-6.2-5-11.2-11.2-11.2H47.6c-6.2,0-11.2,5-11.2,11.2v118c0,12.8,10.4,23.2,23.2,23.2h61.3
                       c12.8,0,23.2-10.4,23.2-23.2v-16.2h20.7c14.3,0,25.9-11.6,25.9-25.9V78.1C190.7,63.8,179,52.2,164.7,52.2z
                       M174.2,111.4c0,5.2-4.3,9.5-9.5,9.5h-20.7V68.6h20.7c5.2,0,9.5,4.3,9.5,9.5V111.4z`
    }, null, -1)),
    pue = [cue],
    due = {
        key: 2,
        viewBox: "0 0 200 200"
    },
    hue = Lp(() => ve("path", {
        d: `M145.5,184.5H55.5c-4.1,0-7.5-3.4-7.5-7.5V95.2H29.6c-3.3,0-6.2-2.1-7.2-5.2L10,50.5c-1.2-3.7,0.7-7.7,4.3-9.2
                       L72.5,17c1.8-0.7,3.8-0.8,5.6-0.1c0.1,0,6.3,15.1,22.4,15.1S122.7,17,122.9,17c1.8-0.7,3.8-0.7,5.6,0.1l58.2,24.2
                       c3.6,1.5,5.4,5.5,4.3,9.2L178.5,90c-1,3.1-3.9,5.2-7.2,5.2H153V177C153,181.2,149.7,184.5,145.5,184.5z`
    }, null, -1)),
    Eue = [hue],
    mue = {
        key: 0,
        class: "confirm"
    },
    gue = {
        class: "contain"
    };

function _ue(t, e, r, n, i, s) {
    return t.pastGame.game ? (Le(), Oe("div", {
        key: 0,
        class: Vr(["past-game", {
            managing: t.isManaging,
            confirming: t.showConfirm
        }])
    }, [ve("a", {
        class: "card",
        href: t.pastGame.artifact.url,
        target: "_blank",
        onClick: e[2] || (e[2] = (...o) => t.onClick && t.onClick(...o))
    }, [ve("div", {
        class: Vr(["image", t.imageClasses])
    }, [t.hasPreviews ? (Le(), Oe("img", {
        key: 0,
        ref: "image",
        src: t.imageSrc,
        alt: t.pastGame.artifact.gameName,
        onError: e[0] || (e[0] = (...o) => t.onImageError && t.onImageError(...o)),
        onLoad: e[1] || (e[1] = (...o) => t.onImageLoad && t.onImageLoad(...o))
    }, null, 40, Qle)) : gt("", !0)], 2), ve("p", eue, [ds(Je(t.cta) + " ", 1), tue]), ve("div", rue, [ve("p", nue, Je(t.name), 1), ve("p", iue, [ve("span", null, Je(t.$t("PAST_GAME.PLAYED_ON")), 1), ds(Je(t.pastGame.artifact.date), 1)])]), !t.viewed && !t.pastGame.artifact.isViewed ? (Le(), Oe("p", sue, Je(t.$t("PAST_GAME.NEW")), 1)) : gt("", !0)], 8, Zle), t.pastGame.game.shopItems && t.pastGame.game.shopItems.length ? (Le(), Oe("div", aue, [(Le(!0), Oe(qt, null, gs(t.pastGame.game.shopItems, o => (Le(), Oe("div", {
        key: o,
        class: "item"
    }, [o === "cards" ? (Le(), Oe("svg", oue, uue)) : o === "mugs" ? (Le(), Oe("svg", fue, pue)) : o === "shirts" ? (Le(), Oe("svg", due, Eue)) : gt("", !0)]))), 128))])) : gt("", !0), Vt(jc, {
        name: "fade-transition"
    }, {
        default: Gc(() => [t.showConfirm ? (Le(), Oe("div", mue, [ve("div", gue, [ve("p", null, [ve("span", null, Je(t.$t("PAST_GAME.REMOVE.TITLE")), 1), ds(" " + Je(t.$t("PAST_GAME.REMOVE.DESCRIPTION")), 1)]), ve("button", {
            class: "confirm-yes",
            onClick: e[3] || (e[3] = o => t.$emit("remove", t.index))
        }, Je(t.$t("ACTION.REMOVE")), 1), ve("button", {
            class: "confirm-no",
            onClick: e[4] || (e[4] = (...o) => t.onCancelClick && t.onCancelClick(...o))
        }, Je(t.$t("ACTION.CANCEL")), 1)])])) : gt("", !0)]),
        _: 1
    })], 2)) : gt("", !0)
}
const sw = Ur(Jle, [
        ["render", _ue],
        ["__scopeId", "data-v-a6916483"]
    ]),
    Tue = cr({
        components: {
            PastGame: sw
        },
        props: {
            recentGames: {
                type: Array,
                default: () => []
            }
        },
        emits: ["pastGamesWasClicked"],
        methods: {
            onPastGamesClick() {
                this.$emit("pastGamesWasClicked")
            }
        }
    }),
    vue = {
        key: 0,
        class: "recent"
    },
    bue = {
        class: "constrain"
    },
    xue = {
        class: "top-items"
    };

function Rue(t, e, r, n, i, s) {
    const o = un("PastGame");
    return t.recentGames.length ? (Le(), Oe("div", vue, [ve("div", bue, [ve("div", xue, [ve("h3", null, Je(t.$t("RECENT_GAMES.TITLE")), 1), ve("button", {
        class: "view-all",
        onClick: e[0] || (e[0] = yn((...f) => t.onPastGamesClick && t.onPastGamesClick(...f), ["prevent"]))
    }, Je(t.$t("RECENT_GAMES.VIEW_ALL.BUTTON")), 1)]), (Le(!0), Oe(qt, null, gs(t.recentGames, f => (Le(), Pi(o, {
        key: f.artifact.url,
        "past-game": f,
        class: "home",
        location: "recent_game"
    }, null, 8, ["past-game"]))), 128)), t.recentGames.length >= 3 ? (Le(), Oe("a", {
        key: 0,
        class: "more",
        href: "#",
        onClick: e[1] || (e[1] = yn((...f) => t.onPastGamesClick && t.onPastGamesClick(...f), ["prevent"]))
    }, Je(t.$t("RECENT_GAMES.VIEW_ALL.LINK")), 1)) : gt("", !0)])])) : gt("", !0)
}
const Sue = Ur(Tue, [
        ["render", Rue],
        ["__scopeId", "data-v-b57c3cb3"]
    ]),
    yue = cr({
        data() {
            return {
                isLoading: !1,
                banners: []
            }
        },
        watch: {
            "$i18n.locale": function() {
                this.load()
            }
        },
        mounted() {
            this.load()
        },
        methods: {
            async load() {
                try {
                    const e = await (await fetch("https://cdn.jackboxgames.com/banners.json")).json(),
                        r = (e == null ? void 0 : e.bannerAds) ?? [];
                    this.banners = r.filter(this.isValidBanner.bind(this)).map(n => ({
                        url: n.href,
                        image: n.src,
                        text: n.text
                    })), this.banners.length || this.showDefault()
                } catch (t) {
                    this.showDefault(), console.warn("[SlideBanner] Could not load or parse banner data", t)
                } finally {
                    this.isLoading = !1
                }
            },
            showDefault() {
                this.banners = [{
                    url: "https://www.jackboxgames.com/packs/the-jackbox-party-pack-10?utm_source=jbgtvpp10&utm_medium=jbgtvpp10&utm_campaign=jbgtvpp10",
                    image: "https://cdn.jackboxgames.com/banner-images/pp10.png",
                    text: "Dostępne już teraz!"
                }]
            },
            isValidBanner(t) {
                const e = new Date;
                if (qe.isSupported && t.tags) {
                    const r = t.tags ?? [],
                        n = JSON.parse(qe.get("tags") ?? "[]");
                    if (!r.every(s => n.includes(s))) return !1
                }
                if (t.start) {
                    const r = new Date(t.start);
                    if (e < r) return !1
                }
                if (t.end) {
                    const r = new Date(t.end);
                    if (e > r) return !1
                }
                return !(!t.locale && this.$i18n.locale !== "en" || t.locale && this.$i18n.locale !== t.locale)
            },
            onClick(t) {
                window.open(t.url, "_blank"), la.bannerClick(t.url, "connect")
            }
        }
    }),
    Aue = {
        class: "slide-banner"
    },
    Lue = {
        key: 0,
        class: "loading"
    },
    Cue = {
        key: 1,
        "autoplay-delay": 5e3,
        "autoplay-disable-on-interaction": !1,
        "centered-slides": !0,
        "edge-swipe-detection": "prevent",
        loop: !0,
        pagination: !0,
        "slides-per-view": 1.5,
        "space-between": 6
    },
    wue = ["onClick"],
    Oue = ["src"];

function Iue(t, e, r, n, i, s) {
    return Le(), Oe("div", Aue, [t.isLoading ? (Le(), Oe("div", Lue, Je(t.$t("LOADING")), 1)) : gt("", !0), !t.isLoading && t.banners.length ? (Le(), Oe("swiper-container", Cue, [(Le(!0), Oe(qt, null, gs(t.banners, o => (Le(), Oe("swiper-slide", {
        key: o.url,
        class: "slide"
    }, [ve("button", {
        onClick: f => t.onClick(o)
    }, [ve("img", {
        src: o.image,
        draggable: "false",
        alt: "Advert"
    }, null, 8, Oue), ve("p", null, Je(o.text), 1)], 8, wue)]))), 128))])) : gt("", !0)])
}
const Nue = Ur(yue, [
        ["render", Iue],
        ["__scopeId", "data-v-1a297816"]
    ]),
    Pue = cr({
        data() {
            return {
                value: qe.get("preference:theme") || "device"
            }
        },
        watch: {
            value(t) {
                qe.set("preference:theme", t), window.dispatchEvent(new CustomEvent("themedidchange"))
            }
        }
    }),
    Uue = {
        class: "appearance"
    },
    Due = {
        for: "appearance"
    },
    Bue = {
        id: "appearance"
    },
    Mue = v$('<svg viewBox="0 0 340 85" data-v-727b0bbe><rect class="frame" x="87.5" width="165" height="85" rx="42.5" vector-effect="non-scaling-stroke" data-v-727b0bbe></rect><circle class="indicator" cx="170" cy="42.5" r="29.8" data-v-727b0bbe></circle><path class="celestial moon" d="M314.64,14.79A29.36,29.36,0,0,1,275,54.4a29.37,29.37,0,1,0,39.6-39.61Z" vector-effect="non-scaling-stroke" data-v-727b0bbe></path><circle class="celestial sun" cx="32.19" cy="42.72" r="13.05" vector-effect="non-scaling-stroke" data-v-727b0bbe></circle><line x1="32.19" y1="10.53" x2="32.19" y2="21.59" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="32.19" y1="63.85" x2="32.19" y2="74.91" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="0" y1="42.72" x2="11.06" y2="42.72" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="53.32" y1="42.72" x2="64.38" y2="42.72" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="12.01" y1="22.55" x2="17.25" y2="27.78" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="47.13" y1="57.66" x2="52.36" y2="62.89" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="12.01" y1="62.89" x2="17.25" y2="57.66" vector-effect="non-scaling-stroke" data-v-727b0bbe></line><line x1="47.13" y1="27.78" x2="52.36" y2="22.55" vector-effect="non-scaling-stroke" data-v-727b0bbe></line></svg>', 1),
    $ue = ["aria-label"],
    Kue = ["aria-label"];

function kue(t, e, r, n, i, s) {
    const o = Eo("t");
    return Le(), Oe("li", Uue, [br(ve("label", Due, null, 512), [
        [o, "MENU.APPEARANCE"]
    ]), ve("fieldset", Bue, [Mue, br(ve("input", {
        id: "light",
        "onUpdate:modelValue": e[0] || (e[0] = f => t.value = f),
        type: "radio",
        name: "theme",
        value: "light",
        "aria-label": t.$t("MENU.LIGHT")
    }, null, 8, $ue), [
        [Vv, t.value]
    ]), br(ve("input", {
        id: "dark",
        "onUpdate:modelValue": e[1] || (e[1] = f => t.value = f),
        type: "radio",
        name: "theme",
        value: "dark",
        "aria-label": t.$t("MENU.DARK")
    }, null, 8, Kue), [
        [Vv, t.value]
    ])])])
}
const Gue = Ur(Pue, [
        ["render", kue],
        ["__scopeId", "data-v-727b0bbe"]
    ]),
    Vue = cr({
        data() {
            const t = Object.keys(window.tv.manifest.branches);
            let e = "main";
            return t.includes("** hmr **") ? e = "** hmr **" : t.includes("** dist **") && (e = "** dist **"), {
                branch: qe.get("preference:branch") || e,
                branchHasChanged: !1
            }
        },
        computed: {
            branchOptions() {
                return Object.keys(window.tv.manifest.branches)
            }
        },
        watch: {
            branch(t, e) {
                e && e !== t && (qe.set("preference:branch", t), this.branchHasChanged = !0)
            }
        },
        methods: {
            reload() {
                window.location.reload()
            }
        }
    }),
    Fue = {
        key: 1,
        for: "branch"
    },
    Hue = {
        class: "select"
    },
    Wue = ["value"];

function Xue(t, e, r, n, i, s) {
    return Le(), Oe("li", null, [t.branchHasChanged ? (Le(), Oe("label", {
        key: 0,
        for: "branch",
        class: "changed",
        role: "button",
        tabIndex: "0",
        onClick: e[0] || (e[0] = (...o) => t.reload && t.reload(...o)),
        onKeyup: e[1] || (e[1] = so((...o) => t.reload && t.reload(...o), ["enter"]))
    }, Je(t.$t("BRANCH.REFRESH_REQUIRED")), 33)) : (Le(), Oe("label", Fue, Je(t.$t("BRANCH.PREFERRED")), 1)), ve("div", Hue, [br(ve("select", {
        id: "branch",
        "onUpdate:modelValue": e[2] || (e[2] = o => t.branch = o)
    }, [(Le(!0), Oe(qt, null, gs(t.branchOptions, o => (Le(), Oe("option", {
        key: o,
        value: o
    }, Je(o), 9, Wue))), 128))], 512), [
        [Ay, t.branch]
    ])])])
}
const jue = Ur(Vue, [
        ["render", Xue],
        ["__scopeId", "data-v-4e7c2aa2"]
    ]),
    zue = cr({
        components: {
            AppearanceRadio: Gue,
            PreferredBranch: jue
        },
        props: {
            hasUnseenGames: Boolean,
            twitch: Object
        },
        emits: ["pastGameWasClicked", "twitchLoginWasClicked", "twitchLogoutWasClicked"],
        computed: {
            shouldShowPreferredBranch() {
                return window.tv.manifest.environment !== "production"
            },
            version() {
                return window.tv.manifest.loader.version
            },
            isTwitchAuthenticated() {
                return this.twitch.user !== void 0
            }
        },
        methods: {
            onPastGamesClick() {
                this.$emit("pastGameWasClicked")
            },
            onTwitchLoginClick() {
                this.$emit("twitchLoginWasClicked")
            },
            onTwitchLogoutClick() {
                this.$emit("twitchLogoutWasClicked")
            },
            onLinkClick(t) {
                la.externalLinkClick(t, "hamburger")
            }
        }
    }),
    que = {
        class: "nav"
    },
    Yue = {
        key: 0,
        class: "twitch"
    },
    Jue = {
        key: 1,
        class: "twitch"
    },
    Zue = {
        class: "moderator"
    },
    Que = {
        href: "/moderator"
    },
    efe = {
        key: 0,
        class: "indicator"
    },
    tfe = {
        class: "social"
    },
    rfe = {
        class: "version"
    },
    nfe = {
        href: "/manifest"
    };

function ife(t, e, r, n, i, s) {
    const o = un("AppearanceRadio"),
        f = un("PreferredBranch");
    return Le(), Oe("nav", que, [ve("ul", null, [t.isTwitchAuthenticated ? (Le(), Oe("li", Jue, [ve("a", {
        role: "link",
        tabindex: "0",
        onKeyup: e[2] || (e[2] = so((...c) => t.onTwitchLogoutClick && t.onTwitchLogoutClick(...c), ["enter"])),
        onClick: e[3] || (e[3] = yn((...c) => t.onTwitchLogoutClick && t.onTwitchLogoutClick(...c), ["prevent"]))
    }, Je(t.$t("MENU.LOGOUT")), 33)])) : (Le(), Oe("li", Yue, [ve("a", {
        role: "link",
        tabindex: "0",
        onKeyup: e[0] || (e[0] = so((...c) => t.onTwitchLoginClick && t.onTwitchLoginClick(...c), ["enter"])),
        onClick: e[1] || (e[1] = yn((...c) => t.onTwitchLoginClick && t.onTwitchLoginClick(...c), ["prevent"]))
    }, Je(t.$t("MENU.TWITCH")), 33)])), ve("li", Zue, [ve("a", Que, Je(t.$t("MENU.MODERATOR")), 1)]), ve("li", null, [ve("a", {
        href: "http://help.jackboxgames.com",
        target: "_blank",
        onClick: e[4] || (e[4] = c => t.onLinkClick("help"))
    }, Je(t.$t("MENU.HELP")), 1)]), ve("li", null, [ve("a", {
        href: "https://shop.jackboxgames.com",
        target: "_blank",
        onClick: e[5] || (e[5] = c => t.onLinkClick("merch"))
    }, Je(t.$t("MENU.MERCH")), 1)]), ve("li", {
        role: "link",
        tabindex: "0",
        onKeyup: e[6] || (e[6] = so((...c) => t.onPastGamesClick && t.onPastGamesClick(...c), ["enter"])),
        onClick: e[7] || (e[7] = yn((...c) => t.onPastGamesClick && t.onPastGamesClick(...c), ["prevent"]))
    }, [ve("a", null, [ds(Je(t.$t("MENU.PAST_GAMES")) + " ", 1), t.hasUnseenGames ? (Le(), Oe("div", efe)) : gt("", !0)])], 32), Vt(o), t.shouldShowPreferredBranch ? (Le(), Pi(f, {
        key: 2
    })) : gt("", !0), ve("li", tfe, [ve("a", {
        class: "facebook",
        "aria-label": "facebook",
        target: "_blank",
        href: "https://www.facebook.com/JackboxGames",
        onClick: e[8] || (e[8] = c => t.onLinkClick("https://www.facebook.com/JackboxGames"))
    }), ve("a", {
        class: "twitter",
        "aria-label": "twitter",
        target: "_blank",
        href: "https://twitter.com/jackboxgames",
        onClick: e[9] || (e[9] = c => t.onLinkClick("https://twitter.com/jackboxgames"))
    }), ve("a", {
        class: "instagram",
        "aria-label": "instagram",
        target: "_blank",
        href: "https://www.instagram.com/playjackboxgames",
        onClick: e[10] || (e[10] = c => t.onLinkClick("https://www.instagram.com/playjackboxgames"))
    })]), ve("li", rfe, [ve("a", nfe, Je(t.version), 1)])])])
}
const sfe = Ur(zue, [
        ["render", ife],
        ["__scopeId", "data-v-d35c1006"]
    ]),
    afe = cr({
        components: {
            PastGame: sw
        },
        props: {
            artifacts: Object,
            filter: String
        },
        data() {
            return {
                isManaging: !1
            }
        },
        computed: {
            pastGames() {
                var e;
                return (e = this.artifacts) != null && e.artifacts ? this.artifacts.artifacts.map(r => ({
                    artifact: r,
                    game: eu(r.categoryId)
                })).filter(r => r.game ? this.filter ? this.filter === r.game.tag || this.filter === r.game.categoryId : !0 : !1) : []
            }
        },
        methods: {
            onManage() {
                this.isManaging = !this.isManaging
            },
            onRemove(t) {
                this.artifacts.remove(t)
            }
        }
    }),
    ofe = {
        key: 0,
        class: "past-games"
    },
    lfe = {
        class: "constrain"
    },
    ufe = {
        key: 0,
        class: "top-items"
    },
    ffe = {
        key: 1,
        class: "empty"
    };

function cfe(t, e, r, n, i, s) {
    const o = un("PastGame");
    return t.artifacts ? (Le(), Oe("div", ofe, [ve("div", lfe, [t.pastGames && t.pastGames.length ? (Le(), Oe("div", ufe, [ve("h3", null, Je(t.$t("PAST_GAMES.TITLE")), 1), ve("button", {
        class: "manage",
        onClick: e[0] || (e[0] = (...f) => t.onManage && t.onManage(...f))
    }, Je(t.isManaging ? t.$t("ACTION.DONE") : t.$t("PAST_GAMES.MANAGE")), 1)])) : (Le(), Oe("p", ffe, Je(t.$t("PAST_GAMES.EMPTY")), 1)), Vt(tK, {
        name: "list-transition"
    }, {
        default: Gc(() => [(Le(!0), Oe(qt, null, gs(t.pastGames, (f, c) => (Le(), Pi(o, {
            key: f.artifact.url,
            "past-game": f,
            index: c,
            "is-managing": t.isManaging,
            location: "past_game",
            onRemove: t.onRemove
        }, null, 8, ["past-game", "index", "is-managing", "onRemove"]))), 128))]),
        _: 1
    })])])) : gt("", !0)
}
const pfe = Ur(afe, [
        ["render", cfe],
        ["__scopeId", "data-v-40ec1b21"]
    ]),
    dfe = cr({
        components: {
            HamburgerMenu: sfe,
            PastGames: pfe
        },
        props: {
            artifacts: Object,
            twitch: Object
        },
        emits: ["twitchLoginWasClicked", "twitchLogoutWasClicked"],
        data() {
            return {
                graphicClass: null,
                openedTo: null,
                pastGamesFilter: null
            }
        },
        computed: {
            hasUnseenGames() {
                return this.artifacts.artifacts.length ? this.artifacts.hasUnviewed : !1
            }
        },
        methods: {
            onHamburgerClick() {
                this.openedTo = this.openedTo ? null : "menu", this.pastGamesFilter = null
            },
            onPastGamesClick() {
                this.openedTo = "pastGames"
            },
            onTwitchLoginClick() {
                this.$emit("twitchLoginWasClicked")
            },
            onTwitchLogoutClick() {
                this.$emit("twitchLogoutWasClicked"), this.openedTo = null
            }
        }
    }),
    hfe = t => (zl("data-v-604bf824"), t = t(), ql(), t),
    Efe = {
        class: "header constrain"
    },
    mfe = {
        class: "accessory"
    },
    gfe = {
        key: 0,
        class: "indicator"
    },
    _fe = hfe(() => ve("div", {
        class: "logo"
    }, null, -1)),
    Tfe = {
        key: 0,
        class: "graphic"
    },
    vfe = {
        class: "accessory"
    },
    bfe = {
        key: 0,
        class: "open-container"
    };

function xfe(t, e, r, n, i, s) {
    const o = un("PastGames"),
        f = un("HamburgerMenu");
    return t.twitch ? (Le(), Oe("div", {
        key: 0,
        class: Vr(["top-bar", {
            open: t.openedTo !== null
        }])
    }, [ve("header", Efe, [ve("div", mfe, [ve("button", {
        class: "hamburger-icon",
        onKeyup: e[0] || (e[0] = so((...c) => t.onHamburgerClick && t.onHamburgerClick(...c), ["enter"])),
        onClick: e[1] || (e[1] = (...c) => t.onHamburgerClick && t.onHamburgerClick(...c))
    }, [!t.openedTo && t.hasUnseenGames ? (Le(), Oe("div", gfe)) : gt("", !0)], 32)]), ve("div", {
        class: Vr(["center", t.graphicClass])
    }, [_fe, t.graphicClass ? (Le(), Oe("div", Tfe)) : gt("", !0)], 2), ve("div", vfe, [t.twitch.user ? (Le(), Oe("div", {
        key: 0,
        class: "twitch-avatar",
        style: Dc(`background-image: url(${t.twitch.user.profile_image_url});`)
    }, null, 4)) : gt("", !0)])]), t.openedTo ? (Le(), Oe("div", bfe, [t.openedTo === "pastGames" ? (Le(), Pi(o, {
        key: "pastGames",
        class: "screen",
        artifacts: t.artifacts,
        filter: t.pastGamesFilter
    }, null, 8, ["artifacts", "filter"])) : gt("", !0), t.openedTo === "menu" ? (Le(), Pi(f, {
        key: "menu",
        class: "screen",
        "has-unseen-games": t.hasUnseenGames,
        twitch: t.twitch,
        onPastGameWasClicked: t.onPastGamesClick,
        onTwitchLoginWasClicked: t.onTwitchLoginClick,
        onTwitchLogoutWasClicked: t.onTwitchLogoutClick
    }, null, 8, ["has-unseen-games", "twitch", "onPastGameWasClicked", "onTwitchLoginWasClicked", "onTwitchLogoutWasClicked"])) : gt("", !0)])) : gt("", !0)], 2)) : gt("", !0)
}
const Rfe = Ur(dfe, [
        ["render", xfe],
        ["__scopeId", "data-v-604bf824"]
    ]),
    Sfe = cr({
        name: "@connect",
        components: {
            Connect: Yle,
            TopBar: Rfe,
            RecentGames: Sue,
            SlideBanner: Nue
        },
        props: {
            options: Object
        },
        setup() {
            return {
                fatalError: Qs(vg.fatal.error)
            }
        },
        data() {
            return {
                artifacts: new oo,
                theme: qe.get("preference:theme") || "device",
                twitch: new Ej(this.options.match.hashString)
            }
        },
        computed: {
            classes() {
                const t = [`locale-${this.$i18n.locale}`, `theme-${this.theme}`];
                return this.recentGames.length && t.push("has-recent"), t
            },
            recentGames() {
                var t, e;
                return (e = (t = this.artifacts) == null ? void 0 : t.artifacts) == null ? void 0 : e.slice(0, 3).map(r => ({
                    artifact: r,
                    game: eu(r.categoryId)
                })).filter(r => r.game)
            },
            shouldShowFatal() {
                var t;
                return ((t = this.fatalError) == null ? void 0 : t.hasCrashed) ?? !1
            }
        },
        watch: {
            theme: {
                immediate: !0,
                handler: function() {
                    this.theme === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches ? document.documentElement.classList.add("cc--darkmode") : document.documentElement.classList.remove("cc--darkmode")
                }
            }
        },
        beforeMount() {
            this.setupTwitch(), window.addEventListener("themedidchange", this.onThemeChange)
        },
        mounted() {
            this.checkForPastGamesUrl()
        },
        beforeUnmount() {
            window.removeEventListener("themedidchange", this.onThemeChange), this.$cc.hide()
        },
        methods: {
            setupTwitch() {
                this.twitch.prepare()
            },
            onTwitchLoginClick() {
                this.twitch.login()
            },
            onTwitchLogoutClick() {
                this.twitch.logout()
            },
            onPastGamesClick() {
                const t = this.$refs.topBar;
                t.$data.openedTo = "pastGames"
            },
            onThemeChange(t) {
                this.theme = qe.get("preference:theme") || "device"
            },
            checkForPastGamesUrl() {
                var r;
                const t = (r = this.options) == null ? void 0 : r.match;
                if (!t || !t.url.includes("past-games")) return;
                const e = this.$refs.topBar;
                t.data.game && (e.$data.pastGamesFilter = t.data.game), e.$data.openedTo = "pastGames"
            }
        }
    }),
    yfe = {
        class: "form"
    },
    Afe = {
        class: "constrain"
    },
    Lfe = {
        key: 0,
        class: "bottom-logo",
        target: "_blank",
        href: "https://www.jackboxgames.com/?utm_source=jackboxtv&utm_medium=logo&utm_campaign=jackboxgames"
    };

function Cfe(t, e, r, n, i, s) {
    const o = un("Fatal"),
        f = un("TopBar"),
        c = un("Connect"),
        p = un("SlideBanner"),
        d = un("RecentGames"),
        E = un("Modal");
    return t.shouldShowFatal ? (Le(), Pi(o, {
        key: 0
    })) : (Le(), Oe("div", {
        key: 1,
        class: Vr(["jbg schemable sign-in", t.classes])
    }, [Vt(f, {
        ref: "topBar",
        twitch: t.twitch,
        artifacts: t.artifacts,
        onTwitchLoginWasClicked: t.onTwitchLoginClick,
        onTwitchLogoutWasClicked: t.onTwitchLogoutClick
    }, null, 8, ["twitch", "artifacts", "onTwitchLoginWasClicked", "onTwitchLogoutWasClicked"]), ve("div", yfe, [ve("div", Afe, [Vt(c, {
        match: t.options.match,
        "twitch-user": t.twitch.user,
        onTwitchLoginWasClicked: t.onTwitchLoginClick
    }, null, 8, ["match", "twitch-user", "onTwitchLoginWasClicked"]), Vt(p), t.recentGames.length ? gt("", !0) : (Le(), Oe("a", Lfe, Je(t.$t("HOMEPAGE_LINK")), 1))])]), Vt(d, {
        "recent-games": t.recentGames,
        onPastGamesWasClicked: t.onPastGamesClick
    }, null, 8, ["recent-games", "onPastGamesWasClicked"]), Vt(E)], 2))
}
const wfe = Ur(Sfe, [
    ["render", Cfe],
    ["__scopeId", "data-v-d720b942"]
]);
n3();
window.tv.register({
    mount: t => {
        var i;
        let e = cK(wfe, {
                options: t
            }),
            r;
        (i = t.match) != null && i.params.locale && (r = t.match.params.locale), qs.set(r);
        const n = Xk({
            fallbackLocale: "en",
            locale: qs.locale,
            messages: qs.mergeMessages(aq, Va)
        });
        return e.use(nte), e.use(Ase), e.use(n), e.use(iae, {
            i18n: n
        }), e.use(Cae), e.use(Tte, {
            revision: 1,
            guiOptions: {
                consentModal: {
                    layout: "bar inline",
                    position: "bottom",
                    equalWeightButtons: !0,
                    flipButtons: !0
                },
                preferencesModal: {
                    layout: "box",
                    position: "right",
                    equalWeightButtons: !0,
                    flipButtons: !1
                }
            },
            categories: {
                necessary: {
                    readOnly: !0
                }
            },
            language: {
                default: "en",
                autoDetect: "browser",
                translations: qs.supported.reduce((s, o) => {
                    var f;
                    return (f = Va[o]) != null && f.COOKIE && (s[o] = {
                        consentModal: {
                            label: Va[o].COOKIE.CONSENT_MODAL.ARIA,
                            description: e.config.globalProperties.$bb(Va[o].COOKIE.DESCRIPTION),
                            acceptAllBtn: Va[o].COOKIE.ACCEPT_ALL,
                            acceptNecessaryBtn: Va[o].COOKIE.REJECT_ALL
                        },
                        preferencesModal: {
                            sections: []
                        }
                    }), s
                }, {})
            }
        }), e.mount("#app"), () => {
            e.unmount(), e = null
        }
    },
    info: t => ({
        tag: "@connect",
        version: t.version,
        type: t.type,
        branch: t.branch
    })
});
//# sourceMappingURL=c7D441VH.js.map
