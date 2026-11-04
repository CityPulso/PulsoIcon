import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "expedia" (CC0-1.0). Expedia is a trademark of its owner.
export const BrandExpedia = createIcon("BrandExpedia", "brand-expedia", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M11 13l6-6" }, { r: "draw", d: 0.05, o: [14, 10] }],
    ["path", { d: "M12 7h5v5" }, { r: "slide", d: 0.05, x: 1, y: -1, a: 1, o: [15, 9] }],
    ["rect", { x: "6.5", y: "14.5", width: "3", height: "3", rx: ".5" }, { r: "pop", d: 0.2, o: [8, 16] }],
  ],
});
