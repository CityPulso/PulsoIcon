import { createIcon } from "../runtime/createIcon.js";

export const SpellCheck2 = createIcon("SpellCheck2", "spell-check-2", {
  nodes: [
    ["path", { d: "m6 16 6-12 6 12" }, { r: "press", a: 0.06, o: [12, 10] }],
    ["path", { d: "M8 12h8" }, { r: "press", a: 0.06, o: [12, 10] }],
    [
      "path",
      { d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1" },
      { r: "draw", d: 0.1, o: [12.05, 20.5] },
    ],
  ],
});
