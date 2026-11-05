import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "lock-access-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LockAccessOff = createIcon("LockAccessOff", "lock-access-off", {
  nodes: [
    ["path", { d: "M4 8v-2c0 -.554 .225 -1.055 .588 -1.417" }],
    ["path", { d: "M4 16v2a2 2 0 0 0 2 2h2" }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }],
    ["path", { d: "M16 20h2c.55 0 1.05 -.222 1.41 -.582" }],
    ["path", { d: "M15 11a1 1 0 0 1 1 1m-.29 3.704a1 1 0 0 1 -.71 .296h-6a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h2" }, { r: "press", o: [12, 13] }],
    ["path", { d: "M10 11v-1m1.182 -2.826a2 2 0 0 1 2.818 1.826v1" }, { r: "lift", y: -1, a: 0, o: [14, 10] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M4 8v-2a2 2 0 0 1 2 -2h2", fill: "none" }],
    ["path", { d: "M4 16v2a2 2 0 0 0 2 2h2", fill: "none" }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2", fill: "none" }],
    ["path", { d: "M16 20h2a2 2 0 0 0 2 -2v-2", fill: "none" }],
    ["path", { d: "M8 12a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -3" }, { r: "press", o: [12, 13] }],
    ["path", { d: "M10 11v-2a2 2 0 1 1 4 0v2" }, { r: "lift", y: -1, a: 0, o: [14, 10] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
