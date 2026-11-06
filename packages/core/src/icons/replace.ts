import { icon } from "../icon.js";

export const Replace = icon("Replace", "replace", {
  nodes: [
    ["path", { d: "M14 4a1 1 0 0 1 1-1" }, { r: "fade", d: 0.15, o: [17.5, 6.5] }],
    ["path", { d: "M15 10a1 1 0 0 1-1-1" }, { r: "fade", d: 0.19, o: [17.5, 6.5] }],
    ["path", { d: "M21 4a1 1 0 0 0-1-1" }, { r: "fade", d: 0.23, o: [17.5, 6.5] }],
    ["path", { d: "M21 9a1 1 0 0 1-1 1" }, { r: "fade", d: 0.27, o: [17.5, 6.5] }],
    ["path", { d: "m3 7 3 3 3-3" }, { r: "spin", a: -180, o: [8, 6.5] }],
    ["path", { d: "M6 10V5a2 2 0 0 1 2-2h2" }, { r: "spin", a: -180, o: [8, 6.5] }],
    ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }, { r: "pop", d: 0.05, o: [6.5, 17.5] }],
  ],
});
