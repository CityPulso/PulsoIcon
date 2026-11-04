import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "automatic-gearbox" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AutomaticGearbox = createIcon("AutomaticGearbox", "automatic-gearbox", {
  nodes: [
    ["path", { d: "M17 17v4h1a2 2 0 1 0 0 -4h-1" }, { r: "pop", d: 0.4, o: [18, 19] }],
    ["path", { d: "M17 11h1.5a1.5 1.5 0 0 0 0 -3h-1.5v5" }, { r: "pop", d: 0.35, o: [18, 10] }],
    ["path", { d: "M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pulse", a: 0.15, o: [5, 5] }],
    ["path", { d: "M5 7v3a1 1 0 0 0 1 1h3v7a1 1 0 0 0 1 1h3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M9 11h4" }, { r: "draw", d: 0.3 }],
  ],
});
