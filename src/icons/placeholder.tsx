import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "placeholder" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Placeholder = createIcon("Placeholder", "placeholder", {
  nodes: [
    ["path", { d: "M10 20.415a8 8 0 1 0 3 -15.415h-3" }, { r: "spin", o: [12, 12.5] }],
    ["path", { d: "M13 8l-3 -3l3 -3" }, { r: "spin", o: [12, 12.5] }],
    ["path", { d: "M7 17l4 -4l-4 -4l-4 4l4 4" }, { r: "pop", d: 0.3, o: [7, 13] }],
  ],
});
