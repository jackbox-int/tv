// Package imports for de-bundling suspected vendor code below.
import mixpanel from "https://esm.sh/mixpanel-browser@2.48.1";
import * as Sentry from "https://esm.sh/@sentry/browser@7";
import { Server, WebSocket, SocketIO } from "https://esm.sh/mock-socket@9";
import "https://esm.sh/whatwg-fetch@3";
import GraphemeSplitter from "https://esm.sh/grapheme-splitter@1";
import { isEqual, merge, cloneDeep, debounce, throttle } from "https://esm.sh/lodash-es@4";

// TODO(vendor-candidate): bundler helper emitted by Vite/Rollup/esbuild. Keep until this dump is rebuilt from source.
var _u = Object.defineProperty;
var hu = (t, e, r) => e in t ? _u(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[e] = r;
var le = (t, e, r) => (hu(t, typeof e != "symbol" ? e + "" : e, r), r);
// TODO(vendor-candidate): Vite modulepreload polyfill. Replace with build-tool output instead of maintaining manually.
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
    new MutationObserver(s => {
        for (const a of s)
            if (a.type === "childList")
                for (const f of a.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && i(f)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(s) {
        const a = {};
        return s.integrity && (a.integrity = s.integrity), s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? a.credentials = "include" : s.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
    }

    function i(s) {
        if (s.ep) return;
        s.ep = !0;
        const a = r(s);
        fetch(s.href, a)
    }
})();
const Fu = [{
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
    Pi = t => Fu.find(e => e.tag === t || e.galleryId === t || e.categoryId === t);

const bt = class bt {
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
        return e.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF\u2026!?*$+\-'_ .,]/gi, "").replace(/'/g, "’")
    }
    static sanitizeInput(e) {
        return e = e.replace("…", "..."), e.replace(/[^\u00A1\u0020-\u007E\u00BF-\u00FF’]/gi, "")
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
        return r.reduce((i, s) => (i.replaceAll(`<${s[0]}>`, `[${s[1]}]`), i.replaceAll(`</${s[0]}>`, `</${s[1]}>`), i), e)
    }
    static hexToRgb(e) {
        const r = new ArrayBuffer(4);
        new DataView(r).setUint32(0, parseInt(e.replace("#", ""), 16), !1);
        const s = new Uint8Array(r);
        return `${s[1]},${s[2]},${s[3]}`
    }
    static adjustColor(e, r) {
        let i = !1,
            s = e;
        s[0] === "#" && (s = s.slice(1), i = !0);
        const a = parseInt(s, 16),
            f = Math.min(Math.max(0, (a >> 16) * r), 255),
            u = Math.min(Math.max(0, (a >> 8 & 255) * r), 255);
        let E = (Math.min(Math.max(0, (a & 255) * r), 255) | u << 8 | f << 16).toString(16);
        for (; E.length < s.length;) E = `0${E}`;
        return (i ? "#" : "") + E
    }
    static isInTolerance(e, r, i) {
        return !(Math.abs(e.x - r.x) < i || Math.abs(e.y - r.y) > i)
    }
    static getDistanceBetweenPoints(e, r) {
        const i = [e.x - r.x, e.y - r.y],
            s = Math.hypot(...i);
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
        let i = (r - e) % 360;
        const s = i < 0 ? 1 : -1;
        return i = Math.abs(i), i > 180 ? s * (360 - i) : s * i
    }
    static getVelocity(e, r, i, s) {
        return this.getDistanceBetweenPoints(e, i) / (s - r)
    }
    static isInsideElement(e, r) {
        const i = r.getBoundingClientRect();
        return !(e.x < i.left || e.x > i.left + i.width || e.y < i.top || e.y > i.top + i.height)
    }
    static cyrb128(e) {
        let r = 1779033703,
            i = 3144134277,
            s = 1013904242,
            a = 2773480762;
        for (let f = 0, u; f < e.length; f++) u = e.charCodeAt(f), r = i ^ Math.imul(r ^ u, 597399067), i = s ^ Math.imul(i ^ u, 2869860233), s = a ^ Math.imul(s ^ u, 951274213), a = r ^ Math.imul(a ^ u, 2716044179);
        return r = Math.imul(s ^ r >>> 18, 597399067), i = Math.imul(a ^ i >>> 22, 2869860233), s = Math.imul(r ^ s >>> 17, 951274213), a = Math.imul(i ^ a >>> 19, 2716044179), [(r ^ i ^ s ^ a) >>> 0, (i ^ r) >>> 0, (s ^ r) >>> 0, (a ^ r) >>> 0]
    }
    static sfc32(e, r, i, s) {
        return function() {
            e >>>= 0, r >>>= 0, i >>>= 0, s >>>= 0;
            let f = e + r | 0;
            return e = r ^ r >>> 9, r = i + (i << 3) | 0, i = i << 21 | i >>> 11, s = s + 1 | 0, f = f + s | 0, i = i + f | 0, (f >>> 0) / 4294967296
        }
    }
};
le(bt, "queryParams", new URLSearchParams(window.location.search)), le(bt, "getQueryParam", e => bt.queryParams.get(e)), le(bt, "sleep", e => new Promise(r => {
    window.setTimeout(r, e)
}));
let Rt = bt;
class Ur {
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
            namespace: Rt.getQueryParam("namespace") ?? Rt.getQueryParam("ns") ?? this.defaultNamespace,
            isDisabled: Rt.queryParams.has("incognito") || Rt.queryParams.has("nc")
        }, e && (window.tv.storage.tag = e), r && (window.tv.storage.code = r.toLowerCase(), this.clearCodeScopedKeys(window.tv.storage.code))
    }
    static get(e, r) {
        return this.isSupported ? window.localStorage.getItem(this.getScopedKey(e, r)) : null
    }
    static set(e, r, i = "none") {
        if (this.isSupported) return window.localStorage.setItem(this.getScopedSetKey(e, i), r)
    }
    static remove(e, r) {
        if (this.isSupported) return window.localStorage.removeItem(this.getScopedKey(e, r))
    }
    static setTag(e) {
        const r = e.toLowerCase(),
            i = this.get("tags") ?? "[]",
            s = r.split("-")[0];
        let a = JSON.parse(i);
        a = a.filter(f => {
            const u = f.split("-")[0];
            return s !== u
        }), a.push(r), this.set("tags", JSON.stringify(a))
    }
    static getScopedKey(e, r) {
        const i = `${this.namespace}:${e}`,
            s = this.tag ? `${this.namespace}:${e}:tag:${this.tag}` : null,
            a = this.code ? `${this.namespace}:${e}:code:${this.code}` : null;
        if (r === "none") return i;
        if (r === "tag") {
            if (!s) throw new Error('[Storage] requested "tag" scope but tv.storage.tag is undefined');
            return s
        }
        if (r === "code") {
            if (!a) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
            return a
        }
        return a && window.localStorage.getItem(a) !== null ? a : s && window.localStorage.getItem(s) !== null ? s : i
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
            const i = r.split(":code:");
            i.length <= 1 || i[1] !== e && window.localStorage.removeItem(r)
        })
    }
}
le(Ur, "defaultNamespace", "tv");
// TODO(vendor-candidate): `mock-socket`-style exports end above: Server, WebSocket, SocketIO.
var Y_ = {
    exports: {}
};
(function(t) {
    (function() {
        function e(u, o) {
            var E = u.x - o.x,
                x = u.y - o.y;
            return E * E + x * x
        }

        function r(u, o, E) {
            var x = o.x,
                T = o.y,
                R = E.x - x,
                g = E.y - T;
            if (R !== 0 || g !== 0) {
                var A = ((u.x - x) * R + (u.y - T) * g) / (R * R + g * g);
                A > 1 ? (x = E.x, T = E.y) : A > 0 && (x += R * A, T += g * A)
            }
            return R = u.x - x, g = u.y - T, R * R + g * g
        }

        function i(u, o) {
            for (var E = u[0], x = [E], T, R = 1, g = u.length; R < g; R++) T = u[R], e(T, E) > o && (x.push(T), E = T);
            return E !== T && x.push(T), x
        }

        function s(u, o, E, x, T) {
            for (var R = x, g, A = o + 1; A < E; A++) {
                var U = r(u[A], u[o], u[E]);
                U > R && (g = A, R = U)
            }
            R > x && (g - o > 1 && s(u, o, g, x, T), T.push(u[g]), E - g > 1 && s(u, g, E, x, T))
        }

        function a(u, o) {
            var E = u.length - 1,
                x = [u[0]];
            return s(u, 0, E, o, x), x.push(u[E]), x
        }

        function f(u, o, E) {
            if (u.length <= 2) return u;
            var x = o !== void 0 ? o * o : 1;
            return u = E ? u : i(u, x), u = a(u, x), u
        }
        t.exports = f, t.exports.default = f
    })()
})(Y_);
var Qa = {},
    ai = {},
    fi = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.EXTENDED_PICTOGRAPHIC = t.CLUSTER_BREAK = void 0,
        function(e) {
            e[e.CR = 0] = "CR", e[e.LF = 1] = "LF", e[e.CONTROL = 2] = "CONTROL", e[e.EXTEND = 3] = "EXTEND", e[e.REGIONAL_INDICATOR = 4] = "REGIONAL_INDICATOR", e[e.SPACINGMARK = 5] = "SPACINGMARK", e[e.L = 6] = "L", e[e.V = 7] = "V", e[e.T = 8] = "T", e[e.LV = 9] = "LV", e[e.LVT = 10] = "LVT", e[e.OTHER = 11] = "OTHER", e[e.PREPEND = 12] = "PREPEND", e[e.E_BASE = 13] = "E_BASE", e[e.E_MODIFIER = 14] = "E_MODIFIER", e[e.ZWJ = 15] = "ZWJ", e[e.GLUE_AFTER_ZWJ = 16] = "GLUE_AFTER_ZWJ", e[e.E_BASE_GAZ = 17] = "E_BASE_GAZ"
        }(t.CLUSTER_BREAK || (t.CLUSTER_BREAK = {})), t.EXTENDED_PICTOGRAPHIC = 101
})(fi);
var ui = {};
Object.defineProperty(ui, "__esModule", {
    value: !0
});
const P = fi,
    Ie = 0,
    _n = 1,
    J_ = 2,
    Q_ = 3,
    Z_ = 4;
