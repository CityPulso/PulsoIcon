import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "http-delete-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HttpDeleteOff = createIcon("HttpDeleteOff", "http-delete-off", {
  text: true,
  nodes: [
    ["path", { d: "M3 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2l-2 0" }, { r: "draw", o: [5, 12] }],
    ["path", { d: "M14 8h-2m-2 2v6h4" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M10 12h2" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M17 8v5m3 3h1" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M3 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2l-2 0", fill: "none" }, { r: "draw", o: [5, 12] }],
    ["path", { d: "M14 8h-4v8h4", fill: "none" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M10 12h2.5", fill: "none" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M17 8v8h4", fill: "none" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
