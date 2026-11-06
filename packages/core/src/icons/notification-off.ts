import { icon } from "../icon.js";

// Adapted from Tabler Icons "notification-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const NotificationOff = icon("NotificationOff", "notification-off", {
  nodes: [
    ["path", { d: "M6.154 6.187a2 2 0 0 0 -1.154 1.813v9a2 2 0 0 0 2 2h9a2 2 0 0 0 1.811 -1.151" }, { r: "press", o: [11, 13] }],
    ["path", { d: "M14 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", o: [17, 7] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M10 6h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3", fill: "none" }, { r: "press", o: [11, 13] }],
    ["path", { d: "M14 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", o: [17, 7] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
