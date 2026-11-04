import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "underarmour" (CC0-1.0). Under Armour is a trademark of its owner.

export const BrandUnderArmour = createIcon("BrandUnderArmour", "brand-under-armour", {
  nodes: [
    ["path", { d: "M3 5c4 3.5 14 3.5 18 0" }, { r: "draw", o: [12, 6] }],
    ["path", { d: "M3 19c4-3.5 14-3.5 18 0" }, { r: "draw", o: [12, 18] }],
    ["path", { d: "M7 7.7c3 1.8 7 6.8 10 8.6" }, { r: "drawOut", d: 0.15, o: [12, 12] }],
    ["path", { d: "M17 7.7c-3 1.8-7 6.8-10 8.6" }, { r: "drawOut", d: 0.15, o: [12, 12] }],
  ],
});
