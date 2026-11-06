import { icon } from "../icon.js";

export const SquareRoundCorner = icon("SquareRoundCorner", "square-round-corner", {
  nodes: [
    ["path", { d: "M21 11a8 8 0 0 0-8-8" }, { r: "redraw", d: 0.05, o: [17, 7] }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
