import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-watch-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WatchOff = createIcon("WatchOff", "watch-off", {
  nodes: [
    ["path", { d: "M10 6h5a3 3 0 0 1 3 3v5m-.89 3.132a2.99 2.99 0 0 1 -2.11 .868h-6a3 3 0 0 1 -3 -3v-6c0 -.817 .327 -1.559 .857 -2.1" }, { r: "tilt", a: 8, o: [12, 12] }],
    ["path", { d: "M9 18v3h6v-3" }, { r: "tilt", a: 8, o: [12, 12] }],
    ["path", { d: "M9 5v-2h6v3" }, { r: "tilt", a: 8, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M12 10v2.2l1.6 1" }, { r: "tilt", a: 8, o: [12, 12] }, "line"],
    ["path", { d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05", fill: "none" }, { r: "tilt", a: 8, o: [12, 12] }],
    ["path", { d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05", fill: "none" }, { r: "tilt", a: 8, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "6" }, { r: "tilt", a: 8, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
