import { icon } from "../icon.js";

// Adapted from Tabler Icons "cactus-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CactusOff = icon("CactusOff", "cactus-off", {
  nodes: [
    ["path", { d: "M6 9v1a3 3 0 0 0 3 3h1" }, { r: "sway", a: 4, o: [12, 21] }],
    ["path", { d: "M18 8v5a3 3 0 0 1 -.129 .872m-2.014 2a3 3 0 0 1 -.857 .124h-1" }, { r: "sway", a: 4, o: [12, 21] }],
    ["path", { d: "M10 21v-11m0 -4v-1a2 2 0 1 1 4 0v5m0 4v7" }, { r: "sway", a: 4, o: [12, 21] }],
    ["path", { d: "M7 21h10" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    [
      "path",
      { d: "M9.5 21v-6h-3A2.5 2.5 0 0 1 4 12.5v-4a1.5 1.5 0 0 1 3 0V12h2.5V5a2.5 2.5 0 0 1 5 0v5H17V6.5a1.5 1.5 0 0 1 3 0v4a2.5 2.5 0 0 1-2.5 2.5h-3v8" },
      { r: "sway", a: 4, o: [12, 21] },
    ],
    ["path", { d: "M6 21h12", fill: "none" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
