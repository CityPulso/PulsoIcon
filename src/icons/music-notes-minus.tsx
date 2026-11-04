import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "music-notes-minus" (MIT, Copyright (c) 2023 Phosphor Icons).

export const MusicNotesMinus = createIcon("MusicNotesMinus", "music-notes-minus", {
  nodes: [
    ["circle", { cx: "6", cy: "18", r: "3" }, { r: "bounce", d: 0.05, y: -1, a: 1.5, o: [6, 18] }],
    ["circle", { cx: "16", cy: "16", r: "3" }, { r: "bounce", d: 0.15, y: -1, a: 1.5, o: [16, 16] }],
    ["path", { d: "M9 18V6l5-1" }, { r: "bounce", d: 0.05, y: -1, a: 1.5, o: [6, 18] }],
    ["path", { d: "M19 16v-6" }, { r: "bounce", d: 0.15, y: -1, a: 1.5, o: [16, 16] }],
    ["path", { d: "M16 5h6" }, { r: "draw", d: 0.25, o: [19, 5] }],
  ],
});
