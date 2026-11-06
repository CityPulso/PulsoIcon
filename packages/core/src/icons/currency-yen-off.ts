import { icon } from "../icon.js";

// Adapted from Tabler Icons "currency-yen-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CurrencyYenOff = icon("CurrencyYenOff", "currency-yen-off", {
  text: true,
  nodes: [
    ["path", { d: "M12 19v-7m5 -7l-3.328 4.66" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M8 17h8" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M8 13h5" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M12 12v8", fill: "none" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "m6 4 6 8 6-8", fill: "none" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M8 13h8", fill: "none" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M8 17h8", fill: "none" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
