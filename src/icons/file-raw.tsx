import { createIcon } from "../runtime/createIcon.js";

export const FileRaw = createIcon("FileRaw", "file-raw", {
  nodes: [
    ["path", { d: "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "fold", o: [17, 5] }],
    ["path", { d: "M2.75 21V15h2a1.5 1.5 0 0 1 0 3H2.75" }, { r: "draw", d: 0.1, o: [4.5, 18] }],
    ["path", { d: "m4.75 18 1.5 3" }, { r: "draw", d: 0.1, o: [4.5, 18] }],
    ["path", { d: "M9.25 21l2-6 2 6" }, { r: "draw", d: 0.17, o: [11.25, 18] }],
    ["path", { d: "M10 19h2.5" }, { r: "draw", d: 0.17, o: [11.25, 18] }],
    ["path", { d: "M16.25 15l1.25 6 1.25-4 1.25 4 1.25-6" }, { r: "draw", d: 0.24, o: [18.75, 18] }],
  ],
});
