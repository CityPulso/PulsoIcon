import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "lodash" (CC0-1.0). Lodash is a trademark of its owner.

export const BrandLodash = createIcon("BrandLodash", "brand-lodash", {
  nodes: [
    ["path", { d: "M3.5 3.5V16H9" }, { r: "draw" }],
    ["circle", { cx: "15.5", cy: "12", r: "4" }, { r: "roll", d: 0.1, x: 1, a: 0.5, o: [15.5, 12] }],
    ["path", { d: "M3 20.5h18" }, { r: "growX", d: 0.3, o: [3, 20.5] }],
  ],
});
