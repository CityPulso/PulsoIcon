import { icon } from "../icon.js";

// Adapted from Tabler Icons "server-bolt" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ServerBolt = icon("ServerBolt", "server-bolt", {
  nodes: [
    ["path", { d: "M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2" }],
    ["path", { d: "M15 20h-9a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h12" }],
    ["path", { d: "M7 8v.01" }, { r: "fade", d: 0.2 }],
    ["path", { d: "M7 16v.01" }, { r: "fade", d: 0.3 }],
    ["path", { d: "M20 15l-2 3h3l-2 3" }, { r: "flicker", d: 0.1 }],
  ],
});
