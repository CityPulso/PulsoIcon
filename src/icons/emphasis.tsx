import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "emphasis" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Emphasis = createIcon("Emphasis", "emphasis", {
  nodes: [
    ["path", { d: "M16 5h-8v10h8m-1 -5h-7" }, { r: "pop", o: [12, 10] }],
    ["path", { d: "M6 20l0 .01" }, { r: "pop", d: 0.17, o: [6, 20] }],
    ["path", { d: "M10 20l0 .01" }, { r: "pop", d: 0.24000000000000002, o: [10, 20] }],
    ["path", { d: "M14 20l0 .01" }, { r: "pop", d: 0.31000000000000005, o: [14, 20] }],
    ["path", { d: "M18 20l0 .01" }, { r: "pop", d: 0.38, o: [18, 20] }],
  ],
});
