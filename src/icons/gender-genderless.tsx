import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "gender-genderless" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GenderGenderless = createIcon("GenderGenderless", "gender-genderless", {
  nodes: [
    ["path", { d: "M12 10a5 5 0 1 1 0 10a5 5 0 0 1 0 -10" }, { r: "pulse", o: [12, 15] }],
    ["path", { d: "M12 10v-7" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M7 15h10" }, { r: "draw", d: 0.2 }],
  ],
});
