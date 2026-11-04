import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "users-three" (MIT, Copyright (c) 2023 Phosphor Icons).

export const UsersThree = createIcon("UsersThree", "users-three", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "3" }, { r: "float", a: 1.5, o: [12, 12] }],
    ["path", { d: "M5.5 21a6.5 6.5 0 0 1 13 0" }, { r: "rise", d: 0.05, a: 1, o: [12, 19] }],
    ["circle", { cx: "5.5", cy: "6", r: "2.5" }, { r: "float", d: 0.12, a: 1, o: [5.5, 6] }],
    ["path", { d: "M2 14a5 5 0 0 1 4.5-4" }, { r: "float", d: 0.12, a: 1, o: [5.5, 6] }],
    ["circle", { cx: "18.5", cy: "6", r: "2.5" }, { r: "float", d: 0.18, a: 1, o: [18.5, 6] }],
    ["path", { d: "M22 14a5 5 0 0 0-4.5-4" }, { r: "float", d: 0.18, a: 1, o: [18.5, 6] }],
  ],
});
