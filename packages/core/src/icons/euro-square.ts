import { icon } from "../icon.js";

// Adapted from Iconoir "euro-square" (MIT, Copyright (c) 2021 Luca Burgio).
export const EuroSquare = icon("EuroSquare", "euro-square", {
  text: true,
  nodes: [
    ["path", { d: "M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" }],
    [
      "path",
      { d: "M16 7.50265C15.3565 7.18066 14.6336 7 13.8696 7C11.1802 7 9 9.23858 9 12C9 14.7614 11.1802 17 13.8696 17C14.6336 17 15.3565 16.8193 16 16.4974" },
      { r: "draw", d: 0, o: [12, 12] },
    ],
    ["path", { d: "M8 11H14" }, { r: "draw", d: 0.15, o: [11, 11] }],
    ["path", { d: "M8 13H14" }, { r: "draw", d: 0.25, o: [11, 13] }],
  ],
});
