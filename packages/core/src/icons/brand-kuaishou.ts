import { icon } from "../icon.js";

// Drawn after Simple Icons "kuaishou" (CC0-1.0). Kuaishou is a trademark of its owner.
export const BrandKuaishou = icon("BrandKuaishou", "brand-kuaishou", {
  nodes: [
    ["circle", { cx: "9", cy: "6", r: "3" }, { r: "turn", a: 90, o: [9, 6] }],
    ["circle", { cx: "15.5", cy: "6.5", r: "2.5" }, { r: "turn", d: 0.05, a: 90, o: [15.5, 6.5] }],
    ["rect", { x: "5.5", y: "12", width: "10", height: "8", rx: "2.5" }],
    ["path", { d: "M15.5 15l4-2v6l-4-2" }, { r: "pop", d: 0.15, o: [17.5, 16] }],
  ],
});
