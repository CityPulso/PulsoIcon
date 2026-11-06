import { icon } from "../icon.js";

export const Bookshelf = icon("Bookshelf", "bookshelf", {
  nodes: [
    ["rect", { x: "3", y: "2", width: "18", height: "20", rx: "2" }, { r: "press", a: 0.03, o: [12, 22] }],
    ["path", { d: "M3 12h18" }, { r: "press", a: 0.03, o: [12, 22] }],
    ["path", { d: "M7 6v6" }, { r: "drop", d: 0.05, y: -1, a: 2, o: [7, 9] }],
    ["path", { d: "M10.5 5v7" }, { r: "drop", d: 0.12, y: -1, a: 2, o: [10.5, 8.5] }],
    ["path", { d: "m14 6.5 3 5.5" }, { r: "swing", d: 0.2, a: 10, o: [17, 12] }],
    ["path", { d: "M7 16v6" }, { r: "drop", d: 0.1, y: -1, a: 2, o: [7, 19] }],
    ["path", { d: "M10.5 15v7" }, { r: "drop", d: 0.17, y: -1, a: 2, o: [10.5, 18.5] }],
  ],
});
