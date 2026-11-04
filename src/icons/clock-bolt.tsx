import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "clock-bolt" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClockBolt = createIcon("ClockBolt", "clock-bolt", {
  nodes: [
    ["path", { d: "M20.984 12.53a9 9 0 1 0 -7.552 8.355" }],
    ["path", { d: "M12 7v5l3 3" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M19 16l-2 3h4l-2 3" }, { r: "flicker", d: 0.1 }],
  ],
});
