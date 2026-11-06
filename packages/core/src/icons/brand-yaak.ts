import { icon } from "../icon.js";

// Drawn after Simple Icons "yaak" (CC0-1.0). Yaak is a trademark of its owner.
export const BrandYaak = icon("BrandYaak", "brand-yaak", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 6.5c-1 2.5 0 5 3 5.5" }, { r: "swing", d: 0.05, a: 10, o: [10, 12] }],
    ["path", { d: "M10 11c.5-2.5 2.5-4 5-4 2.5 0 4 1.5 4 4.5v1.5c0 2-1.5 3.5-3.5 3.5H14l-2 2.5" }, { r: "tilt", d: 0.05, a: 6, o: [12, 17] }],
    ["path", { d: "M15.5 10.5h.01" }, { r: "blink", d: 0.2, o: [15.5, 10.5] }],
  ],
});
