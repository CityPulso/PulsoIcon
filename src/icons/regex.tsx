import { createIcon } from "../runtime/createIcon.js";

export const Regex = createIcon("Regex", "regex", {
  nodes: [
    ["path", { d: "M17 3v10" }, { r: "spin", a: 90, o: [17, 8] }],
    ["path", { d: "m12.67 5.5 8.66 5" }, { r: "spin", a: 90, o: [17, 8] }],
    ["path", { d: "m12.67 10.5 8.66-5" }, { r: "spin", a: 90, o: [17, 8] }],
    ["path", { d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z" }, { r: "pop", d: 0.1, o: [6, 18] }],
  ],
});
