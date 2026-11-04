import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "yen-square" (MIT, Copyright (c) 2021 Luca Burgio).
export const YenSquare = createIcon("YenSquare", "yen-square", {
  nodes: [
    ["path", { d: "M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" }],
    ["path", { d: "M8 13H16" }, { r: "growX", d: 0.2, o: [12, 13] }],
    ["path", { d: "M8 7L12 12.5M16 7L12 12.5M12 12.5V18" }, { r: "draw" }],
    ["path", { d: "M8 15H16" }, { r: "growX", d: 0.25, o: [12, 15] }],
  ],
});
