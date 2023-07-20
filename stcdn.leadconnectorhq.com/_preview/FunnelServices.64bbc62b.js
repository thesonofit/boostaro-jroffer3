import {
  d as v,
  r as p,
  o as _,
  c as m,
  k as $,
  g as y,
  h as r,
  b as P,
  f as T,
  n as w,
  S as k,
  a as h,
  q as z,
  j as L,
  F as E,
} from "./entry.1f1c7eda.js";
import { $ as q } from "./helpers.2426d31a.js";
const F = v({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(e, { slots: t, attrs: a }) {
      const o = p(!1);
      return (
        _(() => {
          o.value = !0;
        }),
        (n) => {
          var g;
          if (o.value) return (g = t.default) == null ? void 0 : g.call(t);
          const u = t.fallback || t.placeholder;
          if (u) return u();
          const c = n.fallback || n.placeholder || "",
            f = n.fallbackTag || n.placeholderTag || "span";
          return m(f, a, c);
        }
      );
    },
  }),
  I = ["src", "alt"],
  x = { key: 1, class: "hl-image-picture" },
  R = ["srcset"],
  A = ["src", "alt"],
  O = ["src", "alt"],
  M = v({
    __name: "HLImage",
    props: {
      url: { type: String, required: !0 },
      format: { type: String, default: "webp" },
      quality: { type: Number, default: 80 },
      alt: { type: String },
      size: { type: Number },
      width: { type: String, required: !1, default: () => "auto" },
      height: { type: String, required: !1, default: () => "auto" },
      classList: { type: Array, required: !1, default: () => [] },
    },
    emits: ["load"],
    setup(e, { emit: t }) {
      const a = e,
        o = $(),
        n = o.IMAGE_CDN,
        u = o.IMAGE_CDN_WHITELIST,
        c = y(() => {
          try {
            const s = new URL(a.url);
            return u.includes(s.hostname);
          } catch {
            return console.warn("Invalid image url", a.url), !1;
          }
        }),
        f = y(() => {
          const s = a.height
              ? `${a.height}${a.height === "auto" ? "" : "px"} !important`
              : void 0,
            i = a.width
              ? `${a.width}${a.width === "auto" ? "" : "px"} !important`
              : void 0;
          return { height: s, width: i };
        }),
        g = 80,
        d = k("imageContainerWidth"),
        S = y(() => {
          var s, i;
          return ((s = d == null ? void 0 : d.value) == null
            ? void 0
            : s.clientWidth) &&
            ((i = d == null ? void 0 : d.value) == null
              ? void 0
              : i.clientWidth) !== 0
            ? d.value.clientWidth
            : 768;
        });
      return (s, i) =>
        e.size && r(c)
          ? (h(),
            m(
              "img",
              {
                key: 0,
                src: `${r(n)}/img/f_${e.format}/q_${g}/r_${e.size}/u_${e.url}`,
                alt: e.alt,
                class: "w-100 hl-optimized-fixed-size",
                onLoad: i[0] || (i[0] = (b) => t("load")),
                loading: "lazy",
              },
              null,
              40,
              I
            ))
          : !e.size && r(c)
          ? (h(),
            m("picture", x, [
              P(
                "source",
                {
                  srcset: `${r(n)}/img/f_${e.format}/q_${g}/r_${r(S)}/u_${
                    e.url
                  }`,
                },
                null,
                8,
                R
              ),
              P(
                "img",
                {
                  src: `${r(n)}/img/f_${e.format}/q_${g}/r_${r(S)}/u_${e.url}`,
                  alt: e.alt,
                  class: T([
                    "hl-optimized",
                    e.width ? e.classList : [...e.classList, "w-100"],
                  ]),
                  style: w(r(f)),
                  onLoad: i[1] || (i[1] = (b) => t("load")),
                  loading: "lazy",
                },
                null,
                46,
                A
              ),
            ]))
          : (h(),
            m(
              "img",
              {
                key: 2,
                class: T(["hl-un-optimized", e.classList]),
                src: e.url,
                alt: e.alt,
                onLoad: i[2] || (i[2] = (b) => t("load")),
                style: w({
                  width: e.width !== "auto" ? e.width + "px" : "auto",
                  height: e.height !== "auto" ? e.height + "px" : "auto",
                }),
                loading: "lazy",
              },
              null,
              46,
              O
            ));
    },
  });
