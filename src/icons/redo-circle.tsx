import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "redo-circle" (MIT, Copyright (c) 2021 Luca Burgio).
export const RedoCircle = createIcon("RedoCircle", "redo-circle", {
  nodes: [
    ["path", { d: "M17 10.625H9.8C9.8 10.625 9.8 10.625 9.8 10.625C9.8 10.625 7 10.625 7 13.625C7 17 9.8 17 9.8 17H10.6" }, { r: "drawBack" }],
    ["path", { d: "M13.5 14L17 10.625L13.5 7" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" }],
  ],
});
