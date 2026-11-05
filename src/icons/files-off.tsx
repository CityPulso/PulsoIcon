import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "files-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FilesOff = createIcon("FilesOff", "files-off", {
  nodes: [
    ["path", { d: "M15 3v4a1 1 0 0 0 1 1h4" }, { r: "slide", x: 0.7, y: -0.7, a: 1.2, o: [14, 10] }],
    ["path", { d: "M17 17h-6a2 2 0 0 1 -2 -2v-6m0 -4a2 2 0 0 1 2 -2h4l5 5v7c0 .294 -.063 .572 -.177 .823" }, { r: "slide", x: 0.7, y: -0.7, a: 1.2, o: [14, 10] }],
    ["path", { d: "M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" }, { r: "float", d: 0.08, o: [10, 14] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8", fill: "none" }, { r: "slide", x: 0.7, y: -0.7, a: 1.2, o: [14, 10] }],
    ["path", { d: "M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z" }, { r: "slide", x: 0.7, y: -0.7, a: 1.2, o: [14, 10] }],
    ["path", { d: "M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1", fill: "none" }, { r: "float", d: 0.08, o: [10, 14] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
