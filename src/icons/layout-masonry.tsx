import { createIcon } from "../runtime/createIcon.js";

export const LayoutMasonry = createIcon("LayoutMasonry", "layout-masonry", {
  nodes: [
    ["rect", { width: "4", height: "9", x: "3", y: "3", rx: "1" }, { r: "grow", o: [5, 3] }],
    ["rect", { width: "4", height: "6", x: "3", y: "15", rx: "1" }, { r: "grow", d: 0.15, o: [5, 21] }],
    ["rect", { width: "4", height: "5", x: "10", y: "3", rx: "1" }, { r: "grow", d: 0.05, o: [12, 3] }],
    ["rect", { width: "4", height: "10", x: "10", y: "11", rx: "1" }, { r: "grow", d: 0.2, o: [12, 21] }],
    ["rect", { width: "4", height: "11", x: "17", y: "3", rx: "1" }, { r: "grow", d: 0.1, o: [19, 3] }],
    ["rect", { width: "4", height: "4", x: "17", y: "17", rx: "1" }, { r: "grow", d: 0.25, o: [19, 21] }],
  ],
});
