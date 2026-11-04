import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "world-map-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GlobeMapOff = createIcon("GlobeMapOff", "globe-map-off", {
  nodes: [
    ["path", { d: "M20 8h-2a2 2 0 0 0 -2 2c0 .55 -.222 1.049 -.582 1.41" }, { r: "wobble", a: 4, o: [12, 12] }],
    ["path", { d: "M3 12h3a2 2 0 0 1 2 2v.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 1 1.5 1.5v3.25" }, { r: "wobble", a: 4, o: [12, 12] }],
    ["path", { d: "M15 20.5v-3.5c0 -.546 .219 -1.04 .573 -1.401m3.427 -.599h1.5" }, { r: "wobble", a: 4, o: [12, 12] }],
    ["path", { d: "M5.635 5.637a9 9 0 0 0 12.724 12.732" }, { r: "wobble", a: 4, o: [12, 12] }],
    ["path", { d: "M20.04 16.043a9 9 0 0 0 -12.084 -12.083" }, { r: "wobble", a: 4, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
