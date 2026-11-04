import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "first-aid-kit-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FirstAidKitOff = createIcon("FirstAidKitOff", "first-aid-kit-off", {
  nodes: [
    ["path", { d: "M8.595 4.577a2 2 0 0 1 1.405 -.577h4a2 2 0 0 1 2 2v2" }, { r: "lift", y: -1, a: 1, o: [12, 6] }],
    ["path", { d: "M12 8h6a2 2 0 0 1 2 2v6m-.576 3.405a2 2 0 0 1 -1.424 .595h-12a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" }, { r: "pulse", a: 0.04, o: [12, 14] }],
    ["path", { d: "M10 14h4" }, { r: "pop", d: 0.1, o: [12, 14] }],
    ["path", { d: "M12 12v4" }, { r: "pop", d: 0.1, o: [12, 14] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
