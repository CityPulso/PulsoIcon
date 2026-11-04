import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "hula-hoop" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HulaHoop = createIcon("HulaHoop", "hula-hoop", {
  nodes: [
    ["path", { d: "M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "sway", a: 4, o: [12, 13] }],
    ["path", { d: "M4 6l2 1.5l6 .5l6 -.5l2 -1.5" }],
    ["path", { d: "M16 21l-4 -8v-5" }],
    ["path", { d: "M8 21l4 -8" }],
    ["path", { d: "M9.007 10.999c-2.37 .32 -4.007 1.201 -4.007 2.001c0 1.105 3.134 2 7 2s7 -.895 7 -2c0 -.798 -1.636 -1.679 -4 -2" }, { r: "sway", a: 10, o: [12, 13] }],
  ],
});
