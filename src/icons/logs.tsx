import { createIcon } from "../runtime/createIcon.js";

export const Logs = createIcon("Logs", "logs", {
  nodes: [
    ["path", { d: "M3 5h1" }, { r: "pop", o: [3.5, 5] }],
    ["path", { d: "M3 12h1" }, { r: "pop", d: 0.05, o: [3.5, 12] }],
    ["path", { d: "M3 19h1" }, { r: "pop", d: 0.1, o: [3.5, 19] }],
    ["path", { d: "M8 5h1" }, { r: "pop", d: 0.08, o: [8.5, 5] }],
    ["path", { d: "M8 12h1" }, { r: "pop", d: 0.13, o: [8.5, 12] }],
    ["path", { d: "M8 19h1" }, { r: "pop", d: 0.18, o: [8.5, 19] }],
    ["path", { d: "M13 5h8" }, { r: "growX", d: 0.12, o: [13, 12] }],
    ["path", { d: "M13 12h8" }, { r: "growX", d: 0.17, o: [13, 12] }],
    ["path", { d: "M13 19h8" }, { r: "growX", d: 0.22, o: [13, 12] }],
  ],
});
