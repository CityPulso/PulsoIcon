import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "message-2-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Message2Pause = createIcon("Message2Pause", "message-2-pause", {
  nodes: [
    ["path", { d: "M8 9h8" }],
    ["path", { d: "M8 13h6" }],
    ["path", { d: "M13 20l-1 1l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" }],
    ["path", { d: "M17 17v5" }, { r: "press", a: 0.25, o: [19, 19.5] }],
    ["path", { d: "M21 17v5" }, { r: "press", a: 0.25, o: [19, 19.5] }],
  ],
});
