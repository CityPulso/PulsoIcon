import { icon } from "../icon.js";

// Adapted from Tabler Icons "traffic-lights-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TrafficLightsOff = icon("TrafficLightsOff", "traffic-lights-off", {
  nodes: [
    ["path", { d: "M8 4c.912 -1.219 2.36 -2 4 -2a5 5 0 0 1 5 5v6m0 4a5 5 0 0 1 -10 0v-10" }],
    ["path", { d: "M12 8a1 1 0 1 0 -1 -1" }, { r: "flicker", o: [12, 7] }],
    ["path", { d: "M11.291 11.295a1 1 0 0 0 1.418 1.41" }, { r: "flicker", d: 0.2, o: [12, 12] }],
    ["path", { d: "M11 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "flicker", d: 0.4, o: [12, 17] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M7 7a5 5 0 0 1 5 -5a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5a5 5 0 0 1 -5 -5l0 -10" }],
    ["path", { d: "M11 7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "flicker", o: [12, 7] }, "line"],
    ["path", { d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "flicker", d: 0.2, o: [12, 12] }, "line"],
    ["path", { d: "M11 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "flicker", d: 0.4, o: [12, 17] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
