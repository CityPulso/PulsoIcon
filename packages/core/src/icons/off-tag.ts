import { icon } from "../icon.js";

// Adapted from Iconoir "off-tag" (MIT, Copyright (c) 2021 Luca Burgio).
export const OffTag = icon("OffTag", "off-tag", {
  nodes: [
    ["path", { d: "M1 15V9C1 5.68629 3.68629 3 7 3H17C20.3137 3 23 5.68629 23 9V15C23 18.3137 20.3137 21 17 21H7C3.68629 21 1 18.3137 1 15Z" }],
    ["path", { d: "M7 9C8.65685 9 10 10.3431 10 12C10 13.6569 8.65685 15 7 15C5.34315 15 4 13.6569 4 12C4 10.3431 5.34315 9 7 9Z" }, { r: "pop", o: [7, 12] }],
    ["path", { d: "M12 15V9L15 9" }, { r: "pop", d: 0.08, o: [13.5, 12] }],
    ["path", { d: "M17 15V9L20 9" }, { r: "pop", d: 0.16, o: [18.5, 12] }],
    ["path", { d: "M12.0001 12H14.5715" }, { r: "pop", d: 0.08, o: [13.5, 12] }],
    ["path", { d: "M17.0001 12H19.5715" }, { r: "pop", d: 0.16, o: [18.5, 12] }],
  ],
});
