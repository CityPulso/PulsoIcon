import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "meituan" (CC0-1.0). Meituan is a trademark of its owner.
export const BrandMeituan = createIcon("BrandMeituan", "brand-meituan", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "M7 17V7h10v10z" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M9 10h6M13.5 8.5v7l-1-.5M13.5 10.5l-4 4" }, { r: "draw", d: 0.3 }],
  ],
});
