import { icon } from "../icon.js";

export const IdCardClock = icon("IdCardClock", "id-card-clock", {
  nodes: [
    ["path", { d: "M22 12V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8.5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "8", cy: "10", r: "2" }, { r: "pop", d: 0.05, o: [8, 10] }],
    ["path", { d: "M11 16a3 3 0 0 0-6 0" }, { r: "rise", d: 0.1, a: 1, o: [8, 14.5] }],
    ["path", { d: "M14 10h4" }, { r: "growX", d: 0.15, o: [14, 10] }],
    ["circle", { cx: "18", cy: "18", r: "4" }, { r: "pop", d: 0.15, o: [18, 18] }],
    ["path", { d: "M18 16.5V18l1 1" }, { r: "spin", d: 0.2, a: 360, o: [18, 18] }],
  ],
});
