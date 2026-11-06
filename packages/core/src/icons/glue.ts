import { icon } from "../icon.js";

export const Glue = icon("Glue", "glue", {
  nodes: [
    ["path", { d: "M6 12a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" }, { r: "jelly", a: 0.12, o: [12, 22] }],
    ["path", { d: "M9 10V7.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V10" }, { r: "float", d: 0.1, a: 1, o: [12, 8] }],
    ["path", { d: "M11 6.5 12 2l1 4.5" }, { r: "float", d: 0.1, a: 1, o: [12, 8] }],
    ["path", { d: "M9 16h6" }, { r: "jelly", a: 0.12, o: [12, 22] }],
  ],
});
