import { createIcon } from "../runtime/createIcon.js";

export const FileMpeg = createIcon("FileMpeg", "file-mpeg", {
  nodes: [
    ["path", { d: "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "fold", o: [17, 5] }],
    ["path", { d: "M1.875 21V15l2 3L5.875 15v6" }, { r: "draw", d: 0.1, o: [3.875, 18] }],
    ["path", { d: "M8.125 21V15h1.5a1.5 1.5 0 0 1 0 3H8.125" }, { r: "draw", d: 0.17, o: [9.625, 18] }],
    ["path", { d: "M16.375 15H13.375v6h3" }, { r: "draw", d: 0.24, o: [14.875, 18] }],
    ["path", { d: "M13.375 18h2" }, { r: "draw", d: 0.24, o: [14.875, 18] }],
    ["path", { d: "M22.125 15H20.125a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5H22.125V18H21.125" }, { r: "draw", d: 0.31, o: [20.375, 18] }],
  ],
});
