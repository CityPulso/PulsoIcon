import { icon } from "../icon.js";

export const Gamepad = icon("Gamepad", "gamepad", {
  nodes: [
    ["line", { x1: "6", x2: "10", y1: "12", y2: "12" }, { r: "spin", d: 0.1, a: 90, o: [8, 12] }],
    ["line", { x1: "8", x2: "8", y1: "10", y2: "14" }, { r: "spin", d: 0.1, a: 90, o: [8, 12] }],
    ["line", { x1: "15", x2: "15.01", y1: "13", y2: "13" }, { r: "pop", d: 0.15, o: [15.005, 13] }],
    ["line", { x1: "18", x2: "18.01", y1: "11", y2: "11" }, { r: "pop", d: 0.23, o: [18.005, 11] }],
    ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }, { r: "wobble", a: 5, o: [12, 12] }],
  ],
});
