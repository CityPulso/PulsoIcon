import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "user-circle-minus" (MIT, Copyright (c) 2023 Phosphor Icons).

export const UserCircleMinus = createIcon("UserCircleMinus", "user-circle-minus", {
  nodes: [
    ["path", { d: "M11 4a9 9 0 1 0 9 9" }, { r: "press", a: 0.04, o: [11, 13] }],
    ["circle", { cx: "11", cy: "11", r: "3" }, { r: "float", a: 1.5, o: [11, 11] }],
    ["path", { d: "M5.6 20.2a6 6 0 0 1 10.8 0" }, { r: "rise", d: 0.1, a: 1, o: [11, 18.5] }],
    ["path", { d: "M15.5 5h6" }, { r: "growX", d: 0.15, o: [18.5, 5] }],
  ],
});
