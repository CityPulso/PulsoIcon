import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "acura" (CC0-1.0). Acura is a trademark of its owner.
export const BrandAcura = createIcon("BrandAcura", "brand-acura", {
  nodes: [
    ["rect", { x: "2.5", y: "3", width: "19", height: "18", rx: "7.5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 18L11.5 6h1L16 18" }, { r: "draw", d: 0.1 }],
  ],
});
