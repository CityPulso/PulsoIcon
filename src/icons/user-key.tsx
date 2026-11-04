import { createIcon } from "../runtime/createIcon.js";

export const UserKey = createIcon("UserKey", "user-key", {
  nodes: [
    ["path", { d: "M20 11v6" }, { r: "turn", d: 0.1, a: 30, o: [20, 19] }],
    ["path", { d: "M20 13h2" }, { r: "turn", d: 0.1, a: 30, o: [20, 19] }],
    ["path", { d: "M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" }, { r: "float", a: 1.5, o: [9.036, 12] }],
    ["circle", { cx: "10", cy: "7", r: "4" }, { r: "float", a: 1.5, o: [9.036, 12] }],
    ["circle", { cx: "20", cy: "19", r: "2" }, { r: "turn", d: 0.1, a: 30, o: [20, 19] }],
  ],
});
