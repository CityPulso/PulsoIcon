import { createIcon } from "../runtime/createIcon.js";

export const FilePng = createIcon("FilePng", "file-png", {
  text: true,
  nodes: [
    ["path", { d: "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "fold", o: [17, 5] }],
    ["path", { d: "M3.25 21V15h2a1.5 1.5 0 0 1 0 3H3.25" }, { r: "draw", d: 0.1, o: [5, 18] }],
    ["path", { d: "M9.75 21V15l4 6V15" }, { r: "draw", d: 0.17, o: [11.75, 18] }],
    ["path", { d: "M20.75 15H18.25a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5H20.75V18H19.25" }, { r: "draw", d: 0.24, o: [18.75, 18] }],
  ],
});
