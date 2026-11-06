import { icon } from "../icon.js";

export const Coffee = icon("Coffee", "coffee", {
  nodes: [
    ["path", { d: "M10 2v2" }, { r: "float", d: 0.12, a: 2, o: [10, 3] }],
    ["path", { d: "M14 2v2" }, { r: "float", d: 0.19, a: 2, o: [14, 3] }],
    ["path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M6 2v2" }, { r: "float", d: 0.05, a: 2, o: [6, 3] }],
  ],
});
