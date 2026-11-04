import { createIcon } from "../runtime/createIcon.js";

export const TextInitial = createIcon("TextInitial", "text-initial", {
  nodes: [
    ["path", { d: "M15 5h6" }, { r: "growX", d: 0.1, o: [15, 8] }],
    ["path", { d: "M15 12h6" }, { r: "growX", d: 0.16, o: [15, 8] }],
    ["path", { d: "M3 19h18" }, { r: "growX", d: 0.2, o: [3, 19] }],
    ["path", { d: "m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12" }, { r: "stamp", o: [7, 8] }],
    ["path", { d: "M3.92 10h6.16" }, { r: "stamp", o: [7, 8] }],
  ],
});
