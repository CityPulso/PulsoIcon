import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "message-2-search" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Message2Search = createIcon("Message2Search", "message-2-search", {
  nodes: [
    ["path", { d: "M8 9h8" }],
    ["path", { d: "M8 13h5" }],
    ["path", { d: "M12 21l-.5 -.5l-2.5 -2.5h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" }],
    ["path", { d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "tilt", o: [18, 18] }],
    ["path", { d: "M20.2 20.2l1.8 1.8" }, { r: "tilt", o: [18, 18] }],
  ],
});
