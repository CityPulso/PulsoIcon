import { createIcon } from "../runtime/createIcon.js";

export const GitBranchMinus = createIcon("GitBranchMinus", "git-branch-minus", {
  nodes: [
    ["path", { d: "M15 6a9 9 0 0 0-9 9V3" }, { r: "draw", d: 0.1, o: [10.5, 9] }],
    ["path", { d: "M21 18h-6" }, { r: "growX", d: 0.3, o: [18, 18] }],
    ["circle", { cx: "18", cy: "6", r: "3" }, { r: "pop", o: [18, 6] }],
    ["circle", { cx: "6", cy: "18", r: "3" }, { r: "pop", d: 0.1, o: [6, 18] }],
  ],
});
