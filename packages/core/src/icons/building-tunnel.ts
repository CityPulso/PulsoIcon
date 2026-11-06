import { icon } from "../icon.js";

// Adapted from Tabler Icons "building-tunnel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BuildingTunnel = icon("BuildingTunnel", "building-tunnel", {
  nodes: [
    ["path", { d: "M5 21h14a2 2 0 0 0 2 -2v-7a9 9 0 0 0 -18 0v7a2 2 0 0 0 2 2" }],
    ["path", { d: "M8 21v-9a4 4 0 1 1 8 0v9" }, { r: "press", a: 0.08, o: [12, 21] }],
    ["path", { d: "M3 17h4" }],
    ["path", { d: "M17 17h4" }],
    ["path", { d: "M21 12h-4" }],
    ["path", { d: "M7 12h-4" }],
    ["path", { d: "M12 3v5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M6 6l3 3" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M15 9l3 -3l-3 3" }, { r: "draw", d: 0.2 }],
  ],
});
