import { icon } from "../icon.js";

export const Move3D = icon("Move3D", "move-3d", {
  nodes: [
    ["path", { d: "M5 3v16h16" }, { r: "spin", a: 20, o: [5, 13] }],
    ["path", { d: "m5 19 6-6" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1, o: [8, 16] }],
    ["path", { d: "m2 6 3-3 3 3" }, { r: "slide", d: 0.1, y: -1, a: 1, o: [5, 4.5] }],
    ["path", { d: "m18 16 3 3-3 3" }, { r: "slide", d: 0.1, x: 1, y: 1, a: 1, o: [19.5, 19] }],
  ],
});
