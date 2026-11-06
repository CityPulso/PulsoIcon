import { icon } from "../icon.js";

export const FolderDot = icon("FolderDot", "folder-dot", {
  nodes: [
    [
      "path",
      { d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" },
      { r: "press", a: 0.04, o: [12, 20] },
    ],
    ["circle", { cx: "12", cy: "13", r: "1" }, { r: "pop", d: 0.1, a: 0.6, o: [12, 13] }],
  ],
});
