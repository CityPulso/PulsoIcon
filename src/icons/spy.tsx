import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "spy" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Spy = createIcon("Spy", "spy", {
  nodes: [
    ["path", { d: "M3 11h18" }, { r: "lift", y: -1, a: -6, o: [12, 7.5] }],
    ["path", { d: "M5 11v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" }, { r: "lift", y: -1, a: -6, o: [12, 7.5] }],
    ["path", { d: "M4 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "blink", d: 0.25, o: [7, 17] }],
    ["path", { d: "M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "blink", d: 0.25, o: [17, 17] }],
    ["path", { d: "M10 17h4" }],
  ],
});
