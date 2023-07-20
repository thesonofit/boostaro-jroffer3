import { S as st } from "./components.9404ac9d.js";
import {
  u as ae,
  d as N,
  w as Fe,
  v as ze,
  a as r,
  e as b,
  c as T,
  n as ue,
  f as w,
  r as I,
  g as D,
  o as J,
  h as a,
  i as H,
  j as h,
  _ as Ve,
  k as tn,
  b as x,
  F as Re,
  l as Ke,
  t as Ue,
  m as Xe,
  p as $,
  q as M,
  s as rt,
  x as ut,
  y as ct,
  z as mt,
  A as dt,
  B as gt,
  C as We,
  D as pt,
  E as _t,
  G as vt,
  H as yt,
  I as ht,
  J as ft,
  K as bt,
  L as Be,
} from "./entry.1f1c7eda.js";
import { u as pe, v as Et, a as Tt } from "./v4.48ec93ae.js";
import { u as Ct } from "./composables.52a41ef4.js";
import {
  m as He,
  v as jn,
  c as wt,
  e as It,
  s as Ge,
  a as Se,
  g as Rt,
  b as St,
  w as Ot,
  d as Je,
  f as Qn,
  p as At,
  r as Lt,
  h as Dt,
  $ as Pt,
  i as Nn,
  j as $n,
  k as kt,
  l as Mn,
  n as Nt,
} from "./helpers.2426d31a.js";
import {
  _ as Jn,
  a as en,
  b as $t,
  F as Mt,
} from "./FunnelServices.64bbc62b.js";
import { u as ie } from "./index.915ec9ba.js";
import { T as _e } from "./HLConst.c4c5e8b3.js";
import { c as xt } from "./Attributions.1e04b7e4.js";
import { s as Bt } from "./index.3a7f695e.js";
const re = {
  VISIBILITY: "visibility",
  STICKY: "sticky",
  TEXT: "text",
  DESKTOP_FONT_SIZE: "desktopFontSize",
  MOBILE_FONT_SIZE: "mobileFontSize",
  TYPOGRAPHY: "typography",
  BG_IMAGE: "bgImage",
  ICON: "icon",
  VIDEO_PROPERTIES: "videoProperties",
  IMAGE_PROPERTIES: "imageProperties",
  DIVIDER_PROPERTIES: "dividerProperties",
  CUSTOM_CODE: "customCode",
  SUB_TEXT: "subText",
  SUB_TEXT_DESKTOP_FONT_SIZE: "subTextDesktopFontSize",
  SUB_TEXT_MOBILE_FONT_SIZE: "subTextMobileFontSize",
  ACTION: "action",
  VISIT_WEBSITE: "visitWebsite",
  HIDE_ELEMENT: "hideElements",
  SCROLL_TO_ELEMENT: "scrollToElement",
  PHONE_NUMBER: "phoneNumber",
  EMAIL_ADDRESS: "emailAddress",
  PRODUCT_ID: "productId",
  ICON_START: "iconStart",
  ICON_END: "iconEnd",
  END_DATE: "endDate",
  END_TIME: "endTime",
  TRANSLATE: "translate",
  EXPIRE_ACTION: "expireAction",
  REDIRECT_URL: "redirectUrl",
  HIDE_ELEMENTS: "hideElements",
  TIME_ZONE: "timezone",
  HOURS: "hours",
  MINUTES: "minutes",
  SECONDS: "seconds",
  REVISIT_ACTION: "revisitAction",
  EXPIRE_COOKIE: "cookieDate",
  SHOW_ELEMENTS: "showElements",
  TWO_STEP_ORDER_ACTIVE_MODE: "activeMode",
  TWO_STEP_ORDER_STEP_1: "step1",
  TWO_STEP_ORDER_STEP_2: "step2",
  TWO_STEP_ORDER_STEP_BUMP: "bump",
  FORM_ID: "formId",
  CALENDAR_ID: "calendarId",
  SURVEY_ID: "surveyId",
  ROW_WIDTH: "rowWidth",
  OVERLAY_COLOR: "overlayColor",
  LEFT: "left",
  POPUP_DISABLED: "popupDisabled",
  HIDE_POPUP: "popupHide",
  MIN_WIDTH: "minWidth",
  SHOW_POPUP_ON_MOUSEOUT: "showPopupOnMouseOut",
  ENABLE_ORDER_BUMP: "showOrderBump",
  BUMP_PRODUCT: "bumpProduct",
  STICKY_CONTACT: "stickyContact",
  STEP_PATH: "stepPath",
  SALE_ACTION: "saleAction",
  MENU_ITEMS: "menuItems",
  INCLUDE_LOGO_IN_MENU: "includeLogoInMenu",
  INCLUDE_HEADLINE_IN_MENU: "includeHeadlineInMenu",
  MENU_LAYOUT: "menuLayout",
  ALLOW_ROW_MAX_WIDTH: "allowRowMaxWidth",
  COLUMN_LAYOUT: "columnLayout",
  JUSTIFY_CONTENT_COLUMN_LAYOUT: "justifyContentColumnLayout",
  ALIGN_CONTENT_COLUMN_LAYOUT: "alignContentColumnLayout",
  FORCE_COLUMN_LAYOUT_FOR_MOBILE: "forceColumnLayoutForMobile",
};
function Xn() {
  const { $bus: e } = ae();
  function n() {
    e.$emit("open-popup", !0);
  }
  return { openPopup: n };
}
const te = {
    GO_TO_NEXT_STEP: "go-to-next-funnel-step",
    GO_TO_STEP: "go-to-funnel-step",
    GO_TO_URL: "url",
    OPEN_POPUP: "openPopup",
    HIDE_ELEMENT: "hide-element",
    SCROLL_TO_ELEMENT: "scroll-to-element",
    SELL_PRODUCT: "sell-product",
    CLICK_TO_CALL: "click-to-call",
    CLICK_TO_SMS: "click-to-sms",
    NONE: "none",
    GO_TO_MEMBERSHIP: "go-to-membership",
  },
  Vi = {
    English: {
      days: "days",
      hours: "hours",
      minutes: "minutes",
      seconds: "seconds",
    },
    French: {
      days: "jours",
      hours: "heure",
      minutes: "minute",
      seconds: "seconde",
    },
    Spanish: {
      days: "d\xEDas",
      hours: "horas",
      minutes: "minutos",
      seconds: "segundos",
    },
    German: {
      days: "tage",
      hours: "stunden",
      minutes: "minuten",
      seconds: "sekunden",
    },
    Russian: {
      days: "\u0434\u043D\u044F",
      hours: "\u0447\u0430\u0441\u0430",
      minutes: "\u043C\u0438\u043D\u0443\u0442\u044B",
      seconds: "\u0441\u0435\u043A\u0443\u043D\u0434\u044B",
    },
    Japanese: {
      days: "\u65E5",
      hours: "\u6642\u9593",
      minutes: "\u5206",
      seconds: "\u79D2",
    },
    Chinese: {
      days: "\u5929",
      hours: "\u5C0F\u65F6",
      minutes: "\u5206\u949F",
      seconds: "\u79D2",
    },
    Korean: {
      days: "\uC77C",
      hours: "\uC2DC\uAC04",
      minutes: "\uBD84",
      seconds: "\uCD08",
    },
    Arabic: {
      days: "\u0623\u064A\u0627\u0645",
      hours: "\u0633\u0627\u0639\u0627\u062A",
      minutes: "\u0627\u0644\u062F\u0642\u0627\u0626\u0642",
      seconds: "\u062B\u0648\u0627\u0646\u064A",
    },
    Dutch: {
      days: "dagen",
      hours: "uren",
      minutes: "minuten",
      seconds: "seconden",
    },
    Italian: {
      days: "giorni",
      hours: "ore",
      minutes: "minuti",
      seconds: "secondi",
    },
    Swedish: {
      days: "dagar",
      hours: "timmar",
      minutes: "minuter",
      seconds: "sekunder",
    },
  },
  Ut = ["src", "alt"],
  xn = N({
    __name: "ImageComponent",
    props: {
      src: { type: String, default: "" },
      alt: { type: String, default: "" },
      width: { type: String, required: !0 },
      height: { type: String, required: !0 },
      classList: { type: Array, required: !1, default: () => [] },
      compression: { type: Boolean, required: !1, default: () => !1 },
    },
    setup(e) {
      return (n, s) =>
        e.compression
          ? Fe(
              (r(),
              b(
                Jn,
                {
                  key: 0,
                  onClick: s[0] || (s[0] = (i) => n.$emit("click")),
                  url: e.src,
                  alt: e.alt,
                  width: e.width,
                  height: e.height,
                  "class-list": e.classList,
                },
                null,
                8,
                ["url", "alt", "width", "height", "class-list"]
              )),
              [[ze, e.src]]
            )
          : Fe(
              (r(),
              T(
                "img",
                {
                  key: 1,
                  onClick: s[1] || (s[1] = (i) => n.$emit("click")),
                  src: e.src,
                  style: ue({
                    width: e.width !== "auto" ? e.width + "px" : "auto",
                    height: e.height !== "auto" ? e.height + "px" : "auto",
                  }),
                  alt: e.alt,
                  class: w(e.classList),
                },
                null,
                14,
                Ut
              )),
              [[ze, e.src]]
            );
    },
  }),
  Ft = ["href", "target"],
  zt = { key: 1 },
  Kt = N({
    __name: "ImageRendererInner",
    props: { options: { type: Object, required: !0 } },
    setup(e) {
      var _;
      const n = e,
        i = (_ = ie().value) == null ? void 0 : _.imageOptimizationEnabled,
        {
          height: o,
          width: t,
          altText: y,
          imageActionValue: l,
          goToURLTarget: c,
        } = n.options;
      let { imageSrc: E, imageClass: f, lazyload: S } = n.options;
      const C = It(S, i),
        u = I(E),
        g = I(""),
        p = D(() => !!(c != null && c.url));
      g.value = c && c.url ? c.url : "#";
      const d = c && c.newTab;
      return (
        J(() => {
          (g.value = He(g.value)),
            (g.value = jn(g.value)),
            wt(u.value) && ((S = !1), (u.value = He(u.value))),
            Array.isArray(f) && (f = f.filter((R) => R));
        }),
        (R, P) => (
          r(),
          T("div", null, [
            a(p) && a(l) === a(te).GO_TO_URL
              ? Fe(
                  (r(),
                  T(
                    "a",
                    { key: 0, href: a(g), target: a(d) ? "_blank" : "_self" },
                    [
                      H(
                        xn,
                        {
                          alt: a(y),
                          "class-list": a(f),
                          height: a(o),
                          src: a(u),
                          width: a(t),
                          compression: a(C),
                        },
                        null,
                        8,
                        [
                          "alt",
                          "class-list",
                          "height",
                          "src",
                          "width",
                          "compression",
                        ]
                      ),
                    ],
                    8,
                    Ft
                  )),
                  [[ze, a(g)]]
                )
              : (r(),
                T("div", zt, [
                  Fe(
                    H(
                      xn,
                      {
                        alt: a(y),
                        "class-list": a(f),
                        height: a(o),
                        src: a(u),
                        width: a(t),
                        onClick: P[0] || (P[0] = (z) => R.$emit("on-click")),
                        compression: a(C),
                      },
                      null,
                      8,
                      [
                        "alt",
                        "class-list",
                        "height",
                        "src",
                        "width",
                        "compression",
                      ]
                    ),
                    [[ze, a(u)]]
                  ),
                ])),
          ])
        )
      );
    },
  }),
  Ht = N({
    __name: "ImageRenderer",
    props: ["element", "id", "popup", "skipCompression"],
    setup(e) {
      const n = e;
      ie();
      const { openPopup: s } = Xn(),
        { extra: i } = n.element,
        {
          width: o,
          height: t,
          url: y,
          altText: l,
          redirectAction: c,
          linkUrl: E,
          compression: f,
        } = i.imageProperties.value,
        S = o ? o.replace("px", "") : "auto",
        C = t ? t.replace("px", "") : "auto",
        u = l || "",
        g = I(!1),
        p = Ge(y),
        d = n.skipCompression ? !1 : f,
        _ = D(() => [Se(n.element), ...R.value]),
        R = D(() => {
          const {
            featureImageShadow: k,
            featureImageRadius: X,
            featureImageBorder: ce,
            featureImageEffects: ve,
          } = n.element.extra;
          return Object.values([k, X, ce, ve]).map((me) => me && me.value);
        }),
        P = D(() => {
          const { imageActions: k } = n.element.extra;
          return k ? k.value : null;
        }),
        z = D(() => {
          const { visitWebsite: k } = n.element.extra;
          return k && k.value;
        });
      J(() => {
        "loading" in HTMLImageElement.prototype &&
          n.popup &&
          document.querySelectorAll("img.lazyload").forEach((X) => {
            X.src = X.dataset.src;
          }),
          (g.value = !0);
      });
      function W() {
        if (P.value) {
          switch (P.value) {
            case te.OPEN_POPUP: {
              s();
              break;
            }
            case te.GO_TO_URL:
              break;
            case te.NONE:
              return;
            default:
              console.error(`Invalid action type received: ${P.value}`);
          }
          return;
        }
        if (!E) return;
        let k = E;
        (k = jn(k)), c === "normal" ? (window.location = k) : window.open(k);
      }
      return (k, X) => (
        r(),
        T(
          "div",
          {
            style: ue({ cursor: a(P) !== a(te).NONE ? "pointer" : "default" }),
            class: "image-container",
          },
          [
            a(g)
              ? (r(),
                b(
                  Kt,
                  {
                    key: 0,
                    options: {
                      imageSrc: a(p),
                      lazyload: a(d),
                      width: a(S),
                      height: a(C),
                      altText: a(u),
                      imageClass: a(_),
                      imageActionValue: a(P),
                      goToURLTarget: a(z),
                    },
                    onClick: W,
                  },
                  null,
                  8,
                  ["options"]
                ))
              : h("", !0),
          ],
          4
        )
      );
    },
  });
const Gt = Ve(Ht, [["__scopeId", "data-v-60509790"]]),
  Vt = N({
    __name: "CBackground",
    props: { background: { type: Object, required: !0 } },
    setup(e) {
      const n = e,
        i = tn().IMAGE_CDN_WHITELIST,
        o = I(),
        t = I();
      J(() => {
        (o.value = o.value.clientWidth), l();
      });
      const y = D(() => {
          var c, E, f, S;
          try {
            const C = new URL(
              (E = (c = n.background) == null ? void 0 : c.value) == null
                ? void 0
                : E.url
            );
            return i.includes(C.hostname);
          } catch {
            return (
              console.warn(
                "Invalid url",
                (S = (f = n.background) == null ? void 0 : f.value) == null
                  ? void 0
                  : S.url
              ),
              !1
            );
          }
        }),
        l = () => {
          var u, g, p, d, _, R;
          const c =
              ((g = (u = n.background) == null ? void 0 : u.value) == null
                ? void 0
                : g.url) || "",
            E = Ge(c),
            f = o.value,
            C = {
              background: y.value ? `url(${Rt(E, f)})` : `url(${E})`,
              opacity: n.background.value.opacity || "1",
            };
          ((d = (p = n.background) == null ? void 0 : p.value) == null
            ? void 0
            : d.svgCode) &&
            ((R = (_ = n.background) == null ? void 0 : _.value) == null
              ? void 0
              : R.svgEncode) &&
            (C.background = n.background.value.svgEncode),
            (t.value = C);
        };
      return (c, E) => {
        var f, S, C, u, g, p, d;
        return (
          r(),
          T(
            "div",
            { ref_key: "backgroundContainer", ref: o },
            [
              e.background &&
              ((f = e.background) == null ? void 0 : f.value) &&
              (((C = (S = e.background) == null ? void 0 : S.value) == null
                ? void 0
                : C.url) ||
                ((g = (u = e.background) == null ? void 0 : u.value) == null
                  ? void 0
                  : g.svgCode) ||
                ((d = (p = e.background) == null ? void 0 : p.value) == null
                  ? void 0
                  : d.svgEncode))
                ? (r(),
                  T(
                    "div",
                    {
                      key: 0,
                      style: ue(a(t)),
                      class: w(["bg", e.background.value.options]),
                    },
                    null,
                    6
                  ))
                : h("", !0),
            ],
            512
          )
        );
      };
    },
  });
