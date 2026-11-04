import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "dazn" (CC0-1.0). DAZN is a trademark of its owner.
export const BrandDazn = createIcon("BrandDazn", "brand-dazn", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 6.5v4.5h.75a2.25 2.25 0 0 0 0-4.5z" }, { r: "draw" }],
    ["path", { d: "M13 11l2-4.5 2 4.5M13.6 9.5h2.8" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M7 13h3.5L7 17.5h3.5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M13.5 17.5V13l3.5 4.5V13" }, { r: "draw", d: 0.3 }],
  ],
});
