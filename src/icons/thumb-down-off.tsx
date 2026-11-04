import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "thumb-down-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ThumbDownOff = createIcon("ThumbDownOff", "thumb-down-off", {
  nodes: [
    [
      "path",
      {
        d: "M7 13v-6m-3 -3a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 1 0 4 0v-3m2 -2h1a2 2 0 0 0 2 -2l-1 -5c-.295 -1.26 -1.11 -2.076 -2 -2h-7c-.57 0 -1.102 .159 -1.556 .434",
      },
      { r: "slide", y: 1, a: 1.5, o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
