import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "database-stats" (MIT, Copyright (c) 2021 Luca Burgio).
export const DatabaseStats = createIcon("DatabaseStats", "database-stats", {
  nodes: [
    ["path", { d: "M4 6V12C4 12 4 15 11 15C18 15 18 12 18 12V6" }],
    ["path", { d: "M11 3C18 3 18 6 18 6C18 6 18 9 11 9C4 9 4 6 4 6C4 6 4 3 11 3Z" }],
    ["path", { d: "M11 21C4 21 4 18 4 18V12" }],
    ["path", { d: "M15 21V19" }, { r: "grow", d: 0, o: [15, 21] }],
    ["path", { d: "M18 21V17" }, { r: "grow", d: 0.1, o: [18, 21] }],
    ["path", { d: "M21 21V15" }, { r: "grow", d: 0.2, o: [21, 21] }],
  ],
});
