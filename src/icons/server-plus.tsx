import { createIcon } from "../runtime/createIcon.js";

export const ServerPlus = createIcon("ServerPlus", "server-plus", {
  nodes: [
    ["path", { d: "M12.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" }, { r: "press", a: 0.04, o: [12, 6] }],
    ["path", { d: "M16 12h6" }, { r: "spin", d: 0.1, a: 90, o: [19, 12] }],
    ["path", { d: "M19 9v6" }, { r: "spin", d: 0.1, a: 90, o: [19, 12] }],
    ["path", { d: "M22 18v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h8.5" }, { r: "press", d: 0.06, a: 0.04, o: [12, 18] }],
    ["path", { d: "M6 18h.01" }, { r: "flicker", d: 0.15, o: [6.005, 12] }],
    ["path", { d: "M6 6h.01" }, { r: "flicker", d: 0.21, o: [6.005, 12] }],
  ],
});
