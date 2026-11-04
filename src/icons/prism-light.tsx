import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "prism-light" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PrismLight = createIcon("PrismLight", "prism-light", {
  nodes: [
    ["path", { d: "M4.731 19h11.539a1 1 0 0 0 .866 -1.5l-5.769 -10a1 1 0 0 0 -1.732 0l-5.769 10a1 1 0 0 0 .865 1.5" }],
    ["path", { d: "M2 13h4.45" }, { r: "draw" }],
    ["path", { d: "M18 5l-4.5 6" }, { r: "pop", d: 0.25, o: [13.5, 11] }],
    ["path", { d: "M22 9l-7.75 3.25" }, { r: "pop", d: 0.3, o: [14.25, 12.25] }],
    ["path", { d: "M22 15l-7 -1.5" }, { r: "pop", d: 0.35, o: [15, 13.5] }],
  ],
});
