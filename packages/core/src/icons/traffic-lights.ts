import { icon } from "../icon.js";

// Adapted from Tabler Icons "traffic-lights" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TrafficLights = icon("TrafficLights", "traffic-lights", {
  nodes: [
    ["path", { d: "M7 7a5 5 0 0 1 5 -5a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5a5 5 0 0 1 -5 -5l0 -10" }],
    ["path", { d: "M11 7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "fade" }],
    ["path", { d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "fade", d: 0.15 }],
    ["path", { d: "M11 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "fade", d: 0.3 }],
  ],
});
