import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "file-function" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileFunction = createIcon("FileFunction", "file-function", {
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" }],
    ["path", { d: "M10.5 17h.333c.474 0 .87 -.323 .916 -.746l.502 -4.508c.047 -.423 .443 -.746 .916 -.746h.333" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M10.5 14h3" }, { r: "growX", d: 0.35, o: [12, 14] }],
  ],
});
