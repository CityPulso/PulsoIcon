import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "aqua" (CC0-1.0). Aqua is a trademark of its owner.
export const BrandAqua = createIcon("BrandAqua", "brand-aqua", {
  nodes: [
    ["path", { d: "M9 3h10a2 2 0 0 1 2 2v10" }, { r: "slide", x: -0.7, y: 0.7, a: 1, o: [15, 9] }],
    ["path", { d: "M3 9v10a2 2 0 0 0 2 2h10" }, { r: "slide", x: 0.7, y: -0.7, a: 1, o: [9, 15] }],
    ["path", { d: "M8 8h8v8" }, { r: "pop", d: 0.1, o: [12, 12] }],
  ],
});
