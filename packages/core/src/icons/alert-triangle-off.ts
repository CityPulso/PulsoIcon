import { icon } from "../icon.js";

// Adapted from Tabler Icons "alert-triangle-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlertTriangleOff = icon("AlertTriangleOff", "alert-triangle-off", {
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
  solid: [
    ["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }, { r: "shake", o: [12, 12] }],
    ["path", { d: "M12 9v4" }, { r: "draw" }, "line"],
    ["path", { d: "M12 17h.01" }, { r: "pop", d: 0.1, o: [12, 16] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
