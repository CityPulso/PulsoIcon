import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "exchange-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ExchangeOff = createIcon("ExchangeOff", "exchange-off", {
  nodes: [
    ["path", { d: "M3 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [5, 18] }],
    ["path", { d: "M17 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.1, o: [19, 6] }],
    ["path", { d: "M19 8v5c0 .594 -.104 1.164 -.294 1.692m-1.692 2.298a4.978 4.978 0 0 1 -3.014 1.01h-3l3 -3" }, { r: "slide", x: -1, a: 1.5 }],
    ["path", { d: "M14 21l-3 -3" }, { r: "slide", x: -1, a: 1.5 }],
    ["path", { d: "M5 16v-5c0 -1.632 .782 -3.082 1.992 -4m3.008 -1h3l-3 -3" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M11.501 7.499l1.499 -1.499" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
