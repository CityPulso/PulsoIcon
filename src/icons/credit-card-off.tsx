import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "credit-card-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CreditCardOff = createIcon("CreditCardOff", "credit-card-off", {
  nodes: [
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.3, o: [12, 12] }],
    ["path", { d: "M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1 -.128 .87" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M18.87 18.872a3 3 0 0 1 -.87 .128h-12a3 3 0 0 1 -3 -3v-8c0 -1.352 .894 -2.495 2.124 -2.87" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M3 11l8 0" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M15 11l6 0" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M7 15l.01 0" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M11 15l2 0" }, { r: "flip", o: [12, 12] }],
  ],
});
