import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "overline" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Overline = createIcon("Overline", "overline", {
  nodes: [
    ["path", { d: "M7 9v5a5 5 0 0 0 10 0v-5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M5 5h14" }, { r: "growX", o: [12, 5] }],
  ],
});
