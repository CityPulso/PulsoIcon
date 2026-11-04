import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "notches" (MIT, Copyright (c) 2023 Phosphor Icons).

export const Notches = createIcon("Notches", "notches", {
  nodes: [
    ["path", { d: "M20 4 4 20" }, { r: "slide", x: 1, y: 1, a: 1, o: [12, 12] }],
    ["path", { d: "m20 12-8 8" }, { r: "slide", d: 0.08, x: 1, y: 1, a: 1.5, o: [16, 16] }],
  ],
});
