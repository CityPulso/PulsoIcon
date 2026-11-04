import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pentagon-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PentagonMinus = createIcon("PentagonMinus", "pentagon-minus", {
  nodes: [
    [
      "path",
      {
        d: "M12.5 21q -1.82 0 -5.458 .005a1.98 1.98 0 0 1 -1.881 -1.367l-3.064 -9.43a1.98 1.98 0 0 1 .719 -2.212l8.021 -5.828a1.98 1.98 0 0 1 2.326 0l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-1.559 4.792",
      },
      { r: "press", d: 0, a: 0.05, o: [12, 12] },
    ],
    ["path", { d: "M16 19h6" }, { r: "growX", d: 0.15, o: [19, 19] }],
  ],
});
