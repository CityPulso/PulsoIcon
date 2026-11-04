import { createIcon } from "../runtime/createIcon.js";

export const ArchiveX = createIcon("ArchiveX", "archive-x", {
  nodes: [
    ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }, { r: "lift", a: -6, o: [2, 8] }],
    ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }],
    ["path", { d: "m9.5 17 5-5" }, { r: "draw", d: 0.1, o: [12, 14.5] }],
    ["path", { d: "m9.5 12 5 5" }, { r: "draw", d: 0.2, o: [12, 14.5] }],
  ],
});
