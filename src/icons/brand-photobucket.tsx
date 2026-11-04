import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "photobucket" (CC0-1.0). Photobucket is a trademark of its owner.

export const BrandPhotobucket = createIcon("BrandPhotobucket", "brand-photobucket", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "13", cy: "12", r: "6.5" }, { r: "spin", o: [12, 12] }],
    ["circle", { cx: "14", cy: "12", r: "3" }, { r: "spin", d: 0.1, o: [12, 12] }],
  ],
});
