import { createIcon } from "../runtime/createIcon.js";

export const AlarmClockAlert = createIcon("AlarmClockAlert", "alarm-clock-alert", {
  nodes: [
    ["circle", { cx: "12", cy: "13", r: "8" }, { r: "ring", a: 10, o: [12, 13] }],
    ["path", { d: "M5 3 2 6" }, { r: "ring", a: 10, o: [12, 13] }],
    ["path", { d: "m22 6-3-3" }, { r: "ring", a: 10, o: [12, 13] }],
    ["path", { d: "M6.38 18.7 4 21" }, { r: "ring", a: 10, o: [12, 13] }],
    ["path", { d: "M17.64 18.67 20 21" }, { r: "ring", a: 10, o: [12, 13] }],
    ["path", { d: "M12 9v4" }, { r: "grow", d: 0.15, o: [12, 13] }],
    ["path", { d: "M12 16.5h.01" }, { r: "pop", d: 0.25, o: [12.005, 16.5] }],
  ],
});
