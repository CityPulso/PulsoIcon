import { icon } from "../icon.js";

export const RadioTower = icon("RadioTower", "radio-tower", {
  nodes: [
    ["path", { d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9" }, { r: "draw", d: 0.18, o: [12, 9] }],
    ["path", { d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" }, { r: "draw", d: 0.08, o: [12.003, 8.485] }],
    ["circle", { cx: "12", cy: "9", r: "2" }, { r: "pop", o: [12, 9] }],
    ["path", { d: "M16.2 4.8c2 2 2.26 5.11.8 7.47" }, { r: "draw", d: 0.1, o: [12.003, 8.485] }],
    ["path", { d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1" }, { r: "draw", d: 0.2, o: [12, 9] }],
    ["path", { d: "M9.5 18h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "m8 22 4-11 4 11" }, { r: "press", a: 0.04, o: [12, 22] }],
  ],
});
