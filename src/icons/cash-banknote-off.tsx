import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "cash-banknote-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CashBanknoteOff = createIcon("CashBanknoteOff", "cash-banknote-off", {
  nodes: [
    ["path", { d: "M9.88 9.878a3 3 0 1 0 4.242 4.243m.58 -3.425a3.012 3.012 0 0 0 -1.412 -1.405" }, { r: "spin", d: 0.1, o: [12, 12] }],
    ["path", { d: "M10 6h9a2 2 0 0 1 2 2v8c0 .294 -.064 .574 -.178 .825m-2.822 1.175h-13a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h1" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M18 12l.01 0" }, { r: "pop", d: 0.3, o: [18, 12] }],
    ["path", { d: "M6 12l.01 0" }, { r: "pop", d: 0.3, o: [6, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
