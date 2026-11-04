import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "no-copyright" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const NoCopyright = createIcon("NoCopyright", "no-copyright", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173" }],
    ["path", { d: "M6 6l1.5 1.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M16.5 16.5l1.5 1.5" }, { r: "draw", d: 0.2 }],
  ],
});
