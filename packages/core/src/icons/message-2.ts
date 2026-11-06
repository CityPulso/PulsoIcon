import { icon } from "../icon.js";

// Adapted from Tabler Icons "message-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Message2 = icon("Message2", "message-2", {
  nodes: [
    ["path", { d: "M8 9h8" }, { r: "growX", d: 0.1, o: [8, 9] }],
    ["path", { d: "M8 13h6" }, { r: "growX", d: 0.2, o: [8, 13] }],
    ["path", { d: "M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3" }, { r: "press", a: 0.05, o: [12, 12] }],
  ],
});
