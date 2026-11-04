import { createIcon } from "../runtime/createIcon.js";

export const Cable = createIcon("Cable", "cable", {
  nodes: [
    ["path", { d: "M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z" }, { r: "swing", a: 10, o: [19, 14] }],
    ["path", { d: "M17 21v-2" }, { r: "swing", a: 10, o: [19, 14] }],
    ["path", { d: "M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10" }, { r: "redraw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M21 21v-2" }, { r: "swing", a: 10, o: [19, 14] }],
    ["path", { d: "M3 5V3" }, { r: "swing", d: 0.1, a: -10, o: [5, 10] }],
    ["path", { d: "M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z" }, { r: "swing", d: 0.1, a: -10, o: [5, 10] }],
    ["path", { d: "M7 5V3" }, { r: "swing", d: 0.1, a: -10, o: [5, 10] }],
  ],
});
