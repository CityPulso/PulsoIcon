import { icon } from "../icon.js";

export const FolderRoot = icon("FolderRoot", "folder-root", {
  nodes: [
    [
      "path",
      { d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" },
      { r: "press", a: 0.04, o: [12, 20] },
    ],
    ["circle", { cx: "12", cy: "13", r: "2" }, { r: "pop", d: 0.05, o: [12, 13] }],
    ["path", { d: "M12 15v5" }, { r: "grow", d: 0.15, o: [12, 15] }],
  ],
});
