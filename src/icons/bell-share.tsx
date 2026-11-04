import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bell-share" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BellShare = createIcon("BellShare", "bell-share", {
  nodes: [
    ["path", { d: "M12.5 17h-8.5a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v2" }, { r: "ring", a: 8, o: [12, 3] }],
    ["path", { d: "M9 17v1a3 3 0 0 0 3 3" }, { r: "ring", a: 8, o: [12, 3] }],
    ["path", { d: "M16 22l5 -5" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
    ["path", { d: "M21 21.5v-4.5h-4.5" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
  ],
});
