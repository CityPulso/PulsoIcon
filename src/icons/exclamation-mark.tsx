import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "exclamation-mark" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ExclamationMark = createIcon("ExclamationMark", "exclamation-mark", {
  nodes: [
    ["path", { d: "M12 19v.01" }, { r: "pop", d: 0.3, o: [12, 19] }],
    ["path", { d: "M12 15v-10" }, { r: "draw" }],
  ],
});
