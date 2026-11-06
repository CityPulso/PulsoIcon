import { icon } from "../icon.js";

export const Expand = icon("Expand", "expand", {
  nodes: [
    ["path", { d: "m15 15 6 6" }, { r: "slide", x: 1, y: 1, a: 1.5, o: [18, 18] }],
    ["path", { d: "m15 9 6-6" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [18, 6] }],
    ["path", { d: "M21 16v5h-5" }, { r: "slide", x: 1, y: 1, a: 1.5, o: [18, 18] }],
    ["path", { d: "M21 8V3h-5" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [18, 6] }],
    ["path", { d: "M3 16v5h5" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [6, 18] }],
    ["path", { d: "m3 21 6-6" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [6, 18] }],
    ["path", { d: "M3 8V3h5" }, { r: "slide", x: -1, y: -1, a: 1.5, o: [6, 6] }],
    ["path", { d: "M9 9 3 3" }, { r: "slide", x: -1, y: -1, a: 1.5, o: [6, 6] }],
  ],
});
