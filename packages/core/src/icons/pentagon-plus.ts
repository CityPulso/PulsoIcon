import { icon } from "../icon.js";

// Adapted from Tabler Icons "pentagon-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PentagonPlus = icon("PentagonPlus", "pentagon-plus", {
  nodes: [
    [
      "path",
      {
        d: "M12.5 21.005h-5.458a1.978 1.978 0 0 1 -1.881 -1.367l-3.064 -9.43a1.978 1.978 0 0 1 .719 -2.212l8.021 -5.828a1.978 1.978 0 0 1 2.326 0l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-.78 2.401",
      },
      { r: "press", d: 0, a: 0.05, o: [12, 12] },
    ],
    ["path", { d: "M16 19h6" }, { r: "spin", d: 0.15, a: 180, o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "spin", d: 0.15, a: 180, o: [19, 19] }],
  ],
});
