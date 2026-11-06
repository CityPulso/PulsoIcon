import { icon } from "../icon.js";

// Adapted from Tabler Icons "alert-square" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlertSquare = icon("AlertSquare", "alert-square", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" }, { r: "shake", a: 0.6 }],
    ["path", { d: "M12 8v4" }, { r: "draw" }],
    ["path", { d: "M12 16h.01" }, { r: "pop", d: 0.3, o: [12, 16] }],
  ],
});
