import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "jewish-star" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "jewish-star" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const JewishStar = createIcon("JewishStar", "jewish-star", {
  nodes: [["path", { d: "M12 2l3 5h6l-3 5l3 5h-6l-3 5l-3 -5h-6l3 -5l-3 -5h6l3 -5" }, { r: "spin", d: 0, a: 60, o: [12, 12] }]],
  solid: [
    [
      "path",
      {
        d: "M8.433 6h-5.433l-.114 .006a1 1 0 0 0 -.743 1.508l2.69 4.486l-2.69 4.486l-.054 .1a1 1 0 0 0 .911 1.414h5.434l2.709 4.514l.074 .108a1 1 0 0 0 1.64 -.108l2.708 -4.514h5.435l.114 -.006a1 1 0 0 0 .743 -1.508l-2.691 -4.486l2.691 -4.486l.054 -.1a1 1 0 0 0 -.911 -1.414h-5.434l-2.709 -4.514a1 1 0 0 0 -1.714 0l-2.71 4.514z",
        stroke: "none",
      },
      { r: "spin", d: 0, a: 60, o: [12, 12] },
    ],
  ],
});
