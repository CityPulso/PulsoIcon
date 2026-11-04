import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "picture-in-picture-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PictureInPictureOff = createIcon("PictureInPictureOff", "picture-in-picture-off", {
  nodes: [
    ["path", { d: "M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" }],
    ["path", { d: "M14 15a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1l0 -3" }, { r: "pop", o: [17.5, 16.5] }],
    ["path", { d: "M7 9l4 4" }, { r: "draw", d: 0.2, o: [12, 12] }],
    ["path", { d: "M7 12v-3h3" }, { r: "draw", d: 0.3, o: [12, 12] }],
  ],
});
