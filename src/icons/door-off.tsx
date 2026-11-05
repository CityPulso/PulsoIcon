import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "door-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DoorOff = createIcon("DoorOff", "door-off", {
  nodes: [
    ["path", { d: "M3 21h18" }, { r: "draw" }],
    ["path", { d: "M6 21v-15" }],
    ["path", { d: "M7.18 3.175c.25 -.112 .528 -.175 .82 -.175h8a2 2 0 0 1 2 2v9" }, { r: "swing", o: [6, 12] }],
    ["path", { d: "M18 18v3" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" }, { r: "swing", o: [6, 12] }],
    ["path", { d: "M2 21h20", fill: "none" }, { r: "draw" }],
    ["path", { d: "M9 12h.01" }, undefined, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
