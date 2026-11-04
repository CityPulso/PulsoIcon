import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "file-broken" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileBroken = createIcon("FileBroken", "file-broken", {
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M5 7v-2a2 2 0 0 1 2 -2h7l5 5v2" }, { r: "slide", y: -1, a: 1 }],
    ["path", { d: "M19 19a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2" }, { r: "slide", y: 1, a: 1 }],
    ["path", { d: "M5 16h.01" }, { r: "fade", d: 0.22 }],
    ["path", { d: "M5 13h.01" }, { r: "fade", d: 0.16 }],
    ["path", { d: "M5 10h.01" }, { r: "fade", d: 0.1 }],
    ["path", { d: "M19 13h.01" }, { r: "fade", d: 0.28 }],
    ["path", { d: "M19 16h.01" }, { r: "fade", d: 0.34 }],
  ],
});
