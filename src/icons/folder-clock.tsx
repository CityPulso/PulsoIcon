import { createIcon } from "../runtime/createIcon.js";

export const FolderClock = createIcon("FolderClock", "folder-clock", {
  nodes: [
    ["path", { d: "M16 14v2.2l1.6 1" }, { r: "spin", d: 0.05, a: 360, o: [16, 16] }],
    ["path", { d: "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["circle", { cx: "16", cy: "16", r: "6" }, { r: "pulse", d: 0.05, a: 0.06, o: [16, 16] }],
  ],
});
