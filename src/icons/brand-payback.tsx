import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "payback" (CC0-1.0). PAYBACK is a trademark of its owner.
export const BrandPayback = createIcon("BrandPayback", "brand-payback", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }],
    ["circle", { cx: "8.5", cy: "8.5", r: "2" }, { r: "pop", o: [8.5, 8.5] }],
    ["circle", { cx: "15.5", cy: "8.5", r: "2" }, { r: "pop", d: 0.08, o: [15.5, 8.5] }],
    ["circle", { cx: "8.5", cy: "15.5", r: "2" }, { r: "pop", d: 0.16, o: [8.5, 15.5] }],
    ["circle", { cx: "15.5", cy: "15.5", r: "2" }, { r: "pop", d: 0.24, o: [15.5, 15.5] }],
  ],
});
