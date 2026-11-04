import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "download-circle" (MIT, Copyright (c) 2021 Luca Burgio).
export const DownloadCircle = createIcon("DownloadCircle", "download-circle", {
  nodes: [
    ["path", { d: "M9 17L15 17" }, { r: "press", d: 0.2, a: 0.2, o: [12, 17] }],
    ["path", { d: "M12 6V13M12 13L15.5 9.5M12 13L8.5 9.5" }, { r: "slide", y: 1, a: 1.5, o: [12, 9.5] }],
    ["path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" }],
  ],
});
