import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "kyocera" (CC0-1.0). Kyocera is a trademark of its owner.

export const BrandKyocera = createIcon("BrandKyocera", "brand-kyocera", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M3 7l5.5 5L3 17" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M21 3.5L12 12l9 8.5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M12 3v18" }, { r: "draw", d: 0.3 }],
  ],
});
