import { createIcon } from "../runtime/createIcon.js";

export const FileX = createIcon("FileX", "file-x", {
  nodes: [
    ["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "m14.5 12.5-5 5" }, { r: "draw", d: 0.1, o: [12, 15] }],
    ["path", { d: "m9.5 12.5 5 5" }, { r: "draw", d: 0.2, o: [12, 15] }],
  ],
});
