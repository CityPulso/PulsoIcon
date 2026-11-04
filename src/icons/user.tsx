import { createIcon } from "../runtime/createIcon.js";

export const User = createIcon("User", "user", {
  nodes: [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }, { r: "rise", d: 0.08, a: 1, o: [12, 18] }],
    ["circle", { cx: "12", cy: "7", r: "4" }, { r: "float", a: 2, o: [12, 7] }],
  ],
});
