import { icon } from "../icon.js";

// Adapted from Iconoir "split-area" (MIT, Copyright (c) 2021 Luca Burgio).
export const SplitArea = icon("SplitArea", "split-area", {
  nodes: [
    ["path", { d: "M20 20H4V16H20V20Z" }, { r: "grow", o: [12, 20] }],
    ["path", { d: "M2 12H22" }, { r: "growX", d: 0.1, o: [12, 12] }],
    ["path", { d: "M7 4H4V7" }],
    ["path", { d: "M11 4H13" }],
    ["path", { d: "M17 4H20V7" }],
  ],
});
