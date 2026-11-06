import { icon } from "../icon.js";

export const DiamondExclamationPoint = icon("DiamondExclamationPoint", "diamond-exclamation-point", {
  nodes: [
    [
      "path",
      { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" },
      { r: "shake", a: 1, o: [12, 12] },
    ],
    ["path", { d: "M12 8v4" }, { r: "grow", d: 0.1, o: [12, 8] }],
    ["path", { d: "M12 16h.01" }, { r: "pop", d: 0.25, o: [12.005, 16] }],
  ],
});
