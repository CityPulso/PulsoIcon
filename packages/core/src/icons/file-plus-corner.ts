import { icon } from "../icon.js";

export const FilePlusCorner = icon("FilePlusCorner", "file-plus-corner", {
  nodes: [
    ["path", { d: "M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 19h6" }, { r: "spin", d: 0.1, a: 90, o: [17, 19] }],
    ["path", { d: "M17 16v6" }, { r: "spin", d: 0.1, a: 90, o: [17, 19] }],
  ],
});
