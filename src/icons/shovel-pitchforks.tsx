import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "shovel-pitchforks" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShovelPitchforks = createIcon("ShovelPitchforks", "shovel-pitchforks", {
  nodes: [
    ["path", { d: "M5 3h4" }, { r: "tilt", a: 8, o: [7, 21] }],
    ["path", { d: "M7 3v12" }, { r: "tilt", a: 8, o: [7, 21] }],
    ["path", { d: "M4 15h6v3a3 3 0 0 1 -6 0v-3" }, { r: "tilt", a: 8, o: [7, 21] }],
    ["path", { d: "M14 21v-3a3 3 0 0 1 6 0v3" }, { r: "tilt", d: 0.15, a: -8, o: [17, 21] }],
    ["path", { d: "M17 21v-18" }, { r: "tilt", d: 0.15, a: -8, o: [17, 21] }],
  ],
});
