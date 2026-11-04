import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "browser-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrowserPlus = createIcon("BrowserPlus", "browser-plus", {
  nodes: [
    ["path", { d: "M4 8h16" }],
    ["path", { d: "M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" }],
    ["path", { d: "M8 4v4" }],
    ["path", { d: "M16 19h6" }, { r: "pop", d: 0.1, o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "pop", d: 0.1, o: [19, 19] }],
  ],
});
