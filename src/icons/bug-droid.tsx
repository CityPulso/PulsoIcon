import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "bug-droid" (MIT, Copyright (c) 2023 Phosphor Icons).

export const BugDroid = createIcon("BugDroid", "bug-droid", {
  nodes: [
    ["path", { d: "M5.5 11a6.5 6.5 0 0 1 13 0v3.5a6.5 6.5 0 0 1-13 0z" }, { r: "bounce", y: -1, a: 1 }],
    ["path", { d: "M5.5 14h13" }, { r: "bounce", y: -1, a: 1 }],
    ["path", { d: "M8.7 5.4 7 3" }, { r: "swing", a: 12, o: [8.7, 5.4] }],
    ["path", { d: "M15.3 5.4 17 3" }, { r: "swing", a: -12, o: [15.3, 5.4] }],
    ["path", { d: "M9.5 10h.01" }, { r: "blink", d: 0.2, o: [12, 10] }],
    ["path", { d: "M14.5 10h.01" }, { r: "blink", d: 0.2, o: [12, 10] }],
  ],
});
