import { createIcon } from "../runtime/createIcon.js";

export const GitFork = createIcon("GitFork", "git-fork", {
  nodes: [
    ["circle", { cx: "12", cy: "18", r: "3" }, { r: "pop", d: 0.3, o: [12, 18] }],
    ["circle", { cx: "6", cy: "6", r: "3" }, { r: "pop", o: [6, 6] }],
    ["circle", { cx: "18", cy: "6", r: "3" }, { r: "pop", d: 0.06, o: [18, 6] }],
    ["path", { d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" }, { r: "draw", d: 0.12, o: [12, 10.5] }],
    ["path", { d: "M12 12v3" }, { r: "grow", d: 0.2, o: [12, 12] }],
  ],
});
