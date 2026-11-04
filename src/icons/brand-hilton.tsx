import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "hilton" (CC0-1.0). Hilton is a trademark of its owner.

export const BrandHilton = createIcon("BrandHilton", "brand-hilton", {
  nodes: [
    ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "1" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6 9v6" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M12 9v6" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M6 12h6" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M16.5 12v3" }, { r: "draw", d: 0.35 }],
    ["path", { d: "M16.5 9h.01" }, { r: "pop", d: 0.45, o: [16.5, 9] }],
  ],
});
