import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "heart-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HeartPause = createIcon("HeartPause", "heart-pause", {
  nodes: [
    ["path", { d: "M19.5 12.572l-.784 .777m-5.725 5.67l-.991 .981l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" }, { r: "beat", d: 0, a: 0.06, o: [12, 12] }],
    ["path", { d: "M17 17v5" }, { r: "press", d: 0.1, o: [19, 19.5] }],
    ["path", { d: "M21 17v5" }, { r: "press", d: 0.15, o: [19, 19.5] }],
  ],
});
