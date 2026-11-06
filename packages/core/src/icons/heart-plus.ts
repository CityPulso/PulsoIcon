import { icon } from "../icon.js";

export const HeartPlus = icon("HeartPlus", "heart-plus", {
  nodes: [
    [
      "path",
      { d: "m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49" },
      { r: "beat", o: [12, 12.492] },
    ],
    ["path", { d: "M15 15h6" }, { r: "spin", d: 0.2, a: 90, o: [18, 15] }],
    ["path", { d: "M18 12v6" }, { r: "spin", d: 0.2, a: 90, o: [18, 15] }],
  ],
});
