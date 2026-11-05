import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mushroom-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MushroomOff = createIcon("MushroomOff", "mushroom-off", {
  nodes: [
    [
      "path",
      { d: "M5.874 5.89a8.128 8.128 0 0 0 -1.874 5.21a.9 .9 0 0 0 .9 .9h7.1m4 0h3.1a.9 .9 0 0 0 .9 -.9c0 -4.474 -3.582 -8.1 -8 -8.1c-1.43 0 -2.774 .38 -3.936 1.047" },
      { r: "bounce", y: -1, a: 1, o: [12, 12] },
    ],
    ["path", { d: "M10 12v7a2 2 0 1 0 4 0v-5" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M3 12a9 8 0 0 1 18 0Z" }, { r: "bounce", y: -1, a: 1, o: [12, 12] }],
    ["path", { d: "M9 12v7a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-7", fill: "none" }],
    ["path", { d: "M8.5 8.5h.01" }, undefined, "line"],
    ["path", { d: "M12 6.5h.01" }, { r: "bounce", y: -1, a: 1, o: [12, 12] }, "line"],
    ["path", { d: "M15.5 9h.01" }, undefined, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
