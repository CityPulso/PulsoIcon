import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "inspire" (CC0-1.0). INSPIRE is a trademark of its owner.
export const BrandInspire = createIcon("BrandInspire", "brand-inspire", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 11v6" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M8 7.5h.01" }, { r: "pop", d: 0.1, o: [8, 7.5] }],
    ["path", { d: "M11.5 17V7l5 10V7" }, { r: "draw", d: 0.15 }],
  ],
});
