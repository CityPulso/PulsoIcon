import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "browser" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Browser = createIcon("Browser", "browser", {
  nodes: [
    ["path", { d: "M4 8h16" }, { r: "growX", d: 0.1, o: [4, 8] }],
    ["path", { d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" }, { r: "press", d: 0, a: 0.06, o: [12, 12] }],
    ["path", { d: "M8 4v4" }, { r: "draw", d: 0.2 }],
  ],
});
