import { icon } from "../icon.js";

// Solid from Tabler Icons "plus" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Plus = icon("Plus", "plus", {
  nodes: [
    ["path", { d: "M5 12h14" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M12 5v14" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
  solid: [["path", { d: "M12 4a1 1 0 0 1 1 1v6h6a1 1 0 0 1 0 2h-6v6a1 1 0 0 1 -2 0v-6h-6a1 1 0 0 1 0 -2h6v-6a1 1 0 0 1 1 -1", stroke: "none" }, { r: "spin", a: 90, o: [12, 12] }]],
});
