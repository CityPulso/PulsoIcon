import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "border-style-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BorderStyle2 = createIcon("BorderStyle2", "border-style-2", {
  nodes: [
    ["path", { d: "M4 18v.01" }, { r: "pop", d: 0.3, o: [4, 18] }],
    ["path", { d: "M8 18v.01" }, { r: "pop", d: 0.34, o: [8, 18] }],
    ["path", { d: "M12 18v.01" }, { r: "pop", d: 0.38, o: [12, 18] }],
    ["path", { d: "M16 18v.01" }, { r: "pop", d: 0.42, o: [16, 18] }],
    ["path", { d: "M20 18v.01" }, { r: "pop", d: 0.46, o: [20, 18] }],
    ["path", { d: "M18 12h2" }, { r: "pop", d: 0.25, o: [19, 12] }],
    ["path", { d: "M11 12h2" }, { r: "pop", d: 0.2, o: [12, 12] }],
    ["path", { d: "M4 12h2" }, { r: "pop", d: 0.15, o: [5, 12] }],
    ["path", { d: "M4 6h16" }, { r: "draw" }],
  ],
});
