import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "phone-check" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PhoneCheck = createIcon("PhoneCheck", "phone-check", {
  nodes: [
    ["path", { d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" }],
    ["path", { d: "M15 6l2 2l4 -4" }, { r: "draw", d: 0.1 }],
  ],
});
