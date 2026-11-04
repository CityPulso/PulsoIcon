import { createIcon } from "../runtime/createIcon.js";

export const FileTransfer = createIcon("FileTransfer", "file-transfer", {
  nodes: [
    ["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M8 12h8" }, { r: "slide", d: 0.05, x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "m14 10 2 2-2 2" }, { r: "slide", d: 0.05, x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M16 17H8" }, { r: "slide", d: 0.2, x: -1, a: 1.5, o: [12, 17] }],
    ["path", { d: "m10 15-2 2 2 2" }, { r: "slide", d: 0.2, x: -1, a: 1.5, o: [12, 17] }],
  ],
});
