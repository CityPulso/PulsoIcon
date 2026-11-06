import { icon } from "../icon.js";

export const Binary = icon("Binary", "binary", {
  text: true,
  nodes: [
    ["rect", { x: "14", y: "14", width: "4", height: "6", rx: "2" }, { r: "flip", o: [16, 17] }],
    ["rect", { x: "6", y: "4", width: "4", height: "6", rx: "2" }, { r: "flip", d: 0.12, o: [8, 7] }],
    ["path", { d: "M6 20h4" }, { r: "flip", d: 0.12, o: [8, 20] }],
    ["path", { d: "M14 10h4" }, { r: "flip", o: [16, 10] }],
    ["path", { d: "M6 14h2v6" }, { r: "flip", d: 0.12, o: [7, 17] }],
    ["path", { d: "M14 4h2v6" }, { r: "flip", o: [15, 7] }],
  ],
});
