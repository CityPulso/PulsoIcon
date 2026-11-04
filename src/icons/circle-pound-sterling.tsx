import { createIcon } from "../runtime/createIcon.js";

export const CirclePoundSterling = createIcon("CirclePoundSterling", "circle-pound-sterling", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M10 16V9.5a1 1 0 0 1 5 0" }, { r: "draw", d: 0.15, o: [12.5, 11.5] }],
    ["path", { d: "M8 12h4" }, { r: "growX", d: 0.3, o: [10, 12] }],
    ["path", { d: "M8 16h7" }, { r: "growX", d: 0.38, o: [11.5, 16] }],
  ],
});
