import { createIcon } from "../runtime/createIcon.js";

export const BadgeEuro = createIcon("BadgeEuro", "badge-euro", {
  nodes: [
    [
      "path",
      { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" },
      { r: "spin", a: 90, o: [11.992, 12.004] },
    ],
    ["path", { d: "M7 12h5" }, { r: "growX", d: 0.3, o: [7, 12] }],
    ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2" }, { r: "redraw", d: 0.15, o: [11.48, 12] }],
  ],
});
