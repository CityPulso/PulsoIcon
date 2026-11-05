import { createIcon } from "../runtime/createIcon.js";

// Solid from Tabler Icons "chess-rook" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChessRook = createIcon("ChessRook", "chess-rook", {
  svg: { r: "stamp", a: 0.3, o: [12, 22] },
  nodes: [
    ["path", { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" }],
    ["path", { d: "M10 2v2" }],
    ["path", { d: "M14 2v2" }],
    ["path", { d: "m17 18-1-9" }],
    ["path", { d: "M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2" }],
    ["path", { d: "M6 4h12" }],
    ["path", { d: "m7 18 1-9" }],
  ],
  solid: [
    [
      "path",
      {
        d: "M14 3a1 1 0 0 1 .993 .883l.007 .117v2h1.652l.362 -2.164a1 1 0 0 1 1.034 -.836l.116 .013a1 1 0 0 1 .836 1.035l-.013 .116l-.5 3a1 1 0 0 1 -.865 .829l-.122 .007h-1.383l.877 7.89a1 1 0 0 1 -.877 1.103l-.117 .007h-8a1 1 0 0 1 -1 -.993l.006 -.117l.877 -7.89h-1.383a1 1 0 0 1 -.96 -.718l-.026 -.118l-.5 -3a1 1 0 0 1 1.947 -.442l.025 .114l.361 2.164h1.653v-2a1 1 0 0 1 1.993 -.117l.007 .117v2h2v-2a1 1 0 0 1 1 -1z",
        stroke: "none",
      },
    ],
    ["path", { d: "M18 18h-12a1 1 0 0 0 -1 1a2 2 0 0 0 2 2h10a2 2 0 0 0 1.987 -1.768l.011 -.174a1 1 0 0 0 -.998 -1.058z", stroke: "none" }],
  ],
});
