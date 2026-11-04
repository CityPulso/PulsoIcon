import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "dragonframe" (CC0-1.0). Dragonframe is a trademark of its owner.
export const BrandDragonframe = createIcon("BrandDragonframe", "brand-dragonframe", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }],
    ["path", { d: "M7.5 6.5c0 3 1 4.5 3 5L12 18l1.5-6.5c2-.5 3-2 3-5" }, { r: "rise", a: 2, o: [12, 12] }],
  ],
});
