import { icon } from "../icon.js";

// Adapted from Iconoir "tv-warning" (MIT, Copyright (c) 2021 Luca Burgio).
export const TvWarning = icon("TvWarning", "tv-warning", {
  nodes: [
    ["path", { d: "M12 11V14" }, { r: "draw" }],
    ["path", { d: "M12 18.01L12.01 17.9989" }, { r: "pop", d: 0.25, o: [12, 18] }],
    ["path", { d: "M2 20V9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20Z" }],
    ["path", { d: "M8.5 2.5L12 6L15.5 2.5" }, { r: "swing", d: 0.1, a: 8, o: [12, 6] }],
  ],
});
