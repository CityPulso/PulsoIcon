import { icon } from "../icon.js";

// Drawn after Simple Icons "kik" (CC0-1.0). Kik is a trademark of its owner.
export const BrandKik = icon("BrandKik", "brand-kik", {
  nodes: [
    ["path", { d: "M3 6v12" }, { r: "draw" }],
    ["path", { d: "M7.5 11 3.5 14.5 7.5 18" }, { r: "draw", d: 0.08 }],
    ["path", { d: "M10.5 11v7" }, { r: "draw", d: 0.16 }],
    ["path", { d: "M10.5 7.5h.01" }, { r: "pop", d: 0.2, o: [10.5, 7.5] }],
    ["path", { d: "M14 6v12" }, { r: "draw", d: 0.24 }],
    ["path", { d: "M18.5 11 14.5 14.5 18.5 18" }, { r: "draw", d: 0.32 }],
    ["path", { d: "M21.5 15h.01" }, { r: "bounce", d: 0.4, y: -1, a: 2, o: [21.5, 15] }],
  ],
});
