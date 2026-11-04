import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "file-lambda" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileLambda = createIcon("FileLambda", "file-lambda", {
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" }],
    ["path", { d: "M10 17l2 -3" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M15 17c-2.5 0 -2.5 -6 -5 -6" }, { r: "draw", d: 0.1 }],
  ],
});
