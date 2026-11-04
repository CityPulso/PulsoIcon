import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "wantedly" (CC0-1.0). Wantedly is a trademark of its owner.
export const BrandWantedly = createIcon("BrandWantedly", "brand-wantedly", {
  nodes: [
    ["path", { d: "M3 5l4.5 14" }, { r: "draw" }],
    ["path", { d: "M10 5l4.5 14" }, { r: "draw", d: 0.1 }],
    ["circle", { cx: "19", cy: "6.5", r: "2" }, { r: "bounce", y: -1.5, d: 0.2, o: [19, 6.5] }],
  ],
});
