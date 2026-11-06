import { icon } from "../icon.js";

export const HardHat = icon("HardHat", "hard-hat", {
  nodes: [
    ["path", { d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" }, { r: "drop", a: 3, o: [12, 9.5] }],
    ["path", { d: "M14 6a6 6 0 0 1 6 6v3" }, { r: "drop", a: 3, o: [12, 9.5] }],
    ["path", { d: "M4 15v-3a6 6 0 0 1 6-6" }, { r: "drop", a: 3, o: [12, 9.5] }],
    ["rect", { x: "2", y: "15", width: "20", height: "4", rx: "1" }, { r: "press", d: 0.15, a: 0.08, o: [12, 17] }],
  ],
});
