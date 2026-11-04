import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "congruent-to" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CongruentTo = createIcon("CongruentTo", "congruent-to", {
  nodes: [
    ["path", { d: "M5 13h14" }, { r: "growX", d: 0.1, o: [12, 13] }],
    ["path", { d: "M5 17h14" }, { r: "growX", d: 0.2, o: [12, 17] }],
    ["path", { d: "M5 7.686c2.333 -2.624 4.667 -1.856 7 .064s4.667 2.688 7 .064" }, { r: "draw" }],
  ],
});
