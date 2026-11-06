import { icon } from "../icon.js";

// Adapted from Tabler Icons "circle-plus-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CirclePlusMinus = icon("CirclePlusMinus", "circle-plus-minus", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }, { r: "press", d: 0, a: 0.05, o: [12, 12] }],
    ["path", { d: "M9 10h6" }, { r: "pop", d: 0.1, o: [12, 10] }],
    ["path", { d: "M9 16h6" }, { r: "growX", d: 0.25, o: [12, 16] }],
    ["path", { d: "M12 7v6" }, { r: "pop", d: 0.1, o: [12, 10] }],
  ],
});
