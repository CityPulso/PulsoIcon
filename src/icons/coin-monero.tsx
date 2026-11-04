import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "coin-monero" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CoinMonero = createIcon("CoinMonero", "coin-monero", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M4 16h4v-7l4 4l4 -4v7h4" }, { r: "flip", o: [12, 12] }],
  ],
});
