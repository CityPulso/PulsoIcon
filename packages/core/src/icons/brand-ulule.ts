import { icon } from "../icon.js";

// Drawn after Simple Icons "ulule" (CC0-1.0). Ulule is a trademark of its owner.
export const BrandUlule = icon("BrandUlule", "brand-ulule", {
  nodes: [
    ["path", { d: "M4 3l2.5 3.5M20 3l-2.5 3.5" }, { r: "swing", a: 6, o: [12, 6] }],
    ["circle", { cx: "12", cy: "13", r: "8.5" }],
    ["circle", { cx: "8.5", cy: "12.5", r: "2.5" }, { r: "blink", d: 0.1, o: [12, 12.5] }],
    ["circle", { cx: "15.5", cy: "12.5", r: "2.5" }, { r: "blink", d: 0.1, o: [12, 12.5] }],
    ["path", { d: "M8.5 12h.01M15.5 12h.01" }, { r: "blink", d: 0.1, o: [12, 12.5] }],
  ],
});
