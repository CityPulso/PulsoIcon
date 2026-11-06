import { icon } from "../icon.js";

export const Captions = icon("Captions", "captions", {
  nodes: [
    ["rect", { width: "18", height: "14", x: "3", y: "5", rx: "2", ry: "2" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M7 15h4M15 15h2M7 11h2M13 11h4" }, { r: "redraw", d: 0.1, o: [12, 13] }],
  ],
});
