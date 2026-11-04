import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "router-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RouterOff = createIcon("RouterOff", "router-off", {
  nodes: [
    ["path", { d: "M17 13h2a2 2 0 0 1 2 2v2m-.588 3.417c-.362 .36 -.861 .583 -1.412 .583h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h8" }],
    ["path", { d: "M17 17v.01" }, { r: "flicker", d: 0.05, o: [15, 17] }],
    ["path", { d: "M13 17v.01" }, { r: "flicker", d: 0.05, o: [15, 17] }],
    ["path", { d: "M12.226 8.2a4 4 0 0 1 6.024 .55" }, { r: "fade", o: [15, 10] }],
    ["path", { d: "M9.445 5.407a8 8 0 0 1 12.055 1.093" }, { r: "fade", d: 0.12, o: [15, 10] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
