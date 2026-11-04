import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "user-screen" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const UserScreen = createIcon("UserScreen", "user-screen", {
  nodes: [
    ["path", { d: "M19.03 17.818a3 3 0 0 0 1.97 -2.818v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8c0 1.317 .85 2.436 2.03 2.84" }],
    ["path", { d: "M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, { r: "bounce", x: 0, y: -1, a: 1, o: [12, 14] }],
    ["path", { d: "M8 21a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" }, { r: "bounce", d: 0.05, x: 0, y: -1, a: 1, o: [12, 20] }],
  ],
});
