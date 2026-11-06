import { icon } from "../icon.js";

// Adapted from Iconoir "house-rooms" (MIT, Copyright (c) 2021 Luca Burgio).
export const HouseRooms = icon("HouseRooms", "house-rooms", {
  nodes: [
    ["path", { d: "M11 19V21" }, { r: "grow", d: 0.2, o: [11, 21] }],
    ["path", { d: "M11 12V16" }, { r: "grow", o: [11, 12] }],
    ["path", { d: "M16 12V16L14 16" }, { r: "grow", d: 0.1, o: [16, 12] }],
    ["path", { d: "M21 12L8 12" }],
    ["path", { d: "M5 12H3" }],
    ["path", { d: "M3 5L12 3L21 5" }, { r: "float", a: 1 }],
    ["path", { d: "M21 8.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V8.6C3 8.26863 3.26863 8 3.6 8H20.4C20.7314 8 21 8.26863 21 8.6Z" }],
  ],
});
