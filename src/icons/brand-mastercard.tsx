import { createIcon } from "../runtime/createIcon.js";

export const BrandMastercard = createIcon("BrandMastercard", "brand-mastercard", {
  nodes: [
    ["circle", { cx: "8.5", cy: "12", r: "6.5" }, { r: "slide", x: -1, a: 1, o: [8.5, 12] }],
    ["circle", { cx: "15.5", cy: "12", r: "6.5" }, { r: "slide", x: 1, a: 1, o: [15.5, 12] }],
  ],
});
