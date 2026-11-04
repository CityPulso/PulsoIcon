import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "photo-circle-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ImageCirclePlus = createIcon("ImageCirclePlus", "image-circle-plus", {
  nodes: [
    ["path", { d: "M15 8h.01" }],
    ["path", { d: "M20.964 12.806a9 9 0 0 0 -8.964 -9.806a9 9 0 0 0 -9 9a9 9 0 0 0 9.397 8.991" }],
    ["path", { d: "M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4" }],
    ["path", { d: "M14 14l1 -1c.928 -.893 2.072 -.893 3 0" }],
    ["path", { d: "M16 19.33h6" }, { r: "pop", o: [19, 19.33] }],
    ["path", { d: "M19 16.33v6" }, { r: "pop", o: [19, 19.33] }],
  ],
});
