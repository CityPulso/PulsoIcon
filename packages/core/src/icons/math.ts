import { icon } from "../icon.js";

// Adapted from Tabler Icons "math" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Math = icon("Math", "math", {
  nodes: [
    ["path", { d: "M19 5h-7l-4 14l-3 -6h-2" }, { r: "draw" }],
    ["path", { d: "M14 13l6 6" }, { r: "pop", d: 0.35, o: [17, 16] }],
    ["path", { d: "M14 19l6 -6" }, { r: "pop", d: 0.35, o: [17, 16] }],
  ],
});
