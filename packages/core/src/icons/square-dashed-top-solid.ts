import { icon } from "../icon.js";

export const SquareDashedTopSolid = icon("SquareDashedTopSolid", "square-dashed-top-solid", {
  nodes: [
    ["path", { d: "M14 21h1" }, { r: "fade", d: 0.05, o: [12, 15] }],
    ["path", { d: "M21 14v1" }, { r: "fade", d: 0.08, o: [12, 15] }],
    ["path", { d: "M21 19a2 2 0 0 1-2 2" }, { r: "fade", d: 0.11, o: [12, 15] }],
    ["path", { d: "M21 9v1" }, { r: "fade", d: 0.14, o: [12, 15] }],
    ["path", { d: "M3 14v1" }, { r: "fade", d: 0.17, o: [12, 15] }],
    ["path", { d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" }, { r: "slide", y: -1, a: 1.5, o: [12, 4] }],
    ["path", { d: "M3 9v1" }, { r: "fade", d: 0.2, o: [12, 15] }],
    ["path", { d: "M5 21a2 2 0 0 1-2-2" }, { r: "fade", d: 0.23, o: [12, 15] }],
    ["path", { d: "M9 21h1" }, { r: "fade", d: 0.26, o: [12, 15] }],
  ],
});
