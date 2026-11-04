import { createIcon } from "../runtime/createIcon.js";

export const FileText = createIcon("FileText", "file-text", {
  nodes: [
    ["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "fold", o: [17, 5] }],
    ["path", { d: "M10 9H8" }, { r: "growX", d: 0.1, o: [8, 13] }],
    ["path", { d: "M16 13H8" }, { r: "growX", d: 0.16, o: [8, 13] }],
    ["path", { d: "M16 17H8" }, { r: "growX", d: 0.22, o: [8, 13] }],
  ],
});
