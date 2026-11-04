import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "moq" (CC0-1.0). Moq is a trademark of its owner.
export const BrandMoq = createIcon("BrandMoq", "brand-moq", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M5 14v-3a1.25 1.25 0 0 1 2.5 0v3m0-3a1.25 1.25 0 0 1 2.5 0v3" }, { r: "draw" }],
    ["circle", { cx: "13", cy: "12.5", r: "1.5" }, { r: "pop", d: 0.1, o: [13, 12.5] }],
    ["path", { d: "M19 12.5a1.5 1.5 0 1 0-1.5 1.5M19 11v5.5" }, { r: "draw", d: 0.2 }],
  ],
});
