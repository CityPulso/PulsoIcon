import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "viewfinder-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ViewfinderOff = createIcon("ViewfinderOff", "viewfinder-off", {
  nodes: [
    ["path", { d: "M5.65 5.623a9 9 0 1 0 12.71 12.745m1.684 -2.328a9 9 0 0 0 -12.094 -12.08" }, { r: "pulse", a: 0.05, o: [12, 12] }],
    ["path", { d: "M12 3v4" }, { r: "slide", y: 1, a: 1, o: [12, 5] }],
    ["path", { d: "M12 21v-3" }, { r: "slide", y: -1, a: 1, o: [12, 19.5] }],
    ["path", { d: "M3 12h4" }, { r: "slide", x: 1, a: 1, o: [5, 12] }],
    ["path", { d: "M21 12h-3" }, { r: "slide", x: -1, a: 1, o: [19.5, 12] }],
    ["path", { d: "M12 12v.01" }, { r: "pop", d: 0.2, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
