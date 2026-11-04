import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "yin-yang" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const YinYang = createIcon("YinYang", "yin-yang", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M12 3a4.5 4.5 0 0 0 0 9a4.5 4.5 0 0 1 0 9" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M12 7.5h.01" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M12 16.5h.01" }, { r: "spin", o: [12, 12] }],
  ],
});
