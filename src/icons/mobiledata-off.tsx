import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mobiledata-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MobiledataOff = createIcon("MobiledataOff", "mobiledata-off", {
  nodes: [
    ["path", { d: "M16 12v-8" }, { r: "slide", y: -1, a: 1.5 }],
    ["path", { d: "M8 20v-8" }, { r: "slide", y: 1, a: 1.5 }],
    ["path", { d: "M13 7l3 -3l3 3" }, { r: "slide", y: -1, a: 1.5 }],
    ["path", { d: "M5 17l3 3l3 -3" }, { r: "slide", y: 1, a: 1.5 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M16 12v-8", fill: "none" }, { r: "slide", y: -1, a: 1.5 }],
    ["path", { d: "M8 20v-8", fill: "none" }, { r: "slide", y: 1, a: 1.5 }],
    ["path", { d: "M13 7l3 -3l3 3", fill: "none" }, { r: "slide", y: -1, a: 1.5 }],
    ["path", { d: "M5 17l3 3l3 -3", fill: "none" }, { r: "slide", y: 1, a: 1.5 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
