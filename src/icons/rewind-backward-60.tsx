import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "rewind-backward-60" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RewindBackward60 = createIcon("RewindBackward60", "rewind-backward-60", {
  nodes: [
    ["path", { d: "M19.007 16.466a6 6 0 0 0 -4.007 -10.466h-11" }, { r: "draw" }],
    ["path", { d: "M7 9l-3 -3l3 -3" }, { r: "slide", d: 0.35, x: -1, y: 0, a: 1.5, o: [5, 6] }],
    ["path", { d: "M12 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M9 14h-2a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2" }, { r: "draw", d: 0.25 }],
  ],
});
