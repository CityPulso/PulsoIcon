import { createIcon } from "../runtime/createIcon.js";

export const FileDiff = createIcon("FileDiff", "file-diff", {
  nodes: [
    ["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M9 10h6" }, { r: "spin", d: 0.1, a: 90, o: [12, 10] }],
    ["path", { d: "M12 13V7" }, { r: "spin", d: 0.1, a: 90, o: [12, 10] }],
    ["path", { d: "M9 17h6" }, { r: "growX", d: 0.2, o: [12, 17] }],
  ],
});
