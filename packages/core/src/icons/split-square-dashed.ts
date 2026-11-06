import { icon } from "../icon.js";

// Adapted from Iconoir "split-square-dashed" (MIT, Copyright (c) 2021 Luca Burgio).
export const SplitSquareDashed = icon("SplitSquareDashed", "split-square-dashed", {
  nodes: [
    ["path", { d: "M2 12H22" }, { r: "growX", o: [12, 12] }],
    ["path", { d: "M7 4H4V7" }, { r: "fade", d: 0.1 }],
    ["path", { d: "M11 4H13" }, { r: "fade", d: 0.15 }],
    ["path", { d: "M17 4H20V7" }, { r: "fade", d: 0.2 }],
    ["path", { d: "M11 20H13" }, { r: "fade", d: 0.25 }],
    ["path", { d: "M7 20H4V17" }, { r: "fade", d: 0.3 }],
    ["path", { d: "M17 20H20V17" }, { r: "fade", d: 0.35 }],
  ],
});
