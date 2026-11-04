import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "sumup" (CC0-1.0). SumUp is a trademark of its owner.
export const BrandSumup = createIcon("BrandSumup", "brand-sumup", {
  nodes: [
    ["path", { d: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "5" }, { r: "roll", x: 0, a: 1, o: [12, 12] }],
    ["path", { d: "M13.6 6.4L10.4 17.6" }, { r: "draw", d: 0.15 }],
  ],
});
