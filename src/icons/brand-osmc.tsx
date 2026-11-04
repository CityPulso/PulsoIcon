import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "osmc" (CC0-1.0). OSMC is a trademark of its owner.
export const BrandOsmc = createIcon("BrandOsmc", "brand-osmc", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 17V7l6 5-6 5" }, { r: "draw", d: 0.05, o: [12, 12] }],
    ["path", { d: "M15 7v10" }, { r: "draw", d: 0.25, o: [15, 12] }],
  ],
});
