import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "compress-lines" (MIT, Copyright (c) 2021 Luca Burgio).
export const CompressLines = createIcon("CompressLines", "compress-lines", {
  nodes: [
    ["path", { d: "M18 2L6 2" }],
    ["path", { d: "M18 22L6 22" }],
    ["path", { d: "M12 5V10M12 10L15 7M12 10L9 7" }, { r: "slide", y: 1, a: 1.5 }],
    ["path", { d: "M12 19V14M12 14L15 17M12 14L9 17" }, { r: "slide", y: -1, a: 1.5 }],
  ],
});
