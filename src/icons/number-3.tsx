import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "number-3" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Number3 = createIcon("Number3", "number-3", {
  text: true,
  nodes: [
    ["path", { d: "M12 12a4 4 0 1 0 -4 -4" }, { r: "draw" }],
    ["path", { d: "M8 16a4 4 0 1 0 4 -4" }, { r: "draw", d: 0.15 }],
  ],
});
