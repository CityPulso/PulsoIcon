import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "karlsruherverkehrsverbund" (CC0-1.0). Karlsruher Verkehrsverbund is a trademark of its owner.
export const BrandKarlsruherVerkehrsverbund = createIcon("BrandKarlsruherVerkehrsverbund", "brand-karlsruher-verkehrsverbund", {
  nodes: [
    ["path", { d: "M3 9h17" }, { r: "draw" }],
    ["path", { d: "M10.5 9c4-1 7-3 10.5-5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M3 13v6 M7 13l-4 3 3.5 3 M9 13l2.5 6 2.5-6 M15.5 13l2.5 6 2.5-6" }, { r: "slide", x: 1, a: 1, d: 0.2 }],
  ],
});
