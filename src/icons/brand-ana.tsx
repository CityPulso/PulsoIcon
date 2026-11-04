import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "ana" (CC0-1.0). ANA is a trademark of its owner.
export const BrandAna = createIcon("BrandAna", "brand-ana", {
  nodes: [
    ["path", { d: "M1.5 16 3.5 8 5.5 16" }, { r: "draw" }],
    ["path", { d: "M2.3 13.5h2.4" }, { r: "draw", d: 0.06 }],
    ["path", { d: "M7 16V8l3.5 8V8" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M12 16 14 8 16 16" }, { r: "draw", d: 0.22 }],
    ["path", { d: "M12.8 13.5h2.4" }, { r: "draw", d: 0.28 }],
    ["path", { d: "M17.25 16 19.5 8" }, { r: "slide", d: 0.3, x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M19.75 16 22 8" }, { r: "slide", d: 0.36, x: 1, y: 0, a: 1.5 }],
  ],
});
