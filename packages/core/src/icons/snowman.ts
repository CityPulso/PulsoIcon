import { icon } from "../icon.js";

// Adapted from Tabler Icons "snowman" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Snowman = icon("Snowman", "snowman", {
  nodes: [
    ["path", { d: "M12 3a4 4 0 0 1 2.906 6.75a6 6 0 1 1 -5.81 0a4 4 0 0 1 2.904 -6.75" }, { r: "wobble", d: 0, o: [12, 20] }],
    ["path", { d: "M17.5 11.5l2.5 -1.5" }, { r: "swing", d: 0.1, a: 20, o: [17.5, 11.5] }],
    ["path", { d: "M6.5 11.5l-2.5 -1.5" }, { r: "swing", d: 0.1, a: -20, o: [6.5, 11.5] }],
    ["path", { d: "M12 13h.01" }, { r: "pop", d: 0.2, o: [12, 13] }],
    ["path", { d: "M12 16h.01" }, { r: "pop", d: 0.3, o: [12, 16] }],
  ],
});
