import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "openzfs" (CC0-1.0). OpenZFS is a trademark of its owner.
export const BrandOpenzfs = createIcon("BrandOpenzfs", "brand-openzfs", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }],
    ["path", { d: "M7.5 7h9L12 12l4.5 5h-9L12 12z" }, { r: "turn", a: 180, o: [12, 12] }],
  ],
});
