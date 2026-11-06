import { icon } from "../icon.js";

// Adapted from Tabler Icons "file-scissors" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileScissors = icon("FileScissors", "file-scissors", {
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" }],
    ["path", { d: "M14 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "turn", a: 14, o: [12, 14] }],
    ["path", { d: "M8 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "turn", a: -14, o: [12, 14] }],
    ["path", { d: "M9 17l6 -6" }, { r: "turn", a: -14, o: [12, 14] }],
    ["path", { d: "M15 17l-6 -6" }, { r: "turn", a: 14, o: [12, 14] }],
  ],
});
