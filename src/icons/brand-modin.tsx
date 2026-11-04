import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "modin" (CC0-1.0). Modin is a trademark of its owner.
export const BrandModin = createIcon("BrandModin", "brand-modin", {
  nodes: [
    ["path", { d: "M3 7h2M2 12h4M3 17h2" }, { r: "slide", x: -1.5 }],
    ["path", { d: "M10 7h3M17 7h3" }, { r: "slide", d: 0, x: 1 }],
    ["path", { d: "M10 12h3M17 12h3" }, { r: "slide", d: 0.08, x: 1 }],
    ["path", { d: "M10 17h3M17 17h3" }, { r: "slide", d: 0.16, x: 1 }],
  ],
});
