import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "wemo" (CC0-1.0). WEMO is a trademark of its owner.
export const BrandWemo = createIcon("BrandWemo", "brand-wemo", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }],
    ["path", { d: "M5.5 6.5l1 4 1.5-3 1.5 3 1-4" }, { r: "draw" }],
    ["path", { d: "M13.5 8.5h4a2 2 0 1 0-.6 1.4" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M5.5 17.5v-2.75a1.25 1.25 0 0 1 2.5 0v2.75-2.75a1.25 1.25 0 0 1 2.5 0v2.75" }, { r: "draw", d: 0.2 }],
    ["circle", { cx: "15.5", cy: "15.5", r: "2" }, { r: "draw", d: 0.3 }],
  ],
});
