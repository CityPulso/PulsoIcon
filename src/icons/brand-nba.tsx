import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "nba" (CC0-1.0). NBA is a trademark of its owner.
export const BrandNba = createIcon("BrandNba", "brand-nba", {
  nodes: [
    ["rect", { x: "7", y: "2", width: "10", height: "20", rx: "3" }],
    ["circle", { cx: "12", cy: "6", r: "1" }],
    ["path", { d: "M11.5 9l-1 4.5 1.5 2-1 4M11.5 9.5l2.5 3" }, { r: "swing", a: 5, o: [11, 19.5] }],
    ["circle", { cx: "14", cy: "14.5", r: "1" }, { r: "bounce", y: 1, a: 1.5 }],
  ],
});
