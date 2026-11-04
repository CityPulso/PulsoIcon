import { createIcon } from "../runtime/createIcon.js";

export const FolderSearch2 = createIcon("FolderSearch2", "folder-search-2", {
  nodes: [
    ["circle", { cx: "11.5", cy: "12.5", r: "2.5" }, { r: "swing", d: 0.1, a: 15, o: [11.5, 12.5] }],
    ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "M13.3 14.3 15 16" }, { r: "swing", d: 0.1, a: 15, o: [11.5, 12.5] }],
  ],
});
