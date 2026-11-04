import { createIcon } from "../runtime/createIcon.js";

export const UserRoundKey = createIcon("UserRoundKey", "user-round-key", {
  nodes: [
    ["path", { d: "M19 11v6" }, { r: "turn", d: 0.1, a: 30, o: [19, 19] }],
    ["path", { d: "M19 13h2" }, { r: "turn", d: 0.1, a: 30, o: [19, 19] }],
    ["path", { d: "M2 21a8 8 0 0 1 12.868-6.349" }, { r: "float", a: 1.5, o: [8.5, 12] }],
    ["circle", { cx: "10", cy: "8", r: "5" }, { r: "float", a: 1.5, o: [8.5, 12] }],
    ["circle", { cx: "19", cy: "19", r: "2" }, { r: "turn", d: 0.1, a: 30, o: [19, 19] }],
  ],
});
