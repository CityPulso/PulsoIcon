import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "shower" (MIT, Copyright (c) 2023 Phosphor Icons).
export const Shower = createIcon("Shower", "shower", {
  nodes: [
    ["path", { d: "M15.5 6.5 17.5 3H21" }, { r: "press", a: 0.05, o: [21, 3] }],
    ["path", { d: "M15.5 6.5 5 9.5l7 7z" }, { r: "turn", a: 6, o: [17.5, 3] }],
    ["path", { d: "M4 13h.01" }, { r: "drop", d: 0.05, x: -0.7, y: 0.7, a: -2, o: [4, 13] }],
    ["path", { d: "M6.5 15.5h.01" }, { r: "drop", d: 0.15, x: -0.7, y: 0.7, a: -2, o: [6.5, 15.5] }],
    ["path", { d: "M9 18h.01" }, { r: "drop", d: 0.25, x: -0.7, y: 0.7, a: -2, o: [9, 18] }],
    ["path", { d: "M3.5 18.5h.01" }, { r: "drop", d: 0.2, x: -0.7, y: 0.7, a: -2, o: [3.5, 18.5] }],
    ["path", { d: "M6 21h.01" }, { r: "drop", d: 0.3, x: -0.7, y: 0.7, a: -2, o: [6, 21] }],
  ],
});
