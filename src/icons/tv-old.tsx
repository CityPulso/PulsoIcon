import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-tv-old" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TvOld = createIcon("TvOld", "tv-old", {
  nodes: [
    ["path", { d: "M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9" }],
    ["path", { d: "M16 3l-4 4l-4 -4" }, { r: "swing", a: 12, o: [12, 7] }],
    ["path", { d: "M15 7v13" }],
    ["path", { d: "M18 15v.01" }, { r: "pop", d: 0.15, o: [18, 15] }],
    ["path", { d: "M18 12v.01" }, { r: "pop", d: 0.25, o: [18, 12] }],
  ],
});
