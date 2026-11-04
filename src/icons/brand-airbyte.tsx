import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "airbyte" (CC0-1.0). Airbyte is a trademark of its owner.
export const BrandAirbyte = createIcon("BrandAirbyte", "brand-airbyte", {
  nodes: [
    ["path", { d: "M10.5 21l7.2-9.5A6.5 6.5 0 1 0 7.5 10" }, { r: "draw" }],
    ["circle", { cx: "13.5", cy: "8.5", r: "2" }, { r: "pop", d: 0.2, o: [13.5, 8.5] }],
    ["path", { d: "M10.5 14.5 6 20.5" }, { r: "slide", d: 0.1, x: -0.6, y: 0.8, a: 1.5 }],
    ["path", { d: "M7 12.5 3 18" }, { r: "slide", d: 0.16, x: -0.6, y: 0.8, a: 1.5 }],
  ],
});
