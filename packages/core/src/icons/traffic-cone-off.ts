import { icon } from "../icon.js";

// Adapted from Tabler Icons "traffic-cone-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TrafficConeOff = icon("TrafficConeOff", "traffic-cone-off", {
  nodes: [
    ["path", { d: "M4 20h16" }],
    ["path", { d: "M9.4 10h.6m4 0h.6" }, { r: "wobble", a: 4, o: [12, 20] }],
    ["path", { d: "M7.8 15h7.2" }, { r: "wobble", a: 4, o: [12, 20] }],
    ["path", { d: "M6 20l3.5 -10.5" }, { r: "wobble", a: 4, o: [12, 20] }],
    ["path", { d: "M10.5 6.5l.5 -1.5h2l2 6m2 6l1 3" }, { r: "wobble", a: 4, o: [12, 20] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M16.05 10.966a5 2.5 0 0 1-8.1 0" }, { r: "wobble", a: 4, o: [12, 20] }, "line"],
    ["path", { d: "m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04", fill: "none" }],
    ["path", { d: "M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z" }, { r: "wobble", a: 4, o: [12, 20] }],
    ["path", { d: "M9.194 6.57a5 2.5 0 0 0 5.61 0" }, { r: "wobble", a: 4, o: [12, 20] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
