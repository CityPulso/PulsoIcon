import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "golf-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GolfOff = createIcon("GolfOff", "golf-off", {
  nodes: [
    ["path", { d: "M12 18v-6m0 -4v-5l7 4l-5.07 2.897" }, { r: "swing", o: [12, 18] }],
    ["path", { d: "M9 17.67c-.62 .36 -1 .82 -1 1.33c0 1.1 1.8 2 4 2s4 -.9 4 -2c0 -.5 -.38 -.97 -1 -1.33" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
