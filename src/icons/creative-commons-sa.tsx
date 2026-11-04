import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "creative-commons-sa" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CreativeCommonsSa = createIcon("CreativeCommonsSa", "creative-commons-sa", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M12 16a4 4 0 1 0 -4 -4v1" }, { r: "spin", a: -360, o: [12, 12] }],
    ["path", { d: "M6 12l2 2l2 -2" }, { r: "spin", a: -360, o: [12, 12] }],
  ],
});
