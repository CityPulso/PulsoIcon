import { icon } from "../icon.js";

// Adapted from Tabler Icons "list-letters" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ListLetters = icon("ListLetters", "list-letters", {
  text: true,
  nodes: [
    ["path", { d: "M11 6h9" }, { r: "growX", d: 0.1, o: [11, 6] }],
    ["path", { d: "M11 12h9" }, { r: "growX", d: 0.18, o: [11, 12] }],
    ["path", { d: "M11 18h9" }, { r: "growX", d: 0.26, o: [11, 18] }],
    ["path", { d: "M4 10v-4.5a1.5 1.5 0 0 1 3 0v4.5" }, { r: "draw" }],
    ["path", { d: "M4 8h3" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M4 20h1.5a1.5 1.5 0 0 0 0 -3h-1.5h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" }, { r: "draw", d: 0.2 }],
  ],
});
