import { icon } from "../icon.js";

export const CropRotateTr = icon("CropRotateTr", "crop-rotate-tr", {
  nodes: [
    ["path", { d: "M13 8V17A2 2 0 0 1 11 19H3" }, { r: "press", a: 0.08, o: [9, 15] }],
    ["path", { d: "M5 21V13A2 2 0 0 1 7 11H16" }, { r: "press", a: 0.08, o: [9, 15] }],
    ["path", { d: "M21 11A7 7 0 0 0 14 4" }, { r: "turn", a: -25, o: [9, 15] }],
    ["path", { d: "M16 2L14 4L16 6" }, { r: "turn", a: -25, o: [9, 15] }],
  ],
});
