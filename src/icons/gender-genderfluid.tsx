import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "gender-genderfluid" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GenderGenderfluid = createIcon("GenderGenderfluid", "gender-genderfluid", {
  nodes: [
    ["path", { d: "M10 15.464a4 4 0 1 0 4 -6.928a4 4 0 0 0 -4 6.928" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M15.464 14l3 -5.196" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M5.536 15.195l3 -5.196" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M12 12h.01" }, { r: "pop", d: 0.3, o: [12, 12] }],
    ["path", { d: "M9 9l-6 -6" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M5.5 8.5l3 -3" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M21 21l-6 -6" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M17 20l3 -3" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M3 7v-4h4" }, { r: "draw", d: 0.2 }],
  ],
});
