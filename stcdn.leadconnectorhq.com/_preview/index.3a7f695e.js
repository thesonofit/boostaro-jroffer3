var H = Object.defineProperty;
var q = (t, e, r) =>
  e in t
    ? H(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (t[e] = r);
var p = (t, e, r) => (q(t, typeof e != "symbol" ? e + "" : e, r), r);
import { k as G } from "./entry.1f1c7eda.js";
function f(...t) {
  o("internalLog") && o("internalLog") == "ghl_team" && console.log(t);
}
function J() {
  try {
    return window.self !== window.top;
  } catch {
    return !0;
  }
}
function D(t, e) {
  let r = t;
  if ((t || (r = document.location.href), r && e)) {
    let n = new URL(r);
    f("function guessUrl: ", r, e),
      Object.keys(e).forEach((i) => {
        n.searchParams.has(i) || n.searchParams.append(i, e[i]);
      }),
      f("function guessUrl newer url: ", n.href),
      (r = n.href);
  }
  return !t && J() && (r = document.referrer || r), r;
}
function P(t) {
  const e = {};
  if (!t) return e;
  try {
    return (
      new URL(t).searchParams.forEach((n, i) => {
        e[i] = n;
      }),
      e
    );
  } catch {
    return console.log("full url missing: ", t), e;
  }
}
function o(t, e) {
  const r = P(e || D());
  return t in r ? r[t] : "";
}
function K(t) {
  return o("utm_campaign", t) || o("campaign", t);
}
function j(t) {
  return o("keyword", t) || o("utm_term", t) || o("utm_content", t);
}
function z(t) {
  if (o("gclid", t)) return "adword";
  if (o("msclkid", t)) return "bing";
  if (o("dclid", t)) return "yahoo";
  const e = o("utm_source", t),
    r = K(t);
  return e && e.toLowerCase() == "facebook" && r
    ? "facebook"
    : e && e.toLowerCase() == "fb_ad" && r
    ? "fb_ad"
    : e && e.toLowerCase() == "linkedin_ad" && r
    ? "linkedin_ad"
    : e && e.toLowerCase() == "twitter_ad" && r
    ? "twitter_ad"
    : "";
}
function Q() {
  return `${G().public.REST_API_URLS}/attribution_service`;
}
function k(t, e) {
  const r = o("rf");
  if (r && typeof r == "string" && r == "false") return "";
  let n;
  try {
    e && typeof e == "string" && (n = new URL(e).host);
  } catch {}
  if (t && !t.includes(n)) return t;
  const i = o("hl_referrer");
  return (
    i ||
    (!J() &&
    document.referrer &&
    !document.referrer.includes(document.location.origin)
      ? document.referrer
      : "")
  );
}
function W(t, e) {
  if ((console.log("value : ", t), t === "")) return "direct";
  if (t.includes("google"))
    return e.includes("gclid") ? "google paid" : "google organic";
  if (t.includes("twitter")) return "twitter";
  if (t.includes("bing"))
    return e.includes("msclkid") ? "bing paid" : "bing organic";
  if (t.includes("facebook")) return "facebook";
  if (t.includes("yahoo"))
    return e.includes("dclid") || e.includes("yahoo")
      ? "yahoo paid"
      : "yahoo organic";
  if (t.includes("duckduckgo")) return "duckduckgo";
  {
    const r = document.createElement("a");
    return r.setAttribute("href", t), r.hostname;
  }
}
function _(t) {
  try {
    const e = window[t],
      r = "__storage_test__";
    return e.setItem(r, r), e.removeItem(r), !0;
  } catch {
    return !1;
  }
}
function E(t) {
  if (_("localStorage")) return localStorage.getItem(t);
}
function N(t, e) {
  _("localStorage") && localStorage.setItem(t, e);
}
function v(t) {
  _("localStorage") && localStorage.removeItem(t);
}
function X(t) {
  if (!_("localStorage")) return;
  const e = localStorage.getItem(t);
  if (!e) return null;
  const r = JSON.parse(e);
  return new Date().getTime() > r.expiry
    ? (localStorage.removeItem(t), null)
    : r.value;
}
function a(t) {
  const e = X(t);
  if (e) return e;
  const r = t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
    n = document.cookie.match(new RegExp("(^| )" + r + "=([^;]+)"));
  return n && n[2] ? n[2] : "";
}
function Y(t, e, r) {
  if (!_("localStorage")) return;
  const n = new Date(),
    i = { value: e, expiry: n.getTime() + r };
  localStorage.setItem(t, JSON.stringify(i));
}
function T(t, e, r) {
  if (_("localStorage")) {
    var n = 31536e6;
    r && (n = r * 24 * 60 * 60 * 1e3), Y(t, e, n);
  } else {
    let i = "";
    if (r) {
      let s = new Date();
      s.setTime(s.getTime() + r * 24 * 60 * 60 * 1e3),
        (i = "; expires=" + s.toUTCString());
    }
    document.cookie = t + "=" + (e || "") + i + "; path=/";
  }
}
function I(t, e, r) {
  if (_("localStorage")) r || (r = 1), Y(t, e, r * 60 * 1e3);
  else {
    let n = "";
    if (r) {
      const i = new Date();
      i.setTime(i.getTime() + r * 60 * 1e3),
        (n = "; expires=" + i.toUTCString());
    }
    document.cookie = t + "=" + (e || "") + n + "; path=/";
  }
}
const F = "v2_history",
  U = "v2_contact_session_",
  Z = "v2_session_history_",
  M = "v2_user_session_event_",
  ee = "v3_first_session_event_";
var te = ((t) => (
  (t.Form = "form"),
  (t.Survey = "survey"),
  (t.Calendar = "calendar"),
  (t.OrderForm = "order_form"),
  t
))(te || {});
function h(t) {
  return (t = t || a("location_id")), t ? `${F}_${t}` : F;
}
function d(t) {
  return (t = t || a("location_id")), t ? `${U}${t}_session_id` : `${U}id`;
}
function $(t) {
  return (t = t || a("location_id")), `${Z}${t}`;
}
function x(t) {
  return (t = t || a("location_id")), `${M}${t}_fingerprint`;
}
function O(t) {
  return `${ee}${t}`;
}
function re() {
  return /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(
    navigator.userAgent
  );
}
async function A(t, e) {
  try {
    var r = await fetch(t, {
      method: "POST",
      body: JSON.stringify(e),
      headers: { "Content-Type": "application/json" },
    });
    return await r.json();
  } catch {
    return {};
  }
}
function ne() {
  return a("_fbp");
}
function ie() {
  return a("_fbc");
}
function L(t) {
  if (!t) return null;
  try {
    return JSON.parse(t);
  } catch (e) {
    return console.log(e), null;
  }
}
class se {
  constructor(e, r) {
    p(this, "baseUrl");
    p(this, "locationId");
    p(this, "fingerprint");
    p(this, "type");
    p(this, "parentId");
    p(this, "parentName");
    (this.baseUrl = Q()),
      console.log(this.baseUrl),
      (this.locationId = e),
      (this.fingerprint = r);
  }
  eventData(e, r) {
    let n, i;
    if (this.locationId) {
      let g = E($(this.locationId));
      g && (n = g), (i = a(O(this.locationId)));
    }
    f("function eventData: ", this.locationId, i);
    let s = D(e, i == null ? void 0 : i.url_params);
    return {
      source: W(k(r, e), document.location.href),
      referrer: k(r, e) || (i == null ? void 0 : i.referrer) || "",
      keyword: j(s),
      adSource: z(s),
      url_params: P(s),
      page: { url: s, title: document.title },
      timestamp: Date.now(),
      campaign: K(s),
      contactSessionIds: L(n),
      fbp: ne(),
      fbc: ie(),
    };
  }
  pageVisitData(e, r, n) {
    return (
      f("function pageVisitData: ", e, r, n),
      {
        ...this.eventData(e, r),
        type: "page-visit",
        parentId: o("trigger_link") ? o("trigger_link") : this.parentId || "",
        pageVisitType: o("trigger_link") ? "trigger-link" : this.type || "",
        domain: document.domain,
        version: "v3",
        parentName: this.parentName || "",
        fingerprint: null,
        ...n,
      }
    );
  }
  async store(e, r, n, i, s, g, w) {
    f("extras form script: ", w), (this.locationId = e);
    var R = this.fingerprint || a("fingerprint"),
      c = a(d(e));
    if (((this.type = r), (this.parentId = n), (this.parentName = i), re()))
      return;
    const b = k(g, s);
    if ((c || I(d(e), "temp", 1), c == "temp")) return;
    c ||
      (f(`Not found sessionId so removing older sessions: ${d(e)}`), v(h(e))),
      c && I(d(e), c, 30);
    let l = L(E(h(e)));
    if ((f("function store: history", l), l && l.sessions)) {
      const u = l.sessions[l.sessions.length - 1],
        S = a(O(e));
      let B = D(s, S == null ? void 0 : S.url_params);
      (u.referrer != (k(g, s) || (S == null ? void 0 : S.referrer) || "") ||
        u.campaign != K(B)) &&
        (f(
          `Referrer and campaign change > newReferrer: ${k(
            g,
            s
          )} > old referrer: ${u.referrer}`
        ),
        (l = null),
        (c = null),
        v(h(e)));
    }
    if (l)
      if (c && l && r != "call-swap") {
        f("function store: sessionId & history", c, l);
        var V = l.sessions,
          C = this.pageVisitData(s, g, w);
        f("function store: newSession", C);
        try {
          var m = await A(
            `${this.baseUrl}/user_session_v3/update_session/${c}`,
            { locationId: e, sessions: C }
          );
          (C.fingerprint = m.fingerprint),
            N(h(e), JSON.stringify({ sessions: [...V, C] }));
        } catch (u) {
          console.log(u);
        }
      } else v(h(e)), await this.store(e, r, n, i, s, g);
    else {
      var y = this.pageVisitData(s, g, w);
      f("function store: sessions", y);
      try {
        var m = await A(`${this.baseUrl}/user_session_v3/create_session`, {
          sessions: y,
          initialReferrer: b,
          locationId: e,
          fingerprint: R,
          sessionId: c,
        });
        (!c || c != m.sessionId) && I(d(e), m.sessionId, 30),
          (y.fingerprint = m.fingerprint),
          N(h(e), JSON.stringify({ sessions: [y] }));
        let u = L(E($(e)));
        u
          ? u.ids.push(m.sessionId)
          : ((u = { ids: [m.sessionId] }), I(O(e), y, 30)),
          f("function store: contactSessionIds", u),
          N($(e), JSON.stringify(u));
      } catch (u) {
        console.log(u), v(h(e));
      }
    }
  }
  async create(e, r, n, i, s, g, w) {
    this.locationId = e;
    var R = a(d(e)),
      c = o("sessionId");
    let b = 10;
    (!R || R == "temp") && (b = 100),
      setTimeout(async () => {
        c && T(d(e), c, 365), await this.store(e, r, n, i, s, g, w);
      }, b);
  }
  update(e) {
    const r = e.sessionId || "",
      n = e.locationId || "";
    (this.locationId = n), r && (I(d(n), r, 30), v($(n)));
  }
  getCookie(e) {
    return a(e);
  }
  setCookies(e, r) {
    e && r && T(e, r);
  }
  getSessionId(e) {
    return a(d(e || this.locationId));
  }
  getUserFingerprint(e) {
    return a(x(e || this.locationId));
  }
  setUserFingerprint(e, r) {
    return T(x(e || this.locationId), r);
  }
}
const ae = async () => {
  var t = typeof window > "u" ? {} : window,
    e = t.userSessionAttribution;
  e || (e = t.userSessionAttribution = new se());
};
export { te as A, ae as s };
