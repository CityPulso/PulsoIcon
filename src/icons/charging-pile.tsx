import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "charging-pile" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChargingPile = createIcon("ChargingPile", "charging-pile", {
  nodes: [
    ["path", { d: "M18 7l-1 1" }, { r: "draw", d: 0.4 }],
    ["path", { d: "M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14" }],
    ["path", { d: "M9 11.5l-1.5 2.5h3l-1.5 2.5" }, { r: "flicker" }],
    ["path", { d: "M3 20l12 0" }],
    ["path", { d: "M4 8l10 0" }],
  ],
});
