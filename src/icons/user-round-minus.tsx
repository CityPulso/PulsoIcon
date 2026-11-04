import { createIcon } from "../runtime/createIcon.js";

export const UserRoundMinus = createIcon("UserRoundMinus", "user-round-minus", {
  nodes: [
    ["path", { d: "M2 21a8 8 0 0 1 13.292-6" }, { r: "rise", d: 0.05, a: 1, o: [8.646, 17] }],
    ["circle", { cx: "10", cy: "8", r: "5" }, { r: "float", a: 1.5, o: [10, 8] }],
    ["path", { d: "M22 19h-6" }, { r: "growX", d: 0.15, o: [19, 19] }],
  ],
});
