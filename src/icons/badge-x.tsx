import { createIcon } from "../runtime/createIcon.js";

export const BadgeX = createIcon("BadgeX", "badge-x", {
  nodes: [
    [
      "path",
      { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" },
      { r: "shake", o: [11.992, 12.004] },
    ],
    ["line", { x1: "15", x2: "9", y1: "9", y2: "15" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["line", { x1: "9", x2: "15", y1: "9", y2: "15" }, { r: "draw", d: 0.25, o: [12, 12] }],
  ],
});
