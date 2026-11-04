import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "ludwig" (CC0-1.0). Ludwig is a trademark of its owner.
export const BrandLudwig = createIcon("BrandLudwig", "brand-ludwig", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7.5 7v10h9.5" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M11.5 7v5h5V7" }, { r: "draw", d: 0.2 }],
  ],
});
