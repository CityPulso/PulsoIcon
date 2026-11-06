import { icon } from "../icon.js";

// Adapted from Tabler Icons "crown-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CrownOff = icon("CrownOff", "crown-off", {
  nodes: [
    [
      "path",
      { d: "M18 18h-13l-1.865 -9.327a.25 .25 0 0 1 .4 -.244l4.465 3.571l1.6 -2.4m1.596 -2.394l.804 -1.206l4 6l4.464 -3.571a.25 .25 0 0 1 .401 .244l-1.363 6.818" },
      { r: "float", o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    [
      "path",
      {
        d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
      },
      { r: "float", o: [12, 12] },
    ],
    ["path", { d: "M5 21h14", fill: "none" }, { r: "float", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
