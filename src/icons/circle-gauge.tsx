import { createIcon } from "../runtime/createIcon.js";

export const CircleGauge = createIcon("CircleGauge", "circle-gauge", {
  nodes: [
    ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7" }, { r: "press", a: 0.04, o: [11.979, 12.021] }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "turn", d: 0.05, a: -90, o: [12, 12] }],
    ["path", { d: "M13.4 10.6 19 5" }, { r: "turn", d: 0.05, a: -90, o: [12, 12] }],
  ],
});
