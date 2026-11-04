import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "cube-send" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CubeSend = createIcon("CubeSend", "cube-send", {
  nodes: [
    ["path", { d: "M16 12.5l-5 -3l5 -3l5 3v5.5l-5 3l0 -5.5" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M11 9.5v5.5l5 3" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M16 12.545l5 -3.03" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M7 9h-5" }, { r: "growX", d: 0.1, o: [7, 9] }],
    ["path", { d: "M7 12h-3" }, { r: "growX", d: 0.15, o: [7, 12] }],
    ["path", { d: "M7 15h-1" }, { r: "growX", d: 0.2, o: [7, 15] }],
  ],
});
