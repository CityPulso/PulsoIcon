import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "heart-bolt" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HeartBolt = createIcon("HeartBolt", "heart-bolt", {
  nodes: [
    ["path", { d: "M13 19l-1 1l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.003 5.997" }, { r: "beat", d: 0, a: 0.06, o: [12, 12] }],
    ["path", { d: "M19 16l-2 3h4l-2 3" }, { r: "flicker", d: 0.1, o: [19, 19] }],
  ],
});
