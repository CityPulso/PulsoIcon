import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "weasyl" (CC0-1.0). Weasyl is a trademark of its owner.
export const BrandWeasyl = createIcon("BrandWeasyl", "brand-weasyl", {
  nodes: [
    ["ellipse", { cx: "12", cy: "14", rx: "10", ry: "6.5" }, { r: "press", a: 0.04, o: [12, 14] }],
    ["path", { d: "M8 11.5l1.5 5 2.5-3.5 2.5 3.5 1.5-5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M11 7.5c-.5-2 .5-4 3-5" }, { r: "sway", a: 10, o: [11, 7.5] }],
  ],
});
