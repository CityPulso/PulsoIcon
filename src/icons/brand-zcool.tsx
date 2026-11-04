import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "zcool" (CC0-1.0). ZCOOL is a trademark of its owner.

export const BrandZcool = createIcon("BrandZcool", "brand-zcool", {
  nodes: [
    [
      "path",
      { d: "M17.5 14.5A7.5 7.5 0 1 1 9.5 7c2.5-1.5 4-3 6.5-4.5-.5 2-1 3.5-1.5 5 2-1 4.5-2 6.5-2-1.5 2-2.5 3.5-3.5 4.5 1.5.5 3 1 4 2-1.5.5-3 1.5-4 2.5" },
      { r: "sway", a: 4, o: [9, 21] },
    ],
    ["path", { d: "M5.5 13.5l3 1.5" }, { r: "blink", d: 0.15, o: [7, 14.3] }],
    ["path", { d: "M14 13.5l-3 1.5" }, { r: "blink", d: 0.15, o: [12.5, 14.3] }],
  ],
});
