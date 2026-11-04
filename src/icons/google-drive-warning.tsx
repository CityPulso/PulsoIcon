import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "google-drive-warning" (MIT, Copyright (c) 2021 Luca Burgio).
export const GoogleDriveWarning = createIcon("GoogleDriveWarning", "google-drive-warning", {
  nodes: [
    [
      "path",
      {
        d: "M9.14286 3.00375L14.8571 3M9.14286 3.00375L2 15.0038M9.14286 3.00375L14.0446 12.5M14.8571 3L5.575 21M14.8571 3L21.5 14M5.575 21L2 15.0038M5.575 21H12.0036M2 15.0038H12.5",
      },
    ],
    ["path", { d: "M18 16L18 18" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M18 22.01L18.01 21.9989" }, { r: "pop", d: 0.35, o: [18, 22] }],
  ],
});
