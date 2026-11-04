import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "help-triangle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HelpTriangle = createIcon("HelpTriangle", "help-triangle", {
  nodes: [
    ["path", { d: "M12 16v.01" }, { r: "pop", d: 0.3, o: [12, 16] }],
    [
      "path",
      { d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" },
      { r: "tilt", a: 6, o: [12, 20] },
    ],
    ["path", { d: "M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" }, { r: "draw" }],
  ],
});
