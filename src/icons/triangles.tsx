import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "triangles" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Triangles = createIcon("Triangles", "triangles", {
  nodes: [
    [
      "path",
      { d: "M9.974 21h8.052a.975 .975 0 0 0 .81 -1.517l-4.025 -6.048a.973 .973 0 0 0 -1.622 0l-4.025 6.048a.977 .977 0 0 0 .81 1.517" },
      { r: "bounce", d: 0.1, x: 0, y: -1, a: 1.5 },
    ],
    [
      "path",
      { d: "M4.98 16h14.04c.542 0 .98 -.443 .98 -.989a1 1 0 0 0 -.156 -.534l-7.02 -11.023a.974 .974 0 0 0 -1.648 0l-7.02 11.023a1 1 0 0 0 .294 1.366a.973 .973 0 0 0 .53 .157" },
      { r: "bounce", d: 0, x: 0, y: -1, a: 1.5 },
    ],
  ],
});
