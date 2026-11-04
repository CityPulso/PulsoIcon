import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "glass-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GlassOff = createIcon("GlassOff", "glass-off", {
  nodes: [
    ["path", { d: "M8 21h8" }, { r: "tilt", a: 6, o: [12, 21] }],
    ["path", { d: "M12 16v5" }, { r: "tilt", a: 6, o: [12, 21] }],
    [
      "path",
      { d: "M17 5l1 6c0 .887 -.233 1.685 -.646 2.37m-2.083 1.886c-.941 .48 -2.064 .744 -3.271 .744c-3.314 0 -6 -1.988 -6 -5l.711 -4.268" },
      { r: "tilt", a: 6, o: [12, 21] },
    ],
    ["path", { d: "M10.983 6.959c.329 .027 .669 .041 1.017 .041c2.761 0 5 -.895 5 -2s-2.239 -2 -5 -2c-1.716 0 -3.23 .346 -4.13 .872" }, { r: "tilt", a: 6, o: [12, 21] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
