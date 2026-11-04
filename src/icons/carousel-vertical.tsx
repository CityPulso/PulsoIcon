import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "carousel-vertical" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CarouselVertical = createIcon("CarouselVertical", "carousel-vertical", {
  nodes: [
    ["path", { d: "M19 8v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1" }, { r: "slide", d: 0.05, x: 0, y: -1, a: 1.5 }],
    ["path", { d: "M7 22v-1a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v1" }, { r: "slide", x: 0, y: -1, a: 1.5 }],
    ["path", { d: "M17 2v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 1.5 }],
  ],
});
