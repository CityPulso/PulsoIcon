import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "irregular-polyhedron-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const IrregularPolyhedronPlus = createIcon("IrregularPolyhedronPlus", "irregular-polyhedron-plus", {
  nodes: [
    [
      "path",
      {
        d: "M18 12l1.752 -6.13a1 1 0 0 0 -.592 -1.205l-6.282 -2.503a2.46 2.46 0 0 0 -1.756 0l-6.282 2.503a1 1 0 0 0 -.592 1.204l1.752 6.131l-1.752 6.13a1 1 0 0 0 .592 1.205l6.282 2.503a2.46 2.46 0 0 0 1.756 0l.221 -.088",
      },
      { r: "wobble", d: 0, o: [12, 12] },
    ],
    ["path", { d: "M4.5 5.5l6.622 2.33a2.35 2.35 0 0 0 1.756 0l6.622 -2.33" }, { r: "wobble", d: 0, o: [12, 12] }],
    ["path", { d: "M6 12l5.21 1.862a2.34 2.34 0 0 0 1.58 0l5.21 -1.862" }, { r: "wobble", d: 0, o: [12, 12] }],
    ["path", { d: "M12 22v-14" }, { r: "wobble", d: 0, o: [12, 12] }],
    ["path", { d: "M16 19h6" }, { r: "spin", d: 0.15, a: 180, o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "spin", d: 0.15, a: 180, o: [19, 19] }],
  ],
});
