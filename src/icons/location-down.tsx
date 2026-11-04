import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "location-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LocationDown = createIcon("LocationDown", "location-down", {
  nodes: [
    ["path", { d: "M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.328 9.217" }],
    ["path", { d: "M19 16v6" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 2 }],
    ["path", { d: "M22 19l-3 3l-3 -3" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 2 }],
  ],
});
