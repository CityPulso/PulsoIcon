import { createIcon } from "../runtime/createIcon.js";

export const ChessBishop = createIcon("ChessBishop", "chess-bishop", {
  nodes: [
    ["path", { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" }, { r: "press", a: 0.06, o: [12, 20] }],
    ["path", { d: "M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18" }, { r: "wobble", a: 8, o: [12, 18] }],
    ["path", { d: "m16 7-2.5 2.5" }, { r: "wobble", a: 8, o: [12, 18] }],
    ["path", { d: "M9 2h6" }, { r: "wobble", a: 8, o: [12, 18] }],
  ],
});
