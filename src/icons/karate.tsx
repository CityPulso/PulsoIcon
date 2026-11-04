import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "karate" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Karate = createIcon("Karate", "karate", {
  nodes: [
    ["path", { d: "M3 9l4.5 1l3 2.5" }, { r: "slide", x: -1, a: 1.5 }],
    ["path", { d: "M13 21v-8l3 -5.5" }],
    ["path", { d: "M8 4.5l4 2l4 1l4 3.5l-2 3.5" }, { r: "tilt", d: 0.1, a: 6, o: [12, 6.5] }],
    ["path", { d: "M15.007 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
  ],
});
