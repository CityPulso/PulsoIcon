import { createIcon } from "../runtime/createIcon.js";

export const FolderPen = createIcon("FolderPen", "folder-pen", {
  nodes: [
    ["path", { d: "M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5" }, { r: "press", a: 0.04, o: [12, 20] }],
    [
      "path",
      { d: "M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" },
      { r: "tilt", d: 0.1, a: 14, o: [3, 19] },
    ],
  ],
});
