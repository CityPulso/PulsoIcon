import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "afterpay" (CC0-1.0). Afterpay is a trademark of its owner.
export const BrandAfterpay = createIcon("BrandAfterpay", "brand-afterpay", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M14 6.5 6.5 11l3.5 2.2" }, { r: "slide", x: -1, y: 0.4, a: 1.5 }],
    ["path", { d: "M10 17.5 17.5 13 14 10.8" }, { r: "slide", x: 1, y: -0.4, a: 1.5 }],
  ],
});
