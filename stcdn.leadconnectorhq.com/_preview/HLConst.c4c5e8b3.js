const a = "" + new URL("credit-card.4fc2ed35.svg", import.meta.url).href,
  e = "" + new URL("paypal.ed8f9f72.svg", import.meta.url).href,
  o = "" + new URL("other-card.2fa12702.svg", import.meta.url).href,
  r = {
    COLUMN: "c-column",
    HEADING: "c-heading",
    SUB_HEADING: "c-sub-heading",
    PARAGRAPH: "c-paragraph",
    BULLETLIST: "c-bullet-list",
  },
  i = { MINUTE_TIMER: "minute-timer" },
  n = { SUBSCRIPTION: "subscription", ONETIME: "oneTime" },
  E = {
    IFRAME_RESIZE:
      "https://storage.googleapis.com/builder-preview/iframe/iframeResizer.contentWindow.min.js",
    IFRAME_PIXEL:
      "https://storage.googleapis.com/builder-preview/iframe/pixel.js",
  },
  l = {
    base: {
      color: "#32325d",
      fontSmoothing: "antialiased",
      "::placeholder": { color: "#aab7c4" },
    },
    invalid: { color: "#fa755a", iconColor: "#fa755a" },
  },
  d =
    "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/62beef4f9f43b0c53e585a8f.jpeg",
  s = "credit_card",
  t = "paypal",
  c = "others",
  m = [
    { tabName: "Credit card", icon: a, id: s },
    { tabName: "PayPal", icon: e, id: t },
    { tabName: "Other", icon: o, id: c },
  ],
  I = "authorize-net",
  T = "stripe",
  p = "nmi",
  A = {
    xlarge: 1200,
    large: 900,
    medium: 768,
    tablet: 640,
    small: 480,
    xsmall: 320,
  };
export {
  I as A,
  s as C,
  i as E,
  A as I,
  p as N,
  c as O,
  t as P,
  l as S,
  r as T,
  E as W,
  T as a,
  m as b,
  d as c,
  n as d,
};
