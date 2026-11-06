import { icon } from "../icon.js";

// Adapted from Tabler Icons "mood-crazy-happy" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceCrazyHappy = icon("FaceCrazyHappy", "face-crazy-happy", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M7 8.5l3 3" }, { r: "spin", a: 180, o: [8.5, 10] }],
    ["path", { d: "M7 11.5l3 -3" }, { r: "spin", a: 180, o: [8.5, 10] }],
    ["path", { d: "M14 8.5l3 3" }, { r: "spin", a: 180, o: [15.5, 10] }],
    ["path", { d: "M14 11.5l3 -3" }, { r: "spin", a: 180, o: [15.5, 10] }],
    ["path", { d: "M9.5 15a3.5 3.5 0 0 0 5 0" }, { r: "draw", d: 0.2, o: [12, 15.5] }],
  ],
});
