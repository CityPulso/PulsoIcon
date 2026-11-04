import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "open-in-window" (MIT, Copyright (c) 2021 Luca Burgio).
export const OpenInWindow = createIcon("OpenInWindow", "open-in-window", {
  nodes: [
    ["path", { d: "M8 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3H3.6C3.26863 3 3 3.26863 3 3.6V16" }],
    ["path", { d: "M3.5 20.5L12 12M12 12V16M12 12H8" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
  ],
});
