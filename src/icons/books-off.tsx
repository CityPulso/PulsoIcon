import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "books-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BooksOff = createIcon("BooksOff", "books-off", {
  nodes: [
    ["path", { d: "M9 9v10a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-14" }, { r: "lift", x: 0, y: -1, a: 0, o: [7, 12] }],
    ["path", { d: "M8 4a1 1 0 0 1 1 1" }, { r: "lift", x: 0, y: -1, a: 0, o: [7, 12] }],
    ["path", { d: "M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4" }, { r: "lift", d: 0.08, x: 0, y: -1, a: 0, o: [11, 12] }],
    ["path", { d: "M13 13v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-10" }, { r: "lift", d: 0.08, x: 0, y: -1, a: 0, o: [11, 12] }],
    ["path", { d: "M5 8h3" }, { r: "lift", x: 0, y: -1, a: 0, o: [7, 12] }],
    ["path", { d: "M9 16h4" }, { r: "lift", d: 0.08, x: 0, y: -1, a: 0, o: [11, 12] }],
    [
      "path",
      { d: "M14.254 10.244l-1.218 -4.424a1.02 1.02 0 0 1 .634 -1.219l.133 -.041l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.236 11.75" },
      { r: "tilt", d: 0.16, a: 6, o: [17, 20] },
    ],
    ["path", { d: "M19.585 19.589l-1.572 .38c-.562 .136 -1.133 -.19 -1.282 -.731l-.952 -3.458" }, { r: "tilt", d: 0.16, a: 6, o: [17, 20] }],
    ["path", { d: "M14 9l4 -1" }, { r: "tilt", d: 0.16, a: 6, o: [17, 20] }],
    ["path", { d: "M19.207 15.199l.716 -.18" }, { r: "tilt", d: 0.16, a: 6, o: [17, 20] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
