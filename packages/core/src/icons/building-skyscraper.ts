import { icon } from "../icon.js";

// Adapted from Tabler Icons "building-skyscraper" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BuildingSkyscraper = icon("BuildingSkyscraper", "building-skyscraper", {
  nodes: [
    ["path", { d: "M3 21l18 0" }],
    ["path", { d: "M5 21v-14l8 -4v18" }],
    ["path", { d: "M19 21v-10l-6 -4" }],
    ["path", { d: "M9 9l0 .01" }, { r: "pop", d: 0.24, o: [9, 9] }],
    ["path", { d: "M9 12l0 .01" }, { r: "pop", d: 0.16, o: [9, 12] }],
    ["path", { d: "M9 15l0 .01" }, { r: "pop", d: 0.08, o: [9, 15] }],
    ["path", { d: "M9 18l0 .01" }, { r: "pop", o: [9, 18] }],
  ],
});
