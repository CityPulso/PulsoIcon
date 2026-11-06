import { icon } from "../icon.js";

export const Elevator = icon("Elevator", "elevator", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m8 10 4-4 4 4" }, { r: "slide", y: -1, a: 1.5, o: [12, 8] }],
    ["path", { d: "m8 14 4 4 4-4" }, { r: "slide", y: 1, a: 1.5, d: 0.1, o: [12, 16] }],
  ],
});
