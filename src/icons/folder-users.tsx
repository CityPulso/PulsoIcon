import { createIcon } from "../runtime/createIcon.js";

export const FolderUsers = createIcon("FolderUsers", "folder-users", {
  nodes: [
    ["path", { d: "M5.254 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2V9.255" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["circle", { cx: "13", cy: "15", r: "3" }, { r: "float", d: 0.1, a: 1.5, o: [13, 15] }],
    ["path", { d: "M17 22a4 4 0 0 0-8 0" }, { r: "rise", d: 0.15, a: 1, o: [13, 20] }],
    ["path", { d: "M22 22A4 4 0 0 0 20.24 18.686 1 1 0 0 1 20.1 17.143 3 3 0 0 0 19.5 12.402" }, { r: "fade", d: 0.2, o: [20.75, 17.201] }],
  ],
});
