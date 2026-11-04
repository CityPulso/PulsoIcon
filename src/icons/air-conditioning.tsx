import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "air-conditioning" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AirConditioning = createIcon("AirConditioning", "air-conditioning", {
  nodes: [
    ["path", { d: "M8 16a3 3 0 0 1 -3 3" }, { r: "slide", d: 0.1, x: -0.5, y: 1, a: 1.2, o: [6.5, 17.5] }],
    ["path", { d: "M16 16a3 3 0 0 0 3 3" }, { r: "slide", d: 0.1, x: 0.5, y: 1, a: 1.2, o: [17.5, 17.5] }],
    ["path", { d: "M12 16v4" }, { r: "slide", d: 0.15, x: 0, y: 1, a: 1.2, o: [12, 18] }],
    ["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -4" }, { r: "press", d: 0, a: 0.06, o: [12, 9] }],
    ["path", { d: "M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3" }],
  ],
});
