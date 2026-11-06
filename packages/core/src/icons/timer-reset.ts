import { icon } from "../icon.js";

export const TimerReset = icon("TimerReset", "timer-reset", {
  nodes: [
    ["path", { d: "M10 2h4" }, { r: "press", a: 0.2, o: [12, 2] }],
    ["path", { d: "M12 14v-4" }, { r: "spin", d: 0.05, a: -360, o: [12, 14] }],
    ["path", { d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" }, { r: "spin", d: 0.05, a: -90, o: [12, 14] }],
    ["path", { d: "M9 17H4v5" }, { r: "fade", o: [6.5, 19.5] }],
  ],
});
