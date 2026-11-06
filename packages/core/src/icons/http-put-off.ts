import { icon } from "../icon.js";

// Adapted from Tabler Icons "http-put-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HttpPutOff = icon("HttpPutOff", "http-put-off", {
  text: true,
  nodes: [
    ["path", { d: "M3 12h2a2 2 0 1 0 0 -4h-2v8" }, { r: "draw", o: [5, 12] }],
    ["path", { d: "M17 8h4" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M19 8v8" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M10 10v4a2 2 0 1 0 4 0m0 -4v-2" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M3 12h2a2 2 0 1 0 0 -4h-2v8", fill: "none" }, { r: "draw", o: [5, 12] }],
    ["path", { d: "M17 8h4", fill: "none" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M19 8v8", fill: "none" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M10 8v6a2 2 0 1 0 4 0v-6", fill: "none" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
