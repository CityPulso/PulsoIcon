import { icon } from "../icon.js";

// Adapted from Iconoir "rounded-mirror" (MIT, Copyright (c) 2021 Luca Burgio).
export const RoundedMirror = icon("RoundedMirror", "rounded-mirror", {
  nodes: [
    ["path", { d: "M20 10V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" }],
    ["path", { d: "M17.5 4.5L13 8" }, { r: "draw" }],
    ["path", { d: "M19 7L11.5 13" }, { r: "draw", d: 0.12 }],
  ],
});
