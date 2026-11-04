import { createIcon } from "../runtime/createIcon.js";

export const GitBranchPlus = createIcon("GitBranchPlus", "git-branch-plus", {
  nodes: [
    ["path", { d: "M6 3v12" }, { r: "draw", o: [10.5, 9] }],
    ["path", { d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }, { r: "pop", d: 0.15, o: [18, 6] }],
    ["path", { d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }, { r: "pop", d: 0.23, o: [6, 18] }],
    ["path", { d: "M15 6a9 9 0 0 0-9 9" }, { r: "draw", o: [10.5, 9] }],
    ["path", { d: "M18 15v6" }, { r: "spin", d: 0.3, a: 90, o: [18, 18] }],
    ["path", { d: "M21 18h-6" }, { r: "spin", d: 0.3, a: 90, o: [18, 18] }],
  ],
});
