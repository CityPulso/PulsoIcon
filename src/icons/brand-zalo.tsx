import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "zalo" (CC0-1.0). Zalo is a trademark of its owner.

export const BrandZalo = createIcon("BrandZalo", "brand-zalo", {
  nodes: [
    ["path", { d: "M1.5 8.5h4l-4 7h4" }, { r: "draw" }],
    ["circle", { cx: "9", cy: "13.25", r: "2.25" }, { r: "draw", d: 0.1, o: [9, 13.25] }],
    ["path", { d: "M11.25 11v4.5" }, { r: "draw", d: 0.18, o: [11.25, 13.25] }],
    ["path", { d: "M14 8v7.5" }, { r: "draw", d: 0.26, o: [14, 11.75] }],
    ["circle", { cx: "19", cy: "13.25", r: "2.5" }, { r: "draw", d: 0.34, o: [19, 13.25] }],
  ],
});
