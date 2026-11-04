import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "heart-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HeartExclamation = createIcon("HeartExclamation", "heart-exclamation", {
  nodes: [
    ["path", { d: "M15.03 17l-3.03 3l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.922 6.102" }, { r: "beat", d: 0, a: 0.06, o: [12, 12] }],
    ["path", { d: "M19 16v3" }, { r: "shake", d: 0.1, o: [19, 22] }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.25, o: [19, 22] }],
  ],
});
