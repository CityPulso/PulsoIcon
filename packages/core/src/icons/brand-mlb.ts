import { icon } from "../icon.js";

// Drawn after Simple Icons "mlb" (CC0-1.0). MLB is a trademark of its owner.
export const BrandMlb = icon("BrandMlb", "brand-mlb", {
  nodes: [
    ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "3" }],
    ["path", { d: "M6.5 15h.01" }, { r: "shoot", x: -1 }],
    ["circle", { cx: "15", cy: "10", r: "1.5" }],
    ["path", { d: "M11 19v-2c0-2.5 1.5-4 4-4s4 1.5 4 4v2" }],
    ["path", { d: "M17 11.5 20.5 8" }, { r: "swing", a: 25, o: [17, 11.5] }],
  ],
});
