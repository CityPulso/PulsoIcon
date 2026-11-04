import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "vertical-split" (MIT, Copyright (c) 2021 Luca Burgio).
export const VerticalSplit = createIcon("VerticalSplit", "vertical-split", {
  nodes: [
    ["path", { d: "M12 14V22M12 22L15.5 18.5M12 22L8.5 18.5" }, { r: "slide", x: 0, y: 1 }],
    ["path", { d: "M12 10V2M12 2L15.5 5.5M12 2L8.5 5.5" }, { r: "slide", x: 0, y: -1 }],
    ["path", { d: "M3 14L21 14" }],
    ["path", { d: "M3 10L21 10" }],
  ],
});
