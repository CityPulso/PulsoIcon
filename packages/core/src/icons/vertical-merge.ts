import { icon } from "../icon.js";

// Adapted from Iconoir "vertical-merge" (MIT, Copyright (c) 2021 Luca Burgio).
export const VerticalMerge = icon("VerticalMerge", "vertical-merge", {
  nodes: [
    ["path", { d: "M12 2V10M12 10L15.5 6.5M12 10L8.5 6.5" }, { r: "slide", x: 0, y: 1 }],
    ["path", { d: "M12 22V14M12 14L15.5 17.5M12 14L8.5 17.5" }, { r: "slide", x: 0, y: -1 }],
    ["path", { d: "M3 14L21 14" }],
    ["path", { d: "M3 10L21 10" }],
  ],
});
