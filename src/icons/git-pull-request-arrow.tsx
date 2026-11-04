import { createIcon } from "../runtime/createIcon.js";

export const GitPullRequestArrow = createIcon("GitPullRequestArrow", "git-pull-request-arrow", {
  nodes: [
    ["circle", { cx: "5", cy: "6", r: "3" }, { r: "pop", o: [5, 6] }],
    ["path", { d: "M5 9v12" }, { r: "grow", d: 0.1, o: [5, 9] }],
    ["circle", { cx: "19", cy: "18", r: "3" }, { r: "pop", d: 0.1, o: [19, 18] }],
    ["path", { d: "m15 9-3-3 3-3" }, { r: "draw", d: 0.2, o: [15.5, 9] }],
    ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7" }, { r: "drawBack", d: 0.2, o: [15.5, 9] }],
  ],
});
