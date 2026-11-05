import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "movie-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MovieOff = createIcon("MovieOff", "movie-off", {
  nodes: [
    ["path", { d: "M8 4h10a2 2 0 0 1 2 2v10m-.592 3.42c-.362 .359 -.859 .58 -1.408 .58h-12a2 2 0 0 1 -2 -2v-12c0 -.539 .213 -1.028 .56 -1.388" }, { r: "blink", o: [12, 12] }],
    ["path", { d: "M8 8v12" }, { r: "blink", o: [12, 12] }],
    ["path", { d: "M16 4v8m0 4v4" }, { r: "blink", o: [12, 12] }],
    ["path", { d: "M4 8h4" }, { r: "blink", o: [12, 12] }],
    ["path", { d: "M4 16h4" }, { r: "blink", o: [12, 12] }],
    ["path", { d: "M4 12h8m4 0h4" }, { r: "blink", o: [12, 12] }],
    ["path", { d: "M16 8h4" }, { r: "blink", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "blink", o: [12, 12] }],
    ["path", { d: "M7 3v18" }, { r: "blink", o: [12, 12] }, "line"],
    ["path", { d: "M3 7.5h4" }, { r: "blink", o: [12, 12] }, "line"],
    ["path", { d: "M3 12h18" }, { r: "blink", o: [12, 12] }, "line"],
    ["path", { d: "M3 16.5h4" }, { r: "blink", o: [12, 12] }, "line"],
    ["path", { d: "M17 3v18" }, { r: "blink", o: [12, 12] }, "line"],
    ["path", { d: "M17 7.5h4" }, { r: "blink", o: [12, 12] }, "line"],
    ["path", { d: "M17 16.5h4" }, { r: "blink", o: [12, 12] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
