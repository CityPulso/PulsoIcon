import { icon } from "../icon.js";

export const Navigation2Off = icon("Navigation2Off", "navigation-2-off", {
  nodes: [
    ["path", { d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17" }, { r: "bounce", y: -1, a: 1.5, o: [12, 11.5] }],
    ["path", { d: "M14.53 8.88 12 2l-1.17 3.17" }, { r: "bounce", y: -1, a: 1.5, o: [12, 11.5] }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
  solid: [
    ["polygon", { points: "12 2 19 21 12 17 5 21 12 2" }, { r: "bounce", y: -1, a: 1.5, o: [12, 11.5] }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
