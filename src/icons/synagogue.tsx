import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "synagogue" (MIT, Copyright (c) 2023 Phosphor Icons).
export const Synagogue = createIcon("Synagogue", "synagogue", {
  nodes: [
    ["path", { d: "M2 21h20" }, { r: "growX", o: [12, 21] }],
    ["path", { d: "M3 21V9l2-3 2 3v12" }, { r: "rise", a: 2, o: [5, 14] }],
    ["path", { d: "M17 21V9l2-3 2 3v12" }, { r: "rise", d: 0.06, a: 2, o: [19, 14] }],
    ["path", { d: "M5 6V3" }, { r: "pop", d: 0.25, o: [5, 4.5] }],
    ["path", { d: "M19 6V3" }, { r: "pop", d: 0.3, o: [19, 4.5] }],
    ["path", { d: "m7 14 5-5 5 5" }, { r: "pop", d: 0.15, o: [12, 11.5] }],
    ["path", { d: "M10 21v-3a2 2 0 0 1 4 0v3" }, { r: "grow", d: 0.2, o: [12, 21] }],
  ],
});
