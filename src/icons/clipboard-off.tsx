import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "clipboard-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClipboardOff = createIcon("ClipboardOff", "clipboard-off", {
  nodes: [
    ["path", { d: "M5.575 5.597a2 2 0 0 0 -.575 1.403v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2m0 -4v-8a2 2 0 0 0 -2 -2h-2" }],
    ["path", { d: "M9 5a2 2 0 0 1 2 -2h2a2 2 0 1 1 0 4h-2" }, { r: "float", o: [12, 5] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }, { r: "float", o: [12, 5] }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", fill: "none" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
