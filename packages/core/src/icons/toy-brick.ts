import { icon } from "../icon.js";

export const ToyBrick = icon("ToyBrick", "toy-brick", {
  nodes: [
    ["rect", { width: "18", height: "12", x: "3", y: "8", rx: "1" }, { r: "press", d: 0.1, a: 0.04, o: [12, 14] }],
    ["path", { d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" }, { r: "bounce", y: -1, a: 2, o: [7.5, 6] }],
    ["path", { d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" }, { r: "bounce", d: 0.08, y: -1, a: 2, o: [16.5, 6] }],
  ],
});
