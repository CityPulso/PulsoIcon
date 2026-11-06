import { icon } from "../icon.js";

export const Treadmill = icon("Treadmill", "treadmill", {
  nodes: [
    ["circle", { cx: "9", cy: "3", r: "1" }, { r: "bounce", y: -1, a: 1, o: [9, 3] }],
    ["path", { d: "M8.5 6 7.5 10.5" }, { r: "bounce", y: -1, a: 1, o: [9, 3] }],
    ["path", { d: "m7.5 10.5 3 2-1 2.5" }, { r: "swing", d: 0.05, a: -14, o: [7.5, 10.5] }],
    ["path", { d: "m7.5 10.5-3 2.5" }, { r: "swing", d: 0.05, a: 14, o: [7.5, 10.5] }],
    ["path", { d: "M5 8.5 8 6.5l3 2" }, { r: "swing", d: 0.1, a: 10, o: [8, 6.5] }],
    ["rect", { x: "2", y: "17", width: "18", height: "4", rx: "2" }, { r: "press", a: 0.04, o: [11, 19] }],
    ["path", { d: "M18 17 20 7h-4" }, { r: "press", a: 0.04, o: [11, 19] }],
  ],
});
