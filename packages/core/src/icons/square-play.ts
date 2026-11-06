import { icon } from "../icon.js";

export const SquarePlay = icon("SquarePlay", "square-play", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" }, { r: "pop", d: 0.05, a: 0.3, o: [12, 12] }],
  ],
});
