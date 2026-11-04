import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pentagon-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PentagonOff = createIcon("PentagonOff", "pentagon-off", {
  nodes: [
    [
      "path",
      {
        d: "M8.133 4.133l2.704 -1.965a1.978 1.978 0 0 1 2.326 0l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-1.887 5.808m-.981 3.02l-.196 .602a1.978 1.978 0 0 1 -1.881 1.367h-9.916a1.978 1.978 0 0 1 -1.881 -1.367l-3.064 -9.43a1.978 1.978 0 0 1 .719 -2.212l2.994 -2.176",
      },
      { r: "turn", a: 72, o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
