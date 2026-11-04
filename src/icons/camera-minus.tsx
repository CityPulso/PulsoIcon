import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "camera-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CameraMinus = createIcon("CameraMinus", "camera-minus", {
  nodes: [
    ["path", { d: "M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v6" }],
    ["path", { d: "M16 19h6" }, { r: "draw", o: [19, 19] }],
    ["path", { d: "M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }],
  ],
});
