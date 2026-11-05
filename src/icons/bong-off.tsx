import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bong-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BongOff = createIcon("BongOff", "bong-off", {
  nodes: [
    ["path", { d: "M9 5v-2h4v6m1.5 1.5l2.5 -2.5l2 2l-2.5 2.5m-.5 3.505a5 5 0 1 1 -7 -4.589v-2.416" }, { r: "wobble", a: 4, o: [11, 17] }],
    ["path", { d: "M8 3h6" }, { r: "wobble", a: 4, o: [11, 17] }],
    ["path", { d: "M6.1 17h9.8" }, { r: "wobble", a: 4, o: [11, 17] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M13 3v8.416c.134 .059 .265 .123 .393 .193l3.607 -3.609l2 2l-3.608 3.608a5 5 0 1 1 -6.392 -2.192v-8.416h4" }, { r: "wobble", a: 4, o: [11, 17] }],
    ["path", { d: "M8 3h6", fill: "none" }, { r: "wobble", a: 4, o: [11, 17] }],
    ["path", { d: "M6.1 17h9.8" }, { r: "wobble", a: 4, o: [11, 17] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
