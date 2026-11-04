import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "hexagonal-pyramid-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HexagonalPyramidPlus = createIcon("HexagonalPyramidPlus", "hexagonal-pyramid-plus", {
  nodes: [
    [
      "path",
      { d: "M18.642 12.04l-5.804 -9.583a.996 .996 0 0 0 -1.676 0l-7.846 12.954a1.988 1.988 0 0 0 .267 2.483l2.527 2.523c.374 .373 .88 .583 1.408 .583h4.982" },
      { r: "press", d: 0, a: 0.05, o: [12, 20] },
    ],
    ["path", { d: "M12 2l-5 18.9" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 2l3.304 12.489" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M16 19h6" }, { r: "spin", d: 0.15, a: 180, o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "spin", d: 0.15, a: 180, o: [19, 19] }],
  ],
});
