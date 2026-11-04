import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "notesnook" (CC0-1.0). Notesnook is a trademark of its owner.
export const BrandNotesnook = createIcon("BrandNotesnook", "brand-notesnook", {
  nodes: [
    ["rect", { x: "3", y: "2", width: "18", height: "20", rx: "5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 13.5V9a3 3 0 0 1 6 0v1" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M15 10.5V15a3 3 0 0 1-6 0v-1" }, { r: "draw", d: 0.15 }],
  ],
});
