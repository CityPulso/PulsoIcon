import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "tower" (CC0-1.0). Tower is a trademark of its owner.

export const BrandTower = createIcon("BrandTower", "brand-tower", {
  nodes: [
    ["rect", { x: "4", y: "3", width: "16", height: "3", rx: "1.5" }, { r: "lift", y: -1, a: 0, o: [12, 4.5] }],
    ["path", { d: "M5 9h14l-3 5H8z" }, { r: "press", a: 0.05, o: [12, 14] }],
    ["path", { d: "M10.5 9l.5 5M13.5 9l-.5 5" }],
    ["path", { d: "M10 14l.5 7h3l.5-7" }],
  ],
});
