import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mist" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Mist = createIcon("Mist", "mist", {
  nodes: [
    ["path", { d: "M5 5h3m4 0h9" }, { r: "slide", x: 1, a: 1.5, o: [13, 5] }],
    ["path", { d: "M3 10h11m4 0h1" }, { r: "slide", d: 0.08, x: -1, a: 1.5, o: [11, 10] }],
    ["path", { d: "M5 15h5m4 0h7" }, { r: "slide", d: 0.16, x: 1, a: 1.5, o: [13, 15] }],
    ["path", { d: "M3 20h9m4 0h3" }, { r: "slide", d: 0.24, x: -1, a: 1.5, o: [11, 20] }],
  ],
});
