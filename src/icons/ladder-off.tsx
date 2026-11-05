import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ladder-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LadderOff = createIcon("LadderOff", "ladder-off", {
  nodes: [
    ["path", { d: "M8 3v1m0 4v13" }],
    ["path", { d: "M16 3v9m0 4v5" }],
    ["path", { d: "M8 14h6" }, { r: "fade" }],
    ["path", { d: "M8 10h2m4 0h2" }, { r: "fade" }],
    ["path", { d: "M10 6h6" }, { r: "fade" }],
    ["path", { d: "M8 18h8" }, { r: "fade" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M7 2v20", fill: "none" }],
    ["path", { d: "M17 2v20", fill: "none" }],
    ["path", { d: "M7 6h10", fill: "none" }, { r: "fade" }],
    ["path", { d: "M7 10h10", fill: "none" }, { r: "fade" }],
    ["path", { d: "M7 14h10", fill: "none" }, { r: "fade" }],
    ["path", { d: "M7 18h10", fill: "none" }, { r: "fade" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
