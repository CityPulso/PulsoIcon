import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "sailboat-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SailboatOff = createIcon("SailboatOff", "sailboat-off", {
  nodes: [
    [
      "path",
      {
        d: "M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1",
      },
      { r: "slide", d: 0, x: 1, y: 0, a: 1 },
    ],
    ["path", { d: "M4 18l-1 -3h12m4 0h2l-.506 1.517" }, { r: "sway", d: 0.05, a: 4, o: [12, 18] }],
    ["path", { d: "M11 11v1h1m4 0h2l-7 -9v4" }, { r: "sway", d: 0.05, a: 4, o: [12, 18] }],
    ["path", { d: "M7.713 7.718l-1.713 4.282" }, { r: "sway", d: 0.05, a: 4, o: [12, 18] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
