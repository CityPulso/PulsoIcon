import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "error-404-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Error404Off = createIcon("Error404Off", "error-404-off", {
  nodes: [
    ["path", { d: "M3 8v3a1 1 0 0 0 1 1h3" }, { r: "pop", o: [5, 12] }],
    ["path", { d: "M7 8v8" }, { r: "pop", o: [5, 12] }],
    ["path", { d: "M17 8v3a1 1 0 0 0 1 1h3" }, { r: "pop", d: 0.16, o: [19, 12] }],
    ["path", { d: "M21 8v8" }, { r: "pop", d: 0.16, o: [19, 12] }],
    ["path", { d: "M10 10v4a2 2 0 1 0 4 0m0 -4a2 2 0 0 0 -2 -2" }, { r: "pop", d: 0.08, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M3 8v3a1 1 0 0 0 1 1h3", fill: "none" }, { r: "pop", o: [5, 12] }],
    ["path", { d: "M7 8v8", fill: "none" }, { r: "pop", o: [5, 12] }],
    ["path", { d: "M17 8v3a1 1 0 0 0 1 1h3", fill: "none" }, { r: "pop", d: 0.16, o: [19, 12] }],
    ["path", { d: "M21 8v8", fill: "none" }, { r: "pop", d: 0.16, o: [19, 12] }],
    ["path", { d: "M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0", fill: "none" }, { r: "pop", d: 0.08, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
