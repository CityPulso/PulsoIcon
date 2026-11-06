import { icon } from "../icon.js";

export const BadgePercent = icon("BadgePercent", "badge-percent", {
  nodes: [
    [
      "path",
      { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" },
      { r: "spin", a: 90, o: [11.992, 12.004] },
    ],
    ["path", { d: "m15 9-6 6" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M9 9h.01" }, { r: "pop", d: 0.2, o: [9.005, 9] }],
    ["path", { d: "M15 15h.01" }, { r: "pop", d: 0.3, o: [15.005, 15] }],
  ],
});
