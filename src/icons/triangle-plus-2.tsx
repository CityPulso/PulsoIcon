import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "triangle-plus-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TrianglePlus2 = createIcon("TrianglePlus2", "triangle-plus-2", {
  nodes: [
    ["path", { d: "M18.69 12.027l-5.054 -8.437a1.914 1.914 0 0 0 -3.274 0l-8.105 13.535a1.914 1.914 0 0 0 1.636 2.871h8.107" }],
    ["path", { d: "M16 19h6" }, { r: "spin", a: 90, o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "spin", a: 90, o: [19, 19] }],
  ],
});
