import { icon } from "../icon.js";

// Adapted from Iconoir "list-select" (MIT, Copyright (c) 2021 Luca Burgio).
export const ListSelect = icon("ListSelect", "list-select", {
  nodes: [
    ["path", { d: "M9 6L20 6" }],
    ["path", { d: "M5 6.01L5.01 5.99889" }],
    ["path", { d: "M5 12.01L5.01 11.9989" }],
    ["path", { d: "M3.80005 17.8L4.60005 18.6L6.60004 16.6" }, { r: "draw" }],
    ["path", { d: "M9 12L20 12" }],
    ["path", { d: "M9 18L20 18" }, { r: "growX", d: 0.1, o: [9, 18] }],
  ],
});
