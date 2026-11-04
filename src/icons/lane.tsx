import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "lane" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Lane = createIcon("Lane", "lane", {
  nodes: [
    ["path", { d: "M4 6v13" }, { r: "grow", o: [4, 19] }],
    ["path", { d: "M20 6v13" }, { r: "grow", d: 0.1, o: [20, 19] }],
  ],
});
