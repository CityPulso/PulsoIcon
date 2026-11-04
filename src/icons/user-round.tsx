import { createIcon } from "../runtime/createIcon.js";

export const UserRound = createIcon("UserRound", "user-round", {
  nodes: [
    ["circle", { cx: "12", cy: "8", r: "5" }, { r: "float", a: 2, o: [12, 8] }],
    ["path", { d: "M20 21a8 8 0 0 0-16 0" }, { r: "rise", d: 0.08, a: 1, o: [12, 17] }],
  ],
});
