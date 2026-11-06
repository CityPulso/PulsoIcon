import { icon } from "../icon.js";

export const AlarmClockMinus = icon("AlarmClockMinus", "alarm-clock-minus", {
  nodes: [
    ["circle", { cx: "12", cy: "13", r: "8" }, { r: "ring", a: 8, o: [12, 13] }],
    ["path", { d: "M5 3 2 6" }, { r: "ring", a: 8, o: [12, 13] }],
    ["path", { d: "m22 6-3-3" }, { r: "ring", a: 8, o: [12, 13] }],
    ["path", { d: "M6.38 18.7 4 21" }, { r: "ring", a: 8, o: [12, 13] }],
    ["path", { d: "M17.64 18.67 20 21" }, { r: "ring", a: 8, o: [12, 13] }],
    ["path", { d: "M9 13h6" }, { r: "growX", d: 0.2, o: [12, 13] }],
  ],
});
