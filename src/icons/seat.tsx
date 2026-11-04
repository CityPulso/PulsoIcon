import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "seat" (MIT, Copyright (c) 2023 Phosphor Icons).
export const Seat = createIcon("Seat", "seat", {
  nodes: [
    [
      "path",
      { d: "M5.1 5.3A1.8 1.8 0 0 1 6.8 3h1.1a1.8 1.8 0 0 1 1.6 1L10 5.5 8.5 7.5l3.5 6h7a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1h-8.4a2 2 0 0 1-1.9-1.3z" },
      { r: "press", a: 0.08, o: [12, 17] },
    ],
    ["path", { d: "M10 21h10" }, { r: "drawOut", d: 0.1, o: [15, 21] }],
  ],
});
