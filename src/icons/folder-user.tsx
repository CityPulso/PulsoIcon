import { createIcon } from "../runtime/createIcon.js";

export const FolderUser = createIcon("FolderUser", "folder-user", {
  nodes: [
    ["path", { d: "M10.254 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2V9.255" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "M22 22a4 4 0 0 0-8 0" }, { r: "rise", d: 0.15, a: 1, o: [18, 20] }],
    ["circle", { cx: "18", cy: "15", r: "3" }, { r: "float", d: 0.1, a: 1.5, o: [18, 15] }],
  ],
});
