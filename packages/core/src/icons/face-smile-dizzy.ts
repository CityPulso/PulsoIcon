import { icon } from "../icon.js";

// Adapted from Tabler Icons "mood-smile-dizzy" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceSmileDizzy = icon("FaceSmileDizzy", "face-smile-dizzy", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M14.5 15a3.5 3.5 0 0 1 -5 0" }, { r: "draw", d: 0.2, o: [12, 15.5] }],
    ["path", { d: "M8 9l2 2" }, { r: "spin", a: 180, o: [9, 10] }],
    ["path", { d: "M10 9l-2 2" }, { r: "spin", a: 180, o: [9, 10] }],
    ["path", { d: "M14 9l2 2" }, { r: "spin", a: 180, o: [15, 10] }],
    ["path", { d: "M16 9l-2 2" }, { r: "spin", a: 180, o: [15, 10] }],
  ],
});
