import { icon } from "../icon.js";

// Adapted from Tabler Icons "crane" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Crane = icon("Crane", "crane", {
  nodes: [
    ["path", { d: "M6 21h6" }],
    ["path", { d: "M9 21v-18l-6 6h18" }],
    ["path", { d: "M9 3l10 6" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M17 9v4a2 2 0 1 1 -2 2" }, { r: "swing", a: 12, o: [17, 9] }],
  ],
});
