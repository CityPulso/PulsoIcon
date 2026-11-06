import { icon } from "../icon.js";

export const OrthogonalView = icon("OrthogonalView", "orthogonal-view", {
  nodes: [
    ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }, { r: "pop", a: 0.15, o: [6.5, 6.5] }],
    ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }, { r: "pop", d: 0.1, a: 0.15, o: [17.5, 6.5] }],
    ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }, { r: "pop", d: 0.2, a: 0.15, o: [6.5, 17.5] }],
    [
      "path",
      { d: "M17.5 13.5 20.964 15.5 20.964 19.5 17.5 21.5 14.036 19.5 14.036 15.5ZM14.036 15.5 17.5 17.5 20.964 15.5M17.5 17.5v4" },
      { r: "spin", d: 0.3, a: 60, o: [17.5, 17.5] },
    ],
  ],
});
