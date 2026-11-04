import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "app-window-center" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AppWindowCenter = createIcon("AppWindowCenter", "app-window-center", {
  nodes: [
    ["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" }],
    ["path", { d: "M11 11h2v2h-2v-2", fill: "currentColor" }, { r: "pop", o: [12, 12] }],
  ],
});
