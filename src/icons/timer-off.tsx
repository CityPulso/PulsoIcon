import { createIcon } from "../runtime/createIcon.js";

export const TimerOff = createIcon("TimerOff", "timer-off", {
  nodes: [
    ["path", { d: "M10 2h4" }, { r: "fade", o: [12.006, 12.007] }],
    ["path", { d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" }, { r: "fade", o: [12.006, 12.007] }],
    ["path", { d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" }, { r: "fade", o: [12.006, 12.007] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M12 12v-2" }, { r: "fade", o: [12.006, 12.007] }],
  ],
});
