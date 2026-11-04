import { createIcon } from "../runtime/createIcon.js";

export const FileSymlink = createIcon("FileSymlink", "file-symlink", {
  nodes: [
    [
      "path",
      { d: "M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" },
      { r: "press", a: 0.04, o: [12, 22] },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "m10 18 3-3-3-3" }, { r: "draw", d: 0.1, o: [11.5, 15] }],
  ],
});
