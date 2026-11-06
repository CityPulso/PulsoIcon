import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-gamepad-3" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Gamepad3 = icon("Gamepad3", "gamepad-3", {
  nodes: [
    ["path", { d: "M9 12l-3 -3h-2a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h2l3 -3" }, { r: "press", d: 0.24, a: 0.2, o: [6, 12] }],
    ["path", { d: "M15 12l3 -3h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2l-3 -3" }, { r: "press", d: 0.08, a: 0.2, o: [18, 12] }],
    ["path", { d: "M12 15l-3 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1 -1v-2l-3 -3" }, { r: "press", d: 0.16, a: 0.2, o: [12, 18] }],
    ["path", { d: "M12 9l-3 -3v-2a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v2l-3 3" }, { r: "press", a: 0.2, o: [12, 6] }],
  ],
});
