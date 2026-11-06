import { icon } from "../icon.js";

// Adapted from Tabler Icons "currency-dollar-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CurrencyDollarOff = icon("CurrencyDollarOff", "currency-dollar-off", {
  text: true,
  nodes: [
    ["path", { d: "M16.7 8a3 3 0 0 0 -2.7 -2h-4m-2.557 1.431a3 3 0 0 0 2.557 4.569h2m4.564 4.558a3 3 0 0 1 -2.564 1.442h-4a3 3 0 0 1 -2.7 -2" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M12 3v3m0 12v3" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M12 3v18", fill: "none" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M17 5H9.5a1 1 0 000 7h5a1 1 0 010 7H6", fill: "none" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
