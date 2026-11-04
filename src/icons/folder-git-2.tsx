import { createIcon } from "../runtime/createIcon.js";

export const FolderGit2 = createIcon("FolderGit2", "folder-git-2", {
  nodes: [
    ["path", { d: "M18 19a5 5 0 0 1-5-5v8" }, { r: "draw", d: 0.12, o: [15.5, 18] }],
    ["path", { d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["circle", { cx: "13", cy: "12", r: "2" }, { r: "pop", d: 0.05, o: [13, 12] }],
    ["circle", { cx: "20", cy: "19", r: "2" }, { r: "pop", d: 0.25, o: [20, 19] }],
  ],
});
