import { icon } from "../icon.js";

export const Birdhouse = icon("Birdhouse", "birdhouse", {
  svg: { r: "swing", a: 6, o: [12, 2] },
  nodes: [
    ["path", { d: "M12 18v4" }],
    ["path", { d: "m17 18 1.956-11.468" }],
    ["path", { d: "m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8" }],
    ["path", { d: "M4 18h16" }],
    ["path", { d: "M7 18 5.044 6.532" }],
    ["circle", { cx: "12", cy: "10", r: "2" }, { r: "pop", d: 0.2, o: [12, 10] }],
  ],
});
