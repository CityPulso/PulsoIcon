import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "record-mail-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RecordMailOff = createIcon("RecordMailOff", "record-mail-off", {
  nodes: [
    ["path", { d: "M4 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "spin", a: 360, o: [7, 12] }],
    ["path", { d: "M18.569 14.557a3 3 0 1 0 -4.113 -4.149" }, { r: "spin", a: 360, o: [17, 12] }],
    ["path", { d: "M7 15h8" }, { r: "growX", o: [7, 15] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["circle", { cx: "6", cy: "12", r: "4" }, { r: "spin", a: 360, o: [7, 12] }],
    ["circle", { cx: "18", cy: "12", r: "4" }, { r: "spin", a: 360, o: [17, 12] }],
    ["line", { x1: "6", x2: "18", y1: "16", y2: "16", fill: "none" }, { r: "growX", o: [7, 15] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
