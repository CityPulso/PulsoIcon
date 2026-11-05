import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "inbox-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const InboxOff = createIcon("InboxOff", "inbox-off", {
  nodes: [
    ["path", { d: "M8 4h10a2 2 0 0 1 2 2v10m-.593 3.422a2 2 0 0 1 -1.407 .578h-12a2 2 0 0 1 -2 -2v-12c0 -.554 .225 -1.056 .59 -1.418" }],
    ["path", { d: "M4 13h3l3 3h4l.987 -.987m2.013 -2.013h3" }, { r: "slide", y: 1, a: 1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12" }, { r: "slide", y: 1, a: 1 }, "line"],
    ["path", { d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
