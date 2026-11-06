import { icon } from "../icon.js";

export const OilCan = icon("OilCan", "oil-can", {
  nodes: [
    ["rect", { width: "11", height: "8", x: "3", y: "12", rx: "1" }, { r: "tilt", a: 8, o: [8.5, 20] }],
    ["path", { d: "m14 15 7-5" }, { r: "tilt", a: 8, o: [8.5, 20] }],
    ["path", { d: "M8.5 12V9" }, { r: "tilt", a: 8, o: [8.5, 20] }],
    ["path", { d: "M6.5 9h4" }, { r: "tilt", a: 8, o: [8.5, 20] }],
    ["path", { d: "M21 13.5s-1 1.2-1 2a1 1 0 0 0 2 0c0-.8-1-2-1-2z" }, { r: "drop", d: 0.2, a: 2, o: [21, 15] }],
  ],
});
