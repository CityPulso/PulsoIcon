import { icon } from "../icon.js";

// Drawn after Simple Icons "lvgl" (CC0-1.0). LVGL is a trademark of its owner.
export const BrandLvgl = icon("BrandLvgl", "brand-lvgl", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "8", height: "8", rx: "1.5" }, { r: "pop", d: 0, o: [7, 7] }],
    ["rect", { x: "3", y: "13", width: "8", height: "8", rx: "1.5" }, { r: "pop", d: 0.08, o: [7, 17] }],
    ["rect", { x: "13", y: "13", width: "8", height: "8", rx: "1.5" }, { r: "pop", d: 0.16, o: [17, 17] }],
    ["circle", { cx: "17", cy: "7", r: "2" }, { r: "bounce", d: 0.25, x: 0, y: -1, a: 1.5 }],
  ],
});
