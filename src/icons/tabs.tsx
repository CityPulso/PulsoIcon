import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "tabs" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Tabs = createIcon("Tabs", "tabs", {
  nodes: [
    ["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" }],
    ["path", { d: "M6.36 5a2 2 0 0 1 1.962 1.608l.356 1.784a2 2 0 0 0 1.962 1.608h8.36a2 2 0 0 1 2 2" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M12.36 5a2 2 0 0 1 1.962 1.608l.356 1.784a2 2 0 0 0 1.962 1.608" }, { r: "draw" }],
  ],
});
