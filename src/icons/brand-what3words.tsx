import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "what3words" (CC0-1.0). what3words is a trademark of its owner.
export const BrandWhat3words = createIcon("BrandWhat3words", "brand-what3words", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "1" }],
    ["path", { d: "M7 16.5l3-9" }, { r: "draw" }],
    ["path", { d: "M10.5 16.5l3-9" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M14 16.5l3-9" }, { r: "draw", d: 0.2 }],
  ],
});
