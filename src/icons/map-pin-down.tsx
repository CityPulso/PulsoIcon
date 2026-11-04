import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "map-pin-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MapPinDown = createIcon("MapPinDown", "map-pin-down", {
  nodes: [
    ["path", { d: "M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }],
    ["path", { d: "M12.736 21.345a2 2 0 0 1 -2.149 -.445l-4.244 -4.243a8 8 0 1 1 13.59 -4.624" }],
    ["path", { d: "M19 16v6" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 2 }],
    ["path", { d: "M22 19l-3 3l-3 -3" }, { r: "slide", d: 0.1, x: 0, y: 1, a: 2 }],
  ],
});
