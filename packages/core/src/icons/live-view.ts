import { icon } from "../icon.js";

// Adapted from Tabler Icons "live-view" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LiveView = icon("LiveView", "live-view", {
  nodes: [
    ["path", { d: "M4 8v-2a2 2 0 0 1 2 -2h2" }, { r: "pulse", a: 0.1, o: [12, 12] }],
    ["path", { d: "M4 16v2a2 2 0 0 0 2 2h2" }, { r: "pulse", a: 0.1, o: [12, 12] }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }, { r: "pulse", a: 0.1, o: [12, 12] }],
    ["path", { d: "M16 20h2a2 2 0 0 0 2 -2v-2" }, { r: "pulse", a: 0.1, o: [12, 12] }],
    ["path", { d: "M12 11l0 .01" }, { r: "bounce", d: 0.1, y: -1, a: 2, o: [12, 18] }],
    ["path", { d: "M12 18l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" }, { r: "bounce", d: 0.1, y: -1, a: 2, o: [12, 18] }],
  ],
});
