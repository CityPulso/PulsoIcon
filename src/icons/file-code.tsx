import { createIcon } from "../runtime/createIcon.js";

export const FileCode = createIcon("FileCode", "file-code", {
  nodes: [
    ["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M10 12.5 8 15l2 2.5" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [9, 15] }],
    ["path", { d: "m14 12.5 2 2.5-2 2.5" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [15, 15] }],
  ],
});
