import { icon } from "../icon.js";

// Adapted from Tabler Icons "http-get-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HttpGetOff = icon("HttpGetOff", "http-get-off", {
  text: true,
  nodes: [
    ["path", { d: "M7 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" }, { r: "draw", o: [5, 12] }],
    ["path", { d: "M14 8h-2m-2 2v6h4" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M10 12h2" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M17 8h4" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M19 8v7" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M7 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1", fill: "none" }, { r: "draw", o: [5, 12] }],
    ["path", { d: "M14 8h-4v8h4", fill: "none" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M10 12h2.5", fill: "none" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M17 8h4", fill: "none" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M19 8v8", fill: "none" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
