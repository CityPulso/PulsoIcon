import { icon } from "../icon.js";

// Adapted from Tabler Icons "car-crash" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CarCrash = icon("CarCrash", "car-crash", {
  nodes: [
    ["path", { d: "M8 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "shake", a: 1 }],
    ["path", { d: "M7 6l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-5m0 -6h8m-6 0v-5m2 0h-4" }, { r: "shake", a: 1 }],
    ["path", { d: "M14 8v-2" }, { r: "pop", d: 0.15, o: [14, 7] }],
    ["path", { d: "M19 12h2" }, { r: "pop", d: 0.2, o: [20, 12] }],
    ["path", { d: "M17.5 15.5l1.5 1.5" }, { r: "pop", d: 0.25, o: [18.25, 16.25] }],
    ["path", { d: "M17.5 8.5l1.5 -1.5" }, { r: "pop", d: 0.25, o: [18.25, 7.75] }],
  ],
});
