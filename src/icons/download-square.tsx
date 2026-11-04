import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "download-square" (MIT, Copyright (c) 2021 Luca Burgio).
export const DownloadSquare = createIcon("DownloadSquare", "download-square", {
  nodes: [
    ["path", { d: "M6 18L18 18" }, { r: "press", d: 0.2, a: 0.2, o: [12, 18] }],
    ["path", { d: "M12 6V14M12 14L15.5 10.5M12 14L8.5 10.5" }, { r: "slide", y: 1, a: 1.5, o: [12, 10] }],
    ["path", { d: "M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" }],
  ],
});
