import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "gender-femme" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GenderFemme = createIcon("GenderFemme", "gender-femme", {
  nodes: [
    ["path", { d: "M7 9a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" }, { r: "pulse", o: [12, 9] }],
    ["path", { d: "M12 14v7" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M7 18h10" }, { r: "draw", d: 0.25 }],
  ],
});
