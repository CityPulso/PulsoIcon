import { createIcon } from "../runtime/createIcon.js";

export const GitPullRequestClosed = createIcon("GitPullRequestClosed", "git-pull-request-closed", {
  nodes: [
    ["path", { d: "m15.5 3.5 5 5" }, { r: "draw", d: 0.1, o: [18, 6] }],
    ["path", { d: "m15.5 8.5 5-5" }, { r: "draw", d: 0.18, o: [18, 6] }],
    ["path", { d: "M18 11.62V15" }, { r: "grow", d: 0.2, o: [18, 15] }],
    ["path", { d: "M6 9v12" }, { r: "grow", d: 0.05, o: [6, 9] }],
    ["circle", { cx: "18", cy: "18", r: "3" }, { r: "pop", d: 0.25, o: [18, 18] }],
    ["circle", { cx: "6", cy: "6", r: "3" }, { r: "pop", o: [6, 6] }],
  ],
});
