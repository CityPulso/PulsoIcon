import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "paytm" (CC0-1.0). Paytm is a trademark of its owner.
export const BrandPaytm = createIcon("BrandPaytm", "brand-paytm", {
  nodes: [
    ["path", { d: "M2.5 20V9.5" }, { r: "draw", o: [2.5, 15] }],
    ["circle", { cx: "5.5", cy: "12.5", r: "3" }, { r: "draw", d: 0.08, o: [5.5, 12.5] }],
    ["circle", { cx: "13", cy: "12.5", r: "3" }, { r: "draw", d: 0.16, o: [13, 12.5] }],
    ["path", { d: "M16 9.5v6" }, { r: "draw", d: 0.2, o: [16, 12.5] }],
    ["path", { d: "M18.5 9.5v3a2 2 0 0 0 4 0M22.5 9.5V18a2.5 2.5 0 0 1-4 2" }, { r: "draw", d: 0.28, o: [20.5, 14] }],
  ],
});
