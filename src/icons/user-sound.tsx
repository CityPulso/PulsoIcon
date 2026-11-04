import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "user-sound" (MIT, Copyright (c) 2023 Phosphor Icons).

export const UserSound = createIcon("UserSound", "user-sound", {
  nodes: [
    ["circle", { cx: "9", cy: "9", r: "4" }, { r: "float", a: 1.5, o: [9, 9] }],
    ["path", { d: "M2.5 21a7 7 0 0 1 13 0" }, { r: "rise", d: 0.08, a: 1, o: [9, 19] }],
    ["path", { d: "M17 6a6 6 0 0 1 0 6" }, { r: "fade", d: 0.1, o: [17.5, 9] }],
    ["path", { d: "M20 3.5a10 10 0 0 1 0 11" }, { r: "fade", d: 0.22, o: [20.5, 9] }],
  ],
});
