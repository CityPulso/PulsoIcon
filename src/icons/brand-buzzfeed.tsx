import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "buzzfeed" (CC0-1.0). BuzzFeed is a trademark of its owner.
export const BrandBuzzfeed = createIcon("BrandBuzzfeed", "brand-buzzfeed", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M6.5 16.5 10 12.5l2.5 2L17 9" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "M13.5 8.5H17.5V12.5" }, { r: "pop", d: 0.35, o: [17.5, 8.5] }],
  ],
});
