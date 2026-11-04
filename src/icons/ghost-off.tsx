import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ghost-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GhostOff = createIcon("GhostOff", "ghost-off", {
  nodes: [
    [
      "path",
      {
        d: "M8.794 4.776a7 7 0 0 1 10.206 6.224v4m-.12 3.898a1.779 1.779 0 0 1 -2.98 .502a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7c0 -1.683 .594 -3.227 1.583 -4.434",
      },
      { r: "float", o: [12, 12] },
    ],
    ["path", { d: "M14 10h.01" }, { r: "blink", d: 0.2, o: [14, 10] }],
    ["path", { d: "M10 14a3.5 3.5 0 0 0 4 0" }, { r: "float", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
