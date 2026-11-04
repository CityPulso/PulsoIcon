import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "nushell" (CC0-1.0). Nushell is a trademark of its owner.
export const BrandNushell = createIcon("BrandNushell", "brand-nushell", {
  nodes: [
    ["path", { d: "M2.5 16V9.5m0 2.5a2.5 2.5 0 0 1 5 0v4" }, { r: "draw" }],
    ["path", { d: "M10 9.5v4a2.5 2.5 0 0 0 5 0m0-4v6.5" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M17.5 8.5l4 3.5-4 3.5" }, { r: "slide", d: 0.25, x: 1, y: 0, a: 1.5 }],
  ],
});
