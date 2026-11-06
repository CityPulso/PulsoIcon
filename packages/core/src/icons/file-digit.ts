import { icon } from "../icon.js";

export const FileDigit = icon("FileDigit", "file-digit", {
  nodes: [
    ["path", { d: "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M10 16h2v6" }, { r: "flip", d: 0.2, o: [12, 19] }],
    ["path", { d: "M10 22h4" }, { r: "flip", d: 0.2, o: [12, 19] }],
    ["rect", { x: "2", y: "16", width: "4", height: "6", rx: "2" }, { r: "flip", d: 0.1, o: [4, 19] }],
  ],
});
