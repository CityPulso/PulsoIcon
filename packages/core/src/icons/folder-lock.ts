import { icon } from "../icon.js";

export const FolderLock = icon("FolderLock", "folder-lock", {
  nodes: [
    ["rect", { width: "8", height: "5", x: "14", y: "17", rx: "1" }, { r: "shake", d: 0.15, a: 0.8, o: [18, 19.5] }],
    ["path", { d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "M20 17v-2a2 2 0 1 0-4 0v2" }, { r: "lift", d: 0.05, o: [18, 15] }],
  ],
});
