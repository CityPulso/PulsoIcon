import { icon } from "../icon.js";

export const DiamondInfo = icon("DiamondInfo", "diamond-info", {
  nodes: [
    [
      "path",
      { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" },
      { r: "press", a: 0.05, o: [12, 12] },
    ],
    ["path", { d: "M12 16v-4" }, { r: "grow", d: 0.15, o: [12, 16] }],
    ["path", { d: "M12 8h.01" }, { r: "drop", d: 0.05, o: [12.005, 8] }],
  ],
});
