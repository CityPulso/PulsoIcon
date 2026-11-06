import { icon } from "../icon.js";

// Drawn after Simple Icons "dapr" (CC0-1.0). Dapr is a trademark of its owner.
export const BrandDapr = icon("BrandDapr", "brand-dapr", {
  nodes: [
    ["circle", { cx: "4", cy: "14", r: "2" }, { r: "draw" }],
    ["path", { d: "M6 9.5V16" }, { r: "draw", d: 0.05 }],
    ["circle", { cx: "10", cy: "14", r: "2" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 12v4" }, { r: "draw", d: 0.15 }],
    ["circle", { cx: "16", cy: "14", r: "2" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M14 12v8" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M19.5 16v-2a2 2 0 0 1 2-2" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M7.5 9.5h5M8.5 9.5V6h3v3.5" }, { r: "lift", y: -1, a: -12, o: [10, 9.5] }],
  ],
});
