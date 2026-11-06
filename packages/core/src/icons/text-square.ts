import { icon } from "../icon.js";

// Adapted from Iconoir "text-square" (MIT, Copyright (c) 2021 Luca Burgio).
export const TextSquare = icon("TextSquare", "text-square", {
  nodes: [
    ["path", { d: "M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z" }],
    ["path", { d: "M7 9V7L17 7V9" }, { r: "draw" }],
    ["path", { d: "M12 7V17M12 17H10M12 17H14" }, { r: "draw", d: 0.15 }],
  ],
});
