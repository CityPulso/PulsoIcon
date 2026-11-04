import { createIcon } from "../runtime/createIcon.js";

export const FileSpreadsheet = createIcon("FileSpreadsheet", "file-spreadsheet", {
  nodes: [
    ["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M8 13h2" }, { r: "growX", d: 0.1, o: [9, 13] }],
    ["path", { d: "M14 13h2" }, { r: "growX", d: 0.16, o: [15, 13] }],
    ["path", { d: "M8 17h2" }, { r: "growX", d: 0.22, o: [9, 17] }],
    ["path", { d: "M14 17h2" }, { r: "growX", d: 0.28, o: [15, 17] }],
  ],
});
