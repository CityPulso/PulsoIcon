import { icon } from "../icon.js";

// Adapted from Tabler Icons "archive-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ArchiveOff = icon("ArchiveOff", "archive-off", {
  nodes: [
    ["path", { d: "M8 4h11a2 2 0 1 1 0 4h-7m-4 0h-3a2 2 0 0 1 -.826 -3.822" }, { r: "lift", x: 0, y: -1, a: 0, o: [12, 6] }],
    ["path", { d: "M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 1.824 -1.18m.176 -3.82v-7" }],
    ["path", { d: "M10 12h2" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }, { r: "lift", x: 0, y: -1, a: 0, o: [12, 6] }],
    ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }],
    ["path", { d: "M10 12h4" }, undefined, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
