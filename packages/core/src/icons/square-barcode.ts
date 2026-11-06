import { icon } from "../icon.js";

export const SquareBarcode = icon("SquareBarcode", "square-barcode", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 7v10" }, { r: "grow", d: 0.05, o: [7, 12] }],
    ["path", { d: "M10 7v10" }, { r: "grow", d: 0.1, o: [10, 12] }],
    ["path", { d: "M14 7v10" }, { r: "grow", d: 0.15, o: [14, 12] }],
    ["path", { d: "M17 7v10" }, { r: "grow", d: 0.2, o: [17, 12] }],
  ],
});
