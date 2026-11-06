import { icon } from "../icon.js";

// Drawn after Simple Icons "folo" (CC0-1.0). Folo is a trademark of its owner.
export const BrandFolo = icon("BrandFolo", "brand-folo", {
  nodes: [
    ["rect", { x: "2.5", y: "2.5", width: "19", height: "19", rx: "5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 8h8" }, { r: "growX", d: 0.05, o: [8, 8] }],
    ["path", { d: "M8.5 12h5" }, { r: "growX", d: 0.15, o: [8.5, 12] }],
    ["path", { d: "M11 16.5h.01" }, { r: "pop", d: 0.25, o: [11, 16.5] }],
  ],
});
