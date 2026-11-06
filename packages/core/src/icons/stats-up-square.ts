import { icon } from "../icon.js";

// Adapted from Iconoir "stats-up-square" (MIT, Copyright (c) 2021 Luca Burgio).
export const StatsUpSquare = icon("StatsUpSquare", "stats-up-square", {
  nodes: [
    ["path", { d: "M16 16L16 8" }, { r: "grow", d: 0.16, o: [16, 16] }],
    ["path", { d: "M12 16L12 11" }, { r: "grow", d: 0.08, o: [12, 16] }],
    ["path", { d: "M8 16L8 13" }, { r: "grow", o: [8, 16] }],
    ["path", { d: "M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" }],
  ],
});
