import { createIcon } from "../runtime/createIcon.js";

export const FolderTransfer = createIcon("FolderTransfer", "folder-transfer", {
  nodes: [
    ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "M8 11h8" }, { r: "slide", d: 0.05, x: 1, a: 1.5, o: [12, 11] }],
    ["path", { d: "m14 9 2 2-2 2" }, { r: "slide", d: 0.05, x: 1, a: 1.5, o: [12, 11] }],
    ["path", { d: "M16 16H8" }, { r: "slide", d: 0.2, x: -1, a: 1.5, o: [12, 16] }],
    ["path", { d: "m10 14-2 2 2 2" }, { r: "slide", d: 0.2, x: -1, a: 1.5, o: [12, 16] }],
  ],
});
