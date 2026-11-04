import { createIcon } from "../runtime/createIcon.js";

export const TimerBolt = createIcon("TimerBolt", "timer-bolt", {
  nodes: [
    ["path", { d: "M10 2h4" }, { r: "press", a: 0.2, o: [12, 2] }],
    ["circle", { cx: "12", cy: "14", r: "8" }, { r: "pulse", a: 0.05, o: [12, 14] }],
    ["path", { d: "m13 9.5-3 5h4l-3 5" }, { r: "flicker", d: 0.1, o: [12, 14.5] }],
  ],
});
