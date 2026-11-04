import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "deutschebank" (CC0-1.0). Deutsche Bank is a trademark of its owner.
export const BrandDeutscheBank = createIcon("BrandDeutscheBank", "brand-deutsche-bank", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 17 16 7" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
