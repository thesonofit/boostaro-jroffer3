import { S as v } from "./components.9404ac9d.js";
import { u as _ } from "./composables.52a41ef4.js";
import {
  d as b,
  U as k,
  r as d,
  o as S,
  g as i,
  c as h,
  h as s,
  e as y,
  j as x,
  b as B,
  f as C,
  a2 as I,
  a as m,
} from "./entry.1f1c7eda.js";
import { u as w } from "./index.915ec9ba.js";
import { g as U } from "./helpers.2426d31a.js";
import "./v4.48ec93ae.js";
import "./HLConst.c4c5e8b3.js";
const E = b({
  __name: "default",
  setup(N) {
    const { locale: g } = k(),
      r = w();
    _({ htmlAttrs: { lang: g } });
    const n = d();
    let l = d(1024);
    S(() => {
      var o, a, t, e;
      (n.value =
        (t =
          (a =
            (o = r == null ? void 0 : r.value) == null
              ? void 0
              : o.defaultSettings) == null
            ? void 0
            : a.background) != null
          ? t
          : {}),
        (l.value =
          (e = window == null ? void 0 : window.innerWidth) != null ? e : 1024);
    });
    const p = i(() => {
        var o, a, t, e;
        return (e =
          (t =
            (a = (o = n.value) == null ? void 0 : o.bgImage) == null
              ? void 0
              : a.value) == null
            ? void 0
            : t.options) != null
          ? e
          : "bgCover";
      }),
      f = i(() => {
        var a, t, e;
        return `
      .bg-fixed::before {
        background: url(${U(
          (e =
            (t = (a = n.value) == null ? void 0 : a.bgImage) == null
              ? void 0
              : t.value) == null
            ? void 0
            : e.url,
          l.value
        )}) !important;
      }`;
      });
    return (o, a) => {
      var e, u, c;
      const t = v;
      return (
        m(),
        h("div", null, [
          (c =
            (u = (e = s(n)) == null ? void 0 : e.bgImage) == null
              ? void 0
              : u.value) != null && c.options
            ? (m(),
              y(t, { key: 0, type: "text/css", children: s(f) }, null, 8, [
                "children",
              ]))
            : x("", !0),
          B("div", { class: C(["bg-fixed", s(p)]) }, null, 2),
          I(o.$slots, "default"),
        ])
      );
    };
  },
});
export { E as default };
