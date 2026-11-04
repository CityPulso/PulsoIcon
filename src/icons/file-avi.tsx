import { createIcon } from "../runtime/createIcon.js";

export const FileAvi = createIcon("FileAvi", "file-avi", {
  nodes: [
    ["path", { d: "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "fold", o: [17, 5] }],
    ["path", { d: "M5 21l2-6 2 6" }, { r: "draw", d: 0.1, o: [7, 18] }],
    ["path", { d: "M5.75 19h2.5" }, { r: "draw", d: 0.1, o: [7, 18] }],
    ["path", { d: "M12 15l2 6 2-6" }, { r: "draw", d: 0.17, o: [14, 18] }],
    ["path", { d: "M19 15v6" }, { r: "draw", d: 0.24, o: [19, 18] }],
  ],
});
