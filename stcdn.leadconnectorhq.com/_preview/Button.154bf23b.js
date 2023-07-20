import {
  d as Ce,
  u as Ue,
  r as p,
  g as Ae,
  o as Fe,
  a as m,
  c as f,
  f as x,
  b as g,
  j as P,
  t as U,
  h as T,
  w as pe,
  v as ve,
  i as Me,
  e as ye,
  F as $e,
  p as be,
  q as ge,
  s as Be,
  _ as qe,
} from "./entry.1f1c7eda.js";
import { u as _ } from "./v4.48ec93ae.js";
import { m as H, R as Ve, T as fe, w as _e } from "./helpers.2426d31a.js";
import { _ as He } from "./MoonLoader.vue_vue_type_style_index_0_lang.3344186a.js";
import { a as Ge, u as ze, S as u, E as O } from "./index.40670b3d.js";
import { f as Je } from "./funnel_event_helper.bd666bbb.js";
import { b as G, g as z, d as J, a as Ke } from "./Attributions.1e04b7e4.js";
import { F as I } from "./FunnelServices.64bbc62b.js";
import { c as We, O as je, P as he } from "./orderform_helpers.57affd17.js";
import { p as Xe } from "./pure.607815f2.js";
import { u as Ye } from "./index.915ec9ba.js";
import { A as K, N as W } from "./HLConst.c4c5e8b3.js";
import "./components.9404ac9d.js";
import "./composables.52a41ef4.js";
import "./index.3a7f695e.js";
const Ze = be(() =>
    ge(
      () => import("./NewPaypalSmartBtnSubscription.ba8dfdd8.js"),
      [
        "./NewPaypalSmartBtnSubscription.ba8dfdd8.js",
        "./paypal-js.67e0b930.js",
        "./index.915ec9ba.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./MoonLoader.vue_vue_type_style_index_0_lang.3344186a.js",
        "./MoonLoader.96f1220d.css",
        "./NewPaypalSmartBtnSubscription.3a186e73.css",
      ],
      import.meta.url
    ).then((i) => i.default || i)
  ),
  Qe = be(() =>
    ge(
      () => import("./NewPaypalSmartBtnOrder.c5ea0583.js"),
      [
        "./NewPaypalSmartBtnOrder.c5ea0583.js",
        "./paypal-js.67e0b930.js",
        "./index.915ec9ba.js",
        "./entry.1f1c7eda.js",
        "./entry.5ab75024.css",
        "./MoonLoader.vue_vue_type_style_index_0_lang.3344186a.js",
        "./MoonLoader.96f1220d.css",
        "./NewPaypalSmartBtnOrder.3a186e73.css",
      ],
      import.meta.url
    ).then((i) => i.default || i)
  ),
  et = ["href", "target"],
  tt = { key: 0, class: "button-icon-start" },
  at = { class: "main-heading-button" },
  nt = { key: 1, class: "button-icon-end" },
  rt = { class: "sub-heading-button" },
  ot = ["disabled", "id"],
  st = { key: 0, class: "button-icon-start" },
  it = { class: "main-heading-button" },
  lt = { key: 1, class: "button-icon-end" },
  ct = { class: "sub-heading-button" },
  ut = { class: "btn-loader-position" },
  dt = { key: 2 },
  mt = { inheritAttrs: !1 },
  pt = Ce({
    ...mt,
    __name: "Button",
    props: {
      element: { type: Object, required: !0 },
      classStyles: { type: Array, required: !0 },
    },
    setup(i) {
      var se, ie, le, ce, ue, de, me;
      const s = i,
        o = Ye(),
        { openPopup: Pe } = Ge(),
        {
          call: Ie,
          createMembershipToken: j,
          mailTo: ke,
          sms: we,
          goToNextFunnelStep: S,
          openUrl: A,
          getNextFunnelStepURL: xe,
        } = ze(),
        Se = Ue(),
        { $bus: X } = Se;
      let R =
        (ie = (se = s.element.extra) == null ? void 0 : se.text) == null
          ? void 0
          : ie.value;
      R = H(R);
      let N =
        (ce = (le = s.element.extra) == null ? void 0 : le.subText) == null
          ? void 0
          : ce.value;
      N = H(N);
      const F = o.value.funnelId,
        Y = o.value.stepId,
        M = o.value.funnelPageId,
        d = o.value.locationId,
        v =
          (me =
            (de = (ue = s.element.extra) == null ? void 0 : ue.productId) ==
            null
              ? void 0
              : de.value) == null
            ? void 0
            : me.id,
        Z = p("avascript: void(0)"),
        c = p(!1),
        Q = p(!1),
        ee = p(""),
        te = p(""),
        $ = p(),
        B = p(!1),
        q = p(""),
        D = p(""),
        h = p(""),
        y = p(!1),
        Ee = Ae(() => {
          var t;
          return (
            ((t = $.value) == null ? void 0 : t.price.type) === "recurring"
          );
        });
      Fe(() => {
        const {
          action: { value: t },
        } = s.element.extra;
        if (t === u.GO_TO_NEXT_STEP || t === u.SELL_PRODUCT) {
          const a = o.value.funnelDomain,
            e = o.value.funnelNextPageId;
          a
            ? (Z.value = `https://${a}${o.value.funnelNextStep}`)
            : e &&
              (Z.value = `https://${window.location.host}/v2/preview/${e}`);
        }
        (t === u.CLICK_TO_CALL ||
          t === u.CLICK_TO_SMS ||
          t === u.GO_TO_URL ||
          t === u.GO_TO_STEP) &&
          ((Q.value = !0), (ee.value = Le())),
          o.value.orderFormVersion === 2 && v && t === u.SELL_PRODUCT && Te();
      });
      async function Te() {
        var t, a, e;
        try {
          const n = await I.findProductById({ productId: v });
          ($.value = { ...n, qty: 1, amount: n.price.amount }),
            (D.value =
              (t = n == null ? void 0 : n.price) == null ? void 0 : t.currency);
        } catch (n) {
          const r =
            ((e =
              (a = n == null ? void 0 : n.response) == null
                ? void 0
                : a.data) == null
              ? void 0
              : e.message) ||
            (n == null ? void 0 : n.message) ||
            "Not able to fetch products!";
          alert(r);
        }
      }
      async function Oe() {
        o.value.videoExistsInPage && X.$emit("handle-redirect");
      }
      async function Re() {
        const { action: t } = s.element.extra;
        switch (t.value) {
          case "openPopup": {
            Pe();
            break;
          }
          case "url": {
            const { visitWebsite: a } = s.element.extra;
            A(a.value);
            break;
          }
          case "hide-element": {
            const { hideElements: a } = s.element.extra;
            Ve(a.value);
            break;
          }
          case "scroll-to-element": {
            const { scrollToElement: a } = s.element.extra;
            X.$emit("scroll-to-element", a.value);
            break;
          }
          case "go-to-next-funnel-step": {
            (c.value = !0), S();
            break;
          }
          case u.GO_TO_STEP: {
            (c.value = !0), S(s.element.extra.stepPath.value);
            break;
          }
          case "sell-product": {
            if (((c.value = !0), o.value.orderFormVersion === 2))
              if (_("provider").value === "pp") B.value = !0;
              else {
                if (
                  o.value.defaultPaymentProvider === K &&
                  o.value.merchantLoginId
                ) {
                  ae(K);
                  return;
                } else if (
                  o.value.defaultPaymentProvider === W &&
                  o.value.nmiMerchantGatewayId
                ) {
                  ae(W);
                  return;
                }
                const a = o.value.stripePublishableKey,
                  e = o.value.stripeAccountId;
                if (a && e)
                  q.value = await Xe.exports.loadStripe(a, {
                    stripeAccount: e,
                  });
                else {
                  alert("Stripe account not found!");
                  return;
                }
                Ne();
              }
            else De();
            break;
          }
          case "click-to-call": {
            const a = s.element.extra;
            Ie(a[O.PHONE_NUMBER].value);
            break;
          }
          case "click-to-sms": {
            const a = s.element.extra;
            we(a[O.PHONE_NUMBER].value);
            break;
          }
          case "click-to-mail": {
            const a = s.element.extra;
            ke(a[O.EMAIL_ADDRESS].value);
            break;
          }
          case u.GO_TO_MEMBERSHIP: {
            try {
              let a;
              const e = o.value.locationId,
                { ct: n, previewUrl: r } = JSON.parse(
                  decodeURIComponent(_(`_mf_${e}`).value)
                );
              location.hostname === "localhost"
                ? (a = `http://localhost:4040/library/?domain=${r}&token=${n}&location_id=${e}`)
                : (a = `${r}/library?&token=${n}&location_id=${e}`),
                A({ url: a, newTab: !1 });
            } catch {
              alert("Sorry something went wrong.");
            }
            break;
          }
          default:
            console.error(`Invalid action type received: ${t.value}`);
        }
      }
      function L(t) {
        var a, e;
        try {
          const n = t == null ? void 0 : t.membershipPurchase;
          n != null && n.length && j(d, n[0].token);
          const r = t == null ? void 0 : t.membershipToken;
          r && j(d, r),
            Be(() => {
              Je("track", "Upsell");
            });
          const {
            saleAction: C,
            stepPath: k,
            visitWebsite: b,
          } = s.element.extra;
          if (!C)
            if (o.value.funnelNextStep) {
              S();
              return;
            } else throw new Error("Redirect not handled");
          if (o.value.orderFormVersion === 2) {
            const l = `_pl_${o.value.funnelId}`,
              w = localStorage.getItem(l);
            if (w) {
              let E = JSON.parse(w);
              E.push($.value), _e(l, JSON.stringify(E));
            }
          } else {
            const l = `_pl_v1_${o.value.funnelId}`,
              w = localStorage.getItem(l);
            if (w) {
              let E = JSON.parse(w);
              E.push(
                (e =
                  (a = s == null ? void 0 : s.element.extra) == null
                    ? void 0
                    : a.productId) == null
                  ? void 0
                  : e.value
              ),
                _e(l, JSON.stringify(E));
            }
          }
          switch (C.value) {
            case "url":
              if (b && b.value && b.value.url) {
                A(b.value);
                break;
              } else throw new Error("Redirect not handled");
            case "step-path":
              if (k && k.value) {
                S(k.value);
                break;
              } else throw new Error("Redirect not handled");
            default:
              if (o.value.funnelNextStep) {
                S();
                break;
              } else throw new Error("Redirect not handled");
          }
        } catch {
          alert(`Order successfully placed! 
 However, Something went wrong while displaying this webpage, please contact the seller.`),
            (c.value = !1);
          return;
        }
      }
      function V() {
        const t = _("msgsndr_id").value,
          a = _("am_id").value,
          e = _("am_fingerprint").value;
        if (!t) throw new Error("Customer details not found");
        const n = {
            eventType: "optin",
            funnelId: F,
            pageId: M,
            stepId: Y,
            domain: o.value.domain,
            pageUrl: o.value.pageUrl,
            fingerprint: t,
          },
          r = {
            lead: !0,
            eventData: G(),
            source: "payment_button",
            pageId: M,
            funnelId: F,
            sessionId: z(d),
            sessionFingerprint: J(d),
            funnelEventData: n,
            fingerprint: t,
          };
        return {
          locationId: d,
          attribution: r,
          selectedProducts: [v],
          amId: a,
          amFingerprint: e,
        };
      }
      async function Ne() {
        try {
          if (!v)
            throw new Error(
              "No product Id found for initiating stripe payment"
            );
          const t = V(),
            a = { ...t, paymentProvider: "stripe" };
          let e;
          if (
            ((e = await I.initiatePaymentForUpsell(a)),
            e.authPaymentIntentId && e.authPaymentIntentClientSecret)
          ) {
            const l = await q.value.confirmCardPayment(
              e.authPaymentIntentClientSecret,
              {
                payment_method: e.paymentMethodId,
                setup_future_usage: "off_session",
              }
            );
            if (l.error) {
              console.error("Failed to confirm card payment!", l.error),
                (y.value = !1);
              return;
            }
            e = await I.initiatePaymentForUpsell({
              ...a,
              authPaymentIntentId: e.authPaymentIntentId,
            });
          }
          const r = e == null ? void 0 : e.invoices.find((l) => l.isPrimary);
          if (r != null && r.clientSecret) {
            const l = await q.value.confirmCardPayment(r.clientSecret, {
              payment_method: e.paymentMethodId,
              setup_future_usage: "off_session",
            });
            if (l.error) {
              console.error("Failed to confirm card payment!", l.error),
                l.error.message && alert(l.error.message);
              return;
            }
          }
          const C = fe(),
            k = { ...t, submissionType: 3, trackingId: C, type: "upsell" };
          e != null && e.invoices && (k.stripe = { invoices: e.invoices });
          const b = await I.verifyPayment(k);
          console.log("verifyPaymentResponseData", b), await L(b);
        } catch (t) {
          (c.value = !1), console.error(t);
        }
      }
      async function ae(t) {
        if (!v)
          throw new Error("No product Id found for initiating stripe payment");
        y.value = !0;
        let a = localStorage.getItem("_ud");
        if ((a && (a = JSON.parse(a)), a != null && a.customer_id)) {
          const e = await We({
            contactId: a == null ? void 0 : a.customer_id,
            domain: o.value.domain,
            pageUrl: o.value.pageUrl,
            locationId: d,
            productPreviewList: [{ _id: v, qty: 1 }],
            store: o.value,
            subType: je.UPSELL,
          });
          let n;
          if (e != null && e.order._id) {
            n = {
              altId: d,
              altType: "location",
              orderId: e == null ? void 0 : e.order._id,
              attribution: {
                eventData: G(),
                sessionId: z(d),
                sessionFingerprint: J(d),
              },
            };
            let r = {};
            switch (t) {
              case K: {
                r = await he.authorizeNetOrderPayment(n);
                break;
              }
              case W: {
                r = await he.nmiOrderPayment(n);
                break;
              }
              default:
                console.log("Invalid payment provider");
                break;
            }
            console.log(r),
              (y.value = !1),
              await L({
                membershipPurchase: r.membershipPurchase,
                membershipToken: r.membershipToken,
              });
          }
        } else throw new Error("Contact details not found");
      }
      async function De() {
        if (!!v)
          try {
            const t = Ke(),
              a = { ...G(), fbEventId: t },
              e = z(d),
              n = J(d),
              r = await I.funnelPayment({
                fingerprint: _("msgsndr_id").value,
                productList: [v],
                locationId: d,
                funnelId: F,
                stepId: Y,
                pageId: M,
                domain: o.value.domain,
                pageUrl: o.value.pageUrl,
                source: "payment_button",
                submissionType: 3,
                eventData: a,
                sessionId: e,
                sessionFingerprint: n,
                _mp: _("_mp").value,
              });
            await L(r);
          } catch (t) {
            console.log(t);
          } finally {
            c.value = !0;
          }
      }
      async function ne(t, a) {
        try {
          if (!v)
            throw new Error(
              "No product Id found for initiating paypal payment"
            );
          (y.value = !0), (h.value = "");
          const n = { ...V(), paymentProvider: "paypal" },
            r = await I.initiatePaymentForUpsell(n);
          if (a.subscription && r.plan_id) return a.subscription.create(r);
          if (a.order && r.id) return r.id;
        } catch (e) {
          console.log(e.message), (h.value = e.message), (y.value = !1);
        }
      }
      async function re(t) {
        try {
          if (!v) throw new Error("No product Id found for paypal payment");
          (y.value = !0), (h.value = "");
          const e = {
              ...V(),
              submissionType: 3,
              trackingId: fe(),
              paypal: {
                facilitatorAccessToken: t.facilitatorAccessToken,
                orderId: t.orderID,
                subscriptionId: t.subscriptionID,
                payerId: t.payerID,
              },
              type: "upsell",
            },
            n = await I.verifyPayment(e);
          console.log("verifyPaymentResponseData", n);
          const r = _("provider");
          (r.value = "pp"), await L(n);
        } catch (a) {
          console.error(a.message), (h.value = a.message), (y.value = !1);
        }
      }
      function oe() {
        (y.value = !1),
          (h.value = "Transaction has been cancelled by the user!");
      }
      function Le() {
        let t = "";
        const {
          action: { value: a },
        } = s.element.extra;
        switch (a) {
          case u.CLICK_TO_CALL: {
            let e = s.element.extra[O.PHONE_NUMBER].value;
            (e = e.replace("tel:", "")), (t = `tel:${e}`);
            break;
          }
          case u.CLICK_TO_SMS: {
            let e = s.element.extra[O.PHONE_NUMBER].value;
            (e = e.replace("sms:", "")), (t = `sms:${e}`);
            break;
          }
          case u.GO_TO_URL: {
            const {
                visitWebsite: { value: e },
              } = s.element.extra,
              { url: n, newTab: r } = e;
            (t = n),
              (t = H(t)),
              t &&
                !t.startsWith("#") &&
                !/^https?:/.test(t) &&
                (t = `https://${t}`),
              (te.value = r ? "_blank" : "");
            break;
          }
          case u.GO_TO_STEP: {
            const e = s.element.extra.stepPath.value;
            t = xe(e);
            break;
          }
        }
        return t;
      }
      return (t, a) => {
        const e = Ze,
          n = Qe;
        return (
          m(),
          f(
            $e,
            null,
            [
              Q.value
                ? (m(),
                  f(
                    "a",
                    {
                      key: 0,
                      href: ee.value,
                      target: te.value,
                      class: x(i.classStyles),
                      onClick: Oe,
                    },
                    [
                      g(
                        "span",
                        {
                          class: x([
                            { "btn-visibility-none": c.value },
                            "main-heading-group",
                          ]),
                        },
                        [
                          i.element.extra.icon !== ""
                            ? (m(), f("span", tt))
                            : P("", !0),
                          g("span", at, U(T(R)), 1),
                          i.element.extra.icon !== ""
                            ? (m(), f("span", nt))
                            : P("", !0),
                        ],
                        2
                      ),
                      i.element.extra.subText && i.element.extra.subText.value
                        ? (m(),
                          f(
                            "span",
                            {
                              key: 0,
                              class: x([
                                { "btn-visibility-none": c.value },
                                "sub-heading-group text-xs font-sans",
                              ]),
                            },
                            [g("span", rt, U(T(N)), 1)],
                            2
                          ))
                        : P("", !0),
                    ],
                    10,
                    et
                  ))
                : pe(
                    (m(),
                    f(
                      "button",
                      {
                        key: 1,
                        disabled: c.value,
                        id: i.element.id,
                        class: x([
                          { "button-disabled": c.value },
                          i.classStyles,
                        ]),
                        onClick: Re,
                      },
                      [
                        g(
                          "div",
                          {
                            class: x([
                              { "btn-visibility-none": c.value },
                              "main-heading-group",
                            ]),
                          },
                          [
                            i.element.extra.icon !== ""
                              ? (m(), f("div", st))
                              : P("", !0),
                            g("div", it, U(T(R)), 1),
                            i.element.extra.icon !== ""
                              ? (m(), f("div", lt))
                              : P("", !0),
                          ],
                          2
                        ),
                        i.element.extra.subText && i.element.extra.subText.value
                          ? (m(),
                            f(
                              "div",
                              {
                                key: 0,
                                class: x([
                                  { "btn-visibility-none": c.value },
                                  "text-xs font-sans",
                                ]),
                              },
                              [g("div", ct, U(T(N)), 1)],
                              2
                            ))
                          : P("", !0),
                        pe(
                          g(
                            "div",
                            ut,
                            [
                              Me(
                                He,
                                {
                                  loading: c.value,
                                  color: "rgb(255, 255, 255)",
                                  size: "30px",
                                },
                                null,
                                8,
                                ["loading"]
                              ),
                            ],
                            512
                          ),
                          [[ve, c.value]]
                        ),
                      ],
                      10,
                      ot
                    )),
                    [[ve, !B.value]]
                  ),
              B.value && D.value
                ? (m(),
                  f("div", dt, [
                    T(Ee)
                      ? (m(),
                        ye(
                          e,
                          {
                            key: 0,
                            initiatePaypalPayment: ne,
                            onApprovePaypalPayment: re,
                            onCancelPaypalPayment: oe,
                            paypalErrorMsg: h.value,
                            processingPayment: y.value,
                            currency: D.value,
                          },
                          null,
                          8,
                          ["paypalErrorMsg", "processingPayment", "currency"]
                        ))
                      : (m(),
                        ye(
                          n,
                          {
                            key: 1,
                            initiatePaypalPayment: ne,
                            onApprovePaypalPayment: re,
                            onCancelPaypalPayment: oe,
                            paypalErrorMsg: h.value,
                            processingPayment: y.value,
                            currency: D.value,
                          },
                          null,
                          8,
                          ["paypalErrorMsg", "processingPayment", "currency"]
                        )),
                  ]))
                : P("", !0),
            ],
            64
          )
        );
      };
    },
  });
const Ot = qe(pt, [["__scopeId", "data-v-e2d4bdb4"]]);
export { Ot as default };
