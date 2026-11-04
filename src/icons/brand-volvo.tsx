import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "volvo" (CC0-1.0). Volvo is a trademark of its owner.
export const BrandVolvo = createIcon("BrandVolvo", "brand-volvo", {
  nodes: [
    ["circle", { cx: "10.5", cy: "13.5", r: "7.5" }],
    ["path", { d: "M16 8l5-5M16 3h5v5" }, { r: "slide", x: 1, y: -1, a: 1.2 }],
    ["path", { d: "M6 13.5h9" }, { r: "draw", d: 0.15 }],
  ],
});
