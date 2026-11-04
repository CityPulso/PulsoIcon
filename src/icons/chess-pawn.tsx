import { createIcon } from "../runtime/createIcon.js";

export const ChessPawn = createIcon("ChessPawn", "chess-pawn", {
  nodes: [
    ["path", { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" }, { r: "press", d: 0.1, a: 0.04, o: [12, 20] }],
    ["path", { d: "m14.5 10 1.5 8" }, { r: "press", d: 0.05, a: 0.06, o: [12, 18] }],
    ["path", { d: "M7 10h10" }, { r: "press", d: 0.05, a: 0.06, o: [12, 18] }],
    ["path", { d: "m8 18 1.5-8" }, { r: "press", d: 0.05, a: 0.06, o: [12, 18] }],
    ["circle", { cx: "12", cy: "6", r: "4" }, { r: "bounce", y: -1, a: 2, o: [12, 6] }],
  ],
});
