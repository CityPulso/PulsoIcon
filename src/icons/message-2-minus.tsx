import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "message-2-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Message2Minus = createIcon("Message2Minus", "message-2-minus", {
  nodes: [
    ["path", { d: "M8 9h8" }],
    ["path", { d: "M8 13h6" }],
    ["path", { d: "M12 21l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8" }],
    ["path", { d: "M16 19h6" }, { r: "pop", o: [19, 19] }],
  ],
});
