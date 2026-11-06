import { icon } from "../icon.js";

// Adapted from Tabler Icons "user-scan" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const UserScan = icon("UserScan", "user-scan", {
  nodes: [
    ["path", { d: "M10 9a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, { r: "bounce", d: 0.15, x: 0, y: -1, a: 1, o: [12, 9] }],
    ["path", { d: "M8 16a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" }, { r: "bounce", d: 0.2, x: 0, y: -1, a: 0.5, o: [12, 15] }],
    ["path", { d: "M3 7v-2a2 2 0 0 1 2 -2h2" }, { r: "pulse", a: 0.15, o: [5, 5] }],
    ["path", { d: "M3 17v2a2 2 0 0 0 2 2h2" }, { r: "pulse", a: 0.15, o: [5, 19] }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }, { r: "pulse", a: 0.15, o: [19, 5] }],
    ["path", { d: "M17 21h2a2 2 0 0 0 2 -2v-2" }, { r: "pulse", a: 0.15, o: [19, 19] }],
  ],
});
