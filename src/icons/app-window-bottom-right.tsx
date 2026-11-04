import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "app-window-bottom-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AppWindowBottomRight = createIcon("AppWindowBottomRight", "app-window-bottom-right", {
  nodes: [
    ["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" }],
    ["path", { d: "M16 14h2v2h-2v-2", fill: "currentColor" }, { r: "pop", o: [17, 15] }],
  ],
});
