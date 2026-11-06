import { icon } from "../icon.js";

export const Sensor = icon("Sensor", "sensor", {
  nodes: [
    ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1" }, { r: "pulse", a: 0.1, o: [12, 12] }],
    ["path", { d: "M6 8.5a5 5 0 0 0 0 7" }, { r: "draw", d: 0.1, o: [5.5, 12] }],
    ["path", { d: "M18 8.5a5 5 0 0 1 0 7" }, { r: "draw", d: 0.1, o: [18.5, 12] }],
    ["path", { d: "M3.5 6a9 9 0 0 0 0 12" }, { r: "draw", d: 0.22, o: [2.5, 12] }],
    ["path", { d: "M20.5 6a9 9 0 0 1 0 12" }, { r: "draw", d: 0.22, o: [21.5, 12] }],
  ],
});
