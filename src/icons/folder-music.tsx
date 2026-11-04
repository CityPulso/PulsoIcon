import { createIcon } from "../runtime/createIcon.js";

export const FolderMusic = createIcon("FolderMusic", "folder-music", {
  nodes: [
    ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "M12 16V9l3 1.5" }, { r: "bounce", d: 0.1, y: -1, a: 1.5, o: [11, 14] }],
    ["circle", { cx: "10", cy: "16", r: "2" }, { r: "bounce", d: 0.1, y: -1, a: 1.5, o: [11, 14] }],
  ],
});
