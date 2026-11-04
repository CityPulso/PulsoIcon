import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "microfrontends" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Microfrontends = createIcon("Microfrontends", "microfrontends", {
  nodes: [
    ["path", { d: "M7.5 7.5l4.5 4.5l4.5 -4.5" }, { r: "draw" }],
    ["path", { d: "M6 16v-4" }, { r: "grow", d: 0.15, o: [6, 12] }],
    ["path", { d: "M18 16v-4" }, { r: "grow", d: 0.15, o: [18, 12] }],
    ["path", { d: "M16 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.1, o: [18, 6] }],
    ["path", { d: "M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.3, o: [18, 18] }],
    ["path", { d: "M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [6, 6] }],
    ["path", { d: "M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.3, o: [6, 18] }],
  ],
});
