import { icon } from "../icon.js";

export const FolderKey = icon("FolderKey", "folder-key", {
  nodes: [
    ["path", { d: "M13 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.36" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "M19 12v6" }, { r: "turn", d: 0.05, a: 30, o: [19, 20] }],
    ["path", { d: "M19 14h2" }, { r: "turn", d: 0.05, a: 30, o: [19, 20] }],
    ["circle", { cx: "19", cy: "20", r: "2" }, { r: "turn", d: 0.05, a: 30, o: [19, 20] }],
  ],
});
