import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "book-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BookOff = createIcon("BookOff", "book-off", {
  nodes: [
    ["path", { d: "M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096" }, { r: "float", o: [12, 12] }],
    ["path", { d: "M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0" }, { r: "float", o: [12, 12] }],
    ["path", { d: "M3 6v13" }, { r: "float", o: [12, 12] }],
    ["path", { d: "M12 6v2m0 4v7" }, { r: "float", o: [12, 12] }],
    ["path", { d: "M21 6v11" }, { r: "float", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
