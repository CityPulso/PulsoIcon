import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "run-sprint" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RunSprint = createIcon("RunSprint", "run-sprint", {
  nodes: [
    ["path", { d: "M14.007 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M7 17l5 1l.75 -1.5" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M18 21v-4l-4 -3l1 -6" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M10 12v-3l5 -1l3 3l3 1" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M10 5h-4" }, { r: "growX", o: [10, 5] }],
    ["path", { d: "M6 10h-4" }, { r: "growX", d: 0.1, o: [6, 10] }],
  ],
});
