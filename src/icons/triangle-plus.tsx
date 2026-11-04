import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "triangle-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TrianglePlus = createIcon("TrianglePlus", "triangle-plus", {
  nodes: [
    [
      "path",
      { d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0v.001" },
      { r: "press", d: 0, a: 0.05, o: [12, 15] },
    ],
    ["path", { d: "M9 13h6" }, { r: "spin", d: 0.1, a: 180, o: [12, 13] }],
    ["path", { d: "M12 10v6" }, { r: "spin", d: 0.1, a: 180, o: [12, 13] }],
  ],
});
