import { icon } from "../icon.js";

export const FileList = icon("FileList", "file-list", {
  nodes: [
    ["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M8 12h.01" }, { r: "pop", d: 0.1, o: [8, 12] }],
    ["path", { d: "M11 12h5" }, { r: "growX", d: 0.15, o: [11, 12] }],
    ["path", { d: "M8 16h.01" }, { r: "pop", d: 0.18, o: [8, 16] }],
    ["path", { d: "M11 16h5" }, { r: "growX", d: 0.23, o: [11, 16] }],
  ],
});
