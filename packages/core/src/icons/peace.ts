import { icon } from "../icon.js";

// Adapted from Tabler Icons "peace" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Peace = icon("Peace", "peace", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M12 3l0 18" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M12 12l6.3 6.3" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M12 12l-6.3 6.3" }, { r: "draw", d: 0.3 }],
  ],
});
