import { icon } from "../icon.js";

export const WallOutlet = icon("WallOutlet", "wall-outlet", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M9 8v4" }, { r: "pop", d: 0.05, o: [9, 10] }],
    ["path", { d: "M15 8v4" }, { r: "pop", d: 0.1, o: [15, 10] }],
    ["path", { d: "M11 17v-1a1 1 0 0 1 2 0v1" }, { r: "pop", d: 0.15, o: [12, 16] }],
  ],
});
