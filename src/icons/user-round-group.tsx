import { createIcon } from "../runtime/createIcon.js";

export const UserRoundGroup = createIcon("UserRoundGroup", "user-round-group", {
  nodes: [
    ["path", { d: "M17 21a5 5 0 00-10 0" }, { r: "float", a: 1.5, o: [12, 15.5] }],
    ["path", { d: "M22 10.5a3.5 3.5 0 00-5.507-2.868" }, { r: "float", d: 0.1, a: 1.5, o: [19, 6.25] }],
    ["path", { d: "M7.507 7.632A3.5 3.5 0 002 10.5" }, { r: "float", d: 0.2, a: 1.5, o: [5, 6.25] }],
    ["circle", { cx: "12", cy: "13", r: "3" }, { r: "float", a: 1.5, o: [12, 15.5] }],
    ["circle", { cx: "18.5", cy: "4.5", r: "2.5" }, { r: "float", d: 0.1, a: 1.5, o: [19, 6.25] }],
    ["circle", { cx: "5.5", cy: "4.5", r: "2.5" }, { r: "float", d: 0.2, a: 1.5, o: [5, 6.25] }],
  ],
});
