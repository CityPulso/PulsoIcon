import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "macports" (CC0-1.0). MacPorts is a trademark of its owner.
export const BrandMacports = createIcon("BrandMacports", "brand-macports", {
  text: true,
  nodes: [
    ["path", { d: "M2.5 17V7l3.5 5 3.5-5v10" }, { r: "draw" }],
    ["rect", { x: "12", y: "4", width: "9", height: "16", rx: "2" }, { r: "press", a: 0.06, o: [16.5, 20] }],
    ["path", { d: "M15 16V8h2a2 2 0 0 1 0 4h-2" }, { r: "draw", d: 0.15 }],
  ],
});
