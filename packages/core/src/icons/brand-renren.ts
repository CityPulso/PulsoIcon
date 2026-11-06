import { icon } from "../icon.js";

// Drawn after Simple Icons "renren" (CC0-1.0). Renren is a trademark of its owner.
export const BrandRenren = icon("BrandRenren", "brand-renren", {
  nodes: [
    ["circle", { cx: "7.5", cy: "12", r: "5.5" }, { r: "press", a: 0.05, o: [7.5, 12] }],
    ["circle", { cx: "16.5", cy: "12", r: "5.5" }, { r: "press", d: 0.1, a: 0.05, o: [16.5, 12] }],
    ["path", { d: "M7.5 6.5V11L5 16M7.5 11l2.5 5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M16.5 6.5V11L14 16M16.5 11l2.5 5" }, { r: "draw", d: 0.25 }],
  ],
});
