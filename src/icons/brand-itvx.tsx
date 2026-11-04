import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "itvx" (CC0-1.0). ITVx is a trademark of its owner.
export const BrandItvx = createIcon("BrandItvx", "brand-itvx", {
  nodes: [
    ["path", { d: "M2.5 11.5v5.5" }, { r: "draw" }],
    ["path", { d: "M2.5 8h.01" }, { r: "pop", d: 0.05, o: [2.5, 8] }],
    ["path", { d: "M6 8v7.5A1.5 1.5 0 0 0 7.5 17M5 11.5h3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M9.5 11.5l2 5.5 2-5.5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M16 8l6 9M22 8l-6 9" }, { r: "pop", d: 0.3, o: [19, 12.5] }],
  ],
});