const et = Ve(Vt, [["__scopeId", "data-v-a0bb2f6a"]]),
  Wt = ["innerHTML"],
  Yt = { key: 1 },
  qt = N({
    __name: "TextRenderer",
    props: {
      id: { type: String, required: !0 },
      content: { type: Object, required: !0 },
    },
    setup(e) {
      const n = e,
        s = He(n.content.value),
        i = I(s),
        o = I();
      return (
        J(() => {
          !o || !o.value || (o.value.innerHTML = He(n.content.value));
        }),
        (t, y) => (
          r(),
          T(
            "div",
            { class: w([e.id, "text-output"]) },
            [
              e.content.value
                ? (r(),
                  T(
                    "div",
                    {
                      key: 0,
                      innerHTML: a(i),
                      ref_key: "textRenderer",
                      ref: o,
                    },
                    null,
                    8,
                    Wt
                  ))
                : (r(), T("p", Yt)),
            ],
            2
          )
        )
      );
    },
  }),
  Zt = ["id"],
  jt = x("div", { class: "divider-element" }, null, -1),
  Qt = [jt],
  Jt = N({
    __name: "Divider",
    props: ["element"],
    setup(e) {
      return (n, s) => (r(), T("div", { id: e.element.id }, Qt, 8, Zt));
    },
  }),
  Xt = "" + new URL("close.b8a88b02.svg", import.meta.url).href,
  ea = { class: "category-nav-search" },
  na = ["v-model", "value"],
  ta = ["src"],
  aa = N({
    __name: "SearchBar",
    props: { searchTerm: { type: String, default: "" } },
    emits: ["update:modelValue"],
    setup(e, { emit: n }) {
      return (s, i) => (
        r(),
        T("div", ea, [
          x(
            "input",
            {
              "v-model": e.searchTerm,
              value: e.searchTerm,
              onInput:
                i[0] ||
                (i[0] = (o) => s.$emit("update:modelValue", o.target.value)),
              type: "text",
              name: "Search",
              placeholder: "Search",
              disabled: !1,
              class: "searchBar",
            },
            null,
            40,
            na
          ),
          e.searchTerm.length
            ? (r(),
              T(
                "img",
                {
                  key: 0,
                  class: "close-icon",
                  src: a(Xt),
                  onClick:
                    i[1] || (i[1] = (o) => s.$emit("update:modelValue", "")),
                },
                null,
                8,
                ta
              ))
            : h("", !0),
        ])
      );
    },
  });
const ia = { class: "category-navigation-container flex" },
  oa = { class: "category-navigation" },
  la = { class: "categories" },
  sa = ["href", "target"],
  ra = N({
    __name: "CategoryNavigation",
    props: { element: { type: Object, required: !0 } },
    setup(e) {
      const n = e,
        s = ie(),
        i = I(s.value.blogSearchTerm),
        o = I({}),
        t = I(s.value.categoryUrlSlug),
        y = I(n.element.extra.categoryNavigationMenuItems.value),
        { $bus: l } = ae();
      let c = {};
      t.value &&
        ((c = n.element.extra.categoryNavigationMenuItems.value.find(
          (f) => f.urlSlug === t.value
        )),
        c &&
          c.hasOwnProperty("title") &&
          ((o.value.title = c.title || ""),
          (o.value.description = c.description || ""),
          (o.value.image = c.imageUrl || ""),
          (o.value.type = "category"),
          l.$emit("changeMeta", o.value)));
      const E = (f) => {
        (i.value = f), (s.value.blogSearchTerm = i.value);
      };
      return (f, S) => (
        r(),
        T("div", ia, [
          x("div", oa, [
            x("div", la, [
              (r(!0),
              T(
                Re,
                null,
                Ke(
                  a(y),
                  (C) => (
                    r(),
                    T(
                      "a",
                      {
                        class: w([
                          "hl-category-nav-menu-text",
                          (C == null ? void 0 : C.urlSlug) === a(t)
                            ? "hl-category-nav-menu-text-active-category"
                            : "",
                          C != null && C.categoryId ? "" : "disable-category",
                        ]),
                        href: `${a(St)(C)}`,
                        target: C.openInNewTab ? "_blank" : "_self",
                      },
                      Ue(C.title),
                      11,
                      sa
                    )
                  )
                ),
                256
              )),
            ]),
            e.element.extra.includeSearchBar.value
              ? (r(),
                b(
                  aa,
                  {
                    key: 0,
                    "search-term": a(i),
                    "onUpdate:modelValue": S[0] || (S[0] = (C) => E(C)),
                  },
                  null,
                  8,
                  ["search-term"]
                ))
              : h("", !0),
          ]),
        ])
      );
    },
  });
