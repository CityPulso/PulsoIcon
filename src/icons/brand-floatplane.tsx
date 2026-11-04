import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "floatplane" (CC0-1.0). Floatplane is a trademark of its owner.
export const BrandFloatplane = createIcon("BrandFloatplane", "brand-floatplane", {
  nodes: [
    ["path", { d: "M7.5 4.2A9 9 0 0 1 19.8 16.5" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M16.5 19.8A9 9 0 0 1 4.2 7.5" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M5.5 5.5l13 13M8 15l6.5-6.5M14 19.5l3-3" }, { r: "slide", d: 0.1, x: 1.5, y: 1.5 }],
  ],
});
