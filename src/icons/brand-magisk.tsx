import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "magisk" (CC0-1.0). Magisk is a trademark of its owner.
export const BrandMagisk = createIcon("BrandMagisk", "brand-magisk", {
  nodes: [
    ["path", { d: "M12 3v4.5M7.5 4.5l2 3M16.5 4.5l-2 3" }, { r: "flicker" }],
    ["path", { d: "M7 10l3 1M17 10l-3 1" }, { r: "blink", o: [12, 10.5] }],
    ["path", { d: "M3 14c1.7 1.3 3.5 1.3 5 .2 1.5-1 2.7-1.7 4-1.7s2.5.7 4 1.7c1.5 1.1 3.3 1.1 5-.2" }, { r: "wobble", a: 6, o: [12, 13.5] }],
    ["path", { d: "M10.5 17L12 21l1.5-4" }, { r: "swing", d: 0.1, a: 10, o: [12, 17] }],
  ],
});
