import { icon } from "../icon.js";

// Adapted from Tabler Icons "sailboat-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SailboatOff = icon("SailboatOff", "sailboat-off", {
  nodes: [
    [
      "path",
      {
        d: "M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1",
      },
      { r: "slide", d: 0, x: 1, y: 0, a: 1 },
    ],
    ["path", { d: "M4 18l-1 -3h12m4 0h2l-.506 1.517" }, { r: "sway", d: 0.05, a: 4, o: [12, 18] }],
    ["path", { d: "M11 11v1h1m4 0h2l-7 -9v4" }, { r: "sway", d: 0.05, a: 4, o: [12, 18] }],
    ["path", { d: "M7.713 7.718l-1.713 4.282" }, { r: "sway", d: 0.05, a: 4, o: [12, 18] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M10 2v15" }, { r: "sway", d: 0.05, a: 4, o: [12, 18] }, "line"],
    ["path", { d: "M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z" }, { r: "sway", d: 0.05, a: 4, o: [12, 18] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
