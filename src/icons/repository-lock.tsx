import { createIcon } from "../runtime/createIcon.js";

export const RepositoryLock = createIcon("RepositoryLock", "repository-lock", {
  nodes: [
    ["path", { d: "M4 19V5a2 2 0 0 1 2-2h14v18H6a2 2 0 0 1 0-4h14" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["rect", { width: "6", height: "5", x: "9", y: "9", rx: "1" }, { r: "shake", d: 0.1, a: 0.8, o: [12, 11.5] }],
    ["path", { d: "M10.5 9V7.5a1.5 1.5 0 0 1 3 0V9" }, { r: "lift", o: [12, 7] }],
  ],
});
