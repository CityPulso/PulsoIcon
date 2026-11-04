import { createIcon } from "../runtime/createIcon.js";

export const HeartMinus = createIcon("HeartMinus", "heart-minus", {
  nodes: [
    [
      "path",
      { d: "m14.876 18.99-1.368 1.323a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.244 1.572" },
      { r: "beat", o: [12, 12.492] },
    ],
    ["path", { d: "M15 15h6" }, { r: "growX", d: 0.2, o: [18, 15] }],
  ],
});
