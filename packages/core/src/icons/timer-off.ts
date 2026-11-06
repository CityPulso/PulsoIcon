import { icon } from "../icon.js";

export const TimerOff = icon("TimerOff", "timer-off", {
  nodes: [
    ["path", { d: "M10 2h4" }, { r: "fade", o: [12.006, 12.007] }],
    ["path", { d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" }, { r: "fade", o: [12.006, 12.007] }],
    ["path", { d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" }, { r: "fade", o: [12.006, 12.007] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M12 12v-2" }, { r: "fade", o: [12.006, 12.007] }],
  ],
  solid: [
    ["line", { x1: "10", x2: "14", y1: "2", y2: "2", fill: "none" }, { r: "fade", o: [12.006, 12.007] }],
    ["line", { x1: "12", x2: "15", y1: "14", y2: "11" }, { r: "fade", o: [12.006, 12.007] }, "line"],
    ["circle", { cx: "12", cy: "14", r: "8" }, { r: "fade", o: [12.006, 12.007] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
