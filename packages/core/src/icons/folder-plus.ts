import { icon } from "../icon.js";

export const FolderPlus = icon("FolderPlus", "folder-plus", {
  nodes: [
    ["path", { d: "M12 10v6" }, { r: "spin", d: 0.1, a: 90, o: [12, 13] }],
    ["path", { d: "M9 13h6" }, { r: "spin", d: 0.1, a: 90, o: [12, 13] }],
    ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }, { r: "press", a: 0.04, o: [12, 20] }],
  ],
});
