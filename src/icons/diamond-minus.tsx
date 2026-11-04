import { createIcon } from "../runtime/createIcon.js";

export const DiamondMinus = createIcon("DiamondMinus", "diamond-minus", {
  nodes: [
    [
      "path",
      { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" },
      { r: "spin", a: 90, o: [11.995, 12.005] },
    ],
    ["path", { d: "M8 12h8" }, { r: "growX", d: 0.15, o: [12, 12] }],
  ],
});
