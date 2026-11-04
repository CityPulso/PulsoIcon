import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "valve" (CC0-1.0). Valve is a trademark of its owner.

export const BrandValve = createIcon("BrandValve", "brand-valve", {
  nodes: [
    ["path", { d: "M2 6h20" }, { r: "growX", o: [2, 6] }],
    ["path", { d: "M2 18h20" }, { r: "growX", o: [22, 18] }],
    ["path", { d: "M2 9l1.75 6 1.75-6" }, { r: "draw", d: 0.05, o: [3.75, 12] }],
    ["path", { d: "M6.5 15l1.75-6 1.75 6M7 13.5h2.5" }, { r: "draw", d: 0.12, o: [8.25, 12] }],
    ["path", { d: "M11.5 9v6h2.5" }, { r: "draw", d: 0.19, o: [12.75, 12] }],
    ["path", { d: "M15 9l1.75 6 1.75-6" }, { r: "draw", d: 0.26, o: [16.75, 12] }],
    ["path", { d: "M22 9h-2.5v6H22M19.5 12h2" }, { r: "draw", d: 0.33, o: [20.75, 12] }],
  ],
});
