import { icon } from "../icon.js";

// Adapted from Tabler Icons "help-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HelpOff = icon("HelpOff", "help-off", {
  nodes: [
    ["path", { d: "M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" }],
    ["path", { d: "M12 17v.01" }, { r: "pop", d: 0.2, o: [12, 17] }],
    ["path", { d: "M12 13.5a1.5 1.5 0 0 1 .394 -1.1m2.106 -1.9a2.6 2.6 0 0 0 -3.347 -3.361" }, { r: "draw" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }, { r: "draw" }, "line"],
    ["path", { d: "M12 17h.01" }, { r: "pop", d: 0.2, o: [12, 17] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
