import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "square" (CC0-1.0). Square is a trademark of its owner.
export const BrandSquare = createIcon("BrandSquare", "brand-square", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1" }, { r: "pop", d: 0.1, o: [12, 12] }],
  ],
});
