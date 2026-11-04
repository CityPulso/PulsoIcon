import { createIcon } from "../runtime/createIcon.js";

export const LayoutGridCircles = createIcon("LayoutGridCircles", "layout-grid-circles", {
  nodes: [
    ["circle", { cx: "17.5", cy: "17.5", r: "3.5" }, { r: "pop", d: 0.18, o: [17.5, 17.5] }],
    ["circle", { cx: "17.5", cy: "6.5", r: "3.5" }, { r: "pop", d: 0.06, o: [17.5, 6.5] }],
    ["circle", { cx: "6.5", cy: "17.5", r: "3.5" }, { r: "pop", d: 0.12, o: [6.5, 17.5] }],
    ["circle", { cx: "6.5", cy: "6.5", r: "3.5" }, { r: "pop", o: [6.5, 6.5] }],
  ],
});
