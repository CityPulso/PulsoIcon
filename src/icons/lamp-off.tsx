import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "lamp-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LampOff = createIcon("LampOff", "lamp-off", {
  nodes: [
    ["path", { d: "M9 20h6" }],
    ["path", { d: "M12 20v-8" }],
    ["path", { d: "M7.325 7.35l-2.325 4.65h7m4 0h3l-4 -8h-6l-.338 .676" }, { r: "flicker", o: [12, 8] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
