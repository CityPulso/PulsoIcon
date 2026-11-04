import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "qwant" (CC0-1.0). Qwant is a trademark of its owner.
export const BrandQwant = createIcon("BrandQwant", "brand-qwant", {
  nodes: [
    ["circle", { cx: "10", cy: "13", r: "7" }, { r: "draw" }],
    ["path", { d: "M12.5 19.5c1.5 1.5 3.5 2.5 6 2" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M19 2.5v5M16.5 5h5" }, { r: "twinkle", o: [19, 5] }],
  ],
});
