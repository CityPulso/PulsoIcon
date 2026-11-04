import { createIcon } from "../runtime/createIcon.js";

export const ReplaceAll = createIcon("ReplaceAll", "replace-all", {
  nodes: [
    ["path", { d: "M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" }, { r: "stamp", d: 0.1, o: [14.5, 17.5] }],
    ["path", { d: "M14 4a1 1 0 0 1 1-1" }, { r: "fade", d: 0.15, o: [17.5, 6.5] }],
    ["path", { d: "M15 10a1 1 0 0 1-1-1" }, { r: "fade", d: 0.18, o: [17.5, 6.5] }],
    ["path", { d: "M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" }, { r: "stamp", d: 0.16, o: [19.5, 17.5] }],
    ["path", { d: "M21 4a1 1 0 0 0-1-1" }, { r: "fade", d: 0.21, o: [17.5, 6.5] }],
    ["path", { d: "M21 9a1 1 0 0 1-1 1" }, { r: "fade", d: 0.24, o: [17.5, 6.5] }],
    ["path", { d: "m3 7 3 3 3-3" }, { r: "spin", a: -180, o: [8, 6.5] }],
    ["path", { d: "M6 10V5a2 2 0 0 1 2-2h2" }, { r: "spin", a: -180, o: [8, 6.5] }],
    ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }, { r: "pop", d: 0.05, o: [6.5, 17.5] }],
  ],
});
