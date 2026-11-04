import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "tags-chevron-down" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TagsChevronDown = createIcon("TagsChevronDown", "tags-chevron-down", {
  nodes: [
    [
      "path",
      { d: "M5 3v13.446c0 .345 .155 .665 .411 .848l6.125 4.375a.78 .78 0 0 0 .928 0l6.125 -4.375a1.04 1.04 0 0 0 .411 -.848v-13.446l-7 5l-7 -5" },
      { r: "slide", d: 0.08, y: 1, a: 1.5 },
    ],
    ["path", { d: "M5 10l6.536 4.669a.78 .78 0 0 0 .928 0l6.536 -4.669" }, { r: "slide", y: 1, a: 1.5 }],
  ],
});
