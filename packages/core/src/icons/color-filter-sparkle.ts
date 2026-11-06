import { icon } from "../icon.js";

export const ColorFilterSparkle = icon("ColorFilterSparkle", "color-filter-sparkle", {
  nodes: [
    ["circle", { cx: "10", cy: "9.5", r: "4.5" }, { r: "pulse", a: 0.1, o: [10, 9.5] }],
    ["circle", { cx: "7", cy: "14.5", r: "4.5" }, { r: "pulse", d: 0.1, a: 0.1, o: [7, 14.5] }],
    ["circle", { cx: "13", cy: "14.5", r: "4.5" }, { r: "pulse", d: 0.2, a: 0.1, o: [13, 14.5] }],
    ["path", { d: "M19 8a3.99 3.99 0 0 1 3-3a3.99 3.99 0 0 1-3-3a3.99 3.99 0 0 1-3 3a3.99 3.99 0 0 1 3 3" }, { r: "twinkle", d: 0.1, o: [19, 5] }],
  ],
});
