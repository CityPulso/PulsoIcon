import { icon } from "../icon.js";

// Adapted from Tabler Icons "layout-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LayoutOff = icon("LayoutOff", "layout-off", {
  nodes: [
    ["path", { d: "M8 4a2 2 0 0 1 2 2m-1.162 2.816a1.993 1.993 0 0 1 -.838 .184h-2a2 2 0 0 1 -2 -2v-1c0 -.549 .221 -1.046 .58 -1.407" }, { r: "pop", o: [7, 7] }],
    ["path", { d: "M4 15a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -3" }, { r: "pop", d: 0.08, o: [7, 16.5] }],
    ["path", { d: "M14 10v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v10m-.595 3.423a2 2 0 0 1 -1.405 .577h-2a2 2 0 0 1 -2 -2v-4" }, { r: "pop", d: 0.16, o: [17, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "pop", d: 0.16, o: [17, 12] }],
    ["path", { d: "M3 9h18" }, { r: "pop", o: [7, 7] }, "line"],
    ["path", { d: "M9 21V9" }, { r: "pop", d: 0.08, o: [7, 16.5] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
