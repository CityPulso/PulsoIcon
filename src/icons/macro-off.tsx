import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "macro-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MacroOff = createIcon("MacroOff", "macro-off", {
  nodes: [
    ["path", { d: "M6 15a6 6 0 0 0 11.47 2.467" }, { r: "sway", a: 4, o: [12, 21] }],
    ["path", { d: "M15.53 15.53a6 6 0 0 0 -3.53 5.47" }, { r: "sway", a: 4, o: [12, 21] }],
    ["path", { d: "M12 21a6 6 0 0 0 -6 -6" }, { r: "sway", a: 4, o: [12, 21] }],
    ["path", { d: "M12 21v-10" }, { r: "grow", o: [12, 21] }],
    ["path", { d: "M10.866 10.87a5.007 5.007 0 0 1 -3.734 -3.723m-.132 -4.147l3 2l2 -2l2 2l3 -2v3a5 5 0 0 1 -2.604 4.389" }, { r: "pop", o: [12, 8] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
