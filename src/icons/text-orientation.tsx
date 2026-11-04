import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "text-orientation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TextOrientation = createIcon("TextOrientation", "text-orientation", {
  nodes: [
    ["path", { d: "M9 15l-5 -5c-1.367 -1.367 -1.367 -3.633 0 -5s3.633 -1.367 5 0l5 5" }, { r: "tilt", a: 8, o: [9, 9] }],
    ["path", { d: "M5.5 11.5l5 -5" }, { r: "tilt", a: 8, o: [9, 9] }],
    ["path", { d: "M21 12l-9 9" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
    ["path", { d: "M21 12v4" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
    ["path", { d: "M21 12h-4" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
  ],
});
