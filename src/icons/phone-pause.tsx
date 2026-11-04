import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "phone-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PhonePause = createIcon("PhonePause", "phone-pause", {
  nodes: [
    ["path", { d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2c-8.072 -.49 -14.51 -6.928 -15 -15a2 2 0 0 1 2 -2" }],
    ["path", { d: "M17 3v5" }, { r: "press", d: 0.1, a: 0.25, o: [19, 5.5] }],
    ["path", { d: "M21 3v5" }, { r: "press", d: 0.1, a: 0.25, o: [19, 5.5] }],
  ],
});
