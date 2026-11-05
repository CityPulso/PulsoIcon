import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "point-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "point" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PointOff = createIcon("PointOff", "point-off", {
  nodes: [
    ["path", { d: "M9.15 9.194a4 4 0 0 0 5.697 5.617m1.153 -2.811a4 4 0 0 0 -4 -4" }, { r: "pulse", a: 0.15, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z", stroke: "none" }, { r: "pulse", a: 0.15, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
