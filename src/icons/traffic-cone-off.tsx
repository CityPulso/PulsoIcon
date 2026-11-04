import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "traffic-cone-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TrafficConeOff = createIcon("TrafficConeOff", "traffic-cone-off", {
  nodes: [
    ["path", { d: "M4 20h16" }],
    ["path", { d: "M9.4 10h.6m4 0h.6" }, { r: "wobble", a: 4, o: [12, 20] }],
    ["path", { d: "M7.8 15h7.2" }, { r: "wobble", a: 4, o: [12, 20] }],
    ["path", { d: "M6 20l3.5 -10.5" }, { r: "wobble", a: 4, o: [12, 20] }],
    ["path", { d: "M10.5 6.5l.5 -1.5h2l2 6m2 6l1 3" }, { r: "wobble", a: 4, o: [12, 20] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
