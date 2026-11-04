import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "person-simple-throw" (MIT, Copyright (c) 2023 Phosphor Icons).

export const PersonSimpleThrow = createIcon("PersonSimpleThrow", "person-simple-throw", {
  nodes: [
    ["circle", { cx: "9", cy: "4", r: "2" }, { r: "wobble", a: 4, o: [11, 14] }],
    ["path", { d: "M11 8.5 12 14" }, { r: "wobble", a: 4, o: [11, 14] }],
    ["path", { d: "m11 8.5-5 2" }, { r: "wobble", a: 4, o: [11, 14] }],
    ["path", { d: "m11 8.5 5 1 2-4" }, { r: "turn", d: 0.05, a: -40, o: [11, 8.5] }],
    ["circle", { cx: "19", cy: "3.5", r: "1.5" }, { r: "turn", d: 0.05, a: -40, o: [11, 8.5] }],
    ["path", { d: "m12 14-4 7" }, { r: "wobble", a: 4, o: [11, 14] }],
    ["path", { d: "m12 14 4 3v4" }, { r: "wobble", a: 4, o: [11, 14] }],
  ],
});
