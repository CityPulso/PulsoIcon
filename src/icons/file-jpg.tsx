import { createIcon } from "../runtime/createIcon.js";

export const FileJpg = createIcon("FileJpg", "file-jpg", {
  nodes: [
    ["path", { d: "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "fold", o: [17, 5] }],
    ["path", { d: "M6.75 15v4.5a1.5 1.5 0 0 1-3 0" }, { r: "draw", d: 0.1, o: [5.25, 18] }],
    ["path", { d: "M9.75 21V15h2a1.5 1.5 0 0 1 0 3H9.75" }, { r: "draw", d: 0.17, o: [11.5, 18] }],
    ["path", { d: "M20.25 15H17.75a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5H20.25V18H18.75" }, { r: "draw", d: 0.24, o: [18.25, 18] }],
  ],
});
