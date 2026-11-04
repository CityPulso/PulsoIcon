import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "browser-share" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrowserShare = createIcon("BrowserShare", "browser-share", {
  nodes: [
    ["path", { d: "M4 8h16" }],
    ["path", { d: "M12.5 20h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7" }],
    ["path", { d: "M8 4v4" }],
    ["path", { d: "M16 22l5 -5" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.2, o: [18.5, 19.5] }],
    ["path", { d: "M21 21.5v-4.5h-4.5" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.2, o: [19, 19] }],
  ],
});
