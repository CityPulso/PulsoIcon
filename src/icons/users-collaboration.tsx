import { createIcon } from "../runtime/createIcon.js";

export const UsersCollaboration = createIcon("UsersCollaboration", "users-collaboration", {
  nodes: [
    ["path", { d: "M12.925 3.047a9 9 0 017.616 6.11" }, { r: "spin", d: 0.05, a: 90, o: [12, 12] }],
    ["path", { d: "M13 22a2 2 0 012-2h4a2 2 0 012 2" }, { r: "float", d: 0.1, a: 1.5, o: [17, 17] }],
    ["path", { d: "M3 12a2 2 0 012-2h4a2 2 0 012 2" }, { r: "float", a: 1.5, o: [7, 7] }],
    ["path", { d: "M3.889 15.9a9 9 0 005.247 4.632" }, { r: "spin", d: 0.05, a: 90, o: [12, 12] }],
    ["circle", { cx: "17", cy: "14", r: "2" }, { r: "float", d: 0.1, a: 1.5, o: [17, 17] }],
    ["circle", { cx: "7", cy: "4", r: "2" }, { r: "float", a: 1.5, o: [7, 7] }],
  ],
});
