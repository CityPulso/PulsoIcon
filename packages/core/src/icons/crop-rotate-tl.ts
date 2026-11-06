import { icon } from "../icon.js";

export const CropRotateTl = icon("CropRotateTl", "crop-rotate-tl", {
  nodes: [
    ["path", { d: "M11 8V17A2 2 0 0 0 13 19H21" }, { r: "press", a: 0.08, o: [15, 15] }],
    ["path", { d: "M19 21V13A2 2 0 0 0 17 11H8" }, { r: "press", a: 0.08, o: [15, 15] }],
    ["path", { d: "M3 11A7 7 0 0 1 10 4" }, { r: "turn", a: 25, o: [15, 15] }],
    ["path", { d: "M8 2L10 4L8 6" }, { r: "turn", a: 25, o: [15, 15] }],
  ],
});
