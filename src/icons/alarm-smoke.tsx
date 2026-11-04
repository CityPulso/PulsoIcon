import { createIcon } from "../runtime/createIcon.js";

export const AlarmSmoke = createIcon("AlarmSmoke", "alarm-smoke", {
  nodes: [
    ["path", { d: "M11 21c0-2.5 2-2.5 2-5" }, { r: "float", d: 0.05, a: 2, o: [12, 18.5] }],
    ["path", { d: "M16 21c0-2.5 2-2.5 2-5" }, { r: "float", d: 0.19, a: 2, o: [17, 18.5] }],
    ["path", { d: "m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8" }, { r: "press", a: 0.04, o: [12, 7.5] }],
    ["path", { d: "M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z" }, { r: "press", a: 0.04, o: [12, 7.5] }],
    ["path", { d: "M6 21c0-2.5 2-2.5 2-5" }, { r: "float", d: 0.12, a: 2, o: [7, 18.5] }],
  ],
});
