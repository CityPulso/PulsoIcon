import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "ariakit" (CC0-1.0). Ariakit is a trademark of its owner.
export const BrandAriakit = createIcon("BrandAriakit", "brand-ariakit", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }],
    ["circle", { cx: "11", cy: "12", r: "5" }, { r: "press", a: 0.04, o: [11, 12] }],
    ["circle", { cx: "13", cy: "12", r: "1.5" }, { r: "slide", x: -1, y: 0, a: 2.5, o: [13, 12] }],
  ],
});
