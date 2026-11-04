import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circle-plus-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CirclePlus2 = createIcon("CirclePlus2", "circle-plus-2", {
  nodes: [
    ["path", { d: "M20.985 12.522a9 9 0 1 0 -8.475 8.464" }],
    ["path", { d: "M16 19h6" }, { r: "spin", a: 90, o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "spin", a: 90, o: [19, 19] }],
  ],
});
