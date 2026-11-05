import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "lamp-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LampOff = createIcon("LampOff", "lamp-off", {
  nodes: [
    ["path", { d: "M9 20h6" }],
    ["path", { d: "M12 20v-8" }],
    ["path", { d: "M7.325 7.35l-2.325 4.65h7m4 0h3l-4 -8h-6l-.338 .676" }, { r: "flicker", o: [12, 8] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M12 12v6", fill: "none" }],
    ["path", { d: "M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z" }, { r: "flicker", o: [12, 8] }],
    ["path", { d: "M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
