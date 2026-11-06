import { icon } from "../icon.js";

// Adapted from Iconoir "menu-scale" (MIT, Copyright (c) 2021 Luca Burgio).
export const MenuScale = icon("MenuScale", "menu-scale", {
  nodes: [
    ["path", { d: "M3 5H11" }, { r: "growX", o: [3, 5] }],
    ["path", { d: "M3 12H16" }, { r: "growX", d: 0.08, o: [3, 12] }],
    ["path", { d: "M3 19H21" }, { r: "growX", d: 0.16, o: [3, 19] }],
  ],
});
