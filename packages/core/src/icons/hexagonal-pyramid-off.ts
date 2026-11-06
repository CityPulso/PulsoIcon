import { icon } from "../icon.js";

// Adapted from Tabler Icons "hexagonal-pyramid-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HexagonalPyramidOff = icon("HexagonalPyramidOff", "hexagonal-pyramid-off", {
  nodes: [
    [
      "path",
      {
        d: "M7.877 7.88l-4.56 7.53a1.988 1.988 0 0 0 .266 2.484l2.527 2.523c.374 .373 .88 .583 1.408 .583h8.964c.528 0 1.034 -.21 1.408 -.583l1.264 -1.263m1.792 -2.205a1.986 1.986 0 0 0 -.262 -1.538l-7.846 -12.954a.996 .996 0 0 0 -1.676 0l-1.772 2.926",
      },
      { r: "wobble", o: [12, 21] },
    ],
    ["path", { d: "M12 2l-1.254 4.742m-.841 3.177l-2.905 10.981" }, { r: "wobble", o: [12, 21] }],
    ["path", { d: "M12 2l2.153 8.14m1.444 5.457l1.403 5.303" }, { r: "wobble", o: [12, 21] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    [
      "path",
      {
        d: "M11.162 2.457l-7.846 12.954a1.988 1.988 0 0 0 .267 2.483l2.527 2.523c.374 .373 .88 .583 1.408 .583h8.964c.528 0 1.034 -.21 1.408 -.583l2.527 -2.523a1.988 1.988 0 0 0 .267 -2.483l-7.846 -12.954a.996 .996 0 0 0 -1.676 0",
      },
      { r: "wobble", o: [12, 21] },
    ],
    ["path", { d: "M12 2l-5 18.9" }, { r: "wobble", o: [12, 21] }, "line"],
    ["path", { d: "M12 2l5 18.9" }, { r: "wobble", o: [12, 21] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
