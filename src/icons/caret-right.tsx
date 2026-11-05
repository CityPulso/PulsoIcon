import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "caret-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "caret-right" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CaretRight = createIcon("CaretRight", "caret-right", {
  nodes: [["path", { d: "M10 18l6 -6l-6 -6v12" }, { r: "bounce", x: 1, y: 0, o: [12, 12] }]],
  solid: [
    [
      "path",
      {
        d: "M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z",
        stroke: "none",
      },
      { r: "bounce", x: 1, y: 0, o: [12, 12] },
    ],
  ],
});
