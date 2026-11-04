import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "download-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DownloadOff = createIcon("DownloadOff", "download-off", {
  nodes: [
    ["path", { d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 1.83 -1.19" }],
    ["path", { d: "M7 11l5 5l2 -2m2 -2l1 -1" }, { r: "slide", y: 1, a: 1.5 }],
    ["path", { d: "M12 4v4m0 4v4" }, { r: "slide", y: 1, a: 1.5 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.1 }],
  ],
});
