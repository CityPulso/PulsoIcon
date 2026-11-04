import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "lionair" (CC0-1.0). Lion Air is a trademark of its owner.

export const BrandLionAir = createIcon("BrandLionAir", "brand-lion-air", {
  nodes: [
    ["path", { d: "M11 7.5C7.5 5.5 5 6 3 8" }, { r: "sway", a: 8, o: [11, 12] }],
    ["path", { d: "M11 11C7.5 10 5 10.5 3 12.5" }, { r: "sway", d: 0.05, a: 8, o: [11, 12] }],
    ["path", { d: "M11 14.5C8 14.5 6 15.5 4.5 18" }, { r: "sway", d: 0.1, a: 8, o: [11, 12] }],
    ["path", { d: "M12.5 17c-1.5 1-2.5 3-2.5 5" }, { r: "sway", d: 0.15, a: 8, o: [11, 12] }],
    ["path", { d: "M11 5.5c2-2.5 5-3 7.5-1.5L19 6l2 1.5-1.5 1.5 1 2-2 .5-.5 2.5-2.5.5" }, { r: "tilt", a: 6, o: [14, 14] }],
    ["path", { d: "M17.5 7.5h.01" }, { r: "tilt", a: 6, o: [14, 14] }],
  ],
});
