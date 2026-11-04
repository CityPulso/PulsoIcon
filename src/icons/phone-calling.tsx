import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "phone-calling" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PhoneCalling = createIcon("PhoneCalling", "phone-calling", {
  nodes: [
    ["path", { d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" }, { r: "ring", a: 8, o: [10, 12] }],
    ["path", { d: "M15 7l0 .01" }, { r: "pop", d: 0.1, o: [15, 7] }],
    ["path", { d: "M18 7l0 .01" }, { r: "pop", d: 0.2, o: [18, 7] }],
    ["path", { d: "M21 7l0 .01" }, { r: "pop", d: 0.3, o: [21, 7] }],
  ],
});
