import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "falco" (CC0-1.0). Falco is a trademark of its owner.
export const BrandFalco = createIcon("BrandFalco", "brand-falco", {
  nodes: [
    ["path", { d: "M4 3l8.5 8.5" }, { r: "draw", o: [8, 7] }],
    ["path", { d: "M3 7.5l6.5 6.5" }, { r: "draw", d: 0.08, o: [6, 11] }],
    ["path", { d: "M3 12l3.5 3.5" }, { r: "draw", d: 0.16, o: [5, 14] }],
    ["path", { d: "M20 8 7 21" }, { r: "draw", d: 0.1, o: [13.5, 14.5] }],
    ["path", { d: "M20.5 14.5l-4 4L19 21h2" }, { r: "draw", d: 0.25, o: [18.5, 18] }],
  ],
});
