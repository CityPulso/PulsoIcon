import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "onstar" (CC0-1.0). OnStar is a trademark of its owner.
export const BrandOnstar = createIcon("BrandOnstar", "brand-onstar", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "8.5", cy: "14", r: "3" }, { r: "draw", o: [8.5, 14] }],
    ["path", { d: "M13.5 17v-6m0 2a2 2 0 0 1 4 0v4" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M16.5 6.25v2.5m-1.25-1.25h2.5" }, { r: "twinkle", d: 0.25, o: [16.5, 7.5] }],
  ],
});
