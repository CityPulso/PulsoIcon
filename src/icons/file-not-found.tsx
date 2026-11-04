import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "file-not-found" (MIT, Copyright (c) 2021 Luca Burgio).
export const FileNotFound = createIcon("FileNotFound", "file-not-found", {
  nodes: [
    ["path", { d: "M12 8L12 12" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 16.01L12.01 15.9989" }, { r: "pop", d: 0.4, o: [12, 16] }],
    ["path", { d: "M9 3H4V6" }, { r: "fade" }],
    ["path", { d: "M4 11V13" }, { r: "fade", d: 0.08 }],
    ["path", { d: "M20 11V13" }, { r: "fade", d: 0.12 }],
    ["path", { d: "M15 3H20V6" }, { r: "fade", d: 0.05 }],
    ["path", { d: "M9 21H4V18" }, { r: "fade", d: 0.1 }],
    ["path", { d: "M15 21H20V18" }, { r: "fade", d: 0.15 }],
  ],
});
