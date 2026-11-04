import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "stats-report" (MIT, Copyright (c) 2021 Luca Burgio).
export const StatsReport = createIcon("StatsReport", "stats-report", {
  nodes: [
    ["path", { d: "M10 9H6" }, { r: "growX", d: 0.2, o: [6, 9] }],
    [
      "path",
      { d: "M15.5 11C14.1193 11 13 9.88071 13 8.5C13 7.11929 14.1193 6 15.5 6C16.8807 6 18 7.11929 18 8.5C18 9.88071 16.8807 11 15.5 11Z" },
      { r: "spin", d: 0.1, o: [15.5, 8.5] },
    ],
    ["path", { d: "M6 6H9" }, { r: "growX", d: 0.15, o: [6, 6] }],
    ["path", { d: "M18 18L13.5 15L11 17L6 13" }, { r: "draw" }],
    ["path", { d: "M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" }],
  ],
});
