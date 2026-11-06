import { icon } from "../icon.js";

// Adapted from Tabler Icons "robot" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Robot = icon("Robot", "robot", {
  nodes: [
    ["path", { d: "M6 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -4" }],
    ["path", { d: "M12 2v2" }, { r: "pop", o: [12, 4] }],
    ["path", { d: "M9 12v9" }],
    ["path", { d: "M15 12v9" }],
    ["path", { d: "M5 16l4 -2" }, { r: "swing", d: 0.1, a: -15, o: [9, 14] }],
    ["path", { d: "M15 14l4 2" }, { r: "swing", d: 0.1, a: 15, o: [15, 14] }],
    ["path", { d: "M9 18h6" }],
    ["path", { d: "M10 8v.01" }, { r: "blink", d: 0.2, o: [10, 8] }],
    ["path", { d: "M14 8v.01" }, { r: "blink", d: 0.2, o: [14, 8] }],
  ],
});
