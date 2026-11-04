import { createIcon } from "../runtime/createIcon.js";

export const FileExclamationPoint = createIcon("FileExclamationPoint", "file-exclamation-point", {
  nodes: [
    ["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "M12 9v4" }, { r: "grow", d: 0.1, o: [12, 9] }],
    ["path", { d: "M12 17h.01" }, { r: "pop", d: 0.25, o: [12.005, 17] }],
  ],
});
