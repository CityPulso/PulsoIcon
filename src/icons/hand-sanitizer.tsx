import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "hand-sanitizer" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HandSanitizer = createIcon("HandSanitizer", "hand-sanitizer", {
  nodes: [
    ["path", { d: "M7 21h10v-10a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v10" }],
    ["path", { d: "M15 3h-6a2 2 0 0 0 -2 2" }, { r: "press", a: 0.2, o: [11, 4] }],
    ["path", { d: "M12 3v5" }],
    ["path", { d: "M12 11v4" }, { r: "pop", d: 0.15, o: [12, 13] }],
    ["path", { d: "M10 13h4" }, { r: "pop", d: 0.15, o: [12, 13] }],
  ],
});
