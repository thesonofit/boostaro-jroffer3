import { k as C } from "./entry.1f1c7eda.js";
import { u as l } from "./v4.48ec93ae.js";
import { $ as N, T as I } from "./helpers.2426d31a.js";
import { N as x } from "./HLConst.c4c5e8b3.js";
var s = ((e) => (
    (e.FUNNEL = "funnel"), (e.WEBSITE = "website"), (e.CALENDAR = "calendar"), e
  ))(s || {}),
  R = ((e) => (
    (e.ONE_STEP_ORDER_FORM = "one_step_order_form"),
    (e.TWO_STEP_ORDER_FORM = "two_step_order_form"),
    (e.UPSELL = "upsell"),
    e
  ))(R || {});
const k = () => ({ channel: "APP", source: "WEB_USER", version: "2021-04-15" }),
  o = (e) => {
    const t = C().public;
    return N.create({ baseURL: e || t.paymentsServiceUrl, headers: k() });
  },
  h = {
    fetchIsCouponApplicable: (e) =>
      o()("payments/coupon/applicable", { params: e, method: "GET" }),
    verifyCoupon: (e) =>
      o()("/payments/coupon/verify", { body: e, method: "POST" }),
    createOrder: (e) => o()("/payments/orders", { body: e, method: "POST" }),
    initiateStripePayment: (e) =>
      o()("/payments/stripe/initiate", { body: e, method: "POST" }),
    verifyStripePayment: (e) =>
      o()("/payments/stripe/verify", { body: e, method: "POST" }),
    authorizeNetOrderPayment: (e) =>
      o()("/payments/authorize-net/order/pay", { body: e, method: "POST" }),
    nmiOrderPayment: (e) =>
      o()("/payments/nmi/order/pay", { body: e, method: "POST" }),
  },
  D = {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": { color: "#aab7c4" },
    },
    invalid: { color: "#fa755a", iconColor: "#fa755a" },
  },
  U = (e) => {
    if (!e.length) return 0;
    let t = 0;
    return (
      e.map((r) => {
        t = (r.showNewPrice ? r.newPrice : r.amount * r.qty) + t;
      }),
      t
    );
  },
  q = async ({
    contactId: e,
    domain: t,
    pageUrl: r,
    locationId: i,
    productPreviewList: n,
    isCouponApplied: g,
    couponCode: P,
    couponSessionId: b,
    store: c,
    subType: v,
  }) => {
    var p, m, u;
    try {
      const a = l("msgsndr_id").value,
        E = l("am_id").value,
        S = l("am_fingerprint").value,
        w = c.funnelName || "funnel";
      t || ((t = window.location.hostname), (r = window.location.pathname));
      const { funnelPageId: T, funnelId: _, stepId: O } = c,
        d = {
          altId: i,
          altType: "location",
          contactId: e,
          source: {
            type: c.pageType === s.FUNNEL ? s.FUNNEL : s.WEBSITE,
            subType: v,
            id: _,
            name: w,
            meta: {
              stepId: O,
              pageId: T,
              domain: t,
              pageUrl: r,
              affiliateManager: { id: E, fingerprint: S },
            },
          },
          products: n.map((y) => ({ id: y._id, qty: y.qty })),
          fingerprint: a,
          trackingId: I(),
        };
      g && ((d.couponCode = P), (d.couponSessionId = b));
      const f = await h.createOrder(d);
      if (!((p = f.order) == null ? void 0 : p._id))
        throw new Error(
          "Something went wrong while creating order. Please try again later."
        );
      return f;
    } catch (a) {
      return (
        console.log(a),
        {
          error: !0,
          message:
            (u =
              (m = a == null ? void 0 : a.response) == null
                ? void 0
                : m._data) == null
              ? void 0
              : u.message,
        }
      );
    }
  },
  B = async ({ orderId: e, locationId: t }) => {
    try {
      if (!e) throw new Error("Order id is required to initiate payment.");
      const r = { altId: t, altType: "location", orderId: e };
      return await h.initiateStripePayment(r);
    } catch (r) {
      return console.log(r), { error: !0 };
    }
  },
  $ = (e, t, r, i) => {
    let n = document.getElementById(e);
    return (
      n ||
        ((n = document.createElement("script")),
        n.setAttribute("id", e),
        (n.src = t),
        r === x &&
          n.setAttribute("data-tokenization-key", i.nmiMerchantPublicKey),
        document.head.appendChild(n)),
      n
    );
  },
  W = (e) => ({
    variant: "inline",
    styleSniffer: !0,
    invalidCss: { color: "#B40E3E" },
    customCss: {
      "border-color": "rgb(209, 213, 219)",
      "border-style": "solid",
      "border-width": "1px",
      "border-radius": "5px",
      "line-height": "24px",
      padding: "8px 12px",
      "font-size": "14px",
      height: "40px",
      "font-family": "sans-serif",
    },
    focusCss: {
      "border-color": "rgb(1, 125, 233)",
      "border-style": "solid",
      "border-width": "1px",
    },
    fields: {
      ccnumber: {
        title: "Card Number",
        placeholder: "1234 1234 1234 1234",
        selector: `#ccnumber-${e}`,
      },
      ccexp: { placeholder: "MM / YY", selector: `#ccexp-${e}` },
      cvv: { placeholder: "CVV", selector: `#cvv-${e}` },
    },
    timeoutCallback: function () {
      console.log(
        "The tokenization didn't respond in the expected timeframe.  This could be due to an invalid or incomplete field or poor connectivity"
      );
    },
  });
export { R as O, h as P, $ as a, q as c, U as g, B as i, W as n, D as s };
