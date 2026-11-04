import { createIcon } from "../runtime/createIcon.js";

export const FileCodeCorner = createIcon("FileCodeCorner", "file-code-corner", {
  nodes: [
    ["path", { d: "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "m5 16-3 3 3 3" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [3.5, 19] }],
    ["path", { d: "m9 22 3-3-3-3" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [10.5, 19] }],
  ],
});
