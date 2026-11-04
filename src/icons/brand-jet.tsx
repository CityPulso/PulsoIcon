import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "jet" (CC0-1.0). JET is a trademark of its owner.
export const BrandJet = createIcon("BrandJet", "brand-jet", {
  nodes: [
    ["path", { d: "M3 8.5c5-3.5 13-3.5 18-1.5" }, { r: "draw", o: [12, 7] }],
    ["path", { d: "M7.5 10l-1 4.5a1.5 1.5 0 0 1-2.5.5" }, { r: "slide", x: 1, a: 1.5, d: 0.1 }],
    ["path", { d: "M13.5 10h-3l-1 4.5h3 M10 12.2h2.5" }, { r: "slide", x: 1, a: 1.5, d: 0.1 }],
    ["path", { d: "M15.5 10h5 M18 10l-1 4.5" }, { r: "slide", x: 1, a: 1.5, d: 0.1 }],
    ["path", { d: "M3.5 17.5c6 1.5 12 1 17.5-2" }, { r: "draw", d: 0.2, o: [12, 17] }],
  ],
});
