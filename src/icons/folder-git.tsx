import { createIcon } from "../runtime/createIcon.js";

export const FolderGit = createIcon("FolderGit", "folder-git", {
  nodes: [
    ["circle", { cx: "12", cy: "13", r: "2" }, { r: "spin", d: 0.05, a: 180, o: [12, 13] }],
    ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "M14 13h3" }, { r: "growX", d: 0.1, o: [14, 13] }],
    ["path", { d: "M7 13h3" }, { r: "growX", d: 0.1, o: [10, 13] }],
  ],
});
