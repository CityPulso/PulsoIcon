import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "anaconda" (CC0-1.0). Anaconda is a trademark of its owner.
export const BrandAnaconda = createIcon("BrandAnaconda", "brand-anaconda", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M10.96 6.09A6 6 0 1 1 10.96 17.91" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M10.26 21.85 9 17.2 4.34 18.43 6.36 14.05 2 12 6.36 9.95 4.34 5.57 9 6.8 10.26 2.15" }, { r: "spin", a: 360, o: [12, 12] }],
  ],
});
