import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "cocacola" (CC0-1.0). Coca-Cola is a trademark of its owner.
export const BrandCocaCola = createIcon("BrandCocaCola", "brand-coca-cola", {
  nodes: [
    ["path", { d: "M10 6.5C8 4 3 6 3 11c0 3.5 3 4.5 5.5 3" }, { r: "draw" }],
    ["path", { d: "M10 11.5c-1.5-1-3 .5-2 2 1 1 2.5 0 2-2" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19.5 6.5C17.5 4 12.5 6 12.5 11c0 3.5 3 4.5 5.5 3" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M3 19c5-2.5 11-2.5 18-6" }, { r: "draw", d: 0.3 }],
  ],
});
