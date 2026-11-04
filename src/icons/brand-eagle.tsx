import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "eagle" (CC0-1.0). Eagle is a trademark of its owner.
export const BrandEagle = createIcon("BrandEagle", "brand-eagle", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "11", cy: "12.5", r: "5.5" }, { r: "blink", o: [11, 12.5] }],
    ["path", { d: "M14 9c-1.3 1.6-1.3 4 0 5.5" }, { r: "blink", o: [11, 12.5] }],
  ],
});
