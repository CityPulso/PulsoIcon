import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "devices-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Devices2 = createIcon("Devices2", "devices-2", {
  nodes: [
    ["path", { d: "M10 15h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h6" }, { r: "press", d: 0.1, a: 0.05, o: [7, 12] }],
    ["path", { d: "M13 5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -14" }, { r: "slide", x: 1, a: 1.2, o: [17, 12] }],
    ["path", { d: "M7 19l3 0" }, { r: "press", d: 0.1, a: 0.05, o: [7, 12] }],
    ["path", { d: "M17 8l0 .01" }, { r: "slide", x: 1, a: 1.2, o: [17, 12] }],
    ["path", { d: "M16 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "slide", x: 1, a: 1.2, o: [17, 12] }],
    ["path", { d: "M9 15l0 4" }, { r: "press", d: 0.1, a: 0.05, o: [7, 12] }],
  ],
});
