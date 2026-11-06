import { icon } from "../icon.js";

// Drawn after Simple Icons "composer" (CC0-1.0). Composer is a trademark of its owner.
export const BrandComposer = icon("BrandComposer", "brand-composer", {
  nodes: [
    ["circle", { cx: "12", cy: "7", r: "2.5" }],
    ["path", { d: "M8.5 21v-5.5a3.5 3.5 0 0 1 7 0V21" }],
    ["path", { d: "M8.5 14.5 5 10 4 5" }, { r: "swing", a: 12, o: [8.5, 14.5] }],
    ["path", { d: "M15.5 14.5 19 10l1-5M20 5l1.5-2.5" }, { r: "swing", a: -12, d: 0.1, o: [15.5, 14.5] }],
  ],
});
