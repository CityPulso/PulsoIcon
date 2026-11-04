import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "heart-pin" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HeartPin = createIcon("HeartPin", "heart-pin", {
  nodes: [
    ["path", { d: "M12 20l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.5 5.179" }, { r: "beat", d: 0, a: 0.06, o: [12, 12] }],
    ["path", { d: "M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" }, { r: "bounce", d: 0.1, x: 0, y: -1, a: 1.5 }],
    ["path", { d: "M19 18v.01" }, { r: "bounce", d: 0.1, x: 0, y: -1, a: 1.5 }],
  ],
});
