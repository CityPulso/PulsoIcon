import { icon } from "../icon.js";

export const Film = icon("Film", "film", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 3v18" }, { r: "slide", y: 1, a: 2, o: [12, 12] }],
    ["path", { d: "M3 7.5h4" }, { r: "slide", d: 0.03, y: 1, a: 2, o: [12, 12] }],
    ["path", { d: "M3 12h18" }, { r: "slide", d: 0.06, y: 1, a: 2, o: [12, 12] }],
    ["path", { d: "M3 16.5h4" }, { r: "slide", d: 0.09, y: 1, a: 2, o: [12, 12] }],
    ["path", { d: "M17 3v18" }, { r: "slide", d: 0.12, y: 1, a: 2, o: [12, 12] }],
    ["path", { d: "M17 7.5h4" }, { r: "slide", d: 0.15, y: 1, a: 2, o: [12, 12] }],
    ["path", { d: "M17 16.5h4" }, { r: "slide", d: 0.18, y: 1, a: 2, o: [12, 12] }],
  ],
});
