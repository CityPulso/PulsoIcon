import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "login-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Login2 = createIcon("Login2", "login-2", {
  nodes: [
    ["path", { d: "M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" }],
    ["path", { d: "M3 12h13l-3 -3" }, { r: "slide", x: 1, a: 2, o: [9.5, 12] }],
    ["path", { d: "M13 15l3 -3" }, { r: "slide", x: 1, a: 2, o: [9.5, 12] }],
  ],
});
