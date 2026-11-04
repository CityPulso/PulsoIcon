import { createIcon } from "../runtime/createIcon.js";

export const FolderSearch = createIcon("FolderSearch", "folder-search", {
  nodes: [
    ["path", { d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "m21 21-1.9-1.9" }, { r: "swing", d: 0.1, a: 15, o: [17, 17] }],
    ["circle", { cx: "17", cy: "17", r: "3" }, { r: "swing", d: 0.1, a: 15, o: [17, 17] }],
  ],
});
