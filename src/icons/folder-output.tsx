import { createIcon } from "../runtime/createIcon.js";

export const FolderOutput = createIcon("FolderOutput", "folder-output", {
  nodes: [
    [
      "path",
      { d: "M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5" },
      { r: "press", a: 0.04, o: [12, 20] },
    ],
    ["path", { d: "M2 13h10" }, { r: "bounce", d: 0.05, x: -1, a: 2, o: [7, 13] }],
    ["path", { d: "m5 10-3 3 3 3" }, { r: "bounce", d: 0.05, x: -1, a: 2, o: [7, 13] }],
  ],
});
