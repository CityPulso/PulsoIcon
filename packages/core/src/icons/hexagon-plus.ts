import { icon } from "../icon.js";

// Adapted from Tabler Icons "hexagon-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HexagonPlus = icon("HexagonPlus", "hexagon-plus", {
  nodes: [
    [
      "path",
      {
        d: "M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033",
      },
      { r: "press", d: 0, a: 0.05, o: [12, 12] },
    ],
    ["path", { d: "M9 12h6" }, { r: "spin", d: 0.1, a: 180, o: [12, 12] }],
    ["path", { d: "M12 9v6" }, { r: "spin", d: 0.1, a: 180, o: [12, 12] }],
  ],
});
