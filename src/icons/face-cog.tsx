import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mood-cog" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceCog = createIcon("FaceCog", "face-cog", {
  nodes: [
    ["path", { d: "M21 12a9 9 0 1 0 -8.983 9" }],
    ["path", { d: "M16.001 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", a: 180, o: [18, 18] }],
    ["path", { d: "M18.001 14.5v1.5" }, { r: "spin", a: 180, o: [18, 18] }],
    ["path", { d: "M18.001 20v1.5" }, { r: "spin", a: 180, o: [18, 18] }],
    ["path", { d: "M21.032 16.25l-1.299 .75" }, { r: "spin", a: 180, o: [18, 18] }],
    ["path", { d: "M16.27 19l-1.3 .75" }, { r: "spin", a: 180, o: [18, 18] }],
    ["path", { d: "M14.97 16.25l1.3 .75" }, { r: "spin", a: 180, o: [18, 18] }],
    ["path", { d: "M19.733 19l1.3 .75" }, { r: "spin", a: 180, o: [18, 18] }],
    ["path", { d: "M9 10h.01" }],
    ["path", { d: "M15 10h.01" }],
    ["path", { d: "M9.5 15c.658 .64 1.56 1 2.5 1" }],
  ],
});
