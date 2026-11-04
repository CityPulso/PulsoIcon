import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "fountain" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Fountain = createIcon("Fountain", "fountain", {
  nodes: [
    ["path", { d: "M9 16v-5a2 2 0 1 0 -4 0" }, { r: "rise", d: 0.12, a: 2 }],
    ["path", { d: "M15 16v-5a2 2 0 1 1 4 0" }, { r: "rise", d: 0.12, a: 2 }],
    ["path", { d: "M12 16v-10a3 3 0 0 1 6 0" }, { r: "rise", a: 2 }],
    ["path", { d: "M6 6a3 3 0 0 1 6 0" }, { r: "rise", a: 2 }],
    ["path", { d: "M3 16h18v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2" }],
  ],
});
