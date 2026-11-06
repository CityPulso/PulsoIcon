import { icon } from "../icon.js";

// Adapted from Tabler Icons "heading-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HeadingOff = icon("HeadingOff", "heading-off", {
  text: true,
  nodes: [
    ["path", { d: "M7 12h5m4 0h1" }, { r: "draw", d: 0 }],
    ["path", { d: "M7 7v12" }, { r: "draw", d: 0 }],
    ["path", { d: "M17 5v8m0 4v2" }, { r: "draw", d: 0 }],
    ["path", { d: "M15 19h4" }, { r: "pop", d: 0.1, o: [17, 19] }],
    ["path", { d: "M15 5h4" }, { r: "pop", d: 0.1, o: [17, 5] }],
    ["path", { d: "M5 19h4" }, { r: "pop", d: 0.1, o: [7, 19] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
