import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "delonghi" (CC0-1.0). De'Longhi is a trademark of its owner.
export const BrandDeLonghi = createIcon("BrandDeLonghi", "brand-de-longhi", {
  nodes: [
    ["rect", { x: "2", y: "6.5", width: "20", height: "11", rx: "5.5" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M7.5 9.5v5h1a2.5 2.5 0 0 0 0-5z" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M13.5 9.5v5h3" }, { r: "draw", d: 0.2 }],
  ],
});
