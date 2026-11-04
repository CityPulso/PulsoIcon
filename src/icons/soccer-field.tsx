import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "soccer-field" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SoccerField = createIcon("SoccerField", "soccer-field", {
  nodes: [
    ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "roll", x: 1, a: 2, o: [12, 12] }],
    ["path", { d: "M3 9h3v6h-3l0 -6" }],
    ["path", { d: "M18 9h3v6h-3l0 -6" }],
    ["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" }],
    ["path", { d: "M12 5l0 14" }],
  ],
});
