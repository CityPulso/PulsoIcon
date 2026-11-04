import { createIcon } from "../runtime/createIcon.js";

export const EggFried = createIcon("EggFried", "egg-fried", {
  nodes: [
    ["circle", { cx: "11.5", cy: "12.5", r: "3.5" }, { r: "pop", d: 0.1, o: [11.5, 12.5] }],
    [
      "path",
      { d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z" },
      { r: "jelly", a: 0.08, o: [12, 12] },
    ],
  ],
});
