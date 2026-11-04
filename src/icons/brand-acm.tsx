import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "acm" (CC0-1.0). ACM is a trademark of its owner.
export const BrandAcm = createIcon("BrandAcm", "brand-acm", {
  nodes: [
    ["polygon", { points: "12 1.5 22.5 12 12 22.5 1.5 12" }, { r: "spin", a: 90, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "5.5" }, { r: "pop", d: 0.1, o: [12, 12] }],
  ],
});