const C = ["innerHTML"],
  N = ["id"],
  W = v({
    __name: "HtmlPreview",
    props: {
      code: { type: String, default: "" },
      id: { type: String, required: !0 },
    },
    setup(e) {
      var u;
      const t = e,
        a = new RegExp(/<s*(noscript)[^>]*>(.*?)<s*\/s*(noscript)>/g),
        o = p(
          (u = t.code.replace(/\n/g, " /**/ ").match(a)) == null
            ? void 0
            : u.join("").replace(
                /\/\*\*\//g,
                `
`
              )
        ),
        n = p(
          t.code
            .replace(/\n/g, " /**/ ")
            .replace(a, "")
            .replace(
              /\/\*\*\//g,
              `
`
            )
        );
      return (
        _(async () => {
          if (n != null && n.value) {
            const { default: c } = await z(
              () => import("./postscribe.b982a493.js").then((f) => f.p),
              [
                "./postscribe.b982a493.js",
                "./helpers.2426d31a.js",
                "./entry.1f1c7eda.js",
                "./entry.5ab75024.css",
                "./v4.48ec93ae.js",
                "./index.915ec9ba.js",
                "./HLConst.c4c5e8b3.js",
              ],
              import.meta.url
            );
            c(`#${t.id}-hl-custom-code`, n.value);
          }
        }),
        (c, f) => (
          h(),
          m(
            E,
            null,
            [
              r(o)
                ? (h(), m("div", { key: 0, innerHTML: r(o) }, null, 8, C))
                : L("", !0),
              r(n)
                ? (h(),
                  m(
                    "div",
                    { key: 1, id: e.id + "-hl-custom-code" },
                    null,
                    8,
                    N
                  ))
                : L("", !0),
            ],
            64
          )
        )
      );
    },
  });
function U() {
  return $().public.baseUrl;
}
const H = () => ({ channel: "APP", source: "WEB_USER", version: "2021-04-15" }),
  l = (e) => {
    const t = $().public;
    return q.create({ baseURL: e || t.REST_API_URLS, headers: H() });
  },
  j = {
    createContact: (e) =>
      l()("/funnels/order-form/contact", { body: e, method: "POST" }),
    listProducts: (e) =>
      l()("/funnels/order-form/public/products", { params: e }),
    findProductById: (e) =>
      l()("/funnels/order-form/public/product", { params: e }),
    verifyETag: (e) =>
      l(process.env.REST_API_URLS)("/funnels/domain/verify-etag", {
        params: e,
      }),
    funnelPayment: (e) =>
      l(U())("/v2/funnel/product/pay", { body: e, method: "POST" }),
    initiateOneStepPayment: (e) =>
      l()("/funnels/order-form/initiate-one-step-payment", {
        body: e,
        method: "POST",
      }),
    initiateTwoStepPayment: (e) =>
      l()("/funnels/order-form/initiate-two-step-payment", {
        body: e,
        method: "POST",
      }),
    initiatePaymentForUpsell: (e) =>
      l()("/funnels/order-form/initiate-upsell-payment", {
        body: e,
        method: "POST",
      }),
    verifyPayment: (e) =>
      l()("/funnels/order-form/verify-payment", { body: e, method: "POST" }),
    getGeoLocation: () => l()("/funnels/funnel/geo-location/"),
    getPage: (e) => l()("/funnels/page/data", { params: e }),
  };
export { j as F, M as _, F as a, W as b };
