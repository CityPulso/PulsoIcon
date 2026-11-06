import { icon } from "../icon.js";

// Adapted from Tabler Icons "scoreboard" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Scoreboard = icon("Scoreboard", "scoreboard", {
  nodes: [
    ["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" }],
    ["path", { d: "M12 5v2" }],
    ["path", { d: "M12 10v1" }],
    ["path", { d: "M12 14v1" }],
    ["path", { d: "M12 18v1" }],
    ["path", { d: "M7 3v2" }],
    ["path", { d: "M17 3v2" }],
    ["path", { d: "M15 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0" }, { r: "flip", o: [16.5, 12] }],
    ["path", { d: "M6 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" }, { r: "flip", d: 0.1, o: [7, 12] }],
  ],
});
