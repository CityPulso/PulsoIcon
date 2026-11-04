import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "opencritic" (CC0-1.0). OpenCritic is a trademark of its owner.
export const BrandOpencritic = createIcon("BrandOpencritic", "brand-opencritic", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "12", cy: "12", r: "5.5" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M8.1 8.1l7.8 7.8m0-7.8-7.8 7.8" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
