import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ruler-2-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Ruler2Off = createIcon("Ruler2Off", "ruler-2-off", {
  nodes: [
    ["path", { d: "M12.03 7.97l4.97 -4.97l4 4l-5 5m-2 2l-7 7l-4 -4l7 -7" }],
    ["path", { d: "M16 7l-1.5 -1.5" }, { r: "draw", o: [15, 6] }],
    ["path", { d: "M10 13l-1.5 -1.5" }, { r: "draw", d: 0.08, o: [9, 12] }],
    ["path", { d: "M7 16l-1.5 -1.5" }, { r: "draw", d: 0.16, o: [6, 15] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
