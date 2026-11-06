import { icon } from "../icon.js";

// Drawn after Simple Icons "fujifilm" (CC0-1.0). Fujifilm is a trademark of its owner.
export const BrandFujifilm = icon("BrandFujifilm", "brand-fujifilm", {
  nodes: [
    ["path", { d: "M2.5 16V8h4M2.5 12h3.5" }, { r: "draw" }],
    ["path", { d: "M8.5 8v6a2 2 0 0 0 4 0V8" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M17 8v6a2 2 0 0 1-2 2" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M20.5 11v5" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M20.5 8h.01" }, { r: "pop", d: 0.4, o: [20.5, 8] }],
  ],
});
