import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "origin" (CC0-1.0). Origin is a trademark of its owner.
export const BrandOrigin = createIcon("BrandOrigin", "brand-origin", {
  svg: { r: "spin", a: 360 },
  nodes: [
    ["path", { d: "M15.25 6.37C16 5 15.5 3.3 14 2.5" }],
    ["circle", { cx: "12", cy: "12", r: "6.5" }],
    ["path", { d: "M8.75 17.63C8 19 8.5 20.7 10 21.5" }],
    ["circle", { cx: "12", cy: "12", r: "2.5" }],
  ],
});
