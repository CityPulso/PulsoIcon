import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "bosch" (CC0-1.0). Bosch is a trademark of its owner.
export const BrandBosch = createIcon("BrandBosch", "brand-bosch", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M8 6.26v11.48M16 6.26v11.48M8 12h8" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M8 6.26a7 7 0 0 0 0 11.48M16 6.26a7 7 0 0 1 0 11.48" }, { r: "spin", a: 180, o: [12, 12] }],
  ],
});
