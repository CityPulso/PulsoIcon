import { createIcon } from "../runtime/createIcon.js";

export const FolderArchive = createIcon("FolderArchive", "folder-archive", {
  nodes: [
    ["circle", { cx: "15", cy: "19", r: "2" }, { r: "pop", d: 0.15, o: [15, 19] }],
    [
      "path",
      { d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1" },
      { r: "press", a: 0.04, o: [12, 20] },
    ],
    ["path", { d: "M15 11v-1" }, { r: "slide", d: 0.05, y: 1, a: 1, o: [15, 10.5] }],
    ["path", { d: "M15 17v-2" }, { r: "slide", d: 0.1, y: 1, a: 1, o: [15, 16] }],
  ],
});
