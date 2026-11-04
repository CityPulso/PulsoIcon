import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bone-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BoneOff = createIcon("BoneOff", "bone-off", {
  nodes: [
    [
      "path",
      {
        d: "M12.5 8.502l.38 -.38a3 3 0 1 1 5.12 -2.122a3 3 0 1 1 -2.12 5.122l-.372 .372m-2.008 2.008l-2.378 2.378a3 3 0 1 1 -5.117 2.297l0 -.177l-.176 0a3 3 0 1 1 2.298 -5.115l2.378 -2.378",
      },
      { r: "wobble", a: 8, o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
