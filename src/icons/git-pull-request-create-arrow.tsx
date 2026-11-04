import { createIcon } from "../runtime/createIcon.js";

export const GitPullRequestCreateArrow = createIcon("GitPullRequestCreateArrow", "git-pull-request-create-arrow", {
  nodes: [
    ["circle", { cx: "5", cy: "6", r: "3" }, { r: "pop", o: [5, 6] }],
    ["path", { d: "M5 9v12" }, { r: "grow", d: 0.1, o: [5, 9] }],
    ["path", { d: "m15 9-3-3 3-3" }, { r: "draw", d: 0.15, o: [15.5, 7] }],
    ["path", { d: "M12 6h5a2 2 0 0 1 2 2v3" }, { r: "drawBack", d: 0.15, o: [15.5, 7] }],
    ["path", { d: "M19 15v6" }, { r: "spin", d: 0.3, a: 90, o: [19, 18] }],
    ["path", { d: "M22 18h-6" }, { r: "spin", d: 0.3, a: 90, o: [19, 18] }],
  ],
});
