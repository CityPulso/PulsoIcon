import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "meteor-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MeteorOff = createIcon("MeteorOff", "meteor-off", {
  nodes: [
    [
      "path",
      { d: "M9.75 5.761l3.25 -2.761l-1 5l9 -5l-5 9h5l-2.467 2.536m-1.983 2.04l-2.441 2.51a6.5 6.5 0 1 1 -8.855 -9.506l2.322 -1.972" },
      { r: "slide", x: -1, y: 1, a: 1.5, o: [9, 15] },
    ],
    ["path", { d: "M7 14.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [9, 15] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
