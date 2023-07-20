import {
  d as c,
  r as p,
  g as s,
  w as m,
  v,
  c as y,
  b as n,
  n as r,
  h as o,
  f as g,
  a as f,
} from "./entry.1f1c7eda.js";
const x = c({
  __name: "MoonLoader",
  props: {
    loading: { type: Boolean, default: !0 },
    color: { type: String, default: "#5dc596" },
    size: { type: String, default: "60px" },
    margin: { type: String, default: "2px" },
    radius: { type: String, default: "100%" },
    customClass: { type: String, default: "" },
  },
  setup(a) {
    const e = a,
      l = p({ height: e.size, width: e.size, borderRadius: e.radius }),
      t = s(() => parseFloat(e.size) / 7),
      i = s(() => ({
        height: t.value + "px",
        width: t.value + "px",
        borderRadius: e.radius,
      })),
      d = s(() => ({
        top: parseFloat(e.size) / 2 - t.value / 2 + "px",
        backgroundColor: e.color,
      })),
      u = s(() => ({ border: t.value + "px solid " + e.color }));
    return (S, h) =>
      m(
        (f(),
        y(
          "div",
          { class: g(["v-spinner", a.customClass]) },
          [
            n(
              "div",
              { class: "v-moon v-moon1", style: r(o(l)) },
              [
                n(
                  "div",
                  { class: "v-moon v-moon2", style: r([o(i), o(d)]) },
                  null,
                  4
                ),
                n(
                  "div",
                  { class: "v-moon v-moon3", style: r([o(l), o(u)]) },
                  null,
                  4
                ),
              ],
              4
            ),
          ],
          2
        )),
        [[v, a.loading]]
      );
  },
});
export { x as _ };
