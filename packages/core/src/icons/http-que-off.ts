import { icon } from "../icon.js";

// Adapted from Tabler Icons "http-que-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HttpQueOff = icon("HttpQueOff", "http-que-off", {
  text: true,
  nodes: [
    ["path", { d: "M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" }, { r: "draw", o: [5, 12] }],
    ["path", { d: "M6 15l1 1" }, { r: "draw", o: [5, 12] }],
    ["path", { d: "M21 8h-4v8h4" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M17 12h2.5" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M10 10v4a2 2 0 1 0 4 0m0 -4v-2" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2", fill: "none" }, { r: "draw", o: [5, 12] }],
    ["path", { d: "M6 15l1 1", fill: "none" }, { r: "draw", o: [5, 12] }],
    ["path", { d: "M21 8h-4v8h4", fill: "none" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M17 12h2.5", fill: "none" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M10 8v6a2 2 0 1 0 4 0v-6", fill: "none" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
