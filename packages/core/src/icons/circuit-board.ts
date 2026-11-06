import { icon } from "../icon.js";

export const CircuitBoard = icon("CircuitBoard", "circuit-board", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M11 9h4a2 2 0 0 0 2-2V3" }, { r: "draw", o: [12, 12] }],
    ["circle", { cx: "9", cy: "9", r: "2" }, { r: "pop", d: 0.25, o: [9, 9] }],
    ["path", { d: "M7 21v-4a2 2 0 0 1 2-2h4" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["circle", { cx: "15", cy: "15", r: "2" }, { r: "pop", d: 0.33, o: [15, 15] }],
  ],
});
