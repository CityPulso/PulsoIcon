import { icon } from "../icon.js";

// Drawn after Simple Icons "xo" (CC0-1.0). XO is a trademark of its owner.
export const BrandXo = icon("BrandXo", "brand-xo", {
  nodes: [
    ["path", { d: "M2 7l7 10M9 7l-7 10" }, { r: "draw", o: [5.5, 12] }],
    ["circle", { cx: "17", cy: "12", r: "5" }, { r: "press", d: 0.1, a: 0.08, o: [17, 12] }],
    ["path", { d: "M17 14.25l-1.6-1.6a1.05 1.05 0 0 1 1.6-1.35 1.05 1.05 0 0 1 1.6 1.35z" }, { r: "beat", d: 0.15, o: [17, 12.75] }],
  ],
});
