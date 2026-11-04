import { createIcon } from "../runtime/createIcon.js";

export const GitMerge = createIcon("GitMerge", "git-merge", {
  nodes: [
    ["circle", { cx: "18", cy: "18", r: "3" }, { r: "pop", d: 0.25, o: [18, 18] }],
    ["circle", { cx: "6", cy: "6", r: "3" }, { r: "pop", o: [6, 6] }],
    ["path", { d: "M6 21V9a9 9 0 0 0 9 9" }, { r: "draw", d: 0.08, o: [10.5, 15] }],
  ],
});
