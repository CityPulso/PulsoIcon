import { createIcon } from "../runtime/createIcon.js";

export const FolderSymlink = createIcon("FolderSymlink", "folder-symlink", {
  nodes: [
    [
      "path",
      { d: "M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" },
      { r: "press", a: 0.04, o: [12, 20] },
    ],
    ["path", { d: "m8 16 3-3-3-3" }, { r: "draw", d: 0.1, o: [9.5, 13] }],
  ],
});