class eh {
    static isSurrogate(e, r) {
        return 55296 <= e.charCodeAt(r) && e.charCodeAt(r) <= 56319 && 56320 <= e.charCodeAt(r + 1) && e.charCodeAt(r + 1) <= 57343
    }
    static codePointAt(e, r) {
        r === void 0 && (r = 0);
        const i = e.charCodeAt(r);
        if (55296 <= i && i <= 56319 && r < e.length - 1) {
            const s = i,
                a = e.charCodeAt(r + 1);
            return 56320 <= a && a <= 57343 ? (s - 55296) * 1024 + (a - 56320) + 65536 : s
        }
        if (56320 <= i && i <= 57343 && r >= 1) {
            const s = e.charCodeAt(r - 1),
                a = i;
            return 55296 <= s && s <= 56319 ? (s - 55296) * 1024 + (a - 56320) + 65536 : a
        }
        return i
    }
    static shouldBreak(e, r, i, s, a, f) {
        const u = [e].concat(r).concat([i]),
            o = [s].concat(a).concat([f]),
            E = u[u.length - 2],
            x = i,
            T = f,
            R = u.lastIndexOf(P.CLUSTER_BREAK.REGIONAL_INDICATOR);
        if (R > 0 && u.slice(1, R).every(function(A) {
                return A === P.CLUSTER_BREAK.REGIONAL_INDICATOR
            }) && [P.CLUSTER_BREAK.PREPEND, P.CLUSTER_BREAK.REGIONAL_INDICATOR].indexOf(E) === -1) return u.filter(function(A) {
            return A === P.CLUSTER_BREAK.REGIONAL_INDICATOR
        }).length % 2 === 1 ? Q_ : Z_;
        if (E === P.CLUSTER_BREAK.CR && x === P.CLUSTER_BREAK.LF) return Ie;
        if (E === P.CLUSTER_BREAK.CONTROL || E === P.CLUSTER_BREAK.CR || E === P.CLUSTER_BREAK.LF) return _n;
        if (x === P.CLUSTER_BREAK.CONTROL || x === P.CLUSTER_BREAK.CR || x === P.CLUSTER_BREAK.LF) return _n;
        if (E === P.CLUSTER_BREAK.L && (x === P.CLUSTER_BREAK.L || x === P.CLUSTER_BREAK.V || x === P.CLUSTER_BREAK.LV || x === P.CLUSTER_BREAK.LVT)) return Ie;
        if ((E === P.CLUSTER_BREAK.LV || E === P.CLUSTER_BREAK.V) && (x === P.CLUSTER_BREAK.V || x === P.CLUSTER_BREAK.T)) return Ie;
        if ((E === P.CLUSTER_BREAK.LVT || E === P.CLUSTER_BREAK.T) && x === P.CLUSTER_BREAK.T) return Ie;
        if (x === P.CLUSTER_BREAK.EXTEND || x === P.CLUSTER_BREAK.ZWJ) return Ie;
        if (x === P.CLUSTER_BREAK.SPACINGMARK) return Ie;
        if (E === P.CLUSTER_BREAK.PREPEND) return Ie;
        const g = o.slice(0, -1).lastIndexOf(P.EXTENDED_PICTOGRAPHIC);
        return g !== -1 && o[g] === P.EXTENDED_PICTOGRAPHIC && u.slice(g + 1, -2).every(function(A) {
            return A === P.CLUSTER_BREAK.EXTEND
        }) && E === P.CLUSTER_BREAK.ZWJ && T === P.EXTENDED_PICTOGRAPHIC ? Ie : r.indexOf(P.CLUSTER_BREAK.REGIONAL_INDICATOR) !== -1 ? J_ : E === P.CLUSTER_BREAK.REGIONAL_INDICATOR && x === P.CLUSTER_BREAK.REGIONAL_INDICATOR ? Ie : _n
    }
}
ui.default = eh;
var oi = {};
Object.defineProperty(oi, "__esModule", {
    value: !0
});
class th {
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
oi.default = th;
// TODO(vendor-candidate): Unicode grapheme splitting helpers start here. Prefer a maintained grapheme splitter/segmenter package or Intl.Segmenter where supported.
// App-specific loader, translations, Sentry init options, wake-lock, debug helpers, and router start here.
function W_(...t) {
    console.log(...t)
}
const XT = "UNABLE TO LOAD. TAP TO TRY AGAIN.",
    jT = {
        RETRY: XT
    },
    FT = "CHARGEMENT IMPOSSIBLE. APPUYEZ POUR RÉESSAYER.",
    qT = {
        RETRY: FT
    },
    HT = "IMPOSSIBILE CARICARE. CLICCA PER RIPROVARE.",
    WT = {
        RETRY: HT
    },
    zT = "LADEN FEHLGESCHLAGEN. DRÜCKEN ZUM ERNEUT VERSUCHEN.",
    YT = {
        RETRY: zT
    },
    JT = "CARGA FALLIDA. TOCA PARA VOLVER A INTENTARLO.",
    QT = {
        RETRY: JT
    },
    ZT = "NO SE PUEDE CARGAR. TOCA PARA VOLVER A INTENTARLO.",
    eg = {
        RETRY: ZT
    },
    tg = "NÃO FOI POSSÍVEL CARREGAR. TOQUE PARA TENTAR DE NOVO.",
    rg = {
        RETRY: tg
    },
    Ws = {
        en: jT,
        fr: qT,
        it: WT,
        de: YT,
        es: QT,
        "es-XL": eg,
        "pt-BR": rg
    };
let ng = class {
    constructor(e) {
        le(this, "manifest");
        le(this, "registered", {});
        le(this, "register", e => {
            this.registered.connect = e.connect, this.registered.mount = e.mount, this.registered.info = e.info
        });
        le(this, "load", async e => {
            document.querySelectorAll("[data-tv-prefetch]").forEach(u => u.remove());
            const i = this.getBranchName(e),
                s = window.tv.manifest.branches[i];
            if (!s) throw new Error(`[loader] Unknown branch "${i}" can not be found in manifest`);
            const a = s.bundles[e.app];
            if (!a) throw new Error(`[loader] Unknown app "${e.app}" can not be loaded from branch "${i}"`);
            try {
                i === "** hmr **" ? await this.loadHMRBundle(a) : i === "** dist **" ? await this.loadDistBundle(a) : await this.loadS3Bundle(a)
            } catch {
                console.error(`[loader] Unable to load "${e.app}" from branch "${i}"`), this.showLoaderError();
                return
            }
            if (W_("[loader] load success", {
                    app: e.app,
                    appVersion: a.version ?? s.version,
                    loaderVersion: window.tv.manifest.loader.version,
                    branch: i
                }), !e.autoMount) return;
            const f = e;
            f.version = a.version ?? s.version, this.mount(f)
        });
        le(this, "connect", (e, r) => {
            if (!this.registered.connect) throw new Error("[loader] There is not a registered connect function");
            return this.registered.connect(e, r)
        });
        le(this, "mount", e => {
            var f, u;
            if (!this.registered.mount) {
                console.error("[loader] There is not a registered app to mount"), this.showLoaderError();
                return
            }
            const r = document.getElementsByClassName("loader-status")[0];
            if (r && r.remove(), this.registered.unmount && this.registered.unmount(), this.registered.info) {
                const o = this.registered.info(e);
                Sentry.setTags({
                    branch: o.branch,
                    "app.tag": o.tag,
                    "app.type": o.type,
                    "app.version": o.version,
                    "app.wrapper": o.wrapper
                })
            }
            Ur.setup(e.app, ((f = e.room) == null ? void 0 : f.code) ?? ((u = e.client) == null ? void 0 : u.code));
            const i = document.querySelectorAll("[data-tv-style]"),
                a = Array.from(document.querySelectorAll("[data-tv-prefetch]")).map(o => {
                    const E = document.createElement("link");
                    return E.rel = "stylesheet", E.href = o.href, E.setAttribute("data-tv-style", ""), E
                });
            document.head.append(...a), i.forEach(o => o.remove()), this.registered.unmount = this.registered.mount(e) ?? void 0, delete this.registered.connect, delete this.registered.mount, delete this.registered.info
        });
        le(this, "debugLoad", async (e, r) => {
            throw new Error("[Loader] Debug controllers are not available in production builds")
        });
        this.manifest = e
    }
    getBranchName(e) {
        var a, f, u, o, E;
        const r = (f = (a = e.match) == null ? void 0 : a.params) == null ? void 0 : f.branch,
            i = Ur.get("preference:branch"),
            s = this.manifest.branches;
        if (r) return r === "hmr" ? "** hmr **" : r === "dist" ? "** dist **" : r;
        if (e.branch) return e.branch;
        if ((u = s["** hmr **"]) != null && u.bundles[e.app]) return "** hmr **";
        if (i && ((o = s[i]) != null && o.bundles[e.app])) return i;
        if ((E = s["** dist **"]) != null && E.bundles[e.app]) return "** dist **";
        if (s.main) return "main";
        throw new Error("[loader] Could not resolve a branch name and main is not available")
    }
    getS3Url(e, r) {
        return `${r}/${e}`
    }
    async loadHMRBundle(e) {
        const r = e.file;
        await r()
    }
    loadScript(e) {
        return new Promise((r, i) => {
            const s = document.createElement("script");
            s.src = e, s.async = !0, s.type = "module", s.crossOrigin = "", s.onerror = i, s.onload = r, s.setAttribute("data-tv-script", ""), document.head.append(s)
        })
    }
    async fetchBundle(e, r, i) {
        r.forEach(a => {
            const f = i ? this.getS3Url(a, i) : a,
                u = document.createElement("link");
            i ? u.rel = "prefetch" : (u.rel = "preload", u.as = "style"), u.href = f, u.setAttribute("data-tv-prefetch", ""), document.head.append(u)
        });
        const s = i ? this.getS3Url(e, i) : e;
        await this.loadScript(s)
    }
    async loadDistBundle(e) {
        return this.fetchBundle(`/@fs/${e.file}`, e.css)
    }
    async loadS3Bundle(e) {
        return this.fetchBundle(e.file, e.css, e.base)
    }
    showLoaderError() {
        const e = document.getElementsByClassName("loader-status")[0];
        if (!e) return;
        const r = document.createElement("p"),
            i = navigator.languages[0],
            s = Ws[i] ?? Ws.en;
        e.classList.add("error"), r.textContent = s.RETRY, e.append(r), e.addEventListener("click", () => window.location.reload())
    }
};
const zs = {
        EcastEntityNotFound: 2005,
        EcastFilterError: 2021
    },
    ig = ["ceCurrentVideo.currentTime", "chrome-extension", "ResizeObserver", "webkitExitFullScreen", "window.webkit.messageHandlers.selectedTextHandler.postMessage", "promiseResolveThenableJob", "Cannot read property 'then' of undefined", "null is not an object (evaluating 't.scrollHeight')", "Cannot read properties of null (reading 'removeEventListener')"],
    sg = t => {
        Sentry.init({
            dsn: "https://bb026273d98c4b99ab11c1de369f521f@o420318.ingest.sentry.io/6387933",
            debug: false,
            environment: t.environment,
            release: `tv-mono@${t.loader.version}`,
            ignoreErrors: ig,
            beforeSend: async (e, r) => {
                if (r.originalException) {
                    const i = r.originalException;
                    if (i.code === zs.EcastEntityNotFound) return Sentry.captureMessage("no entity found having key", {
                        extra: {
                            exception: r.originalException
                        }
                    }), null;
                    if (i.code === zs.EcastFilterError) return null
                }
                if (window.tv.onError) try {
                    const i = await window.tv.onError(e, r);
                    i && (e.contexts = e.contexts || {}, e.contexts.debug = i)
                } catch (i) {
                    console.error("failed to send states to ecast", i)
                }
                return e
            }
        }), Sentry.setTags({
            "app.tag": "@loader",
            "app.version": t.loader.version,
            "app.type": t.loader.type,
            branch: t.loader.branch
        })
    };
let Ys;
async function Js() {
    if (!Ys) try {
        Ys = await navigator.wakeLock.request("screen")
    } catch (t) {
        console.warn(t)
    }
}
const ag = async () => {
    navigator.wakeLock && (await Js(), document.addEventListener("visibilitychange", () => {
        document.visibilityState === "visible" && Js()
    }))
};

function fg(t) {
    let e = "<div>";
    return t ? (e += `   <h1>Debug JSON Index : ${t}</h1>`, Object.keys(window.tv.debugMap[t]).forEach(r => {
        e += `    <a href="/${window.tv.debugMap[t][r]}" target="_blank">${r}</a>`
    })) : (e += "   <h1>Debug JSON Index</h1>", Object.keys(window.tv.debugMap).sort().forEach(r => {
        e += "    <details>", e += `        <summary>${r}</summary>`, Object.keys(window.tv.debugMap[r]).forEach(i => {
            e += `        <a href="/${window.tv.debugMap[r][i]}" target="_blank">${i}</a>`
        }), e += "    </details>"
    })), e += "</div>", e
}

function ug() {
    return `
    html {
        padding: 30px;
        background: #4254f4;
        color: #fff;
    }

    body {
        background: #4254f4;
    }

    body .loader-status {
        display: none;
    }

    h1 {
        font-size: 24px;
        padding-bottom: 15px;
    }

    details {
        width: 200px;
    }
    
    a {
        display: block;
        padding-left: 20px;
        color: #d4d8ff;
    }
    `
}

function Qs(t) {
    if (!window.tv.debugMap) return;
    const e = document.createElement("style");
    e.innerHTML = ug(), document.getElementsByTagName("html")[0].append(e);
    const i = document.getElementById("app");
    i.innerHTML = fg(t)
}

function og() {
    const t = window.tv.manifest;
    let e = "<div>";
    e += `   <h1>Current Manifest : ${t.environment}</h1>`;
    const r = new Date(t.loader.lastUpdated);
    return e += "   <h2>Loader</h2>", e += `   <p>last deployed: <strong>${r.toLocaleDateString()} ${r.toLocaleTimeString()}</strong></p>`, e += `   <p>branch: <strong>${t.loader.branch}</strong></p>`, e += `   <p>version: <strong>${t.loader.version}</strong></p>`, e += `   <p>type: <strong>${t.loader.type}</strong></p>`, e += "   <h2>Branches</h2>", Object.keys(t.branches).sort().forEach(i => {
        const s = t.branches[i],
            a = new Date(s.lastUpdated);
        e += "    <details>", e += "        <summary>", e += `            <span class="name">${i}</span>`, e += `            <span class="version">${s.version}</span>`, e += `            <span class="date">${a.toLocaleDateString()} ${a.toLocaleTimeString()}</span>`, e += `            <span class="type">${s.type}</span>`, e += `            <span class="type">${Object.keys(s.bundles).length} Apps</span>`, e += "        </summary>", Object.keys(s.bundles).forEach(f => {
            const u = s.bundles[f];
            u.version ? e += `        <p><span class="name">${f}</span> <span class="version">${u.version}</span></p>` : e += `        <p><span class="name">${f}</span> <span class="version">${s.version}</span></p>`
        }), e += "    </details>"
    }), e += "</div>", e
}

function lg() {
    return `
    html {
        padding: 30px;
        background: #4254f4;
        color: #fff;
    }

    body {
        background: #4254f4;
    }

    body .loader-status {
        display: none;
    }

    h1 {
        font-size: 24px;
    }

    h2 {
        padding-top: 30px;
    }

    details {
        padding: 3px 0;
        border-bottom: 1px solid #a4adfa;
    }

    details span {
        font-size: 14px;
        display: inline-block;
    }

    span.name {
        width: 175px;
    }

    span.version {
        width: 225px;
    }

    span.date {
        width: 225px;
        font-style: italic;
    }

    span.type {
        color: #4254F4;
        font-size: 11px;
        padding: 2px 10px 0px;
        background: #fff;
        border-radius: 10px;
    }
    
    details p {
        padding: 3px 0;
        padding-left: 30px;
        font-size: 14px;
    }

    details p:nth-child(odd) {
        background: rgba(255, 255, 255, 0.1);
    }
    `
}

function Eg() {
    if (!window.tv.manifest) return;
    const t = document.createElement("style");
    t.innerHTML = lg(), document.getElementsByTagName("html")[0].append(t);
    const r = document.getElementById("app");
    r.innerHTML = og()
}
const pg = {
        routes: [{
            path: "/",
            load: "@connect"
        }, {
            path: ["/past-games", "/past-games/:galleryId"],
            load: "@connect"
        }, {
            path: "/gallery",
            redirect: "/past-games"
        }, {
            path: "/gallery/:galleryId",
            handler: t => ({
                redirect: `/past-games/${t.data.galleryId}`
            })
        }, {
            path: ["/gallery/:galleryId/:artifactId", "/gallery/:galleryId/:artifactId/:itemId"],
            handler: t => {
                const e = Pi(t.data.galleryId);
                return !e || !e.categoryId ? {
                    redirect: "/"
                } : (t.data.categoryId = e.categoryId, {
                    load: e.tag
                })
            }
        }, {
            path: "/render/:galleryId/:artifactId/:renderer",
            handler: t => {
                const e = Pi(t.data.galleryId);
                return !e || !e.categoryId ? {
                    redirect: "/"
                } : {
                    load: e.tag
                }
            }
        }, {
            path: "/moderator",
            load: "@moderator"
        }, {
            path: ["/moderate", "/moderation", "/moderador", "/moderateur", "/moderatore"],
            redirect: "/moderator"
        }, {
            path: "/manifest",
            handler: () => {
                Eg()
            }
        }, {
            path: "/debug",
            handler: () => {
                Qs()
            }
        }, {
            path: ["/debug/:app", "/debug/local/:app"],
            handler: t => {
                Qs(t.data.app)
            }
        }, {
            path: ["/debug/local/:app/:file", "/debug/local/:app/:file/:marker"],
            debugLoad: "local"
        }, {
            path: ["/debug/cloud/:app/:file", "/debug/cloud/:app/:file/:marker"],
            debugLoad: "cloud"
        }]
    },
    cg = {
        hmrApps: ["teeko-web"],
        hostnames: ["teeko.jackboxgames.com"],
        routes: [{
            path: ["/", "/event"],
            load: "@teeko-web"
        }]
    };
class xg {
    constructor(e) {
        le(this, "hmrApp", "loader");
        le(this, "sites");
        this.sites = e;
        const r = this.getMatch(window.location.pathname);
        this.executeMatch(r)
    }
    executeMatch(e) {
        var i, s;
        const r = ((s = e == null ? void 0 : (i = e.route).handler) == null ? void 0 : s.call(i, e)) ?? (e == null ? void 0 : e.route);
        if (!e || !r) {
            this.redirect("/", e);
            return
        }
        if (r.debugLoad) {
            window.tv.debugLoad(r.debugLoad, e);
            return
        }
        if (r.load) {
            window.tv.load({
                app: r.load,
                match: e,
                autoMount: e.route.autoMount ?? !0
            });
            return
        }
        if (e.route.redirect) {
            this.redirect(e.route.redirect, e);
            return
        }
        if (!e.route.handler) throw console.error(e), new Error("[Router] Unable to execute match")
    }
    redirect(e, r) {
        const i = this.getMatch(e);
        if (!i) throw new Error("[Router] Redirecting to an unexpected path causes an infinite redirect loop");
        r && (i.hashString || (i.hashString = r.hashString), i.params || (i.params = r.params), i.queryString || (i.queryString = r.queryString)), window.history.replaceState(null, "", e), this.executeMatch(i)
    }
    getSite() {
        const e = document.location.hostname;
        return (e === "localhost" || e === "127.0.0.1" ? this.sites.find(i => {
            var s;
            return (s = i.hmrApps) == null ? void 0 : s.includes(this.hmrApp)
        }) : this.sites.find(i => {
            var s;
            return (s = i.hostnames) == null ? void 0 : s.includes(e)
        })) ?? this.sites[0]
    }
    splitPath(e) {
        return e.replace(/^\s*\/*\s*|\s*\/*\s*$/g, "").split("/")
    }
    matchRouteToPath(e, r) {
        if (e.length !== r.length) return !1;
        for (let i = 0; i < e.length; i++)
            if (e[i][0] !== ":" && e[i] !== r[i]) return !1;
        return !0
    }
    getRoute(e, r) {
        const i = this.splitPath(e);
        for (let s = 0; s < r.length; s++) {
            const a = Array.isArray(r[s].path) ? r[s].path : [r[s].path];
            for (let f = 0; f < a.length; f++) {
                const u = this.splitPath(a[f]);
                if (this.matchRouteToPath(u, i)) return {
                    route: r[s],
                    parts: u
                }
            }
        }
        return null
    }
    parseData(e, r) {
        const i = {},
            s = this.splitPath(e);
        for (let a = 0; a < r.parts.length; a++) r.parts[a][0] === ":" && (i[r.parts[a].substring(1)] = s[a]);
        return i
    }
    parseParams() {
        if (!document.location.search) return {};
        const e = new URLSearchParams(document.location.search);
        return Object.fromEntries(e)
    }
    getMatch(e) {
        const r = this.getSite(),
            i = this.getRoute(e, r.routes);
        if (!i) return null;
        const s = {
            url: document.location.href,
            route: i.route,
            path: i.parts.join("/"),
            parts: i.parts,
            data: this.parseData(e, i),
            params: this.parseParams()
        };
        if (document.location.hash) {
            let a = document.location.hash;
            document.location.hash[0] === "#" && (a = a.substring(1)), s.hashString = a
        }
        return document.location.search && (s.queryString = document.location.search), s
    }
}
const _g = "production",
    hg = 1,
    Rg = {
        branch: "main",
        sha: "c6ffc543bef04baa3516df1c2fea4fca33db2a0d",
        lastUpdated: 1716388451487,
        version: "5.456.206",
        type: "production"
    },
    bg = {
        main: {
            sha: "c6ffc543bef04baa3516df1c2fea4fca33db2a0d",
            lastUpdated: 1716388451487,
            version: "5.456.206",
            type: "production",
            bundles: {
                "@connect": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/@connect",
                    version: "5.421.180"
                },
                "the-wheel": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp8/the-wheel",
                    version: "5.94.0"
                },
                "drawful-animate": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp8/drawful-animate",
                    version: "5.229.113"
                },
                "@moderator": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/@moderator",
                    version: "5.374.144"
                },
                "awshirt-tjsp": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/tjsp/awshirt",
                    version: "5.436.189"
                },
                "ecast-test-client": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/internal/ecast-test-client",
                    version: "5.0.0"
                },
                drawful: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp1/drawful",
                    version: "5.0.0"
                },
                fibbage: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp1/fibbage",
                    version: "5.0.0"
                },
                lieswatter: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp1/lieswatter",
                    version: "5.0.0"
                },
                wordspud: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp1/wordspud",
                    version: "5.0.0"
                },
                ydkj2015: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp1/ydkj2015",
                    version: "5.0.0"
                },
                auction: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp2/auction",
                    version: "5.11.0"
                },
                bombintern: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp2/bombintern",
                    version: "5.10.0"
                },
                earwax: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp2/earwax",
                    version: "5.23.0"
                },
                fibbage2: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp2/fibbage2",
                    version: "5.3.0"
                },
                quiplash: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp2/quiplash",
                    version: "5.10.0"
                },
                awshirt: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp3/awshirt",
                    version: "5.10.0"
                },
                fakinit: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp3/fakinit",
                    version: "5.3.0"
                },
                pollposition: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp3/pollposition",
                    version: "5.3.0"
                },
                quiplash2: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp3/quiplash2",
                    version: "5.10.0"
                },
                triviadeath: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp3/triviadeath",
                    version: "5.10.0"
                },
                bracketeering: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp4/bracketeering",
                    version: "5.3.0"
                },
                fibbage3: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp4/fibbage3",
                    version: "5.3.0"
                },
                monstermingle: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp4/monstermingle",
                    version: "5.3.0"
                },
                overdrawn: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp4/overdrawn",
                    version: "5.3.0"
                },
                survivetheinternet: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp4/survivetheinternet",
                    version: "5.3.0"
                },
                patentlystupid: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp5/patentlystupid",
                    version: "5.3.0"
                },
                rapbattle: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp5/rapbattle",
                    version: "5.3.0"
                },
                slingshoot: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp5/slingshoot",
                    version: "5.3.0"
                },
                splittheroom: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp5/splittheroom",
                    version: "5.3.0"
                },
                ydkj2018: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp5/ydkj2018",
                    version: "5.3.0"
                },
                jokeboat: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp6/jokeboat",
                    version: "5.3.0"
                },
                pushthebutton: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp6/pushthebutton",
                    version: "5.366.138"
                },
                ridictionary: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp6/ridictionary",
                    version: "5.3.0"
                },
                rolemodels: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp6/rolemodels",
                    version: "5.25.0"
                },
                triviadeath2: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp6/triviadeath2",
                    version: "5.456.206"
                },
                "blanky-blank": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp7/blanky-blank",
                    version: "5.3.0"
                },
                everyday: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp7/everyday",
                    version: "5.3.0"
                },
                "jackbox-talks": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp7/jackboxtalks",
                    version: "5.25.0"
                },
                quiplash3: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp7/quiplash3",
                    version: "5.359.132"
                },
                worldchamps: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp7/worldchamps",
                    version: "5.144.39"
                },
                "acquisitions-inc": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/standalone/acquisitions-inc",
                    version: "5.3.0"
                },
                drawful2international: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/standalone/drawful2-international",
                    version: "5.3.0"
                },
                drawful2: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/standalone/drawful2",
                    version: "5.10.0"
                },
                "guesspionage-crowdplay": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/standalone/guesspionage-crowdplay",
                    version: "5.0.0"
                },
                "quiplash2-international": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/standalone/quiplash2-international",
                    version: "5.3.0"
                },
                "survey-bomb": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp8/survey-bomb",
                    version: "5.94.0"
                },
                "triviadeath2-tjsp": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/tjsp/triviadeath2",
                    version: "5.436.189"
                },
                "murder-detectives": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp8/murder-detectives",
                    version: "5.431.187"
                },
                "quiplash3-tjsp": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/tjsp/quiplash3",
                    version: "5.436.189"
                },
                "apply-yourself": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp8/apply-yourself",
                    version: "5.0.0"
                },
                "antique-freak": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp9/antique-freak",
                    version: "5.94.0"
                },
                fourbage: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp9/fourbage",
                    version: "5.94.0"
                },
                htmf: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp9/htmf",
                    version: "5.359.132"
                },
                lineup: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp9/lineup",
                    version: "5.297.119"
                },
                "range-game": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp9/range-game",
                    version: "5.94.0"
                },
                prototype: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/internal/prototype",
                    version: "5.445.196"
                },
                "@teeko-web": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/@teeko-web",
                    version: "5.353.130"
                },
                awshirt2: {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp10/awshirt2",
                    version: "5.353.130"
                },
                "nopus-opus": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp10/nopus-opus",
                    version: "5.349.128"
                },
                "risky-text": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp10/risky-text",
                    version: "5.356.132"
                },
                "time-trivia": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp10/time-trivia",
                    version: "5.348.128"
                },
                "us-them": {
                    file: "script.js",
                    css: ["assets/style-0.css"],
                    base: "main/pp10/us-them",
                    version: "5.385.151"
                }
            }
        }
    },
    Tg = {
        environment: _g,
        version: hg,
        loader: Rg,
        branches: bg
    },
    Li = Tg;
let gg = ng;
const Ft = new gg(Li);
window.tv = {
    debugLoad: Ft.debugLoad,
    load: Ft.load,
    register: Ft.register,
    mount: Ft.mount,
    connect: Ft.connect,
    manifest: Li
};
sg(Li);
Ur.setup();
ag();
new xg([pg, cg]);
