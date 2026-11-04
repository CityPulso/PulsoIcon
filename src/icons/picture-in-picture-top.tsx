import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "picture-in-picture-top" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PictureInPictureTop = createIcon("PictureInPictureTop", "picture-in-picture-top", {
  nodes: [
    ["path", { d: "M11 5h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-4" }],
    ["path", { d: "M15 10h5a1 1 0 0 0 1 -1v-3a1 1 0 0 0 -1 -1h-5a1 1 0 0 0 -1 1v3a1 1 0 0 0 1 1" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [17.5, 7.5] }],
  ],
});
