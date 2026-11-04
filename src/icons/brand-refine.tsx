import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "refine" (CC0-1.0). Refine is a trademark of its owner.
export const BrandRefine = createIcon("BrandRefine", "brand-refine", {
  nodes: [
    ["path", { d: "M12 2l8.66 5v10L12 22l-8.66-5V7z" }],
    ["rect", { x: "9.5", y: "6", width: "5", height: "12", rx: "2.5" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M12 9h.01" }, { r: "slide", x: 0, y: 1, a: 5, d: 0.1 }],
  ],
});
