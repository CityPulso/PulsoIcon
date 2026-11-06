import { icon } from "../icon.js";

// Adapted from Tabler Icons "nfc-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const NfcOff = icon("NfcOff", "nfc-off", {
  nodes: [
    ["path", { d: "M11 20a3 3 0 0 1 -3 -3v-9" }, { r: "pulse", a: 0.1, o: [12, 12] }],
    ["path", { d: "M13 4a3 3 0 0 1 3 3v5m0 4v2l-5 -5" }, { r: "pulse", a: 0.1, o: [12, 12] }],
    ["path", { d: "M8 4h9a3 3 0 0 1 3 3v9m-.873 3.116a2.99 2.99 0 0 1 -2.127 .884h-10a3 3 0 0 1 -3 -3v-10c0 -.83 .337 -1.582 .882 -2.125" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
