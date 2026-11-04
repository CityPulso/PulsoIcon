import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "box-padding" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BoxPadding = createIcon("BoxPadding", "box-padding", {
  nodes: [
    ["path", { d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" }],
    ["path", { d: "M8 16v.01" }, { r: "pop", a: 0.6, o: [8.0, 16.0] }],
    ["path", { d: "M8 12v.01" }, { r: "pop", d: 0.03, a: 0.6, o: [8.0, 12.0] }],
    ["path", { d: "M8 8v.01" }, { r: "pop", d: 0.06, a: 0.6, o: [8.0, 8.0] }],
    ["path", { d: "M16 16v.01" }, { r: "pop", d: 0.09, a: 0.6, o: [16.0, 16.0] }],
    ["path", { d: "M16 12v.01" }, { r: "pop", d: 0.12, a: 0.6, o: [16.0, 12.0] }],
    ["path", { d: "M16 8v.01" }, { r: "pop", d: 0.15, a: 0.6, o: [16.0, 8.0] }],
    ["path", { d: "M12 8v.01" }, { r: "pop", d: 0.18, a: 0.6, o: [12.0, 8.0] }],
    ["path", { d: "M12 16v.01" }, { r: "pop", d: 0.21, a: 0.6, o: [12.0, 16.0] }],
  ],
});
