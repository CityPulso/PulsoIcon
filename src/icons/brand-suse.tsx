import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "suse" (CC0-1.0). SUSE is a trademark of its owner.
export const BrandSuse = createIcon("BrandSuse", "brand-suse", {
  nodes: [
    ["path", { d: "M10 16.5H7a4 4 0 1 1 4-4 1.75 1.75 0 0 1-3.5 0" }, { r: "draw" }],
    ["path", { d: "M4.5 10C6 7.5 9 6 12.5 6.5c3 .4 4.5 2 5.5 3l3 3h-4.5" }, { r: "sway", a: 4, o: [12, 16] }],
    ["path", { d: "M21 12.5c0 2.2-2.5 4-5.5 4H10" }, { r: "sway", a: 4, o: [12, 16] }],
    ["path", { d: "M16.5 10h.01" }, { r: "blink", d: 0.2, o: [16.5, 10] }],
  ],
});
