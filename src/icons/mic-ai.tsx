import { createIcon } from "../runtime/createIcon.js";

export const MicAi = createIcon("MicAi", "mic-ai", {
  nodes: [
    ["path", { d: "M9 15v6" }, { r: "grow", d: 0.15, o: [9, 15] }],
    ["path", { d: "M14 9v1a5 5 0 0 1-10 0V9" }, { r: "redraw", d: 0.05, o: [9, 12.5] }],
    ["rect", { x: "6", y: "2", width: "6", height: "11", rx: "3" }, { r: "pulse", a: 0.08, o: [9, 7.5] }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw", d: 0.2, o: [16, 19] }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.35, o: [16, 19] }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.45, o: [21, 18] }],
  ],
});
