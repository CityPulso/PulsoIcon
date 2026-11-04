import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "tip-jar" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TipJar = createIcon("TipJar", "tip-jar", {
  nodes: [
    ["path", { d: "M14 10h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" }, { r: "drop", y: -1, a: 4, o: [12, 13] }],
    ["path", { d: "M12 9v1" }, { r: "drop", y: -1, a: 4, o: [12, 13] }],
    ["path", { d: "M12 16v1" }, { r: "drop", y: -1, a: 4, o: [12, 13] }],
    [
      "path",
      { d: "M17 4v1.882c0 .685 .387 1.312 1 1.618s1 .933 1 1.618v8.882a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-8.882c0 -.685 .387 -1.312 1 -1.618s1 -.933 1 -1.618v-1.882" },
      { r: "press", d: 0.3, a: 0.06, o: [12, 21] },
    ],
    ["path", { d: "M6 4h12l-12 0" }, { r: "press", d: 0.3, a: 0.06, o: [12, 21] }],
  ],
});
