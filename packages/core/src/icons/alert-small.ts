import { icon } from "../icon.js";

// Adapted from Tabler Icons "alert-small" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlertSmall = icon("AlertSmall", "alert-small", {
  nodes: [
    ["path", { d: "M12 8v4" }, { r: "draw" }],
    ["path", { d: "M12 16h.01" }, { r: "pop", d: 0.3, o: [12, 16] }],
  ],
});
