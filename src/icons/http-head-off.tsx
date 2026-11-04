import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "http-head-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HttpHeadOff = createIcon("HttpHeadOff", "http-head-off", {
  nodes: [
    ["path", { d: "M3 16v-8" }, { r: "draw", o: [5, 12] }],
    ["path", { d: "M7 8v8" }, { r: "draw", o: [5, 12] }],
    ["path", { d: "M3 12h4" }, { r: "draw", o: [5, 12] }],
    ["path", { d: "M14 8h-2m-2 2v6h4" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M10 12h2" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M17 13v-3a2 2 0 1 1 4 0v6" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M17 13h4" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
