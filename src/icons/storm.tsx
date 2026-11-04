import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "storm" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Storm = createIcon("Storm", "storm", {
  nodes: [
    ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pulse", a: 0.2, o: [12, 12] }],
    ["path", { d: "M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }, { r: "spin", d: 0.05, o: [12, 12] }],
    ["path", { d: "M5.369 14.236c-1.839 -3.929 -1.561 -7.616 -.704 -11.236" }, { r: "spin", d: 0.05, o: [12, 12] }],
    ["path", { d: "M18.63 9.76c1.837 3.928 1.561 7.615 .703 11.236" }, { r: "spin", d: 0.05, o: [12, 12] }],
  ],
});
