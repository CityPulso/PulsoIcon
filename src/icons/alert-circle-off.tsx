import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "alert-circle-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlertCircleOff = createIcon("AlertCircleOff", "alert-circle-off", {
  nodes: [
    ["path", { d: "M5.644 5.629a9 9 0 1 0 12.715 12.741m1.693 -2.349a9 9 0 0 0 -12.087 -12.068" }],
    ["path", { d: "M12 7v1" }, { r: "draw" }],
    ["path", { d: "M12 16h.01" }, { r: "pop", d: 0.1, o: [12, 16] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
