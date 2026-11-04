import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "camera-selfie" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CameraSelfie = createIcon("CameraSelfie", "camera-selfie", {
  nodes: [
    [
      "path",
      { d: "M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" },
      { r: "press", d: 0, a: 0.08, o: [12, 12] },
    ],
    ["path", { d: "M9.5 15a3.5 3.5 0 0 0 5 0" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M15 11l.01 0" }, { r: "blink", d: 0.1, o: [15, 11] }],
    ["path", { d: "M9 11l.01 0" }, { r: "blink", d: 0.1, o: [9, 11] }],
  ],
});
