import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ce-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CeOff = createIcon("CeOff", "ce-off", {
  nodes: [
    ["path", { d: "M6.53 6.53a6.001 6.001 0 0 0 2.47 11.47" }, { r: "draw" }],
    ["path", { d: "M21 6a6 6 0 0 0 -5.927 5.061l.927 .939" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M16 12h5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M9 6a6 6 0 1 0 0 12", fill: "none" }, { r: "draw" }],
    ["path", { d: "M21 6a6 6 0 1 0 0 12", fill: "none" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M15 12h6", fill: "none" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
