import { icon } from "../icon.js";

export const Trash = icon("Trash", "trash", {
  nodes: [
    ["path", { d: "M10 11v6" }, { r: "press", d: 0.05, a: 0.05, o: [12, 22] }],
    ["path", { d: "M14 11v6" }, { r: "press", d: 0.05, a: 0.05, o: [12, 22] }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }, { r: "press", d: 0.05, a: 0.05, o: [12, 22] }],
    ["path", { d: "M3 6h18" }, { r: "lift", a: -12, o: [3, 6] }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }, { r: "lift", a: -12, o: [3, 6] }],
  ],
});
