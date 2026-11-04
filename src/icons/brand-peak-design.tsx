import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "peakdesign" (CC0-1.0). Peak Design is a trademark of its owner.
export const BrandPeakDesign = createIcon("BrandPeakDesign", "brand-peak-design", {
  nodes: [
    ["path", { d: "M2 14h2l5-3.5" }, { r: "draw", o: [5, 12] }],
    ["path", { d: "M9 10.5 12.5 8l3.5 2.5-3.5 2.5z" }, { r: "rise", d: 0.1, a: 1.5, o: [12.5, 10.5] }],
    ["path", { d: "M12.5 13 16 10.5l3.5 2.5-3.5 2.5z" }, { r: "rise", d: 0.18, a: 1.5, o: [16, 13] }],
    ["path", { d: "M19.5 13 22 11" }, { r: "draw", d: 0.26, o: [21, 12] }],
  ],
});
