import { icon } from "../icon.js";

export const AlarmClockOff = icon("AlarmClockOff", "alarm-clock-off", {
  svg: { r: "ring", o: [12, 4] },
  nodes: [
    ["path", { d: "M6.87 6.87a8 8 0 1 0 11.26 11.26" }],
    ["path", { d: "M19.9 14.25a8 8 0 0 0-9.15-9.15" }],
    ["path", { d: "m22 6-3-3" }],
    ["path", { d: "M6.26 18.67 4 21" }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M4 4 2 6" }],
  ],
  solid: [
    ["circle", { cx: "12", cy: "13", r: "8" }],
    ["path", { d: "M12 9v4l2 2" }, undefined, "line"],
    ["path", { d: "M5 3 2 6", fill: "none" }],
    ["path", { d: "m22 6-3-3", fill: "none" }],
    ["path", { d: "M6.38 18.7 4 21", fill: "none" }],
    ["path", { d: "M17.64 18.67 20 21", fill: "none" }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
