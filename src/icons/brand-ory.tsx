import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "ory" (CC0-1.0). Ory is a trademark of its owner.
export const BrandOry = createIcon("BrandOry", "brand-ory", {
  nodes: [
    ["path", { d: "M7.5 7.5V5.5L12 3l4.5 2.5v2" }, { r: "slide", x: 0, y: -1, a: 1, o: [12, 5] }],
    ["circle", { cx: "12", cy: "12", r: "3.5" }, { r: "pulse", a: 0.12, o: [12, 12] }],
    ["path", { d: "M7.5 16.5v2L12 21l4.5-2.5v-2" }, { r: "slide", x: 0, y: 1, a: 1, o: [12, 19] }],
  ],
});
