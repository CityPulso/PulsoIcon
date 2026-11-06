import { icon } from "../icon.js";

export const BloodPressure = icon("BloodPressure", "blood-pressure", {
  nodes: [
    ["circle", { cx: "9", cy: "9", r: "6" }, { r: "press", a: 0.04, o: [9, 9] }],
    ["path", { d: "m9 9 2.5-2.5" }, { r: "turn", d: 0.15, a: 70, o: [9, 9] }],
    ["path", { d: "M9 15v2a3 3 0 0 0 3 3h2" }, { r: "draw", d: 0.05, o: [11.5, 17.5] }],
    ["path", { d: "M14 20a3 2.5 0 1 0 6 0 3 2.5 0 1 0-6 0" }, { r: "press", a: 0.2, o: [17, 20] }],
  ],
});
