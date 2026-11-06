import { icon } from "../icon.js";

// Adapted from Iconoir "filter-list-circle" (MIT, Copyright (c) 2021 Luca Burgio).
export const FilterListCircle = icon("FilterListCircle", "filter-list-circle", {
  nodes: [
    ["path", { d: "M6 9L18 9" }, { r: "growX", o: [12, 9] }],
    ["path", { d: "M8 13L16 13" }, { r: "growX", d: 0.1, o: [12, 13] }],
    ["path", { d: "M10 17L14 17" }, { r: "growX", d: 0.2, o: [12, 17] }],
    ["path", { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" }],
  ],
});
