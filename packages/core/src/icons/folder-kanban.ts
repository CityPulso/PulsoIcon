import { icon } from "../icon.js";

export const FolderKanban = icon("FolderKanban", "folder-kanban", {
  nodes: [
    [
      "path",
      { d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" },
      { r: "press", a: 0.04, o: [12, 20] },
    ],
    ["path", { d: "M8 10v4" }, { r: "grow", d: 0.05, o: [8, 10] }],
    ["path", { d: "M12 10v2" }, { r: "grow", d: 0.1, o: [12, 10] }],
    ["path", { d: "M16 10v6" }, { r: "grow", d: 0.15, o: [16, 10] }],
  ],
});
