import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "saturn" (CC0-1.0). Saturn is a trademark of its owner.
export const BrandSaturn = createIcon("BrandSaturn", "brand-saturn", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "5" }, { r: "float", a: 1, o: [12, 12] }],
    ["path", { d: "M3.07 15.25A9.5 3 -20 1 1 20.93 8.75A9.5 3 -20 1 1 3.07 15.25z" }, { r: "turn", a: 12, o: [12, 12] }],
  ],
});
