import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "coffee-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CoffeeOff = createIcon("CoffeeOff", "coffee-off", {
  nodes: [
    ["path", { d: "M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.73 -.565 1.783 -.923 3 -.99" }, { r: "pulse", a: 0.03, o: [9, 15] }],
    ["path", { d: "M8 3c-.194 .14 -.364 .305 -.506 .49" }, { r: "float", d: 0.1, o: [8, 4] }],
    ["path", { d: "M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" }, { r: "float", d: 0.2, o: [12, 5] }],
    ["path", { d: "M14 10h3v3m-.257 3.743a6 6 0 0 1 -5.743 4.257h-2a6 6 0 0 1 -6 -6v-5h7" }, { r: "pulse", a: 0.03, o: [9, 15] }],
    ["path", { d: "M20.116 16.124a3 3 0 0 0 -3.118 -4.953" }, { r: "pulse", a: 0.03, o: [9, 15] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M10 2v2", fill: "none" }, { r: "float", d: 0.1, o: [8, 4] }],
    ["path", { d: "M14 2v2", fill: "none" }, { r: "float", d: 0.2, o: [12, 5] }],
    ["path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1", fill: "none" }, { r: "pulse", a: 0.03, o: [9, 15] }],
    ["path", { d: "M6 2v2", fill: "none" }, { r: "float", d: 0.1, o: [8, 4] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
