import { createIcon } from "../runtime/createIcon.js";

export const FileInput = createIcon("FileInput", "file-input", {
  nodes: [
    ["path", { d: "M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M2 15h10" }, { r: "bounce", d: 0.1, x: 1, a: 2, o: [7, 15] }],
    ["path", { d: "m9 18 3-3-3-3" }, { r: "bounce", d: 0.1, x: 1, a: 2, o: [7, 15] }],
  ],
});
