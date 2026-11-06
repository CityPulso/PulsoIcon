import { icon } from "../icon.js";

// Adapted from Tabler Icons "tip-jar-euro" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TipJarEuro = icon("TipJarEuro", "tip-jar-euro", {
  text: true,
  nodes: [
    [
      "path",
      { d: "M17 4v1.882c0 .685 .387 1.312 1 1.618s1 .933 1 1.618v8.882a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-8.882c0 -.685 .387 -1.312 1 -1.618s1 -.933 1 -1.618v-1.882" },
      { r: "press", d: 0.3, a: 0.06, o: [12, 21] },
    ],
    ["path", { d: "M6 4h12l-12 0" }, { r: "press", d: 0.3, a: 0.06, o: [12, 21] }],
    ["path", { d: "M12 13h-3" }, { r: "drop", y: -1, a: 4, o: [12, 13] }],
    ["path", { d: "M14 10.172a3 3 0 1 0 0 5.656" }, { r: "drop", y: -1, a: 4, o: [12, 13] }],
  ],
});
