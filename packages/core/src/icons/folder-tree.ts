import { icon } from "../icon.js";

export const FolderTree = icon("FolderTree", "folder-tree", {
  nodes: [
    [
      "path",
      { d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" },
      { r: "slide", x: 1, a: 1, o: [16.5, 6.5] },
    ],
    [
      "path",
      { d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" },
      { r: "slide", d: 0.08, x: 1, a: 1, o: [16.5, 17.5] },
    ],
    ["path", { d: "M3 5a2 2 0 0 0 2 2h3" }, { r: "draw", d: 0.05, o: [5.5, 10.5] }],
    ["path", { d: "M3 3v13a2 2 0 0 0 2 2h3" }, { r: "draw", d: 0.05, o: [5.5, 10.5] }],
  ],
});
