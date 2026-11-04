import { createIcon } from "../runtime/createIcon.js";

export const HandPinch = createIcon("HandPinch", "hand-pinch", {
  nodes: [
    ["path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }, { r: "press", a: 0.05, o: [14, 16] }],
    ["path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v6" }, { r: "press", a: 0.05, o: [14, 16] }],
    ["path", { d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2a7 7 0 0 1-7-7" }, { r: "press", a: 0.05, o: [14, 16] }],
    ["circle", { cx: "7", cy: "11", r: "3" }, { r: "press", d: 0.1, a: 0.3, o: [7, 11] }],
  ],
});
