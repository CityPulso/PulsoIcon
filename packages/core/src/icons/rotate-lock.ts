import { icon } from "../icon.js";

export const RotateLock = icon("RotateLock", "rotate-lock", {
  nodes: [
    ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M21 3v5h-5" }, { r: "spin", o: [12, 12] }],
    ["rect", { x: "9", y: "11", width: "6", height: "5", rx: "1" }, { r: "press", d: 0.2, a: 0.1, o: [12, 13.5] }],
    ["path", { d: "M10 11V9.5a2 2 0 0 1 4 0V11" }, { r: "press", d: 0.2, a: 0.1, o: [12, 13.5] }],
  ],
});
