import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "alert-small-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlertSmallOff = createIcon("AlertSmallOff", "alert-small-off", {
  nodes: [
    ["path", { d: "M12 16h.01" }, { r: "pop", d: 0.1, o: [12, 16] }],
    ["path", { d: "M12 7v1" }, { r: "draw" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
