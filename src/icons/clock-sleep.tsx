import { createIcon } from "../runtime/createIcon.js";

export const ClockSleep = createIcon("ClockSleep", "clock-sleep", {
  nodes: [
    ["circle", { cx: "10", cy: "13", r: "8" }, { r: "pulse", a: 0.04, o: [10, 13] }],
    ["path", { d: "M10 9v4l2.5 1.5" }, { r: "turn", a: 20, o: [10, 13] }],
    ["path", { d: "M17 2.5h4l-4 4h4" }, { r: "float", d: 0.1, o: [19, 4.5] }],
  ],
});
