import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "unicycle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Unicycle = createIcon("Unicycle", "unicycle", {
  nodes: [
    ["path", { d: "M7 16a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" }, { r: "spin", o: [12, 16] }],
    ["path", { d: "M12 16v-11" }, { r: "sway", a: 4, o: [12, 16] }],
    ["path", { d: "M8 3q 2 2 7 2" }, { r: "sway", a: 4, o: [12, 16] }],
  ],
});
