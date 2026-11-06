import { icon } from "../icon.js";

export const ClockArrowDown = icon("ClockArrowDown", "clock-arrow-down", {
  nodes: [
    ["path", { d: "M12 6v6l2 1" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M12.337 21.994a10 10 0 1 1 9.588-8.767" }, { r: "press", a: 0.04, o: [12.001, 12] }],
    ["path", { d: "m14 18 4 4 4-4" }, { r: "bounce", d: 0.15, y: 1, a: 2, o: [18, 18] }],
    ["path", { d: "M18 14v8" }, { r: "bounce", d: 0.15, y: 1, a: 2, o: [18, 18] }],
  ],
});
