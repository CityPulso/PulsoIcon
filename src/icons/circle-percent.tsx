import { createIcon } from "../runtime/createIcon.js";

export const CirclePercent = createIcon("CirclePercent", "circle-percent", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "m15 9-6 6" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M9 9h.01" }, { r: "pop", d: 0.2, o: [9.005, 9] }],
    ["path", { d: "M15 15h.01" }, { r: "pop", d: 0.3, o: [15.005, 15] }],
  ],
});
