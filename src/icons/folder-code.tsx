import { createIcon } from "../runtime/createIcon.js";

export const FolderCode = createIcon("FolderCode", "folder-code", {
  nodes: [
    ["path", { d: "M10 10.5 8 13l2 2.5" }, { r: "slide", d: 0.05, x: -1, a: 1.5, o: [9, 13] }],
    ["path", { d: "m14 10.5 2 2.5-2 2.5" }, { r: "slide", d: 0.05, x: 1, a: 1.5, o: [15, 13] }],
    ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" }, { r: "press", a: 0.04, o: [12, 20] }],
  ],
});
