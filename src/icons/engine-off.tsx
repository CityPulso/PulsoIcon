import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "engine-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const EngineOff = createIcon("EngineOff", "engine-off", {
  nodes: [
    ["path", { d: "M3 10v6" }, { r: "shake", d: 0, a: 0.8 }],
    ["path", { d: "M12 5v3" }, { r: "shake", d: 0, a: 0.8 }],
    ["path", { d: "M10 5h4" }, { r: "shake", d: 0, a: 0.8 }],
    ["path", { d: "M5 13h-2" }, { r: "shake", d: 0, a: 0.8 }],
    [
      "path",
      {
        d: "M16 16h-1v2a1 1 0 0 1 -1 1h-3.465a1 1 0 0 1 -.832 -.445l-1.703 -2.555h-2v-6h2l.99 -.99m3.01 -1.01h1.382a1 1 0 0 1 .894 .553l1.448 2.894a1 1 0 0 0 .894 .553h1.382v-2h2a1 1 0 0 1 1 1v6",
      },
      { r: "shake", d: 0, a: 0.8 },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M10 3h6", fill: "none" }, { r: "shake", d: 0, a: 0.8 }],
    ["path", { d: "M13 3v4", fill: "none" }, { r: "shake", d: 0, a: 0.8 }],
    ["path", { d: "M2 10v6", fill: "none" }, { r: "shake", d: 0, a: 0.8 }],
    ["path", { d: "M2 13h4", fill: "none" }, { r: "shake", d: 0, a: 0.8 }],
    [
      "path",
      {
        d: "M6 16a2 2 0 002 2h1a2 2 0 011.6.8l.3.4a2 2 0 001.6.8h2.264a2 2 0 001.789-1.106l1.67-3.341a1 1 0 01.895-.553H21a1 1 0 001-1v-4a1 1 0 00-1-1h-3.5a1 1 0 01-.8-.4l-.9-1.2A1 1 0 0015 7h-4a1 1 0 00-.8.4l-.9 1.2a1 1 0 01-.8.4H7a1 1 0 00-1 1z",
      },
      { r: "shake", d: 0, a: 0.8 },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
