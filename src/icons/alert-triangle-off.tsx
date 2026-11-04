import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "alert-triangle-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlertTriangleOff = createIcon("AlertTriangleOff", "alert-triangle-off", {
  nodes: [
    [
      "path",
      { d: "M21.998 17.997a1.913 1.913 0 0 0 -.255 -.872l-8.106 -13.534a1.914 1.914 0 0 0 -3.274 0l-1.04 1.736m-1.493 2.493l-5.573 9.304a1.914 1.914 0 0 0 1.636 2.871h16.107" },
      { r: "shake", o: [12, 12] },
    ],
    ["path", { d: "M12 16h.01" }, { r: "pop", d: 0.1, o: [12, 16] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M12 7v1" }, { r: "draw" }],
  ],
});
