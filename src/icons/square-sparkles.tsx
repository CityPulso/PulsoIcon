import { createIcon } from "../runtime/createIcon.js";

export const SquareSparkles = createIcon("SquareSparkles", "square-sparkles", {
  nodes: [
    ["path", { d: "M11 15H7" }, { r: "spin", d: 0.15, a: 90, o: [9, 15] }],
    [
      "path",
      {
        d: "M15.41 2.49a.6.6 0 011.18 0l.63 3.334a1.2 1.2 0 00.956.955l3.334.631a.6.6 0 010 1.18l-3.334.63a1.2 1.2 0 00-.955.956l-.631 3.334a.6.6 0 01-1.18 0l-.63-3.334a1.2 1.2 0 00-.956-.955L10.49 8.59a.6.6 0 010-1.18l3.334-.63a1.2 1.2 0 00.955-.956z",
      },
      { r: "twinkle", d: 0.05, o: [16, 8] },
    ],
    ["path", { d: "M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 13v4" }, { r: "spin", d: 0.15, a: 90, o: [9, 15] }],
  ],
});
