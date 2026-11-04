import { createIcon } from "../runtime/createIcon.js";

export const Shapes = createIcon("Shapes", "shapes", {
  nodes: [
    ["path", { d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" }, { r: "spin", a: 120, o: [12, 7] }],
    ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }, { r: "spin", d: 0.08, a: 90, o: [6.5, 17.5] }],
    ["circle", { cx: "17.5", cy: "17.5", r: "3.5" }, { r: "jelly", d: 0.16, o: [17.5, 17.5] }],
  ],
});
