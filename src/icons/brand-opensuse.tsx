import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "opensuse" (CC0-1.0). openSUSE is a trademark of its owner.
export const BrandOpensuse = createIcon("BrandOpensuse", "brand-opensuse", {
  nodes: [
    ["path", { d: "M3 9c3-2.5 7-3.5 11-3.5a7.5 7.5 0 1 1-8.5 11" }, { r: "draw", o: [13, 13] }],
    ["path", { d: "M3 9c2.5 0 4.5 1 5.5 2.5" }],
    ["circle", { cx: "15", cy: "11.5", r: "2.5" }, { r: "blink", d: 0.3, o: [15, 11.5] }],
    ["path", { d: "M15.5 11.5h.01" }, { r: "blink", d: 0.3, o: [15, 11.5] }],
  ],
});
