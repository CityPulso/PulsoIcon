import { createIcon } from "../runtime/createIcon.js";

// Solid from Tabler Icons "bookmark" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BookmarkOff = createIcon("BookmarkOff", "bookmark-off", {
  nodes: [
    ["path", { d: "M19 19v1a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5" }, { r: "swing", a: 8, o: [12, 3] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M8.656 3H17a2 2 0 0 1 2 2v8.344" }, { r: "swing", a: 8, o: [12, 3] }],
  ],
  solid: [
    [
      "path",
      { d: "M14 2a5 5 0 0 1 5 5v14a1 1 0 0 1 -1.555 .832l-5.445 -3.63l-5.444 3.63a1 1 0 0 1 -1.55 -.72l-.006 -.112v-14a5 5 0 0 1 5 -5h4z", stroke: "none" },
      { r: "swing", a: 8, o: [12, 3] },
    ],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
