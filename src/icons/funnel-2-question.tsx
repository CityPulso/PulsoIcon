import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "filter-2-question" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Funnel2Question = createIcon("Funnel2Question", "funnel-2-question", {
  nodes: [
    ["path", { d: "M4 6h16" }],
    ["path", { d: "M6 12h10.5" }],
    ["path", { d: "M9 18h5" }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.3, o: [19, 22] }],
    [
      "path",
      {
        d: "M19 19c.448 -.001 .883 -.153 1.235 -.431c.352 -.278 .6 -.666 .706 -1.101c.105 -.436 .061 -.894 -.125 -1.302c-.186 -.408 -.504 -.742 -.902 -.948c-.398 -.204 -.853 -.267 -1.291 -.179c-.438 .088 -.834 .321 -1.123 .662",
      },
      { r: "draw" },
    ],
  ],
});
