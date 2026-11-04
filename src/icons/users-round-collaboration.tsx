import { createIcon } from "../runtime/createIcon.js";

export const UsersRoundCollaboration = createIcon("UsersRoundCollaboration", "users-round-collaboration", {
  nodes: [
    ["path", { d: "M20.453 8.911a9 9 0 00-6.696-5.738" }, { r: "spin", d: 0.05, a: 90, o: [12, 12] }],
    ["path", { d: "M21 22a4 4 0 00-8 0" }, { r: "float", d: 0.1, a: 1.5, o: [17, 17] }],
    ["path", { d: "M3 12a4 4 0 017.963-.543" }, { r: "float", a: 1.5, o: [6.981, 7] }],
    ["path", { d: "M3.889 15.9a9 9 0 005.247 4.632" }, { r: "spin", d: 0.05, a: 90, o: [12, 12] }],
    ["circle", { cx: "17", cy: "15", r: "3" }, { r: "float", d: 0.1, a: 1.5, o: [17, 17] }],
    ["circle", { cx: "7", cy: "5", r: "3" }, { r: "float", a: 1.5, o: [6.981, 7] }],
  ],
});
