import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "educative" (CC0-1.0). Educative is a trademark of its owner.
export const BrandEducative = createIcon("BrandEducative", "brand-educative", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }],
    ["path", { d: "M7 8l4 4-4 4" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M13 16h4" }, { r: "flicker", d: 0.1 }],
  ],
});
