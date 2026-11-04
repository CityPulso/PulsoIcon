import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "app-window-bottom" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AppWindowBottom = createIcon("AppWindowBottom", "app-window-bottom", {
  nodes: [
    ["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" }],
    ["path", { d: "M6 14h12v2h-12v-2", fill: "currentColor" }, { r: "growX", o: [12, 15] }],
  ],
});
