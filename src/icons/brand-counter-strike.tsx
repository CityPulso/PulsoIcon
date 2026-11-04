import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "counterstrike" (CC0-1.0). Counter-Strike is a trademark of its owner.
export const BrandCounterStrike = createIcon("BrandCounterStrike", "brand-counter-strike", {
  nodes: [
    ["circle", { cx: "10", cy: "4.5", r: "1.8" }],
    ["path", { d: "M10 7.5 8.5 13l-3 8M8.5 13l3.5 3 .5 5" }],
    ["path", { d: "M9.5 8.5 13 10l1.5-1M8 9.5l2.5 2.5 4-2M11 9.5h10" }, { r: "slide", x: -1, a: 1, o: [14, 9.5] }],
  ],
});
