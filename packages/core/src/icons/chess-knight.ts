import { icon } from "../icon.js";

export const ChessKnight = icon("ChessKnight", "chess-knight", {
  nodes: [
    ["path", { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" }, { r: "press", d: 0.15, a: 0.06, o: [12, 20] }],
    [
      "path",
      { d: "M16.5 18c1-2 2.5-5 2.5-9a7 7 0 0 0-7-7H6.635a1 1 0 0 0-.768 1.64L7 5l-2.32 5.802a2 2 0 0 0 .95 2.526l2.87 1.456" },
      { r: "bounce", y: -1, a: 2, o: [11.768, 10] },
    ],
    ["path", { d: "m15 5 1.425-1.425" }, { r: "bounce", y: -1, a: 2, o: [11.768, 10] }],
    ["path", { d: "m17 8 1.53-1.53" }, { r: "bounce", y: -1, a: 2, o: [11.768, 10] }],
    ["path", { d: "M9.713 12.185 7 18" }, { r: "bounce", y: -1, a: 2, o: [11.768, 10] }],
  ],
});
