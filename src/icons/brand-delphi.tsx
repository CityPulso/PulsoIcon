import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "delphi" (CC0-1.0). Delphi is a trademark of its owner.
export const BrandDelphi = createIcon("BrandDelphi", "brand-delphi", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M7.5 18v-6.5a6 6 0 0 1 11-3.3" }, { r: "tilt", a: 8, o: [12, 16] }],
    ["path", { d: "M18.5 8.2l-4.5 2.3v3.5l2.5 2V18" }, { r: "tilt", a: 8, o: [12, 16] }],
    ["path", { d: "M10.5 18v-6.5a3 3 0 0 1 5-2.2" }, { r: "tilt", a: 8, o: [12, 16] }],
  ],
});
