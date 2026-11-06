import { icon } from "../icon.js";

// Adapted from Iconoir "square-3d-corner-to-corner" (MIT, Copyright (c) 2021 Luca Burgio).
export const Square3dCornerToCorner = icon("Square3dCornerToCorner", "square-3d-corner-to-corner", {
  text: true,
  nodes: [
    ["path", { d: "M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" }],
    ["path", { d: "M3 3h.01" }, { r: "pop", o: [3, 3] }],
    ["path", { d: "M21 21h.01" }, { r: "pop", d: 0.15, o: [21, 21] }],
  ],
});
