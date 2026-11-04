import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "upload-square" (MIT, Copyright (c) 2021 Luca Burgio).
export const UploadSquare = createIcon("UploadSquare", "upload-square", {
  nodes: [
    ["path", { d: "M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" }],
    ["path", { d: "M6 18L18 18" }, { r: "growX", d: 0.15, o: [12, 18] }],
    ["path", { d: "M12 14V6M12 6L15.5 9.5M12 6L8.5 9.5" }, { r: "slide", x: 0, y: -1 }],
  ],
});
