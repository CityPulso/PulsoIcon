import { createIcon } from "../runtime/createIcon.js";

export const GitMergeConflict = createIcon("GitMergeConflict", "git-merge-conflict", {
  nodes: [
    ["path", { d: "M12 6h4a2 2 0 0 1 2 2v7" }, { r: "draw", d: 0.1, o: [12, 13.5] }],
    ["path", { d: "M6 12v9" }, { r: "draw", d: 0.1, o: [12, 13.5] }],
    ["path", { d: "m8.5 3.5-5 5" }, { r: "draw", d: 0.3, o: [6, 6] }],
    ["path", { d: "m8.5 8.5-5-5" }, { r: "draw", d: 0.38, o: [6, 6] }],
    ["circle", { cx: "18", cy: "18", r: "3" }, { r: "pop", o: [18, 18] }],
  ],
});
