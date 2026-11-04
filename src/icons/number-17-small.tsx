import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "number-17-small" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Number17Small = createIcon("Number17Small", "number-17-small", {
  nodes: [
    ["path", { d: "M8 8h1v8" }, { r: "draw" }],
    ["path", { d: "M13 8h4l-2 8" }, { r: "draw", d: 0.25 }],
  ],
});
