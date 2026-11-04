import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "collage-frame" (MIT, Copyright (c) 2021 Luca Burgio).
export const CollageFrame = createIcon("CollageFrame", "collage-frame", {
  nodes: [
    ["path", { d: "M19.4 20H4.6C4.26863 20 4 19.7314 4 19.4V4.6C4 4.26863 4.26863 4 4.6 4H19.4C19.7314 4 20 4.26863 20 4.6V19.4C20 19.7314 19.7314 20 19.4 20Z" }],
    ["path", { d: "M11 12V4" }, { r: "draw", d: 0.0 }],
    ["path", { d: "M4 12H20" }, { r: "draw", d: 0.15 }],
  ],
});
