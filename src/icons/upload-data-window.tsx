import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "upload-data-window" (MIT, Copyright (c) 2021 Luca Burgio).
export const UploadDataWindow = createIcon("UploadDataWindow", "upload-data-window", {
  nodes: [
    ["path", { d: "M14 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V14" }],
    ["path", { d: "M2 7L22 7" }],
    ["path", { d: "M5 5.01L5.01 4.99889" }],
    ["path", { d: "M8 5.01L8.01 4.99889" }],
    ["path", { d: "M11 5.01L11.01 4.99889" }],
    ["path", { d: "M19.5 22V16M19.5 16L17 18.5M19.5 16L22 18.5" }, { r: "shoot", x: 0, y: -1, a: 4 }],
  ],
});
