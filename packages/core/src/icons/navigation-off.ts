import { icon } from "../icon.js";

export const NavigationOff = icon("NavigationOff", "navigation-off", {
  nodes: [
    ["path", { d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43" }, { r: "bounce", x: 1, y: -1, a: 1.5, o: [12.5, 11.5] }],
    ["path", { d: "M17.39 11.73 22 2l-9.73 4.61" }, { r: "bounce", x: 1, y: -1, a: 1.5, o: [12.5, 11.5] }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
  solid: [
    ["polygon", { points: "3 11 22 2 13 21 11 13 3 11" }, { r: "bounce", x: 1, y: -1, a: 1.5, o: [12.5, 11.5] }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
