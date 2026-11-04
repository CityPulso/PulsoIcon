import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "raylib" (CC0-1.0). Raylib is a trademark of its owner.
export const BrandRaylib = createIcon("BrandRaylib", "brand-raylib", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "1.5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M11.5 18v-4.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M11.5 15a1.5 1.5 0 0 1 1.5-1.5h.5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M16.5 11v7" }, { r: "draw", d: 0.3 }],
  ],
});
