import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "merck" (CC0-1.0). Merck is a trademark of its owner.
export const BrandMerck = createIcon("BrandMerck", "brand-merck", {
  svg: { r: "spin", a: 90 },
  nodes: [
    ["circle", { cx: "12", cy: "6", r: "3.5" }],
    ["circle", { cx: "12", cy: "18", r: "3.5" }],
    ["circle", { cx: "6", cy: "12", r: "3.5" }],
    ["circle", { cx: "18", cy: "12", r: "3.5" }],
  ],
});
