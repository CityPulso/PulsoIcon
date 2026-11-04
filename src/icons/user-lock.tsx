import { createIcon } from "../runtime/createIcon.js";

export const UserLock = createIcon("UserLock", "user-lock", {
  nodes: [
    ["path", { d: "M19 16v-2a2 2 0 0 0-4 0v2" }, { r: "lift", d: 0.05, o: [17, 14] }],
    ["path", { d: "M9.5 15H7a4 4 0 0 0-4 4v2" }, { r: "float", a: 1.5, o: [8.5, 12] }],
    ["circle", { cx: "10", cy: "7", r: "4" }, { r: "float", a: 1.5, o: [8.5, 12] }],
    ["rect", { x: "13", y: "16", width: "8", height: "5", rx: ".899" }, { r: "shake", d: 0.15, a: 0.8, o: [17, 18.5] }],
  ],
});
