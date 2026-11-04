import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "building-burj-al-arab" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BuildingBurjAlArab = createIcon("BuildingBurjAlArab", "building-burj-al-arab", {
  nodes: [
    ["path", { d: "M3 21h18" }],
    ["path", { d: "M7 21v-18" }],
    ["path", { d: "M7 4c5.675 .908 10 5.613 10 11.28a11 11 0 0 1 -1.605 5.72" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M5 9h12" }, { r: "growX", d: 0.35, o: [7, 9] }],
    ["path", { d: "M7 13h4" }, { r: "growX", d: 0.45, o: [7, 13] }],
    ["path", { d: "M7 17h4" }, { r: "growX", d: 0.55, o: [7, 17] }],
  ],
});