const ua = $(() =>
    M(
      () => import("./Video.f12d4199.js"),
      [
        "./Video.f12d4199.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./index.915ec9ba.js",
        "./FunnelServices.64bbc62b.js",
        "./helpers.2426d31a.js",
        "./v4.48ec93ae.js",
        "./HLConst.c4c5e8b3.js",
        "./FunnelServices.ac84ef2d.css",
        "./composables.52a41ef4.js",
        "./optimize_script.3ed15665.js",
        "./components.9404ac9d.js",
        "./Attributions.1e04b7e4.js",
        "./index.3a7f695e.js",
        "./Video.e46854dc.css",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  ca = $(() =>
    M(
      () => import("./Button.154bf23b.js"),
      [
        "./Button.154bf23b.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./v4.48ec93ae.js",
        "./helpers.2426d31a.js",
        "./index.915ec9ba.js",
        "./HLConst.c4c5e8b3.js",
        "./MoonLoader.vue_vue_type_style_index_0_lang.3344186a.js",
        "./MoonLoader.96f1220d.css",
        "./funnel_event_helper.bd666bbb.js",
        "./Attributions.1e04b7e4.js",
        "./FunnelServices.64bbc62b.js",
        "./FunnelServices.ac84ef2d.css",
        "./orderform_helpers.57affd17.js",
        "./pure.607815f2.js",
        "./components.9404ac9d.js",
        "./composables.52a41ef4.js",
        "./index.3a7f695e.js",
        "./Button.2c935771.css",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  ma = $(() =>
    M(
      () => import("./Countdown.b432b0bb.js"),
      [
        "./Countdown.b432b0bb.js",
        "./Timer.vue_vue_type_script_setup_true_lang.a7464129.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./v4.48ec93ae.js",
        "./helpers.2426d31a.js",
        "./index.915ec9ba.js",
        "./HLConst.c4c5e8b3.js",
        "./timezone.6f66a359.js",
        "./components.9404ac9d.js",
        "./composables.52a41ef4.js",
        "./FunnelServices.64bbc62b.js",
        "./FunnelServices.ac84ef2d.css",
        "./Attributions.1e04b7e4.js",
        "./index.3a7f695e.js",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  da = $(() =>
    M(
      () => import("./DailyTimer.ad6d0951.js"),
      [
        "./DailyTimer.ad6d0951.js",
        "./Timer.vue_vue_type_script_setup_true_lang.a7464129.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./v4.48ec93ae.js",
        "./helpers.2426d31a.js",
        "./index.915ec9ba.js",
        "./HLConst.c4c5e8b3.js",
        "./components.9404ac9d.js",
        "./composables.52a41ef4.js",
        "./FunnelServices.64bbc62b.js",
        "./FunnelServices.ac84ef2d.css",
        "./Attributions.1e04b7e4.js",
        "./index.3a7f695e.js",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  ga = $(() =>
    M(
      () => import("./MinuteTimer.844b6d37.js"),
      [
        "./MinuteTimer.844b6d37.js",
        "./Timer.vue_vue_type_script_setup_true_lang.a7464129.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./v4.48ec93ae.js",
        "./helpers.2426d31a.js",
        "./index.915ec9ba.js",
        "./HLConst.c4c5e8b3.js",
        "./components.9404ac9d.js",
        "./composables.52a41ef4.js",
        "./FunnelServices.64bbc62b.js",
        "./FunnelServices.ac84ef2d.css",
        "./Attributions.1e04b7e4.js",
        "./index.3a7f695e.js",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  pa = $(() =>
    M(
      () => import("./CustomCodeRenderer.01856cfb.js"),
      [
        "./CustomCodeRenderer.01856cfb.js",
        "./FunnelServices.64bbc62b.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./helpers.2426d31a.js",
        "./v4.48ec93ae.js",
        "./index.915ec9ba.js",
        "./HLConst.c4c5e8b3.js",
        "./FunnelServices.ac84ef2d.css",
        "./CustomCodeRenderer.72cd08b9.css",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  _a = $(() =>
    M(
      () => import("./Form.6faa4689.js"),
      [
        "./Form.6faa4689.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./components.9404ac9d.js",
        "./composables.52a41ef4.js",
        "./v4.48ec93ae.js",
        "./helpers.2426d31a.js",
        "./index.915ec9ba.js",
        "./HLConst.c4c5e8b3.js",
        "./FunnelServices.64bbc62b.js",
        "./FunnelServices.ac84ef2d.css",
        "./Attributions.1e04b7e4.js",
        "./index.3a7f695e.js",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  va = $(() =>
    M(
      () => import("./Calendar.ec510383.js"),
      [
        "./Calendar.ec510383.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./helpers.2426d31a.js",
        "./v4.48ec93ae.js",
        "./index.915ec9ba.js",
        "./HLConst.c4c5e8b3.js",
        "./components.9404ac9d.js",
        "./composables.52a41ef4.js",
        "./FunnelServices.64bbc62b.js",
        "./FunnelServices.ac84ef2d.css",
        "./Attributions.1e04b7e4.js",
        "./index.3a7f695e.js",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  ya = $(() =>
    M(
      () => import("./Survey.6b407f97.js"),
      [
        "./Survey.6b407f97.js",
        "./surveyComponent.9ac41a3a.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./composables.52a41ef4.js",
        "./v4.48ec93ae.js",
        "./TextElement.vue_vue_type_style_index_0_lang.d86366c9.js",
        "./helpers.2426d31a.js",
        "./index.915ec9ba.js",
        "./HLConst.c4c5e8b3.js",
        "./Countries.69e07731.js",
        "./FunnelServices.64bbc62b.js",
        "./FunnelServices.ac84ef2d.css",
        "./utils.3a7cd967.js",
        "./Recaptcha.vue_vue_type_script_setup_true_lang.879d57b2.js",
        "./optimize_script.3ed15665.js",
        "./IntlTel.65c255c2.js",
        "./TextElement.4da2a1d9.css",
        "./funnel_event_helper.bd666bbb.js",
        "./MoonLoader.vue_vue_type_style_index_0_lang.3344186a.js",
        "./MoonLoader.96f1220d.css",
        "./Attributions.1e04b7e4.js",
        "./index.3a7f695e.js",
        "./surveyComponent.4b21386a.css",
        "./app.9f4b9f05.css",
        "./components.9404ac9d.js",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  ha = $(() =>
    M(
      () => import("./TwoStepOrder.3e2973cd.js"),
      [
        "./TwoStepOrder.3e2973cd.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./composables.52a41ef4.js",
        "./FunnelServices.64bbc62b.js",
        "./helpers.2426d31a.js",
        "./v4.48ec93ae.js",
        "./index.915ec9ba.js",
        "./HLConst.c4c5e8b3.js",
        "./FunnelServices.ac84ef2d.css",
        "./IntlTel.65c255c2.js",
        "./optimize_script.3ed15665.js",
        "./TwoStepOrder.da8bfa30.css",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  fa = $(() =>
    M(
      () => import("./TwoStepOrder.e4ca9a67.js"),
      [
        "./TwoStepOrder.e4ca9a67.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./composables.52a41ef4.js",
        "./index.915ec9ba.js",
        "./IntlTel.65c255c2.js",
        "./helpers.2426d31a.js",
        "./v4.48ec93ae.js",
        "./HLConst.c4c5e8b3.js",
        "./optimize_script.3ed15665.js",
        "./TwoStepOrder.da8bfa30.css",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  ba = $(() =>
    M(
      () => import("./OneStepOrder.b131934b.js"),
      [
        "./OneStepOrder.b131934b.js",
        "./composables.52a41ef4.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./FunnelServices.64bbc62b.js",
        "./helpers.2426d31a.js",
        "./v4.48ec93ae.js",
        "./index.915ec9ba.js",
        "./HLConst.c4c5e8b3.js",
        "./FunnelServices.ac84ef2d.css",
        "./IntlTel.65c255c2.js",
        "./optimize_script.3ed15665.js",
        "./Button.5eefabb8.js",
        "./Countries.69e07731.js",
        "./utils.3a7cd967.js",
        "./MoonLoader.vue_vue_type_style_index_0_lang.3344186a.js",
        "./MoonLoader.96f1220d.css",
        "./Button.3e17a623.css",
        "./InputText.vue_vue_type_script_setup_true_lang.a192ed40.js",
        "./InputSelect.vue_vue_type_script_setup_true_lang.7fe3f787.js",
        "./Attributions.1e04b7e4.js",
        "./funnel_event_helper.bd666bbb.js",
        "./orderform_helpers.57affd17.js",
        "./OrderBump.vue_vue_type_script_setup_true_lang.ccc7bc00.js",
        "./CollectJSCreditCard.vue_vue_type_script_setup_true_lang.2f1f4d0b.js",
        "./CollectJSCreditCard.e6a4f74e.css",
        "./pure.607815f2.js",
        "./index.3a7f695e.js",
        "./components.9404ac9d.js",
        "./OneStepOrder.2a0f2911.css",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  Ea = $(() =>
    M(
      () => import("./NavMenu.358f021e.js"),
      [
        "./NavMenu.358f021e.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./helpers.2426d31a.js",
        "./v4.48ec93ae.js",
        "./index.915ec9ba.js",
        "./HLConst.c4c5e8b3.js",
        "./components.9404ac9d.js",
        "./composables.52a41ef4.js",
        "./FunnelServices.64bbc62b.js",
        "./FunnelServices.ac84ef2d.css",
        "./Attributions.1e04b7e4.js",
        "./index.3a7f695e.js",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  Ta = $(() =>
    M(
      () => import("./Map.1d3f11f2.js"),
      [
        "./Map.1d3f11f2.js",
        "./index.915ec9ba.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./FunnelServices.64bbc62b.js",
        "./helpers.2426d31a.js",
        "./v4.48ec93ae.js",
        "./HLConst.c4c5e8b3.js",
        "./FunnelServices.ac84ef2d.css",
        "./Map.37a2a98b.css",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  Ca = $(() =>
    M(
      () => import("./Svg.b0dc86d3.js"),
      [
        "./Svg.b0dc86d3.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./helpers.2426d31a.js",
        "./v4.48ec93ae.js",
        "./index.915ec9ba.js",
        "./HLConst.c4c5e8b3.js",
        "./components.9404ac9d.js",
        "./composables.52a41ef4.js",
        "./FunnelServices.64bbc62b.js",
        "./FunnelServices.ac84ef2d.css",
        "./Attributions.1e04b7e4.js",
        "./index.3a7f695e.js",
        "./Svg.4136c1ba.css",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  wa = $(() =>
    M(
      () => import("./ProgressBar.e074e71d.js"),
      [
        "./ProgressBar.e074e71d.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./ProgressBar.03c4075f.css",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  Ia = $(() =>
    M(
      () => import("./ImageFeature.0b6700de.js"),
      [
        "./ImageFeature.0b6700de.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./components.9404ac9d.js",
        "./composables.52a41ef4.js",
        "./v4.48ec93ae.js",
        "./helpers.2426d31a.js",
        "./index.915ec9ba.js",
        "./HLConst.c4c5e8b3.js",
        "./FunnelServices.64bbc62b.js",
        "./FunnelServices.ac84ef2d.css",
        "./Attributions.1e04b7e4.js",
        "./index.3a7f695e.js",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  Ra = $(() =>
    M(
      () => import("./ReviewWidget.625a51fd.js"),
      [
        "./ReviewWidget.625a51fd.js",
        "./composables.52a41ef4.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./index.915ec9ba.js",
        "./optimize_script.3ed15665.js",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  Sa = $(() =>
    M(
      () => import("./OrderConfirmation.3715f0d0.js"),
      [
        "./OrderConfirmation.3715f0d0.js",
        "./helpers.2426d31a.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./v4.48ec93ae.js",
        "./index.915ec9ba.js",
        "./HLConst.c4c5e8b3.js",
        "./components.9404ac9d.js",
        "./composables.52a41ef4.js",
        "./FunnelServices.64bbc62b.js",
        "./FunnelServices.ac84ef2d.css",
        "./Attributions.1e04b7e4.js",
        "./index.3a7f695e.js",
        "./OrderConfirmation.09547d14.css",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  Oa = $(() =>
    M(
      () => import("./FAQ.0715d03a.js"),
      [
        "./FAQ.0715d03a.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./helpers.2426d31a.js",
        "./v4.48ec93ae.js",
        "./index.915ec9ba.js",
        "./HLConst.c4c5e8b3.js",
        "./FunnelServices.64bbc62b.js",
        "./FunnelServices.ac84ef2d.css",
        "./FAQ.a2333f8e.css",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  Aa = $(() =>
    M(
      () => import("./BlogPosts.19e0cfb1.js"),
      [
        "./BlogPosts.19e0cfb1.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./v4.48ec93ae.js",
        "./index.915ec9ba.js",
        "./helpers.2426d31a.js",
        "./HLConst.c4c5e8b3.js",
        "./composables.52a41ef4.js",
        "./FunnelServices.64bbc62b.js",
        "./FunnelServices.ac84ef2d.css",
        "./components.9404ac9d.js",
        "./Attributions.1e04b7e4.js",
        "./index.3a7f695e.js",
        "./BlogPosts.efad3a76.css",
      ],
      import.meta.url
    ).then((e) => e.default || e)
  ),
  Ye = N({
    __name: "CWrapper",
    props: {
      element: { type: Object, required: !0 },
      elements: { type: Array, required: !0 },
      popup: { type: Boolean },
    },
    setup(e) {
      const n = e,
        s = ie(),
        i = Se(n.element);
      let o = "";
      if (n.element.tagName === _e.COLUMN) {
        const l = n.element.extra[re.COLUMN_LAYOUT];
        let c = "vertical";
        l && l.value === "row" && (c = "horizontal");
        const { options: E } = n.element.extra.bgImage.value;
        o = `${i} bg ${E} ${c}`;
      }
      const t = D(
          () => s.value.version >= 4 || n.element.tagName !== _e.COLUMN
        ),
        y = D(() => {
          var c;
          const l = s.value.orderFormVersion || 1;
          return (
            ((c = n.element) == null ? void 0 : c.meta) === "two-setp-order" &&
            l === 2
          );
        });
      return (l, c) => {
        const E = en,
          f = ua,
          S = ca,
          C = ma,
          u = da,
          g = ga,
          p = pa,
          d = en,
          _ = _a,
          R = va,
          P = ya,
          z = ha,
          W = fa,
          k = ba,
          X = Ea,
          ce = Ta,
          ve = Ca,
          me = wa,
          ye = Ia,
          Oe = Ra,
          Ae = Sa,
          Le = Oa,
          De = Aa;
        return (
          r(),
          T("div", null, [
            H(E, null, {
              default: Xe(() => [
                e.element.extra.bgImage &&
                e.element.extra.bgImage.value.url &&
                a(t)
                  ? (r(),
                    b(
                      et,
                      { key: 0, background: e.element.extra.bgImage },
                      null,
                      8,
                      ["background"]
                    ))
                  : h("", !0),
              ]),
              _: 1,
            }),
            e.element.tagName === "c-section" ||
            e.element.tagName === "c-row" ||
            e.element.tagName === "c-column"
              ? (r(),
                b(
                  an,
                  {
                    key: 0,
                    elements: e.elements,
                    element: e.element,
                    class: w([a(o), "inner"]),
                    popup: e.popup,
                  },
                  null,
                  8,
                  ["elements", "element", "class", "popup"]
                ))
              : h("", !0),
            e.element.tagName === "c-paragraph" ||
            e.element.tagName === "c-heading" ||
            e.element.tagName === "c-sub-heading" ||
            e.element.tagName === "c-bullet-list"
              ? (r(),
                b(
                  qt,
                  {
                    key: 1,
                    id: e.element.id,
                    class: w([e.element.extra.nodeId, a(i)]),
                    content: e.element.extra.text,
                  },
                  null,
                  8,
                  ["id", "class", "content"]
                ))
              : h("", !0),
            e.element.tagName === "c-video"
              ? (r(),
                b(
                  f,
                  {
                    key: 2,
                    class: w([e.element.extra.nodeId, a(i)]),
                    element: e.element,
                    popup: e.popup,
                  },
                  null,
                  8,
                  ["class", "element", "popup"]
                ))
              : h("", !0),
            e.element.tagName === "c-image"
              ? (r(),
                b(
                  Gt,
                  {
                    key: 3,
                    element: e.element,
                    class: w(e.element.extra.nodeId),
                    popup: e.popup,
                  },
                  null,
                  8,
                  ["element", "class", "popup"]
                ))
              : h("", !0),
            e.element.tagName === "c-button"
              ? (r(),
                b(
                  S,
                  {
                    key: 4,
                    classStyles: [e.element.extra.nodeId, a(i)],
                    element: e.element,
                  },
                  null,
                  8,
                  ["classStyles", "element"]
                ))
              : h("", !0),
            H(d, null, {
              default: Xe(() => [
                e.element.meta === "countdown"
                  ? (r(),
                    b(
                      C,
                      {
                        key: 0,
                        class: w([e.element.extra.nodeId, a(i)]),
                        element: e.element,
                      },
                      null,
                      8,
                      ["class", "element"]
                    ))
                  : h("", !0),
                e.element.meta === "day-timer"
                  ? (r(),
                    b(
                      u,
                      {
                        key: 1,
                        class: w([e.element.extra.nodeId, a(i)]),
                        element: e.element,
                      },
                      null,
                      8,
                      ["class", "element"]
                    ))
                  : h("", !0),
                e.element.meta === "minute-timer"
                  ? (r(),
                    b(
                      g,
                      {
                        key: 2,
                        class: w([e.element.extra.nodeId, a(i)]),
                        element: e.element,
                      },
                      null,
                      8,
                      ["class", "element"]
                    ))
                  : h("", !0),
                e.element.tagName === "c-custom-code"
                  ? (r(),
                    b(
                      p,
                      {
                        key: 3,
                        id: e.element.id,
                        class: w([e.element.extra.nodeId, a(i)]),
                        element: e.element,
                      },
                      null,
                      8,
                      ["id", "class", "element"]
                    ))
                  : h("", !0),
              ]),
              _: 1,
            }),
            e.element.meta === "form"
              ? (r(),
                b(
                  _,
                  {
                    key: 5,
                    class: w([e.element.extra.nodeId, a(i)]),
                    element: e.element,
                    "is-preview": !0,
                  },
                  null,
                  8,
                  ["class", "element"]
                ))
              : h("", !0),
            e.element.meta === "calendar" && e.element.extra.calendarId
              ? (r(),
                b(
                  R,
                  {
                    key: 6,
                    class: w([e.element.extra.nodeId, a(i)]),
                    element: e.element,
                    "is-preview": !1,
                  },
                  null,
                  8,
                  ["class", "element"]
                ))
              : h("", !0),
            e.element.meta === "survey" && e.element.extra.surveyId
              ? (r(),
                b(
                  P,
                  {
                    key: 7,
                    class: w([e.element.extra.nodeId, a(i)]),
                    element: e.element,
                    "is-preview": !1,
                  },
                  null,
                  8,
                  ["class", "element"]
                ))
              : h("", !0),
            e.element.meta === "divider"
              ? (r(),
                b(
                  Jt,
                  {
                    key: 8,
                    class: w([e.element.extra.nodeId, a(i)]),
                    element: e.element,
                  },
                  null,
                  8,
                  ["class", "element"]
                ))
              : h("", !0),
            e.element.meta === "two-setp-order" && a(y)
              ? (r(),
                b(
                  z,
                  {
                    key: 9,
                    class: w([e.element.extra.nodeId, a(i)]),
                    element: e.element,
                  },
                  null,
                  8,
                  ["class", "element"]
                ))
              : h("", !0),
            e.element.meta === "two-setp-order" && !a(y)
              ? (r(),
                b(
                  W,
                  {
                    key: 10,
                    class: w([e.element.extra.nodeId, a(i)]),
                    element: e.element,
                  },
                  null,
                  8,
                  ["class", "element"]
                ))
              : h("", !0),
            e.element.meta === "one-step-order"
              ? (r(),
                b(
                  k,
                  {
                    key: 11,
                    class: w([e.element.extra.nodeId, a(i)]),
                    element: e.element,
                  },
                  null,
                  8,
                  ["class", "element"]
                ))
              : h("", !0),
            e.element.meta === "nav-menu"
              ? (r(),
                b(
                  X,
                  {
                    key: 12,
                    class: w([e.element.extra.nodeId, a(i)]),
                    element: e.element,
                  },
                  null,
                  8,
                  ["class", "element"]
                ))
              : h("", !0),
            e.element.meta === "map"
              ? (r(),
                b(
                  ce,
                  {
                    key: 13,
                    class: w([e.element.extra.nodeId, a(i)]),
                    element: e.element,
                  },
                  null,
                  8,
                  ["class", "element"]
                ))
              : h("", !0),
            e.element.meta === "svg"
              ? (r(),
                b(
                  ve,
                  {
                    key: 14,
                    class: w([e.element.extra.nodeId, a(i)]),
                    element: e.element,
                  },
                  null,
                  8,
                  ["class", "element"]
                ))
              : h("", !0),
            e.element.meta === "progress-bar"
              ? (r(),
                b(
                  me,
                  {
                    key: 15,
                    class: w([e.element.extra.nodeId, a(i)]),
                    element: e.element,
                  },
                  null,
                  8,
                  ["class", "element"]
                ))
              : h("", !0),
            e.element.meta === "image-feature"
              ? (r(),
                b(
                  ye,
                  {
                    key: 16,
                    class: w([e.element.extra.nodeId, a(i)]),
                    element: e.element,
                  },
                  null,
                  8,
                  ["class", "element"]
                ))
              : h("", !0),
            e.element.meta === "review-widget"
              ? (r(),
                b(
                  Oe,
                  { key: 17, class: w([e.element.extra.nodeId, a(i)]) },
                  null,
                  8,
                  ["class"]
                ))
              : h("", !0),
            e.element.meta === "order-confirmation"
              ? (r(),
                b(
                  Ae,
                  {
                    key: 18,
                    class: w([e.element.extra.nodeId, a(i)]),
                    element: e.element,
                  },
                  null,
                  8,
                  ["class", "element"]
                ))
              : h("", !0),
            e.element.meta === "faq"
              ? (r(),
                b(
                  Le,
                  {
                    key: 19,
                    class: w([e.element.extra.nodeId, a(i)]),
                    element: e.element,
                  },
                  null,
                  8,
                  ["class", "element"]
                ))
              : h("", !0),
            e.element.meta === "blog"
              ? (r(),
                b(
                  De,
                  {
                    key: 20,
                    class: w([e.element.extra.nodeId, a(i)]),
                    element: e.element,
                  },
                  null,
                  8,
                  ["class", "element"]
                ))
              : h("", !0),
            e.element.meta === "category-navigation"
              ? (r(),
                b(
                  ra,
                  {
                    key: 21,
                    class: w([e.element.extra.nodeId, a(i)]),
                    element: e.element,
                  },
                  null,
                  8,
                  ["class", "element"]
                ))
              : h("", !0),
          ])
        );
      };
    },
  }),
  L = N({
    __name: "CGenralComponent",
    props: ["element", "elements", "popup"],
    setup(e) {
      return (n, s) => (
        r(),
        b(
          Ye,
          { element: e.element, elements: e.elements, popup: e.popup },
          null,
          8,
          ["element", "elements", "popup"]
        )
      );
    },
  }),
  La = N({
    __name: "CRow",
    props: ["element", "elements", "popup"],
    setup(e) {
      const s = Se(e.element);
      return (i, o) => (
        r(),
        b(
          Ye,
          {
            element: e.element,
            elements: e.elements,
            class: w(a(s)),
            popup: e.popup,
          },
          null,
          8,
          ["element", "elements", "class", "popup"]
        )
      );
    },
  }),
  Da = N({
    __name: "CColumn",
    props: ["element", "elements", "popup"],
    setup(e) {
      return (n, s) => (
        r(),
        b(
          Ye,
          { element: e.element, elements: e.elements, popup: e.popup },
          null,
          8,
          ["element", "elements", "popup"]
        )
      );
    },
  }),
  Pa = N({
    __name: "CSection",
    props: ["element", "elements", "popup"],
    setup(e) {
      const n = e,
        s = Se(n.element),
        i = I(s),
        o = I(""),
        t = I(!1);
      J(() => {
        const l = n.element.extra.sticky && n.element.extra.sticky.value;
        if (l && l !== "noneSticky")
          try {
            const c = document.getElementById(n.element.id);
            new ResizeObserver(() => {
              (c == null ? void 0 : c.offsetHeight) > 0 && y(l);
            }).observe(c);
          } catch {
            y(l);
          }
      });
      const y = (l) => {
        rt(() => {
          setTimeout(() => {
            const E = document.getElementById(n.element.id).offsetHeight,
              f = document.getElementById("preview-container");
            switch (((t.value = !0), l)) {
              case "stickyTop": {
                (f.style.marginTop = E + "px"),
                  (o.value = `
        position: fixed;
        width:100%;
        top:0;
        z-index: 99;
        `);
                break;
              }
              case "stickyBottom": {
                (f.style.marginBottom = E + "px"),
                  (o.value = `
        position: fixed;
        width:100%;
        bottom:0;
        z-index: 99;
        `);
                break;
              }
            }
          }, 0);
        });
      };
      return (l, c) => (
        r(),
        b(
          Ye,
          {
            element: e.element,
            elements: e.elements,
            class: w([a(i), { "sticky-section": a(t) }]),
            style: ue(a(o)),
            popup: e.popup,
          },
          null,
          8,
          ["element", "elements", "class", "style", "popup"]
        )
      );
    },
  });
const ka = {},
  Na = (e) => (ut("data-v-58f738a4"), (e = e()), ct(), e),
  $a = Na(() =>
    x(
      "div",
      { class: "empty-component-wrapper" },
      [x("div", { class: "empty-component-min-height" })],
      -1
    )
  ),
  Ma = [$a];
function xa(e, n) {
  return r(), T("div", null, Ma);
}
const Ba = Ve(ka, [
    ["render", xa],
    ["__scopeId", "data-v-58f738a4"],
  ]),
  Ua = N({
    __name: "CRenderComponentLoop",
    props: ["element", "elements", "popup"],
    setup(e) {
      const n = e,
        s = {
          "c-section": Pa,
          "c-heading": L,
          "c-paragraph": L,
          "c-button": L,
          "c-row": La,
          "c-column": Da,
          "c-video": L,
          "c-image": L,
          "c-sub-heading": L,
          "c-bullet-list": L,
          "c-countdown": L,
          "c-custom-code": L,
          "c-form": L,
          "c-divider": L,
          "c-order": L,
          "c-survey": L,
          "c-calendar": L,
          "c-nav-menu": L,
          "c-map": L,
          "c-svg": L,
          "c-progress-bar": L,
          "c-image-feature": L,
          "c-review-widget": L,
          "c-order-confirmation": L,
          "c-faq": L,
          "c-blog": L,
          "c-category-navigation": L,
        },
        i = I(
          n.element && n.element.child
            ? n.element.child.map((y) => n.elements.find((l) => l.id === y))
            : []
        );
      function o(y) {
        return [
          y.tagName,
          "c-wrapper",
          y.meta === "divider" && "dividerContainer",
          y.globalSectionId ||
          [_e.HEADING, _e.PARAGRAPH, _e.SUB_HEADING, _e.BULLETLIST].includes(
            y.tagName
          )
            ? null
            : y.id,
          y.extra.visibility.value.hideMobile ? "desktop-only" : "",
          y.extra.visibility.value.hideDesktop ? "mobile-only" : "",
        ];
      }
      const t = I();
      return (
        n.element.type === "col" &&
          n.element.child.some((l) => l.includes("image")) &&
          mt("imageContainerWidth", t),
        (y, l) => (
          r(),
          T(
            "div",
            { ref_key: "cwrapperContainer", ref: t },
            [
              e.elements.length > 1 && a(i).length === 0
                ? (r(), b(Ba, { key: 0, class: "empty-slot" }))
                : h("", !0),
              (r(!0),
              T(
                Re,
                null,
                Ke(
                  a(i),
                  (c) => (
                    r(),
                    T(
                      Re,
                      null,
                      [
                        c && c.tagName !== void 0
                          ? (r(),
                            b(
                              dt(s[c.tagName]),
                              {
                                id: c.id,
                                key: c.id,
                                element: c,
                                elements: e.elements,
                                popup: e.popup,
                                class: w(o(c)),
                              },
                              null,
                              8,
                              ["id", "element", "elements", "popup", "class"]
                            ))
                          : h("", !0),
                      ],
                      64
                    )
                  )
                ),
                256
              )),
            ],
            512
          )
        )
      );
    },
  });
const an = Ve(Ua, [["__scopeId", "data-v-ceb5ea44"]]),
  Fa = { id: "preview-container", class: "preview-container" },
  za = N({
    __name: "Container",
    props: { elements: { type: Array } },
    setup(e) {
      const { $bus: n } = ae();
      function s(i) {
        !i ||
          (window.location.href = `${window.location.origin}${window.location.pathname}${window.location.search}#${i}`);
      }
      return (
        J(() => {
          if (
            (n.$on("scroll-to-element", s),
            "loading" in HTMLImageElement.prototype)
          )
            document.querySelectorAll("img.lazyload").forEach((t) => {
              t.src = t.dataset.src;
            });
          else {
            const o = document.createElement("script");
            (o.async = !0),
              (o.src =
                "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js"),
              document.body.appendChild(o);
          }
          const i = document.querySelectorAll(".open-popup");
          Array.from(i).forEach((o) => {
            o.addEventListener("click", (t) => {
              n.$emit("open-popup", !0);
            });
          });
        }),
        gt(() => {
          n.$off("scroll-to-element", s);
        }),
        (i, o) => (
          r(),
          T("div", Fa, [
            H(
              an,
              { elements: e.elements, element: e.elements[0], popup: !1 },
              null,
              8,
              ["elements", "element"]
            ),
          ])
        )
      );
    },
  });
const nt =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAlCAQAAABrYji1AAAC20lEQVRIx5WWr2/bUBDH7+VJTUkKzCqtZAYjMQwJiSoZFIVEhcZppO0PSGALqgDTIivSuDWwSgUBbQMDWkXqyAZaqdJYeJxo1k13zz/jl9p5R+wk/uR73zu/dwBlS0RRspCjHCNAgszc7Y1LIEeHR4fQUMHXKbgyjlGMOZbWw2h5s7oPXoKX1X3w/e+3pxOGaoA6XIIS5uXgzytq1ur+7UyHLOJi2HHnfDGnR9ebKY7QwS520cERTnEZKOTTyTZwG6f8Yl300DJwsYmft6KJLiP/vb+d5YFFHMP64/UGcYqtAiqOFk5ZeQTU4jhNYXbO6b/9nag4fAb+/pICszgBgjwDm+yflcIopuzh0WGccB4nwai3+2PyrFUJ18TXEDFNOMWxNmEKh7S5lWAULiIGL7G+LC7R9lxwyN9xR/GMqb4Mjnyr9X78QvRyP1dLIbzoLvs9fba8YX15nLSA3wKnkA4tL4HlrXDSdBMcZd6ot2FILdLS+JMut9CB1C7QoHRTHDsHQ2rfptZwPSy2A4wCDuyD6zDU4bwE52lw9MwOnC5ZL5esV+g9TlaHgyGVoquFeZmr7PddLkURx6WgRnE1jeLtbJQRIi7m+VIkjdK/225jL6fHK6ibIeLDCBrUHTkcvWLKvYvKL5nDzgmz0Maxe1ePVfeTWNv8p3KusAVQukqfXwlGb/AykJZKVbNBkb6OT808KoVREcLwchBr02yfwqz1Dq6pIGUKfa7x5DbyTWg3d2hIiwpy9UgKZzuKcsGeheHklhPVbu7xOWYoYMdXB+AMXTxNQKfoMoo864+lFSUqPjoYDWnVejCMNaq13mSvJ7e13jZs57FNhyPYMCBk/24xVzqVpsX86vHTV7CFGaUpqg0VhrTAFo6CqoAhDIQDNumqNlRkp6cGGMKUVr0Ntop6W1rCBCPRJfYcyKJhzIiCh7L9B7L8sCgz8eHAWDZ95ifQ0oG2Cm7v2fg/Yh8jlKSDXZEAAAAASUVORK5CYII=",
  Ka = ["id"],
  Ha = x("img", { src: nt, alt: "close" }, null, -1),
  Ga = [Ha],
  Va = N({
    __name: "CPopup",
    props: { elements: { type: Array } },
    setup(e) {
      const n = e,
        s = I("none"),
        i = I(!0),
        { $bus: o } = ae(),
        t = D(() => l.value[0]),
        y = D(() => Se(t.value)),
        l = D(() => n.elements),
        c = D(() => {
          var d;
          return t.value
            ? (d = t.value.extra) == null
              ? void 0
              : d.bgImage
            : "";
        }),
        E = D(() => {
          var R, P, z, W, k;
          if (!t.value) return;
          const d =
              ((P =
                (R = t == null ? void 0 : t.value) == null
                  ? void 0
                  : R.child) == null
                ? void 0
                : P.length) > 0,
            _ =
              ((k =
                (W = (z = c.value) == null ? void 0 : z.value) == null
                  ? void 0
                  : W.url) == null
                ? void 0
                : k.length) > 0;
          return d || _;
        }),
        f = D(() => {
          var d, _, R;
          return t.value
            ? (R =
                (_ = (d = t.value) == null ? void 0 : d.extra) == null
                  ? void 0
                  : _.overlayColor) == null
              ? void 0
              : R.value
            : "rgba(0, 0, 0, 0.5)";
        }),
        S = D(() => {
          const { extra: d } = t.value;
          return (d == null ? void 0 : d[re == null ? void 0 : re.HIDE_POPUP])
            .value;
        });
      function C() {
        var d, _, R;
        ((R =
          (_ = (d = t == null ? void 0 : t.value) == null ? void 0 : d.extra) ==
          null
            ? void 0
            : _.popupDisabled) != null &&
          R.value) ||
          ((s.value = "block"), (i.value = !1));
      }
      function u(d, _ = !1) {
        (_ && !d && !i.value) ||
          (d && i.value && E.value ? C() : !d && !i.value && p());
      }
      function g() {
        if (!t.value) return;
        const { extra: d } = t.value,
          _ =
            d == null
              ? void 0
              : d[re == null ? void 0 : re.SHOW_POPUP_ON_MOUSEOUT];
        (_ && !_.value) || u(!0);
      }
      function p() {
        (i.value = !0),
          o.$emit("closing-popup"),
          setTimeout(() => {
            s.value = "none";
          }, 300);
      }
      return (
        J(() => {
          o.$on("open-popup", u), o.$on("show-popup-on-mouseout", g);
        }),
        We(() => {
          o.$off("open-popup", u), o.$off("show-popup-on-mouseout", g);
        }),
        (d, _) => {
          const R = en;
          return (
            r(),
            T(
              "div",
              {
                id: "overlay",
                class: w([i.value ? "hide" : "show"]),
                style: ue({ display: s.value, "background-color": a(f) }),
                onClick:
                  _[1] || (_[1] = pt((P) => (a(S) ? p() : null), ["self"])),
              },
              [
                a(t)
                  ? (r(),
                    T(
                      "div",
                      {
                        key: 0,
                        id: a(t).id,
                        class: w([
                          "popup-body",
                          [i.value ? "hide" : "show", a(t).id, a(y)],
                        ]),
                      },
                      [
                        H(R, null, {
                          default: Xe(() => [
                            H(et, { background: a(c) }, null, 8, [
                              "background",
                            ]),
                          ]),
                          _: 1,
                        }),
                        x(
                          "div",
                          {
                            onClick: _[0] || (_[0] = (P) => p()),
                            class: "closeLPModal",
                          },
                          Ga
                        ),
                        H(
                          an,
                          {
                            element: a(t),
                            elements: a(l),
                            popup: !0,
                            class: "drop-zone-draggable",
                          },
                          null,
                          8,
                          ["element", "elements"]
                        ),
                      ],
                      10,
                      Ka
                    ))
                  : h("", !0),
              ],
              6
            )
          );
        }
      );
    },
  });
const Wa = () => Object.assign({ id: "hl_main", child: [] }),
  Ya = () => {
    const e = ie(),
      n = _t(),
      s = vt(),
      { $bus: i } = ae();
    function o() {
      return window.location.search;
    }
    function t(u) {
      !u ||
        ((u = u.replace("tel:", "")), (window.location.href = "tel://" + u));
    }
    function y(u) {
      !u ||
        ((u = u.replace("sms:", "")), (window.location.href = "sms://" + u));
    }
    function l(u) {
      !u ||
        ((u = u.replace("mailto:", "")),
        (window.location.href = "mailto:" + u));
    }
    function c(u, g) {
      const p = `_mf_${u}`,
        d = JSON.stringify(g),
        _ = pe(p, { path: "/", maxAge: 31536e3 });
      (_.value = d), Ot(p, d);
    }
    function E(u) {
      const { extra: g } = u;
      e.value.videoExistsInPage && i.$emit("handle-redirect"),
        g.action.value === "go-to-next-funnel-step"
          ? f()
          : g.action.value === "url" && S(g.visitWebsite.value);
    }
    function f(u, g = !1) {
      e.value.videoExistsInPage && i.$emit("handle-redirect");
      try {
        const p = n.path.split("/"),
          d = e.value.funnelSteps || [],
          _ = u
            ? Je({ funnelSteps: d, stepId: u })
            : Je({ funnelSteps: d, funnelNextStep: e.value.funnelNextStep });
        let R = _.url;
        (p.includes("v2") || p.includes("preview")) &&
          (R = _ ? `/v2/preview/${_.id}` : "");
        const P = e.value.funnelDomain;
        if (
          window.location.hostname !== "localhost" &&
          !(p.includes("v2") || p.includes("preview")) &&
          P !== window.location.hostname
        ) {
          const z = `https://${P}${R}` + o();
          S({ url: z, newTab: g });
        } else {
          if (g) {
            const z = s.resolve({ path: R });
            window.open(z.href + o(), "_blank");
            return;
          }
          window.location.href = R + o();
          return;
        }
      } catch (p) {
        console.error(p);
      }
    }
    function S({ url: u, newTab: g }) {
      e.value.videoExistsInPage && i.$emit("handle-redirect"), (u = Qn(u));
      let p = e.value.locationId;
      const d = At(p);
      d && (u = Lt(u, d)),
        g ? window.open(u, "_blank") : (window.location.href = u);
    }
    return {
      call: t,
      sms: y,
      mailTo: l,
      createMembershipToken: c,
      goToNextFunnelStep: f,
      openUrl: S,
      getNextFunnelStepURL: (u) => {
        try {
          const g = n.path.split("/"),
            p = e.value.funnelSteps || [],
            d = n.query,
            _ = Je({ funnelSteps: p, stepId: u });
          if (_ && !_.id) return "#";
          if (g.includes("v2") || g.includes("preview"))
            return _ ? `/v2/preview/${_.id}` : "";
          let R = _.url;
          delete d.domain,
            delete d.page_url,
            delete d.additional_route,
            delete d.step_id,
            delete d.funnel_id,
            delete d.page_id;
          const P = e.value.funnelDomain,
            z = new URL(R, `https://${P}`);
          return (
            Object.keys(d).forEach((W) => {
              z.searchParams.append(W, d[W]);
            }),
            Dt({ url: z.href })
          );
        } catch (g) {
          return console.error(g), "#";
        }
      },
      redirectOnSubmit: E,
    };
  },
  qa = ["href", "target"],
  Za = ["href", "target"],
  Bn = N({
    __name: "NavMenuLink",
    props: { item: { type: Object } },
    emits: ["click"],
    setup(e, { emit: n }) {
      const { getNextFunnelStepURL: s } = Ya(),
        { openPopup: i } = Xn();
      function o(c) {
        return c.goTo === te.GO_TO_URL;
      }
      function t(c) {
        return c.goTo === te.GO_TO_STEP;
      }
      function y(c) {
        switch (c.goTo) {
          case te.OPEN_POPUP: {
            i();
            break;
          }
        }
        l();
      }
      function l() {
        n("click");
      }
      return (c, E) => {
        var f;
        return o(e.item)
          ? (r(),
            T(
              "a",
              {
                key: 0,
                href: a(Qn)(e.item.url),
                target: e.item.openInNewTab ? "_blank" : "",
                onClick: l,
              },
              Ue(e.item.title),
              9,
              qa
            ))
          : t(e.item)
          ? (r(),
            T(
              "a",
              {
                key: 1,
                href: a(s)((f = e.item) == null ? void 0 : f.goToId),
                target: e.item.openInNewTab ? "_blank" : "",
              },
              Ue(e.item.title),
              9,
              Za
            ))
          : (r(),
            T(
              "a",
              {
                key: 2,
                href: "javascript:void(0)",
                onClick: E[0] || (E[0] = (S) => y(e.item)),
              },
              Ue(e.item.title),
              1
            ));
      };
    },
  }),
  ja = { class: "nav-menu-body" },
  Qa = { class: "nav-menu" },
  Ja = { class: "nav-menu-item-content" },
  Xa = { key: 0, class: "nav-menu-item-toggle" },
  ei = ["onClick"],
  ni = { key: 0, class: "nav-dropdown-menu" },
  ti = N({
    __name: "NavMenuPopup",
    props: { elements: { type: Array } },
    setup(e) {
      const n = e,
        s = I("none"),
        i = I(!0),
        o = I(null),
        t = I([]),
        y = ie(),
        { $bus: l } = ae(),
        c = D(() =>
          o.value ? n.elements.find((u) => u.id === o.value) : null
        ),
        E = D(() => {
          if (!c.value) return [];
          const { extra: u } = c.value,
            { menuItems: g } = u;
          return g.value;
        });
      D(() => y.value.funnelSteps),
        J(() => {
          l.$on("show-nav-menu-popup", S);
        }),
        We(() => {
          l.$off("show-nav-menu-popup", S);
        });
      function f(u) {
        if (!u || !u.childs || !u.childs.length) return;
        const { id: g } = u,
          p = t.value.indexOf(g);
        p === -1
          ? (t.value = [...t.value, g])
          : (t.value = [...t.value.slice(0, p), ...t.value.slice(p + 1)]);
      }
      function S(u) {
        (s.value = "block"),
          (o.value = u),
          setTimeout(() => {
            i.value = !1;
          }, 50);
      }
      function C() {
        (s.value = "none"), (i.value = !0), (o.value = null);
      }
      return (u, g) => (
        r(),
        T("div", null, [
          x(
            "div",
            {
              id: "nav-menu-popup",
              style: ue({ display: a(s) }),
              class: w([a(i) ? "hide" : "show", a(o)]),
            },
            [
              x("div", ja, [
                x("i", {
                  onClick: g[0] || (g[0] = (p) => C()),
                  class: "close-menu fas fa-times",
                }),
                x("ul", Qa, [
                  (r(!0),
                  T(
                    Re,
                    null,
                    Ke(
                      a(E),
                      (p) => (
                        r(),
                        T(
                          "li",
                          {
                            key: p.id,
                            class: w([
                              {
                                dropdown: p.childs.length,
                                active: a(t).includes(p.id),
                              },
                              "nav-menu-item",
                            ]),
                          },
                          [
                            x("div", Ja, [
                              H(
                                Bn,
                                {
                                  onClick: (d) =>
                                    p.childs.length ? f(p) : C(),
                                  item: p,
                                  class: "nav-menu-item-title",
                                },
                                null,
                                8,
                                ["onClick", "item"]
                              ),
                              p.childs.length
                                ? (r(),
                                  T("span", Xa, [
                                    x(
                                      "i",
                                      {
                                        onClick: (d) => f(p),
                                        class: "fas fa-angle-down",
                                      },
                                      null,
                                      8,
                                      ei
                                    ),
                                  ]))
                                : h("", !0),
                            ]),
                            p.childs && p.childs.length
                              ? (r(),
                                T("ul", ni, [
                                  (r(!0),
                                  T(
                                    Re,
                                    null,
                                    Ke(
                                      p.childs,
                                      (d) => (
                                        r(),
                                        T(
                                          "li",
                                          { key: d.id, class: "nav-menu-item" },
                                          [
                                            H(
                                              Bn,
                                              {
                                                onClick:
                                                  g[1] || (g[1] = (_) => C()),
                                                item: d,
                                                class: "nav-menu-item-title",
                                              },
                                              null,
                                              8,
                                              ["item"]
                                            ),
                                          ]
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ]))
                              : h("", !0),
                          ],
                          2
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ],
            6
          ),
        ])
      );
    },
  }),
  Un = N({
    __name: "CustomHtmlCode",
    props: {
      code: { type: String, default: "" },
      id: { type: String, default: "" },
    },
    setup(e) {
      return (n, s) => (
        r(),
        T("div", null, [
          H($t, { id: e.id, code: e.code }, null, 8, ["id", "code"]),
        ])
      );
    },
  }),
  on = "https://use.fontawesome.com/releases/v5.15.4/css",
  Fn = on + "/regular.css",
  zn = on + "/solid.css",
  Kn = on + "/brands.css",
  Hn =
    "sha384-e7wK18mMVsIpE/BDLrCQ99c7gROAxr9czDzslePcAHgCLGCRidxq1mrNCLVF2oaj",
  Gn =
    "sha384-Tv5i09RULyHKMwX0E8wJUqSOaXlyu3SQxORObAI08iUwIalMmN5L6AvlPX2LMoSE",
  Vn =
    "sha384-S5yUroXKhsCryF2hYGm7i8RQ/ThL96qmmWD+lF5AZTdOdsxChQktVW+cKP/s4eav",
  ai = { key: 0 },
  ii = x("div", { id: "faq-overlay" }, null, -1),
  oi = { id: "faq-popup" },
  li = { class: "popupcontrols" },
  si = x("img", { src: nt, alt: "close" }, null, -1),
  ri = [si],
  ui = ["src"],
  ci = N({
    __name: "FAQPopup",
    setup(e) {
      const { $bus: n } = ae(),
        s = I(!1),
        i = I("");
      ie();
      const o = I(),
        t = () => {
          (i.value = ""), (s.value = !1);
        },
        y = (l) => {
          l != null && l.url
            ? ((i.value = l.url),
              (o.value = l.imageOptimizationEnabled),
              (s.value = !0))
            : t();
        };
      return (
        J(() => {
          n.$on("open-faq-popup", y);
        }),
        We(() => {
          n.$off("open-faq-popup", y);
        }),
        (l, c) =>
          a(s)
            ? (r(),
              T("div", ai, [
                ii,
                x("div", oi, [
                  x("div", li, [
                    x(
                      "div",
                      {
                        onClick: c[0] || (c[0] = (E) => t()),
                        class: "closeLPModal",
                      },
                      ri
                    ),
                  ]),
                  a(o)
                    ? (r(),
                      b(
                        Jn,
                        {
                          key: 0,
                          "class-list": ["popupcontent"],
                          url: a(i),
                          alt: "FAQ image",
                        },
                        null,
                        8,
                        ["url"]
                      ))
                    : (r(),
                      T(
                        "img",
                        {
                          key: 1,
                          class: "popupcontent",
                          src: a(i),
                          alt: "FAQ image",
                        },
                        null,
                        8,
                        ui
                      )),
                ]),
              ]))
            : h("", !0)
      );
    },
  });
const mi = () => ({
    channel: "APP",
    source: "WEB_USER",
    version: "2021-04-15",
  }),
  di = (e) => {
    const n = tn().public;
    return Pt.create({ baseURL: e || n.REST_API_URLS, headers: mi() });
  },
  gi = {
    ValidateAffiliateCampaign: (e) =>
      di()("/affiliate-manager/affiliate-campaign/validate", {
        body: e,
        method: "POST",
      }),
  };
function pi(e) {
  const n = e.split("/");
  return n.includes("v2") || n.includes("preview");
}
function Wi(e) {
  if (!e) return "";
  for (const n of Object.keys(nn))
    if (n.toLowerCase() === e.toLowerCase()) return nn[n].symbol;
}
const nn = {
  USD: {
    symbol: "$",
    name: "US Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "USD",
    name_plural: "US dollars",
  },
  CAD: {
    symbol: "CA$",
    name: "Canadian Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "CAD",
    name_plural: "Canadian dollars",
  },
  EUR: {
    symbol: "\u20AC",
    name: "Euro",
    symbol_native: "\u20AC",
    decimal_digits: 2,
    rounding: 0,
    code: "EUR",
    name_plural: "euros",
  },
  AED: {
    symbol: "AED",
    name: "United Arab Emirates Dirham",
    symbol_native: "\u062F.\u0625.\u200F",
    decimal_digits: 2,
    rounding: 0,
    code: "AED",
    name_plural: "UAE dirhams",
  },
  AFN: {
    symbol: "Af",
    name: "Afghan Afghani",
    symbol_native: "\u060B",
    decimal_digits: 0,
    rounding: 0,
    code: "AFN",
    name_plural: "Afghan Afghanis",
  },
  ALL: {
    symbol: "ALL",
    name: "Albanian Lek",
    symbol_native: "Lek",
    decimal_digits: 0,
    rounding: 0,
    code: "ALL",
    name_plural: "Albanian lek\xEB",
  },
  AMD: {
    symbol: "AMD",
    name: "Armenian Dram",
    symbol_native: "\u0564\u0580.",
    decimal_digits: 0,
    rounding: 0,
    code: "AMD",
    name_plural: "Armenian drams",
  },
  ARS: {
    symbol: "AR$",
    name: "Argentine Peso",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "ARS",
    name_plural: "Argentine pesos",
  },
  AUD: {
    symbol: "AU$",
    name: "Australian Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "AUD",
    name_plural: "Australian dollars",
  },
  AZN: {
    symbol: "man.",
    name: "Azerbaijani Manat",
    symbol_native: "\u043C\u0430\u043D.",
    decimal_digits: 2,
    rounding: 0,
    code: "AZN",
    name_plural: "Azerbaijani manats",
  },
  BAM: {
    symbol: "KM",
    name: "Bosnia-Herzegovina Convertible Mark",
    symbol_native: "KM",
    decimal_digits: 2,
    rounding: 0,
    code: "BAM",
    name_plural: "Bosnia-Herzegovina convertible marks",
  },
  BDT: {
    symbol: "Tk",
    name: "Bangladeshi Taka",
    symbol_native: "\u09F3",
    decimal_digits: 2,
    rounding: 0,
    code: "BDT",
    name_plural: "Bangladeshi takas",
  },
  BGN: {
    symbol: "BGN",
    name: "Bulgarian Lev",
    symbol_native: "\u043B\u0432.",
    decimal_digits: 2,
    rounding: 0,
    code: "BGN",
    name_plural: "Bulgarian leva",
  },
  BHD: {
    symbol: "BD",
    name: "Bahraini Dinar",
    symbol_native: "\u062F.\u0628.\u200F",
    decimal_digits: 3,
    rounding: 0,
    code: "BHD",
    name_plural: "Bahraini dinars",
  },
  BIF: {
    symbol: "FBu",
    name: "Burundian Franc",
    symbol_native: "FBu",
    decimal_digits: 0,
    rounding: 0,
    code: "BIF",
    name_plural: "Burundian francs",
  },
  BND: {
    symbol: "BN$",
    name: "Brunei Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "BND",
    name_plural: "Brunei dollars",
  },
  BOB: {
    symbol: "Bs",
    name: "Bolivian Boliviano",
    symbol_native: "Bs",
    decimal_digits: 2,
    rounding: 0,
    code: "BOB",
    name_plural: "Bolivian bolivianos",
  },
  BRL: {
    symbol: "R$",
    name: "Brazilian Real",
    symbol_native: "R$",
    decimal_digits: 2,
    rounding: 0,
    code: "BRL",
    name_plural: "Brazilian reals",
  },
  BWP: {
    symbol: "BWP",
    name: "Botswanan Pula",
    symbol_native: "P",
    decimal_digits: 2,
    rounding: 0,
    code: "BWP",
    name_plural: "Botswanan pulas",
  },
  BYR: {
    symbol: "BYR",
    name: "Belarusian Ruble",
    symbol_native: "BYR",
    decimal_digits: 0,
    rounding: 0,
    code: "BYR",
    name_plural: "Belarusian rubles",
  },
  BZD: {
    symbol: "BZ$",
    name: "Belize Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "BZD",
    name_plural: "Belize dollars",
  },
  CDF: {
    symbol: "CDF",
    name: "Congolese Franc",
    symbol_native: "FrCD",
    decimal_digits: 2,
    rounding: 0,
    code: "CDF",
    name_plural: "Congolese francs",
  },
  CHF: {
    symbol: "CHF",
    name: "Swiss Franc",
    symbol_native: "CHF",
    decimal_digits: 2,
    rounding: 0.05,
    code: "CHF",
    name_plural: "Swiss francs",
  },
  CLP: {
    symbol: "CL$",
    name: "Chilean Peso",
    symbol_native: "$",
    decimal_digits: 0,
    rounding: 0,
    code: "CLP",
    name_plural: "Chilean pesos",
  },
  CNY: {
    symbol: "CN\xA5",
    name: "Chinese Yuan",
    symbol_native: "CN\xA5",
    decimal_digits: 2,
    rounding: 0,
    code: "CNY",
    name_plural: "Chinese yuan",
  },
  COP: {
    symbol: "CO$",
    name: "Colombian Peso",
    symbol_native: "$",
    decimal_digits: 0,
    rounding: 0,
    code: "COP",
    name_plural: "Colombian pesos",
  },
  CRC: {
    symbol: "\u20A1",
    name: "Costa Rican Col\xF3n",
    symbol_native: "\u20A1",
    decimal_digits: 0,
    rounding: 0,
    code: "CRC",
    name_plural: "Costa Rican col\xF3ns",
  },
  CVE: {
    symbol: "CV$",
    name: "Cape Verdean Escudo",
    symbol_native: "CV$",
    decimal_digits: 2,
    rounding: 0,
    code: "CVE",
    name_plural: "Cape Verdean escudos",
  },
  CZK: {
    symbol: "K\u010D",
    name: "Czech Republic Koruna",
    symbol_native: "K\u010D",
    decimal_digits: 2,
    rounding: 0,
    code: "CZK",
    name_plural: "Czech Republic korunas",
  },
  DJF: {
    symbol: "Fdj",
    name: "Djiboutian Franc",
    symbol_native: "Fdj",
    decimal_digits: 0,
    rounding: 0,
    code: "DJF",
    name_plural: "Djiboutian francs",
  },
  DKK: {
    symbol: "Dkr",
    name: "Danish Krone",
    symbol_native: "kr",
    decimal_digits: 2,
    rounding: 0,
    code: "DKK",
    name_plural: "Danish kroner",
  },
  DOP: {
    symbol: "RD$",
    name: "Dominican Peso",
    symbol_native: "RD$",
    decimal_digits: 2,
    rounding: 0,
    code: "DOP",
    name_plural: "Dominican pesos",
  },
  DZD: {
    symbol: "DA",
    name: "Algerian Dinar",
    symbol_native: "\u062F.\u062C.\u200F",
    decimal_digits: 2,
    rounding: 0,
    code: "DZD",
    name_plural: "Algerian dinars",
  },
  EEK: {
    symbol: "Ekr",
    name: "Estonian Kroon",
    symbol_native: "kr",
    decimal_digits: 2,
    rounding: 0,
    code: "EEK",
    name_plural: "Estonian kroons",
  },
  EGP: {
    symbol: "EGP",
    name: "Egyptian Pound",
    symbol_native: "\u062C.\u0645.\u200F",
    decimal_digits: 2,
    rounding: 0,
    code: "EGP",
    name_plural: "Egyptian pounds",
  },
  ERN: {
    symbol: "Nfk",
    name: "Eritrean Nakfa",
    symbol_native: "Nfk",
    decimal_digits: 2,
    rounding: 0,
    code: "ERN",
    name_plural: "Eritrean nakfas",
  },
  ETB: {
    symbol: "Br",
    name: "Ethiopian Birr",
    symbol_native: "Br",
    decimal_digits: 2,
    rounding: 0,
    code: "ETB",
    name_plural: "Ethiopian birrs",
  },
  GBP: {
    symbol: "\xA3",
    name: "British Pound Sterling",
    symbol_native: "\xA3",
    decimal_digits: 2,
    rounding: 0,
    code: "GBP",
    name_plural: "British pounds sterling",
  },
  GEL: {
    symbol: "GEL",
    name: "Georgian Lari",
    symbol_native: "GEL",
    decimal_digits: 2,
    rounding: 0,
    code: "GEL",
    name_plural: "Georgian laris",
  },
  GHS: {
    symbol: "GH\u20B5",
    name: "Ghanaian Cedi",
    symbol_native: "GH\u20B5",
    decimal_digits: 2,
    rounding: 0,
    code: "GHS",
    name_plural: "Ghanaian cedis",
  },
  GNF: {
    symbol: "FG",
    name: "Guinean Franc",
    symbol_native: "FG",
    decimal_digits: 0,
    rounding: 0,
    code: "GNF",
    name_plural: "Guinean francs",
  },
  GTQ: {
    symbol: "GTQ",
    name: "Guatemalan Quetzal",
    symbol_native: "Q",
    decimal_digits: 2,
    rounding: 0,
    code: "GTQ",
    name_plural: "Guatemalan quetzals",
  },
  HKD: {
    symbol: "HK$",
    name: "Hong Kong Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "HKD",
    name_plural: "Hong Kong dollars",
  },
  HNL: {
    symbol: "HNL",
    name: "Honduran Lempira",
    symbol_native: "L",
    decimal_digits: 2,
    rounding: 0,
    code: "HNL",
    name_plural: "Honduran lempiras",
  },
  HRK: {
    symbol: "kn",
    name: "Croatian Kuna",
    symbol_native: "kn",
    decimal_digits: 2,
    rounding: 0,
    code: "HRK",
    name_plural: "Croatian kunas",
  },
  HUF: {
    symbol: "Ft",
    name: "Hungarian Forint",
    symbol_native: "Ft",
    decimal_digits: 0,
    rounding: 0,
    code: "HUF",
    name_plural: "Hungarian forints",
  },
  IDR: {
    symbol: "Rp",
    name: "Indonesian Rupiah",
    symbol_native: "Rp",
    decimal_digits: 0,
    rounding: 0,
    code: "IDR",
    name_plural: "Indonesian rupiahs",
  },
  ILS: {
    symbol: "\u20AA",
    name: "Israeli New Sheqel",
    symbol_native: "\u20AA",
    decimal_digits: 2,
    rounding: 0,
    code: "ILS",
    name_plural: "Israeli new sheqels",
  },
  INR: {
    symbol: "Rs ",
    name: "Indian Rupee",
    symbol_native: "\u099F\u0995\u09BE",
    decimal_digits: 2,
    rounding: 0,
    code: "INR",
    name_plural: "Indian rupees",
  },
  IQD: {
    symbol: "IQD",
    name: "Iraqi Dinar",
    symbol_native: "\u062F.\u0639.\u200F",
    decimal_digits: 0,
    rounding: 0,
    code: "IQD",
    name_plural: "Iraqi dinars",
  },
  IRR: {
    symbol: "IRR",
    name: "Iranian Rial",
    symbol_native: "\uFDFC",
    decimal_digits: 0,
    rounding: 0,
    code: "IRR",
    name_plural: "Iranian rials",
  },
  ISK: {
    symbol: "Ikr",
    name: "Icelandic Kr\xF3na",
    symbol_native: "kr",
    decimal_digits: 0,
    rounding: 0,
    code: "ISK",
    name_plural: "Icelandic kr\xF3nur",
  },
  JMD: {
    symbol: "J$",
    name: "Jamaican Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "JMD",
    name_plural: "Jamaican dollars",
  },
  JOD: {
    symbol: "JD",
    name: "Jordanian Dinar",
    symbol_native: "\u062F.\u0623.\u200F",
    decimal_digits: 3,
    rounding: 0,
    code: "JOD",
    name_plural: "Jordanian dinars",
  },
  JPY: {
    symbol: "\xA5",
    name: "Japanese Yen",
    symbol_native: "\uFFE5",
    decimal_digits: 0,
    rounding: 0,
    code: "JPY",
    name_plural: "Japanese yen",
  },
  KES: {
    symbol: "Ksh",
    name: "Kenyan Shilling",
    symbol_native: "Ksh",
    decimal_digits: 2,
    rounding: 0,
    code: "KES",
    name_plural: "Kenyan shillings",
  },
  KGS: {
    symbol: "som ",
    name: "Kyrgyzstani som",
    symbol_native: "som",
    decimal_digits: 2,
    rounding: 0,
    code: "KGS",
    name_plural: "Kyrgyzstani som",
  },
  KHR: {
    symbol: "KHR",
    name: "Cambodian Riel",
    symbol_native: "\u17DB",
    decimal_digits: 2,
    rounding: 0,
    code: "KHR",
    name_plural: "Cambodian riels",
  },
  KMF: {
    symbol: "CF",
    name: "Comorian Franc",
    symbol_native: "FC",
    decimal_digits: 0,
    rounding: 0,
    code: "KMF",
    name_plural: "Comorian francs",
  },
  KRW: {
    symbol: "\u20A9",
    name: "South Korean Won",
    symbol_native: "\u20A9",
    decimal_digits: 0,
    rounding: 0,
    code: "KRW",
    name_plural: "South Korean won",
  },
  KWD: {
    symbol: "KD",
    name: "Kuwaiti Dinar",
    symbol_native: "\u062F.\u0643.\u200F",
    decimal_digits: 3,
    rounding: 0,
    code: "KWD",
    name_plural: "Kuwaiti dinars",
  },
  KZT: {
    symbol: "KZT",
    name: "Kazakhstani Tenge",
    symbol_native: "\u0442\u04A3\u0433.",
    decimal_digits: 2,
    rounding: 0,
    code: "KZT",
    name_plural: "Kazakhstani tenges",
  },
  LBP: {
    symbol: "LB\xA3",
    name: "Lebanese Pound",
    symbol_native: "\u0644.\u0644.\u200F",
    decimal_digits: 0,
    rounding: 0,
    code: "LBP",
    name_plural: "Lebanese pounds",
  },
  LKR: {
    symbol: "SLRs",
    name: "Sri Lankan Rupee",
    symbol_native: "SL Re",
    decimal_digits: 2,
    rounding: 0,
    code: "LKR",
    name_plural: "Sri Lankan rupees",
  },
  LTL: {
    symbol: "Lt",
    name: "Lithuanian Litas",
    symbol_native: "Lt",
    decimal_digits: 2,
    rounding: 0,
    code: "LTL",
    name_plural: "Lithuanian litai",
  },
  LVL: {
    symbol: "Ls",
    name: "Latvian Lats",
    symbol_native: "Ls",
    decimal_digits: 2,
    rounding: 0,
    code: "LVL",
    name_plural: "Latvian lati",
  },
  LYD: {
    symbol: "LD",
    name: "Libyan Dinar",
    symbol_native: "\u062F.\u0644.\u200F",
    decimal_digits: 3,
    rounding: 0,
    code: "LYD",
    name_plural: "Libyan dinars",
  },
  MAD: {
    symbol: "MAD",
    name: "Moroccan Dirham",
    symbol_native: "\u062F.\u0645.\u200F",
    decimal_digits: 2,
    rounding: 0,
    code: "MAD",
    name_plural: "Moroccan dirhams",
  },
  MDL: {
    symbol: "MDL",
    name: "Moldovan Leu",
    symbol_native: "MDL",
    decimal_digits: 2,
    rounding: 0,
    code: "MDL",
    name_plural: "Moldovan lei",
  },
  MGA: {
    symbol: "MGA",
    name: "Malagasy Ariary",
    symbol_native: "MGA",
    decimal_digits: 0,
    rounding: 0,
    code: "MGA",
    name_plural: "Malagasy Ariaries",
  },
  MKD: {
    symbol: "MKD",
    name: "Macedonian Denar",
    symbol_native: "MKD",
    decimal_digits: 2,
    rounding: 0,
    code: "MKD",
    name_plural: "Macedonian denari",
  },
  MMK: {
    symbol: "MMK",
    name: "Myanma Kyat",
    symbol_native: "K",
    decimal_digits: 0,
    rounding: 0,
    code: "MMK",
    name_plural: "Myanma kyats",
  },
  MOP: {
    symbol: "MOP$",
    name: "Macanese Pataca",
    symbol_native: "MOP$",
    decimal_digits: 2,
    rounding: 0,
    code: "MOP",
    name_plural: "Macanese patacas",
  },
  MUR: {
    symbol: "MURs",
    name: "Mauritian Rupee",
    symbol_native: "MURs",
    decimal_digits: 0,
    rounding: 0,
    code: "MUR",
    name_plural: "Mauritian rupees",
  },
  MXN: {
    symbol: "MX$",
    name: "Mexican Peso",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "MXN",
    name_plural: "Mexican pesos",
  },
  MYR: {
    symbol: "RM",
    name: "Malaysian Ringgit",
    symbol_native: "RM",
    decimal_digits: 2,
    rounding: 0,
    code: "MYR",
    name_plural: "Malaysian ringgits",
  },
  MZN: {
    symbol: "MTn",
    name: "Mozambican Metical",
    symbol_native: "MTn",
    decimal_digits: 2,
    rounding: 0,
    code: "MZN",
    name_plural: "Mozambican meticals",
  },
  NAD: {
    symbol: "N$",
    name: "Namibian Dollar",
    symbol_native: "N$",
    decimal_digits: 2,
    rounding: 0,
    code: "NAD",
    name_plural: "Namibian dollars",
  },
  NGN: {
    symbol: "\u20A6",
    name: "Nigerian Naira",
    symbol_native: "\u20A6",
    decimal_digits: 2,
    rounding: 0,
    code: "NGN",
    name_plural: "Nigerian nairas",
  },
  NIO: {
    symbol: "C$",
    name: "Nicaraguan C\xF3rdoba",
    symbol_native: "C$",
    decimal_digits: 2,
    rounding: 0,
    code: "NIO",
    name_plural: "Nicaraguan c\xF3rdobas",
  },
  NOK: {
    symbol: "Nkr",
    name: "Norwegian Krone",
    symbol_native: "kr",
    decimal_digits: 2,
    rounding: 0,
    code: "NOK",
    name_plural: "Norwegian kroner",
  },
  NPR: {
    symbol: "NPRs",
    name: "Nepalese Rupee",
    symbol_native: "\u0928\u0947\u0930\u0942",
    decimal_digits: 2,
    rounding: 0,
    code: "NPR",
    name_plural: "Nepalese rupees",
  },
  NZD: {
    symbol: "NZ$",
    name: "New Zealand Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "NZD",
    name_plural: "New Zealand dollars",
  },
  OMR: {
    symbol: "OMR",
    name: "Omani Rial",
    symbol_native: "\u0631.\u0639.\u200F",
    decimal_digits: 3,
    rounding: 0,
    code: "OMR",
    name_plural: "Omani rials",
  },
  PAB: {
    symbol: "B/.",
    name: "Panamanian Balboa",
    symbol_native: "B/.",
    decimal_digits: 2,
    rounding: 0,
    code: "PAB",
    name_plural: "Panamanian balboas",
  },
  PEN: {
    symbol: "S/.",
    name: "Peruvian Nuevo Sol",
    symbol_native: "S/.",
    decimal_digits: 2,
    rounding: 0,
    code: "PEN",
    name_plural: "Peruvian nuevos soles",
  },
  PHP: {
    symbol: "\u20B1",
    name: "Philippine Peso",
    symbol_native: "\u20B1",
    decimal_digits: 2,
    rounding: 0,
    code: "PHP",
    name_plural: "Philippine pesos",
  },
  PKR: {
    symbol: "PKRs",
    name: "Pakistani Rupee",
    symbol_native: "\u20A8",
    decimal_digits: 0,
    rounding: 0,
    code: "PKR",
    name_plural: "Pakistani rupees",
  },
  PLN: {
    symbol: "z\u0142",
    name: "Polish Zloty",
    symbol_native: "z\u0142",
    decimal_digits: 2,
    rounding: 0,
    code: "PLN",
    name_plural: "Polish zlotys",
  },
  PYG: {
    symbol: "\u20B2",
    name: "Paraguayan Guarani",
    symbol_native: "\u20B2",
    decimal_digits: 0,
    rounding: 0,
    code: "PYG",
    name_plural: "Paraguayan guaranis",
  },
  QAR: {
    symbol: "QR",
    name: "Qatari Rial",
    symbol_native: "\u0631.\u0642.\u200F",
    decimal_digits: 2,
    rounding: 0,
    code: "QAR",
    name_plural: "Qatari rials",
  },
  RON: {
    symbol: "RON",
    name: "Romanian Leu",
    symbol_native: "RON",
    decimal_digits: 2,
    rounding: 0,
    code: "RON",
    name_plural: "Romanian lei",
  },
  RSD: {
    symbol: "din.",
    name: "Serbian Dinar",
    symbol_native: "\u0434\u0438\u043D.",
    decimal_digits: 0,
    rounding: 0,
    code: "RSD",
    name_plural: "Serbian dinars",
  },
  RUB: {
    symbol: "RUB",
    name: "Russian Ruble",
    symbol_native: "\u0440\u0443\u0431.",
    decimal_digits: 2,
    rounding: 0,
    code: "RUB",
    name_plural: "Russian rubles",
  },
  RWF: {
    symbol: "RWF",
    name: "Rwandan Franc",
    symbol_native: "FR",
    decimal_digits: 0,
    rounding: 0,
    code: "RWF",
    name_plural: "Rwandan francs",
  },
  SAR: {
    symbol: "SR",
    name: "Saudi Riyal",
    symbol_native: "\u0631.\u0633.\u200F",
    decimal_digits: 2,
    rounding: 0,
    code: "SAR",
    name_plural: "Saudi riyals",
  },
  SDG: {
    symbol: "SDG",
    name: "Sudanese Pound",
    symbol_native: "SDG",
    decimal_digits: 2,
    rounding: 0,
    code: "SDG",
    name_plural: "Sudanese pounds",
  },
  SEK: {
    symbol: "kr",
    name: "Swedish Krona",
    symbol_native: "kr",
    decimal_digits: 2,
    rounding: 0,
    code: "SEK",
    name_plural: "Swedish kronor",
  },
  SGD: {
    symbol: "S$",
    name: "Singapore Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "SGD",
    name_plural: "Singapore dollars",
  },
  SOS: {
    symbol: "Ssh",
    name: "Somali Shilling",
    symbol_native: "Ssh",
    decimal_digits: 0,
    rounding: 0,
    code: "SOS",
    name_plural: "Somali shillings",
  },
  SYP: {
    symbol: "SY\xA3",
    name: "Syrian Pound",
    symbol_native: "\u0644.\u0633.\u200F",
    decimal_digits: 0,
    rounding: 0,
    code: "SYP",
    name_plural: "Syrian pounds",
  },
  THB: {
    symbol: "\u0E3F",
    name: "Thai Baht",
    symbol_native: "\u0E3F",
    decimal_digits: 2,
    rounding: 0,
    code: "THB",
    name_plural: "Thai baht",
  },
  TND: {
    symbol: "DT",
    name: "Tunisian Dinar",
    symbol_native: "\u062F.\u062A.\u200F",
    decimal_digits: 3,
    rounding: 0,
    code: "TND",
    name_plural: "Tunisian dinars",
  },
  TOP: {
    symbol: "T$",
    name: "Tongan Pa\u02BBanga",
    symbol_native: "T$",
    decimal_digits: 2,
    rounding: 0,
    code: "TOP",
    name_plural: "Tongan pa\u02BBanga",
  },
  TRY: {
    symbol: "TL",
    name: "Turkish Lira",
    symbol_native: "TL",
    decimal_digits: 2,
    rounding: 0,
    code: "TRY",
    name_plural: "Turkish Lira",
  },
  TTD: {
    symbol: "TT$",
    name: "Trinidad and Tobago Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "TTD",
    name_plural: "Trinidad and Tobago dollars",
  },
  TWD: {
    symbol: "NT$",
    name: "New Taiwan Dollar",
    symbol_native: "NT$",
    decimal_digits: 2,
    rounding: 0,
    code: "TWD",
    name_plural: "New Taiwan dollars",
  },
  TZS: {
    symbol: "TSh",
    name: "Tanzanian Shilling",
    symbol_native: "TSh",
    decimal_digits: 0,
    rounding: 0,
    code: "TZS",
    name_plural: "Tanzanian shillings",
  },
  UAH: {
    symbol: "\u20B4",
    name: "Ukrainian Hryvnia",
    symbol_native: "\u20B4",
    decimal_digits: 2,
    rounding: 0,
    code: "UAH",
    name_plural: "Ukrainian hryvnias",
  },
  UGX: {
    symbol: "USh",
    name: "Ugandan Shilling",
    symbol_native: "USh",
    decimal_digits: 0,
    rounding: 0,
    code: "UGX",
    name_plural: "Ugandan shillings",
  },
  UYU: {
    symbol: "$U",
    name: "Uruguayan Peso",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "UYU",
    name_plural: "Uruguayan pesos",
  },
  UZS: {
    symbol: "UZS",
    name: "Uzbekistan Som",
    symbol_native: "UZS",
    decimal_digits: 0,
    rounding: 0,
    code: "UZS",
    name_plural: "Uzbekistan som",
  },
  VEF: {
    symbol: "Bs.F.",
    name: "Venezuelan Bol\xEDvar",
    symbol_native: "Bs.F.",
    decimal_digits: 2,
    rounding: 0,
    code: "VEF",
    name_plural: "Venezuelan bol\xEDvars",
  },
  VND: {
    symbol: "\u20AB",
    name: "Vietnamese Dong",
    symbol_native: "\u20AB",
    decimal_digits: 0,
    rounding: 0,
    code: "VND",
    name_plural: "Vietnamese dong",
  },
  XAF: {
    symbol: "FCFA",
    name: "CFA Franc BEAC",
    symbol_native: "FCFA",
    decimal_digits: 0,
    rounding: 0,
    code: "XAF",
    name_plural: "CFA francs BEAC",
  },
  XOF: {
    symbol: "CFA",
    name: "CFA Franc BCEAO",
    symbol_native: "CFA",
    decimal_digits: 0,
    rounding: 0,
    code: "XOF",
    name_plural: "CFA francs BCEAO",
  },
  YER: {
    symbol: "YR",
    name: "Yemeni Rial",
    symbol_native: "\u0631.\u064A.\u200F",
    decimal_digits: 0,
    rounding: 0,
    code: "YER",
    name_plural: "Yemeni rials",
  },
  ZAR: {
    symbol: "R",
    name: "South African Rand",
    symbol_native: "R",
    decimal_digits: 2,
    rounding: 0,
    code: "ZAR",
    name_plural: "South African rand",
  },
  ZMK: {
    symbol: "ZK",
    name: "Zambian Kwacha",
    symbol_native: "ZK",
    decimal_digits: 0,
    rounding: 0,
    code: "ZMK",
    name_plural: "Zambian kwachas",
  },
};
var ln = {},
  sn = {},
  qe = {};
Object.defineProperty(qe, "__esModule", { value: !0 });
var _i = function (e) {
  if ("getBBox" in e) {
    var n = e.getBBox();
    return Object.freeze({ height: n.height, left: 0, top: 0, width: n.width });
  } else {
    var s = window.getComputedStyle(e);
    return Object.freeze({
      height: parseFloat(s.height || "0"),
      left: parseFloat(s.paddingLeft || "0"),
      top: parseFloat(s.paddingTop || "0"),
      width: parseFloat(s.width || "0"),
    });
  }
};
qe.ContentRect = _i;
Object.defineProperty(sn, "__esModule", { value: !0 });
var vi = qe,
  yi = (function () {
    function e(n) {
      (this.target = n), (this.$$broadcastWidth = this.$$broadcastHeight = 0);
    }
    return (
      Object.defineProperty(e.prototype, "broadcastWidth", {
        get: function () {
          return this.$$broadcastWidth;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "broadcastHeight", {
        get: function () {
          return this.$$broadcastHeight;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (e.prototype.isActive = function () {
        var n = vi.ContentRect(this.target);
        return (
          !!n &&
          (n.width !== this.broadcastWidth || n.height !== this.broadcastHeight)
        );
      }),
      e
    );
  })();
sn.ResizeObservation = yi;
var rn = {};
Object.defineProperty(rn, "__esModule", { value: !0 });
var hi = qe,
  fi = (function () {
    function e(n) {
      (this.target = n), (this.contentRect = hi.ContentRect(n));
    }
    return e;
  })();
rn.ResizeObserverEntry = fi;
Object.defineProperty(ln, "__esModule", { value: !0 });
var bi = sn,
  Ei = rn,
  ee = [],
  tt = (function () {
    function e(n) {
      (this.$$observationTargets = []),
        (this.$$activeTargets = []),
        (this.$$skippedTargets = []);
      var s = Ci(n);
      if (s) throw TypeError(s);
      this.$$callback = n;
    }
    return (
      (e.prototype.observe = function (n) {
        var s = Yn("observe", n);
        if (s) throw TypeError(s);
        var i = qn(this.$$observationTargets, n);
        i >= 0 ||
          (this.$$observationTargets.push(new bi.ResizeObservation(n)),
          Ti(this));
      }),
      (e.prototype.unobserve = function (n) {
        var s = Yn("unobserve", n);
        if (s) throw TypeError(s);
        var i = qn(this.$$observationTargets, n);
        i < 0 ||
          (this.$$observationTargets.splice(i, 1),
          this.$$observationTargets.length === 0 && Wn(this));
      }),
      (e.prototype.disconnect = function () {
        (this.$$observationTargets = []), (this.$$activeTargets = []), Wn(this);
      }),
      e
    );
  })();
ln.ResizeObserver = tt;
function Ti(e) {
  var n = ee.indexOf(e);
  n < 0 && (ee.push(e), Ai());
}
function Wn(e) {
  var n = ee.indexOf(e);
  n >= 0 && (ee.splice(n, 1), Li());
}
function Ci(e) {
  if (typeof e > "u")
    return "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.";
  if (typeof e != "function")
    return "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.";
}
function Yn(e, n) {
  if (typeof n > "u")
    return (
      "Failed to execute '" +
      e +
      "' on 'ResizeObserver': 1 argument required, but only 0 present."
    );
  if (!(n && n.nodeType === window.Node.ELEMENT_NODE))
    return (
      "Failed to execute '" +
      e +
      "' on 'ResizeObserver': parameter 1 is not of type 'Element'."
    );
}
function qn(e, n) {
  for (var s = 0; s < e.length; s += 1) if (e[s].target === n) return s;
  return -1;
}
var Zn = function (e) {
    ee.forEach(function (n) {
      (n.$$activeTargets = []),
        (n.$$skippedTargets = []),
        n.$$observationTargets.forEach(function (s) {
          if (s.isActive()) {
            var i = at(s.target);
            i > e ? n.$$activeTargets.push(s) : n.$$skippedTargets.push(s);
          }
        });
    });
  },
  wi = function () {
    return ee.some(function (e) {
      return !!e.$$activeTargets.length;
    });
  },
  Ii = function () {
    return ee.some(function (e) {
      return !!e.$$skippedTargets.length;
    });
  },
  Ri = function () {
    var e = 1 / 0;
    return (
      ee.forEach(function (n) {
        if (!!n.$$activeTargets.length) {
          var s = [];
          n.$$activeTargets.forEach(function (i) {
            var o = new Ei.ResizeObserverEntry(i.target);
            s.push(o),
              (i.$$broadcastWidth = o.contentRect.width),
              (i.$$broadcastHeight = o.contentRect.height);
            var t = at(i.target);
            t < e && (e = t);
          }),
            n.$$callback(s, n),
            (n.$$activeTargets = []);
        }
      }),
      e
    );
  },
  Si = function () {
    var e = new window.ErrorEvent("ResizeLoopError", {
      message: "ResizeObserver loop completed with undelivered notifications.",
    });
    window.dispatchEvent(e);
  },
  at = function (e) {
    for (var n = 0; e.parentNode; ) (e = e.parentNode), (n += 1);
    return n;
  },
  Oi = function () {
    var e = 0;
    for (Zn(e); wi(); ) (e = Ri()), Zn(e);
    Ii() && Si();
  },
  Ie,
  Ai = function () {
    Ie || it();
  },
  it = function () {
    Ie = window.requestAnimationFrame(function () {
      Oi(), it();
    });
  },
  Li = function () {
    Ie &&
      !ee.some(function (e) {
        return !!e.$$observationTargets.length;
      }) &&
      (window.cancelAnimationFrame(Ie), (Ie = void 0));
  },
  Di = function () {
    return (window.ResizeObserver = tt);
  },
  Pi = (ln.install = Di);
const ki = N({
    __name: "index",
    async setup(e) {
      var Ae,
        Le,
        De,
        un,
        cn,
        mn,
        dn,
        gn,
        pn,
        _n,
        vn,
        yn,
        hn,
        fn,
        bn,
        En,
        Tn,
        Cn,
        wn,
        In,
        Rn,
        Sn,
        On,
        An,
        Ln,
        Dn;
      let n, s;
      const { $bus: i } = ae();
      tn();
      const o = yt(),
        t = ie(),
        y = I(!1),
        { data: l, error: c } =
          (([n, s] = ht(async () =>
            Tt("pageData", async (A) => {
              var B, Y, K, G, O, v, V, U, Z;
              try {
                let q = null;
                const {
                  domain: oe,
                  page_url: le,
                  additional_route: Pe,
                  step_id: de,
                  funnel_id: ke,
                  version: he,
                  am_id: fe,
                  email: Ne,
                  phone: $e,
                  contact_id: Me,
                  blogSearch: be,
                } = o.query;
                (t.value.contactId = Me), (t.value.email = Ne);
                let Q = $e;
                Q != null &&
                  Q.startsWith(" ") &&
                  (Q = "+" + Q.slice(1, Q.length)),
                  (t.value.phone = Q),
                  (t.value.domain = oe),
                  (t.value.pageUrl = le),
                  (t.value.affiliateId = fe);
                const Pn = o.path.split("/");
                let kn,
                  xe,
                  ne,
                  j,
                  Ee,
                  Te = !1;
                if ((be && (t.value.blogSearchTerm = String(be)), pi(o.path))) {
                  if (
                    ((q = Pn[Pn.length - 1]), (Te = !0), o.path.includes("/b/"))
                  ) {
                    const F = o.path.split("/b/")[1],
                      we = o.path.split("/b/")[0].split("/");
                    (t.value.blogSlug = F), (q = we[we.length - 1]);
                  }
                  if (o.path.includes("/c/")) {
                    const { categorySlug: F } = o.params,
                      we = o.path.split("/c/")[0].split("/");
                    (t.value.categoryUrlSlug = String(F)),
                      (q = we[we.length - 1]);
                  }
                }
                if (!Te && Object.keys(o.query).length === 0)
                  throw Be({
                    statusCode: 404,
                    statusMessage: "Page not found",
                  });
                if (((ne = void 0), ne)) {
                  if (ne.href.includes("/b/")) {
                    const se = ne.href.split("/b/")[1];
                    t.value.blogSlug = se;
                  }
                  if (ne.href.includes("/c/")) {
                    let se = ne.href.split("/c/")[1];
                    t.value.blogSlug &&
                      (se = se.replace(`/b/${t.value.blogSlug}`, "")),
                      (t.value.categoryUrlSlug = se);
                  }
                  if (((j = ne.pathname), (xe = ne.hostname), !xe || !j))
                    throw Be({
                      statusCode: 404,
                      statusMessage:
                        "Sorry, we can't find the page you were looking for",
                    });
                  (j = j.split("/b/")[0]),
                    (j = j.split("/c/")[0]),
                    (Ee = j.length > 1 && j.endsWith("/") ? j.slice(0, -1) : j);
                  const F = j.split("/")[1];
                  Ee = F ? `/${F}` : "/";
                }
                const ge = {
                  additionalRoute: Pe === "true",
                  stepId: de === "undefined" || de === void 0 ? "" : de,
                  funnelId: ke,
                  ...(he && { versionId: he }),
                };
                if (Te) ge.pageId = q;
                else {
                  if (["/undefined"].includes(Ee))
                    throw Be({
                      statusCode: 404,
                      statusMessage:
                        "Sorry, we can't find the page you were looking for",
                    });
                  (ge.domain = xe), (ge.path = Ee);
                }
                console.log(`Get Page Params:${JSON.stringify(ge)}`);
                let m;
                try {
                  m = (await Mt.getPage(ge)).data;
                } catch (F) {
                  throw (
                    (console.info(
                      `failed to get data params:${JSON.stringify(ge)}`
                    ),
                    Be({
                      statusCode:
                        ((B = F == null ? void 0 : F.response) == null
                          ? void 0
                          : B.status) || 500,
                      statusMessage: `${
                        ((Y = F == null ? void 0 : F.data) == null
                          ? void 0
                          : Y.msg) || ""
                      }`,
                    }))
                  );
                }
                if (m != null && m.redirect && !m.url)
                  throw new Error("Url missing!");
                m.pageMeta && (m.pageMeta.isPreviewUrl = Te);
                const Ze =
                  (G =
                    (K = m == null ? void 0 : m.general) == null
                      ? void 0
                      : K.general) == null
                    ? void 0
                    : G.fontsToLoad;
                Ze && ((kn = Nt(Ze)), (t.value.fontsToLoad = Ze));
                const ot =
                  (v =
                    (O = m == null ? void 0 : m.general) == null
                      ? void 0
                      : O.general) == null
                    ? void 0
                    : v.pageStyles;
                (U =
                  (V = m == null ? void 0 : m.general) == null
                    ? void 0
                    : V.general) == null || delete U.pageStyles;
                const lt =
                    ` 

 ` +
                    m.pageStyles +
                    `

` +
                    ot,
                  je = m.sections,
                  Qe = [Wa()];
                je &&
                  je.length &&
                  (Qe.push(...je), (Qe[0].child = m.sectionsToMain));
                let Ce = m.popups;
                if (
                  ((Ce = Array.isArray(Ce) ? Ce : [Ce]),
                  (t.value.funnelId = m.funnelId),
                  (t.value.funnelDomain = m.funnelDomain),
                  (t.value.stepId = m.stepId),
                  (t.value.locationId = m.locationId),
                  (t.value.locationCode = m.locationCode),
                  (t.value.funnelPageId = m.pageId),
                  (t.value.funnelNextStep = m.nextStep),
                  (t.value.funnelNextPageId = m.nextPageId),
                  (t.value.stripePublishableKey = m.stripePublishableKey),
                  (t.value.paypalPublishableKey = m.paypalPublishableKey),
                  (t.value.enablePaymentElement = m.enablePaymentElement),
                  (t.value.merchantLoginId = m.merchantLoginId),
                  (t.value.merchantPublicClientKey = m.merchantPublicClientKey),
                  (t.value.enablePaymentElement = m.enablePaymentElement),
                  (t.value.merchantAccountId = m.merchantAccountId),
                  (t.value.stripeAccountId = m.stripeAccountId),
                  (t.value.isLivePaymentMode = m.isLivePaymentMode),
                  (t.value.orderFormVersion = m.orderFormVersion),
                  (t.value.funnelName = m.funnelName),
                  (t.value.funnelSteps = m.funnelSteps),
                  (t.value.pageType = m.type),
                  (t.value.defaultPaymentProvider = m.defaultPaymentProvider),
                  (t.value.imageOptimizationEnabled =
                    m.imageOptimizationEnabled === void 0 ||
                    m.imageOptimizationEnabled === !0),
                  (t.value.nmiMerchantGatewayId = m.nmiMerchantGatewayId),
                  (t.value.nmiMerchantPublicKey = m.nmiMerchantPublicKey),
                  (t.value.version = m.version || void 0),
                  (t.value.currency = m.currencyCode
                    ? (Z = nn[m.currencyCode]) == null
                      ? void 0
                      : Z.code
                    : "USD"),
                  m.settings)
                ) {
                  const { settings: F } = m.settings;
                  F && (t.value.defaultSettings = F);
                }
                return {
                  elements: Qe,
                  popup: Ce,
                  fontsToLoad: kn,
                  pStyle: lt,
                  meta: m.pageMeta || {
                    title: "",
                    description: "",
                    author: "",
                    imageUrl: "",
                    isPreviewUrl: Te,
                  },
                  domainName: xe,
                  pageUrl: Ee,
                  pageId: m.pageId,
                  pageName: m.pageName,
                  locationId: m.locationId,
                  headerCode: m.headerCode,
                  footerCode: m.footerCode,
                  favicon:
                    m.favicon ||
                    "https://stcdn.leadconnectorhq.com/funnel/icon/favicon.ico",
                  globalHeadTrackingCode: m.globalHeadTrackingCode,
                  globalBodyTrackingCode: m.globalBodyTrackingCode,
                  funnelId: m.funnelId,
                  funnelName: m.funnelName,
                  stepId: m.stepId,
                  affiliateId: fe,
                };
              } catch (q) {
                return (
                  console.info(`path: ${o.path} Error caught: ${q.message}`),
                  { error: q }
                );
              }
            })
          )),
          (n = await n),
          s(),
          n),
        E = I();
      E.value =
        (Le = (Ae = l.value) == null ? void 0 : Ae.meta) == null
          ? void 0
          : Le.title;
      const f = I([
          ...Nn({
            title:
              (cn =
                (un = (De = l.value) == null ? void 0 : De.meta) == null
                  ? void 0
                  : un.title) != null
                ? cn
                : "",
            description:
              (gn =
                (dn = (mn = l.value) == null ? void 0 : mn.meta) == null
                  ? void 0
                  : dn.description) != null
                ? gn
                : "",
            image:
              (_n = (pn = l.value) == null ? void 0 : pn.meta) != null &&
              _n.imageUrl
                ? Ge(
                    (yn = (vn = l.value) == null ? void 0 : vn.meta) == null
                      ? void 0
                      : yn.imageUrl
                  )
                : "",
            author:
              (bn =
                (fn = (hn = l.value) == null ? void 0 : hn.meta) == null
                  ? void 0
                  : fn.author) != null
                ? bn
                : "",
            keywords:
              (Cn =
                (Tn = (En = l.value) == null ? void 0 : En.meta) == null
                  ? void 0
                  : Tn.keywords) != null
                ? Cn
                : "",
            type: "website",
            customMeta:
              ((In = (wn = l.value) == null ? void 0 : wn.meta) == null
                ? void 0
                : In.customMeta) || [],
            isPreviewUrl:
              (On =
                (Sn = (Rn = l.value) == null ? void 0 : Rn.meta) == null
                  ? void 0
                  : Sn.isPreviewUrl) != null
                ? On
                : "",
          }),
        ]),
        S = (A) => {
          var v, V, U, Z, q, oe, le, Pe, de, ke, he, fe, Ne, $e, Me, be, Q;
          const {
            title: B,
            description: Y,
            image: K,
            keywords: G,
            type: O,
          } = A;
          (E.value = B),
            (f.value = Nn({
              title:
                B ||
                ((V = (v = l.value) == null ? void 0 : v.meta) == null
                  ? void 0
                  : V.title),
              description:
                Y ||
                ((Z = (U = l.value) == null ? void 0 : U.meta) == null
                  ? void 0
                  : Z.description),
              image:
                K ||
                ((oe = (q = l.value) == null ? void 0 : q.meta) == null
                  ? void 0
                  : oe.imageUrl)
                  ? Ge(
                      K ||
                        ((Pe = (le = l.value) == null ? void 0 : le.meta) ==
                        null
                          ? void 0
                          : Pe.imageUrl)
                    )
                  : "",
              author:
                (he =
                  (ke = (de = l.value) == null ? void 0 : de.meta) == null
                    ? void 0
                    : ke.author) != null
                  ? he
                  : {},
              keywords:
                G ||
                ((Ne = (fe = l.value) == null ? void 0 : fe.meta) == null
                  ? void 0
                  : Ne.keywords),
              type: O,
              customMeta:
                ((Me = ($e = l.value) == null ? void 0 : $e.meta) == null
                  ? void 0
                  : Me.customMeta) || [],
              isPreviewUrl:
                (Q = (be = l.value) == null ? void 0 : be.meta) == null
                  ? void 0
                  : Q.isPreviewUrl,
            }));
        };
      i.$on("changeMeta", S),
        Ct({
          link: [
            {
              rel: "preload",
              as: "style",
              href: (An = l.value) == null ? void 0 : An.fontsToLoad,
            },
            {
              rel: "stylesheet",
              href: (Ln = l.value) == null ? void 0 : Ln.fontsToLoad,
              media: "print",
              onload: "this.media='all'",
            },
            {
              rel: "preload",
              as: "style",
              integrity: Hn,
              href: Fn,
              crossorigin: "anonymous",
            },
            {
              rel: "preload",
              as: "style",
              integrity: Gn,
              href: zn,
              crossorigin: "anonymous",
            },
            {
              rel: "preload",
              as: "style",
              integrity: Vn,
              href: Kn,
              crossorigin: "anonymous",
            },
            {
              rel: "stylesheet",
              integrity: Hn,
              href: Fn,
              crossorigin: "anonymous",
            },
            {
              rel: "stylesheet",
              integrity: Gn,
              href: zn,
              crossorigin: "anonymous",
            },
            {
              rel: "stylesheet",
              integrity: Vn,
              href: Kn,
              crossorigin: "anonymous",
            },
            { rel: "icon", href: (Dn = l.value) == null ? void 0 : Dn.favicon },
          ],
          title: E,
          meta: f,
          script: [],
        }),
        l.value && l.value.error && ft(l.value.error);
      const C = I(),
        u = I(),
        g = I(),
        p = I();
      l.value &&
        ((C.value = l.value.globalHeadTrackingCode),
        (u.value = l.value.globalBodyTrackingCode),
        (g.value = l.value.headerCode),
        (p.value = l.value.footerCode));
      const d = I(),
        _ = D(() => t.value.locationId),
        R = D(() => t.value.funnelId),
        P = D(() => t.value.funnelName),
        z = D(() => t.value.stepId),
        W = D(() => t.value.funnelPageId),
        k = I();
      me(`${C.value} ${g.value}`);
      function X(A) {
        A = A || window.event;
        const B = A.relatedTarget || A.toElement,
          Y = A.clientX,
          K = A.clientY;
        (!B || B.nodeName === "HTML") &&
          (Y <= 0 || K <= 0) &&
          (i.$emit("show-popup-on-mouseout"),
          document.removeEventListener("mouseout", ce, !1));
      }
      function ce(A) {
        X(A);
      }
      function ve() {
        const A = /Headless/.test(navigator.userAgent);
        W.value &&
          !A &&
          (xt(_.value, "funnel", W.value, k.value, void 0, void 0, {
            funnel: {
              name: P.value,
              id: R.value,
              stepId: z.value,
              pageId: W.value,
            },
          }),
          (window.attribution = {
            locationId: _.value,
            parentId: W.value,
            parentName: k.value,
            type: "funnel",
          }));
      }
      function me(A) {
        if (!A) return;
        const B = new DOMParser();
        A = A.replace(
          /<noscript\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/noscript>/gi,
          ""
        );
        const Y = B.parseFromString(A, "text/html"),
          K = Y.getElementsByTagName("head")[0].children;
        for (let G = 0; G < K.length; G++) {
          const O = K[G];
          if (O.localName === "script") {
            const v = document.createElement("script");
            O.type ? (v.type = O.type) : (v.type = "text/javascript"),
              O.innerHTML && (v.innerHTML = O.innerHTML),
              O.src && (v.src = O.src),
              O.async && (v.async = O.async),
              document.head.appendChild(v);
          } else if (O.localName === "style") {
            const v = document.createElement("style");
            (v.innerHTML = O.innerHTML),
              (v.type = "text/css"),
              document.head.appendChild(v);
          } else if (O.localName === "link") {
            const v = document.createElement("link");
            (v.rel = O.rel),
              (v.type = O.type),
              (v.title = O.title),
              (v.href = O.href),
              document.head.appendChild(v);
          } else if (O.localName === "meta") {
            const v = document.createElement("meta");
            (v.name = O.name),
              (v.content = O.content),
              document.head.appendChild(v);
          }
        }
        d.value = Y.getElementsByTagName("body")[0].innerHTML;
      }
      const ye = I(),
        Oe = I(0);
      return (
        J(async () => {
          var K, G, O;
          (y.value = !0),
            ye.value &&
              (window.ResizeObserver || Pi(),
              new ResizeObserver((v) => {
                var V;
                for (const U of v) {
                  const Z =
                    (V = U.borderBoxSize) == null ? void 0 : V[0].inlineSize;
                  typeof Z == "number" &&
                    Z !== Oe.value &&
                    ((Oe.value = Z),
                    setTimeout(() => {
                      !t.value.blogSlug &&
                        !window.location.hash &&
                        window.scrollTo(0, 0);
                    }, 500));
                }
              }).observe(ye.value)),
            setTimeout(() => {
              const v = "1024px",
                V = window.matchMedia(`(max-width: ${v})`);
              (t.value.mobileDevice = V.matches),
                V.addListener((U) => (t.value.mobileDevice = U.matches));
            }, 3e3),
            await Bt(),
            ((K = t.value) != null && K.locationId) ||
              (console.log("****************  Invalid state ****************"),
              console.log(t.value));
          const A = pe("msgsndr_id", {
            path: "/",
            expires: $n().add(365, "days").toDate(),
          });
          A.value || (A.value = Et());
          const B = o.query;
          if (B.marketplace) {
            const v = pe("_mp", {
              path: "/",
              expires: $n().add(365, "days").toDate(),
            });
            v.value = B.marketplace;
          }
          if (
            ((window.onpageshow = function (v) {
              v.persisted && window.location.reload();
            }),
            window.location.hash &&
              setTimeout(function () {
                var v = window.location.hash;
                (window.location.hash = ""), (window.location.hash = v);
              }, 300),
            document.addEventListener("mouseout", ce, !1),
            !/Headless/.test(navigator.userAgent))
          ) {
            const { data: v } = kt({
                domain: (G = l.value) == null ? void 0 : G.domainName,
                pageUrl: (O = l.value) == null ? void 0 : O.pageUrl,
                fingerprint: A.value,
                eventType: "page_view",
              }),
              V = bt(v, (U) => {
                A.value !== U.fingerprint && (A.value = U.fingerprint), V();
              });
          }
          if ((o.query.notrack || ve(), B.am_id))
            try {
              console.log("Tracking affiliate!");
              let v = "";
              v = window.location.href;
              const V = {
                  locationId: t.value.locationId,
                  funnelId: t.value.funnelId,
                  amId: B.am_id,
                  fingerprint: pe("am_fingerprint").value || "",
                  accessUrl: v,
                },
                U = await gi.ValidateAffiliateCampaign(V);
              if (U.valid && U.fingerprint && U.timestamp) {
                const { fingerprint: Z, timestamp: q } = U,
                  oe = pe("am_fingerprint", {
                    expires: new Date(q),
                    path: "/",
                  }),
                  le = pe("am_id", { expires: new Date(q), path: "/" });
                (oe.value = Z), (le.value = B.am_id);
              }
            } catch {
              console.log("Failed to add affiliate cookie!");
            }
        }),
        We(() => {
          i.$off("changeMeta", S);
        }),
        (A, B) => {
          var K, G;
          const Y = st;
          return a(l).error
            ? h("", !0)
            : (r(),
              T(
                "div",
                {
                  key: 0,
                  style: ue({ visibility: a(y) ? "visible" : "hidden" }),
                  ref_key: "index",
                  ref: ye,
                },
                [
                  H(ci),
                  H(ti, { elements: a(l).elements }, null, 8, ["elements"]),
                  H(Va, { elements: a(l).popup }, null, 8, ["elements"]),
                  H(
                    Y,
                    {
                      type: "text/css",
                      children: (K = a(l)) == null ? void 0 : K.pStyle,
                    },
                    null,
                    8,
                    ["children"]
                  ),
                  H(
                    za,
                    {
                      elements: (G = a(l)) == null ? void 0 : G.elements,
                      class: "hl_page-preview--content",
                    },
                    null,
                    8,
                    ["elements"]
                  ),
                  a(Mn)(a(u))
                    ? h("", !0)
                    : (r(),
                      b(Un, { key: 0, id: "gb-track", code: a(u) }, null, 8, [
                        "code",
                      ])),
                  a(Mn)(a(p))
                    ? h("", !0)
                    : (r(),
                      b(Un, { key: 1, id: "ft-track", code: a(p) }, null, 8, [
                        "code",
                      ])),
                ],
                4
              ));
        }
      );
    },
  }),
  Yi = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ki },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export {
  re as E,
  Gt as I,
  te as S,
  qt as _,
  Xn as a,
  Bn as b,
  Wi as c,
  nn as d,
  Yi as e,
  pi as i,
  Vi as t,
  Ya as u,
};
