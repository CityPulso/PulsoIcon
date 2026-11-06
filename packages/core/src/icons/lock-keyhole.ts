import { icon } from "../icon.js";

export const LockKeyhole = icon("LockKeyhole", "lock-keyhole", {
  nodes: [
    ["circle", { cx: "12", cy: "16", r: "1" }, { r: "pop", d: 0.1, o: [12, 16] }],
    ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2" }, { r: "press", d: 0.05, a: 0.04, o: [12, 16] }],
    ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3" }, { r: "lift", o: [12, 6] }],
  ],
});
