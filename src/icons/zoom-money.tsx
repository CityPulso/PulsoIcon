import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "zoom-money" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ZoomMoney = createIcon("ZoomMoney", "zoom-money", {
  nodes: [
    ["path", { d: "M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }, { r: "tilt", a: 12, o: [10, 10] }],
    ["path", { d: "M21 21l-6 -6" }, { r: "tilt", a: 12, o: [10, 10] }],
    ["path", { d: "M12 7h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M10 13v1m0 -8v1" }, { r: "draw", d: 0.15 }],
  ],
});
