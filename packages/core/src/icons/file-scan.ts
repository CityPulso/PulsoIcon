import { icon } from "../icon.js";

export const FileScan = icon("FileScan", "file-scan", {
  nodes: [
    ["path", { d: "M20 10V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.35" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M16 14a2 2 0 0 0-2 2" }, { r: "slide", d: 0.1, x: -1, y: -1, a: 1, o: [15, 15] }],
    ["path", { d: "M16 22a2 2 0 0 1-2-2" }, { r: "slide", d: 0.1, x: -1, y: 1, a: 1, o: [15, 21] }],
    ["path", { d: "M20 14a2 2 0 0 1 2 2" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1, o: [21, 15] }],
    ["path", { d: "M20 22a2 2 0 0 0 2-2" }, { r: "slide", d: 0.1, x: 1, y: 1, a: 1, o: [21, 21] }],
  ],
});
