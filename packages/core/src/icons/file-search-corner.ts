import { icon } from "../icon.js";

export const FileSearchCorner = icon("FileSearchCorner", "file-search-corner", {
  nodes: [
    ["path", { d: "M11.1 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.589 3.588A2.4 2.4 0 0 1 20 8v3.25" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "m21 22-2.88-2.88" }, { r: "swing", d: 0.1, a: 15, o: [16, 17] }],
    ["circle", { cx: "16", cy: "17", r: "3" }, { r: "swing", d: 0.1, a: 15, o: [16, 17] }],
  ],
});
