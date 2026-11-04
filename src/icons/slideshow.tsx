import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "slideshow" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Slideshow = createIcon("Slideshow", "slideshow", {
  nodes: [
    ["path", { d: "M15 6l.01 0" }, { r: "pop", d: 0.3, o: [15, 6] }],
    ["path", { d: "M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8" }, { r: "pulse", a: 0.05, o: [12, 10] }],
    ["path", { d: "M3 13l4 -4a3 5 0 0 1 3 0l4 4" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M13 12l2 -2a3 5 0 0 1 3 0l3 3" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M8 21l.01 0" }, { r: "pop", d: 0.1, o: [8, 21] }],
    ["path", { d: "M12 21l.01 0" }, { r: "pop", d: 0.2, o: [12, 21] }],
    ["path", { d: "M16 21l.01 0" }, { r: "pop", d: 0.3, o: [16, 21] }],
  ],
});
