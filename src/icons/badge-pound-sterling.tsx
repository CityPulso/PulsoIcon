import { createIcon } from "../runtime/createIcon.js";

export const BadgePoundSterling = createIcon("BadgePoundSterling", "badge-pound-sterling", {
  nodes: [
    [
      "path",
      { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" },
      { r: "spin", a: 90, o: [11.992, 12.004] },
    ],
    ["path", { d: "M8 12h4" }, { r: "growX", d: 0.3, o: [10, 12] }],
    ["path", { d: "M10 16V9.5a2.5 2.5 0 0 1 5 0" }, { r: "draw", d: 0.15, o: [12.5, 11.5] }],
    ["path", { d: "M8 16h7" }, { r: "growX", d: 0.38, o: [11.5, 16] }],
  ],
});
