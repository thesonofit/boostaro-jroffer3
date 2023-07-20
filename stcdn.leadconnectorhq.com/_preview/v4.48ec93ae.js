import {
  u as A,
  r as x,
  N as E,
  O as I,
  B as P,
  K as O,
  h as z,
  P as M,
  Q as B,
} from "./entry.1f1c7eda.js";
const N = decodeURIComponent,
  H = encodeURIComponent,
  V = /; */,
  g = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function j(e, n) {
  if (typeof e != "string")
    throw new TypeError("argument str must be a string");
  let t = {},
    r = n || {},
    i = e.split(V),
    a = r.decode || N;
  for (let o = 0; o < i.length; o++) {
    let l = i[o],
      s = l.indexOf("=");
    if (s < 0) continue;
    let m = l.substr(0, s).trim(),
      p = l.substr(++s, l.length).trim();
    p[0] == '"' && (p = p.slice(1, -1)), t[m] == null && (t[m] = L(p, a));
  }
  return t;
}
function T(e, n, t) {
  let r = t || {},
    i = r.encode || H;
  if (typeof i != "function") throw new TypeError("option encode is invalid");
  if (!g.test(e)) throw new TypeError("argument name is invalid");
  let a = i(n);
  if (a && !g.test(a)) throw new TypeError("argument val is invalid");
  let o = e + "=" + a;
  if (r.maxAge != null) {
    let l = r.maxAge - 0;
    if (isNaN(l) || !isFinite(l))
      throw new TypeError("option maxAge is invalid");
    o += "; Max-Age=" + Math.floor(l);
  }
  if (r.domain) {
    if (!g.test(r.domain)) throw new TypeError("option domain is invalid");
    o += "; Domain=" + r.domain;
  }
  if (r.path) {
    if (!g.test(r.path)) throw new TypeError("option path is invalid");
    o += "; Path=" + r.path;
  }
  if (r.expires) {
    if (typeof r.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    o += "; Expires=" + r.expires.toUTCString();
  }
  if (
    (r.httpOnly && (o += "; HttpOnly"),
    r.secure && (o += "; Secure"),
    r.sameSite)
  )
    switch (
      typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite
    ) {
      case !0:
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return o;
}
function L(e, n) {
  try {
    return n(e);
  } catch {
    return e;
  }
}
const K = () => null;
function F(...e) {
  var D, S, C, _, k, b, U;
  const n = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
  typeof e[0] != "string" && e.unshift(n);
  let [t, r, i = {}] = e;
  if (typeof t != "string")
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  if (typeof r != "function")
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  (i.server = (D = i.server) != null ? D : !0),
    (i.default = (S = i.default) != null ? S : K),
    (i.lazy = (C = i.lazy) != null ? C : !1),
    (i.immediate = (_ = i.immediate) != null ? _ : !0);
  const a = A(),
    o = () => (a.isHydrating ? a.payload.data[t] : a.static.data[t]),
    l = () => o() !== void 0;
  a._asyncData[t] ||
    (a._asyncData[t] = {
      data: x(
        (U =
          (b = o()) != null
            ? b
            : (k = i.default) == null
            ? void 0
            : k.call(i)) != null
          ? U
          : null
      ),
      pending: x(!l()),
      error: x(a.payload._errors[t] ? E(a.payload._errors[t]) : null),
    });
  const s = { ...a._asyncData[t] };
  s.refresh = s.execute = (d = {}) => {
    if (a._asyncDataPromises[t]) {
      if (d.dedupe === !1) return a._asyncDataPromises[t];
      a._asyncDataPromises[t].cancelled = !0;
    }
    if (d._initial && l()) return o();
    s.pending.value = !0;
    const f = new Promise((c, y) => {
      try {
        c(r(a));
      } catch (h) {
        y(h);
      }
    })
      .then((c) => {
        if (f.cancelled) return a._asyncDataPromises[t];
        i.transform && (c = i.transform(c)),
          i.pick && (c = q(c, i.pick)),
          (s.data.value = c),
          (s.error.value = null);
      })
      .catch((c) => {
        var y, h;
        if (f.cancelled) return a._asyncDataPromises[t];
        (s.error.value = c),
          (s.data.value = z(
            (h = (y = i.default) == null ? void 0 : y.call(i)) != null
              ? h
              : null
          ));
      })
      .finally(() => {
        f.cancelled ||
          ((s.pending.value = !1),
          (a.payload.data[t] = s.data.value),
          s.error.value && (a.payload._errors[t] = E(s.error.value)),
          delete a._asyncDataPromises[t]);
      });
    return (a._asyncDataPromises[t] = f), a._asyncDataPromises[t];
  };
  const m = () => s.refresh({ _initial: !0 }),
    p = i.server !== !1 && a.payload.serverRendered;
  {
    const d = M();
    if (d && !d._nuxtOnBeforeMountCbs) {
      d._nuxtOnBeforeMountCbs = [];
      const c = d._nuxtOnBeforeMountCbs;
      d &&
        (I(() => {
          c.forEach((y) => {
            y();
          }),
            c.splice(0, c.length);
        }),
        P(() => c.splice(0, c.length)));
    }
    p && a.isHydrating && l()
      ? (s.pending.value = !1)
      : d &&
        ((a.payload.serverRendered && a.isHydrating) || i.lazy) &&
        i.immediate
      ? d._nuxtOnBeforeMountCbs.push(m)
      : i.immediate && m(),
      i.watch && O(i.watch, () => s.refresh());
    const f = a.hook("app:data:refresh", (c) => {
      if (!c || c.includes(t)) return s.refresh();
    });
    d && P(f);
  }
  const v = Promise.resolve(a._asyncDataPromises[t]).then(() => s);
  return Object.assign(v, s), v;
}
function te(...e) {
  const n = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
  typeof e[0] != "string" && e.unshift(n);
  const [t, r, i] = e;
  return F(t, r, { ...i, lazy: !0 }, null);
}
function q(e, n) {
  const t = {};
  for (const r of n) t[r] = e[r];
  return t;
}
const J = {
  path: "/",
  decode: (e) => B(decodeURIComponent(e)),
  encode: (e) =>
    encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e)),
};
function ne(e, n) {
  var a, o;
  const t = { ...J, ...n },
    r = Q(t) || {},
    i = x(
      (o = r[e]) != null ? o : (a = t.default) == null ? void 0 : a.call(t)
    );
  return (
    O(i, () => {
      G(e, i.value, t);
    }),
    i
  );
}
function Q(e = {}) {
  return j(document.cookie, e);
}
function $(e, n, t = {}) {
  return n == null ? T(e, n, { ...t, maxAge: -1 }) : T(e, n, t);
}
function G(e, n, t = {}) {
  document.cookie = $(e, n, t);
}
let w;
const W = new Uint8Array(16);
function X() {
  if (
    !w &&
    ((w =
      typeof crypto < "u" &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !w)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return w(W);
}
const u = [];
for (let e = 0; e < 256; ++e) u.push((e + 256).toString(16).slice(1));
function Y(e, n = 0) {
  return (
    u[e[n + 0]] +
    u[e[n + 1]] +
    u[e[n + 2]] +
    u[e[n + 3]] +
    "-" +
    u[e[n + 4]] +
    u[e[n + 5]] +
    "-" +
    u[e[n + 6]] +
    u[e[n + 7]] +
    "-" +
    u[e[n + 8]] +
    u[e[n + 9]] +
    "-" +
    u[e[n + 10]] +
    u[e[n + 11]] +
    u[e[n + 12]] +
    u[e[n + 13]] +
    u[e[n + 14]] +
    u[e[n + 15]]
  ).toLowerCase();
}
const Z =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  R = { randomUUID: Z };
function ie(e, n, t) {
  if (R.randomUUID && !n && !e) return R.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || X)();
  if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), n)) {
    t = t || 0;
    for (let i = 0; i < 16; ++i) n[t + i] = r[i];
    return n;
  }
  return Y(r);
}
export { F as a, te as b, ne as u, ie as v };
