import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "credits" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Credits = createIcon("Credits", "credits", {
  nodes: [
    ["path", { d: "M3 14a6 2 0 1 0 12 0a6 2 0 1 0 -12 0" }],
    ["path", { d: "M3 14v5c0 1.105 2.686 2 6 2s6 -.895 6 -2v-5" }],
    ["path", { d: "M9 5a6 2 0 1 0 12 0a6 2 0 1 0 -12 0" }, { r: "bounce", y: -1, a: 1.5, o: [15, 7] }],
    ["path", { d: "M9 5v3" }, { r: "bounce", y: -1, a: 1.5, o: [15, 7] }],
    ["path", { d: "M18.365 11.656c1.59 -.36 2.635 -.966 2.635 -1.656v-5" }, { r: "bounce", y: -1, a: 1.5, o: [15, 7] }],
  ],
});
