import { icon } from "../icon.js";

// Adapted from Tabler Icons "a-b-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ABOff = icon("ABOff", "a-b-off", {
  text: true,
  nodes: [
    ["path", { d: "M3 16v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" }, { r: "draw" }],
    ["path", { d: "M12 12v6" }, { r: "pop", d: 0.05, o: [12, 12] }],
    ["path", { d: "M12 6v2" }, { r: "pop", d: 0.05, o: [12, 12] }],
    ["path", { d: "M16 8h3a2 2 0 1 1 0 4h-3m3 0a2 2 0 0 1 .83 3.82m-3.83 -3.82v-4" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M3 16v -5.5 a 2.5 2.5 0 0 1 5 0 v 5.5", fill: "none" }, { r: "draw" }],
    ["path", { d: "M8 12h -5", fill: "none" }, { r: "draw" }],
    ["path", { d: "M12 6l0 12", fill: "none" }, { r: "pop", d: 0.05, o: [12, 12] }],
    ["path", { d: "M16 16v -8 h 3 a 2 2 0 0 1 0 4 h -3", fill: "none" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 12a 2 2 0 0 1 0 4 h -3", fill: "none" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
