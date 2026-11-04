import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "unjs" (CC0-1.0). UnJS is a trademark of its owner.

export const BrandUnjs = createIcon("BrandUnjs", "brand-unjs", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 12.5v2.5a2 2 0 0 0 4 0v-2.5" }, { r: "draw", d: 0.1, o: [11, 15] }],
    ["path", { d: "M15 17v-2.5a2 2 0 0 1 4 0V17" }, { r: "draw", d: 0.2, o: [17, 15] }],
  ],
});
