import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "icons-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const IconsOff = createIcon("IconsOff", "icons-off", {
  nodes: [
    ["path", { d: "M4.01 4.041a3.5 3.5 0 0 0 2.49 5.959c.975 0 1.865 -.357 2.5 -1m.958 -3.044a3.503 3.503 0 0 0 -2.905 -2.912" }, { r: "pop", o: [6.5, 6.5] }],
    ["path", { d: "M2.5 21h8l-4 -7l-4 7" }, { r: "pop", d: 0.1, o: [6.5, 18] }],
    ["path", { d: "M14 3l7 7" }, { r: "spin", d: 0.05, a: 90, o: [17.5, 6.5] }],
    ["path", { d: "M14 10l7 -7" }, { r: "spin", d: 0.05, a: 90, o: [17.5, 6.5] }],
    ["path", { d: "M18 14h3v3m0 4h-7v-7" }, { r: "pop", d: 0.15, o: [17.5, 17.5] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
