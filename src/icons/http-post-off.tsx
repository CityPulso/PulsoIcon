import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "http-post-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HttpPostOff = createIcon("HttpPostOff", "http-post-off", {
  text: true,
  nodes: [
    ["path", { d: "M3 12h2a2 2 0 1 0 0 -4h-2v8" }, { r: "draw", o: [5, 12] }],
    ["path", { d: "M12 8a2 2 0 0 1 2 2m0 4a2 2 0 1 1 -4 0v-4" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M20 16a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M3 12h2a2 2 0 1 0 0 -4h-2v8", fill: "none" }, { r: "draw", o: [5, 12] }],
    ["path", { d: "M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2", fill: "none" }, { r: "draw", d: 0.08, o: [12, 12] }],
    [
      "path",
      { d: "M17 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1", fill: "none" },
      { r: "draw", d: 0.16, o: [19, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
