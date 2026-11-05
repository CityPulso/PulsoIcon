import { createIcon } from "../runtime/createIcon.js";

// Solid from Tabler Icons "thumb-up" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ThumbsUp = createIcon("ThumbsUp", "thumbs-up", {
  nodes: [
    [
      "path",
      { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" },
      { r: "turn", a: 12, o: [7, 12] },
    ],
    ["path", { d: "M7 10v12" }, { r: "turn", a: 12, o: [7, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M13 3a3 3 0 0 1 2.995 2.824l.005 .176v4h2a3 3 0 0 1 2.98 2.65l.015 .174l.005 .176l-.02 .196l-1.006 5.032c-.381 1.626 -1.502 2.796 -2.81 2.78l-.164 -.008h-8a1 1 0 0 1 -.993 -.883l-.007 -.117l.001 -9.536a1 1 0 0 1 .5 -.865a2.998 2.998 0 0 0 1.492 -2.397l.007 -.202v-1a3 3 0 0 1 3 -3z",
        stroke: "none",
      },
      { r: "turn", a: 12, o: [7, 12] },
    ],
    [
      "path",
      { d: "M5 10a1 1 0 0 1 .993 .883l.007 .117v9a1 1 0 0 1 -.883 .993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7a2 2 0 0 1 1.85 -1.995l.15 -.005h1z", stroke: "none" },
      { r: "turn", a: 12, o: [7, 12] },
    ],
  ],
});
