import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "helmet" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Helmet = createIcon("Helmet", "helmet", {
  nodes: [
    ["path", { d: "M12 4a9 9 0 0 1 5.656 16h-11.312a9 9 0 0 1 5.656 -16" }, { r: "wobble", a: 6, o: [12, 20] }],
    ["path", { d: "M20 9h-8.8a1 1 0 0 0 -.968 1.246c.507 2 1.596 3.418 3.268 4.254c2 1 4.333 1.5 7 1.5" }, { r: "lift", d: 0.1, y: -1, a: -6, o: [11, 9] }],
  ],
});
