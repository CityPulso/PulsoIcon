import { icon } from "../icon.js";

// Drawn after Simple Icons "ripple" (CC0-1.0). Ripple is a trademark of its owner.

export const BrandRipple = icon("BrandRipple", "brand-ripple", {
  nodes: [
    ["circle", { cx: "6", cy: "6", r: "2.5" }, { r: "pop", o: [6, 6] }],
    ["circle", { cx: "18", cy: "12", r: "2.5" }, { r: "pop", d: 0.1, o: [18, 12] }],
    ["circle", { cx: "6", cy: "18", r: "2.5" }, { r: "pop", d: 0.2, o: [6, 18] }],
    ["path", { d: "M8.5 6c3.5 0 3.5 6 7 6M8.5 18c3.5 0 3.5-6 7-6" }, { r: "draw", d: 0.1 }],
  ],
});
