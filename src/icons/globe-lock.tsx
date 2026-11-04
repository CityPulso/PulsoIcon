import { createIcon } from "../runtime/createIcon.js";

export const GlobeLock = createIcon("GlobeLock", "globe-lock", {
  nodes: [
    ["path", { d: "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" }, { r: "spin", a: 30, o: [12, 12] }],
    ["path", { d: "M2 12h8.5" }, { r: "spin", a: 30, o: [12, 12] }],
    ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2" }, { r: "lift", d: 0.1, o: [18, 4] }],
    ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1" }, { r: "shake", d: 0.2, a: 0.8, o: [18, 8.5] }],
  ],
});
