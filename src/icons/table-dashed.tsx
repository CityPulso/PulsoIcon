import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "table-dashed" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TableDashed = createIcon("TableDashed", "table-dashed", {
  nodes: [
    ["path", { d: "M5 3a2 2 0 0 0 -2 2" }, { r: "fade" }],
    ["path", { d: "M19 3a2 2 0 0 1 2 2" }, { r: "fade", d: 0.12 }],
    ["path", { d: "M21 19a2 2 0 0 1 -2 2" }, { r: "fade", d: 0.24 }],
    ["path", { d: "M5 21a2 2 0 0 1 -2 -2" }, { r: "fade", d: 0.36 }],
    ["path", { d: "M9 3h1" }, { r: "fade", d: 0.04 }],
    ["path", { d: "M9 21h1" }, { r: "fade", d: 0.32 }],
    ["path", { d: "M14 3h1" }, { r: "fade", d: 0.08 }],
    ["path", { d: "M14 21h1" }, { r: "fade", d: 0.28 }],
    ["path", { d: "M3 9v1" }, { r: "fade", d: 0.44 }],
    ["path", { d: "M21 9v1" }, { r: "fade", d: 0.16 }],
    ["path", { d: "M3 14v1" }, { r: "fade", d: 0.4 }],
    ["path", { d: "M21 14v1" }, { r: "fade", d: 0.2 }],
    ["path", { d: "M7 10h1" }, { r: "pop", d: 0.15, o: [7.5, 10] }],
    ["path", { d: "M12 10h1" }, { r: "pop", d: 0.2, o: [12.5, 10] }],
    ["path", { d: "M17 10h1" }, { r: "pop", d: 0.25, o: [17.5, 10] }],
    ["path", { d: "M10 12v1" }, { r: "pop", d: 0.35, o: [10, 12.5] }],
    ["path", { d: "M10 17v1" }, { r: "pop", d: 0.4, o: [10, 17.5] }],
    ["path", { d: "M10 7v1" }, { r: "pop", d: 0.3, o: [10, 7.5] }],
  ],
});
