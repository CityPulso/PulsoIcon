import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bong" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Bong = createIcon("Bong", "bong", {
  nodes: [
    ["path", { d: "M13 3v8.416c.134 .059 .265 .123 .393 .193l3.607 -3.609l2 2l-3.608 3.608a5 5 0 1 1 -6.392 -2.192v-8.416h4" }],
    ["path", { d: "M8 3h6" }],
    ["path", { d: "M6.1 17h9.8" }, { r: "sway", a: 6, o: [11, 17] }],
  ],
});
