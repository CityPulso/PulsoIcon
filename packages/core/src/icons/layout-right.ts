import { icon } from "../icon.js";

// Adapted from Iconoir "layout-right" (MIT, Copyright (c) 2021 Luca Burgio).
export const LayoutRight = icon("LayoutRight", "layout-right", {
  nodes: [
    ["path", { d: "M20.4 3H3.6C3.26863 3 3 3.26863 3 3.6V20.4C3 20.7314 3.26863 21 3.6 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3Z" }],
    ["path", { d: "M14.25 9.75V21" }, { r: "grow", o: [14.25, 9.75] }],
    ["path", { d: "M21 9.75H14.25H3" }, { r: "growX", d: 0.15, o: [12, 9.75] }],
  ],
});
