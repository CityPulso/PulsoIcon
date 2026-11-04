import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "http-trace-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HttpTraceOff = createIcon("HttpTraceOff", "http-trace-off", {
  nodes: [
    ["path", { d: "M3 8h4" }, { r: "draw", o: [5, 12] }],
    ["path", { d: "M5 8v8" }, { r: "draw", o: [5, 12] }],
    ["path", { d: "M10 12h2m2 -2a2 2 0 0 0 -2 -2m-2 2v6" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M14 16l-3 -4" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M17 13v-3a2 2 0 1 1 4 0v6" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M17 13h4" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
