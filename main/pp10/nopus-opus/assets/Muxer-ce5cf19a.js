var me = Object.defineProperty;
var we = (e, t, r) => t in e ? me(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var f = (e, t, r) => (we(e, typeof t != "symbol" ? t + "" : t, r), r),
    F = (e, t, r) => {
        if (!t.has(e)) throw TypeError("Cannot " + r)
    };
var l = (e, t, r) => (F(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
    A = (e, t, r) => {
        if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
        t instanceof WeakSet ? t.add(e) : t.set(e, r)
    },
    $ = (e, t, r, n) => (F(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
import {
    c as ye
} from "../f56a178f.js";
var h;
(function(e) {
    e.LOAD = "LOAD", e.EXEC = "EXEC", e.WRITE_FILE = "WRITE_FILE", e.READ_FILE = "READ_FILE", e.DELETE_FILE = "DELETE_FILE", e.RENAME = "RENAME", e.CREATE_DIR = "CREATE_DIR", e.LIST_DIR = "LIST_DIR", e.DELETE_DIR = "DELETE_DIR", e.ERROR = "ERROR", e.DOWNLOAD = "DOWNLOAD", e.PROGRESS = "PROGRESS", e.LOG = "LOG", e.MOUNT = "MOUNT", e.UNMOUNT = "UNMOUNT"
})(h || (h = {}));
const be = (() => {
        let e = 0;
        return () => e++
    })(),
    pe = new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"),
    Ee = new Error("called FFmpeg.terminate()");
var b, T, R, C, D, U, m;
class Re {
    constructor() {
        A(this, b, null);
        A(this, T, {});
        A(this, R, {});
        A(this, C, []);
        A(this, D, []);
        f(this, "loaded", !1);
        A(this, U, () => {
            l(this, b) && (l(this, b).onmessage = ({
                data: {
                    id: t,
                    type: r,
                    data: n
                }
            }) => {
                switch (r) {
                    case h.LOAD:
                        this.loaded = !0, l(this, T)[t](n);
                        break;
                    case h.MOUNT:
                    case h.UNMOUNT:
                    case h.EXEC:
                    case h.WRITE_FILE:
                    case h.READ_FILE:
                    case h.DELETE_FILE:
                    case h.RENAME:
                    case h.CREATE_DIR:
                    case h.LIST_DIR:
                    case h.DELETE_DIR:
                        l(this, T)[t](n);
                        break;
                    case h.LOG:
                        l(this, C).forEach(i => i(n));
                        break;
                    case h.PROGRESS:
                        l(this, D).forEach(i => i(n));
                        break;
                    case h.ERROR:
                        l(this, R)[t](n);
                        break
                }
                delete l(this, T)[t], delete l(this, R)[t]
            })
        });
        A(this, m, ({
            type: t,
            data: r
        }, n = [], i) => l(this, b) ? new Promise((s, a) => {
            const o = be();
            l(this, b) && l(this, b).postMessage({
                id: o,
                type: t,
                data: r
            }, n), l(this, T)[o] = s, l(this, R)[o] = a, i == null || i.addEventListener("abort", () => {
                a(new DOMException(`Message # ${o} was aborted`, "AbortError"))
            }, {
                once: !0
            })
        }) : Promise.reject(pe));
        f(this, "load", async (t = {}, {
            signal: r
        } = {}) => {
            if (!l(this, b)) {
                const n = t.workerURL ? new URL(t.workerURL) : new URL("main/pp10/nopus-opus/assets/8f00505c.js", self.location);
                $(this, b, new Worker(n, {
                    type: "module"
                })), l(this, U).call(this)
            }
            return l(this, m).call(this, {
                type: h.LOAD,
                data: t
            }, void 0, r)
        });
        f(this, "exec", (t, r = -1, {
            signal: n
        } = {}) => l(this, m).call(this, {
            type: h.EXEC,
            data: {
                args: t,
                timeout: r
            }
        }, void 0, n));
        f(this, "terminate", () => {
            const t = Object.keys(l(this, R));
            for (const r of t) l(this, R)[r](Ee), delete l(this, R)[r], delete l(this, T)[r];
            l(this, b) && (l(this, b).terminate(), $(this, b, null), this.loaded = !1)
        });
        f(this, "writeFile", (t, r, {
            signal: n
        } = {}) => {
            const i = [];
            return r instanceof Uint8Array && i.push(r.buffer), l(this, m).call(this, {
                type: h.WRITE_FILE,
                data: {
                    path: t,
                    data: r
                }
            }, i, n)
        });
        f(this, "mount", (t, r, n) => {
            const i = [];
            return l(this, m).call(this, {
                type: h.MOUNT,
                data: {
                    fsType: t,
                    options: r,
                    mountPoint: n
                }
            }, i)
        });
        f(this, "unmount", t => {
            const r = [];
            return l(this, m).call(this, {
                type: h.UNMOUNT,
                data: {
                    mountPoint: t
                }
            }, r)
        });
        f(this, "readFile", (t, r = "binary", {
            signal: n
        } = {}) => l(this, m).call(this, {
            type: h.READ_FILE,
            data: {
                path: t,
                encoding: r
            }
        }, void 0, n));
        f(this, "deleteFile", (t, {
            signal: r
        } = {}) => l(this, m).call(this, {
            type: h.DELETE_FILE,
            data: {
                path: t
            }
        }, void 0, r));
        f(this, "rename", (t, r, {
            signal: n
        } = {}) => l(this, m).call(this, {
            type: h.RENAME,
            data: {
                oldPath: t,
                newPath: r
            }
        }, void 0, n));
        f(this, "createDir", (t, {
            signal: r
        } = {}) => l(this, m).call(this, {
            type: h.CREATE_DIR,
            data: {
                path: t
            }
        }, void 0, r));
        f(this, "listDir", (t, {
            signal: r
        } = {}) => l(this, m).call(this, {
            type: h.LIST_DIR,
            data: {
                path: t
            }
        }, void 0, r));
        f(this, "deleteDir", (t, {
            signal: r
        } = {}) => l(this, m).call(this, {
            type: h.DELETE_DIR,
            data: {
                path: t
            }
        }, void 0, r))
    }
    on(t, r) {
        t === "log" ? l(this, C).push(r) : t === "progress" && l(this, D).push(r)
    }
    off(t, r) {
        t === "log" ? $(this, C, l(this, C).filter(n => n !== r)) : t === "progress" && $(this, D, l(this, D).filter(n => n !== r))
    }
}
b = new WeakMap, T = new WeakMap, R = new WeakMap, C = new WeakMap, D = new WeakMap, U = new WeakMap, m = new WeakMap;
const Se = new Error("failed to get response body reader"),
    Le = new Error("failed to complete download"),
    xe = "Content-Length",
    Ae = e => new Promise((t, r) => {
        const n = new FileReader;
        n.onload = () => {
            const {
                result: i
            } = n;
            i instanceof ArrayBuffer ? t(new Uint8Array(i)) : t(new Uint8Array)
        }, n.onerror = i => {
            var s, a;
            r(Error(`File could not be read! Code=${((a=(s=i==null?void 0:i.target)==null?void 0:s.error)==null?void 0:a.code)||-1}`))
        }, n.readAsArrayBuffer(e)
    }),
    j = async e => {
        let t;
        if (typeof e == "string") /data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(e) ? t = atob(e.split(",")[1]).split("").map(r => r.charCodeAt(0)) : t = await (await fetch(e)).arrayBuffer();
        else if (e instanceof URL) t = await (await fetch(e)).arrayBuffer();
        else if (e instanceof File || e instanceof Blob) t = await Ae(e);
        else return new Uint8Array;
        return new Uint8Array(t)
    }, Te = async (e, t) => {
        var i;
        const r = await fetch(e);
        let n;
        try {
            const s = parseInt(r.headers.get(xe) || "-1"),
                a = (i = r.body) == null ? void 0 : i.getReader();
            if (!a) throw Se;
            const o = [];
            let c = 0;
            for (;;) {
                const {
                    done: d,
                    value: E
                } = await a.read(), L = E ? E.length : 0;
                if (d) {
                    if (s != -1 && s !== c) throw Le;
                    t && t({
                        url: e,
                        total: s,
                        received: c,
                        delta: L,
                        done: d
                    });
                    break
                }
                o.push(E), c += L, t && t({
                    url: e,
                    total: s,
                    received: c,
                    delta: L,
                    done: d
                })
            }
            const g = new Uint8Array(c);
            let u = 0;
            for (const d of o) g.set(d, u), u += d.length;
            n = g.buffer
        } catch (s) {
            console.log("failed to send download progress event: ", s), n = await r.arrayBuffer(), t && t({
                url: e,
                total: n.byteLength,
                received: n.byteLength,
                delta: 0,
                done: !0
            })
        }
        return n
    }, _ = async (e, t, r = !1, n) => {
        const i = r ? await Te(e, n) : await (await fetch(e)).arrayBuffer(),
            s = new Blob([i], {
                type: t
            });
        return URL.createObjectURL(s)
    };

function Ce(e, t, r, n, i, s, a = {}) {
    a.fontFamily = a.fontFamily ?? "sans-serif", a.fontSize = a.fontSize ?? 12, a.fontStyle = a.fontStyle ?? "normal", a.fontVariant = a.fontVariant ?? "normal", a.fontWeight = a.fontWeight ?? "normal", a.indent = a.indent ?? 0, a.lineHeight = a.lineHeight ?? 1, a.stroke = a.stroke ?? "#000000", a.textAlign = a.textAlign ?? "left", a.verticalAlign = a.verticalAlign ?? "center";
    const o = [];
    let c = 0;
    e.save();
    let g = !0;
    for (; g;) {
        let u = 0,
            d = t.length;
        e.font = `${a.fontStyle} ${a.fontVariant} ${a.fontWeight} ${a.fontSize}px ${a.fontFamily}`;
        const {
            fontBoundingBoxAscent: E,
            fontBoundingBoxDescent: L
        } = e.measureText(t);
        for (; u < d;) {
            const p = t.substring(u, d);
            let x = e.measureText(p).width;
            u === 0 && (x += a.indent), x > i ? (d = p.lastIndexOf(" ") + u, d < u && (d = p.length - 2 + u), d <= u && (d = u + 1)) : (o.push(p), u += p.length + 1, d = t.length, c = Math.max(c, x))
        }(E + L) * (o.length * a.lineHeight) > s ? (g = !0, a.fontSize -= 1, o.length = 0) : g = !1
    }
    return o.forEach((u, d) => {
        const E = d === 0 ? a.indent : 0,
            L = e.measureText(u).width + E;
        let p = 0;
        switch (a.textAlign) {
            case "center":
                p = r + (i - L) / 2;
                break;
            case "right":
                p = r + (i - L);
                break;
            case "left":
            default:
                p = r + E;
                break
        }
        let x = 0;
        switch (a.verticalAlign) {
            case "center": {
                let P = (s - a.lineHeight * a.fontSize * o.length) / 2;
                P < 0 && (P = 0), x = n + P + d * a.lineHeight * a.fontSize;
                break
            }
            default:
                x = n + d * a.lineHeight * a.fontSize;
                break
        }
        a.strokeWidth && (e.strokeStyle = a.stroke, e.lineWidth = a.strokeWidth, e.strokeText(u, p, x)), e.fillText(u, p, x)
    }), e.restore(), {
        width: c,
        lines: o.length
    }
}

function J(e) {
    return e.map(t => {
        const n = (Array.isArray(t.sources) ? t.sources : [t.sources]).map(i => {
            const s = i.split("."),
                a = s[s.length - 1];
            return `url('${i}') format('${a}')`
        }).join(",");
        return {
            fontFace: new FontFace(t.family, n, t.descriptors),
            sourceString: n
        }
    })
}
async function De(e) {
    if (!e.length) return [];
    const r = J(e).map(({
        fontFace: n
    }) => (document.fonts.add(n), n.load()));
    return Promise.all(r)
}

function Q(e) {
    if (!e.length) return "";
    const t = J(e);
    let r = "";
    return t.forEach(({
        fontFace: n,
        sourceString: i
    }) => {
        r += "@font-face {", r += `font-family: "${n.family}";`, r += `src: ${i};`, n.ascentOverride && (r += `ascent-override: ${n.ascentOverride};`), n.descentOverride && (r += `descent-override: ${n.descentOverride};`), n.display && (r += `font-display: ${n.display};`), n.featureSettings && (r += `font-feature-settings: ${n.featureSettings};`), n.lineGapOverride && (r += `line-gap-override: ${n.lineGapOverride};`), n.stretch && (r += `font-stretch: ${n.stretch};`), n.style && (r += `font-style: ${n.style};`), n.unicodeRange && (r += `unicode-range: ${n.unicodeRange};`), n.variant && (r += `font-variation-settings: ${n.variant};`), n.weight && (r += `font-weight: ${n.weight};`), r += "}"
    }), r
}

function Z(e) {
    const [, t] = e.type.split("/"), r = `file.${t}`;
    return new File([e], r, {
        type: e.type
    })
}
async function ee(e) {
    const t = await e.arrayBuffer();
    return new Blob([new Uint8Array(t)], {
        type: e.type
    })
}

function te(e) {
    return URL.createObjectURL(e)
}
async function $e(e) {
    const t = await ee(e);
    return te(t)
}

function re(e) {
    const [t, r] = e.split(","), n = t.replace("data:", "").replace(";base64", ""), i = window.atob(r), s = new Uint8Array(i.length);
    for (let a = 0; a < i.length; a++) s[a] = i.charCodeAt(a);
    return new Blob([s], {
        type: n
    })
}

function ve(e) {
    const t = re(e);
    return Z(t)
}
async function Ie(e) {
    if (!e.dataURL && !e.blob && !e.file) throw new Error("No useable render data created");
    return e.dataURL || (e.dataURL = e.blob ? te(e.blob) : await $e(e.file)), e.blob || (e.blob = e.file ? await ee(e.file) : re(e.dataURL)), e.file || (e.file = e.blob ? Z(e.blob) : ve(e.dataURL)), e
}
async function ne(e) {
    return new Promise((t, r) => {
        const n = new Image;
        n.crossOrigin = "anonymous", n.onload = () => t(n), n.onerror = r, n.src = e
    })
}
async function ie(e, t, r, n, i, s, a, o, c, g) {
    const u = await ne(t);
    a !== void 0 ? e.drawImage(u, r, n, i, s, a, o, c, g) : i !== void 0 ? e.drawImage(u, r, n, i, s) : e.drawImage(u, r, n)
}
async function Oe(e, t, r, n) {
    const s = new DOMParser().parseFromString(t, "image/svg+xml").documentElement;
    if (s.tagName !== "svg") throw new Error("drawSvgString requires an <svg> tag as it's root");
    if (s.hasAttribute("xmlns") || s.setAttribute("xmlns", "http://www.w3.org/2000/svg"), !s.hasAttribute("width") || !s.hasAttribute("height")) {
        const o = s.getAttribute("viewBox");
        if (!o) throw new Error("drawSvgString requires a viewBox");
        const [c, g, u, d] = o.split(" ");
        s.setAttribute("width", u), s.setAttribute("height", d)
    }
    const a = `data:image/svg+xml;base64,${window.btoa(s.outerHTML)}`;
    await ie(e, a, r, n)
}

function Ue(e, t) {
    if (e.match(/^[a-z]+:\/\//i)) return e;
    if (e.match(/^\/\//)) return window.location.protocol + e;
    if (e.match(/^[a-z]+:/i)) return e;
    const r = document.implementation.createHTMLDocument(),
        n = r.createElement("base"),
        i = r.createElement("a");
    return r.head.appendChild(n), r.body.appendChild(i), t && (n.href = t), i.href = e, i.href
}
const ke = (() => {
    let e = 0;
    const t = () => `0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);
    return () => (e += 1, `u${t()}${e}`)
})();

function S(e) {
    const t = [];
    for (let r = 0, n = e.length; r < n; r++) t.push(e[r]);
    return t
}

function I(e, t) {
    const n = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
    return n ? parseFloat(n.replace("px", "")) : 0
}

function Pe(e) {
    const t = I(e, "border-left-width"),
        r = I(e, "border-right-width");
    return e.clientWidth + t + r
}

function _e(e) {
    const t = I(e, "border-top-width"),
        r = I(e, "border-bottom-width");
    return e.clientHeight + t + r
}

function se(e, t = {}) {
    const r = t.width || Pe(e),
        n = t.height || _e(e);
    return {
        width: r,
        height: n
    }
}

function He() {
    let e, t;
    try {
        t = process
    } catch {}
    const r = t && t.env ? t.env.devicePixelRatio : null;
    return r && (e = parseInt(r, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1
}
const y = 16384;

function Me(e) {
    (e.width > y || e.height > y) && (e.width > y && e.height > y ? e.width > e.height ? (e.height *= y / e.width, e.width = y) : (e.width *= y / e.height, e.height = y) : e.width > y ? (e.height *= y / e.width, e.width = y) : (e.width *= y / e.height, e.height = y))
}

function O(e) {
    return new Promise((t, r) => {
        const n = new Image;
        n.decode = () => t(n), n.onload = () => t(n), n.onerror = r, n.crossOrigin = "anonymous", n.decoding = "async", n.src = e
    })
}
async function Be(e) {
    return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t => `data:image/svg+xml;charset=utf-8,${t}`)
}
async function We(e, t, r) {
    const n = "http://www.w3.org/2000/svg",
        i = document.createElementNS(n, "svg"),
        s = document.createElementNS(n, "foreignObject");
    return i.setAttribute("width", `${t}`), i.setAttribute("height", `${r}`), i.setAttribute("viewBox", `0 0 ${t} ${r}`), s.setAttribute("width", "100%"), s.setAttribute("height", "100%"), s.setAttribute("x", "0"), s.setAttribute("y", "0"), s.setAttribute("externalResourcesRequired", "true"), i.appendChild(s), s.appendChild(e), Be(i)
}
const w = (e, t) => {
    if (e instanceof t) return !0;
    const r = Object.getPrototypeOf(e);
    return r === null ? !1 : r.constructor.name === t.name || w(r, t)
};

function Fe(e) {
    const t = e.getPropertyValue("content");
    return `${e.cssText} content: '${t.replace(/'|"/g,"")}';`
}

function je(e) {
    return S(e).map(t => {
        const r = e.getPropertyValue(t),
            n = e.getPropertyPriority(t);
        return `${t}: ${r}${n?" !important":""};`
    }).join(" ")
}

function Ve(e, t, r) {
    const n = `.${e}:${t}`,
        i = r.cssText ? Fe(r) : je(r);
    return document.createTextNode(`${n}{${i}}`)
}

function V(e, t, r) {
    const n = window.getComputedStyle(e, r),
        i = n.getPropertyValue("content");
    if (i === "" || i === "none") return;
    const s = ke();
    try {
        t.className = `${t.className} ${s}`
    } catch {
        return
    }
    const a = document.createElement("style");
    a.appendChild(Ve(s, r, n)), t.appendChild(a)
}

function qe(e, t) {
    V(e, t, ":before"), V(e, t, ":after")
}
const q = "application/font-woff",
    z = "image/jpeg",
    ze = {
        woff: q,
        woff2: q,
        ttf: "application/font-truetype",
        eot: "application/vnd.ms-fontobject",
        png: "image/png",
        jpg: z,
        jpeg: z,
        gif: "image/gif",
        tiff: "image/tiff",
        svg: "image/svg+xml",
        webp: "image/webp"
    };

function Ge(e) {
    const t = /\.([^./]*?)$/g.exec(e);
    return t ? t[1] : ""
}

function B(e) {
    const t = Ge(e).toLowerCase();
    return ze[t] || ""
}

function Xe(e) {
    return e.split(/,/)[1]
}

function M(e) {
    return e.search(/^(data:)/) !== -1
}

function ae(e, t) {
    return `data:${t};base64,${e}`
}
async function oe(e, t, r) {
    const n = await fetch(e, t);
    if (n.status === 404) throw new Error(`Resource "${n.url}" not found`);
    const i = await n.blob();
    return new Promise((s, a) => {
        const o = new FileReader;
        o.onerror = a, o.onloadend = () => {
            try {
                s(r({
                    res: n,
                    result: o.result
                }))
            } catch (c) {
                a(c)
            }
        }, o.readAsDataURL(i)
    })
}
const H = {};

function Ne(e, t, r) {
    let n = e.replace(/\?.*/, "");
    return r && (n = e), /ttf|otf|eot|woff2?/i.test(n) && (n = n.replace(/.*\//, "")), t ? `[${t}]${n}` : n
}
async function W(e, t, r) {
    const n = Ne(e, t, r.includeQueryParams);
    if (H[n] != null) return H[n];
    r.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + new Date().getTime());
    let i;
    try {
        const s = await oe(e, r.fetchRequestInit, ({
            res: a,
            result: o
        }) => (t || (t = a.headers.get("Content-Type") || ""), Xe(o)));
        i = ae(s, t)
    } catch (s) {
        i = r.imagePlaceholder || "";
        let a = `Failed to fetch resource: ${e}`;
        s && (a = typeof s == "string" ? s : s.message), a && console.warn(a)
    }
    return H[n] = i, i
}
async function Ye(e) {
    const t = e.toDataURL();
    return t === "data:," ? e.cloneNode(!1) : O(t)
}
async function Ke(e, t) {
    if (e.currentSrc) {
        const s = document.createElement("canvas"),
            a = s.getContext("2d");
        s.width = e.clientWidth, s.height = e.clientHeight, a == null || a.drawImage(e, 0, 0, s.width, s.height);
        const o = s.toDataURL();
        return O(o)
    }
    const r = e.poster,
        n = B(r),
        i = await W(r, n, t);
    return O(i)
}
async function Je(e) {
    var t;
    try {
        if (!((t = e == null ? void 0 : e.contentDocument) === null || t === void 0) && t.body) return await k(e.contentDocument.body, {}, !0)
    } catch {}
    return e.cloneNode(!1)
}
async function Qe(e, t) {
    return w(e, HTMLCanvasElement) ? Ye(e) : w(e, HTMLVideoElement) ? Ke(e, t) : w(e, HTMLIFrameElement) ? Je(e) : e.cloneNode(!1)
}
const Ze = e => e.tagName != null && e.tagName.toUpperCase() === "SLOT";
async function et(e, t, r) {
    var n, i;
    let s = [];
    return Ze(e) && e.assignedNodes ? s = S(e.assignedNodes()) : w(e, HTMLIFrameElement) && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? s = S(e.contentDocument.body.childNodes) : s = S(((i = e.shadowRoot) !== null && i !== void 0 ? i : e).childNodes), s.length === 0 || w(e, HTMLVideoElement) || await s.reduce((a, o) => a.then(() => k(o, r)).then(c => {
        c && t.appendChild(c)
    }), Promise.resolve()), t
}

function tt(e, t) {
    const r = t.style;
    if (!r) return;
    const n = window.getComputedStyle(e);
    n.cssText ? (r.cssText = n.cssText, r.transformOrigin = n.transformOrigin) : S(n).forEach(i => {
        let s = n.getPropertyValue(i);
        i === "font-size" && s.endsWith("px") && (s = `${Math.floor(parseFloat(s.substring(0,s.length-2)))-.1}px`), w(e, HTMLIFrameElement) && i === "display" && s === "inline" && (s = "block"), i === "d" && t.getAttribute("d") && (s = `path(${t.getAttribute("d")})`), r.setProperty(i, s, n.getPropertyPriority(i))
    })
}

function rt(e, t) {
    w(e, HTMLTextAreaElement) && (t.innerHTML = e.value), w(e, HTMLInputElement) && t.setAttribute("value", e.value)
}

function nt(e, t) {
    if (w(e, HTMLSelectElement)) {
        const r = t,
            n = Array.from(r.children).find(i => e.value === i.getAttribute("value"));
        n && n.setAttribute("selected", "")
    }
}

function it(e, t) {
    return w(t, Element) && (tt(e, t), qe(e, t), rt(e, t), nt(e, t)), t
}
async function st(e, t) {
    const r = e.querySelectorAll ? e.querySelectorAll("use") : [];
    if (r.length === 0) return e;
    const n = {};
    for (let s = 0; s < r.length; s++) {
        const o = r[s].getAttribute("xlink:href");
        if (o) {
            const c = e.querySelector(o),
                g = document.querySelector(o);
            !c && g && !n[o] && (n[o] = await k(g, t, !0))
        }
    }
    const i = Object.values(n);
    if (i.length) {
        const s = "http://www.w3.org/1999/xhtml",
            a = document.createElementNS(s, "svg");
        a.setAttribute("xmlns", s), a.style.position = "absolute", a.style.width = "0", a.style.height = "0", a.style.overflow = "hidden", a.style.display = "none";
        const o = document.createElementNS(s, "defs");
        a.appendChild(o);
        for (let c = 0; c < i.length; c++) o.appendChild(i[c]);
        e.appendChild(a)
    }
    return e
}
async function k(e, t, r) {
    return !r && t.filter && !t.filter(e) ? null : Promise.resolve(e).then(n => Qe(n, t)).then(n => et(e, n, t)).then(n => it(e, n)).then(n => st(n, t))
}
const ce = /url\((['"]?)([^'"]+?)\1\)/g,
    at = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
    ot = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;

function ct(e) {
    const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g")
}

function lt(e) {
    const t = [];
    return e.replace(ce, (r, n, i) => (t.push(i), r)), t.filter(r => !M(r))
}
async function ut(e, t, r, n, i) {
    try {
        const s = r ? Ue(t, r) : t,
            a = B(t);
        let o;
        if (i) {
            const c = await i(s);
            o = ae(c, a)
        } else o = await W(s, a, n);
        return e.replace(ct(t), `$1${o}$3`)
    } catch {}
    return e
}

function ft(e, {
    preferredFontFormat: t
}) {
    return t ? e.replace(ot, r => {
        for (;;) {
            const [n, , i] = at.exec(r) || [];
            if (!i) return "";
            if (i === t) return `src: ${n};`
        }
    }) : e
}

function le(e) {
    return e.search(ce) !== -1
}
async function ue(e, t, r) {
    if (!le(e)) return e;
    const n = ft(e, r);
    return lt(n).reduce((s, a) => s.then(o => ut(o, a, t, r)), Promise.resolve(n))
}
async function v(e, t, r) {
    var n;
    const i = (n = t.style) === null || n === void 0 ? void 0 : n.getPropertyValue(e);
    if (i) {
        const s = await ue(i, null, r);
        return t.style.setProperty(e, s, t.style.getPropertyPriority(e)), !0
    }
    return !1
}
async function ht(e, t) {
    await v("background", e, t) || await v("background-image", e, t), await v("mask", e, t) || await v("mask-image", e, t)
}
async function dt(e, t) {
    const r = w(e, HTMLImageElement);
    if (!(r && !M(e.src)) && !(w(e, SVGImageElement) && !M(e.href.baseVal))) return;
    const n = r ? e.src : e.href.baseVal,
        i = await W(n, B(n), t);
    await new Promise((s, a) => {
        e.onload = s, e.onerror = a;
        const o = e;
        o.decode && (o.decode = s), o.loading === "lazy" && (o.loading = "eager"), r ? (e.srcset = "", e.src = i) : e.href.baseVal = i
    })
}
async function gt(e, t) {
    const n = S(e.childNodes).map(i => fe(i, t));
    await Promise.all(n).then(() => e)
}
async function fe(e, t) {
    w(e, Element) && (await ht(e, t), await dt(e, t), await gt(e, t))
}

function mt(e, t) {
    const {
        style: r
    } = e;
    t.backgroundColor && (r.backgroundColor = t.backgroundColor), t.width && (r.width = `${t.width}px`), t.height && (r.height = `${t.height}px`);
    const n = t.style;
    return n != null && Object.keys(n).forEach(i => {
        r[i] = n[i]
    }), e
}
const G = {};
async function X(e) {
    let t = G[e];
    if (t != null) return t;
    const n = await (await fetch(e)).text();
    return t = {
        url: e,
        cssText: n
    }, G[e] = t, t
}
async function N(e, t) {
    let r = e.cssText;
    const n = /url\(["']?([^"')]+)["']?\)/g,
        s = (r.match(/url\([^)]+\)/g) || []).map(async a => {
            let o = a.replace(n, "$1");
            return o.startsWith("https://") || (o = new URL(o, e.url).href), oe(o, t.fetchRequestInit, ({
                result: c
            }) => (r = r.replace(a, `url(${c})`), [a, c]))
        });
    return Promise.all(s).then(() => r)
}

function Y(e) {
    if (e == null) return [];
    const t = [],
        r = /(\/\*[\s\S]*?\*\/)/gi;
    let n = e.replace(r, "");
    const i = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
    for (;;) {
        const c = i.exec(n);
        if (c === null) break;
        t.push(c[0])
    }
    n = n.replace(i, "");
    const s = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
        a = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",
        o = new RegExp(a, "gi");
    for (;;) {
        let c = s.exec(n);
        if (c === null) {
            if (c = o.exec(n), c === null) break;
            s.lastIndex = o.lastIndex
        } else o.lastIndex = s.lastIndex;
        t.push(c[0])
    }
    return t
}
async function wt(e, t) {
    const r = [],
        n = [];
    return e.forEach(i => {
        if ("cssRules" in i) try {
            S(i.cssRules || []).forEach((s, a) => {
                if (s.type === CSSRule.IMPORT_RULE) {
                    let o = a + 1;
                    const c = s.href,
                        g = X(c).then(u => N(u, t)).then(u => Y(u).forEach(d => {
                            try {
                                i.insertRule(d, d.startsWith("@import") ? o += 1 : i.cssRules.length)
                            } catch (E) {
                                console.error("Error inserting rule from remote css", {
                                    rule: d,
                                    error: E
                                })
                            }
                        })).catch(u => {
                            console.error("Error loading remote css", u.toString())
                        });
                    n.push(g)
                }
            })
        } catch (s) {
            const a = e.find(o => o.href == null) || document.styleSheets[0];
            i.href != null && n.push(X(i.href).then(o => N(o, t)).then(o => Y(o).forEach(c => {
                a.insertRule(c, i.cssRules.length)
            })).catch(o => {
                console.error("Error loading remote stylesheet", o)
            })), console.error("Error inlining remote css file", s)
        }
    }), Promise.all(n).then(() => (e.forEach(i => {
        if ("cssRules" in i) try {
            S(i.cssRules || []).forEach(s => {
                r.push(s)
            })
        } catch (s) {
            console.error(`Error while reading CSS rules from ${i.href}`, s)
        }
    }), r))
}

function yt(e) {
    return e.filter(t => t.type === CSSRule.FONT_FACE_RULE).filter(t => le(t.style.getPropertyValue("src")))
}
async function bt(e, t) {
    if (e.ownerDocument == null) throw new Error("Provided element is not within a Document");
    const r = S(e.ownerDocument.styleSheets),
        n = await wt(r, t);
    return yt(n)
}
async function pt(e, t) {
    const r = await bt(e, t);
    return (await Promise.all(r.map(i => {
        const s = i.parentStyleSheet ? i.parentStyleSheet.href : null;
        return ue(i.cssText, s, t)
    }))).join(`
`)
}
async function Et(e, t) {
    const r = t.fontEmbedCSS != null ? t.fontEmbedCSS : t.skipFonts ? null : await pt(e, t);
    if (r) {
        const n = document.createElement("style"),
            i = document.createTextNode(r);
        n.appendChild(i), e.firstChild ? e.insertBefore(n, e.firstChild) : e.appendChild(n)
    }
}
async function Rt(e, t = {}) {
    const {
        width: r,
        height: n
    } = se(e, t), i = await k(e, t, !0);
    return await Et(i, t), await fe(i, t), mt(i, t), await We(i, r, n)
}
async function St(e, t = {}) {
    const {
        width: r,
        height: n
    } = se(e, t), i = await Rt(e, t), s = await O(i), a = document.createElement("canvas"), o = a.getContext("2d"), c = t.pixelRatio || He(), g = t.canvasWidth || r, u = t.canvasHeight || n;
    return a.width = g * c, a.height = u * c, t.skipAutoScale || Me(a), a.style.width = `${g}`, a.style.height = `${u}`, t.backgroundColor && (o.fillStyle = t.backgroundColor, o.fillRect(0, 0, a.width, a.height)), o.drawImage(s, 0, 0, a.width, a.height), a
}
const he = `/* reset css */
*, *::before, *::after {
    box-sizing: border-box;
    position: relative;
}

div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}

body {
    line-height: 1;
}

ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

.render {
    position: absolute;
    top: 0px;
    left: 0px;
    height: auto;
}`;

function Lt(e, t) {
    let r = e;
    return Object.keys(t).forEach(n => {
        const i = new RegExp(`{{\\s*${n}\\s*}}`, "g");
        r = r.replace(i, `${t[n]}`)
    }), r
}

function xt(e, t = "") {
    let r = "<style>";
    return r += Q(e), r += he, r += t, r += "</style>", r
}

function K(e, t) {
    const r = e.x < 0 ? -e.x : e.x,
        n = e.y < 0 ? -e.y : e.y;
    return new DOMRect(t.x + r, t.y + n, t.width, t.height)
}

function At(e, t = []) {
    const r = e.getBoundingClientRect(),
        n = {};
    let i = r.width,
        s = r.height;
    return e.querySelectorAll("*").forEach(a => {
        if (a.tagName.toLowerCase() === "style") return;
        const o = K(r, a.getBoundingClientRect());
        i < o.right && (i = o.right), s < o.bottom && (s = o.bottom)
    }), t.forEach(a => {
        const o = e.querySelectorAll(a);
        n[a] = Array.from(o).map(c => K(r, c.getBoundingClientRect()))
    }), {
        rootRect: new DOMRect(0, 0, i, s),
        elementRects: n
    }
}

function de(e, t) {
    const r = document.createElement("div");
    t.debug ? r.setAttribute("style", "position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background: rgba(33, 33, 33, 0.95);") : r.setAttribute("style", "position: absolute; top: -9999px; left: -9999px");
    const n = document.createElement("div");
    n.classList.add("render");
    let i = `width: ${t.windowWidth??e}px;`;
    return t.windowHeight && (i += `height: ${t.windowHeight}px`), n.setAttribute("style", i), r.append(n), document.body.append(r), [r, n]
}
async function ge(e, t, r, n, i, s) {
    const a = At(t[1], s.metricsSelectors),
        o = i / a.rootRect.width * (s.windowHeight ?? a.rootRect.height),
        c = await St(t[1], {
            backgroundColor: s.backgroundColor ?? "transparent",
            width: a.rootRect.width,
            height: a.rootRect.height,
            canvasWidth: i,
            canvasHeight: o,
            cacheBust: !0
        });
    return s.debug || t[0].remove(), e.drawImage(c, r, n, a.rootRect.width, a.rootRect.height), a
}
async function Tt(e, t, r, n, i, s) {
    const a = de(i, s),
        o = s.data ? Lt(t, s.data) : t,
        c = xt(this.fonts, s.css);
    return a[1].innerHTML = `${c}${o}`, ge(e, a, r, n, i, s)
}
async function Ct(e, t, r, n, i, s) {
    const a = de(i, s),
        o = document.createElement("style");
    let c = "";
    return c += Q(this.fonts), c += he, o.innerHTML = c, a[0].prepend(o), ye(t, s.props).mount(a[1]), ge(e, a, r, n, i, s)
}
class Dt {
    constructor(t) {
        f(this, "awaitingForReady", []);
        f(this, "artifact");
        f(this, "params");
        f(this, "fonts", []);
        f(this, "isReady", !1);
        f(this, "hasError", !1);
        f(this, "messages", {});
        f(this, "locale", "en");
        f(this, "renderData");
        f(this, "fillMultilineText", Ce.bind(this));
        f(this, "loadImage", ne);
        f(this, "drawAsyncImage", ie);
        f(this, "drawSvgString", Oe.bind(this));
        f(this, "drawHTML", Tt.bind(this));
        f(this, "drawVueComponent", Ct.bind(this));
        this.artifact = t.artifact, this.params = t.params ?? {}, t.messages && (this.messages = t.messages), t.locale ? this.locale = t.locale : t.artifact.blob.locale && (this.locale = t.artifact.blob.locale), setTimeout(() => void this.run(), 1)
    }
    async run() {
        var t, r;
        try {
            await ((t = this.setup) == null ? void 0 : t.call(this)), await De(this.fonts);
            const n = await this.render();
            this.renderData = await Ie(n), this.isReady = !0, this.awaitingForReady.forEach(([i, s]) => i())
        } catch (n) {
            this.hasError = !0, console.error(n), this.awaitingForReady.forEach(([i, s]) => s(n))
        } finally {
            await ((r = this.cleanup) == null ? void 0 : r.call(this))
        }
    }
    async ready() {
        return new Promise((t, r) => {
            if (this.isReady) {
                t();
                return
            }
            if (this.hasError) {
                r();
                return
            }
            this.awaitingForReady.push([t, r])
        })
    }
    getTranslation(t, r) {
        try {
            return t.split(".").reduce((i, s) => i[s], this.messages[r])
        } catch {
            return r === "en" ? (console.warn(`Missing translation key "${t}" for locale "${this.locale}"`), null) : this.getTranslation(t, "en")
        }
    }
    t(t, r) {
        let n = this.getTranslation(t, this.locale);
        return n ? (r && Object.keys(r).forEach(i => {
            n = n.replaceAll(`{${i}}`, r[i])
        }), n) : t
    }
}
class It extends Dt {
    constructor() {
        super(...arguments);
        f(this, "ffmpeg");
        f(this, "song")
    }
    setup() {
        const r = parseInt(this.params.index, 10);
        this.song = this.artifact.blob.songs[r]
    }
    async render() {
        this.ffmpeg = new Re;
        const r = "https://nopus-assets.jackbox.tv",
            n = "https://unpkg.com/@ffmpeg/core@0.12.4/dist/esm";
        await this.ffmpeg.load({
            coreURL: await _(`${n}/ffmpeg-core.js`, "text/javascript"),
            wasmURL: await _(`${n}/ffmpeg-core.wasm`, "application/wasm"),
            workerURL: await _(`${r}/ffmpeg/worker.js`, "text/javascript")
        });
        const i = await j(this.song.renderUrl),
            s = await j(`${r}/video/${this.song.slug}_${this.locale}.mp4`);
        await this.ffmpeg.writeFile("audio.mp3", i), await this.ffmpeg.writeFile("video.mp4", s), await this.ffmpeg.exec(["-stream_loop", "-1", "-i", "video.mp4", "-i", "audio.mp3", "-c:v", "copy", "-c:a", "aac", "-shortest", "loop.mp4"], 1e4);
        const a = await this.ffmpeg.readFile("loop.mp4");
        return {
            blob: new Blob([a.buffer], {
                type: "video/mp4"
            })
        }
    }
    async cleanup() {
        this.ffmpeg && (await this.ffmpeg.deleteFile("video.mp4"), await this.ffmpeg.deleteFile("audio.mp3"), await this.ffmpeg.deleteFile("loop.mp4"), this.ffmpeg.terminate(), delete this.ffmpeg)
    }
}
export {
    It as Muxer
};
//# sourceMappingURL=Muxer-ce5cf19a.js.map