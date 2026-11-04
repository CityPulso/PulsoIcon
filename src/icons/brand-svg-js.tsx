import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "svgdotjs" (CC0-1.0). SVG.js is a trademark of its owner.
export const BrandSvgJs = createIcon("BrandSvgJs", "brand-svg-js", {
  nodes: [
    ["polygon", { points: "12 2 22 12 12 22 2 12" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M9.5 8.5c4 0 0 7 5 7" }, { r: "draw", d: 0.1 }],
    ["circle", { cx: "9.5", cy: "8.5", r: "1" }, { r: "pop", d: 0.05, o: [9.5, 8.5] }],
    ["circle", { cx: "14.5", cy: "15.5", r: "1" }, { r: "pop", d: 0.25, o: [14.5, 15.5] }],
  ],
});
