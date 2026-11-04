import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "compass-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CompassOff = createIcon("CompassOff", "compass-off", {
  nodes: [
    ["path", { d: "M13 9l3 -1l-1 3m-1 3l-6 2l2 -6" }, { r: "turn", a: 45, o: [12, 12] }],
    ["path", { d: "M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73" }, { r: "pulse", a: 0.03, o: [12, 12] }],
    ["path", { d: "M12 3v2" }],
    ["path", { d: "M12 19v2" }],
    ["path", { d: "M3 12h2" }],
    ["path", { d: "M19 12h2" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
