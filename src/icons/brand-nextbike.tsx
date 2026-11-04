import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "nextbike" (CC0-1.0). nextbike is a trademark of its owner.
export const BrandNextbike = createIcon("BrandNextbike", "brand-nextbike", {
  nodes: [
    ["path", { d: "M10.5 10v4a4 4 0 1 1-4-4z" }, { r: "roll", a: 1 }],
    ["circle", { cx: "17", cy: "14", r: "4" }, { r: "roll", d: 0.08, a: 1 }],
    ["path", { d: "M15 6.5h4" }, { r: "growX", d: 0.2, o: [15, 6.5] }],
  ],
});
