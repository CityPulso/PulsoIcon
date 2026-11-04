import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circle-open-arrow-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircleOpenArrowUp = createIcon("CircleOpenArrowUp", "circle-open-arrow-up", {
  nodes: [
    ["path", { d: "M15.998 20.066a9 9 0 1 0 -3.998 .934v-13" }, { r: "draw" }],
    ["path", { d: "M16 12l-4 -4l-4 4" }, { r: "slide", d: 0.3, x: 0, y: -1, a: 2.5 }],
  ],
});
