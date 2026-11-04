import { createIcon } from "../runtime/createIcon.js";

export const DiamondPercent = createIcon("DiamondPercent", "diamond-percent", {
  nodes: [
    [
      "path",
      { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z" },
      { r: "spin", a: 90, o: [11.995, 12.005] },
    ],
    ["path", { d: "M9.2 9.2h.01" }, { r: "pop", d: 0.2, o: [9.205, 9.2] }],
    ["path", { d: "m14.5 9.5-5 5" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M14.7 14.8h.01" }, { r: "pop", d: 0.3, o: [14.705, 14.8] }],
  ],
});
