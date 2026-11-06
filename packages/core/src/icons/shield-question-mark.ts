import { icon } from "../icon.js";

export const ShieldQuestionMark = icon("ShieldQuestionMark", "shield-question-mark", {
  nodes: [
    [
      "path",
      { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" },
      { r: "wobble", o: [12, 12.001] },
    ],
    ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }, { r: "draw", d: 0.1, o: [12.01, 10.012] }],
    ["path", { d: "M12 17h.01" }, { r: "drop", d: 0.3, o: [12.005, 17] }],
  ],
});
