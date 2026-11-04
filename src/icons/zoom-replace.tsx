import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "zoom-replace" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ZoomReplace = createIcon("ZoomReplace", "zoom-replace", {
  nodes: [
    ["path", { d: "M21 21l-6 -6" }],
    ["path", { d: "M3.291 8a7 7 0 0 1 5.077 -4.806a7.021 7.021 0 0 1 8.242 4.403" }, { r: "spin", a: 180, o: [10, 10] }],
    ["path", { d: "M17 4v4h-4" }, { r: "spin", a: 180, o: [10, 10] }],
    ["path", { d: "M16.705 12a7 7 0 0 1 -5.074 4.798a7.021 7.021 0 0 1 -8.241 -4.403" }, { r: "spin", a: 180, o: [10, 10] }],
    ["path", { d: "M3 16v-4h4" }, { r: "spin", a: 180, o: [10, 10] }],
  ],
});
