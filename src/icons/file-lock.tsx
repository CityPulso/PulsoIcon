import { createIcon } from "../runtime/createIcon.js";

export const FileLock = createIcon("FileLock", "file-lock", {
  nodes: [
    ["path", { d: "M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M9 17v-2a2 2 0 0 0-4 0v2" }, { r: "lift", d: 0.1, o: [7, 15] }],
    ["rect", { width: "8", height: "5", x: "3", y: "17", rx: "1" }, { r: "shake", d: 0.2, a: 0.8, o: [7, 19.5] }],
  ],
});
